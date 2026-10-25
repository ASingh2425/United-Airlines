import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Minimize2,
  X,
  Presentation,
  CheckCircle,
  Shield,
  Layers,
  ChevronRight,
} from "lucide-react";
import { ALL_CHAPTERS, COMPANY_OVERVIEW } from "../../content";
import { HistoryTimeline } from "../visualizations/HistoryTimeline";
import { FinancialCharts } from "../visualizations/FinancialCharts";
import { RouteNetwork } from "../visualizations/RouteNetwork";
import { ManagementMap } from "../visualizations/ManagementMap";

interface PresentationModeProps {
  onExit: () => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({ onExit }) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const totalSlides = 10;

  const nextSlide = () => {
    setCurrentSlideIdx((prev) => Math.min(totalSlides - 1, prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlideIdx((prev) => Math.max(0, prev - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Escape") {
        onExit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const renderSlideContent = () => {
    switch (currentSlideIdx) {
      case 0: // Title
        return (
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-block px-3.5 py-1 bg-[#C6A66B]/20 border border-[#C6A66B] rounded text-xs font-mono text-[#C6A66B] uppercase tracking-widest">
              Term Project Presentation · October 2026
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl font-bold text-white tracking-tight leading-tight">
              United Airlines
            </h1>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#C6A66B] font-light">
              Essentials of Management
            </h2>
            <p className="text-base sm:text-lg text-[#F5F2EA]/85 max-w-2xl mx-auto leading-relaxed font-sans pt-4">
              A comprehensive inquiry into Planning, Organizing, Staffing, Leading, and Controlling
              inside an asset-intensive, high-reliability global aviation network.
            </p>
            <div className="pt-8 text-xs font-mono text-[#9DAFB7] flex items-center justify-center gap-4">
              <span>Use ◀ / ▶ Arrow Keys to Navigate</span>
              <span>·</span>
              <span>ESC to Exit</span>
            </div>
          </div>
        );

      case 1: // Overview & Question
        return (
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-xs font-mono text-[#C6A66B] uppercase tracking-wider">
              Slide 02 · Executive Scope & Central Inquiry
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              The Operational Scale of United Airlines
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="bg-[#173B5E]/50 p-4 rounded-lg border border-[#173B5E]">
                <span className="text-xs text-[#9DAFB7] block">Operating Revenue</span>
                <span className="text-2xl font-mono font-bold text-[#C6A66B]">$59.070 B</span>
                <span className="text-[11px] text-[#9DAFB7]">FY2025 Audited 10-K</span>
              </div>
              <div className="bg-[#173B5E]/50 p-4 rounded-lg border border-[#173B5E]">
                <span className="text-xs text-[#9DAFB7] block">Operating / Net Income</span>
                <span className="text-2xl font-mono font-bold text-white">$4.72B / $3.36B</span>
                <span className="text-[11px] text-[#9DAFB7]">8.0% Op / 5.7% Net Margin</span>
              </div>
              <div className="bg-[#173B5E]/50 p-4 rounded-lg border border-[#173B5E]">
                <span className="text-xs text-[#9DAFB7] block">Commercial Fleet</span>
                <span className="text-2xl font-mono font-bold text-white">950+ Jets</span>
                <span className="text-[11px] text-[#9DAFB7]">United Next Forward Orders</span>
              </div>
              <div className="bg-[#173B5E]/50 p-4 rounded-lg border border-[#173B5E]">
                <span className="text-xs text-[#9DAFB7] block">Global Workforce</span>
                <span className="text-2xl font-mono font-bold text-[#C6A66B]">~103,000</span>
                <span className="text-[11px] text-[#9DAFB7]">~82–84% Union Representation</span>
              </div>
            </div>

            <div className="p-6 bg-[#173B5E]/30 rounded-xl border border-[#C6A66B]/50 mt-6">
              <span className="text-xs font-mono text-[#C6A66B] uppercase tracking-wider block mb-2 font-bold">
                The Central Case Study Question:
              </span>
              <p className="font-serif text-xl text-white italic leading-relaxed">
                "{COMPANY_OVERVIEW.centralQuestion}"
              </p>
            </div>
          </div>
        );

      case 2: // Chapter 1
        return (
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="text-xs font-mono text-[#C6A66B] uppercase tracking-wider">
              Slide 03 · Chapter 01
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Introduction & Operational Context
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed text-[#F5F2EA]/90">
              <div className="bg-[#173B5E]/40 p-4 rounded-lg border border-[#173B5E] space-y-2">
                <strong className="text-[#C6A66B] block text-sm font-serif">1.1 & 1.2 History & Scale</strong>
                <p>
                  Tracing back to Walter Varney's 1926 airmail flights, United evolved through federal antitrust breakup (1934),
                  deregulation (1978), and the $3.0B Continental merger (2010).
                </p>
                <p>
                  Operates as a High-Reliability Organization (HRO) requiring synchronization across FAA air traffic flow, certified mechanics, and dispatchers.
                </p>
              </div>
              <div className="bg-[#173B5E]/40 p-4 rounded-lg border border-[#173B5E] space-y-2">
                <strong className="text-[#C6A66B] block text-sm font-serif">1.3 & 1.4 Products & Network</strong>
                <p>
                  FY2025 Revenue base: $53.438B Passenger, $1.779B Cargo, and $3.853B Other Operating Revenue (including MileagePlus financing).
                </p>
                <p>
                  Network coordinated through 7 strategic mega-hubs: ORD, DEN, IAH, EWR, SFO, IAD, and LAX.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <HistoryTimeline />
            </div>
          </div>
        );

      case 3: // Chapter 2
        return (
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="text-xs font-mono text-[#C6A66B] uppercase tracking-wider">
              Slide 04 · Chapter 02
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Planning: Three-Tier Hierarchy & United Next
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-[#173B5E]/40 p-4 rounded-lg border border-[#173B5E]">
                <strong className="text-[#C6A66B] block font-serif text-sm mb-1">Strategic (5–15 Yrs)</strong>
                <p className="text-[#9DAFB7] mb-2">Board & Executive Suite</p>
                <p className="text-[#F5F2EA]/90 leading-relaxed">
                  United Next fleet order of hundreds of Boeing & Airbus aircraft to upgauge domestic capacity and reduce fuel burn. Net zero carbon targets for 2050.
                </p>
              </div>
              <div className="bg-[#173B5E]/40 p-4 rounded-lg border border-[#173B5E]">
                <strong className="text-[#C6A66B] block font-serif text-sm mb-1">Tactical (6–18 Mos)</strong>
                <p className="text-[#9DAFB7] mb-2">Network Planning & Revenue</p>
                <p className="text-[#F5F2EA]/90 leading-relaxed">
                  Seasonal banked flight schedules, transatlantic summer capacity shifts, dynamic fare inventory management, and maintenance check schedules.
                </p>
              </div>
              <div className="bg-[#173B5E]/40 p-4 rounded-lg border border-[#173B5E]">
                <strong className="text-[#C6A66B] block font-serif text-sm mb-1">Operational (Day-of)</strong>
                <p className="text-[#9DAFB7] mb-2">NOC & Dispatchers</p>
                <p className="text-[#F5F2EA]/90 leading-relaxed">
                  Joint flight release sign-offs under FAR 121.533, convective weather diversions, tail routing, and crew rest compliance under FAA regulations.
                </p>
              </div>
            </div>
          </div>
        );

      case 4: // Chapter 3
        return (
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="text-xs font-mono text-[#C6A66B] uppercase tracking-wider">
              Slide 05 · Chapter 03
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Organizing: Line & Staff Structure & The NOC
            </h2>
            <div className="bg-[#173B5E]/30 p-5 rounded-xl border border-[#173B5E] text-xs space-y-3">
              <p className="text-sm text-[#F5F2EA] leading-relaxed">
                United employs a <strong>Line and Staff Functional structure</strong>. Line operations carry direct
                statutory flight authority, while Staff departments provide specialized legal, financial, and technological backing.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-[#0B1929] p-3 rounded border border-[#173B5E]">
                  <strong className="text-[#C6A66B] block mb-1">Decentralized Flight Authority</strong>
                  <p className="text-[#9DAFB7]">
                    Under FAR 121.533, the Captain and Aircraft Dispatcher possess joint operational control over flight releases,
                    insulated from commercial revenue pressures.
                  </p>
                </div>
                <div className="bg-[#0B1929] p-3 rounded border border-[#173B5E]">
                  <strong className="text-[#C6A66B] block mb-1">The NOC Integrator</strong>
                  <p className="text-[#9DAFB7]">
                    The 24/7 Network Operations Center in Chicago serves as chief cross-functional arbitrator during irregular
                    operations (IROPS), balancing maintenance safety with customer connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 5: // Chapter 4
        return (
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="text-xs font-mono text-[#C6A66B] uppercase tracking-wider">
              Slide 06 · Chapter 04
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Staffing: Labor Continuity & The Aviate Pipeline
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-[#173B5E]/40 p-4 rounded-lg border border-[#173B5E] space-y-2">
                <strong className="text-[#C6A66B] font-serif text-sm block">Backward Integration</strong>
                <p className="text-[#F5F2EA]/90 leading-relaxed">
                  United Aviate Academy in Goodyear, AZ represents backward vertical integration into pilot talent supply to insulate
                  the carrier against systemic commercial pilot retirement curves.
                </p>
              </div>
              <div className="bg-[#173B5E]/40 p-4 rounded-lg border border-[#173B5E] space-y-2">
                <strong className="text-[#C6A66B] font-serif text-sm block">Denver Flight Center</strong>
                <p className="text-[#F5F2EA]/90 leading-relaxed">
                  A centralized flight training campus with dozens of Level-D full flight simulators conducting continuous
                  FAA Advanced Qualification Program (AQP) recertifications.
                </p>
              </div>
              <div className="bg-[#173B5E]/40 p-4 rounded-lg border border-[#173B5E] space-y-2">
                <strong className="text-[#C6A66B] font-serif text-sm block">Labor Governance</strong>
                <p className="text-[#F5F2EA]/90 leading-relaxed">
                  Approx. 82–84% union representation governed by the Railway Labor Act (RLA), requiring formal federal mediation and
                  transparent seniority bidding systems.
                </p>
              </div>
            </div>
          </div>
        );

      case 6: // Chapter 5
        return (
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="text-xs font-mono text-[#C6A66B] uppercase tracking-wider">
              Slide 07 · Chapter 05
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Leadership: Situational Command & Cockpit CRM
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#173B5E]/40 p-5 rounded-lg border border-[#173B5E] space-y-3">
                <strong className="text-[#C6A66B] font-serif text-sm block">Transformational & Crisis Leadership</strong>
                <p className="text-[#F5F2EA]/90 leading-relaxed">
                  CEO Scott Kirby couples mathematical network optimization with decisive transparency during crises—as demonstrated
                  by early proactive capacity reductions at the pandemic's onset.
                </p>
                <div className="bg-[#0B1929] p-3 rounded italic text-[#9DAFB7] border border-[#173B5E]">
                  "You look at the mathematical reality, communicate openly with your people, and make the hard decisions early."
                </div>
              </div>
              <div className="bg-[#173B5E]/40 p-5 rounded-lg border border-[#173B5E] space-y-3">
                <strong className="text-[#C6A66B] font-serif text-sm block">Crew Resource Management (CRM)</strong>
                <p className="text-[#F5F2EA]/90 leading-relaxed">
                  United pioneered CRM to flatten steep autocratic cockpit authority gradients. Junior officers are empowered
                  and mandated to speak up with assertive inquiries if safety tolerances are approached.
                </p>
                <div className="bg-[#0B1929] p-3 rounded text-[#C6A66B] font-mono">
                  Standardized Advocacy: "I have a safety concern."
                </div>
              </div>
            </div>
          </div>
        );

      case 7: // Chapter 6
        return (
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="text-xs font-mono text-[#C6A66B] uppercase tracking-wider">
              Slide 08 · Chapter 06
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Controlling: Cybernetic Auditing & Verified Financials (FY2025)
            </h2>
            <div className="mt-2">
              <FinancialCharts />
            </div>
          </div>
        );

      case 8: // Chapter 7
        return (
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="text-xs font-mono text-[#C6A66B] uppercase tracking-wider">
              Slide 09 · Chapter 07
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Signature Synthesis: The Five-Function Interconnection Map
            </h2>
            <div className="mt-2">
              <ManagementMap />
            </div>
          </div>
        );

      case 9: // Final Conclusion
        return (
          <div className="max-w-4xl mx-auto space-y-5 text-left">
            <div className="text-xs font-mono text-[#C6A66B] uppercase tracking-wider text-center">
              Slide 10 · Qualitative Synthesis & Assessment
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white text-center">
              Qualitative Evaluation of the Five Managerial Functions
            </h2>
            <div className="space-y-2 text-xs pt-2">
              <div className="bg-[#173B5E]/40 p-3.5 rounded-lg border border-[#173B5E]">
                <strong className="text-[#C6A66B] font-mono block mb-0.5">Planning: Robust Strategic Foresight</strong>
                <p className="text-[#F5F2EA]/90 leading-relaxed">
                  Evidence: Multi-year United Next fleet orders and proactive crisis capacity cuts. Suggests strong capital discipline; balanced by vulnerability to macro fuel shocks.
                </p>
              </div>
              <div className="bg-[#173B5E]/40 p-3.5 rounded-lg border border-[#173B5E]">
                <strong className="text-[#C6A66B] font-mono block mb-0.5">Organizing: Sound High-Reliability Integration</strong>
                <p className="text-[#F5F2EA]/90 leading-relaxed">
                  Evidence: 24/7 NOC coordination and FAR 121.533 joint operational authority. Effectively bridges technical specialization with daily network execution.
                </p>
              </div>
              <div className="bg-[#173B5E]/40 p-3.5 rounded-lg border border-[#173B5E]">
                <strong className="text-[#C6A66B] font-mono block mb-0.5">Staffing: Proactive Talent Pipeline Integration</strong>
                <p className="text-[#F5F2EA]/90 leading-relaxed">
                  Evidence: United Aviate Academy flight school ownership and Denver simulator campus. Proactively mitigates pilot shortages within union contract boundaries.
                </p>
              </div>
              <div className="bg-[#173B5E]/40 p-3.5 rounded-lg border border-[#173B5E]">
                <strong className="text-[#C6A66B] font-mono block mb-0.5">Leading: Transparent Crisis Direction & CRM Protocols</strong>
                <p className="text-[#F5F2EA]/90 leading-relaxed">
                  Evidence: Direct executive communication during downturns; institutionalized cockpit psychological safety via Crew Resource Management.
                </p>
              </div>
              <div className="bg-[#173B5E]/40 p-3.5 rounded-lg border border-[#173B5E]">
                <strong className="text-[#C6A66B] font-mono block mb-0.5">Controlling: Disciplined Cybernetic Monitoring</strong>
                <p className="text-[#F5F2EA]/90 leading-relaxed">
                  Evidence: Audited FY2025 financials ($59.070B Revenue, $4.716B Operating Income, $3.355B Net Income), FAA SMS compliance, and real-time ACARS telemetry.
                </p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <button
                onClick={onExit}
                className="px-6 py-2.5 bg-[#C6A66B] hover:bg-[#d5b77e] text-[#0B1929] font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Exit Presentation Mode & Return to Study
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0B1929] text-[#F5F2EA] flex flex-col justify-between overflow-y-auto">
      {/* Top Presentation Bar */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-[#173B5E] shrink-0 bg-[#0B1929]">
        <div className="flex items-center gap-3">
          <span className="font-serif font-bold text-white text-base">United Airlines</span>
          <span className="text-xs text-[#9DAFB7] font-mono hidden sm:inline">
            · Essentials of Management Presentation
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-[#C6A66B] font-semibold">
            Slide {currentSlideIdx + 1} of {totalSlides}
          </span>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 text-[#9DAFB7] hover:text-white transition-colors cursor-pointer"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onExit}
            className="flex items-center gap-1 px-3 py-1 bg-[#173B5E] hover:bg-[#255280] text-[#F5F2EA] text-xs font-mono rounded cursor-pointer transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>Exit</span>
          </button>
        </div>
      </div>

      {/* Main Slide Canvas */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 overflow-y-auto">
        {renderSlideContent()}
      </div>

      {/* Bottom Presenter Controls */}
      <div className="px-6 py-3 border-t border-[#173B5E] flex items-center justify-between shrink-0 bg-[#0B1929]">
        <button
          onClick={prevSlide}
          disabled={currentSlideIdx === 0}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono rounded bg-[#173B5E] hover:bg-[#224b75] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Previous</span>
        </button>

        {/* Slide Dots / Progress Indicator */}
        <div className="hidden sm:flex items-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIdx(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                idx === currentSlideIdx
                  ? "bg-[#C6A66B] w-6"
                  : "bg-[#173B5E] hover:bg-[#9DAFB7]"
              }`}
              title={`Jump to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlideIdx === totalSlides - 1}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono rounded bg-[#C6A66B] hover:bg-[#d5b77e] text-[#0B1929] font-bold disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
        >
          <span>Next</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#0B1929]" />
        </button>
      </div>
    </div>
  );
};
