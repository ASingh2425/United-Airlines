import React, { useState } from "react";
import { Calendar, ChevronRight, BookOpen } from "lucide-react";

interface Milestone {
  year: string;
  era: string;
  title: string;
  description: string;
  strategicSignificance: string;
  source: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "1926",
    era: "Pioneering Genesis",
    title: "Inaugural Contract Air Mail Flight (CAM 5)",
    description: "Walter T. Varney launches Varney Air Lines, operating airmail routes from Pasco, Washington to Elko, Nevada aboard a Swallow biplane.",
    strategicSignificance: "Establishes commercial aviation's dependence on federal airmail subsidies prior to passenger profitability.",
    source: "Term Project Monograph & Corporate Heritage",
  },
  {
    year: "1929",
    era: "Vertical Monopoly",
    title: "Formation of United Aircraft & Transport Corp (UATC)",
    description: "William Boeing unites aircraft manufacturing (Boeing), engine fabrication (Pratt & Whitney), and transport airlines into a colossal vertical trust.",
    strategicSignificance: "Precursor to antitrust regulation; proved that airline operations require integrated technical and capital backing.",
    source: "Historical Case Archives",
  },
  {
    year: "1930",
    era: "Service Innovation",
    title: "Introduction of the World's First Inflight Stewardesses",
    description: "Registered nurse Ellen Church leads the inaugural team of eight female flight attendants on Boeing 80A flights between Oakland and Chicago.",
    strategicSignificance: "Transformed passenger confidence by medicalizing cabin care and pioneering modern inflight hospitality.",
    source: "United Airlines Historical Archives",
  },
  {
    year: "1934",
    era: "Antitrust Separation",
    title: "The Air Mail Act of 1934 Forces Dismemberment",
    description: "Federal antitrust legislation outlaws aircraft manufacturers from owning transport airlines. UATC is split into United Airlines, Boeing, and United Technologies.",
    strategicSignificance: "Established United Air Lines as an autonomous operating company led by William A. Patterson.",
    source: "U.S. Congressional Records & FAA",
  },
  {
    year: "1978",
    era: "Free Market Deregulation",
    title: "Passage of the Airline Deregulation Act",
    description: "The federal government abolishes Civil Aeronautics Board (CAB) route and price controls, sparking intense competitive price warfare.",
    strategicSignificance: "Catalyzed United's pivot to a hub-and-spoke network architecture to maximize passenger feeder capture.",
    source: "Bureau of Transportation Statistics",
  },
  {
    year: "1994",
    era: "Labor Ownership Experiment",
    title: "Historic Employee Stock Ownership Plan (ESOP)",
    description: "Pilots and machinists trade substantial wage concessions for a 55% majority ownership stake in United, creating the largest employee-owned company in the world.",
    strategicSignificance: "An influential case study in organizational governance; revealed the complexity of balancing employee-owners with capital discipline.",
    source: "Harvard Business Review & Term Project",
  },
  {
    year: "2010",
    era: "Megamerger Consolidation",
    title: "United & Continental Airlines $3.0B Merger of Equals",
    description: "United merges with Continental Airlines, combining United's Pacific and Midwest strengths with Continental's Latin American and New York presence.",
    strategicSignificance: "Created the world's largest airline network at the time and unified two distinct corporate cultures under one livery.",
    source: "SEC Merger Filings & DOJ Antitrust Review",
  },
  {
    year: "2021-2026",
    era: "Modern Renaissance",
    title: "Execution of the 'United Next' Fleet Strategy",
    description: "Commitment to acquire over 700 new narrowbody and widebody Boeing and Airbus jets, standardizing cabins and upgauging domestic capacity.",
    strategicSignificance: "Comprehensive cross-functional transformation connecting capital investment, pilot training, and customer experience.",
    source: "United Next Investor Disclosures (2023-2026)",
  },
];

export const HistoryTimeline: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const activeMilestone = MILESTONES[selectedIdx];

  return (
    <div className="bg-[#0B1929] text-[#F5F2EA] rounded-xl p-6 lg:p-8 border border-[#173B5E] shadow-xl my-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#173B5E] gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#C6A66B] font-medium">
            Centennial Historical Trajectory · 1926–2026
          </span>
          <h3 className="font-serif text-2xl lg:text-3xl text-white mt-1">
            Century of Operational Evolution
          </h3>
        </div>
        <div className="text-xs text-[#9DAFB7] flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#C6A66B]" />
          <span>Select milestone to inspect managerial significance</span>
        </div>
      </div>

      {/* Horizontal timeline rail */}
      <div className="overflow-x-auto py-6">
        <div className="flex items-center min-w-[700px] justify-between relative px-4">
          {/* Track line */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-[#173B5E] z-0" />

          {MILESTONES.map((m, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={m.year}
                onClick={() => setSelectedIdx(idx)}
                className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? "bg-[#C6A66B] text-[#0B1929] ring-4 ring-[#C6A66B]/30 scale-110"
                      : "bg-[#0B1929] text-[#9DAFB7] border border-[#173B5E] group-hover:border-[#C6A66B] group-hover:text-white"
                  }`}
                >
                  {m.year.slice(2)}
                </div>
                <span
                  className={`text-xs mt-2 font-mono tabular-nums transition-colors ${
                    isSelected ? "text-[#C6A66B] font-bold" : "text-[#9DAFB7] group-hover:text-white"
                  }`}
                >
                  {m.year}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed milestone card */}
      <div className="mt-4 bg-[#173B5E]/50 rounded-lg p-6 border border-[#173B5E]">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#9DAFB7] mb-2 font-mono">
          <span className="text-[#C6A66B] font-semibold tracking-wider uppercase">
            {activeMilestone.era}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#C6A66B]" />
            Year: {activeMilestone.year}
          </span>
        </div>

        <h4 className="text-xl font-serif text-white font-medium mb-3">
          {activeMilestone.title}
        </h4>

        <p className="text-[#F5F2EA]/90 leading-relaxed text-sm mb-4">
          {activeMilestone.description}
        </p>

        <div className="bg-[#0B1929]/70 rounded p-4 border-l-2 border-[#C6A66B]">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A66B] block mb-1">
            Managerial & Theoretical Significance
          </span>
          <p className="text-xs text-[#F5F2EA]/80 leading-relaxed">
            {activeMilestone.strategicSignificance}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-[#9DAFB7]">
          <span>Attributed: {activeMilestone.source}</span>
          <div className="flex items-center gap-1 text-[#C6A66B]">
            <span>Milestone {selectedIdx + 1} of {MILESTONES.length}</span>
            <ChevronRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
