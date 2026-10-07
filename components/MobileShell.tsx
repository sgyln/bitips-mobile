import { cn } from "@/lib/cn";

/** 390 × 844 frame. Absolute children are anchored to the frame like in Figma. */
export function MobileShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <main className={cn("relative mx-auto min-h-[844px] w-full max-w-[390px] bg-bg-primary", className)}>
      {children}
    </main>
  );
}
