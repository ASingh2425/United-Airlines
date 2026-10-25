import { Chapter } from "./types";

export const CHAPTER_4: Chapter = {
  number: 4,
  title: "Staffing at United Airlines",
  subtitle: "Workforce Continuity, Talent Acquisition, Training Academies, and Labor Relations",
  managementFunction: "Staffing (POLC Function 3)",
  introduction:
    "Staffing at United Airlines encompasses human capital management within a heavily unionized, federally licensed workforce. The enterprise must forecast multi-year labor requirements against mandatory retirement curves (such as the FAA Age-65 rule for commercial airline pilots), complex collective bargaining agreements, and rigorous safety certifications.",
  sourceIds: ["aviators-academy-2023", "sec-10k-2025", "daft-management-13"],
  keyTakeaways: [
    "Over 80% of United Airlines' frontline workforce is represented by labor unions under the Railway Labor Act (RLA), requiring formal collective bargaining rather than at-will employment terms.",
    "The United Aviate Academy represents a strategic backward vertical integration into pilot recruitment, addressing systemic commercial aviator shortages.",
    "Training and development are foundational safety barriers, featuring full-motion flight simulators at United's Flight Training Center in Denver.",
    "Retention strategies balance contractual seniority benefits, competitive profit-sharing formulas, and non-monetary career progression pathways.",
  ],
  sections: [
    {
      id: "4.1",
      heading: "4.1 HR Planning and Recruitment Strategies",
      sourceIds: ["aviators-academy-2023", "sec-10k-2025"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Human resource planning at United begins with multi-year fleet delivery projections. For each widebody Boeing 787 entering the fleet, the airline must recruit, train, and certify approximately 16 to 20 pilots and dozens of cabin crew and mechanics.",
        },
        {
          type: "stat",
          label: "Total Full-Time Equivalent Employees",
          value: "~103,000",
          context: "Active worldwide personnel as reported in audited SEC Form 10-K disclosures",
          sourceIds: ["sec-10k-2025"],
        },
        {
          type: "stat",
          label: "Frontline Union Representation",
          value: "~82–84%",
          context: "Estimated proportion of frontline personnel represented by collective bargaining units (ALPA, AFA-CWA, IAM, Teamsters)",
          sourceIds: ["sec-10k-2025"],
        },
        {
          type: "bullets",
          items: [
            "United Aviate Academy: Operating a flight training academy in Goodyear, Arizona, designed to expand pilot supply pipelines with public diversity outreach goals.",
            "Collegiate & Military Partnerships: Pathway partnerships with accredited collegiate aviation programs and military aviator transition programs.",
            "Hub Station Recruitment: Periodic hiring programs for airport customer service agents, aircraft mechanics, and baggage handlers across primary hubs.",
          ],
        },
        {
          type: "analysis",
          title: "Backward Vertical Integration in Labor Supply",
          text: "In strategic management, backward vertical integration typically applies to raw physical materials. United's establishment of the Aviate Academy represents human capital backward integration—mitigating the strategic business vulnerability of pilot supply shortages through direct ownership of early-stage training infrastructure.",
          evidenceStatus: "management-interpretation",
        },
      ],
    },
    {
      id: "4.2",
      heading: "4.2 Training and Development Practices",
      sourceIds: ["aviators-academy-2023", "faa-sms-2023"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Training at United Airlines is a continuous, career-long mandate governed by FAA Advanced Qualification Program (AQP) standards rather than occasional corporate workshops.",
        },
        {
          type: "bullets",
          items: [
            "Denver Flight Training Center: A centralized flight training campus housing dozens of Level-D full-flight simulators where pilots undergo mandatory recurring evaluations.",
            "Crew Resource Management (CRM): Human-factors training emphasizing open communication, situational awareness, and psychological safety across flight decks and cabin teams.",
            "Technical Operations Apprenticeships: Structured airframe, powerplant, and avionics training programs at major maintenance centers.",
          ],
        },
      ],
    },
    {
      id: "4.3",
      heading: "4.3 Performance Appraisal Methods",
      sourceIds: ["robbins-coulter-2022", "term-report-2026"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Performance evaluation within United operates under a dual paradigm dictated by labor category: contractual seniority standards for unionized frontline personnel, and competency-based MBO appraisals for management.",
        },
        {
          type: "bullets",
          items: [
            "Frontline Union Personnel: Appraised primarily on binary compliance metrics—attendance reliability, technical qualification check-rides, safety audit adherence, and customer commendations. Seniority dictates route bidding and shift preferences under collective bargaining rules.",
            "Corporate & Station Management: Evaluated using multi-rater reviews and performance objectives tied to station on-time performance (D-0, A-14), cost management, customer Net Promoter Scores, and employee engagement.",
          ],
        },
        {
          type: "analysis",
          title: "The Seniority Principle vs. Meritocracy",
          text: "Management theory debates meritocracy versus seniority. In commercial aviation, the strict seniority system required by labor unions eliminates internal political rivalry for prestigious international flight schedules, replacing subjectivity with objective, transparent tenure rankings.",
          evidenceStatus: "management-interpretation",
        },
      ],
    },
    {
      id: "4.4",
      heading: "4.4 Retention and Motivation Initiatives",
      sourceIds: ["sec-10k-2025", "term-report-2026"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Given the substantial investment required to recruit and certify airline professionals, retention initiatives combine financial incentives, non-cash perquisites, and culture-building.",
        },
        {
          type: "bullets",
          items: [
            "Profit-Sharing Program: Contractually defined pools distributing a percentage of pre-tax earnings to eligible employees when corporate profitability hurdles are met.",
            "Space-Available Travel Privileges: Standby flight privileges for employees and eligible family members across United's global network and interline carrier partners.",
            "Comprehensive Health & Retirement Plans: Employer-funded 401(k) contributions and healthcare programs designed to support multi-decade career tenures.",
          ],
        },
      ],
    },
    {
      id: "4.5",
      heading: "4.5 Succession Planning",
      sourceIds: ["sec-10k-2025", "robbins-coulter-2022"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Succession planning ensures operational continuity across two critical domains: regulatory flight-deck command progression and C-suite executive leadership.",
        },
        {
          type: "bullets",
          items: [
            "Flight Deck Captain Upgrade: A structured, seniority-ordered pipeline where experienced First Officers accumulate flight hours, undergo command leadership evaluations, and complete FAA line checks to qualify for Captain positions.",
            "Executive Leadership Continuity: The Board of Directors maintains formal succession planning for the CEO and key executive vice presidents to manage transitions smoothly.",
          ],
        },
      ],
    },
  ],
};
