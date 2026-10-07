export function DeficitToast({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="type-body-strong absolute bottom-[104px] left-[20px] flex h-[44px] w-[350px] cursor-pointer items-center whitespace-nowrap rounded-[16px] bg-badge-estimated-bg pl-[16px] text-left text-accent-deficit"
    >
      {children}
    </button>
  );
}
