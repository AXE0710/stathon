import React from 'react';
import { FileSpreadsheet, TrendingUp, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-lg shadow-purple-500/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-2xl shadow-lg">
              <FileSpreadsheet className="w-7 h-7 text-white" />
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 animate-pulse" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AccuGov
              </h1>
             
            </div>
          </div>
          
          <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full border border-purple-200/50">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Analytics Platform</span>
          </div>
        </div>
      </div>
    </header>
  );
};