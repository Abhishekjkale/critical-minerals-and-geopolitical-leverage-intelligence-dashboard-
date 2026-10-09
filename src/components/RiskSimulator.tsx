import React, { useState } from 'react';
import {
  AlertOctagon,
  Sliders,
  Cpu,
  Car,
  Wind,
  Shield,
  Clock,
  ArrowRight,
  TrendingDown,
  CheckCircle2,
  RefreshCw,
} from 'lucide-react';
import { SIMULATION_SCENARIOS, SimulationScenario } from '../data/reportData';

export const RiskSimulator: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(
    SIMULATION_SCENARIOS[0].id
  );
  const [disruptionSeverity, setDisruptionSeverity] = useState<number>(50); // %
  const [reserveBufferMonths, setReserveBufferMonths] = useState<number>(6); // months
  const [substitutionSpeed, setSubstitutionSpeed] = useState<'slow' | 'moderate' | 'fast'>('moderate');

  const currentScenario =
    SIMULATION_SCENARIOS.find((s) => s.id === selectedScenarioId) ||
    SIMULATION_SCENARIOS[0];

  // Dynamically calculate adjusted crisis score based on sliders
  const calculatedSeverityScore = Math.min(
    100,
    Math.max(
      20,
      Math.round(
        currentScenario.baseSeverity * (disruptionSeverity / 50) -
          reserveBufferMonths * 1.8 +
          (substitutionSpeed === 'fast' ? -12 : substitutionSpeed === 'slow' ? 10 : 0)
      )
    )
  );

  // Adjusted mitigation timeline
  const adjustedTimelineMonths = Math.max(
    6,
    Math.round(
      currentScenario.mitigationTimelineMonths *
        (1 + (disruptionSeverity - 50) / 100) *
        (substitutionSpeed === 'fast' ? 0.75 : substitutionSpeed === 'slow' ? 1.3 : 1)
    )
  );

  const getSeverityBadge = (score: number) => {
    if (score >= 80) {
      return {
        label: 'CRITICAL SHOCK',
        color: 'bg-rose-950/80 text-rose-400 border-rose-800',
        textColor: 'text-rose-400',
      };
    }
    if (score >= 60) {
      return {
        label: 'SEVERE DEFICIT',
        color: 'bg-amber-950/80 text-amber-400 border-amber-800',
        textColor: 'text-amber-400',
      };
    }
    return {
      label: 'MANAGEABLE IMPACT',
      color: 'bg-emerald-950/80 text-emerald-400 border-emerald-800',
      textColor: 'text-emerald-400',
    };
  };

  const severityBadge = getSeverityBadge(calculatedSeverityScore);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
          <span>Crisis Modeling & Scenario Stress Testing</span>
          <span className="text-slate-500">·</span>
          <span>Geopolitical Simulation Engine</span>
        </div>
        <h2 className="text-xl font-bold text-white mt-1">
          Supply Chain Interruption & Shock Simulator
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Simulate targeted export embargoes, resource-nationalist bans, and permitting gridlocks to test downstream resilience.
        </p>
      </div>

      {/* Scenario Presets Selector */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 md:p-6 space-y-4">
        <span className="text-xs font-bold text-slate-300 block uppercase tracking-wider">
          Step 1: Select Simulated Geopolitical Event Preset
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SIMULATION_SCENARIOS.map((scenario) => {
            const isSelected = scenario.id === currentScenario.id;
            return (
              <button
                key={scenario.id}
                onClick={() => setSelectedScenarioId(scenario.id)}
                className={`text-left p-3.5 rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-slate-800 border-cyan-500 text-white shadow-md shadow-cyan-950/40'
                    : 'bg-slate-950/50 border-slate-800/80 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1.5 font-mono">
                  <span className="text-cyan-400">{scenario.mineral}</span>
                  <span className="text-slate-500">Base: {scenario.baseSeverity}/100</span>
                </div>
                <h4 className="text-xs font-bold leading-snug line-clamp-2">
                  {scenario.title}
                </h4>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Simulation Workspace Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Controls & Sliders (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-xl p-5 md:p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>Step 2: Adjust Crisis Variables</span>
            </h3>
            <button
              onClick={() => {
                setDisruptionSeverity(50);
                setReserveBufferMonths(6);
                setSubstitutionSpeed('moderate');
              }}
              className="text-[11px] text-slate-400 hover:text-slate-200 flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Slider 1: Disruption Severity */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Export Curtailment Severity:</span>
              <span className="font-mono font-bold text-rose-400 tabular-nums">
                {disruptionSeverity}% cut
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={disruptionSeverity}
              onChange={(e) => setDisruptionSeverity(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>10% (Minor Quota)</span>
              <span>50% (Baseline)</span>
              <span>100% (Total Embargo)</span>
            </div>
          </div>

          {/* Slider 2: Stockpile Buffer */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Strategic Allied Stockpile Buffer:</span>
              <span className="font-mono font-bold text-cyan-400 tabular-nums">
                {reserveBufferMonths} Months
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="18"
              step="1"
              value={reserveBufferMonths}
              onChange={(e) => setReserveBufferMonths(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0 mo (JIT Supply)</span>
              <span>6 mo (Normal)</span>
              <span>18 mo (Strategic Reserve)</span>
            </div>
          </div>

          {/* Selector 3: Alternate Substitution Velocity */}
          <div className="space-y-2">
            <span className="text-xs text-slate-300 font-medium block">
              Chemistry Substitution & Friend-Shoring Velocity:
            </span>
            <div className="grid grid-cols-3 gap-2">
              {(['slow', 'moderate', 'fast'] as const).map((speed) => (
                <button
                  key={speed}
                  onClick={() => setSubstitutionSpeed(speed)}
                  className={`py-2 text-xs font-semibold rounded-md border capitalize transition-colors ${
                    substitutionSpeed === speed
                      ? 'bg-slate-800 border-cyan-500 text-cyan-300'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {speed}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-500">
              {substitutionSpeed === 'fast'
                ? 'Rapid qualification of LFP, Sodium-ion, or Canadian/Australian alternate feeds.'
                : substitutionSpeed === 'slow'
                ? 'Severe qualification delays and permitting gridlock in recipient markets.'
                : 'Standard 2–3 year industrial retooling and supply shifting.'}
            </p>
          </div>

          {/* Geopolitical Implication Quote */}
          <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-lg space-y-1">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
              Intelligence Briefing Note
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {currentScenario.geopoliticalImplication}
            </p>
          </div>
        </div>

        {/* Right: Calculated Simulation Results (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-xl p-5 md:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider block">
                Calculated Crisis Metrics
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Impact Shockwave Assessment
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`px-2.5 py-1 rounded text-xs font-bold font-mono border ${severityBadge.color}`}
              >
                {severityBadge.label}
              </span>
            </div>
          </div>

          {/* 2 Big Calculated Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl">
              <span className="text-xs text-slate-400 font-medium block">
                Vulnerability Severity Score
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span
                  className={`text-3xl font-extrabold font-mono tabular-nums ${severityBadge.textColor}`}
                >
                  {calculatedSeverityScore}
                </span>
                <span className="text-xs text-slate-500 font-mono">/ 100</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mt-3">
                <div
                  style={{ width: `${calculatedSeverityScore}%` }}
                  className={`h-full ${
                    calculatedSeverityScore >= 80
                      ? 'bg-rose-500'
                      : calculatedSeverityScore >= 60
                      ? 'bg-amber-500'
                      : 'bg-emerald-500'
                  }`}
                />
              </div>
            </div>

            <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl">
              <span className="text-xs text-slate-400 font-medium block">
                Estimated Western Industrial Lag
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold font-mono text-cyan-300 tabular-nums">
                  {adjustedTimelineMonths}
                </span>
                <span className="text-xs text-slate-400 font-mono">Months to Mitigate</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-2.5">
                Time required to substitute chemistry, ramp alternative processing, or retool gigafactories.
              </p>
            </div>
          </div>

          {/* Affected Downstream Technologies */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Affected Green Tech & Strategic Domains
            </h4>
            <div className="space-y-2">
              {currentScenario.affectedTech.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{tech.name}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-semibold border ${
                          tech.impactLevel === 'Critical'
                            ? 'bg-rose-950/60 text-rose-300 border-rose-800/60'
                            : tech.impactLevel === 'Severe'
                            ? 'bg-amber-950/60 text-amber-300 border-amber-800/60'
                            : 'bg-blue-950/60 text-blue-300 border-blue-800/60'
                        }`}
                      >
                        {tech.impactLevel}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300">{tech.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actionable Countermeasures */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Recommended Countermeasures & Hedging Protocols
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentScenario.recommendedCountermeasures.map((cm, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-slate-950/60 border border-slate-800/70 rounded-lg text-xs text-slate-300 flex items-start gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{cm}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
