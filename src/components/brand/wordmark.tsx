import { cn } from "@/lib/utils";

/**
 * TruckCenter wordmark, per the official brandbook: Montserrat 700,
 * "Truck" in the foreground color and "Center" in the brand magenta,
 * set tight. Rendered as text rather than an image file so it stays
 * sharp at any size and follows the light/dark theme automatically.
 *
 * To switch to an official logo image later, replace the markup here —
 * every placement (sidebar, login) renders through this one component.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-brand font-bold tracking-tight text-foreground select-none",
        className,
      )}
    >
      Truck<span className="text-primary">Center</span>
    </span>
  );
}
