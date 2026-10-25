import { Chapter } from "./types";

export const CHAPTER_2: Chapter = {
  number: 2,
  title: "Planning at United Airlines",
  subtitle: "Direction, Strategic Choices, Capital Horizon, and Crisis Preparedness",
  managementFunction: "Planning (POLC Function 1)",
  introduction:
    "Planning is the foundational management function determining United Airlines' goals and the means to achieve them. In an industry vulnerable to macro shocks—from geopolitical conflicts and airspace closures to crude oil spikes and pandemic disruptions—planning at United bridges decade-long fleet capital commitments with micro-level, minute-by-minute flight scheduling.",
  sourceIds: ["united-next-2023", "sec-10k-2024", "daft-management-13"],
  keyTakeaways: [
    "Planning at United Airlines operates simultaneously across three decoupled time horizons: multi-year strategic capital expenditure, seasonal network scheduling, and real-time operational flight plans.",
    "The corporate vision and mission center on global connectivity, customer-centric hospitality, safety excellence, and operational sustainability.",
    "The 'United Next' initiative exemplifies strategic planning: systematically replacing 50-seat regional jets with high-efficiency mainline narrowbodies to increase gauge and lower cost per seat mile.",
    "Contingency planning and scenario modeling form critical organizational safeguards against fuel volatility, severe weather disruptions, and regulatory groundings.",
  ],
  sections: [
    {
      id: "2.1",
      heading: "2.1 Nature of Planning in the Company",
      sourceIds: ["daft-management-13", "sec-10k-2024"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Planning within United Airlines is inherently anticipatory, dynamic, and cybernetic. Because commercial aircraft require delivery lead times between 3 and 7 years, capital commitments made today bind the airline's capacity and balance sheet well into the next decade.",
        },
        {
          type: "analysis",
          title: "Theoretical Classification: Adaptive Environmental Scanning",
          text: "In accordance with Daft (2021), United utilizes an environmental scanning apparatus that monitors five boundary dimensions: macroeconomic interest rates, geopolitical airspace rights, crude oil futures, labor availability (pilot pipelines), and competitor fleet capacity. This enables management to pivot between aggressive capacity growth and defensive cash conservation.",
          evidenceStatus: "management-interpretation",
        },
        {
          type: "bullets",
          items: [
            "Pervasiveness: Planning permeates every level of the hierarchy, from the Board's Capital Allocation Committee down to individual station turn planners.",
            "Continuous Horizon Rolling: Unlike fixed annual budgets, flight schedules and fuel hedging portfolios are evaluated on rolling 18-month cycles, updated weekly based on forward booking curves.",
            "Safety-First Constraint Boundary: All planning iterations are bounded by FAA FAR Part 121 mandates; revenue-maximizing schedules cannot violate mandatory pilot rest or aircraft inspection windows.",
          ],
        },
      ],
    },
    {
      id: "2.2",
      heading: "2.2 Vision, Mission, Goals, and Objectives",
      sourceIds: ["sec-10k-2024", "united-next-2023"],
      blocks: [
        {
          type: "quote",
          quote: "Connecting people. Uniting the world. Doing good in the sky and on the ground.",
          author: "United Airlines Official Purpose Statement",
          role: "Corporate Governance Charter",
          sourceId: "sec-10k-2024",
        },
        {
          type: "paragraph",
          text: "United's strategic architecture cascades from high-level corporate ethos down to measurable operational Key Performance Indicators (KPIs):",
        },
        {
          type: "bullets",
          items: [
            "Corporate Mission: Deliver safe, reliable, and compassionate air transportation while fostering sustainable long-term economic returns for shareholders.",
            "Strategic Vision: Build the world's most resilient and customer-preferred airline, defined by industry-leading customer technology, premier premium products, and carbon-neutral aviation.",
            "Quantitative Strategic Goals: Expand Adjusted Pre-Tax Margin toward double-digit targets; reduce greenhouse gas intensity by 50% by 2035 (relative to 2019 levels); achieve 100% net zero by 2050 without reliance on traditional voluntary carbon offsets.",
            "Tactical Operating Objectives: D-0 (Departure within 0 minutes of schedule) target $\\ge$ 75%; A-14 (Arrival within 14 minutes) benchmark exceeding industry average; Mishandled Baggage Rate $\\le$ 4.5 bags per 1,000 enplaned passengers.",
          ],
        },
        {
          type: "analysis",
          title: "Goal Cascading & MBO Alignment",
          text: "United applies Management by Objectives (MBO) principles. High-level corporate goals cascade directly into operational division objectives. Executive compensation packages (annual incentives) are weighted specifically against safety indices, on-time performance (DOT A-14), customer Net Promoter Score (NPS), and pre-tax margin thresholds.",
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
          text: "To execute its mandate, United organizes planning across three distinct structural tiers defined by time horizon, decision authority, and organizational scope.",
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
            "1. Strategic Plans (5–15 Year Horizon): Governed by the CEO, CFO, and Board of Directors. Exemplified by the 'United Next' fleet plan—ordering hundreds of Boeing 737 MAX, 787 Dreamliners, and Airbus A321neo aircraft to increase average domestic gauge by nearly 30% and optimize seat economics.",
            "2. Tactical Plans (6–18 Month Horizon): Formulated by Vice Presidents and Managing Directors in Network Planning, Revenue Management, and Marketing. Includes seasonal schedule publication (Summer Transatlantic Banking vs. Winter Sun Destinations), hub route optimization, and fare class inventory allocation.",
            "3. Operational Plans (Day-of-Operations to 30-Day Horizon): Executed by station managers, maintenance controllers, and the Network Operations Center (NOC). Encompasses daily aircraft tail routing, crew trip pairing dispatch, ground catering logistics, and fuel loading plans.",
          ],
        },
        {
          type: "analysis",
          title: "Decoupling and Reintegration of Planning Horizons",
          text: "A primary challenge in airline management is the friction between strategic intent and operational reality. For instance, while strategic planning dictates maximum aircraft utilization, tactical maintenance schedules must enforce mandatory grounding intervals. Effective management requires constant arbitration via the Network Operations Center.",
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
          text: "The institutional planning cycle at United follows an iterative five-step methodology rooted in rational decision-making theory:",
        },
        {
          type: "bullets",
          items: [
            "Step 1: Environmental Scanning & Forecasting: Econometric modeling of GDP growth, corporate travel demand, competitive schedule filings via Cirium/Diio Mi, and crude crack spread predictions.",
            "Step 2: Strategy Formulation & Capacity Allocation: Determining Available Seat Miles (ASMs), opening new destinations (e.g., Faro, Bilbao, Tokyo-Haneda), and retiring aging airframes (Boeing 767/777).",
            "Step 3: Resource Mobilization & Scheduling: Aligning pilot simulator slots, ground support equipment, terminal gate leases, and catering supplier contracts.",
            "Step 4: Operational Execution & Monitoring: Real-time schedule monitoring against severe thunderstorm fronts, FAA ground delay programs, and crew duty timeouts.",
            "Step 5: Post-Flight Feedback & Retrospective Audit: Weekly reliability reviews where delays are mathematically parsed into controllable (maintenance, baggage) vs. uncontrollable (ATC, weather) categories.",
          ],
        },
      ],
    },
    {
      id: "2.5",
      heading: "2.5 Policies, Programs, Procedures used in the Company",
      sourceIds: ["faa-sms-2023", "sec-10k-2024"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Standing plans provide crucial consistency and risk mitigation across United's geographically dispersed operations. In high-stakes aviation, explicit codified procedures supersede discretionary decision-making.",
        },
        {
          type: "bullets",
          items: [
            "Standard Operating Procedures (SOPs): Highly codified, mandatory flight-deck checklists and ground handling turn sequences governed under FAA Part 121 certifications.",
            "Programs: Structured, recurring strategic initiatives such as the 'United CleanPlus' hygiene protocol, 'United Aviate' flight school talent pipeline, and the 'Eco-Skies Alliance' sustainable aviation fuel (SAF) procurement consortium.",
            "Policies: Broad organizational directives including the corporate 'Safety-First Mandate' (empowering any ramp worker or mechanic to halt aircraft pushback for safety concerns without fear of retribution) and zero-tolerance passenger anti-harassment rules.",
          ],
        },
        {
          type: "analysis",
          title: "Standing Plans as Organizational Guardrails",
          text: "In classical management theory, policies establish boundaries for decision delegation. At United, SOPs eliminate ambiguity during high-stress flight emergencies or severe gate turnaround windows, directly mitigating human error catastrophe.",
          evidenceStatus: "report-derived",
        },
      ],
    },
  ],
};
