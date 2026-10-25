import React from "react";
import { ALL_CHAPTERS } from "../../content";

interface SiteFooterProps {
  onNavigate: (path: string) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0B1929] text-[#F5F2EA] border-t border-[#173B5E] pt-12 pb-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#173B5E]">
          {/* Col 1: Monograph Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="font-serif text-2xl font-bold text-white tracking-tight">
              United Airlines <span className="text-[#C6A66B]">·</span> Essentials of Management
            </h4>
            <p className="text-xs text-[#9DAFB7] leading-relaxed max-w-md">
              A comprehensive academic presentation and interactive case study investigating how
              Planning, Organizing, Staffing, Leading, and Controlling operate within a multi-billion-dollar
              global airline enterprise.
            </p>
            <div className="text-xs text-[#9DAFB7] font-mono space-y-1 pt-2">
              <div>Term Project Monograph · October 2026</div>
              <div>Subject: Management 101 / Essentials of Management</div>
              <div>Audited Financial Benchmark: SEC Form 10-K FY2024</div>
            </div>
          </div>

          {/* Col 2: Chapter Directory (4 cols) */}
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6A66B] block mb-3 font-semibold">
              The Seven Chapters
            </span>
            <ul className="space-y-1.5 text-xs text-[#9DAFB7]">
              {ALL_CHAPTERS.map((ch) => (
                <li key={ch.number}>
                  <button
                    onClick={() => onNavigate(`/chapter/${ch.number}`)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    <span className="text-[#C6A66B] font-mono mr-2">0{ch.number}.</span>
                    {ch.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Research & Utility (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6A66B] block mb-3 font-semibold">
              Research & Utilities
            </span>
            <div className="flex flex-col space-y-2 text-xs text-[#9DAFB7]">
              <button
                onClick={() => onNavigate("/overview")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Executive Overview & Hub Map
              </button>
              <button
                onClick={() => onNavigate("/chapter/7")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Signature Interconnection Map
              </button>
              <button
                onClick={() => onNavigate("/sources")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Consolidated Bibliography & Notes
              </button>
              <button
                onClick={() => onNavigate("/presentation")}
                className="text-left text-[#C6A66B] hover:text-[#d5b77e] font-semibold transition-colors cursor-pointer"
              >
                Enter Presentation Mode (Classroom)
              </button>
            </div>
          </div>
        </div>

        {/* Colophon & Integrity Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9DAFB7]/80 gap-4">
          <p>
            Academic Management Monograph. All company data grounded in public SEC filings and verified transportation statistics.
          </p>
          <div className="font-mono text-[11px] text-[#C6A66B]">
            All 7 Chapters · 33 Numbered Subsections Preserved
          </div>
        </div>
      </div>
    </footer>
  );
};
