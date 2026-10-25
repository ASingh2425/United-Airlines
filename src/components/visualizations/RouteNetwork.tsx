import React, { useState } from "react";
import { Plane, Compass, MapPin, Globe } from "lucide-react";
import { COMPANY_OVERVIEW, HubSnapshot } from "../../content/overview";

export const RouteNetwork: React.FC = () => {
  const [selectedHubCode, setSelectedHubCode] = useState<string>("ORD");
  const hubs = COMPANY_OVERVIEW.primaryHubs;
  const activeHub = hubs.find((h) => h.code === selectedHubCode) || hubs[0];

  // Schematic connections between hubs
  const trunkRoutes = [
    { from: "ORD", to: "DEN" },
    { from: "ORD", to: "EWR" },
    { from: "ORD", to: "SFO" },
    { from: "ORD", to: "IAH" },
    { from: "ORD", to: "IAD" },
    { from: "DEN", to: "SFO" },
    { from: "DEN", to: "LAX" },
    { from: "DEN", to: "IAH" },
    { from: "IAH", to: "EWR" },
    { from: "IAH", to: "IAD" },
    { from: "EWR", to: "SFO" },
    { from: "EWR", to: "LAX" },
    { from: "SFO", to: "LAX" },
    { from: "IAD", to: "EWR" },
  ];

  return (
    <div className="bg-[#0B1929] text-[#F5F2EA] rounded-xl p-6 lg:p-8 border border-[#173B5E] shadow-xl my-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#173B5E] gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#C6A66B] font-medium">
            Network Architecture & Hub-and-Spoke Economics
          </span>
          <h3 className="font-serif text-2xl lg:text-3xl text-white mt-1">
            7 Strategic Mega-Hubs & Global Gateways
          </h3>
        </div>
        <div className="text-xs text-[#9DAFB7] flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#C6A66B]" />
          <span>Interactive schematic map · Select node to inspect hub traffic</span>
        </div>
      </div>

      {/* Schematic Map & Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-center">
        {/* SVG Schematic Map View (7 cols) */}
        <div className="lg:col-span-7 bg-[#173B5E]/30 rounded-lg p-4 border border-[#173B5E] relative overflow-hidden">
          <div className="text-[11px] font-mono text-[#9DAFB7] mb-2 flex items-center justify-between">
            <span>U.S. CONTINENTAL TRUNK MESH (SCHEMATIC)</span>
            <span className="text-[#C6A66B]">4,500+ Daily Departures</span>
          </div>

          <svg
            viewBox="0 0 100 100"
            className="w-full h-64 md:h-80 select-none"
            style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.5))" }}
          >
            {/* Outline hint of North American continent */}
            <path
              d="M 10,25 Q 30,15 60,18 Q 85,20 92,35 Q 88,55 80,75 Q 55,85 45,80 Q 20,70 12,50 Z"
              fill="#173B5E"
              fillOpacity="0.25"
              stroke="#173B5E"
              strokeWidth="0.75"
              strokeDasharray="2,2"
            />

            {/* Connecting Trunk Route Arcs */}
            {trunkRoutes.map((route, idx) => {
              const h1 = hubs.find((h) => h.code === route.from);
              const h2 = hubs.find((h) => h.code === route.to);
              if (!h1 || !h2) return null;
              const isHighlighted =
                h1.code === selectedHubCode || h2.code === selectedHubCode;

              // Arc curvature control point
              const mx = (h1.coordinates.x + h2.coordinates.x) / 2;
              const my = (h1.coordinates.y + h2.coordinates.y) / 2 - 4;

              return (
                <path
                  key={idx}
                  d={`M ${h1.coordinates.x},${h1.coordinates.y} Q ${mx},${my} ${h2.coordinates.x},${h2.coordinates.y}`}
                  fill="none"
                  stroke={isHighlighted ? "#C6A66B" : "#9DAFB7"}
                  strokeWidth={isHighlighted ? "1.5" : "0.75"}
                  strokeOpacity={isHighlighted ? "0.9" : "0.35"}
                  strokeDasharray={isHighlighted ? undefined : "1,1.5"}
                />
              );
            })}

            {/* Hub Nodes */}
            {hubs.map((hub) => {
              const isSelected = hub.code === selectedHubCode;
              return (
                <g
                  key={hub.code}
                  className="cursor-pointer group"
                  onClick={() => setSelectedHubCode(hub.code)}
                >
                  {/* Outer pulse when selected */}
                  {isSelected && (
                    <circle
                      cx={hub.coordinates.x}
                      cy={hub.coordinates.y}
                      r="6"
                      fill="#C6A66B"
                      fillOpacity="0.25"
                      className="animate-ping"
                    />
                  )}

                  {/* Base Circle */}
                  <circle
                    cx={hub.coordinates.x}
                    cy={hub.coordinates.y}
                    r={isSelected ? "4" : "2.8"}
                    fill={isSelected ? "#C6A66B" : "#173B5E"}
                    stroke={isSelected ? "#FFFFFF" : "#C6A66B"}
                    strokeWidth="1.2"
                    className="transition-all duration-200 group-hover:scale-125"
                  />

                  {/* Hub Label */}
                  <text
                    x={hub.coordinates.x}
                    y={hub.coordinates.y - 4.5}
                    textAnchor="middle"
                    fill={isSelected ? "#FFFFFF" : "#F5F2EA"}
                    fontSize={isSelected ? "3.6" : "3.0"}
                    fontWeight={isSelected ? "bold" : "normal"}
                    fontFamily="monospace"
                    className="pointer-events-none drop-shadow"
                  >
                    {hub.code}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Quick Hub Selector Pills */}
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[#173B5E]">
            {hubs.map((h) => (
              <button
                key={h.code}
                onClick={() => setSelectedHubCode(h.code)}
                className={`px-2.5 py-1 text-xs font-mono rounded cursor-pointer transition-colors ${
                  h.code === selectedHubCode
                    ? "bg-[#C6A66B] text-[#0B1929] font-bold"
                    : "bg-[#0B1929] text-[#9DAFB7] hover:text-white border border-[#173B5E]"
                }`}
              >
                {h.code}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Hub Deep-Dive (5 cols) */}
        <div className="lg:col-span-5 bg-[#173B5E]/50 rounded-lg p-6 border border-[#173B5E] h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-[#9DAFB7] mb-2 font-mono">
              <span className="flex items-center gap-1 text-[#C6A66B]">
                <MapPin className="w-3.5 h-3.5" />
                {activeHub.code} · Hub Node
              </span>
              <span>{activeHub.destinations} Destinations</span>
            </div>

            <h4 className="text-xl font-serif text-white font-medium mb-1">
              {activeHub.city}
            </h4>
            <p className="text-xs text-[#C6A66B] font-medium mb-4">
              {activeHub.role}
            </p>

            <div className="grid grid-cols-2 gap-3 my-4 py-3 border-y border-[#173B5E]">
              <div>
                <span className="text-[11px] text-[#9DAFB7] block">Daily Departures</span>
                <span className="text-lg font-mono font-bold text-white tabular-nums">
                  {activeHub.dailyDepartures}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-[#9DAFB7] block">Network Reach</span>
                <span className="text-lg font-mono font-bold text-white tabular-nums">
                  {activeHub.destinations} Nonstop
                </span>
              </div>
            </div>

            <div className="text-xs text-[#F5F2EA]/90 leading-relaxed mb-4">
              <strong className="text-[#C6A66B] block mb-1">Strategic Network Role:</strong>
              {activeHub.specialization}
            </div>
          </div>

          <div className="bg-[#0B1929]/70 rounded p-3 text-[11px] text-[#9DAFB7] border border-[#173B5E]">
            <span className="text-[#C6A66B] font-semibold block mb-0.5">
              Managerial Concept: Geographic Coordination
            </span>
            Hub-and-spoke banking concentrates passenger arrivals into discrete waves (connecting banks), allowing United to fill widebody international flights with domestic feeder passengers.
          </div>
        </div>
      </div>
    </div>
  );
};
