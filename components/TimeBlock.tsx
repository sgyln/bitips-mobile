import { cn } from "@/lib/cn";
import type { Block } from "@/lib/data";
import { ActivityRow } from "./ActivityRow";

const bg = { morning: "bg-time-morning", afternoon: "bg-time-afternoon", evening: "bg-time-evening" } as const;

export function TimeBlock({ block }: { block: Block }) {
  return (
    <section aria-label={block.label} className="flex w-full flex-col items-start overflow-clip">
      <div className="flex items-start">
        <h2 className={cn("type-label-small rounded-t-[10px] px-[14px] py-[4px] text-text-primary", bg[block.period])}>{block.label}</h2>
      </div>
      <div className={cn("flex w-full flex-col gap-[10px] overflow-clip rounded-b-[16px] rounded-tr-[16px] p-[12px]", bg[block.period])}>
        {block.activities.map((a) => <ActivityRow key={a.title} a={a} />)}
      </div>
    </section>
  );
}
