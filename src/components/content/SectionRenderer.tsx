import React from "react";
import { ChapterSection } from "../../content/types";
import { EvidencePanel } from "./EvidencePanel";
import { SourceCitation } from "./SourceCitation";
import { HistoryTimeline } from "../visualizations/HistoryTimeline";
import { FinancialCharts } from "../visualizations/FinancialCharts";
import { RouteNetwork } from "../visualizations/RouteNetwork";
import { ManagementMap } from "../visualizations/ManagementMap";
import {
  PlanningHierarchyDiagram,
  OrgHierarchyDiagram,
  NocCoordinationDiagram,
  CrmModelDiagram,
  ControlLoopDiagram,
} from "../visualizations/ProcessDiagrams";

interface SectionRendererProps {
  section: ChapterSection;
}

export const SectionRenderer: React.FC<SectionRendererProps> = ({ section }) => {
  const renderDiagram = (diagramId: string) => {
    switch (diagramId) {
      case "history-timeline":
        return <HistoryTimeline />;
      case "hub-network":
        return <RouteNetwork />;
      case "management-map":
        return <ManagementMap />;
      case "planning-hierarchy":
        return <PlanningHierarchyDiagram />;
      case "org-hierarchy":
        return <OrgHierarchyDiagram />;
      case "coordination-noc":
        return <NocCoordinationDiagram />;
      case "crm-model":
        return <CrmModelDiagram />;
      case "control-loop":
        return <ControlLoopDiagram />;
      default:
        return (
          <div className="bg-[#0B1929] text-white p-6 rounded-lg text-xs font-mono my-4">
            Diagram: {diagramId}
          </div>
        );
    }
  };

  const renderChart = (chartId: string) => {
    switch (chartId) {
      case "financial-explorer":
      case "revenue-breakdown":
        return <FinancialCharts />;
      default:
        return <FinancialCharts />;
    }
  };

  return (
    <article id={`section-${section.id}`} className="scroll-mt-24 py-8 border-b border-[#9DAFB7]/25 last:border-b-0">
      {/* Section Heading */}
      <div className="mb-6">
        <span className="text-xs font-mono uppercase tracking-widest text-[#173B5E] font-semibold">
          Section {section.id}
        </span>
        <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[#0B1929] mt-1">
          {section.heading}
        </h3>
      </div>

      {/* Content Blocks */}
      <div className="space-y-6">
        {section.blocks.map((block, idx) => {
          switch (block.type) {
            case "paragraph":
              return (
                <p
                  key={idx}
                  className={`text-[#0B1929]/90 font-sans leading-relaxed ${
                    block.lead
                      ? "text-lg lg:text-xl font-serif text-[#0B1929] font-normal leading-relaxed"
                      : "text-base"
                  }`}
                >
                  {block.text}
                </p>
              );

            case "heading":
              return block.level === 2 ? (
                <h4 key={idx} className="font-serif text-xl font-bold text-[#0B1929] mt-6 mb-2">
                  {block.text}
                </h4>
              ) : (
                <h5 key={idx} className="font-serif text-lg font-semibold text-[#173B5E] mt-4 mb-1">
                  {block.text}
                </h5>
              );

            case "bullets":
              return (
                <ul key={idx} className="my-4 space-y-2.5 pl-5 list-disc marker:text-[#C6A66B]">
                  {block.items.map((item, bIdx) => (
                    <li key={bIdx} className="text-sm text-[#0B1929]/90 leading-relaxed font-sans">
                      {item}
                    </li>
                  ))}
                </ul>
              );

            case "stat":
              return (
                <div
                  key={idx}
                  className="my-4 p-5 bg-white rounded-lg border border-[#9DAFB7]/40 shadow-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="text-xs uppercase font-mono text-[#173B5E] font-semibold tracking-wider">
                      {block.label}
                    </span>
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-[#0B1929] tabular-nums">
                      {block.value}
                    </span>
                  </div>
                  <p className="text-xs text-[#0B1929]/70 mt-1 font-sans">
                    {block.context}
                  </p>
                  <SourceCitation sourceIds={block.sourceIds} />
                </div>
              );

            case "analysis":
              return (
                <EvidencePanel
                  key={idx}
                  title={block.title}
                  text={block.text}
                  evidenceStatus={block.evidenceStatus}
                />
              );

            case "quote":
              return (
                <blockquote
                  key={idx}
                  className="my-6 py-4 px-6 border-y border-[#C6A66B]/50 bg-white/40 italic text-center"
                >
                  <p className="font-serif text-xl lg:text-2xl text-[#0B1929] leading-relaxed">
                    "{block.quote}"
                  </p>
                  {block.author && (
                    <footer className="mt-2 text-xs font-mono tracking-wider text-[#173B5E] not-italic">
                      — {block.author} {block.role ? `· ${block.role}` : ""}
                    </footer>
                  )}
                </blockquote>
              );

            case "diagram":
              return <div key={idx}>{renderDiagram(block.diagramId)}</div>;

            case "chart":
              return <div key={idx}>{renderChart(block.chartId)}</div>;

            default:
              return null;
          }
        })}
      </div>

      {/* Section Footnote Citations */}
      {section.sourceIds && section.sourceIds.length > 0 && (
        <div className="mt-6 pt-4 border-t border-[#9DAFB7]/20">
          <SourceCitation sourceIds={section.sourceIds} />
        </div>
      )}
    </article>
  );
};
