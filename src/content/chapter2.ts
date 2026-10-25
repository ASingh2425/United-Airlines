import { Chapter } from "./types";

export const CHAPTER_2: Chapter = {
  number: 2,
  title: "Planning at United Airlines",
  subtitle: "Direction, Strategic Choices, Capital Horizon, and Crisis Preparedness",
  managementFunction: "Planning (POLC Function 1)",
  introduction:
    "Planning is the foundational management function determining United Airlines' goals and the means to achieve them. In an industry vulnerable to macro shocks—from geopolitical conflicts and airspace closures to crude oil spikes and demand disruptions—planning at United bridges multi-year fleet capital commitments with micro-level, minute-by-minute flight scheduling.",
  sourceIds: ["united-next-2023", "sec-10k-2025", "daft-management-13"],
  keyTakeaways: [
    "Planning at United Airlines operates simultaneously across three decoupled time horizons: multi-year strategic capital expenditure, seasonal network scheduling, and real-time operational flight plans.",
    "The corporate vision and mission center on global connectivity, customer-centric hospitality, safety excellence, and operational sustainability.",
    "The 'United Next' initiative exemplifies strategic planning: systematically replacing 50-seat regional jets with high-efficiency mainline narrowbodies to increase gauge and lower cost per seat mile.",
    "Contingency planning and scenario modeling form critical organizational safeguards against fuel volatility, severe weather disruptions, and regulatory constraints.",
  ],
  sections: [
    {
      id: "2.1",
      heading: "2.1 Nature of Planning in the Company",
      sourceIds: ["daft-management-13", "sec-10k-2025"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Planning within United Airlines is inherently anticipatory, dynamic, and cybernetic. Because commercial aircraft require delivery lead times between 3 and 7 years, capital commitments made today bind the airline's capacity and balance sheet well into the subsequent decade.",
        },
        {
          type: "analysis",
          title: "Theoretical Framework: Environmental Scanning as an Analytical Lens",
          text: "Applying Richard Daft's environmental scanning framework, researchers observe that United continuously monitors five external boundary dimensions: interest rates, geopolitical airspace rights, crude oil futures, certified labor supply (pilot training pipelines), and competitor fleet capacity. This scanning enables management to adjust forward capacity allocations.",
          evidenceStatus: "management-interpretation",
        },
        {
          type: "bullets",
          items: [
            "Pervasiveness: Planning permeates every level of the corporate hierarchy, from Board-level capital committees down to station-level turnaround coordinators.",
            "Continuous Horizon Rolling: Unlike fixed static annual budgets, commercial airline schedules and fuel hedging portfolios are evaluated on rolling planning cycles, adjusted as forward booking trends evolve.",
            "Regulatory & Safety Boundary Conditions: All planning scenarios are strictly bounded by FAA FAR Part 121 mandates; revenue-maximizing schedules cannot violate mandatory pilot rest rules or aircraft inspection windows.",
          ],
        },
      ],
    },
    {
      id: "2.2",
      heading: "2.2 Vision, Mission, Goals, and Objectives",
      sourceIds: ["sec-10k-2025", "united-next-2023"],
      blocks: [
        {
          type: "quote",
          quote: "Connecting people. Uniting the world. Doing good in the sky and on the ground.",
          author: "United Airlines Corporate Purpose Statement",
          role: "Governance Disclosures",
          sourceId: "sec-10k-2025",
        },
        {
          type: "paragraph",
          text: "United's strategic architecture cascades from high-level corporate purpose statements down to measurable operational Key Performance Indicators (KPIs):",
        },
        {
          type: "bullets",
          items: [
            "Corporate Mission: Deliver safe, reliable, and compassionate air transportation while fostering sustainable long-term economic returns for shareholders.",
            "Strategic Vision: Build a customer-preferred airline defined by modern cabin technology, premier long-haul products, and reduced environmental intensity.",
            "Quantitative Strategic Goals: Sustain disciplined operating margins (targeting 8–10% across full-cycle operations); reduce greenhouse gas intensity by 2035; achieve net zero targets through sustainable aviation fuels without over-reliance on voluntary offsets.",
            "Operational Benchmarks & Targets: Illustrative targets evaluated in the case study include D-0 (departure within scheduled minute), DOT A-14 arrival on-time benchmarks, and systemic mishandled baggage reduction.",
          ],
        },
        {
          type: "analysis",
          title: "Theoretical Framework: Goal Cascading and MBO Analysis",
          text: "Through the lens of Management by Objectives (MBO), the case study observes that executive incentive structures align compensation with measurable indicators across safety assurance, on-time reliability, customer Net Promoter Scores (NPS), and pre-tax financial margins.",
          evidenceStatus: "report-derived",
        },
      ],
    },
    {
      id: "2.3",
      heading: "2.3 Types of Plans (strategic, tactical, operational followed in the Company)",
      sourceIds: ["united-next-2023", "daft-management-13"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "To execute its corporate mandate, United organizes planning across three distinct structural tiers defined by time horizon, decision authority, and organizational scope.",
        },
        {
          type: "diagram",
          diagramId: "planning-hierarchy",
          title: "Three-Tier Planning Hierarchy at United Airlines",
          description: "Comparison of Strategic, Tactical, and Operational plans across time horizons, key artifacts, and decision stakeholders.",
        },
        {
          type: "bullets",
          items: [
            "1. Strategic Plans (5–15 Year Horizon): Governed by the Board of Directors and Executive Leadership. Exemplified by the 'United Next' multi-year fleet plan—ordering hundreds of Boeing 737 MAX, 787 Dreamliners, and Airbus A321neo aircraft to increase average domestic gauge and optimize seat economics.",
            "2. Tactical Plans (6–18 Month Horizon): Formulated by Managing Directors in Network Planning, Revenue Management, and Commercial Scheduling. Includes seasonal schedule banking (Summer Transatlantic vs. Winter Leisure corridors), hub route optimization, and fare class inventory allocation.",
            "3. Operational Plans (Day-of-Operations to 30-Day Horizon): Executed by station managers, maintenance controllers, and the Network Operations Center (NOC). Encompasses daily aircraft tail routing, crew trip pairing dispatch, ground catering logistics, and fuel loading plans.",
          ],
        },
        {
          type: "analysis",
          title: "Decoupling and Reintegration of Planning Horizons",
          text: "A primary challenge in airline management is the tension between strategic intent and day-to-day operational reality. While strategic planning dictates maximum asset utilization, tactical maintenance controllers must enforce mandatory inspection groundings. Effective management requires constant arbitration via the Network Operations Center.",
          evidenceStatus: "management-interpretation",
        },
      ],
    },
    {
      id: "2.4",
      heading: "2.4 Planning Process Followed",
      sourceIds: ["daft-management-13", "term-report-2026"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "The institutional planning cycle at United follows an iterative methodology rooted in rational decision-making theory:",
        },
        {
          type: "bullets",
          items: [
            "Step 1: Environmental Scanning & Forecasting: Econometric modeling of GDP growth, corporate travel demand, competitive schedule filings, and crude crack spread predictions.",
            "Step 2: Strategy Formulation & Capacity Allocation: Determining Available Seat Miles (ASMs), evaluating new international destinations, and scheduling retirement cycles for older airframes.",
            "Step 3: Resource Mobilization & Scheduling: Aligning pilot simulator slots, ground support equipment, terminal gate leases, and catering supplier contracts.",
            "Step 4: Operational Execution & Monitoring: Real-time schedule monitoring against severe thunderstorm fronts, FAA ground delay programs, and crew duty timeouts.",
            "Step 5: Post-Flight Feedback & Retrospective Audit: Periodic reliability reviews where delay causes are mathematically categorized into controllable (maintenance, ground service) vs. uncontrollable (ATC, severe weather) categories.",
          ],
        },
      ],
    },
    {
      id: "2.5",
      heading: "2.5 Policies, Programs, Procedures used in the Company",
      sourceIds: ["faa-sms-2023", "sec-10k-2025"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Standing plans provide crucial consistency and risk mitigation across United's geographically dispersed operations. In high-stakes aviation, codified procedures supersede discretionary decision-making.",
        },
        {
          type: "bullets",
          items: [
            "Standard Operating Procedures (SOPs): Highly codified, mandatory flight-deck checklists and ground handling turn sequences governed under FAA Part 121 air carrier certifications.",
            "Programs: Structured strategic initiatives such as the 'United Aviate' pilot pathway program, fuel-efficiency climb protocols, and sustainable aviation fuel (SAF) procurement collaborations.",
            "Policies: Broad organizational directives including the corporate safety mandate (empowering ground staff or technicians to pause operations for verified safety concerns) and non-punitive reporting policies.",
          ],
        },
        {
          type: "analysis",
          title: "Standing Plans as Organizational Guardrails",
          text: "In classical management theory, policies establish boundaries for decision delegation. At United, standard procedures eliminate ambiguity during flight operations or tight gate turnaround sequences, directly mitigating human error risks.",
          evidenceStatus: "report-derived",
        },
      ],
    },
  ],
};
