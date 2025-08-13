import React, { useState } from 'react';
import { Filter, X, Plus, Trash2, Sparkles, Zap } from 'lucide-react';
import { FilterConfig } from '../App';

interface FilterPanelProps {
  headers: string[];
  filters: FilterConfig[];
  onAddFilter: (filter: FilterConfig) => void;
  onRemoveFilter: (index: number) => void;
  onClearAll: () => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  headers,
  filters,
  onAddFilter,
  onRemoveFilter,
  onClearAll
}) => {
  const [newFilter, setNewFilter] = useState<Partial<FilterConfig>>({
    column: '',
    type: 'text',
    operator: 'contains',
    value: ''
  });

  const handleAddFilter = () => {
    if (!newFilter.column || !newFilter.value) return;
    
    onAddFilter(newFilter as FilterConfig);
    setNewFilter({
      column: '',
      type: 'text',
      operator: 'contains',
      value: ''
    });
  };

  const getOperatorOptions = (type: string) => {
    switch (type) {
      case 'text':
        return [
          { value: 'contains', label: 'Contains' },
          { value: 'equals', label: 'Equals' }
        ];
      case 'number':
        return [
          { value: 'equals', label: 'Equals' },
          { value: 'greater', label: 'Greater than' },
          { value: 'less', label: 'Less than' }
        ];
      default:
        return [{ value: 'equals', label: 'Equals' }];
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 mb-6 overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3 relative">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg">
            <Filter className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Smart Filters
            </h3>
            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
        </div>
        {filters.length > 0 && (
          <button
            onClick={onClearAll}
            className="flex items-center space-x-2 px-3 py-2 text-sm text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {/* Active Filters */}
      {filters.length > 0 && (
        <div className="mb-4 space-y-2">
          <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide flex items-center space-x-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span>Active Filters</span>
          </h4>
          {filters.map((filter, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-200/50 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="text-sm flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse" />
                <span className="font-bold text-purple-700">{filter.column}</span>
                <span className="text-gray-500 font-medium">{filter.operator}</span>
                <span className="font-bold text-blue-600 bg-white px-2 py-1 rounded-lg">"{filter.value}"</span>
              </div>
              <button
                onClick={() => onRemoveFilter(index)}
                className="text-red-500 hover:text-red-700 p-1 hover:bg-red-100 rounded-lg transition-all duration-200 group-hover:scale-110"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add New Filter */}
      <div className="space-y-4 relative">
        <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide flex items-center space-x-2">
          <Plus className="w-4 h-4 text-green-500" />
          <span>Add New Filter</span>
        </h4>
        
        <select
          value={newFilter.column}
          onChange={(e) => setNewFilter({ ...newFilter, column: e.target.value })}
          className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200 hover:shadow-md"
        >
          <option value="">Select Column</option>
          {headers.map((header) => (
            <option key={header} value={header}>{header}</option>
          ))}
        </select>

        <select
          value={newFilter.type}
          onChange={(e) => setNewFilter({ 
            ...newFilter, 
            type: e.target.value as FilterConfig['type'],
            operator: e.target.value === 'text' ? 'contains' : 'equals'
          })}
          className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200 hover:shadow-md"
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
        </select>

        <select
          value={newFilter.operator}
          onChange={(e) => setNewFilter({ ...newFilter, operator: e.target.value as FilterConfig['operator'] })}
          className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200 hover:shadow-md"
        >
          {getOperatorOptions(newFilter.type || 'text').map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>

        <input
          type={newFilter.type === 'number' ? 'number' : 'text'}
          value={newFilter.value}
          onChange={(e) => setNewFilter({ ...newFilter, value: e.target.value })}
          placeholder="Filter value"
          className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200 hover:shadow-md"
        />

        <button
          onClick={handleAddFilter}
          disabled={!newFilter.column || !newFilter.value}
          className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
        >
          <Plus className="w-4 h-4" />
          <span>Add Filter</span>
          <Sparkles className="w-4 h-4 animate-pulse" />
        </button>
      </div>
    </div>
  );
};