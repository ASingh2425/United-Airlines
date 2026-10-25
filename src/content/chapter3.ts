import { Chapter } from "./types";

export const CHAPTER_3: Chapter = {
  number: 3,
  title: "Organizing at United Airlines",
  subtitle: "Structure, Hierarchy, Departmentalization, and Cross-Functional Coordination",
  managementFunction: "Organizing (POLC Function 2)",
  introduction:
    "Organizing establishes the formal architecture through which United Airlines deploys financial, physical, and human capital. Coordinating over 100,000 employees dispersed across continents requires a hybrid structural model that combines centralized functional governance with decentralized frontline operational authority.",
  sourceIds: ["sec-10k-2025", "robbins-coulter-2022", "term-report-2026"],
  keyTakeaways: [
    "United Airlines operates a hybrid Functional and Line-and-Staff organizational structure designed to maintain technical specialization while preserving a direct operational chain of command.",
    "Departmentalization blends functional grouping (Flight Operations, Inflight Services, Tech Ops, Finance) with geographic network hub governance.",
    "Span of control expands in standardized frontline units (up to 40:1) while remaining narrow in safety-critical flight dispatch and regulatory compliance offices (5:1 to 8:1).",
    "Coordination mechanisms—principally the Network Operations Center (NOC) in Chicago—serve as the central nervous system resolving conflicting department priorities during irregular operations (IROPS).",
  ],
  sections: [
    {
      id: "3.1",
      heading: "3.1 Organizational Structure (Line, Line & Staff, Functional, etc.)",
      sourceIds: ["robbins-coulter-2022", "sec-10k-2025"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "United Airlines employs a Line and Staff functional structure. Line departments carry direct statutory accountability for operating flights and delivering customer service, while Staff departments provide specialized legal, financial, and technological support.",
        },
        {
          type: "diagram",
          diagramId: "org-hierarchy",
          title: "Corporate Governance & Executive Chain of Command",
          description: "Organizational diagram illustrating the Board of Directors, Executive Leadership, Line Operations, and Staff Advisory functions.",
        },
        {
          type: "bullets",
          items: [
            "Line Functions: Flight Operations (Chief Pilot and line aviators), Inflight Services (flight attendants), Technical Operations (certificated A&P mechanics), and Airport Operations (customer service, baggage handling, and ramp coordination).",
            "Staff Functions: Legal & Regulatory Affairs, Corporate Finance & Treasury, Human Resources & Labor Relations, Digital Technology, and Safety Assurance.",
          ],
        },
        {
          type: "analysis",
          title: "Structural Rigidity vs. Dynamic Capabilities",
          text: "Bureaucratic and functional structures are frequently analyzed in management literature for potential organizational silos. However, in commercial aviation, functional departmentalization is reinforced by federal regulations; aircraft mechanics cannot report directly to commercial revenue managers because safety standards must remain insulated from cost-cutting pressures.",
          evidenceStatus: "management-interpretation",
        },
      ],
    },
    {
      id: "3.2",
      heading: "3.2 Division of Labor and Departmentalization",
      sourceIds: ["term-report-2026", "sec-10k-2025"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Division of labor at United reflects profound occupational specialization. Safe airline operations require distinct certified roles functioning in synchronized choreography to accomplish an aircraft turnaround.",
        },
        {
          type: "bullets",
          items: [
            "Functional Departmentalization: Grouping work by specialized discipline (e.g., Flight Dispatch, Avionics Overhaul, Inflight Service, Commercial Scheduling).",
            "Geographic Departmentalization: Regional Hub Vice Presidents and station managing directors oversee airport facilities, municipal relations, and local hub station logistics.",
            "Customer / Process Departmentalization: Specialized units dedicated to corporate commercial accounts, global cargo clients, and premium loyalty tiers (MileagePlus Premier).",
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
          text: "Span of control—the number of direct subordinates reporting to a single supervisor—varies systematically across United depending on task standardization, geographic proximity, and safety risk.",
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
          title: "Digital Systems as Supervisory Enablers",
          text: "In accordance with modern contingency theory, digital operational tools (such as automated mobile turnaround checklists and barcode luggage scans) serve as administrative enablers, allowing the organization to operate wider frontline supervisory spans without sacrificing operational consistency.",
          evidenceStatus: "report-derived",
        },
      ],
    },
    {
      id: "3.4",
      heading: "3.4 Delegation of Authority",
      sourceIds: ["sec-10k-2025", "faa-sms-2023"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Delegation of authority balances centralized commercial strategy with decentralized frontline operational safety.",
        },
        {
          type: "bullets",
          items: [
            "Centralized Authority: Aircraft acquisitions, fare structure pricing algorithms, international route filings, and collective bargaining parameters are strictly centralized at corporate headquarters in Chicago.",
            "Decentralized Operational Authority: Under federal regulations (FAR 121.533), the Pilot-in-Command (Captain) and the Certificated Aircraft Dispatcher share joint, non-negotiable operational control over the initiation, continuation, diversion, and termination of every flight.",
            "Frontline Service Recovery Discretion: Airport customer service leads possess pre-authorized service recovery guidelines (e.g., meal vouchers, hotel accommodations, mileage deposits) to resolve passenger disruptions without requiring executive sign-offs.",
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
          text: "In classical Fayolian administrative theory, Unity of Command dictates that an employee receives orders from only one superior. While strictly maintained within the flight deck, United utilizes matrixed coordination mechanisms across complex airport hubs.",
        },
        {
          type: "diagram",
          diagramId: "coordination-noc",
          title: "The Network Operations Center (NOC) as Chief Integrator",
          description: "Schematic diagram of cross-functional coordination: Flight Dispatch, Crew Scheduling, Maintenance Control, Customer Care, and Station Operations.",
        },
        {
          type: "analysis",
          title: "Theoretical Framework: The NOC as Boundary-Spanning Integrator",
          text: "Lawrence & Lorsch's organizational contingency theory posited that highly differentiated enterprises require robust lateral integration mechanisms. The 24/7 Network Operations Center (NOC) in Chicago acts as this vital integrator, resolving conflicting operational sub-goals (e.g., maintenance seeking to ground an aircraft vs. commercial planning seeking to operate a high-demand route) into system-optimal decisions.",
          evidenceStatus: "management-interpretation",
        },
      ],
    },
  ],
};
