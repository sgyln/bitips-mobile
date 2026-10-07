import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "dark" | "light" };

/** Pill button. Heights/widths are set by the caller (44/48/52 in the design). */
export function Button({ variant = "dark", className, ...rest }: Props) {
  return (
    <button
      type="button"
      className={cn(
        "type-body-strong flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full",
        variant === "dark" ? "bg-action-primary text-surface-card" : "bg-surface-card text-text-primary",
        className,
      )}
      {...rest}
    />
  );
}
