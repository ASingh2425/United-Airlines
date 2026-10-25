import { Chapter } from "./types";

export const CHAPTER_6: Chapter = {
  number: 6,
  title: "Controlling at United Airlines",
  subtitle: "Standards, Metric Auditing, Safety Management Systems, and Cybernetic Feedback",
  managementFunction: "Controlling (POLC Function 5)",
  introduction:
    "Controlling closes the managerial loop by comparing actual organizational performance against predetermined operational, financial, and safety standards. At United Airlines, controlling operates as a high-frequency, telemetry-driven cybernetic feedback system capable of taking corrective action within milliseconds in flight or across multi-quarter financial review cycles.",
  sourceIds: ["sec-10k-2025", "bts-transtats-2024", "faa-sms-2023"],
  keyTakeaways: [
    "The control loop at United follows a cybernetic model: establishing standards, measuring performance, comparing against tolerance bands, and implementing corrective action.",
    "Financial controls enforce discipline across $59.070B total operating revenue, $54.354B operating expenses, $4.716B operating income (8.0% margin), and $3.355B net income (5.7% margin).",
    "Non-financial controls monitor vital operational metrics including D-0 (scheduled pushback), A-14 (on-time arrival), completion factor, and mishandled baggage rates.",
    "Safety Management Systems (FAA SMS) provide non-punitive closed-loop safety hazard detection, prioritizing root-cause system correction over individual operator blame.",
  ],
  sections: [
    {
      id: "6.1",
      heading: "6.1 Control Process (standards, measurement, corrective action)",
      sourceIds: ["daft-management-13", "term-report-2026"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "The organizational control process at United Airlines adheres strictly to the cybernetic control model, functioning across operational, financial, and regulatory domains.",
        },
        {
          type: "diagram",
          diagramId: "control-loop",
          title: "The Four-Stage Cybernetic Control Loop in Airline Operations",
          description: "Establish Standards → Measure Actual Performance → Compare Variance Against Tolerances → Execute Corrective Feedback.",
        },
        {
          type: "bullets",
          items: [
            "1. Establishing Standards: Defining specific, measurable benchmarks (e.g., target on-time departure benchmarks, CASM-ex fuel cost reduction targets, zero Class A safety mishaps).",
            "2. Measuring Performance: Real-time telemetry streaming from aircraft engines via ACARS, automated gate scanner logs, and computerized general ledger accounting entries.",
            "3. Comparing with Standards: Daily morning operational reviews where system-wide performance variance is calculated and analyzed across all primary hub stations.",
            "4. Corrective Action: Dynamic aircraft tail swaps, spare airframe induction, flow control holding patterns, or tactical adjustments to seasonal block times.",
          ],
        },
      ],
    },
    {
      id: "6.2",
      heading: "6.2 Financial and Non-Financial Controls",
      sourceIds: ["sec-10k-2025", "bts-transtats-2024"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Effective corporate governance requires balancing stringent financial controllership with non-financial operational and customer experience indicators.",
        },
        {
          type: "chart",
          chartId: "financial-explorer",
          title: "Audited Financial Controllership ($ Millions, FY2025 Disclosures)",
          description: "Audited comparison of Operating Revenue ($59,070M), Operating Expenses ($54,354M), Operating Income ($4,716M), and Net Income ($3,355M).",
          sourceIds: ["sec-10k-2025"],
        },
        {
          type: "stat",
          label: "Total Operating Revenue",
          value: "$59,070 M",
          context: "Audited FY2025 operating revenue ($53.438B passenger, $1.779B cargo, $3.853B other)",
          sourceIds: ["sec-10k-2025"],
        },
        {
          type: "stat",
          label: "Total Operating Expenses",
          value: "$54,354 M",
          context: "FY2025 operating costs (fuel, labor, aircraft maintenance, landing fees, and depreciation)",
          sourceIds: ["sec-10k-2025"],
        },
        {
          type: "stat",
          label: "Operating Income (EBIT)",
          value: "$4,716 M",
          context: "Net operating profit achieving an 8.0% operating margin",
          sourceIds: ["sec-10k-2025"],
        },
        {
          type: "stat",
          label: "Consolidated Net Income",
          value: "$3,355 M",
          context: "Final audited net profit achieving a 5.7% net profit margin",
          sourceIds: ["sec-10k-2025"],
        },
        {
          type: "analysis",
          title: "Critical Accounting Verification: Revenue vs. Operating Income (FY2025 Baseline)",
          text: "Academic rigor mandates precise financial distinction: In previous drafts or unverified reports, $59.070 billion was erroneously referenced as 'operating income'. In reality, $59.070 billion represents Total Operating Revenue (comprising $53.438B passenger, $1.779B cargo, and $3.853B other revenue), against which $54.354 billion in operating expenses were incurred, yielding an Operating Income of $4.716 billion (8.0% margin) and Consolidated Net Income of $3.355 billion (5.7% margin). Recognizing these exact figures is vital for assessing airline financial health.",
          evidenceStatus: "company-reported",
        },
        {
          type: "bullets",
          items: [
            "Non-Financial Operational Controls: Completion factor (percentage of scheduled flights operated without cancellation), DOT A-14 arrival on-time benchmark, and mishandled baggage ratio per 1,000 enplaned bags.",
            "Customer Experience Controls: Net Promoter Score (NPS) surveys distributed post-flight, seatback entertainment reliability rates, and premium lounge satisfaction metrics.",
          ],
        },
      ],
    },
    {
      id: "6.3",
      heading: "6.3 Quality Management Practices",
      sourceIds: ["faa-sms-2023", "term-report-2026"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Quality management in aviation is centered on safety assurance and continuous process refinement, governed by FAA Part 5 Safety Management Systems (SMS).",
        },
        {
          type: "bullets",
          items: [
            "Safety Management System (SMS): A structured approach to managing safety risk, incorporating safety policy, risk assessment, assurance audits, and safety promotion.",
            "Aviation Safety Action Program (ASAP): A non-punitive reporting channel between United, labor unions, and the FAA encouraging voluntary disclosure of safety infractions or operational hazards.",
            "Flight Operational Quality Assurance (FOQA): Systematic collection and automated analysis of recorded flight data parameters to detect procedural deviations or unstabilized approaches before safety incidents occur.",
          ],
        },
        {
          type: "analysis",
          title: "Non-Punitive Reporting as a Quality Enabler",
          text: "Traditional industrial quality control relied heavily on defect inspection and individual blame. In high-reliability aviation management, penalizing honest human error suppresses critical hazard data. United's non-punitive ASAP framework encourages reporting transparency, enabling preventative engineering and procedural interventions.",
          evidenceStatus: "management-interpretation",
        },
      ],
    },
    {
      id: "6.4",
      heading: "6.4 Use of Technology in Control",
      sourceIds: ["term-report-2026", "sec-10k-2025"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "United applies modern enterprise software, algorithmic scheduling, and telemetry tools to maintain real-time operational and asset control.",
        },
        {
          type: "bullets",
          items: [
            "Predictive Fleet Maintenance: Aircraft engine and airframe sensors transmit operational telemetry via ACARS to Technical Operations, allowing controllers to anticipate component wear and stage replacement parts proactively.",
            "Turnaround Management Tools: Mobile device workflows for ramp personnel, gate agents, and flight attendants tracking baggage staging, fueling progress, and cabin readiness in countdown intervals.",
            "Automated Passenger Rebooking Systems: Digital rebooking tools utilized during irregular operations (IROPS) to algorithmically re-accommodate passengers across partner schedules and distribute travel accommodations directly via mobile apps.",
          ],
        },
      ],
    },
    {
      id: "6.5",
      heading: "6.5 Feedback Mechanisms",
      sourceIds: ["daft-management-13", "bts-transtats-2024"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Feedback loops at United operate across feedforward (preventative), concurrent (real-time), and feedback (post-hoc) control cycles.",
        },
        {
          type: "bullets",
          items: [
            "Feedforward Controls: Weather predictive radar modeling, pre-shift crew rest legal checks, and advance de-icing fluid staging prior to winter weather events.",
            "Concurrent Controls: Live Air Traffic Control speed/route adjustments, Network Operations Center reroutes around severe weather, and real-time baggage transfer scanning.",
            "Feedback Controls: Post-flight debriefs, weekly station reliability scorecards, quarterly financial audits, and post-travel customer feedback analysis.",
          ],
        },
      ],
    },
  ],
};
