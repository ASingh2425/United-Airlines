import React, { useState } from "react";
import { Clock, Shield, Network, Users, ArrowRight, Activity, Cpu } from "lucide-react";

// Chapter 2: Three-Tier Planning Hierarchy
export const PlanningHierarchyDiagram: React.FC = () => {
  const [activeTier, setActiveTier] = useState<number>(0);

  const tiers = [
    {
      name: "Strategic Planning",
      horizon: "5–15 Years",
      actors: "Board of Directors, CEO, CFO, SVP Corporate Strategy",
      artifacts: "United Next Fleet Strategy, Sustainability Net-Zero 2050, M&A, Capital Structure",
      focus: "Long-term positioning, multi-billion-dollar aircraft purchase commitments, international bilateral route rights.",
    },
    {
      name: "Tactical Planning",
      horizon: "6–18 Months",
      actors: "Managing Directors of Network Planning, Revenue Management, Marketing",
      artifacts: "Seasonal Banked Schedules (Summer Europe / Winter Caribbean), Dynamic Fare Buckets, Maintenance Overhaul Rotations",
      focus: "Optimizing capacity allocation against seasonal booking curves and competitor capacity actions.",
    },
    {
      name: "Operational Planning",
      horizon: "Day-of-Operations to 30 Days",
      actors: "Network Operations Center (NOC), Station Managers, Chief Pilots, Dispatchers",
      artifacts: "Individual Aircraft Tail Routing, Crew Trip Pairings, Dispatch Flight Releases, Gate Assignment Matrices",
      focus: "Minute-by-minute execution, severe weather reroutes, fuel tankering, and mechanical swap recovery.",
    },
  ];

  return (
    <div className="bg-[#0B1929] text-[#F5F2EA] rounded-xl p-6 border border-[#173B5E] my-6">
      <div className="flex items-center justify-between pb-4 border-b border-[#173B5E] mb-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#C6A66B]">
            Interactive Framework
          </span>
          <h4 className="font-serif text-lg text-white font-medium">
            United Airlines Three-Tier Planning Hierarchy
          </h4>
        </div>
        <span className="text-xs text-[#9DAFB7]">Select tier to inspect details</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        {tiers.map((t, idx) => (
          <button
            key={t.name}
            onClick={() => setActiveTier(idx)}
            className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
              activeTier === idx
                ? "bg-[#C6A66B] text-[#0B1929] border-[#C6A66B] font-medium shadow-md"
                : "bg-[#173B5E]/30 text-[#F5F2EA] border-[#173B5E] hover:border-[#C6A66B]/50"
            }`}
          >
            <div className="flex items-center justify-between text-xs mb-1 font-mono">
              <span className={activeTier === idx ? "text-[#0B1929] font-bold" : "text-[#C6A66B]"}>
                Tier 0{idx + 1}
              </span>
              <span className="opacity-80">{t.horizon}</span>
            </div>
            <div className="font-serif text-sm font-semibold">{t.name}</div>
          </button>
        ))}
      </div>

      <div className="bg-[#173B5E]/40 p-4 rounded-lg border border-[#173B5E] text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2 pb-2 border-b border-[#173B5E]/60">
          <div>
            <span className="text-[#9DAFB7] block">Key Decision Stakeholders:</span>
            <span className="text-[#F5F2EA] font-medium">{tiers[activeTier].actors}</span>
          </div>
          <div>
            <span className="text-[#9DAFB7] block">Primary Planning Artifacts:</span>
            <span className="text-[#C6A66B] font-mono font-medium">{tiers[activeTier].artifacts}</span>
          </div>
        </div>
        <div>
          <span className="text-[#9DAFB7] block mb-1">Operational Focus:</span>
          <p className="text-[#F5F2EA]/90 leading-relaxed">{tiers[activeTier].focus}</p>
        </div>
      </div>
    </div>
  );
};

// Chapter 3: Corporate Line & Staff Governance
export const OrgHierarchyDiagram: React.FC = () => {
  return (
    <div className="bg-[#0B1929] text-[#F5F2EA] rounded-xl p-6 border border-[#173B5E] my-6">
      <div className="pb-4 border-b border-[#173B5E] mb-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#C6A66B]">
          Organizational Architecture
        </span>
        <h4 className="font-serif text-lg text-white font-medium">
          Line and Staff Dual-Axis Hierarchy
        </h4>
      </div>

      <div className="space-y-3 text-xs">
        {/* Level 1: Board & CEO */}
        <div className="bg-[#C6A66B]/15 border border-[#C6A66B] p-3 rounded text-center">
          <div className="font-serif text-sm font-bold text-[#C6A66B]">
            Board of Directors & Chief Executive Officer (Scott Kirby)
          </div>
          <span className="text-[11px] text-[#9DAFB7]">
            Overall statutory stewardship, capital allocation, and governance
          </span>
        </div>

        {/* Level 2: Line vs Staff Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Line Operations */}
          <div className="bg-[#173B5E]/50 border border-[#173B5E] p-4 rounded-lg">
            <span className="font-serif font-bold text-white text-sm block mb-1 flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-[#C6A66B]" />
              Line Operations (Revenue & Execution)
            </span>
            <p className="text-[11px] text-[#9DAFB7] mb-3">
              Direct statutory responsibility for flying passengers and maintaining safety.
            </p>
            <div className="space-y-2">
              <div className="bg-[#0B1929] p-2 rounded border border-[#173B5E]">
                <strong className="text-[#F5F2EA] block">Flight Operations</strong>
                <span className="text-[#9DAFB7] text-[11px]">Chief Pilot, Line Pilots, Simulator Standards</span>
              </div>
              <div className="bg-[#0B1929] p-2 rounded border border-[#173B5E]">
                <strong className="text-[#F5F2EA] block">Technical Operations (TechOps)</strong>
                <span className="text-[#9DAFB7] text-[11px]">A&P Mechanics, Airframe Overhaul, Avionics</span>
              </div>
              <div className="bg-[#0B1929] p-2 rounded border border-[#173B5E]">
                <strong className="text-[#F5F2EA] block">Airport & Inflight Operations</strong>
                <span className="text-[#9DAFB7] text-[11px]">Station Leads, Gate Agents, Cabin Crew, Ramp Handling</span>
              </div>
            </div>
          </div>

          {/* Staff Advisory */}
          <div className="bg-[#173B5E]/30 border border-[#173B5E] p-4 rounded-lg">
            <span className="font-serif font-bold text-white text-sm block mb-1 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#9DAFB7]" />
              Staff Advisory & Corporate Infrastructure
            </span>
            <p className="text-[11px] text-[#9DAFB7] mb-3">
              Specialized advisory, legal, analytical, and human capital support.
            </p>
            <div className="space-y-2">
              <div className="bg-[#0B1929] p-2 rounded border border-[#173B5E]">
                <strong className="text-[#F5F2EA] block">Legal & Regulatory Affairs</strong>
                <span className="text-[#9DAFB7] text-[11px]">FAA, DOT, NTSB, and International Bilaterals</span>
              </div>
              <div className="bg-[#0B1929] p-2 rounded border border-[#173B5E]">
                <strong className="text-[#F5F2EA] block">Finance & Treasury</strong>
                <span className="text-[#9DAFB7] text-[11px]">Aircraft Leasing, Fuel Hedging, Investor Relations</span>
              </div>
              <div className="bg-[#0B1929] p-2 rounded border border-[#173B5E]">
                <strong className="text-[#F5F2EA] block">Human Resources & Labor Relations</strong>
                <span className="text-[#9DAFB7] text-[11px]">Collective Bargaining (ALPA, AFA, IAM), Aviate Academy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Chapter 3: The NOC Integrator
export const NocCoordinationDiagram: React.FC = () => {
  return (
    <div className="bg-[#0B1929] text-[#F5F2EA] rounded-xl p-6 border border-[#173B5E] my-6">
      <div className="pb-4 border-b border-[#173B5E] mb-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#C6A66B]">
          Coordination Mechanism
        </span>
        <h4 className="font-serif text-lg text-white font-medium">
          The Network Operations Center (NOC) as Chief Integrator
        </h4>
      </div>

      <div className="relative p-6 bg-[#173B5E]/30 rounded-lg border border-[#173B5E]">
        <div className="text-center max-w-sm mx-auto bg-[#C6A66B] text-[#0B1929] p-4 rounded-lg font-serif font-bold shadow-lg">
          <Cpu className="w-5 h-5 mx-auto mb-1 text-[#0B1929]" />
          Network Operations Center (NOC · Chicago)
          <span className="block font-sans text-xs font-normal text-[#0B1929]/80 mt-0.5">
            24/7 Real-Time Operational Nerve Center
          </span>
        </div>

        {/* Satellites feeding in */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 text-xs text-center">
          <div className="bg-[#0B1929] p-3 rounded border border-[#173B5E]">
            <strong className="text-white block font-serif">Flight Dispatch</strong>
            <span className="text-[11px] text-[#9DAFB7]">Flight plans, weather rerouting, fuel load</span>
          </div>
          <div className="bg-[#0B1929] p-3 rounded border border-[#173B5E]">
            <strong className="text-white block font-serif">Crew Scheduling</strong>
            <span className="text-[11px] text-[#9DAFB7]">Pilot & flight attendant legal duty times</span>
          </div>
          <div className="bg-[#0B1929] p-3 rounded border border-[#173B5E]">
            <strong className="text-white block font-serif">Maintenance Control</strong>
            <span className="text-[11px] text-[#9DAFB7]">Aircraft swaps, MEL items, deferrals</span>
          </div>
          <div className="bg-[#0B1929] p-3 rounded border border-[#173B5E]">
            <strong className="text-white block font-serif">Customer Care</strong>
            <span className="text-[11px] text-[#9DAFB7]">IROPS recovery, hotel vouchers, rebooking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Chapter 5: Crew Resource Management
export const CrmModelDiagram: React.FC = () => {
  return (
    <div className="bg-[#0B1929] text-[#F5F2EA] rounded-xl p-6 border border-[#173B5E] my-6">
      <div className="pb-4 border-b border-[#173B5E] mb-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#C6A66B]">
          Human Factors & Leadership
        </span>
        <h4 className="font-serif text-lg text-white font-medium">
          Crew Resource Management (CRM): Authority Gradient Transformation
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="bg-red-950/20 border border-red-900/40 p-4 rounded-lg">
          <span className="text-red-400 font-bold block mb-1 font-mono uppercase">
            Legacy Autocratic Flight Deck (Pre-1980)
          </span>
          <p className="text-[#9DAFB7] mb-3 leading-relaxed">
            The Captain wields unilateral, unquestioned authority. Junior officers hesitate to speak up even when detecting critical flight errors.
          </p>
          <ul className="space-y-1.5 text-red-200/90 list-disc list-inside">
            <li>Steep cockpit authority gradient</li>
            <li>Suppressed communication of hazards</li>
            <li>Excessive cognitive overload on Captain alone</li>
            <li>Contributed to historic aviation accidents</li>
          </ul>
        </div>

        <div className="bg-[#173B5E]/40 border border-[#C6A66B]/50 p-4 rounded-lg">
          <span className="text-[#C6A66B] font-bold block mb-1 font-mono uppercase">
            Modern CRM Shared Mental Model (Pioneered by United)
          </span>
          <p className="text-[#F5F2EA]/90 mb-3 leading-relaxed">
            Participatory inquiry, psychological safety, and assertive standard phraseology ('I have a concern').
          </p>
          <ul className="space-y-1.5 text-[#F5F2EA]/90 list-disc list-inside">
            <li>Flattened cockpit authority gradient</li>
            <li>Mandatory check-and-balance cross-verification</li>
            <li>Inquiry, advocacy, and conflict resolution protocols</li>
            <li>Foundation of the modern zero-accident safety era</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Chapter 6: Cybernetic Control Loop
export const ControlLoopDiagram: React.FC = () => {
  return (
    <div className="bg-[#0B1929] text-[#F5F2EA] rounded-xl p-6 border border-[#173B5E] my-6">
      <div className="pb-4 border-b border-[#173B5E] mb-4">
        <span className="text-xs font-mono uppercase tracking-wider text-[#C6A66B]">
          Cybernetic Feedback Loop
        </span>
        <h4 className="font-serif text-lg text-white font-medium">
          Closed-Loop Operational & Financial Control
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        <div className="bg-[#173B5E]/40 p-4 rounded-lg border border-[#173B5E]">
          <span className="text-[#C6A66B] font-mono font-bold block mb-1">01. Establish Standards</span>
          <p className="text-[#9DAFB7] text-[11px] mb-2">Define explicit, quantified target parameters.</p>
          <span className="text-[#F5F2EA] font-medium block">
            • D-0 ≥ 75%<br />
            • CASM-ex Targets<br />
            • 0 Class A Mishaps
          </span>
        </div>

        <div className="bg-[#173B5E]/40 p-4 rounded-lg border border-[#173B5E]">
          <span className="text-[#C6A66B] font-mono font-bold block mb-1">02. Measure Performance</span>
          <p className="text-[#9DAFB7] text-[11px] mb-2">Automated real-time operational telemetry.</p>
          <span className="text-[#F5F2EA] font-medium block">
            • ACARS Engine Stream<br />
            • Gate Scanner Logs<br />
            • Audited General Ledger
          </span>
        </div>

        <div className="bg-[#173B5E]/40 p-4 rounded-lg border border-[#173B5E]">
          <span className="text-[#C6A66B] font-mono font-bold block mb-1">03. Compare Variance</span>
          <p className="text-[#9DAFB7] text-[11px] mb-2">Identify delta exceeding tolerance thresholds.</p>
          <span className="text-[#F5F2EA] font-medium block">
            • Morning Briefings<br />
            • Controllable vs Weather<br />
            • Root-Cause Analysis
          </span>
        </div>

        <div className="bg-[#173B5E]/40 p-4 rounded-lg border border-[#173B5E]">
          <span className="text-[#C6A66B] font-mono font-bold block mb-1">04. Corrective Action</span>
          <p className="text-[#9DAFB7] text-[11px] mb-2">Execute feedback intervention to restore state.</p>
          <span className="text-[#F5F2EA] font-medium block">
            • Spare Tail Swap<br />
            • Block Time Reallocation<br />
            • Non-Punitive Fix (ASAP)
          </span>
        </div>
      </div>
    </div>
  );
};
