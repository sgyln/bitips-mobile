export function TransitConnector({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-[8px] overflow-clip pl-[24px]">
      <div className="h-[20px] w-[2px] bg-border" aria-hidden />
      <p className="type-label-small whitespace-nowrap text-text-secondary">{label}</p>
    </div>
  );
}
