import { BottomSheet } from "@/components/map/BottomSheet";
import { MapCanvas } from "@/components/map/MapCanvas";
import { MobileShell } from "@/components/MobileShell";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { photos } from "@/lib/data";

export function MapScreen() {
  return (
    <MobileShell className="h-[844px] overflow-hidden">
      <MapCanvas selected={2} />
      <SegmentedControl active="map" variant="overlay" className="absolute left-[20px] top-[56px] w-[350px]" />
      <BottomSheet
        photo={photos.breakfast}
        title="2 · Public Market Breakfast"
        hours="Opens 6:00 AM – 7:00 PM"
        cost="Admission: Free · Est. meal ₱320"
      />
    </MobileShell>
  );
}
