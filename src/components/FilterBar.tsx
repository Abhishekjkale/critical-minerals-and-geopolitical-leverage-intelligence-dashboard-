import React from 'react';
import { Search, X, SlidersHorizontal, RefreshCw } from 'lucide-react';

interface FilterBarProps {
  selectedMineral: string;
  setSelectedMineral: (mineral: string) => void;
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onResetFilters: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedMineral,
  setSelectedMineral,
  selectedRegion,
  setSelectedRegion,
  searchQuery,
  setSearchQuery,
  onResetFilters,
}) => {
  const mineralOptions = [
    { id: 'all', label: 'All Minerals' },
    { id: 'rees', label: 'Rare Earths (REEs)' },
    { id: 'lithium', label: 'Lithium' },
    { id: 'cobalt', label: 'Cobalt' },
    { id: 'graphite', label: 'Graphite' },
    { id: 'nickel', label: 'Nickel' },
    { id: 'solar-wafer', label: 'Silicon & Solar' },
    { id: 'gallium-germanium', label: 'Gallium / Germanium' },
  ];

  const regionOptions = [
    { id: 'all', label: 'All Regions' },
    { id: 'china', label: 'China (East Asia)' },
    { id: 'usa-eu', label: 'US & EU' },
    { id: 'indonesia-latam', label: 'Indonesia & LatAm' },
    { id: 'australia-canada', label: 'Australia & Canada' },
  ];

  const hasActiveFilters = selectedMineral !== 'all' || selectedRegion !== 'all' || searchQuery.trim() !== '';

  return (
    <div className="bg-[#0f172a]/90 border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search minerals, policies, countries, or chokepoints..."
            className="w-full pl-9 pr-8 py-1.5 bg-slate-900 border border-slate-700/80 rounded-md text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Selectors */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Mineral Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-slate-400 hidden sm:inline">Mineral:</span>
            <select
              value={selectedMineral}
              onChange={(e) => setSelectedMineral(e.target.value)}
              className="bg-slate-900 text-slate-200 text-xs border border-slate-700/80 rounded-md px-2.5 py-1.5 focus:outline-none focus:border-cyan-500 transition-colors"
            >
              {mineralOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Region Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-slate-400 hidden sm:inline">Region:</span>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-slate-900 text-slate-200 text-xs border border-slate-700/80 rounded-md px-2.5 py-1.5 focus:outline-none focus:border-cyan-500 transition-colors"
            >
              {regionOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters button */}
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 px-2 py-1 bg-cyan-950/40 border border-cyan-800/50 rounded transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
