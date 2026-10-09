import React, { useState } from 'react';
import { X, Copy, Check, Printer, FileText } from 'lucide-react';

interface ExecutiveBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveBriefModal: React.FC<ExecutiveBriefModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const briefText = `EXECUTIVE STRATEGIC INTELLIGENCE MEMORANDUM
SUBJECT: Critical Minerals & Green Technology Leverage Analysis
DATE: Q4 2026 Baseline Assessment
SERIES: Global Energy Transition & Geopolitics Series

1. STRATEGIC PARADIGM SHIFT
The global clean energy transition has shifted geopolitical vulnerability from hydrocarbon chokepoints (such as the Strait of Hormuz) to critical mineral processing hubs and clean technology supply chains. While raw mineral extraction is geographically dispersed (Australia, Chile, DRC, Indonesia), midstream chemical refining, precursor synthesis, and component manufacturing remain acutely monopolized in China.

2. BASELINE PROCESSING CONCENTRATION (2026)
- Rare Earth Elements (REEs): China controls ~89% of global chemical refining and holds a near-monopoly on heavy REEs (Dysprosium, Terbium).
- Battery Anode Graphite: China controls ~90% of coated spherical synthetic and natural graphite processing.
- Cobalt Chemical Refining: China processes ~75% of global supply despite ~73% of raw extraction occurring in the DRC.
- Lithium Hydroxide/Carbonate: China refines ~65% of global battery-grade lithium, processing raw spodumene imported primarily from Australia.
- Solar PV Wafers & Ingots: China holds >95% market control, exerting total price leadership.

3. THE FOUR GEOPOLITICAL ARCHETYPES
1. China (Processing Monopoly — HIGH RISK): Leverages targeted dual-use export licensing (Gallium, Germanium, Antimony, Synthetic Graphite) and state-backed foreign mining equity (CMOC, Tianqi, Ganfeng). Vulnerable to severe environmental liabilities and raw ore reliance on Australia and the DRC.
2. United States & EU (Friend-Shoring Block — MEDIUM RISK): Countering via legislative decoupling (US IRA Section 30D FEOC exclusion, EU CRMA 10/40/15/65 targets). Constrained by 10–16 year mine permitting lead times, higher labor costs, and a 30–50% CAPEX premium over Chinese processing assets.
3. Indonesia & South America (Resource Nationalists — HIGH RISK): Deploying raw ore export prohibitions (Indonesia Hilirisasi capturing >$15B in HPAL smelter FDI) and state equity mandates (Chile National Lithium Strategy via Codelco). Vulnerable to captive coal emission liabilities and chemistry substitutions (Sodium-ion, LFP).
4. Australia & Canada (Trusted Suppliers — LOW RISK): Anchors of Western upstream supply with high ESG standards and investment screening (FIRB and Investment Canada Act divestment orders). Vulnerable to a severe domestic midstream processing deficit, shipping raw ore abroad.

4. KEY POLICY RECOMMENDATIONS FOR ALLIED GOVERNMENTS
- Focus capital subsidies on midstream chemical leaching and precursor synthesis rather than upstream extraction alone.
- Enact emergency statutory permitting reform in North America and Western Europe to compress the 10–16 year mine development cycle.
- Deepen multilateral co-financing under the Minerals Security Partnership (MSP) to guarantee floor-price offtake contracts.
- Accelerate battery chemistry substitution (Sodium-ion, silicon-doped anodes) to neutralize single-mineral chokepoints.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(briefText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#0f172a] border border-slate-700 rounded-xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-cyan-950 text-cyan-400 rounded-md border border-cyan-800/60">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Executive Strategic Briefing
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Geopolitical Case Study Report · Summary & Recommendations
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              title="Print Brief"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Memorandum'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-300 leading-relaxed font-sans">
          <div className="border-b border-slate-800 pb-3">
            <div className="font-mono text-cyan-400 text-[11px]">
              CONFIDENTIAL // EXECUTIVE SUMMARY
            </div>
            <h4 className="text-sm font-bold text-white mt-1">
              Critical Minerals & Green Technology Leverage Analysis
            </h4>
            <div className="text-slate-400 text-[11px] mt-0.5">
              Prepared for Senior Energy & National Security Leadership
            </div>
          </div>

          <div className="space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-300">
              1. The Core Geopolitical Paradigm Shift
            </h5>
            <p>
              The global clean energy transition has shifted geopolitical vulnerability from hydrocarbon choke-points (such as the Strait of Hormuz) to critical mineral processing hubs and clean technology supply chains. While raw mineral extraction is geographically dispersed across Australia, Chile, and the DRC, midstream chemical refining, precursor synthesis, and component manufacturing remain acutely monopolized in China (65%–95%).
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-300">
              2. 2026 Processing Concentration Benchmarks
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-1 font-mono">
              <div className="p-2 bg-slate-900 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Rare Earths</span>
                <span className="text-sm font-bold text-cyan-400">89% China</span>
              </div>
              <div className="p-2 bg-slate-900 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Battery Graphite</span>
                <span className="text-sm font-bold text-cyan-400">90% China</span>
              </div>
              <div className="p-2 bg-slate-900 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Cobalt Refining</span>
                <span className="text-sm font-bold text-cyan-400">75% China</span>
              </div>
              <div className="p-2 bg-slate-900 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Lithium Refining</span>
                <span className="text-sm font-bold text-cyan-400">65% China</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-300">
              3. The Four Stakeholder Archetypes
            </h5>
            <ul className="space-y-2 pl-2">
              <li>
                <strong className="text-white">China (Processing Monopoly - HIGH RISK):</strong> Controls midstream chemical separation; enforces unannounced export licensing on Gallium, Germanium, and Synthetic Graphite; embargoes rare-earth magnet patents.
              </li>
              <li>
                <strong className="text-white">US & EU (Friend-Shoring Block - MEDIUM RISK):</strong> Deploying the Inflation Reduction Act (IRA Section 30D FEOC rules) and Critical Raw Materials Act (CRMA 10/40/15/65 benchmarks). Constrained by 10–16 year mine permitting lead times.
              </li>
              <li>
                <strong className="text-white">Indonesia & South America (Resource Nationalists - HIGH RISK):</strong> Hilirisasi raw nickel export bans captured &gt;$15B in HPAL smelter FDI. Chile National Lithium Strategy mandates Codelco state equity.
              </li>
              <li>
                <strong className="text-white">Australia & Canada (Trusted Suppliers - LOW RISK):</strong> World's largest lithium spodumene and nickel exporters. Use FIRB and the Investment Canada Act to block Chinese SOE buyouts.
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider text-cyan-300">
              4. Strategic Countermeasure Recommendations
            </h5>
            <p>
              Western industrial strategy must shift subsidies from raw mine concessions to midstream chemical conversion facilities. Permitting statutory limits must be enacted to prevent clean energy projects from stalling in litigation. Coordinated floor-price guarantees through the 14-nation Minerals Security Partnership (MSP) are required to insulate Western processing plants against state-subsidized price dumping.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
          >
            Close Memorandum
          </button>
        </div>
      </div>
    </div>
  );
};
