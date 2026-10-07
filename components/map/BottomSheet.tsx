import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { PhotoPlaceholder } from "../ui/PhotoPlaceholder";

type Props = { photo?: string; title: string; hours: string; cost: string; onSwap?: () => void };

/** Bottom Sheet (35%) — 295px tall, anchored to the bottom of the frame. */
export function BottomSheet({ photo, title, hours, cost, onSwap }: Props) {
  return (
    <section className="absolute inset-x-0 bottom-0 flex h-[295px] flex-col items-start gap-[12px] overflow-clip rounded-t-[32px] bg-bg-primary p-[20px] shadow-sheet">
      <div className="h-[4px] w-[40px] rounded-[2px] bg-border" aria-hidden />
      <div className="flex items-start gap-[12px]">
        <PhotoPlaceholder src={photo} className="size-[88px] rounded-[14px]" />
        <div className="flex flex-col items-start gap-[4px] overflow-clip">
          <h2 className="type-title-medium whitespace-nowrap text-text-primary">{title}</h2>
          <p className="type-body-regular whitespace-nowrap text-text-secondary">{hours}</p>
          <p className="type-body-regular whitespace-nowrap text-text-secondary">{cost}</p>
          <Badge kind="estimated">Estimated</Badge>
        </div>
      </div>
      <Button className="h-[48px] w-full" onClick={onSwap}>Swap</Button>
    </section>
  );
}
