import { cn } from "@/lib/cn";

type Props = { src?: string; angle?: number; className?: string };

/** Tan gradient tile with optional photo at 60% opacity (as in the Figma "Photo placeholder"). */
export function PhotoPlaceholder({ src, angle = 126.87, className }: Props) {
  return (
    <div
      className={cn("relative shrink-0 overflow-hidden", className)}
      style={{ backgroundImage: `linear-gradient(${angle}deg, rgb(217,201,180) 0%, rgb(184,159,130) 71.429%)` }}
    >
      {src && <img alt="" src={src} className="absolute inset-0 size-full object-cover opacity-60" />}
    </div>
  );
}
