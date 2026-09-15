-- ============================================================
-- 037_ai_custom_provider.sql — third AI provider: a self-hosted
-- "custom" agent reachable over HTTP.
--
-- Lets an account point the AI reply assistant at their own service
-- (e.g. a bring-your-own agent with its own model, tools, and
-- knowledge base) instead of calling OpenAI/Anthropic directly. wacrm
-- still owns sending the WhatsApp message and the auto-reply/handoff
-- bookkeeping (migration 029) — only where the reply text comes from
-- changes.
--
-- `custom_endpoint_url` is the base URL of the account's agent; wacrm
-- POSTs to `{custom_endpoint_url}/api/chat`. `api_key` (already
-- NOT NULL, AES-256-GCM-encrypted) is reused as an optional bearer
-- secret for that call rather than a provider API key — the settings
-- UI relabels the field for this provider.
--
-- Idempotent — safe to run multiple times.
-- ============================================================

ALTER TABLE ai_configs DROP CONSTRAINT IF EXISTS ai_configs_provider_check;
ALTER TABLE ai_configs ADD CONSTRAINT ai_configs_provider_check
  CHECK (provider IN ('openai', 'anthropic', 'custom'));

ALTER TABLE ai_configs ADD COLUMN IF NOT EXISTS custom_endpoint_url text;
