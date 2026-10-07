import { cn } from "@/lib/cn";

type Props = { notchWidth?: number; bodyClassName?: string; children: React.ReactNode };

export function NotchedCard({ notchWidth = 96, bodyClassName, children }: Props) {
  return (
    <div className="flex w-full flex-col items-start overflow-clip">
      <div className="flex h-[24px] w-full items-start justify-end overflow-clip">
        <div className="h-[24px] rounded-t-[8px] bg-bg-secondary" style={{ width: notchWidth }} />
      </div>
      <div className={cn("flex w-full flex-col overflow-clip rounded-tl-[24px] rounded-tr-[8px] rounded-b-[24px] bg-bg-secondary p-[20px]", bodyClassName)}>
        {children}
      </div>
    </div>
  );
}
