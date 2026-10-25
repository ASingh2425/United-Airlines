import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { DollarSign, ShieldAlert, BarChart3, PieChart as PieIcon } from "lucide-react";

type ViewMode = "operating-statement" | "revenue-composition" | "expense-breakdown";

// FY2025 Figures standardized from October 2026 Term Report & SEC Annual Filings
const OPERATING_STATEMENT_DATA = [
  { name: "Operating Revenue", amount: 59070, color: "#173B5E", label: "Total Operating Revenue" },
  { name: "Operating Expenses", amount: 54354, color: "#9DAFB7", label: "Total Operating Expenses" },
  { name: "Operating Income", amount: 4716, color: "#C6A66B", label: "Operating Income (EBIT)" },
  { name: "Net Income", amount: 3355, color: "#2B5F8C", label: "Consolidated Net Income" },
];

const REVENUE_COMPOSITION_DATA = [
  { name: "Passenger Revenue", value: 53438, color: "#173B5E", pct: "90.5%" },
  { name: "Other Operating Revenue", value: 3853, color: "#C6A66B", pct: "6.5%" },
  { name: "Cargo Logistics", value: 1779, color: "#9DAFB7", pct: "3.0%" },
];

const EXPENSE_BREAKDOWN_DATA = [
  { name: "Labor & Benefits", value: 16840, color: "#0B1929", pct: "31.0%" },
  { name: "Other Operating Costs", value: 13454, color: "#788D98", pct: "24.8%" },
  { name: "Aircraft Fuel", value: 12680, color: "#173B5E", pct: "23.3%" },
  { name: "Landing Fees & Rent", value: 4210, color: "#2B5F8C", pct: "7.7%" },
  { name: "Maintenance & Repairs", value: 3950, color: "#C6A66B", pct: "7.3%" },
  { name: "Depreciation & Amort.", value: 3220, color: "#9DAFB7", pct: "5.9%" },
];

export const FinancialCharts: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("operating-statement");

  return (
    <div className="bg-[#0B1929] text-[#F5F2EA] rounded-xl p-6 lg:p-8 border border-[#173B5E] shadow-xl my-8">
      {/* Header & View Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#173B5E] gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#C6A66B] font-mono font-medium">
              Audited Financial Analysis · FY2025 Report Baseline
            </span>
            <span className="text-xs text-[#9DAFB7] font-mono">· Verified SEC Benchmark</span>
          </div>
          <h3 className="font-serif text-2xl lg:text-3xl text-white mt-1">
            Financial Controllership & Economic Scale
          </h3>
        </div>

        {/* View Switcher Controls */}
        <div className="flex items-center gap-1 bg-[#173B5E]/60 p-1 rounded-lg self-start md:self-auto border border-[#173B5E]">
          <button
            onClick={() => setViewMode("operating-statement")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
              viewMode === "operating-statement"
                ? "bg-[#C6A66B] text-[#0B1929] font-semibold shadow"
                : "text-[#F5F2EA]/80 hover:text-white"
            }`}
          >
            Operating Statement
          </button>
          <button
            onClick={() => setViewMode("revenue-composition")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
              viewMode === "revenue-composition"
                ? "bg-[#C6A66B] text-[#0B1929] font-semibold shadow"
                : "text-[#F5F2EA]/80 hover:text-white"
            }`}
          >
            Revenue Segments
          </button>
          <button
            onClick={() => setViewMode("expense-breakdown")}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
              viewMode === "expense-breakdown"
                ? "bg-[#C6A66B] text-[#0B1929] font-semibold shadow"
                : "text-[#F5F2EA]/80 hover:text-white"
            }`}
          >
            Operating Expenses
          </button>
        </div>
      </div>

      {/* Verification Notice Box */}
      <div className="my-6 bg-[#173B5E]/40 rounded-lg p-4 border border-[#C6A66B]/40 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
        <div className="text-xs text-[#F5F2EA]/90 leading-relaxed font-sans">
          <strong className="text-[#C6A66B] font-semibold block mb-0.5 font-mono text-xs uppercase tracking-wider">
            Audited Financial Verification Pass (FY2025 Report Figures)
          </strong>
          In accordance with the October 2026 report audit: <strong>$59.070 billion</strong> represents{" "}
          <strong>Total Operating Revenue</strong> (comprising $53.438B passenger, $1.779B cargo, and $3.853B other),{" "}
          against <strong>$54.354 billion</strong> in <strong>Total Operating Expenses</strong>, producing{" "}
          <strong>$4.716 billion</strong> in <strong>Operating Income (8.0% margin)</strong> and{" "}
          <strong>$3.355 billion</strong> in <strong>Net Income (5.7% net margin)</strong>.
        </div>
      </div>

      {/* Main Chart Canvas */}
      <div className="h-72 w-full mt-4">
        {viewMode === "operating-statement" && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={OPERATING_STATEMENT_DATA}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <XAxis dataKey="name" stroke="#9DAFB7" tick={{ fill: "#F5F2EA", fontSize: 12 }} />
              <YAxis
                stroke="#9DAFB7"
                tick={{ fill: "#9DAFB7", fontSize: 11 }}
                tickFormatter={(val) => `$${(val / 1000).toFixed(0)}B`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-[#0B1929] border border-[#C6A66B] p-3 rounded shadow-xl text-xs">
                        <span className="font-semibold text-white block">{data.label}</span>
                        <span className="text-[#C6A66B] font-mono font-bold text-sm">
                          ${data.amount.toLocaleString()} Million USD
                        </span>
                        <span className="text-[#9DAFB7] block mt-1">
                          (${ (data.amount / 1000).toFixed(3) } Billion) · FY2025
                        </span>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                {OPERATING_STATEMENT_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}

        {viewMode === "revenue-composition" && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={REVENUE_COMPOSITION_DATA}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={95}
                paddingAngle={3}
                dataKey="value"
              >
                {REVENUE_COMPOSITION_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-[#0B1929] border border-[#C6A66B] p-3 rounded shadow-xl text-xs">
                        <span className="font-semibold text-white block">{data.name}</span>
                        <span className="text-[#C6A66B] font-mono font-bold">
                          ${data.value.toLocaleString()} Million ({data.pct})
                        </span>
                        <span className="text-[#9DAFB7] block mt-0.5">
                          Total Revenue Base: $59,070M (FY2025)
                        </span>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                formatter={(val) => <span className="text-xs text-[#F5F2EA]">{val}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        )}

        {viewMode === "expense-breakdown" && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={EXPENSE_BREAKDOWN_DATA}
              margin={{ top: 10, right: 30, left: 110, bottom: 10 }}
            >
              <XAxis
                type="number"
                stroke="#9DAFB7"
                tick={{ fill: "#9DAFB7", fontSize: 11 }}
                tickFormatter={(val) => `$${(val / 1000).toFixed(0)}B`}
              />
              <YAxis
                type="category"
                dataKey="name"
                stroke="#9DAFB7"
                tick={{ fill: "#F5F2EA", fontSize: 11 }}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-[#0B1929] border border-[#C6A66B] p-3 rounded shadow-xl text-xs">
                        <span className="font-semibold text-white block">{data.name}</span>
                        <span className="text-[#C6A66B] font-mono font-bold">
                          ${data.value.toLocaleString()} Million USD ({data.pct})
                        </span>
                        <span className="text-[#9DAFB7] block mt-0.5">
                          Total Expenses Base: $54,354M (FY2025)
                        </span>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {EXPENSE_BREAKDOWN_DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Summary Stat Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 mt-4 border-t border-[#173B5E]">
        <div>
          <span className="text-xs text-[#9DAFB7] block">Operating Margin</span>
          <span className="text-lg font-mono font-bold text-[#C6A66B] tabular-nums">8.0%</span>
          <span className="text-[11px] text-[#9DAFB7] block mt-0.5">$4,716M / $59,070M (FY2025)</span>
        </div>
        <div>
          <span className="text-xs text-[#9DAFB7] block">Net Income Margin</span>
          <span className="text-lg font-mono font-bold text-white tabular-nums">5.7%</span>
          <span className="text-[11px] text-[#9DAFB7] block mt-0.5">$3,355M Net Profit</span>
        </div>
        <div>
          <span className="text-xs text-[#9DAFB7] block">Passenger Revenue Share</span>
          <span className="text-lg font-mono font-bold text-white tabular-nums">90.5%</span>
          <span className="text-[11px] text-[#9DAFB7] block mt-0.5">$53,438M of Operating Rev</span>
        </div>
        <div>
          <span className="text-xs text-[#9DAFB7] block">Cargo & Other Share</span>
          <span className="text-lg font-mono font-bold text-[#C6A66B] tabular-nums">9.5%</span>
          <span className="text-[11px] text-[#9DAFB7] block mt-0.5">$5,632M Combined ($1.78B+$3.85B)</span>
        </div>
      </div>
    </div>
  );
};
