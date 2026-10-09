import React from 'react';
import { ShieldAlert, BookOpen, FileText, Activity } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBrief: () => void;
  onOpenSources: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenBrief,
  onOpenSources,
}) => {
  const navItems = [
    { id: 'overview', label: 'Executive Summary' },
    { id: 'bottlenecks', label: 'Supply Bottlenecks' },
    { id: 'casestudies', label: 'Case Studies' },
    { id: 'policies', label: 'Policy Matrix' },
    { id: 'simulator', label: 'Risk Simulator' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0b1120]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/10">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white whitespace-nowrap block">
                Critical Minerals & Green Tech Leverage
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-wider block">
                STRATEGIC INTELLIGENCE REPORT · Q4 2026
              </span>
            </div>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-slate-800 text-cyan-400 border border-slate-700/60 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenSources}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/80 rounded-md hover:bg-slate-800 hover:text-white transition-colors whitespace-nowrap"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              <span>Sources</span>
            </button>
            <button
              onClick={onOpenBrief}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-md hover:from-cyan-300 hover:to-teal-200 transition-all shadow-sm shadow-cyan-500/20 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-slate-950" />
              <span>Executive Brief</span>
            </button>
          </div>
        </div>

        {/* Mobile Subnav */}
        <div className="flex lg:hidden overflow-x-auto py-2 gap-1 border-t border-slate-800/80 -mx-4 px-4 scrollbar-none">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-2.5 py-1 text-xs font-medium rounded whitespace-nowrap shrink-0 transition-colors ${
                activeTab === item.id
                  ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
