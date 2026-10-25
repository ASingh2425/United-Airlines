import React from "react";
import { ArrowRight, Globe, Building2, UserCheck, ShieldCheck } from "lucide-react";
import { COMPANY_OVERVIEW, ALL_CHAPTERS } from "../../content";
import { RouteNetwork } from "../visualizations/RouteNetwork";

interface OverviewViewProps {
  onNavigate: (path: string) => void;
}

export const OverviewView: React.FC<OverviewViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F5F2EA] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Kicker & Title */}
        <div className="border-b border-[#9DAFB7]/40 pb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#173B5E] font-semibold mb-2">
            <span>Executive Overview</span>
            <span className="text-[#9DAFB7]">·</span>
            <span>Company Snapshot & Operational Atlas</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0B1929] tracking-tight">
            United Airlines Holdings, Inc.
          </h1>
          <p className="mt-3 text-base text-[#0B1929]/80 font-sans max-w-3xl leading-relaxed">
            {COMPANY_OVERVIEW.executiveSummary}
          </p>

          <div className="mt-6 p-5 bg-[#173B5E]/5 rounded-lg border border-[#173B5E]/20">
            <span className="text-xs font-mono uppercase tracking-wider text-[#173B5E] font-bold block mb-1">
              Central Management Question:
            </span>
            <p className="font-serif text-lg text-[#0B1929] italic font-medium leading-relaxed">
              "{COMPANY_OVERVIEW.centralQuestion}"
            </p>
          </div>
        </div>

        {/* Corporate Snapshot Definition Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-xl border border-[#9DAFB7]/40 shadow-xs">
          <div>
            <span className="text-xs text-[#9DAFB7] font-mono block">Global Headquarters</span>
            <span className="text-sm font-semibold text-[#0B1929] block mt-0.5">Willis Tower, Chicago, IL</span>
          </div>
          <div>
            <span className="text-xs text-[#9DAFB7] font-mono block">Chief Executive Officer</span>
            <span className="text-sm font-semibold text-[#0B1929] block mt-0.5">{COMPANY_OVERVIEW.ceo}</span>
          </div>
          <div>
            <span className="text-xs text-[#9DAFB7] font-mono block">Global Airline Alliance</span>
            <span className="text-sm font-semibold text-[#0B1929] block mt-0.5">{COMPANY_OVERVIEW.alliance}</span>
          </div>
          <div>
            <span className="text-xs text-[#9DAFB7] font-mono block">Primary Stock Listing</span>
            <span className="text-sm font-semibold text-[#0B1929] font-mono block mt-0.5">NASDAQ: UAL</span>
          </div>
        </div>

        {/* Six Core Metrics Grid */}
        <div>
          <div className="mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#173B5E] font-semibold">
              Audited Scale & Key Performance Indicators
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#0B1929] mt-0.5">
              Enterprise Scale Indicators
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPANY_OVERVIEW.keyMetrics.map((kpi, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#9DAFB7]/40 shadow-xs hover:border-[#173B5E] transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-[#173B5E] font-semibold uppercase">{kpi.label}</span>
                  <span className="text-[#C6A66B] font-bold">{kpi.change}</span>
                </div>
                <div className="text-3xl font-mono font-bold text-[#0B1929] tabular-nums mb-1">
                  {kpi.value}
                </div>
                <p className="text-xs text-[#0B1929]/70 leading-relaxed font-sans">
                  {kpi.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Interactive Route Network */}
        <RouteNetwork />

        {/* Seven Chapters Strategic Navigator */}
        <div className="pt-6">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#173B5E] font-semibold">
              Curriculum Roadmap
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1929] mt-0.5">
              The Seven Management Case Study Chapters
            </h2>
          </div>

          <div className="space-y-4">
            {ALL_CHAPTERS.map((ch) => (
              <div
                key={ch.number}
                className="bg-white rounded-xl p-6 border border-[#9DAFB7]/40 hover:border-[#173B5E] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <span className="px-2 py-0.5 bg-[#173B5E] text-white font-bold rounded">
                      CHAPTER 0{ch.number}
                    </span>
                    <span className="text-[#C6A66B] font-semibold uppercase tracking-wider">
                      {ch.managementFunction}
                    </span>
                    <span className="text-[#9DAFB7]">{ch.sections.length} Subsections</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0B1929]">
                    {ch.title}
                  </h3>
                  <p className="text-xs text-[#0B1929]/75 font-sans leading-relaxed">
                    {ch.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => onNavigate(`/chapter/${ch.number}`)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#173B5E] hover:bg-[#1f4a75] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shrink-0 self-start md:self-auto"
                >
                  <span>Open Chapter</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B]" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
