import React, { useState } from "react";
import { Presentation, Menu, X, ChevronDown } from "lucide-react";
import { ALL_CHAPTERS } from "../../content";

interface SiteHeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chapterDropdownOpen, setChapterDropdownOpen] = useState(false);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setChapterDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B1929] border-b border-[#173B5E] text-[#F5F2EA] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-16">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNav("/")}
          className="font-serif text-lg font-bold tracking-tight text-white hover:text-[#C6A66B] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-left"
        >
          United Airlines <span className="font-sans font-light text-xs text-[#9DAFB7] ml-1">· Management Study</span>
        </button>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#9DAFB7]">
          <button
            onClick={() => handleNav("/overview")}
            className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPath === "/overview" ? "text-[#C6A66B] font-semibold" : ""
            }`}
          >
            Overview
          </button>

          {/* Chapter Quick Picker */}
          <div className="relative">
            <button
              onClick={() => setChapterDropdownOpen(!chapterDropdownOpen)}
              className={`flex items-center gap-1 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentPath.startsWith("/chapter") ? "text-[#C6A66B] font-semibold" : ""
              }`}
            >
              <span>Chapters (1–7)</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {chapterDropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-72 bg-[#0B1929] border border-[#173B5E] rounded-lg shadow-2xl py-2 z-50 text-xs"
                onMouseLeave={() => setChapterDropdownOpen(false)}
              >
                {ALL_CHAPTERS.map((ch) => (
                  <button
                    key={ch.number}
                    onClick={() => handleNav(`/chapter/${ch.number}`)}
                    className="w-full text-left px-4 py-2 hover:bg-[#173B5E] text-[#F5F2EA] flex items-center justify-between cursor-pointer"
                  >
                    <span>
                      <strong className="text-[#C6A66B] mr-2">0{ch.number}</strong>
                      {ch.title}
                    </span>
                    <span className="text-[10px] text-[#9DAFB7]">{ch.managementFunction.split(" ")[0]}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav("/chapter/7")}
            className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPath === "/chapter/7" ? "text-[#C6A66B] font-semibold" : ""
            }`}
          >
            Synthesis Map
          </button>

          <button
            onClick={() => handleNav("/sources")}
            className={`hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPath === "/sources" ? "text-[#C6A66B] font-semibold" : ""
            }`}
          >
            Sources & Bibliography
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNav("/presentation")}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-[#0B1929] bg-[#C6A66B] hover:bg-[#d5b77e] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            <Presentation className="w-3.5 h-3.5 text-[#0B1929]" />
            <span>Presentation Mode</span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#9DAFB7] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1929] border-b border-[#173B5E] px-4 py-4 space-y-3 text-sm">
          <button
            onClick={() => handleNav("/")}
            className="block w-full text-left py-1 text-[#F5F2EA] hover:text-[#C6A66B]"
          >
            Home / Title
          </button>
          <button
            onClick={() => handleNav("/overview")}
            className="block w-full text-left py-1 text-[#F5F2EA] hover:text-[#C6A66B]"
          >
            Company Overview & Map
          </button>
          <div className="pt-2 border-t border-[#173B5E]">
            <span className="text-[11px] font-mono uppercase text-[#C6A66B] tracking-wider block mb-1">
              Chapters (1 through 7)
            </span>
            <div className="grid grid-cols-1 gap-1">
              {ALL_CHAPTERS.map((ch) => (
                <button
                  key={ch.number}
                  onClick={() => handleNav(`/chapter/${ch.number}`)}
                  className="w-full text-left py-1.5 text-xs text-[#9DAFB7] hover:text-white"
                >
                  <strong className="text-[#C6A66B] mr-2">Ch {ch.number}</strong>
                  {ch.title}
                </button>
              ))}
            </div>
          </div>
          <div className="pt-2 border-t border-[#173B5E]">
            <button
              onClick={() => handleNav("/sources")}
              className="block w-full text-left py-1 text-[#9DAFB7] hover:text-white text-xs"
            >
              Sources & Consolidated Bibliography
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
