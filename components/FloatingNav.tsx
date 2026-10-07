import Link from "next/link";
import { BriefcaseIcon, HomeIcon, PlusIcon } from "./icons";

/** Floating Capsule Dock — 260 × 56, left 60, bottom 20. */
export function FloatingNav() {
  return (
    <nav
      aria-label="Primary"
      className="absolute bottom-[20px] left-[60px] flex h-[56px] w-[260px] items-center justify-between rounded-full bg-action-primary px-[24px] text-surface-card"
    >
      <Link href="/" aria-label="Home"><HomeIcon /></Link>
      <Link href="/plan" aria-label="Plan a new trip" className="flex size-[40px] items-center justify-center rounded-full bg-highlight">
        <PlusIcon />
      </Link>
      <Link href="/schedule" aria-label="My trips"><BriefcaseIcon /></Link>
    </nav>
  );
}
