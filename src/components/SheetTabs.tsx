import React from 'react';
import { FileText, Sparkles } from 'lucide-react';

interface SheetTabsProps {
  sheets: string[];
  currentSheet: string;
  onSheetChange: (sheet: string) => void;
}

export const SheetTabs: React.FC<SheetTabsProps> = ({
  sheets,
  currentSheet,
  onSheetChange
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-2">
      <div className="flex items-center space-x-2 mb-3 px-4 pt-2">
        <Sparkles className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Worksheets
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {sheets.map((sheet, index) => (
          <button
            key={sheet}
            onClick={() => onSheetChange(sheet)}
            className={`
              relative flex items-center space-x-2 px-4 py-3 rounded-xl font-medium text-sm
              transition-all duration-300 ease-out transform hover:scale-105
              ${currentSheet === sheet
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                : 'bg-white/60 text-gray-700 hover:bg-white/80 hover:shadow-md border border-gray-200/50'
              }
            `}
          >
            <FileText className="w-4 h-4" />
            <span>{sheet}</span>
            {currentSheet === sheet && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};