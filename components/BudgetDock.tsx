import { Button } from "./ui/Button";

/** Bottom Floating Dock — 350 × 64, bottom 24. */
export function BudgetDock({ remaining, onCheckout }: { remaining: string; onCheckout?: () => void }) {
  return (
    <div className="absolute bottom-[24px] left-[20px] flex h-[64px] w-[350px] items-center justify-between overflow-clip rounded-full bg-action-primary pl-[20px] pr-[8px]">
      <div className="flex flex-col whitespace-nowrap font-medium">
        <p className="type-label-small text-border">Remaining</p>
        <p className="type-title-medium text-surface-card">{remaining}</p>
      </div>
      <Button variant="light" className="h-[48px] w-[120px]" onClick={onCheckout}>Checkout</Button>
    </div>
  );
}
