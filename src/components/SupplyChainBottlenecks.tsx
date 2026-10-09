import React, { useState } from 'react';
import {
  Layers,
  Info,
  Clock,
  ArrowRight,
  TrendingUp,
  Cpu,
  Car,
  Wind,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { MINERALS_DATA, MineralData } from '../data/reportData';

interface SupplyChainBottlenecksProps {
  onSelectCaseStudy: (caseStudyId: string) => void;
  selectedMineralFilter: string;
}

export const SupplyChainBottlenecks: React.FC<SupplyChainBottlenecksProps> = ({
  onSelectCaseStudy,
  selectedMineralFilter,
}) => {
  const [activeMineralId, setActiveMineralId] = useState<string>(
    selectedMineralFilter !== 'all' ? selectedMineralFilter : 'rees'
  );
  const [metricView, setMetricView] = useState<'refining' | 'stages'>('refining');

  // Filter minerals if mineral filter is active
  const filteredMinerals = MINERALS_DATA.filter((m) => {
    if (selectedMineralFilter === 'all') return true;
    return m.id === selectedMineralFilter;
  });

  const selectedMineral =
    MINERALS_DATA.find((m) => m.id === activeMineralId) || MINERALS_DATA[0];

  return (
    <div className="space-y-8">
      {/* Header and Toggle Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <span>Value Chain Asymmetry Analysis</span>
            <span className="text-slate-500">·</span>
            <span>Refining vs Extraction</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">
            Global Supply Chain Bottleneck Visualizer
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Compare extraction versus processing concentration to understand where geopolitical leverage resides.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start md:self-auto">
          <button
            onClick={() => setMetricView('refining')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              metricView === 'refining'
                ? 'bg-slate-800 text-cyan-400 shadow-sm border border-slate-700/60'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Refining vs Extraction
          </button>
          <button
            onClick={() => setMetricView('stages')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              metricView === 'stages'
                ? 'bg-slate-800 text-cyan-400 shadow-sm border border-slate-700/60'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            4-Stage Value Chain
          </button>
        </div>
      </div>

      {/* Main Comparative Chart & Mineral Details Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Visual Chart (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-xl p-5 md:p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-200">
              {metricView === 'refining'
                ? 'China Market Share: Extraction vs Chemical Refining'
                : 'Midstream Chokepoint Concentration Across 4 Stages'}
            </h3>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-600 inline-block" />
                Raw Extraction
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-2.5 h-2.5 rounded-sm bg-cyan-500 inline-block" />
                Chemical Refining
              </span>
            </div>
          </div>

          {/* Chart Rows */}
          <div className="space-y-4">
            {filteredMinerals.map((mineral) => {
              const isSelected = mineral.id === activeMineralId;
              const delta = mineral.refiningChinaShare - mineral.extractionChinaShare;

              return (
                <div
                  key={mineral.id}
                  onClick={() => setActiveMineralId(mineral.id)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800/90 border-cyan-500/80 shadow-md shadow-cyan-950/30'
                      : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {mineral.name}
                      </span>
                      <span className="text-[10px] text-slate-400 px-1.5 py-0.5 bg-slate-800 rounded">
                        {mineral.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[11px]">
                      <span className="text-slate-400 tabular-nums">Mining: {mineral.extractionChinaShare}%</span>
                      <span className="text-cyan-400 font-bold tabular-nums">Refining: {mineral.refiningChinaShare}%</span>
                      {delta > 0 && (
                        <span className="text-emerald-400 text-[10px] tabular-nums">
                          (+{delta}%)
                        </span>
                      )}
                    </div>
                  </div>

                  {metricView === 'refining' ? (
                    /* Comparison Double Bar */
                    <div className="space-y-1.5">
                      {/* Extraction bar */}
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-500 w-14 shrink-0">Extraction</span>
                        <div className="h-2 flex-1 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            style={{ width: `${mineral.extractionChinaShare}%` }}
                            className="h-full bg-slate-500 rounded-full transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Refining bar */}
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-cyan-400 font-semibold w-14 shrink-0">Refining</span>
                        <div className="h-2.5 flex-1 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            style={{ width: `${mineral.refiningChinaShare}%` }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* 4-Stage Value Chain */
                    <div className="grid grid-cols-4 gap-1.5 text-center pt-1">
                      <div className="bg-slate-900/80 p-1.5 rounded border border-slate-800">
                        <div className="text-[10px] text-slate-400">Mining</div>
                        <div className="font-mono text-xs font-semibold text-slate-200 tabular-nums">
                          {mineral.extractionChinaShare}%
                        </div>
                      </div>
                      <div className="bg-cyan-950/30 p-1.5 rounded border border-cyan-800/40">
                        <div className="text-[10px] text-cyan-400">Separation</div>
                        <div className="font-mono text-xs font-bold text-cyan-300 tabular-nums">
                          {mineral.refiningChinaShare}%
                        </div>
                      </div>
                      <div className="bg-blue-950/30 p-1.5 rounded border border-blue-800/40">
                        <div className="text-[10px] text-blue-400">Precursor</div>
                        <div className="font-mono text-xs font-bold text-blue-300 tabular-nums">
                          {Math.min(95, mineral.refiningChinaShare + 4)}%
                        </div>
                      </div>
                      <div className="bg-indigo-950/30 p-1.5 rounded border border-indigo-800/40">
                        <div className="text-[10px] text-indigo-400">Cell/Magnet</div>
                        <div className="font-mono text-xs font-bold text-indigo-300 tabular-nums">
                          {mineral.downstreamChinaShare}%
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-[11px] text-slate-400 flex items-center gap-1.5 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/60">
            <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>
              Click any mineral card above to inspect upstream extraction locations, downstream end-use applications, and replication lead times.
            </span>
          </div>
        </div>

        {/* Right Column: Deep-Dive Chokepoint Details (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-xl p-5 md:p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider block">
                Selected Mineral Profile
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">{selectedMineral.name}</h3>
            </div>
            <span
              className={`text-xs font-bold px-2 py-0.5 rounded border ${
                selectedMineral.vulnerabilityTier === 'Critical'
                  ? 'bg-rose-950/60 text-rose-400 border-rose-800/80'
                  : 'bg-amber-950/60 text-amber-400 border-amber-800/80'
              }`}
            >
              {selectedMineral.vulnerabilityTier} Risk
            </span>
          </div>

          {/* Upstream vs Refining stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-3">
              <span className="text-[11px] text-slate-400 block">Upstream Mining Anchor:</span>
              <span className="text-xs font-semibold text-slate-200 mt-1 block">
                {selectedMineral.extractionLeader}
              </span>
            </div>
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-3">
              <span className="text-[11px] text-slate-400 block">Replication Lead Time:</span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mt-1">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-mono tabular-nums">{selectedMineral.leadTimeYears}</span>
              </div>
            </div>
          </div>

          {/* Chokepoint Mechanism */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-slate-300 block">
              Strategic Bottleneck & Vulnerability Mechanism:
            </span>
            <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-lg text-xs text-slate-300 leading-relaxed">
              {selectedMineral.chokepointSummary}
            </div>
          </div>

          {/* Downstream Applications */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-slate-300 block">
              Primary Green Tech & Defense Domains:
            </span>
            <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-lg text-xs text-slate-300 leading-relaxed">
              {selectedMineral.primaryApplication}
            </div>
          </div>

          {/* Strategic Insight */}
          <div className="p-3.5 bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-900/40 rounded-lg">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Geopolitical Assessment</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Western initiatives like the US IRA and EU CRMA target domestic self-sufficiency, but cannot bypass China’s midstream refining without facing a 30–50% cost penalty and severe environmental permitting hurdles.
            </p>
          </div>

          {/* Action to case study */}
          <button
            onClick={() => onSelectCaseStudy('china')}
            className="w-full py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Read China Case Study & Export Controls</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
