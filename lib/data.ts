// Placeholder content copied verbatim from the Figma frames.
// Photo URLs are Figma MCP asset links that expire after 7 days — replace with real images.
export const photos = {
  silay: "https://www.figma.com/api/mcp/asset/a5e2bf2b-cbb9-4d60-9f02-6fce2773e545.png",
  church: "https://www.figma.com/api/mcp/asset/e1170cdf-5d54-47b0-879b-b29116f7c82e.png",
  breakfast: "https://www.figma.com/api/mcp/asset/b13e0a2e-19d3-4968-aeaf-6cbb52392519.png",
  museum: "https://www.figma.com/api/mcp/asset/e2c2e0da-e6b0-4602-b284-71b7e8e9f45e.png",
  seafood: "https://www.figma.com/api/mcp/asset/45a4f5a7-b6c3-4495-b429-76b0020efa83.png",
  mapPoi: "https://www.figma.com/api/mcp/asset/95882355-c380-49c7-9e90-e030fb5f044f.png",
};

export const dates = [
  { day: "Mon", date: 12 }, { day: "Tue", date: 13 }, { day: "Wed", date: 14 },
  { day: "Thu", date: 15 }, { day: "Fri", date: 16 }, { day: "Sat", date: 17 }, { day: "Sun", date: 18 },
];

export const filters = ["All", "🏛️ Heritage", "🍲 Food Crawl", "🌿 Nature"];

export const recommended = [
  { time: "10:00 AM", title: "Silay Heritage ", price: "From ₱150 / guest", badge: "Admin", photo: photos.silay },
  { time: "10:00 AM", title: "Public Market Food Crawl", price: "From ₱320 / guest", badge: "Admin" },
];

export type BadgeKind = "admin" | "estimated" | "live" | "cached";
export type Activity = { time: string; title: string; cost: string; badge: { kind: BadgeKind; label: string }; photo: string };
export type Block = { period: "morning" | "afternoon" | "evening"; label: string; activities: Activity[]; transitAfter?: string };

export const schedule: Block[] = [
  {
    period: "morning", label: "Morning", transitAfter: "🚌 Jeepney · 15 min · ₱13",
    activities: [
      { time: "8:30 AM", title: "Heritage Church Visit", cost: "₱0", badge: { kind: "admin", label: "Admin-Maintained" }, photo: photos.church },
      { time: "10:00 AM", title: "Public Market Breakfast", cost: "₱320", badge: { kind: "estimated", label: "Estimated" }, photo: photos.breakfast },
    ],
  },
  {
    period: "afternoon", label: "Afternoon", transitAfter: "🚌 Jeepney · 15 min · ₱13",
    activities: [{ time: "1:00 PM", title: "Sugar Museum Tour", cost: "₱150", badge: { kind: "live", label: "Live" }, photo: photos.museum }],
  },
  {
    period: "evening", label: "Evening",
    activities: [{ time: "6:30 PM", title: "Seaside Seafood Dinner", cost: "₱780", badge: { kind: "cached", label: "Cached" }, photo: photos.seafood }],
  },
];

export const mapMarkers = [
  { n: 1, left: 74, top: 364 }, { n: 2, left: 144, top: 284 }, { n: 3, left: 234, top: 314 }, { n: 4, left: 294, top: 194 },
];
