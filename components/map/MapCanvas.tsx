import { mapMarkers } from "@/lib/data";
import { cn } from "@/lib/cn";

const H = Array.from({ length: 9 }, (_, i) => 80 + i * 90);   // horizontal tile lines: 80…800
const V = Array.from({ length: 9 }, (_, i) => 40 + i * 48);   // vertical tile lines: 40…424

/** Static stand-in for the Leaflet/OSM canvas, positioned exactly as in the frame. */
export function MapCanvas({ selected = 2 }: { selected?: number }) {
  return (
    <div aria-hidden={false} className="absolute inset-x-0 top-0 h-[844px] overflow-hidden bg-map-land">
      {H.map((t) => <div key={`h${t}`} className="absolute left-0 h-[2px] w-[390px] bg-map-grid" style={{ top: t }} />)}
      {V.map((l) => <div key={`v${l}`} className="absolute top-0 h-[844px] w-[2px] bg-map-grid" style={{ left: l }} />)}
      <div className="absolute left-0 top-0 h-[120px] w-[390px] bg-map-water" />

      {/* Route polyline: frame is 220×170 at (90,210); points are marker centres */}
      <svg className="absolute left-[90px] top-[210px]" width="220" height="170" viewBox="0 0 220 170" fill="none" overflow="visible" aria-hidden>
        <polyline points="0,170 70,90 160,120 220,0" stroke="#3d6473" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      </svg>

      {mapMarkers.map((m) => (
        <button
          key={m.n}
          type="button"
          aria-label={`Stop ${m.n}`}
          aria-pressed={selected === m.n}
          className={cn(
            "type-body-strong absolute flex size-[32px] cursor-pointer items-center justify-center rounded-full border-[3px] border-solid border-surface-card bg-accent-deficit text-surface-card",
          )}
          style={{ left: m.left, top: m.top }}
        >
          {m.n}
        </button>
      ))}
      <p className="type-label-small absolute left-[20px] top-[505px] whitespace-nowrap text-text-secondary">© OpenStreetMap contributors</p>
    </div>
  );
}
