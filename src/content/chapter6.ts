import { Chapter } from "./types";

export const CHAPTER_6: Chapter = {
  number: 6,
  title: "Controlling at United Airlines",
  subtitle: "Standards, Metric Auditing, Safety Management Systems, and Cybernetic Feedback",
  managementFunction: "Controlling (POLC Function 5)",
  introduction:
    "Controlling closes the managerial loop by comparing actual organizational performance against predetermined operational, financial, and safety standards. At United Airlines, controlling operates as a high-frequency, telemetry-driven cybernetic feedback system capable of taking corrective action within milliseconds in flight or within weeks at the corporate budget level.",
  sourceIds: ["sec-10k-2024", "bts-transtats-2024", "faa-sms-2023"],
  keyTakeaways: [
    "The control loop at United follows a rigorous four-stage cybernetic model: establishing standards, measuring performance, comparing against tolerance bands, and implementing corrective action.",
    "Financial controls enforce discipline across $59.070B total operating revenue, $54.354B operating expenses, and $4.716B operating income (8.0% operating margin).",
    "Non-financial controls monitor vital operational metrics including D-0 (on-time pushback), A-14 (on-time arrival), completion factor (99%+), and mishandled baggage rates.",
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
            "1. Establishing Standards: Defining specific, measurable benchmarks (e.g., Target D-0 of 75%, CASM-ex fuel cost reduction targets, zero Class A safety mishaps).",
            "2. Measuring Performance: Real-time telemetry streaming from aircraft engines via ACARS, automated gate scanner logs, and computerized financial accounting ledgers.",
            "3. Comparing with Standards: Daily 'Morning Operations Briefings' where system-wide performance variance is calculated and analyzed across all hubs.",
            "4. Corrective Action: Dynamic aircraft swapping, spare tail induction, flow control holding patterns, or tactical adjustments to seasonal block times.",
          ],
        },
      ],
    },
    {
      id: "6.2",
      heading: "6.2 Financial and Non-Financial Controls",
      sourceIds: ["sec-10k-2024", "bts-transtats-2024"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Effective corporate governance requires balancing stringent financial controllership with non-financial operational and customer experience indicators.",
        },
        {
          type: "chart",
          chartId: "financial-explorer",
          title: "Audited Financial Controllership ($ Millions, FY2024 Form 10-K)",
          description: "Accurate verified comparison of Operating Revenue ($59,070M), Operating Expenses ($54,354M), and Operating Income ($4,716M).",
          sourceIds: ["sec-10k-2024"],
        },
        {
          type: "stat",
          label: "Total Operating Revenue",
          value: "$59,070 M",
          context: "Form 10-K verified audited operating revenue (Not operating income)",
          sourceIds: ["sec-10k-2024"],
        },
        {
          type: "stat",
          label: "Total Operating Expenses",
          value: "$54,354 M",
          context: "Cost of fuel, labor, aircraft maintenance, landing fees, and depreciation",
          sourceIds: ["sec-10k-2024"],
        },
        {
          type: "stat",
          label: "Operating Income",
          value: "$4,716 M",
          context: "Net operating profit achieving an 8.0% operating margin",
          sourceIds: ["sec-10k-2024"],
        },
        {
          type: "analysis",
          title: "Critical Accounting Verification: Revenue vs. Operating Income",
          text: "Academic rigor mandates precise financial distinction: In previous drafts or unverified reports, $59.070 billion was erroneously referenced as 'operating income'. In reality, $59.070 billion represents Total Operating Revenue, against which $54.354 billion in operating expenses were incurred, yielding an Operating Income of $4.716 billion. Recognizing this difference is crucial for evaluating actual airline profitability margins.",
          evidenceStatus: "company-reported",
        },
        {
          type: "bullets",
          items: [
            "Non-Financial Operational Controls: Completion Factor (percentage of scheduled flights operated without cancellation, typically target $\\ge 99.0\\%$); DOT A-14 Arrival On-Time Rate; Mishandled Baggage Ratio per 1,000 enplaned bags.",
            "Customer Experience Controls: Transactional Net Promoter Score (tNPS) captured via in-app surveys within 2 hours of flight landing; seatback entertainment uptime; premium lounge satisfaction indices.",
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
          text: "Quality management in aviation is synonymous with absolute safety assurance and continuous process refinement, incorporating Six Sigma and FAA Part 5 Safety Management Systems (SMS).",
        },
        {
          type: "bullets",
          items: [
            "Safety Management System (SMS): A structured, organization-wide approach to managing safety risk, incorporating safety policy, safety risk management, safety assurance, and safety promotion.",
            "Aviation Safety Action Program (ASAP): A collaborative program between United, ALPA, and the FAA encouraging voluntary, non-punitive reporting of safety infractions or operational hazards by pilots and maintenance personnel.",
            "Flight Operational Quality Assurance (FOQA): Automated download and algorithmic analysis of digital flight data recorder parameters from every flight to detect unstabilized approaches or altitude excursions before an incident occurs.",
          ],
        },
        {
          type: "analysis",
          title: "Non-Punitive Reporting as a Quality Enabler",
          text: "Traditional quality control relies on inspection and punishment of defects. In high-reliability aviation management, punishing honest human error suppresses safety data. United's non-punitive ASAP system incentivizes 100% hazard transparency, enabling preventative engineering interventions.",
          evidenceStatus: "management-interpretation",
        },
      ],
    },
    {
      id: "6.4",
      heading: "6.4 Use of Technology in Control",
      sourceIds: ["term-report-2026", "sec-10k-2024"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "United utilizes sophisticated enterprise software, artificial intelligence algorithms, and Internet of Things (IoT) sensors to execute real-time operational control.",
        },
        {
          type: "bullets",
          items: [
            "Predictive Aircraft Maintenance: IoT engine sensors stream real-time exhaust gas temperatures and vibration metrics to United Tech Ops, triggering part replacements before inflight failure occurs.",
            "Dynamic Turn Management Tools: Mobile apps for ramp leads and flight attendants tracking live baggage loading progress, fueling completion, and catering delivery in countdown seconds.",
            "Automated Rebooking & Customer Care: Automated algorithmic rebooking during irregular operations, reassigning stranded passengers to partner flights and issuing hotel vouchers automatically through the United mobile app.",
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
            "Feedforward Controls: Weather predictive radar modeling, pre-shift crew rest verification, and preventative de-icing fluid staging before winter storms arrive.",
            "Concurrent Controls: Live Air Traffic Control speed and altitude adjustments, Network Operations Center rerouting around convective storm cells, and live baggage transfer scanning.",
            "Feedback Controls: Post-flight debriefings, weekly station reliability reviews, quarterly financial audits, and customer satisfaction survey sentiment scoring.",
          ],
        },
      ],
    },
  ],
};
