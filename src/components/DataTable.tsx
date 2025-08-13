import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Table, Eye } from 'lucide-react';
import { ExcelData } from '../App';

interface DataTableProps {
  data: ExcelData | null;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const DataTable: React.FC<DataTableProps> = ({
  data,
  currentPage,
  totalPages,
  onPageChange
}) => {
  if (!data) return null;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getCellColor = (value: any, columnIndex: number) => {
    if (value === null || value === undefined || value === '') return 'text-gray-400';
    
    // Color numeric values
    if (!isNaN(Number(value)) && value !== '') {
      const num = Number(value);
      if (num > 0) return 'text-green-600 font-semibold';
      if (num < 0) return 'text-red-600 font-semibold';
      return 'text-blue-600 font-semibold';
    }
    
    // Color text based on length or content
    const str = String(value);
    if (str.includes('@')) return 'text-purple-600'; // Email
    if (str.match(/^\d{4}-\d{2}-\d{2}/)) return 'text-indigo-600'; // Date
    if (str.length > 50) return 'text-gray-600 text-xs'; // Long text
    
    return 'text-gray-800';
  };
  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
      <div className="px-6 py-5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-b border-purple-200/30">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
            <Table className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Data Sheet
            </h3>
            <p className="text-sm text-gray-600 mt-1 flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>Showing {data.rows.length} rows • {data.headers.length} columns</span>
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto max-h-96">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-purple-50 to-blue-50 sticky top-0 z-10">
            <tr>
              {data.headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left text-sm font-bold text-purple-700 uppercase tracking-wider border-b-2 border-purple-200/50 bg-white/80 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-2">
                    <span>{header}</span>
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-purple-100/50">
            {data.rows.map((row, rowIndex) => (
              <tr 
                key={rowIndex} 
                className="hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-blue-50/50 transition-all duration-200 group"
              >
                {row.map((cell, cellIndex) => (
                  <td 
                    key={cellIndex} 
                    className={`px-6 py-4 text-sm whitespace-nowrap transition-all duration-200 group-hover:scale-105 ${getCellColor(cell, cellIndex)}`}
                  >
                    <div className="flex items-center space-x-2">
                      {cell !== null && cell !== undefined && cell !== '' ? (
                        <span className="font-medium">{String(cell)}</span>
                      ) : (
                        <span className="text-gray-300 italic">—</span>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-4 border-t border-purple-200/30 bg-gradient-to-r from-purple-50/30 to-blue-50/30">
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-purple-200 text-purple-600 hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-purple-200 text-purple-600 hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-purple-200 text-purple-600 hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-purple-200 text-purple-600 hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};