import React, { useState } from "react";
import { ArrowRight, Layers, CheckCircle2, RefreshCw } from "lucide-react";

interface ManagementNode {
  id: "planning" | "organizing" | "staffing" | "leadership" | "controlling";
  functionName: string;
  chapterNumber: number;
  headline: string;
  scenarioRole: string;
  actions: string[];
  interconnections: string[];
}

const MANAGEMENT_FUNCTIONS: ManagementNode[] = [
  {
    id: "planning",
    functionName: "Planning",
    chapterNumber: 2,
    headline: "Fleet Strategy, Capital Allocation & Capacity Modeling",
    scenarioRole: "The Strategic Catalyst",
    actions: [
      "Board of Directors approves order for 700+ Boeing 737 MAX, 787, and Airbus A321neo airframes.",
      "Network Planning models a 30% domestic gauge expansion to eliminate unprofitable 50-seat regional jets.",
      "Financial risk hedging models simulate crack-spread volatility and debt service across a 10-year delivery schedule.",
    ],
    interconnections: [
      "Requires Organizing to define engineering transition teams and gate infrastructure.",
      "Triggers Staffing to calculate pilot and mechanic recruitment targets 3-5 years ahead of deliveries.",
    ],
  },
  {
    id: "organizing",
    functionName: "Organizing",
    chapterNumber: 3,
    headline: "Departmental Alignment, Tech Ops Scaling & Hub Adaptation",
    scenarioRole: "The Structural Enabler",
    actions: [
      "Technical Operations establishes specialized A321neo and 737 MAX maintenance lines at San Francisco and Houston.",
      "Station managers modify airport gate electrification and jet bridge configurations for larger wingspans.",
      "The Network Operations Center (NOC) recalibrates turn-around times and line-maintenance spare buffers.",
    ],
    interconnections: [
      "Translates Planning strategy into operational division of labor.",
      "Defines supervisory spans and line-of-command for new aircraft type ratings.",
    ],
  },
  {
    id: "staffing",
    functionName: "Staffing",
    chapterNumber: 4,
    headline: "Aviate Pipeline, Simulator Acquisition & Type-Rating Certification",
    scenarioRole: "The Human Engine",
    actions: [
      "United Aviate Academy in Goodyear, AZ accelerates student pipeline to supply 500+ commercial pilots annually.",
      "Denver Flight Training Center inducts dozens of new Level-D full-flight simulators.",
      "Inflight Services updates cabin crew training curricula for new seatback IFE and premium seat configurations.",
    ],
    interconnections: [
      "Depends on Planning's aircraft delivery timelines to avoid pilot over- or under-staffing.",
      "Requires Leadership to motivate crews through rigorous FAA check-rides and transition training.",
    ],
  },
  {
    id: "leadership",
    functionName: "Leadership",
    chapterNumber: 5,
    headline: "Change Management, Labor Negotiation & Cultural Alignment",
    scenarioRole: "The Cultural Catalyst",
    actions: [
      "CEO Scott Kirby conducts system-wide town halls explaining the long-term margin benefits of upgauged fleet economics.",
      "Labor relations leaders negotiate new collective bargaining agreements with ALPA and AFA-CWA for new airframes.",
      "Crew Resource Management (CRM) standardizes operating philosophy across newly mixed fleet types.",
    ],
    interconnections: [
      "Bridges union negotiations (Staffing) with enterprise vision (Planning).",
      "Creates psychological safety required for non-punitive quality and control reporting.",
    ],
  },
  {
    id: "controlling",
    functionName: "Controlling",
    chapterNumber: 6,
    headline: "Telemetry Tracking, CASM Auditing & Feedforward Correction",
    scenarioRole: "The Cybernetic Safeguard",
    actions: [
      "Real-time ACARS engine telemetry monitors fuel burn variance against manufacturer guarantees.",
      "Finance tracks Cost per Available Seat Mile excluding fuel (CASM-ex) to verify projected gauge savings.",
      "Safety Management Systems (SMS) conduct continuous hazard audits during initial route proving runs.",
    ],
    interconnections: [
      "Feeds variance data back into Planning for future aircraft order options and schedule adjustments.",
      "Audits the performance standards established in Organizing and Staffing.",
    ],
  },
];

export const ManagementMap: React.FC = () => {
  const [activeFunctionId, setActiveFunctionId] = useState<string>("planning");
  const activeNode =
    MANAGEMENT_FUNCTIONS.find((f) => f.id === activeFunctionId) ||
    MANAGEMENT_FUNCTIONS[0];

  return (
    <div className="bg-[#0B1929] text-[#F5F2EA] rounded-xl p-6 lg:p-8 border border-[#173B5E] shadow-xl my-8">
      {/* Header */}
      <div className="pb-6 border-b border-[#173B5E]">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-[#C6A66B] font-medium">
            Signature Analytical Feature · Integrative Case Scenario
          </span>
          <span className="text-xs text-[#9DAFB7]">· The POLC Nexus</span>
        </div>
        <h3 className="font-serif text-2xl lg:text-3xl text-white mt-1">
          A United Next Fleet Expansion: The Five-Function Interconnection
        </h3>
        <p className="text-xs text-[#9DAFB7] mt-1.5 leading-relaxed max-w-3xl">
          A major operational decision does not live in an academic vacuum. Explore how ordering 700+
          aircraft cascades across Planning, Organizing, Staffing, Leadership, and Controlling.
        </p>
      </div>

      {/* Function Progress / Selector Rail */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 my-6">
        {MANAGEMENT_FUNCTIONS.map((node) => {
          const isSelected = node.id === activeFunctionId;
          return (
            <button
              key={node.id}
              onClick={() => setActiveFunctionId(node.id)}
              className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#C6A66B] text-[#0B1929] border-[#C6A66B] shadow-lg scale-102"
                  : "bg-[#173B5E]/40 text-[#F5F2EA] border-[#173B5E] hover:border-[#C6A66B]/60"
              }`}
            >
              <div className="flex items-center justify-between text-[11px] mb-1 font-mono">
                <span className={isSelected ? "text-[#0B1929] font-bold" : "text-[#C6A66B]"}>
                  Chapter 0{node.chapterNumber}
                </span>
                <span className="opacity-75">POLC #{node.chapterNumber - 1}</span>
              </div>
              <div className="font-serif text-base font-bold leading-tight">
                {node.functionName}
              </div>
              <div
                className={`text-[11px] mt-1 truncate ${
                  isSelected ? "text-[#0B1929]/80 font-medium" : "text-[#9DAFB7]"
                }`}
              >
                {node.scenarioRole}
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Detail Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#173B5E]/30 rounded-xl p-6 border border-[#173B5E]">
        {/* Actions & Implementation Column (7 cols) */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 text-xs text-[#C6A66B] font-mono uppercase mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Operational Manifestation · {activeNode.scenarioRole}</span>
          </div>

          <h4 className="font-serif text-xl text-white font-medium mb-3">
            {activeNode.headline}
          </h4>

          <div className="space-y-2.5 mt-4">
            {activeNode.actions.map((act, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 text-xs text-[#F5F2EA]/90 leading-relaxed bg-[#0B1929]/50 p-3 rounded border border-[#173B5E]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                <span>{act}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Functional Interdependence Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#0B1929]/70 rounded-lg p-5 border border-[#173B5E]">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#C6A66B] font-mono uppercase mb-2">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Cross-Functional Linkages</span>
            </div>
            <h5 className="font-serif text-base text-white mb-3">
              How {activeNode.functionName} Connects to the Whole
            </h5>

            <div className="space-y-3">
              {activeNode.interconnections.map((link, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-[#9DAFB7] leading-relaxed">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B] shrink-0 mt-0.5" />
                  <span>{link}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#173B5E] text-[11px] text-[#9DAFB7] italic">
            "No management function exists as an island. Planning without Controlling is blind; Organizing without Leadership is inert."
          </div>
        </div>
      </div>
    </div>
  );
};
