import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Official TruckCenter logo (isotipo + wordmark + "BY HQ GROUP").
 * Every placement renders through this component; size it with className.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Image
      src="/branding/truckcenter-logo.png"
      alt="Truckcenter by HQ Group"
      width={1774}
      height={887}
      className={cn("h-auto w-40 select-none", className)}
    />
  );
}
