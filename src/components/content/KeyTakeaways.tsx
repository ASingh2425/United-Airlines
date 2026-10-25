import React from "react";
import { CheckCircle } from "lucide-react";

interface KeyTakeawaysProps {
  takeaways: string[];
}

export const KeyTakeaways: React.FC<KeyTakeawaysProps> = ({ takeaways }) => {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <div className="my-10 bg-white rounded-xl p-6 lg:p-8 border border-[#9DAFB7]/40 shadow-sm">
      <div className="pb-4 mb-4 border-b border-[#9DAFB7]/30">
        <span className="text-xs uppercase tracking-widest text-[#C6A66B] font-mono font-semibold">
          Chapter Wrap-Up & Synthesis
        </span>
        <h3 className="font-serif text-2xl font-bold text-[#0B1929] mt-1">
          Key Managerial Takeaways
        </h3>
      </div>
      <div className="space-y-3">
        {takeaways.map((point, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-[#C6A66B] shrink-0 mt-1" />
            <p className="text-sm text-[#0B1929]/90 leading-relaxed font-sans">
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
