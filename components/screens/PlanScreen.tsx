"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MobileShell } from "@/components/MobileShell";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { NotchedCard } from "@/components/ui/NotchedCard";
import { Stepper } from "@/components/ui/Stepper";

export function PlanScreen() {
  const router = useRouter();
  const [headcount, setHeadcount] = useState(2);

  return (
    <MobileShell className="flex flex-col items-start gap-[16px] px-[20px] pb-[24px] pt-[56px]">
      <h1 className="type-headline-medium whitespace-nowrap text-text-primary">Plan a New Trip</h1>

      <NotchedCard notchWidth={88} bodyClassName="gap-[12px]">
        <Field id="title" label="Trip Title" defaultValue="Weekend Heritage Escape" />
        <Field id="origin" label="Origin" defaultValue="Manila" />
        {/* Picker-style fields: wire onActivate to the M-03a / M-03b bottom sheets */}
        <Field id="destination" label="Destination  [Pilot Destination]" labelPreserveSpace defaultValue="Bacolod, Negros Occidental" onActivate={() => {}} />
        <Field id="dates" label="Date Range" defaultValue="Nov 14 – Nov 16, 2026" onActivate={() => {}} />

        <div className="flex h-[44px] w-full items-center justify-between overflow-clip">
          <div className="type-label-small flex flex-col whitespace-nowrap text-text-secondary">
            <p>Headcount</p>
            <p>Room sleeps up to 4 guests</p>
          </div>
          <Stepper value={headcount} onChange={setHeadcount} />
        </div>

        <Field id="budget" label="Total Budget (PHP)" inputMode="decimal" defaultValue="₱22,000.00" />
      </NotchedCard>

      <Button className="absolute bottom-[24px] left-[20px] h-[52px] w-[350px]" onClick={() => router.push("/schedule")}>
        Generate Budget-Validated Itinerary
      </Button>
    </MobileShell>
  );
}
