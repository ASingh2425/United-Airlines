import React, { useEffect } from "react";
import { Chapter } from "../../content/types";
import { ChapterNavigation } from "../layout/ChapterNavigation";
import { SectionRenderer } from "../content/SectionRenderer";
import { KeyTakeaways } from "../content/KeyTakeaways";
import { ArrowLeft, ArrowRight, BookOpen, Layers } from "lucide-react";
import { ALL_CHAPTERS } from "../../content";

interface ChapterViewProps {
  chapter: Chapter;
  onNavigate: (path: string) => void;
}

export const ChapterView: React.FC<ChapterViewProps> = ({
  chapter,
  onNavigate,
}) => {
  // Scroll to top when chapter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [chapter.number]);

  const prevChapter =
    chapter.number > 1
      ? ALL_CHAPTERS.find((c) => c.number === chapter.number - 1)
      : null;
  const nextChapter =
    chapter.number < 7
      ? ALL_CHAPTERS.find((c) => c.number === chapter.number + 1)
      : null;

  return (
    <div className="min-h-screen bg-[#F5F2EA]">
      {/* Chapter Subsections & Reading Progress Rail */}
      <ChapterNavigation currentChapter={chapter} onNavigate={onNavigate} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Chapter Header Marquee */}
        <header className="border-b border-[#9DAFB7]/40 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-3">
            <span className="px-2.5 py-0.5 bg-[#173B5E] text-white font-bold rounded">
              CHAPTER 0{chapter.number}
            </span>
            <span className="text-[#C6A66B] font-bold uppercase tracking-wider">
              {chapter.managementFunction}
            </span>
            <span className="text-[#9DAFB7]">·</span>
            <span className="text-[#9DAFB7]">{chapter.sections.length} Numbered Subsections</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#0B1929] tracking-tight leading-[1.15]">
            {chapter.title}
          </h1>

          <p className="mt-2 text-base sm:text-lg font-serif italic text-[#173B5E]">
            {chapter.subtitle}
          </p>

          {/* Chapter Introduction Block */}
          <div className="mt-6 p-6 bg-white rounded-xl border border-[#9DAFB7]/40 shadow-xs">
            <span className="text-xs font-mono uppercase tracking-widest text-[#173B5E] font-bold block mb-2">
              Chapter Orientation & Managerial Context
            </span>
            <p className="text-sm sm:text-base text-[#0B1929]/90 font-sans leading-relaxed">
              {chapter.introduction}
            </p>
          </div>
        </header>

        {/* Section List: All exact numbered subsections preserved */}
        <div className="space-y-4">
          {chapter.sections.map((section) => (
            <SectionRenderer key={section.id} section={section} />
          ))}
        </div>

        {/* Chapter Wrap-Up Key Takeaways */}
        <KeyTakeaways takeaways={chapter.keyTakeaways} />

        {/* Chapter Transition Controls */}
        <div className="mt-12 pt-8 border-t border-[#9DAFB7]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevChapter ? (
            <button
              onClick={() => onNavigate(`/chapter/${prevChapter.number}`)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-[#173B5E] hover:text-white text-[#0B1929] text-xs font-semibold rounded-lg border border-[#9DAFB7]/40 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#C6A66B]" />
              <span>Previous: Ch 0{prevChapter.number} ({prevChapter.title})</span>
            </button>
          ) : (
            <button
              onClick={() => onNavigate("/overview")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#0B1929] text-xs font-semibold rounded-lg border border-[#9DAFB7]/40 cursor-pointer"
            >
              <span>Back to Executive Overview</span>
            </button>
          )}

          {nextChapter ? (
            <button
              onClick={() => onNavigate(`/chapter/${nextChapter.number}`)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#173B5E] hover:bg-[#1f4a75] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <span>Next Chapter 0{nextChapter.number}: {nextChapter.title}</span>
              <ArrowRight className="w-4 h-4 text-[#C6A66B]" />
            </button>
          ) : (
            <button
              onClick={() => onNavigate("/sources")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-[#C6A66B] hover:bg-[#d5b77e] text-[#0B1929] text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <span>Explore Research Sources & Bibliography</span>
              <BookOpen className="w-4 h-4 text-[#0B1929]" />
            </button>
          )}
        </div>
      </main>
    </div>
  );
};
