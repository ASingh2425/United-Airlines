import React from "react";
import { ArrowRight, BookOpen, Compass, Shield, Presentation, Layers, BarChart3, Users } from "lucide-react";
import { ALL_CHAPTERS, COMPANY_OVERVIEW } from "../../content";

interface LandingViewProps {
  onNavigate: (path: string) => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F5F2EA]">
      {/* 01. Cinematic Opening Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#0B1929] text-[#F5F2EA] overflow-hidden px-4 sm:px-6 lg:px-8 py-16 border-b border-[#173B5E]">
        {/* Subtle Ambient Backdrop Graphics */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="flight-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#9DAFB7" strokeWidth="0.5" strokeOpacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#flight-grid)" />
            {/* Flight trajectory arcs */}
            <path d="M 0,400 Q 400,200 900,250 T 1800,100" fill="none" stroke="#C6A66B" strokeWidth="1.5" strokeDasharray="6,4" />
            <path d="M 0,600 Q 600,300 1200,450 T 2000,300" fill="none" stroke="#173B5E" strokeWidth="2" />
          </svg>
        </div>

        {/* Top Kicker */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C6A66B]">
            <span>Essentials of Management</span>
            <span className="text-[#9DAFB7]">·</span>
            <span>Academic Term Project Monograph</span>
            <span className="text-[#9DAFB7]">·</span>
            <span>October 2026</span>
          </div>
        </div>

        {/* Hero Headline & Core Thesis */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
          <div className="max-w-4xl">
            <span className="text-xs sm:text-sm font-mono text-[#9DAFB7] uppercase tracking-wider block mb-3">
              United Airlines Holdings, Inc. · Case Study
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance">
              Managing complexity at global scale.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[#F5F2EA]/85 font-sans leading-relaxed max-w-2xl font-light">
              An evidence-led, interactive investigation of Planning, Organizing, Staffing, Leadership,
              and Controlling inside one of the world's most asset-intensive, high-reliability network enterprises.
            </p>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate("/overview")}
                className="flex items-center gap-2.5 px-6 py-3.5 bg-[#C6A66B] hover:bg-[#d5b77e] text-[#0B1929] font-semibold text-sm rounded-lg shadow-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Explore Executive Overview</span>
                <ArrowRight className="w-4 h-4 text-[#0B1929]" />
              </button>

              <button
                onClick={() => onNavigate("/chapter/1")}
                className="flex items-center gap-2 px-6 py-3.5 bg-[#173B5E] hover:bg-[#1f4a75] text-white font-medium text-sm rounded-lg border border-[#173B5E] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Start Chapter 01 (Introduction)</span>
              </button>

              <button
                onClick={() => onNavigate("/presentation")}
                className="flex items-center gap-2 px-4 py-3.5 text-[#C6A66B] hover:text-white text-sm font-medium transition-colors cursor-pointer whitespace-nowrap"
              >
                <Presentation className="w-4 h-4" />
                <span>Classroom Presentation Mode</span>
              </button>
            </div>
          </div>
        </div>

        {/* Operational Scope Metrics Strip */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-[#173B5E]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <span className="text-xs text-[#9DAFB7] font-mono block">FY2024 Operating Revenue</span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-[#C6A66B] tabular-nums">
                $59.070 B
              </span>
              <span className="text-[11px] text-[#9DAFB7] block mt-0.5">Audited Form 10-K</span>
            </div>
            <div>
              <span className="text-xs text-[#9DAFB7] font-mono block">Global Workforce</span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-white tabular-nums">
                103,000+
              </span>
              <span className="text-[11px] text-[#9DAFB7] block mt-0.5">~84% Unionized Crafts</span>
            </div>
            <div>
              <span className="text-xs text-[#9DAFB7] font-mono block">Commercial Fleet</span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-white tabular-nums">
                950+ Mainline
              </span>
              <span className="text-[11px] text-[#9DAFB7] block mt-0.5">700+ Forward Orders</span>
            </div>
            <div>
              <span className="text-xs text-[#9DAFB7] font-mono block">Daily Flight Scale</span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-[#C6A66B] tabular-nums">
                4,500+
              </span>
              <span className="text-[11px] text-[#9DAFB7] block mt-0.5">Departures Across 6 Continents</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02. The Central Research Inquiry */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#173B5E] font-semibold">
              The Central Management Inquiry
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1929] leading-tight">
              Why United Airlines as a Case Study?
            </h2>
            <p className="text-base text-[#0B1929]/80 leading-relaxed font-sans">
              Unlike software companies or consumer retail, network airlines cannot hit 'pause'.
              Weather delays in Denver instantly ripple across transatlantic banking in Newark, crew
              duty limits in Chicago, and aircraft maintenance cycles in San Francisco.
            </p>
            <p className="text-sm text-[#0B1929]/75 leading-relaxed font-sans">
              Studying United Airlines reveals how classical principles of management (Fayol, Weber, Taylor)
              co-exist with modern cybernetic systems, high-reliability organization theory, and dynamic market strategy.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl border border-[#9DAFB7]/40 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#173B5E]/10 flex items-center justify-between p-2 text-[#173B5E] mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0B1929] mb-1">
                Extreme Time Horizons
              </h3>
              <p className="text-xs text-[#0B1929]/75 leading-relaxed">
                Planning must commit billions to 10-year aircraft deliveries while operational dispatchers
                adjust flight plans minute-by-minute.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#9DAFB7]/40 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#173B5E]/10 flex items-center justify-between p-2 text-[#173B5E] mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0B1929] mb-1">
                Zero-Defect Reliability
              </h3>
              <p className="text-xs text-[#0B1929]/75 leading-relaxed">
                A high-reliability safety culture where non-punitive reporting (ASAP) and CRM transform
                hierarchical cockpits into team inquiries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#9DAFB7]/40 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#173B5E]/10 flex items-center justify-between p-2 text-[#173B5E] mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0B1929] mb-1">
                Functional Interdependence
              </h3>
              <p className="text-xs text-[#0B1929]/75 leading-relaxed">
                Decisions cannot occur in silos. Organizing, Staffing, and Controlling must synchronize
                via the 24/7 Network Operations Center.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#9DAFB7]/40 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-[#173B5E]/10 flex items-center justify-between p-2 text-[#173B5E] mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0B1929] mb-1">
                Labor & Capital Balance
              </h3>
              <p className="text-xs text-[#0B1929]/75 leading-relaxed">
                Over 84% unionization under the Railway Labor Act requires formal mediation, seniority rosters,
                and interest-based bargaining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. The Seven Chapters Atlas */}
      <section className="py-16 bg-white border-y border-[#9DAFB7]/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#173B5E] font-semibold">
                Curricular Architecture
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1929] mt-1">
                Seven Chapters of Management Analysis
              </h2>
            </div>
            <p className="text-xs text-[#0B1929]/70 max-w-md">
              Every chapter preserves the exact numbered subsections from the October 2026 report,
              grounded in public SEC filings and managerial theory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_CHAPTERS.map((ch) => (
              <div
                key={ch.number}
                className="group bg-[#F5F2EA] rounded-xl p-6 border border-[#9DAFB7]/40 hover:border-[#173B5E] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-[#173B5E] font-bold">CHAPTER 0{ch.number}</span>
                    <span className="text-[#C6A66B] font-medium">{ch.sections.length} Subsections</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0B1929] group-hover:text-[#173B5E] transition-colors mb-2">
                    {ch.title}
                  </h3>
                  <div className="text-xs font-mono text-[#173B5E] font-semibold mb-3">
                    {ch.managementFunction}
                  </div>
                  <p className="text-xs text-[#0B1929]/75 line-clamp-3 leading-relaxed mb-4">
                    {ch.introduction}
                  </p>

                  {/* Subsection preview */}
                  <div className="space-y-1 pt-3 border-t border-[#9DAFB7]/30 text-[11px] text-[#0B1929]/65 font-mono">
                    {ch.sections.slice(0, 3).map((sec) => (
                      <div key={sec.id} className="truncate">
                        • {sec.heading}
                      </div>
                    ))}
                    {ch.sections.length > 3 && (
                      <div className="text-[#C6A66B] font-semibold">
                        + {ch.sections.length - 3} more subsections
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <button
                    onClick={() => onNavigate(`/chapter/${ch.number}`)}
                    className="w-full flex items-center justify-between px-4 py-2.5 bg-white group-hover:bg-[#173B5E] group-hover:text-white text-[#0B1929] text-xs font-semibold rounded-lg border border-[#9DAFB7]/40 group-hover:border-[#173B5E] transition-all cursor-pointer"
                  >
                    <span>Read Chapter 0{ch.number}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Call to Presentation Mode & Research */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0B1929] rounded-2xl p-8 sm:p-12 text-[#F5F2EA] border border-[#173B5E] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6A66B]">
              Classroom Ready · Presenter Experience
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Deliver Confidently with Full-Screen Presentation Mode
            </h3>
            <p className="text-xs text-[#9DAFB7] leading-relaxed">
              Designed for classroom lectures and thesis defense. Supports arrow-key navigation,
              high-legibility typography, focused slide pacing, and zero clutter.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onNavigate("/presentation")}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C6A66B] hover:bg-[#d5b77e] text-[#0B1929] font-bold text-xs rounded-lg transition-all cursor-pointer shadow-md"
            >
              <Presentation className="w-4 h-4" />
              <span>Launch Presentation Mode</span>
            </button>
            <button
              onClick={() => onNavigate("/sources")}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#173B5E] hover:bg-[#1f4a75] text-white font-medium text-xs rounded-lg border border-[#173B5E] transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#C6A66B]" />
              <span>View Source Library</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
