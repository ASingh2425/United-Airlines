import React, { useEffect, useState } from "react";
import { Chapter } from "../../content/types";
import { ArrowLeft, ArrowRight, List, Bookmark } from "lucide-react";
import { ALL_CHAPTERS } from "../../content";

interface ChapterNavigationProps {
  currentChapter: Chapter;
  onNavigate: (path: string) => void;
}

export const ChapterNavigation: React.FC<ChapterNavigationProps> = ({
  currentChapter,
  onNavigate,
}) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSectionId, setActiveSectionId] = useState<string>(
    currentChapter.sections[0]?.id || ""
  );

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check which section is in view
      for (const section of currentChapter.sections) {
        const el = document.getElementById(`section-${section.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 100) {
            setActiveSectionId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentChapter]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prevChapter =
    currentChapter.number > 1
      ? ALL_CHAPTERS.find((c) => c.number === currentChapter.number - 1)
      : null;
  const nextChapter =
    currentChapter.number < 7
      ? ALL_CHAPTERS.find((c) => c.number === currentChapter.number + 1)
      : null;

  return (
    <>
      {/* Sticky Reading Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-[3px] bg-[#9DAFB7]/20 z-40">
        <div
          className="h-full bg-[#C6A66B] transition-all duration-150"
          style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
        />
      </div>

      {/* Sub-Section Sticky Navigator Bar */}
      <nav
        aria-label="Chapter Subsections"
        className="sticky top-[67px] z-30 bg-[#F5F2EA]/95 backdrop-blur-md border-b border-[#9DAFB7]/30 py-2.5 px-4 sm:px-6 lg:px-8 transition-shadow"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar text-xs">
            <span className="font-mono text-[#173B5E] font-semibold whitespace-nowrap flex items-center gap-1">
              <Bookmark className="w-3.5 h-3.5 text-[#C6A66B]" />
              Sections:
            </span>

            {currentChapter.sections.map((sec) => {
              const isActive = activeSectionId === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`px-2.5 py-1 rounded text-xs font-mono whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#173B5E] text-white font-bold shadow-xs"
                      : "text-[#0B1929]/70 hover:text-[#0B1929] hover:bg-[#9DAFB7]/20"
                  }`}
                >
                  {sec.id}
                </button>
              );
            })}
          </div>

          {/* Quick Prev / Next Chapter Controls */}
          <div className="flex items-center gap-2 shrink-0 text-xs font-mono">
            {prevChapter && (
              <button
                onClick={() => onNavigate(`/chapter/${prevChapter.number}`)}
                className="hidden sm:flex items-center gap-1 text-[#173B5E] hover:text-[#0B1929] cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Ch 0{prevChapter.number}</span>
              </button>
            )}

            {nextChapter && (
              <button
                onClick={() => onNavigate(`/chapter/${nextChapter.number}`)}
                className="flex items-center gap-1 text-[#173B5E] hover:text-[#0B1929] font-semibold cursor-pointer"
              >
                <span>Next: Ch 0{nextChapter.number}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B]" />
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
