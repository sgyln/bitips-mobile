import { cn } from "@/lib/cn";

type Props = { day: string; date: number; selected?: boolean; onClick?: () => void };

export function DateCapsule({ day, date, selected, onClick }: Props) {
  return (
    <button
      type="button"
      aria-pressed={!!selected}
      onClick={onClick}
      className={cn(
        "flex shrink-0 cursor-pointer flex-col items-center gap-[2px] rounded-full px-[14px] py-[10px]",
        selected ? "bg-highlight text-surface-card" : "bg-bg-secondary text-text-secondary",
      )}
    >
      <span className="type-label-small">{day}</span>
      <span className="type-body-strong">{date}</span>
    </button>
  );
}
