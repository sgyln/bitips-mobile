import { cn } from "@/lib/cn";

type Props = { selected?: boolean; onClick?: () => void; children: React.ReactNode };

export function Chip({ selected, onClick, children }: Props) {
  return (
    <button
      type="button"
      aria-pressed={!!selected}
      onClick={onClick}
      className={cn(
        "type-body-strong shrink-0 cursor-pointer whitespace-nowrap rounded-full border border-solid px-[14px] py-[8px]",
        selected ? "border-action-primary bg-action-primary text-surface-card" : "border-border bg-surface-card text-text-primary",
      )}
    >
      {children}
    </button>
  );
}
