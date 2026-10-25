import { Chapter } from "./types";

export const CHAPTER_5: Chapter = {
  number: 5,
  title: "Leadership at United Airlines",
  subtitle: "Executive Vision, Crisis Communication, Cockpit Team Dynamics, and Labor Mediation",
  managementFunction: "Leading (POLC Function 4)",
  introduction:
    "Leadership at United Airlines operates at the intersection of transformational strategic vision, high-stakes operational crisis management, and cockpit psychological safety. Leading a geographically dispersed workforce under constant consumer scrutiny demands transparent communication, shared organizational purpose, and collaborative labor negotiation.",
  sourceIds: ["term-report-2026", "daft-management-13", "robbins-coulter-2022", "sec-10k-2025"],
  keyTakeaways: [
    "Executive leadership under CEO Scott Kirby combines data-driven network optimization with transparent, decisive crisis management (exemplified during early pandemic capacity reductions).",
    "Communication flows combine multi-channel digital town halls with real-time operational briefings (pre-flight crew briefings, dispatch releases).",
    "Motivation techniques reflect Herzberg's two-factor theory: mitigating hygiene dissatisfaction through competitive union wages while building intrinsic motivation through organizational pride and customer service impact.",
    "Crew Resource Management (CRM) represents the airline industry's greatest contribution to organizational leadership, replacing autocratic cockpit hierarchies with egalitarian team inquiry.",
  ],
  sections: [
    {
      id: "5.1",
      heading: "5.1 Leadership Style and Philosophy",
      sourceIds: ["term-report-2026", "daft-management-13"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Executive leadership at United reflects a combination of data-driven strategic planning and pragmatic situational leadership during operational disruptions.",
        },
        {
          type: "quote",
          quote: "Aviation is an industry where you cannot afford to hide from the facts. You look at the mathematical reality, communicate openly with your people, and make the hard decisions early.",
          author: "Scott Kirby",
          role: "Chief Executive Officer, United Airlines",
          sourceId: "term-report-2026",
        },
        {
          type: "bullets",
          items: [
            "Data-Driven Analytical Focus: Emphasizing mathematical revenue management models and aircraft gauge economics over subjective intuition.",
            "Decisive Crisis Leadership: Demonstrated during the onset of the COVID-19 pandemic, when United became the first major U.S. airline to proactively ground international capacity and issue early liquidity warnings.",
            "Transformational Strategy: Aligning corporate investments behind the 'United Next' multi-year fleet and cabin modernization narrative.",
          ],
        },
        {
          type: "analysis",
          title: "Theoretical Lens: Applying Hersey-Blanchard Situational Leadership",
          text: "Through Hersey & Blanchard's situational leadership model, researchers observe that executive leadership exercises a delegating style regarding functional corporate initiatives, while flight operations and station turn management apply directive standard procedures to guarantee regulatory compliance and flight safety.",
          evidenceStatus: "management-interpretation",
        },
      ],
    },
    {
      id: "5.2",
      heading: "5.2 Communication Practices",
      sourceIds: ["term-report-2026", "robbins-coulter-2022"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Effective communication across a 24/7 global network requires bridging vertical corporate hierarchies with lateral operational teams.",
        },
        {
          type: "bullets",
          items: [
            "Downward Communication: Executive video briefings, company-wide intranet announcements, quarterly town halls, and direct messages explaining financial earnings and fleet plans.",
            "Horizontal Operational Communication: Real-time ACARS data links between cockpits and dispatchers, digital gate updates, and pre-departure briefings between flight attendants and flight deck crews.",
            "Upward Feedback Channels: Non-punitive safety reporting programs (such as ASAP), anonymous employee pulse surveys, and formal labor-management consultation committees.",
          ],
        },
      ],
    },
    {
      id: "5.3",
      heading: "5.3 Motivation Techniques",
      sourceIds: ["robbins-coulter-2022", "term-report-2026"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Motivation at United Airlines can be analyzed through Frederick Herzberg's Motivation-Hygiene Theory. Given the unpredictable nature of airline operations, hygiene factors must be stabilized before intrinsic motivators can take hold.",
        },
        {
          type: "bullets",
          items: [
            "Hygiene Factors: Market-aligned hourly pay rates, comprehensive health coverage, fatigue management policies, and job security protections negotiated under collective bargaining agreements.",
            "Motivator Factors: Employee recognition programs, opportunities for progression into international widebody flying, and the intrinsic pride associated with facilitating global transportation.",
          ],
        },
        {
          type: "analysis",
          title: "Theoretical Lens: Herzberg's Dual-Factor Framework Applied to Frontlines",
          text: "Organizational research indicates that frontline airline personnel (gate agents and cabin crew) often experience emotional labor fatigue. Beyond baseline compensation (hygiene), empowering frontline staff with discretion to resolve customer service disruptions acts as an intrinsic motivator by restoring personal agency.",
          evidenceStatus: "management-interpretation",
        },
      ],
    },
    {
      id: "5.4",
      heading: "5.4 Teamwork and Group Dynamics",
      sourceIds: ["faa-sms-2023", "daft-management-13"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Perhaps the most celebrated teamwork paradigm in modern organizational psychology is Crew Resource Management (CRM), pioneered by United Airlines in the early 1980s.",
        },
        {
          type: "diagram",
          diagramId: "crm-model",
          title: "Crew Resource Management (CRM) Interaction Paradigm",
          description: "Evolution from autocratic flight deck authority to participatory inquiry, assertive communication, and shared mental models.",
        },
        {
          type: "bullets",
          items: [
            "Flattening the Cockpit Gradient: Fostering an atmosphere where junior First Officers are mandated to speak up and question decisions if safety parameters are breached.",
            "Shared Mental Models: Establishing standardized pre-flight briefings covering expected weather, turbulence, aircraft weight, and contingency plans so all crew members share identical operational expectations.",
            "Transient Team Coordination: Unlike conventional office teams that remain together for years, flight crews change nearly every trip sequence; CRM provides the universal protocol allowing strangers to function as an elite unit within minutes.",
          ],
        },
      ],
    },
    {
      id: "5.5",
      heading: "5.5 Conflict Management and Resolution",
      sourceIds: ["sec-10k-2025", "robbins-coulter-2022"],
      blocks: [
        {
          type: "paragraph",
          lead: true,
          text: "Conflict management at United manifests across two distinct planes: macro institutional labor-management negotiations, and micro frontline customer-employee disputes.",
        },
        {
          type: "bullets",
          items: [
            "Railway Labor Act (RLA) Mediation: Formal statutory procedures requiring multi-step negotiation, federal mediation by the National Mediation Board (NMB), and mandatory cooling-off periods before any strike or lockout can occur.",
            "Frontline De-escalation Training: Standardized protocols equipping gate agents and cabin crew to defuse agitated passengers over flight delays, cancellations, or seating reassignments.",
          ],
        },
        {
          type: "analysis",
          title: "Interest-Based vs. Positional Bargaining",
          text: "Historical airline labor relations were defined by contentious positional bargaining. In recent contract cycles (including pilot contract ratifications), United leadership has adopted interest-based bargaining—aligning wage increases with operational scheduling flexibility to fund joint gains.",
          evidenceStatus: "report-derived",
        },
      ],
    },
  ],
};
