import { BudgetDock } from "@/components/BudgetDock";
import { MobileShell } from "@/components/MobileShell";
import { TimeBlock } from "@/components/TimeBlock";
import { DeficitToast } from "@/components/Toast";
import { TransitConnector } from "@/components/TransitConnector";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { schedule } from "@/lib/data";

export function ScheduleScreen() {
  return (
    <MobileShell className="flex flex-col items-start gap-[12px] px-[20px] pb-[24px] pt-[56px]">
      <SegmentedControl active="schedule" variant="inset" />
      {schedule.map((b) => (
        <div key={b.period} className="flex w-full flex-col items-start gap-[12px]">
          <TimeBlock block={b} />
          {b.transitAfter && <TransitConnector label={b.transitAfter} />}
        </div>
      ))}
      <DeficitToast>Over budget by ₱1,200 — tap to optimize</DeficitToast>
      <BudgetDock remaining="₱3,550" />
    </MobileShell>
  );
}
