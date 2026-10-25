import { Chapter } from "./types";

export const CHAPTER_4: Chapter = {
  number: 4,
  title: "Staffing at United Airlines",
  subtitle: "Workforce Continuity, Talent Acquisition, Training Academies, and Labor Relations",
  managementFunction: "Staffing (POLC Function 3)",
  introduction:
    "Staffing at United Airlines encompasses human capital management within a heavily unionized, federally licensed workforce. The enterprise must forecast multi-year labor requirements against mandatory retirement curves (such as the FAA Age-65 rule for commercial airline pilots), complex collective bargaining agreements, and rigorous safety certifications.",
  sourceIds: ["aviators-academy-2023", "sec-10k-2024", "daft-management-13"],
  keyTakeaways: [
    "Over 80% of United Airlines' frontline workforce is represented by labor unions under the Railway Labor Act (RLA), requiring formal collective bargaining rather than at-will employment terms.",
    "The United Aviate Academy represents a strategic backward vertical integration into pilot recruitment, addressing systemic commercial aviator shortages.",
    "Training and development are foundational safety barriers, featuring world-class full-motion flight simulators at United's Flight Training Center in Denver.",
    "Retention strategies balance contractual seniority benefits, competitive profit-sharing formulas, and non-monetary career progression pathways.",
  ],
  sections: [
    {
      id: "4.1",
      heading: "4.1 HR Planning and Recruitment Strategies",
      sourceIds: ["aviators-academy-2023", "sec-10k-2024"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Human resource planning at United begins with multi-year fleet delivery projections. For every new widebody Boeing 787 entering the fleet, the airline must recruit, train, and certify approximately 16 to 20 pilots and dozens of cabin crew and mechanics.",
        },
        {
          type: "stat",
          label: "Total Full-Time Equivalent Employees",
          value: "103,000+",
          context: "Active worldwide personnel as reported in SEC Form 10-K",
          sourceIds: ["sec-10k-2024"],
        },
        {
          type: "stat",
          label: "Union Representation Rate",
          value: "~84%",
          context: "Frontline personnel represented by ALPA, AFA-CWA, IAM, and Teamsters",
          sourceIds: ["sec-10k-2024"],
        },
        {
          type: "bullets",
          items: [
            "United Aviate Academy: Operating a flight training academy in Goodyear, Arizona, designed to train 5,000 new pilots by 2030, with a landmark commitment that at least 50% of students be women or people of color.",
            "University & Military Partnerships: Direct pathway agreements with collegiate aviation programs (Embry-Riddle, Purdue, University of North Dakota) and military transition pipelines.",
            "High-Volume Airport Hiring: Seasonal and permanent recruitment drives for ramp service agents, gate agents, and baggage handlers across key hub markets.",
          ],
        },
        {
          type: "analysis",
          title: "Backward Vertical Integration in Labor Supply",
          text: "In strategic management, backward integration typically applies to raw materials. United's decision to purchase and operate its own flight school (Aviate Academy) represents human capital backward integration—mitigating the existential business threat of pilot supply bottlenecks.",
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
          text: "Training at United Airlines is a continuous, career-long mandate governed by FAA Advanced Qualification Program (AQP) standards rather than traditional episodic corporate training.",
        },
        {
          type: "bullets",
          items: [
            "Denver Flight Training Center: The world's largest flight training facility, housing over 40 Level-D full-flight simulators where line pilots undergo mandatory semi-annual recurrent training.",
            "Crew Resource Management (CRM): Human-factors training emphasizing open communication, situational awareness, and psychological safety across pilot and flight attendant crews.",
            "Technical Operations Apprenticeships: Comprehensive classroom, airframe, and powerplant hands-on curricula at major maintenance bases (San Francisco, Orlando, Houston).",
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
            "Corporate & Station Management: Evaluated using 360-degree leadership reviews and Balanced Scorecard objectives tied to station on-time performance (D-0, A-14), cost control, Net Promoter Score, and employee engagement surveys.",
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
      sourceIds: ["sec-10k-2024", "term-report-2026"],
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
            "Space-Available Travel Privileges: Standby flight benefits for employees, spouses, and dependents across United's global network and interline carrier partners.",
            "Comprehensive Health & Retirement Plans: Employer-funded 401(k) matching and medical benefits designed to support career lifespans extending 30+ years.",
          ],
        },
      ],
    },
    {
      id: "4.5",
      heading: "4.5 Succession Planning",
      sourceIds: ["sec-10k-2024", "robbins-coulter-2022"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Succession planning ensures operational continuity across two critical domains: regulatory flight-deck command progression and C-suite executive leadership.",
        },
        {
          type: "bullets",
          items: [
            "Flight Deck Captain Upgrade: A structured, seniority-ordered pipeline where experienced First Officers accumulate flight hours, undergo rigorous Command Leadership courses, and pass FAA line checks to assume the four-stripe Captain's seat.",
            "Executive Leadership Continuity: The Board of Directors maintains formal succession slates for the CEO and key executive vice presidents, ensuring smooth transitions such as Scott Kirby's elevation from President to CEO in May 2020.",
          ],
        },
      ],
    },
  ],
};
