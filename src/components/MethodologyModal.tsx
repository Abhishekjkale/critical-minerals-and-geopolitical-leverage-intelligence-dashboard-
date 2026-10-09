import React from 'react';
import { X, ExternalLink, BookOpen, ShieldCheck } from 'lucide-react';
import { STRATEGIC_REFERENCES } from '../data/reportData';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MethodologyModal: React.FC<MethodologyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-[#0f172a] border border-slate-700 rounded-xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-cyan-950 text-cyan-400 rounded-md border border-cyan-800/60">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Strategic References & Analytical Sources
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Section 6 Citations & Intelligence Repositories
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-slate-300">
          <p className="text-slate-300 leading-relaxed">
            This dashboard and executive report synthesize data, policy frameworks, and market concentration benchmarks from the following primary research institutions and government bodies:
          </p>

          <div className="space-y-3 pt-2">
            {STRATEGIC_REFERENCES.map((ref, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-slate-900 border border-slate-800 rounded-lg space-y-1.5 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-xs">{ref.org}</span>
                  <span className="font-mono text-[11px] text-cyan-400 flex items-center gap-1">
                    <span>{ref.url}</span>
                  </span>
                </div>
                <div className="text-slate-200 font-medium text-xs">
                  {ref.reportTitle}
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {ref.scope}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3.5 bg-slate-950/70 border border-slate-800 rounded-lg text-[11px] text-slate-400 space-y-1">
            <div className="font-semibold text-slate-300">Analytical Methodology:</div>
            <p>
              Supply concentration metrics denote chemical refining capacity (metric tons per annum of finished battery/magnet-grade salts) rather than raw run-of-mine extraction weight. Risk ratings combine sovereign policy volatility, export control likelihood, and Western replacement lead times.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
