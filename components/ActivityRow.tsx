import type { Activity } from "@/lib/data";
import { Badge } from "./ui/Badge";
import { PhotoPlaceholder } from "./ui/PhotoPlaceholder";

export function ActivityRow({ a, onSwap }: { a: Activity; onSwap?: () => void }) {
  return (
    <div className="flex h-[64px] w-full items-center gap-[10px] overflow-clip rounded-[14px] bg-surface-card p-[8px]">
      <PhotoPlaceholder src={a.photo} className="size-[48px] rounded-[10px]" />
      <div className="flex flex-col items-start overflow-clip">
        <p className="type-label-small whitespace-nowrap text-brand-interactive">{a.time}</p>
        <p className="whitespace-nowrap text-[13px] font-semibold leading-[20px] text-text-primary">{a.title}</p>
        <div className="flex items-start gap-[6px]">
          <span className="type-label-small whitespace-nowrap text-text-secondary">{a.cost}</span>
          <Badge kind={a.badge.kind}>{a.badge.label}</Badge>
        </div>
      </div>
      <button
        type="button"
        onClick={onSwap}
        className="type-label-small shrink-0 cursor-pointer whitespace-nowrap rounded-full bg-bg-secondary px-[10px] py-[4px] text-text-primary"
      >
        Swap
      </button>
    </div>
  );
}
