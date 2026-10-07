import { cn } from "@/lib/cn";
import type { BadgeKind } from "@/lib/data";

const styles: Record<BadgeKind, string> = {
  admin: "bg-bg-secondary text-text-secondary",
  estimated: "bg-badge-estimated-bg text-badge-estimated-fg",
  live: "bg-time-evening text-success",
  cached: "bg-time-afternoon text-brand-interactive",
};

export function Badge({ kind, children }: { kind: BadgeKind; children: React.ReactNode }) {
  return (
    <span className={cn("type-label-small inline-flex whitespace-nowrap rounded-full px-[10px] py-[3px]", styles[kind])}>
      {children}
    </span>
  );
}
