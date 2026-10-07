import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = { active: "schedule" | "map"; variant?: "inset" | "overlay"; className?: string };

const items = [
  { key: "schedule", label: "Schedule View", href: "/schedule" },
  { key: "map", label: "Leaflet Map View", href: "/map" },
] as const;

/** `inset` = Schedule screen (p-4, gap-4, 169px items). `overlay` = Map screen (px-4, 171px items, top-aligned). */
export function SegmentedControl({ active, variant = "inset", className }: Props) {
  const inset = variant === "inset";
  return (
    <nav
      aria-label="View"
      className={cn("flex h-[44px] w-full overflow-clip rounded-full bg-bg-secondary", inset ? "gap-[4px] p-[4px]" : "items-start px-[4px]", className)}
    >
      {items.map((i) => (
        <Link
          key={i.key}
          href={i.href}
          aria-current={active === i.key ? "page" : undefined}
          className={cn(
            "type-body-strong flex h-[36px] items-center justify-center whitespace-nowrap rounded-full",
            inset ? "w-[169px]" : "w-[171px]",
            active === i.key ? "bg-action-primary text-surface-card" : "text-text-secondary",
          )}
        >
          {i.label}
        </Link>
      ))}
    </nav>
  );
}
