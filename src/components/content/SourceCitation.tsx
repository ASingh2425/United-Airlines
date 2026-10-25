import React from "react";
import { getReferenceById } from "../../content";

interface SourceCitationProps {
  sourceIds: string[];
}

export const SourceCitation: React.FC<SourceCitationProps> = ({ sourceIds }) => {
  if (!sourceIds || sourceIds.length === 0) return null;

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[#9DAFB7] font-mono">
      <span className="text-[#C6A66B] uppercase tracking-wider text-[11px] font-semibold">
        Sources:
      </span>
      {sourceIds.map((id) => {
        const ref = getReferenceById(id);
        return (
          <span
            key={id}
            title={ref?.citation || id}
            className="inline-flex items-center gap-1 text-[#173B5E] hover:text-[#C6A66B] transition-colors cursor-pointer"
          >
            <span>[{ref ? ref.author.split(" ")[0] + ` (${ref.year})` : id}]</span>
          </span>
        );
      })}
    </div>
  );
};
