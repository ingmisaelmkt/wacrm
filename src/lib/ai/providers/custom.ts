import { AiError, type ProviderResult } from '../types'
import { providerHttpError, toNetworkError } from './shared'

export interface CustomProviderArgs {
  /** Base URL of the account's agent — wacrm POSTs to `{endpointUrl}/api/chat`. */
  endpointUrl: string
  /** Optional bearer secret (the account's `api_key`, reused for this
   *  provider as a shared secret rather than a real provider key). */
  apiKey: string
  /** E.164 phone number of the customer this turn is for. */
  phoneNumber: string
  /** The latest customer message — the account's agent owns its own
   *  conversation memory/history, so only the newest turn is sent. */
  message: string
  timeoutMs: number
}

interface CustomChatResponse {
  status?: string
  response?: string
}

/**
 * Call an account's own agent as a chat microservice:
 * `POST {endpointUrl}/api/chat` with `{ phone_number, message }`,
 * expecting back `{ status: 'success', response: '<reply text>' }`.
 * Unlike the OpenAI/Anthropic adapters this ignores `systemPrompt` and
 * `messages` history — the agent is expected to own its own prompt,
 * tools, and per-contact memory (keyed by phone number) — see
 * `buildSystemPrompt`'s callers, which skip that plumbing for this
 * provider.
 */
export async function generateCustom(args: CustomProviderArgs): Promise<ProviderResult> {
  const { endpointUrl, apiKey, phoneNumber, message, timeoutMs } = args

  const url = `${endpointUrl.replace(/\/+$/, '')}/api/chat`

  let res: Response
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify({ phone_number: phoneNumber, message }),
      signal: AbortSignal.timeout(timeoutMs),
    })
  } catch (err) {
    throw toNetworkError(err)
  }

  if (!res.ok) {
    throw await providerHttpError('Custom agent', res)
  }

  const data = (await res.json().catch(() => null)) as CustomChatResponse | null
  const text = data?.response
  if (!text || typeof text !== 'string' || !text.trim()) {
    throw new AiError('Custom agent returned an empty response.', {
      code: 'empty_response',
    })
  }

  // The agent doesn't report token usage — it's not billed per-token
  // through wacrm's BYO-key model, so there's nothing to log.
  return { text, usage: null }
}
