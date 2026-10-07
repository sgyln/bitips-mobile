type Props = { value: number; min?: number; max?: number; onChange: (v: number) => void };

const step = "type-body-strong flex size-[32px] cursor-pointer items-center justify-center rounded-full border border-solid border-border bg-surface-card text-text-primary";

export function Stepper({ value, min = 1, max = 4, onChange }: Props) {
  return (
    <div className="flex items-center gap-[12px]">
      <button type="button" aria-label="Decrease headcount" className={step} disabled={value <= min} onClick={() => onChange(value - 1)}>−</button>
      <span className="type-title-medium text-text-primary" aria-live="polite">{value}</span>
      <button type="button" aria-label="Increase headcount" className={step} disabled={value >= max} onClick={() => onChange(value + 1)}>+</button>
    </div>
  );
}
