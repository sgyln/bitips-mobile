import { cn } from "@/lib/cn";
import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & { label: string; id: string; labelPreserveSpace?: boolean; onActivate?: () => void };

/** Label + 44px white input. Pass `onActivate` for the picker-style fields (destination, date range). */
export function Field({ label, id, labelPreserveSpace, onActivate, className, ...rest }: Props) {
  return (
    <div className="flex w-full flex-col gap-[4px]">
      <label htmlFor={id} className={cn("type-label-small text-text-secondary", labelPreserveSpace ? "whitespace-pre" : "whitespace-nowrap")}>
        {label}
      </label>
      <input
        id={id}
        readOnly={!!onActivate}
        onClick={onActivate}
        className={cn(
          "type-body-regular h-[44px] w-full rounded-[14px] border border-solid border-border bg-surface-card px-[14px] py-[12px] text-text-primary outline-none",
          onActivate && "cursor-pointer",
          className,
        )}
        {...rest}
      />
    </div>
  );
}
