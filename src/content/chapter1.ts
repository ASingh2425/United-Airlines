import { Chapter } from "./types";

export const CHAPTER_1: Chapter = {
  number: 1,
  title: "Introduction to United Airlines",
  subtitle: "Company Context, Evolutionary Heritage, and Industry Position",
  managementFunction: "Context & Strategic Foundation",
  introduction:
    "United Airlines represents a quintessential study in large-scale modern enterprise management. Tracing its lineage back to the dawn of commercial aviation in 1926, the company operates today as a multi-billion-dollar network carrier requiring relentless coordination between capital, high-risk operational environments, regulatory mandates, and global labor structures.",
  sourceIds: ["sec-10k-2024", "bts-transtats-2024", "term-report-2026"],
  keyTakeaways: [
    "United Airlines operates as an asset-intensive network carrier balancing hub-and-spoke efficiencies against acute weather, fuel, and macroeconomic volatility.",
    "Formed from the pioneering consolidation of early airmail carriers and the historic 2010 merger with Continental Airlines, United's heritage informs its present dual-brand corporate DNA.",
    "The core product ecosystem extends far beyond passenger seat miles to encompass high-margin loyalty finance (MileagePlus), dedicated global cargo logistics, and corporate fleet services.",
    "Market dominance relies on 7 strategic domestic mega-hubs that command natural geographic capture, funneling high-yield international passengers into Star Alliance routes.",
  ],
  sections: [
    {
      id: "1.1",
      heading: "1.1 Company Background",
      sourceIds: ["sec-10k-2024", "term-report-2026"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "United Airlines Holdings, Inc. (NASDAQ: UAL) is a publicly traded Delaware corporation with its operational and executive headquarters situated in Chicago's iconic Willis Tower. The enterprise functions as one of the 'Big Three' legacy network carriers in the United States alongside American Airlines and Delta Air Lines.",
        },
        {
          type: "stat",
          label: "Consolidated Annual Revenue",
          value: "$59.070 B",
          context: "Audited Form 10-K FY2024 full-year operating revenue",
          sourceIds: ["sec-10k-2024"],
        },
        {
          type: "stat",
          label: "Active Commercial Fleet",
          value: "950+ Aircraft",
          context: "Mainline jet fleet with 700+ additional aircraft on forward order",
          sourceIds: ["sec-10k-2024", "united-next-2023"],
        },
        {
          type: "stat",
          label: "Direct Employment",
          value: "103,000+",
          context: "Worldwide full-time equivalent employees across unionized and corporate crafts",
          sourceIds: ["sec-10k-2024"],
        },
        {
          type: "paragraph",
          text: "The organization's operating scope spans transcontinental domestic service, premier business trunk routes, and extensive international corridors connecting North America to Europe, Asia-Pacific, Latin America, Africa, and Oceania. United was a founding member of Star Alliance in 1997, which today unites 26 international airlines to provide coordinated reciprocal schedules, baggage transfer agreements, and loyalty recognition across 190+ countries.",
        },
        {
          type: "analysis",
          title: "Managerial Scope and Operational Complexity",
          text: "From a management theory standpoint, United Airlines does not operate as a standard manufacturing or retail enterprise; it functions as a High-Reliability Organization (HRO). Operational execution requires real-time synchronization between FAA Air Traffic Control, localized airport authorities, certified aircraft mechanics, dispatchers operating under federal flight release mandates, and union-governed crews under strict legal duty limits.",
          evidenceStatus: "management-interpretation",
        },
      ],
    },
    {
      id: "1.2",
      heading: "1.2 Founding History and Timeline",
      sourceIds: ["term-report-2026", "sec-10k-2024"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "United's origin traces back to April 6, 1926, when Walter T. Varney operated the inaugural airmail contract flight from Pasco, Washington to Elko, Nevada aboard a Swallow biplane. Over the ensuing century, United evolved through strategic consolidation, wartime military transport mobilization, deregulation, and landmark corporate mergers.",
        },
        {
          type: "diagram",
          diagramId: "history-timeline",
          title: "Centennial Milestone Chronology (1926 – 2026)",
          description: "Interactive historical trajectory illustrating the evolution from pioneer mail delivery through the 2010 Continental merger to modern United Next.",
        },
        {
          type: "paragraph",
          text: "In 1929, aviation pioneer William Boeing merged his manufacturing enterprise with Pratt & Whitney engines and Varney's airline to form United Aircraft and Transport Corporation (UATC)—a massive vertical monopoly. Following the landmark Air Mail Act of 1934, federal antitrust legislation forced the dismemberment of UATC, establishing United Air Lines as an independent air transport operating entity headed by William A. Patterson.",
        },
        {
          type: "bullets",
          items: [
            "1926: Varney Air Lines commences contract air mail operations (Contract Air Mail Route CAM 5).",
            "1930: United introduces the first modern flight stewardesses, led by registered nurse Ellen Church.",
            "1934: Air Mail Act forces split of United Aircraft into United Airlines, Boeing Aircraft, and United Technologies.",
            "1978: U.S. Airline Deregulation Act dismantles the Civil Aeronautics Board price controls, unleashing cutthroat hub competition.",
            "1994: Historic Employee Stock Ownership Plan (ESOP) transfers 55% company equity to employees in exchange for wage concessions.",
            "2002–2006: Chapter 11 restructuring following post-9/11 downturn, modernizing labor contracts and pension liabilities.",
            "2010: Landmark $3.0 billion merger of equals with Continental Airlines, creating the world's largest airline network at the time.",
            "2021–2026: Announcement and ongoing execution of 'United Next'—ordering over 700 new narrowbody and widebody jets to upgauge seat density and slash emissions.",
          ],
        },
        {
          type: "analysis",
          title: "Historical Inertia & Path Dependency in Airline Governance",
          text: "Management literature highlights the concept of 'path dependency'—how historical commitments restrict current options. United's century of union contracts, seniority rosters, and legacy airframes creates an organizational fabric where changes in strategy (such as fleet standardization) take over a decade to manifest across operational workflows.",
          evidenceStatus: "management-interpretation",
        },
      ],
    },
    {
      id: "1.3",
      heading: "1.3 Products/Services Offered",
      sourceIds: ["sec-10k-2024", "term-report-2026"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "While passenger transportation forms the visible consumer face of United Airlines, the enterprise operates an intricate portfolio of complementary revenue-generating business units engineered to maximize network yield.",
        },
        {
          type: "chart",
          chartId: "revenue-breakdown",
          title: "Consolidated Revenue Composition ($59.070B Total Operating Revenue)",
          description: "Breakdown of passenger mainline, regional flying, United Cargo, and MileagePlus loyalty financing.",
          sourceIds: ["sec-10k-2024"],
        },
        {
          type: "bullets",
          items: [
            "Commercial Passenger Travel: Segmented multi-tier cabin architecture spanning Basic Economy, Standard Economy, Economy Plus (extra legroom), United Premium Plus (international premium economy), United First (domestic premium), and United Polaris (international lie-flat business class suites).",
            "MileagePlus Frequent Flyer Program: A multi-billion-dollar loyalty and customer retention platform. Beyond awarding flight rewards, MileagePlus generates immense high-margin cash flow by selling loyalty miles to co-brand credit card issuers (notably JPMorgan Chase).",
            "United Cargo Logistics: Providing belly-hold freight capacity on global widebody routes, transporting temperature-sensitive pharmaceuticals (TempControl), priority mail, industrial machinery parts, and perishable agricultural commodities worldwide.",
            "United Technical Operations (Tech Ops): Certified FAA Part 145 repair station providing specialized third-party aircraft maintenance, repair, and overhaul (MRO) services to commercial, military, and private operators.",
            "United Club & Airport Lounges: Network of over 45 United Club locations and exclusive United Polaris Lounges at gateway hubs offering dining, shower suites, and private workspaces to premium passengers.",
          ],
        },
        {
          type: "analysis",
          title: "Product Unbundling and Price Discrimination",
          text: "Economically, United's revenue management represents advanced second-degree price discrimination. By decoupling ancillary services (checked luggage, seat selection, Wi-Fi connectivity, priority boarding), management captures consumer surplus across divergent customer willingness-to-pay segments while maintaining competitive headline airfares in search engines.",
          evidenceStatus: "report-derived",
        },
      ],
    },
    {
      id: "1.4",
      heading: "1.4 Market Presence and Industry Overview",
      sourceIds: ["sec-10k-2024", "bts-transtats-2024"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "The global commercial aviation sector is characterized by high capital intensity, razor-thin operating margins, volatile cyclicality, strict governmental safety regulation, and intense exposure to external geopolitical and weather disruptions.",
        },
        {
          type: "diagram",
          diagramId: "hub-network",
          title: "Strategic Mega-Hub Geography & Traffic Capture",
          description: "Interactive schematic showing United's 7 primary domestic connecting hubs and their respective continental gateways.",
        },
        {
          type: "paragraph",
          text: "Domestically, the U.S. airline industry operates under an oligopoly where four carriers—United, Delta, American, and Southwest—control roughly 80% of domestic passenger seat miles. Internationally, United maintains the most extensive transpacific passenger footprint among all U.S. airlines and commands unmatched gateway positions into Europe via Newark (EWR) and Dulles (IAD).",
        },
        {
          type: "analysis",
          title: "Porter's Five Forces Analysis of Network Aviation",
          text: "Applying Michael Porter's industry analysis framework: (1) Threat of New Entrants is Low due to staggering aircraft acquisition costs and slot constraints at key airports; (2) Bargaining Power of Suppliers is Exceptionally High, dominated by a duopoly in airframes (Boeing/Airbus), an engine triopoly (GE/Pratt/Rolls-Royce), and global jet fuel refiners; (3) Bargaining Power of Buyers is Moderate to High due to online flight search transparency; (4) Threat of Substitutes is Low for long-distance transit; (5) Competitive Rivalry is Extreme among legacy carriers competing for corporate travel budgets.",
          evidenceStatus: "management-interpretation",
        },
      ],
    },
  ],
};
