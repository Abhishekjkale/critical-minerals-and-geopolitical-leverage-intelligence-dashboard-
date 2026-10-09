import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  AlertCircle,
  Building2,
  Scale,
  Sparkles,
} from 'lucide-react';
import {
  CASE_STUDIES,
  UPSTREAM_STRATEGY_COMPARISON,
  COMPARATIVE_STAKEHOLDER_MATRIX,
  CaseStudy,
} from '../data/reportData';

interface CaseStudyExplorerProps {
  activeStudyId: string;
  setActiveStudyId: (id: string) => void;
  onNavigateTab: (tab: string) => void;
}

export const CaseStudyExplorer: React.FC<CaseStudyExplorerProps> = ({
  activeStudyId,
  setActiveStudyId,
  onNavigateTab,
}) => {
  const currentCase =
    CASE_STUDIES.find((c) => c.id === activeStudyId) || CASE_STUDIES[0];

  const [activeSubTab, setActiveSubTab] = useState<'profile' | 'leverage' | 'vulnerabilities' | 'comparative'>(
    'profile'
  );

  return (
    <div className="space-y-6">
      {/* Tab Selector Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <span>In-Depth Analytical Briefs</span>
            <span className="text-slate-500">·</span>
            <span>Strategic Report 2026</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">
            Geopolitical Case Study Explorer
          </h2>
        </div>

        {/* 4 Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-900 border border-slate-800 rounded-lg scrollbar-none">
          {CASE_STUDIES.map((study) => {
            const isActive = study.id === currentCase.id;
            return (
              <button
                key={study.id}
                onClick={() => {
                  setActiveStudyId(study.id);
                  setActiveSubTab('profile');
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-slate-800 text-cyan-400 border border-slate-700/80 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                <span className="font-mono text-[10px] text-slate-500">0{study.number}</span>
                <span>{study.title.replace('Case Study ' + study.number + ': ', '')}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Case Study Header Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 md:p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>{currentCase.region}</span>
              <span className="text-slate-600">/</span>
              <span>Case Study 0{currentCase.number}</span>
            </div>
            <h1 className="text-2xl font-bold text-white mt-1 tracking-tight">
              {currentCase.title}
            </h1>
            <p className="text-sm font-medium text-slate-300 mt-0.5">
              {currentCase.subtitle}
            </p>
          </div>

          {/* Risk Level Badge & Score Meter */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-3 min-w-[220px]">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-400 font-medium">10-Year Risk Rating</span>
              <span
                className={`font-bold font-mono px-2 py-0.5 rounded text-[11px] border ${
                  currentCase.riskRating === 'HIGH'
                    ? 'bg-rose-950/60 text-rose-400 border-rose-800/60'
                    : currentCase.riskRating === 'MEDIUM'
                    ? 'bg-amber-950/60 text-amber-400 border-amber-800/60'
                    : 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60'
                }`}
              >
                {currentCase.riskRating}
              </span>
            </div>
            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
              <div
                style={{
                  width:
                    currentCase.riskRating === 'HIGH'
                      ? '85%'
                      : currentCase.riskRating === 'MEDIUM'
                      ? '55%'
                      : '25%',
                }}
                className={`h-full rounded-full ${
                  currentCase.riskRating === 'HIGH'
                    ? 'bg-rose-500'
                    : currentCase.riskRating === 'MEDIUM'
                    ? 'bg-amber-500'
                    : 'bg-emerald-500'
                }`}
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5 leading-snug">
              {currentCase.riskDescription}
            </p>
          </div>
        </div>

        {/* Narrative Overview */}
        <p className="text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
          {currentCase.overview}
        </p>

        {/* Sub-Tabs Navigation for this Case Study */}
        <div className="flex items-center gap-1 pt-2 border-b border-slate-800 text-xs overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveSubTab('profile')}
            className={`pb-2.5 px-3 font-medium transition-colors border-b-2 whitespace-nowrap ${
              activeSubTab === 'profile'
                ? 'text-cyan-400 border-cyan-400'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            Mineral Profile & Market Control
          </button>
          <button
            onClick={() => setActiveSubTab('leverage')}
            className={`pb-2.5 px-3 font-medium transition-colors border-b-2 whitespace-nowrap ${
              activeSubTab === 'leverage'
                ? 'text-cyan-400 border-cyan-400'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            Leverage Mechanisms & Statecraft
          </button>
          <button
            onClick={() => setActiveSubTab('vulnerabilities')}
            className={`pb-2.5 px-3 font-medium transition-colors border-b-2 whitespace-nowrap ${
              activeSubTab === 'vulnerabilities'
                ? 'text-cyan-400 border-cyan-400'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            Strategic Chokepoints & 10-Yr Outlook
          </button>

          {/* Conditional subtabs for comparative matrices */}
          {currentCase.id === 'indonesia-latam' && (
            <button
              onClick={() => setActiveSubTab('comparative')}
              className={`pb-2.5 px-3 font-medium transition-colors border-b-2 whitespace-nowrap ${
                activeSubTab === 'comparative'
                  ? 'text-cyan-400 border-cyan-400'
                  : 'text-slate-400 border-transparent hover:text-slate-200'
              }`}
            >
              Strategy Comparison (Upstream vs Midstream)
            </button>
          )}

          {currentCase.id === 'australia-canada' && (
            <button
              onClick={() => setActiveSubTab('comparative')}
              className={`pb-2.5 px-3 font-medium transition-colors border-b-2 whitespace-nowrap ${
                activeSubTab === 'comparative'
                  ? 'text-cyan-400 border-cyan-400'
                  : 'text-slate-400 border-transparent hover:text-slate-200'
              }`}
            >
              Comparative Stakeholder Matrix
            </button>
          )}
        </div>
      </div>

      {/* SUBTAB 1: Mineral Profile & Market Control Table */}
      {activeSubTab === 'profile' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 md:p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">
                Mineral / Tech Domain & Market Control
              </h3>
              <p className="text-xs text-slate-400">
                Data extracted directly from the strategic report baseline.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                  <th className="py-2.5 px-3 font-medium">Mineral / Tech Domain</th>
                  <th className="py-2.5 px-3 font-medium">Extraction Share</th>
                  <th className="py-2.5 px-3 font-medium">Refining / Processing</th>
                  <th className="py-2.5 px-3 font-medium">Global Market Control Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {currentCase.tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-3 font-semibold text-slate-200 whitespace-nowrap">
                      {row.domain}
                    </td>
                    <td className="py-3 px-3 text-slate-300 font-mono tabular-nums">
                      {row.extractionShare}
                    </td>
                    <td className="py-3 px-3 text-cyan-300 font-mono font-semibold tabular-nums">
                      {row.refiningShare}
                    </td>
                    <td className="py-3 px-3 text-slate-300 leading-relaxed">
                      {row.marketControl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key analytical takeaway banner */}
          <div className="mt-4 p-4 bg-slate-950/70 border border-slate-800 rounded-lg">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Core Takeaway</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentCase.keyTakeaway}
            </p>
          </div>
        </div>
      )}

      {/* SUBTAB 2: Leverage Mechanisms & Statecraft */}
      {activeSubTab === 'leverage' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 md:p-6 space-y-4">
          <div>
            <h3 className="text-base font-bold text-white">
              Leverage Mechanisms & Policy Instruments
            </h3>
            <p className="text-xs text-slate-400">
              State-directed economic statecraft deployed to extract rents, build domestic value-add, or restrict competitor access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {currentCase.leverageMechanisms.map((mech, idx) => (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800/90 rounded-lg p-4 space-y-2 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 flex items-center justify-center font-mono text-[11px] font-bold border border-cyan-800/50">
                    {idx + 1}
                  </div>
                  <h4 className="text-xs font-bold text-white">{mech.title}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{mech.description}</p>
              </div>
            ))}
          </div>

          {/* Quick link to policy comparator */}
          <div className="flex justify-end pt-2">
            <button
              onClick={() => onNavigateTab('policies')}
              className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium"
            >
              <span>Compare against US IRA, EU CRMA, & FIRB rules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* SUBTAB 3: Strategic Chokepoints & 10-Yr Outlook */}
      {activeSubTab === 'vulnerabilities' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chokepoints / Vulnerabilities */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Asymmetric Chokepoints & Vulnerabilities</span>
              </h3>
              <div className="space-y-3">
                {currentCase.countermeasuresAndChokepoints.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-950/70 border border-slate-800/80 rounded-lg space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-200">{item.title}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded font-mono uppercase ${
                          item.type === 'vulnerability'
                            ? 'bg-amber-950/60 text-amber-400 border border-amber-800/50'
                            : item.type === 'chokepoint'
                            ? 'bg-rose-950/60 text-rose-400 border border-rose-800/50'
                            : 'bg-blue-950/60 text-blue-400 border border-blue-800/50'
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 10-Year Horizon */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span>10-Year Geopolitical Outlook</span>
                </h3>
                <div className="mt-4 p-4 bg-slate-950/80 border border-slate-800 rounded-lg space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>Horizon Assessment through 2035</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentCase.tenYearOutlook}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-lg space-y-2">
                <span className="text-xs font-semibold text-slate-300 block">
                  Actionable Mitigation Strategy for Allies:
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Decoupling cannot rely merely on opening raw mines; targeted capital must fund midstream chemical leaching, magnet sintering IP, and fast-track environmental permitting corridors.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SPECIAL SUBTAB: Upstream Capture vs Midstream Integration (Page 3 Table) */}
      {activeSubTab === 'comparative' && currentCase.id === 'indonesia-latam' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 md:p-6 space-y-4">
          <div>
            <h3 className="text-base font-bold text-white">
              Strategy Comparison: Upstream Capture vs. Midstream Integration
            </h3>
            <p className="text-xs text-slate-400">
              Examining policy instruments, success factors, and market trade-offs across resource-nationalist economies.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                  <th className="py-2.5 px-3 font-medium">Country / Region</th>
                  <th className="py-2.5 px-3 font-medium">Key Mineral Focus</th>
                  <th className="py-2.5 px-3 font-medium">Primary Policy Tool</th>
                  <th className="py-2.5 px-3 font-medium">Downstream Success Factor</th>
                  <th className="py-2.5 px-3 font-medium">Strategic Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {UPSTREAM_STRATEGY_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-3 font-bold text-white whitespace-nowrap">
                      {row.country}
                    </td>
                    <td className="py-3 px-3 text-cyan-300 font-semibold">{row.keyMineral}</td>
                    <td className="py-3 px-3 text-slate-300">{row.primaryPolicyTool}</td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                          row.downstreamSuccessFactor === 'High'
                            ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60'
                            : row.downstreamSuccessFactor === 'Moderate'
                            ? 'bg-amber-950/60 text-amber-400 border-amber-800/60'
                            : 'bg-blue-950/60 text-blue-400 border-blue-800/60'
                        }`}
                      >
                        {row.downstreamSuccessFactor}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-400 leading-relaxed">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SPECIAL SUBTAB: Comparative Matrix: Global Critical Mineral Stakeholders (Page 4 Table) */}
      {activeSubTab === 'comparative' && currentCase.id === 'australia-canada' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 md:p-6 space-y-4">
          <div>
            <h3 className="text-base font-bold text-white">
              Comparative Matrix: Global Critical Mineral Stakeholders
            </h3>
            <p className="text-xs text-slate-400">
              The 4 geopolitical archetypes governing critical mineral statecraft (Page 4 Baseline).
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                  <th className="py-2.5 px-3 font-medium">Archetype</th>
                  <th className="py-2.5 px-3 font-medium">Primary Stakeholders</th>
                  <th className="py-2.5 px-3 font-medium">Core Strategic Goal</th>
                  <th className="py-2.5 px-3 font-medium">Primary Supply Risk</th>
                  <th className="py-2.5 px-3 font-medium">Risk Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {COMPARATIVE_STAKEHOLDER_MATRIX.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-3 font-bold text-cyan-300 whitespace-nowrap">
                      {row.archetype}
                    </td>
                    <td className="py-3 px-3 text-white font-medium">{row.stakeholders}</td>
                    <td className="py-3 px-3 text-slate-300">{row.coreStrategicGoal}</td>
                    <td className="py-3 px-3 text-rose-300/90">{row.primarySupplyRisk}</td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono border ${
                          row.riskLevel === 'HIGH'
                            ? 'bg-rose-950/60 text-rose-400 border-rose-800/60'
                            : row.riskLevel === 'MEDIUM'
                            ? 'bg-amber-950/60 text-amber-400 border-amber-800/60'
                            : 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60'
                        }`}
                      >
                        {row.riskLevel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
