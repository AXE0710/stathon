import React from 'react';
import { BarChart3, Filter, FileText, Layers, TrendingUp, Database, Eye, Zap } from 'lucide-react';

interface StatsProps {
  totalRows: number;
  filteredRows: number;
  totalColumns: number;
  currentSheet: string;
}

export const Stats: React.FC<StatsProps> = ({ 
  totalRows, 
  filteredRows, 
  totalColumns, 
  currentSheet 
}) => {
  const stats = [
    {
      icon: Database,
      label: 'Total Rows',
      value: totalRows.toLocaleString(),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Eye,
      label: 'Filtered Rows',
      value: filteredRows.toLocaleString(),
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: BarChart3,
      label: 'Columns',
      value: totalColumns.toString(),
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      iconColor: 'text-orange-600'
    },
    {
      icon: Layers,
      label: 'Current Sheet',
      value: currentSheet,
      color: 'from-purple-500 to-blue-500',
      bgColor: 'from-purple-50 to-blue-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div 
            key={index} 
            className={`
              relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/20 
              hover:shadow-2xl transition-all duration-300 transform hover:scale-105
              bg-gradient-to-br ${stat.bgColor} overflow-hidden group
            `}
          >
            {/* Animated background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </p>
              </div>
              <div className={`
                relative p-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg
                group-hover:scale-110 group-hover:rotate-12 transition-all duration-300
              `}>
                <IconComponent className="w-7 h-7 text-white" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />
              </div>
            </div>
            
            {/* Sparkle effect */}
            <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        );
      })}
    </div>
  );
};