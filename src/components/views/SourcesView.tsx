import React, { useState } from "react";
import { REFERENCES } from "../../content/references";
import { BookOpen, ShieldCheck, CheckCircle2, FileText, ArrowRight } from "lucide-react";

interface SourcesViewProps {
  onNavigate: (path: string) => void;
}

export const SourcesView: React.FC<SourcesViewProps> = ({ onNavigate }) => {
  const [filterType, setFilterType] = useState<string>("all");

  const filteredReferences = REFERENCES.filter((ref) => {
    if (filterType === "all") return true;
    return ref.type === filterType;
  });

  return (
    <div className="min-h-screen bg-[#F5F2EA] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="border-b border-[#9DAFB7]/40 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#173B5E] font-semibold mb-2">
            <span>Research Library</span>
            <span className="text-[#9DAFB7]">·</span>
            <span>Consolidated Bibliography & Source Notes</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0B1929] tracking-tight">
            Sources & Methodological Verification
          </h1>
          <p className="mt-3 text-base text-[#0B1929]/80 font-sans max-w-3xl leading-relaxed">
            In strict compliance with academic standards, every statistical metric, corporate claim,
            and operational framework in this case study is grounded in audited regulatory filings,
            peer-reviewed management textbooks, or verified agency data.
          </p>

          {/* Academic Safeguards Banner */}
          <div className="mt-6 p-5 bg-white rounded-xl border border-[#C6A66B]/50 shadow-xs flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
            <div className="text-xs text-[#0B1929]/90 leading-relaxed font-sans">
              <strong className="text-[#0B1929] font-semibold block mb-0.5 font-serif text-sm">
                Financial Audit Statement & Integrity Notice
              </strong>
              All enterprise financials reflect audited U.S. SEC Form 10-K disclosures for United Airlines Holdings, Inc.
              Operating Revenue is confirmed at <strong>$59.070 Billion</strong>, Operating Expenses at <strong>$54.354 Billion</strong>,
              and Operating Income at <strong>$4.716 Billion (8.0% margin)</strong>. Interpretations are distinguished
              from empirical company disclosures across all seven chapters.
            </div>
          </div>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-[#173B5E] font-semibold mr-2">Filter Category:</span>
          {[
            { id: "all", label: "All Citations" },
            { id: "sec-filing", label: "SEC Filings (10-K)" },
            { id: "academic", label: "Academic Texts" },
            { id: "regulatory", label: "Regulatory (FAA / DOT)" },
            { id: "corporate", label: "Corporate Strategy" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilterType(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-md transition-colors cursor-pointer ${
                filterType === tab.id
                  ? "bg-[#173B5E] text-white font-bold shadow-xs"
                  : "bg-white text-[#0B1929]/75 border border-[#9DAFB7]/40 hover:text-[#0B1929]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* References List */}
        <div className="space-y-4">
          {filteredReferences.map((ref) => (
            <div
              key={ref.id}
              className="bg-white rounded-xl p-6 border border-[#9DAFB7]/40 shadow-xs space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="text-[#173B5E] font-bold">[{ref.id}]</span>
                <span className="text-[#C6A66B] uppercase font-semibold">
                  {ref.type.toUpperCase()} · {ref.year}
                </span>
              </div>

              <div className="font-serif text-lg font-bold text-[#0B1929]">
                {ref.title}
              </div>

              <div className="text-xs text-[#0B1929]/80 font-sans italic bg-[#F5F2EA] p-3 rounded border border-[#9DAFB7]/25">
                {ref.citation}
              </div>

              <div className="text-xs text-[#0B1929]/80 font-sans leading-relaxed pt-1">
                <strong className="text-[#173B5E] font-mono uppercase text-[11px] block mb-0.5">
                  Annotation & Research Purpose:
                </strong>
                {ref.annotation}
              </div>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div className="pt-8 border-t border-[#9DAFB7]/40 flex justify-between items-center">
          <button
            onClick={() => onNavigate("/overview")}
            className="text-xs font-mono text-[#173B5E] hover:text-[#0B1929] flex items-center gap-1 cursor-pointer font-semibold"
          >
            ← Return to Executive Overview
          </button>
          <button
            onClick={() => onNavigate("/presentation")}
            className="px-5 py-2.5 bg-[#C6A66B] hover:bg-[#d5b77e] text-[#0B1929] font-bold text-xs rounded-lg transition-colors cursor-pointer"
          >
            Launch Presentation Mode
          </button>
        </div>
      </div>
    </div>
  );
};
