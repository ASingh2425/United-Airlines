export interface MetricItem {
  label: string;
  value: string;
  change: string;
  detail: string;
  sourceId: string;
}

export interface HubSnapshot {
  code: string;
  city: string;
  role: string;
  dailyDepartures: string;
  destinations: string;
  coordinates: { x: number; y: number }; // Percentage on schematic US/Global map
  specialization: string;
}

export const COMPANY_OVERVIEW = {
  title: "United Airlines Holdings, Inc.",
  foundedYear: "1926",
  headquarters: "Willis Tower, Chicago, Illinois, USA",
  ceo: "Scott Kirby (Chief Executive Officer)",
  alliance: "Star Alliance (Founding Member, 1997)",
  reportPeriod: "October 2026 Academic Term Study (FY2025 Financial Baseline)",
  centralQuestion:
    "How does United Airlines coordinate and control vast operational scale across planning, organizing, staffing, leading, and controlling amidst systemic industry volatility?",
  executiveSummary:
    "United Airlines is one of the world's largest commercial airline operators, managing complex global flight networks, tens of thousands of safety-critical personnel, and capital-intensive aerospace fleets. This comprehensive management study examines how classical and contemporary management theory—Planning, Organizing, Staffing, Leading, and Controlling—manifests within a high-reliability, asset-heavy, regulated network industry.",
  
  keyMetrics: [
    {
      label: "Total Operating Revenue",
      value: "$59.070 B",
      change: "FY2025 Audited",
      detail: "FY2025 audited operating revenue: $53.438B passenger, $1.779B cargo, $3.853B other",
      sourceId: "sec-10k-2025",
    },
    {
      label: "Operating Income",
      value: "$4.716 B",
      change: "8.0% Margin",
      detail: "FY2025 operating income after $54.354B in operating expenses",
      sourceId: "sec-10k-2025",
    },
    {
      label: "Net Income",
      value: "$3.355 B",
      change: "5.7% Margin",
      detail: "Consolidated net profit for FY2025 reported in audited annual financial statements",
      sourceId: "sec-10k-2025",
    },
    {
      label: "Active Mainline Fleet",
      value: "950+ Jets",
      change: "Fleet Capacity",
      detail: "Mainline aircraft in active service with forward delivery commitments under United Next",
      sourceId: "united-next-2023",
    },
    {
      label: "Worldwide Headcount",
      value: "~103,000",
      change: "Labor Force",
      detail: "Total personnel; approx. 82–84% representation across organized collective bargaining units",
      sourceId: "sec-10k-2025",
    },
    {
      label: "Network Flight Volume",
      value: "~4,000–4,500",
      change: "Daily Scheduled",
      detail: "Peak daily flights system-wide (mainline plus regional partners) across ~350+ destinations",
      sourceId: "bts-transtats-2024",
    },
  ] as MetricItem[],

  primaryHubs: [
    {
      code: "ORD",
      city: "Chicago (O'Hare)",
      role: "Global Headquarters & Mid-Continent Super-Hub",
      dailyDepartures: "~500–550 (peak)",
      destinations: "~200+ destinations",
      coordinates: { x: 57, y: 35 },
      specialization: "Dual domestic trunk feeder and transatlantic connecting nexus",
    },
    {
      code: "DEN",
      city: "Denver International",
      role: "Primary Mountain & West-Central Flow Hub",
      dailyDepartures: "~450–500 (peak)",
      destinations: "~170+ destinations",
      coordinates: { x: 40, y: 44 },
      specialization: "High-volume domestic connecting bank and mountain-west geographic funnel",
    },
    {
      code: "IAH",
      city: "Houston (George Bush)",
      role: "Latin America & Caribbean Gateway",
      dailyDepartures: "~400–430 (peak)",
      destinations: "~150+ destinations",
      coordinates: { x: 50, y: 78 },
      specialization: "South America, Central America, and Southern U.S. corporate travel gateway",
    },
    {
      code: "EWR",
      city: "New York / Newark",
      role: "Premier Transatlantic & European Gateway",
      dailyDepartures: "~380–420 (peak)",
      destinations: "~150+ destinations",
      coordinates: { x: 84, y: 34 },
      specialization: "High-yield business travel, transcontinental trunk routes, and European nonstop banking",
    },
    {
      code: "SFO",
      city: "San Francisco",
      role: "Primary Transpacific & Asia-Pacific Gateway",
      dailyDepartures: "~280–320 (peak)",
      destinations: "~120+ destinations",
      coordinates: { x: 14, y: 42 },
      specialization: "Transpacific long-haul routes (Japan, Australia, Singapore) and West Coast traffic",
    },
    {
      code: "IAD",
      city: "Washington Dulles",
      role: "Capital Gateway & Transatlantic / African Gateway",
      dailyDepartures: "~220–250 (peak)",
      destinations: "~100+ destinations",
      coordinates: { x: 79, y: 43 },
      specialization: "Government, diplomatic corridors, transatlantic connections, and African services",
    },
    {
      code: "LAX",
      city: "Los Angeles",
      role: "Southern California & Transpacific Hub",
      dailyDepartures: "~170–190 (peak)",
      destinations: "~70+ destinations",
      coordinates: { x: 18, y: 62 },
      specialization: "High-yield point-to-point travel, Hawaii, Australia, and Pacific Rim business corridors",
    },
  ] as HubSnapshot[],
};
