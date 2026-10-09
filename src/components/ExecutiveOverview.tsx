import React from 'react';
import {
  Layers,
  AlertTriangle,
  Clock,
  Coins,
  Shield,
  ArrowRight,
  TrendingUp,
  Globe2,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { REGION_PROFILES, MINERALS_DATA } from '../data/reportData';

interface ExecutiveOverviewProps {
  onSelectCaseStudy: (caseStudyId: string) => void;
  onNavigateTab: (tabId: string) => void;
  selectedMineral: string;
  selectedRegion: string;
}

export const ExecutiveOverview: React.FC<ExecutiveOverviewProps> = ({
  onSelectCaseStudy,
  onNavigateTab,
  selectedMineral,
  selectedRegion,
}) => {
  // Filter regional profiles if a region is selected
  const displayedRegions = REGION_PROFILES.filter((r) => {
    if (selectedRegion === 'all') return true;
    return r.id === selectedRegion;
  });

  return (
    <div className="space-y-8">
      {/* Executive Briefing Callout / Thesis */}
      <div className="bg-gradient-to-r from-slate-900 via-[#0f1d36] to-slate-900 border border-slate-800 rounded-xl p-5 md:p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Core Strategic Paradigm Shift</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">Baseline Assessment 2026</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight text-balance">
              Vulnerability has shifted from hydrocarbon choke-points to critical mineral midstream refining hubs.
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              While raw mining extraction is geographically distributed across Australia, Chile, and the DRC, midstream chemical processing and precursor synthesis remain acutely monopolized in China (65%–95%). State leverage is now wielded through dual-use export curbs, technology embargoes, and resource nationalism mandates.
            </p>
          </div>
          <div className="flex flex-row lg:flex-col gap-2 shrink-0">
            <button
              onClick={() => onNavigateTab('bottlenecks')}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <span>Examine Bottlenecks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigateTab('simulator')}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-800/60 rounded-lg transition-colors"
            >
              <span>Simulate Supply Shock</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 4 Primary KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4.5 hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Chokepoints Tracked</span>
            <div className="p-1.5 bg-slate-800/80 rounded-md text-cyan-400">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono tracking-tight tabular-nums">14</span>
            <span className="text-xs text-rose-400 font-medium">Critical Nodes</span>
          </div>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            Spanning mining concessions, chemical leaching, precursor synthesis, and magnet alloy manufacturing.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4.5 hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Peak Midstream Monopoly</span>
            <div className="p-1.5 bg-slate-800/80 rounded-md text-amber-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono tracking-tight tabular-nums">89% - 95%</span>
            <span className="text-xs text-amber-400 font-medium">China Refining</span>
          </div>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            89% of Rare Earths refining, 90% battery anode graphite, and &gt;95% of solar ingot and wafer pulling.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4.5 hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Western Permitting Lag</span>
            <div className="p-1.5 bg-slate-800/80 rounded-md text-rose-400">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono tracking-tight tabular-nums">10 – 16</span>
            <span className="text-xs text-slate-400 font-medium">Years Mine Lead Time</span>
          </div>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            North American & EU development cycle vs 2030 CRMA targets (10% extraction / 40% processing).
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4.5 hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium uppercase tracking-wider">Resource Nationalism FDI</span>
            <div className="p-1.5 bg-slate-800/80 rounded-md text-emerald-400">
              <Coins className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-white font-mono tracking-tight tabular-nums">&gt;$15B</span>
            <span className="text-xs text-emerald-400 font-medium">Smelter Investment</span>
          </div>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            Captured by Indonesia Hilirisasi raw nickel export ban; similar models rolling out in Chile and Zimbabwe.
          </p>
        </div>
      </div>

      {/* Global Processing Concentration (2026 Baseline) - Direct from Report Section 1 */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Baseline Report 2026</span>
              <span className="text-slate-500">·</span>
              <span className="text-xs text-slate-400">Section 1 Benchmark</span>
            </div>
            <h2 className="text-lg font-bold text-white mt-1">
              Global Processing & Refining Concentration
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Refining concentration is significantly higher than historical crude oil extraction monopolies (OPEC peak ~50%).
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-cyan-500 inline-block" />
              <span className="text-slate-300">China Chemical Refining</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-slate-700 inline-block" />
              <span className="text-slate-400">Rest of World (RoW)</span>
            </div>
          </div>
        </div>

        {/* Visual Comparison Bars */}
        <div className="space-y-4">
          {[
            { label: 'Rare Earth Elements (REEs)', china: 89, note: 'Near-monopoly on heavy REEs (Dysprosium, Terbium)' },
            { label: 'Battery Anode Graphite', china: 90, note: 'Coated spherical synthetic & natural anode material' },
            { label: 'Cobalt Refining', china: 75, note: 'Primary ore mined in DRC, chemically refined in China' },
            { label: 'Lithium Chemical Processing', china: 65, note: 'Hydroxide/carbonate conversion from Australian spodumene' },
            { label: 'Solar PV Ingot & Wafer', china: 95, note: 'Total price leadership and downstream manufacturing lock' },
          ].map((item) => (
            <div key={item.label} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-200">{item.label}</span>
                <div className="flex items-center gap-3 font-mono">
                  <span className="text-cyan-400 font-bold tabular-nums">China: {item.china}%</span>
                  <span className="text-slate-500 tabular-nums">RoW: {100 - item.china}%</span>
                </div>
              </div>
              <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div
                  style={{ width: `${item.china}%` }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-l-full transition-all duration-500"
                />
                <div
                  style={{ width: `${100 - item.china}%` }}
                  className="bg-slate-700 h-full rounded-r-full"
                />
              </div>
              <div className="text-[11px] text-slate-400">{item.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Archetype Risk Flashcards (The 4 Case Studies Preview) */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-white">Geopolitical Stakeholder Archetypes & Risk Ratings</h2>
            <p className="text-xs text-slate-400">
              Comparative assessment of state leverage mechanisms, vulnerabilities, and 10-year risk horizon.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('casestudies')}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
          >
            <span>Explore All 4 Deep Dives</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedRegions.map((region) => {
            const isHigh = region.riskRating === 'HIGH';
            const isMedium = region.riskRating === 'MEDIUM';
            const isLow = region.riskRating === 'LOW';

            const badgeBg = isHigh
              ? 'bg-rose-950/60 text-rose-400 border-rose-800/80'
              : isMedium
              ? 'bg-amber-950/60 text-amber-400 border-amber-800/80'
              : 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80';

            const barColor = isHigh
              ? 'bg-rose-500'
              : isMedium
              ? 'bg-amber-500'
              : 'bg-emerald-500';

            return (
              <div
                key={region.id}
                className="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-xl p-5 flex flex-col justify-between transition-all group"
              >
                <div>
                  {/* Top line */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {region.archetype}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded border font-mono ${badgeBg}`}
                    >
                      {region.riskRating} RISK
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {region.region}
                  </h3>

                  {/* Risk Score Progress Bar */}
                  <div className="mt-3 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Risk Severity Index</span>
                      <span className="font-mono text-slate-200 tabular-nums">{region.riskScore}/100</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${region.riskScore}%` }}
                        className={`h-full ${barColor} rounded-full`}
                      />
                    </div>
                  </div>

                  {/* Summary bullets */}
                  <div className="mt-4 space-y-2.5 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px] font-medium">Core Strategic Goal:</span>
                      <p className="text-slate-200 mt-0.5">{region.coreStrategicGoal}</p>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[11px] font-medium">Primary Leverage Tool:</span>
                      <p className="text-slate-300 mt-0.5">{region.primaryLeverageTool}</p>
                    </div>

                    <div>
                      <span className="text-slate-400 block text-[11px] font-medium">Primary Supply Risk:</span>
                      <p className="text-rose-300/90 mt-0.5">{region.primarySupplyRisk}</p>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-5 pt-3 border-t border-slate-800/80">
                  <button
                    onClick={() => onSelectCaseStudy(region.id)}
                    className="w-full text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center justify-between py-1 transition-colors"
                  >
                    <span>View Detailed Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
