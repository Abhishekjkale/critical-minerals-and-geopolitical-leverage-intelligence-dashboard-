import React, { useState } from 'react';
import {
  FileText,
  Filter,
  CheckCircle2,
  AlertTriangle,
  X,
  ExternalLink,
  ShieldAlert,
  Search,
} from 'lucide-react';
import { POLICY_ITEMS, PolicyItem } from '../data/reportData';

interface PolicyMatrixProps {
  searchQuery: string;
}

export const PolicyMatrix: React.FC<PolicyMatrixProps> = ({ searchQuery }) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<string>('All');
  const [activeModalPolicy, setActiveModalPolicy] = useState<PolicyItem | null>(null);

  const policyTypes = [
    'All',
    'Subsidies & Tax Credits',
    'Export Restrictions',
    'Foreign Investment Screening',
    'Multilateral Alliances',
    'State Equity & Ownership',
  ];

  const jurisdictions = [
    'All',
    'United States',
    'European Union',
    'Indonesia',
    'China',
    'Chile',
    'Australia',
    'Canada',
    'Zimbabwe',
    'Multilateral (14 Nations + EU)',
  ];

  const filteredPolicies = POLICY_ITEMS.filter((policy) => {
    const matchesType =
      selectedType === 'All' || policy.policyType === selectedType;
    const matchesJurisdiction =
      selectedJurisdiction === 'All' || policy.jurisdiction === selectedJurisdiction;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      policy.name.toLowerCase().includes(query) ||
      policy.jurisdiction.toLowerCase().includes(query) ||
      policy.targetDomain.toLowerCase().includes(query) ||
      policy.strategicObjectives.toLowerCase().includes(query) ||
      policy.vulnerabilities.toLowerCase().includes(query);

    return matchesType && matchesJurisdiction && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Title & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <span>Legislative & Trade Instrument Comparator</span>
            <span className="text-slate-500">·</span>
            <span>Policy De-risking</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">
            Global Policy Matrix & Countermeasure Comparator
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Evaluate industrial subsidies, dual-use export curbs, and foreign investment vetting mechanisms.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Policy Type Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-400">Type:</span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-slate-900 text-slate-200 text-xs border border-slate-700/80 rounded-md px-2.5 py-1.5 focus:outline-none focus:border-cyan-500 transition-colors"
            >
              {policyTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Jurisdiction Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-400">Region:</span>
            <select
              value={selectedJurisdiction}
              onChange={(e) => setSelectedJurisdiction(e.target.value)}
              className="bg-slate-900 text-slate-200 text-xs border border-slate-700/80 rounded-md px-2.5 py-1.5 focus:outline-none focus:border-cyan-500 transition-colors"
            >
              {jurisdictions.map((j) => (
                <option key={j} value={j}>
                  {j}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4 font-semibold">Policy / Mechanism</th>
                <th className="py-3 px-4 font-semibold">Jurisdiction</th>
                <th className="py-3 px-4 font-semibold">Policy Type</th>
                <th className="py-3 px-4 font-semibold">Strategic Objectives & Mandates</th>
                <th className="py-3 px-4 font-semibold text-center">Impact Index</th>
                <th className="py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {filteredPolicies.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-400 text-xs">
                    No policy instruments match the selected filter criteria. Try resetting your search.
                  </td>
                </tr>
              ) : (
                filteredPolicies.map((policy) => {
                  const typeBadgeClass =
                    policy.policyType === 'Subsidies & Tax Credits'
                      ? 'bg-emerald-950/50 text-emerald-300 border-emerald-800/50'
                      : policy.policyType === 'Export Restrictions'
                      ? 'bg-rose-950/50 text-rose-300 border-rose-800/50'
                      : policy.policyType === 'Foreign Investment Screening'
                      ? 'bg-blue-950/50 text-blue-300 border-blue-800/50'
                      : policy.policyType === 'State Equity & Ownership'
                      ? 'bg-amber-950/50 text-amber-300 border-amber-800/50'
                      : 'bg-purple-950/50 text-purple-300 border-purple-800/50';

                  return (
                    <tr
                      key={policy.id}
                      onClick={() => setActiveModalPolicy(policy)}
                      className="hover:bg-slate-800/50 transition-colors cursor-pointer group"
                    >
                      <td className="py-3.5 px-4 font-bold text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{policy.name}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-300 whitespace-nowrap font-medium">
                        {policy.jurisdiction}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${typeBadgeClass}`}
                        >
                          {policy.policyType}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-300 max-w-md leading-relaxed">
                        {policy.strategicObjectives}
                      </td>
                      <td className="py-3.5 px-4 text-center font-mono font-bold text-cyan-400 tabular-nums">
                        {policy.impactScore} / 100
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveModalPolicy(policy);
                          }}
                          className="px-2.5 py-1 text-[11px] font-medium text-cyan-400 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-800/50 rounded transition-colors"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Policy Detail Modal */}
      {activeModalPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-700/80 rounded-xl max-w-2xl w-full p-6 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setActiveModalPolicy(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <span>{activeModalPolicy.jurisdiction}</span>
                <span className="text-slate-600">·</span>
                <span>Enacted: {activeModalPolicy.enactedYear}</span>
              </div>
              <h3 className="text-lg font-bold text-white mt-1">
                {activeModalPolicy.name}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Target Domain: {activeModalPolicy.targetDomain}
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="font-semibold text-slate-300 block mb-1">
                  Strategic Objectives & Requirements:
                </span>
                <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-lg text-slate-300 leading-relaxed">
                  {activeModalPolicy.strategicObjectives}
                </div>
              </div>

              <div>
                <span className="font-semibold text-slate-300 block mb-1">
                  Key Enforcement Mechanisms:
                </span>
                <ul className="space-y-1.5 pl-2">
                  {activeModalPolicy.keyMechanisms.map((mech, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{mech}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-semibold text-slate-300 block mb-1">
                  Implementation Vulnerabilities & Trade Friction:
                </span>
                <div className="p-3 bg-rose-950/30 border border-rose-900/50 rounded-lg text-rose-200/90 leading-relaxed flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{activeModalPolicy.vulnerabilities}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <span className="text-xs text-slate-400 font-mono">
                Geopolitical Leverage Rating: {activeModalPolicy.impactScore}/100
              </span>
              <button
                onClick={() => setActiveModalPolicy(null)}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
              >
                Close Briefing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
