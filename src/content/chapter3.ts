import { Chapter } from "./types";

export const CHAPTER_3: Chapter = {
  number: 3,
  title: "Organizing at United Airlines",
  subtitle: "Structure, Hierarchy, Departmentalization, and Cross-Functional Coordination",
  managementFunction: "Organizing (POLC Function 2)",
  introduction:
    "Organizing establishes the formal architecture through which United Airlines deploys financial, physical, and human capital. Coordinating over 100,000 employees dispersed across continents requires a hybrid structural model that combines centralized functional control with decentralized frontline operational authority.",
  sourceIds: ["sec-10k-2024", "robbins-coulter-2022", "term-report-2026"],
  keyTakeaways: [
    "United Airlines operates a hybrid Functional and Line-and-Staff organizational structure designed to maintain rigorous technical specialization while preserving a direct operational chain of command.",
    "Departmentalization blends functional grouping (Flight Operations, Inflight Services, Tech Ops, Finance) with geographic network hub governance.",
    "Span of control expands dramatically in automated frontline units (up to 40:1) while remaining narrow in safety-critical flight dispatch and regulatory compliance offices (5:1 to 8:1).",
    "Coordination mechanisms—principally the Network Operations Center (NOC) in Chicago—serve as the central nervous system resolving conflicting department priorities during irregular operations (IROPS).",
  ],
  sections: [
    {
      id: "3.1",
      heading: "3.1 Organizational Structure (Line, Line & Staff, Functional, etc.)",
      sourceIds: ["robbins-coulter-2022", "sec-10k-2024"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "United Airlines employs a sophisticated Line and Staff functional bureaucracy. Line departments carry direct statutory accountability for producing revenue and launching flights, while Staff departments provide indispensable specialized legal, financial, and analytical support.",
        },
        {
          type: "diagram",
          diagramId: "org-hierarchy",
          title: "Corporate Governance & Executive Chain of Command",
          description: "High-level organizational chart detailing the Board of Directors, Executive Leadership, Line Operations, and Staff Advisory functions.",
        },
        {
          type: "bullets",
          items: [
            "Line Functions: Flight Operations (Chief Pilot and line aviators), Inflight Services (flight attendants), Technical Operations (certificated A&P mechanics), and Airport Operations (customer service, baggage handling, and ramp coordination).",
            "Staff Functions: Legal & Regulatory Affairs, Corporate Finance & Treasury, Human Resources & Labor Relations, Digital Technology & Cybersecurity, and Safety Assurance.",
          ],
        },
        {
          type: "analysis",
          title: "Structural Rigidity vs. Dynamic Capabilities",
          text: "Bureaucratic and functional structures are frequently criticized in modern business literature for creating organizational silos. However, in commercial aviation, functional departmentalization is legally codified by the FAA; mechanics cannot report to revenue managers because safety standards must remain insulated from commercial cost-cutting pressures.",
          evidenceStatus: "management-interpretation",
        },
      ],
    },
    {
      id: "3.2",
      heading: "3.2 Division of Labor and Departmentalization",
      sourceIds: ["term-report-2026", "sec-10k-2024"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Division of labor at United reflects profound occupational specialization. Safe airline operations require hundreds of distinct certified roles functioning in synchronized choreography to accomplish a single 45-minute aircraft turn.",
        },
        {
          type: "bullets",
          items: [
            "Functional Departmentalization: Grouping work by specialized discipline (e.g., Flight Dispatch, Avionics Overhaul, Catering Logistics, Network Revenue Management).",
            "Geographic Departmentalization: Regional Hub Vice Presidents (e.g., VP of Newark Operations, VP of O'Hare Hub) oversee day-to-day facilities, city relationships, and local airport authority coordination.",
            "Customer / Process Departmentalization: Specialized units dedicated to high-value corporate travel accounts, global cargo clients, and premium loyalty tiers (Global Services / 1K).",
          ],
        },
      ],
    },
    {
      id: "3.3",
      heading: "3.3 Span of Control",
      sourceIds: ["robbins-coulter-2022", "term-report-2026"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Span of control—the number of subordinates directly reporting to a single manager—varies systematically across United depending on task standardization, geographic proximity, and safety risk.",
        },
        {
          type: "bullets",
          items: [
            "Narrow Span (3 to 7 Subordinates): Prevalent in technical engineering, flight simulator standards, and executive strategy, where work is ambiguous, highly non-routine, and involves severe financial or life-safety exposure.",
            "Wide Span (20 to 45 Subordinates): Prevalent in airport ramp handling, customer check-in gates, and cabin crew bases, where employees operate under standardized automated workflows, union work rules, and computerized shift bidding.",
          ],
        },
        {
          type: "analysis",
          title: "Technology as a Substitute for Direct Supervisory Span",
          text: "In accord with modern contingency theory, United's deployment of mobile digital toolkits (e.g., employee mobile apps for baggage tracking and gate assignment) acts as an administrative substitute for physical supervisors, allowing the company to expand frontline supervisory spans without sacrificing control.",
          evidenceStatus: "report-derived",
        },
      ],
    },
    {
      id: "3.4",
      heading: "3.4 Delegation of Authority",
      sourceIds: ["sec-10k-2024", "faa-sms-2023"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Delegation of authority balances strict centralization of commercial capital with radical decentralization of frontline operational safety.",
        },
        {
          type: "bullets",
          items: [
            "Centralized Authority: Aircraft acquisitions, fare structure algorithms, international route filings, and collective bargaining agreements are strictly centralized at corporate headquarters in Chicago.",
            "Decentralized Operational Authority: Under federal law (FAR 121.533), the Pilot-in-Command (Captain) and the Certificated Aircraft Dispatcher share joint, non-negotiable operational control over the initiation, continuation, diversion, and termination of any flight.",
            "Frontline Service Recovery Delegation: Gate agents and customer service managers are granted pre-authorized discretionary budgets (e.g., travel vouchers, hotel accommodations, mileage deposits) to resolve customer distress during service disruptions without seeking senior executive approval.",
          ],
        },
      ],
    },
    {
      id: "3.5",
      heading: "3.5 Unity of Command and Coordination Mechanisms",
      sourceIds: ["robbins-coulter-2022", "term-report-2026"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "In classical Fayolian management theory, Unity of Command dictates that an employee should receive orders from only one superior to prevent conflicting priorities. While strictly maintained within the flight deck, United utilizes matrixed coordination mechanisms across complex airport hubs.",
        },
        {
          type: "diagram",
          diagramId: "coordination-noc",
          title: "The Network Operations Center (NOC) as Chief Integrator",
          description: "Schematic diagram of cross-functional coordination: Flight Dispatch, Crew Scheduling, Maintenance Control, Customer Care, and Station Operations.",
        },
        {
          type: "analysis",
          title: "The NOC as Boundary-Spanning Integrator",
          text: "Lawrence & Lorsch's contingency theory posited that highly differentiated organizations require strong integration mechanisms. The 24/7 Network Operations Center (NOC) in Chicago acts as this vital integrator, synthesizing conflicting sub-goals (e.g., Maintenance wanting to ground a plane vs. Revenue wanting to preserve a high-yield international flight) into enterprise-optimal decisions.",
          evidenceStatus: "management-interpretation",
        },
      ],
    },
  ],
};
