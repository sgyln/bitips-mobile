"use client";

import Link from "next/link";
import { useState } from "react";
import { ActivityCard } from "@/components/ActivityCard";
import { FloatingNav } from "@/components/FloatingNav";
import { MobileShell } from "@/components/MobileShell";
import { PersonIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { DateCapsule } from "@/components/ui/DateCapsule";
import { NotchedCard } from "@/components/ui/NotchedCard";
import { dates, filters, recommended } from "@/lib/data";

export function HomeScreen() {
  const [date, setDate] = useState(13);
  const [filter, setFilter] = useState("All");

  return (
    <MobileShell className="flex flex-col items-start gap-[16px] px-[20px] pb-[24px] pt-[56px]">
      <header className="flex h-[44px] w-full items-center justify-between overflow-clip">
        <div className="flex flex-col whitespace-nowrap">
          <p className="type-title-medium text-text-primary">Hi, Traveler 👋</p>
          <p className="type-body-regular text-text-secondary">Where shall we take you next?</p>
        </div>
        <Link
          href="/profile"
          aria-label="Profile"
          className="flex size-[36px] shrink-0 items-center justify-center rounded-full border border-solid border-border bg-bg-secondary text-text-secondary"
        >
          <PersonIcon className="size-[20px]" />
        </Link>
      </header>

      {/* Date strip bleeds off the right edge, as in the frame */}
      <div role="group" aria-label="Trip dates" className="no-scrollbar -mr-[20px] flex h-[64px] w-[calc(100%+20px)] items-start gap-[8px] overflow-x-auto whitespace-nowrap pr-[20px]">
        {dates.map((d) => (
          <DateCapsule key={d.date} {...d} selected={date === d.date} onClick={() => setDate(d.date)} />
        ))}
      </div>

      <NotchedCard notchWidth={96} bodyClassName="gap-[8px]">
        <p className="type-label-small whitespace-nowrap text-text-secondary">Trip Overview</p>
        <p className="whitespace-nowrap text-[36px] font-bold leading-[52px] tracking-[-1px] text-text-primary">₱18,450.00</p>
        <p className="type-body-regular h-[40px] w-[315px] text-text-secondary">Total Budget: ₱22,000.00 • ₱3,550 Remaining Balance</p>
        <Button className="h-[44px] w-[160px]">{"Adjust Budget >"}</Button>
      </NotchedCard>

      <h2 className="type-title-medium h-[24px] whitespace-nowrap text-text-primary">
        <a href="#">{"Recommended for you >"}</a>
      </h2>

      <div role="group" aria-label="Filters" className="no-scrollbar -mr-[20px] flex w-[calc(100%+20px)] gap-[8px] overflow-x-auto pr-[20px]">
        {filters.map((f) => (
          <Chip key={f} selected={filter === f} onClick={() => setFilter(f)}>{f}</Chip>
        ))}
      </div>

      <div className="flex w-full items-start gap-[16px]">
        {recommended.map((r) => <ActivityCard key={r.title} {...r} />)}
      </div>

      <FloatingNav />
    </MobileShell>
  );
}
