import { Badge } from "./ui/Badge";
import { PhotoPlaceholder } from "./ui/PhotoPlaceholder";

type Props = { time: string; title: string; price: string; badge: string; photo?: string };

/** Home grid card — 167px wide. */
export function ActivityCard({ time, title, price, badge, photo }: Props) {
  return (
    <a href="#" className="flex w-[167px] flex-col items-start gap-[6px] overflow-clip">
      <PhotoPlaceholder src={photo} angle={138.709} className="h-[110px] w-[167px] rounded-[14px]" />
      <p className="type-label-small whitespace-nowrap text-brand-interactive">{time}</p>
      <p className="type-body-strong w-[167px] text-text-primary">{title}</p>
      <p className="type-body-regular whitespace-nowrap text-text-secondary">{price}</p>
      <Badge kind="admin">{badge}</Badge>
    </a>
  );
}
