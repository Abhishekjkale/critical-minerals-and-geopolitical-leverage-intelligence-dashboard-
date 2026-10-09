/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { FilterBar } from './components/FilterBar';
import { ExecutiveOverview } from './components/ExecutiveOverview';
import { SupplyChainBottlenecks } from './components/SupplyChainBottlenecks';
import { CaseStudyExplorer } from './components/CaseStudyExplorer';
import { PolicyMatrix } from './components/PolicyMatrix';
import { RiskSimulator } from './components/RiskSimulator';
import { ExecutiveBriefModal } from './components/ExecutiveBriefModal';
import { MethodologyModal } from './components/MethodologyModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedMineral, setSelectedMineral] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string>('china');
  const [isBriefOpen, setIsBriefOpen] = useState<boolean>(false);
  const [isSourcesOpen, setIsSourcesOpen] = useState<boolean>(false);

  const handleSelectCaseStudy = (caseStudyId: string) => {
    setActiveCaseStudyId(caseStudyId);
    setActiveTab('casestudies');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    setSelectedMineral('all');
    setSelectedRegion('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Top Bar Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBrief={() => setIsBriefOpen(true)}
        onOpenSources={() => setIsSourcesOpen(true)}
      />

      {/* Global Contextual Filter & Search Bar */}
      <FilterBar
        selectedMineral={selectedMineral}
        setSelectedMineral={setSelectedMineral}
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onResetFilters={handleResetFilters}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'overview' && (
          <ExecutiveOverview
            onSelectCaseStudy={handleSelectCaseStudy}
            onNavigateTab={setActiveTab}
            selectedMineral={selectedMineral}
            selectedRegion={selectedRegion}
          />
        )}

        {activeTab === 'bottlenecks' && (
          <SupplyChainBottlenecks
            onSelectCaseStudy={handleSelectCaseStudy}
            selectedMineralFilter={selectedMineral}
          />
        )}

        {activeTab === 'casestudies' && (
          <CaseStudyExplorer
            activeStudyId={activeCaseStudyId}
            setActiveStudyId={setActiveCaseStudyId}
            onNavigateTab={setActiveTab}
          />
        )}

        {activeTab === 'policies' && (
          <PolicyMatrix searchQuery={searchQuery} />
        )}

        {activeTab === 'simulator' && <RiskSimulator />}
      </main>

      {/* Professional Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 text-slate-400 py-6 px-4 sm:px-6 lg:px-8 mt-12 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-semibold text-slate-300">
              Global Energy Transition & Geopolitics Series · Strategic Report Q4 2026
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="text-slate-400">
              Critical Minerals & Green Technology Leverage Analysis
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSourcesOpen(true)}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Analytical Sources (IEA, USGS, CSIS)
            </button>
            <span className="text-slate-700">·</span>
            <button
              onClick={() => setIsBriefOpen(true)}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Executive Memorandum
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ExecutiveBriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />

      <MethodologyModal
        isOpen={isSourcesOpen}
        onClose={() => setIsSourcesOpen(false)}
      />
    </div>
  );
}
