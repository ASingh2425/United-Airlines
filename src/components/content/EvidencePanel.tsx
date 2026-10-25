import React from "react";
import { EvidenceStatus } from "../../content/types";
import { BookOpen, ShieldCheck, Scale } from "lucide-react";

interface EvidencePanelProps {
  title: string;
  text: string;
  evidenceStatus: EvidenceStatus;
}

export const EvidencePanel: React.FC<EvidencePanelProps> = ({
  title,
  text,
  evidenceStatus,
}) => {
  const getBadge = () => {
    switch (evidenceStatus) {
      case "company-reported":
        return {
          label: "Company-Reported Empirical Fact",
          icon: <ShieldCheck className="w-3.5 h-3.5 text-[#173B5E]" />,
          border: "border-[#173B5E]/30 bg-[#173B5E]/5",
          tagColor: "text-[#173B5E]",
        };
      case "report-derived":
        return {
          label: "Report-Derived Academic Finding",
          icon: <BookOpen className="w-3.5 h-3.5 text-[#C6A66B]" />,
          border: "border-[#C6A66B]/40 bg-[#C6A66B]/5",
          tagColor: "text-[#987834]",
        };
      case "management-interpretation":
      default:
        return {
          label: "Management-Theory Interpretation",
          icon: <Scale className="w-3.5 h-3.5 text-[#173B5E]" />,
          border: "border-[#9DAFB7]/40 bg-[#9DAFB7]/10",
          tagColor: "text-[#173B5E]",
        };
    }
  };

  const badge = getBadge();

  return (
    <div className={`my-5 rounded-lg p-5 border ${badge.border} transition-all`}>
      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider mb-2">
        {badge.icon}
        <span className={`font-semibold ${badge.tagColor}`}>{badge.label}</span>
      </div>
      <h4 className="font-serif text-lg font-bold text-[#0B1929] mb-2">
        {title}
      </h4>
      <p className="text-[#0B1929]/85 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
};
