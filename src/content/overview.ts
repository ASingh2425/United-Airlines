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
  ceo: "Scott Kirby (CEO since May 2020)",
  alliance: "Star Alliance (Founding Member, 1997)",
  reportPeriod: "October 2026 Academic Term Study",
  centralQuestion:
    "How does United Airlines coordinate and control vast operational scale across planning, organizing, staffing, leading, and controlling amidst systemic industry volatility?",
  executiveSummary:
    "United Airlines is one of the world's largest commercial airline operators, managing complex global flight networks, tens of thousands of safety-critical personnel, and capital-intensive aerospace fleets. This comprehensive management study examines how classical and contemporary management theory—Planning, Organizing, Staffing, Leading, and Controlling—manifests within a high-reliability, asset-heavy, regulated network industry.",
  
  keyMetrics: [
    {
      label: "Total Operating Revenue",
      value: "$59.07 B",
      change: "+9.8% YoY",
      detail: "FY2024 Form 10-K audited annual operating revenue",
      sourceId: "sec-10k-2024",
    },
    {
      label: "Operating Income",
      value: "$4.716 B",
      change: "8.0% margin",
      detail: "Operating profit after $54.354B in operating expenses",
      sourceId: "sec-10k-2024",
    },
    {
      label: "Active Mainline Fleet",
      value: "950+",
      change: "Boeing & Airbus",
      detail: "One of the youngest long-haul fleets under United Next",
      sourceId: "united-next-2023",
    },
    {
      label: "Global Workforce",
      value: "103,000+",
      change: "Worldwide",
      detail: "Pilots, flight attendants, dispatchers, mechanics, and ramp staff",
      sourceId: "sec-10k-2024",
    },
    {
      label: "Daily Departures",
      value: "4,500+",
      change: "Global Network",
      detail: "Connecting ~360 destinations across 6 continents",
      sourceId: "sec-10k-2024",
    },
    {
      label: "Annual Passengers",
      value: "165 M+",
      change: "Enplanements",
      detail: "Served via 7 primary domestic mega-hubs & global gateways",
      sourceId: "bts-transtats-2024",
    },
  ] as MetricItem[],

  primaryHubs: [
    {
      code: "ORD",
      city: "Chicago (O'Hare)",
      role: "Global Headquarters & Mid-Continent Super-Hub",
      dailyDepartures: "550+",
      destinations: "210+",
      coordinates: { x: 57, y: 35 },
      specialization: "Dual domestic and transatlantic connecting nexus",
    },
    {
      code: "DEN",
      city: "Denver International",
      role: "Primary Mountain & West-Central Flow Hub",
      dailyDepartures: "500+",
      destinations: "175+",
      coordinates: { x: 40, y: 44 },
      specialization: "Highest domestic connecting bank and ski gateway",
    },
    {
      code: "IAH",
      city: "Houston (George Bush)",
      role: "Latin America & Caribbean Gateway",
      dailyDepartures: "420+",
      destinations: "160+",
      coordinates: { x: 50, y: 78 },
      specialization: "South America, Central America, and energy-sector corporate travel",
    },
    {
      code: "EWR",
      city: "New York / Newark",
      role: "Premier Transatlantic & European Gateway",
      dailyDepartures: "410+",
      destinations: "155+",
      coordinates: { x: 84, y: 34 },
      specialization: "High-yield premium transcontinental and European nonstop banking",
    },
    {
      code: "SFO",
      city: "San Francisco",
      role: "Primary Transpacific & Asia-Pacific Gateway",
      dailyDepartures: "300+",
      destinations: "120+",
      coordinates: { x: 14, y: 42 },
      specialization: "Tokyo, Sydney, Auckland, Singapore, and West Coast business traffic",
    },
    {
      code: "IAD",
      city: "Washington Dulles",
      role: "Capital Gateway & Middle East / Africa Gateway",
      dailyDepartures: "240+",
      destinations: "110+",
      coordinates: { x: 79, y: 43 },
      specialization: "Government, diplomatic, and South Atlantic connecting traffic",
    },
    {
      code: "LAX",
      city: "Los Angeles",
      role: "Southern California & Pacific Rim Hub",
      dailyDepartures: "180+",
      destinations: "75+",
      coordinates: { x: 18, y: 62 },
      specialization: "Entertainment, Australia/NZ routes, and competitive coastal origin/dest",
    },
  ] as HubSnapshot[],
};
