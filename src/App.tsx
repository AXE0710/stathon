import { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FileUpload } from './components/FileUpload';
import { DataTable } from './components/DataTable';
import { FilterPanel } from './components/FilterPanel';
import { ChartPanel } from './components/ChartPanel';
import { Header } from './components/Header';
import { Stats } from './components/Stats';
import { SheetTabs } from './components/SheetTabs';
import { ChatPanel  } from './components/ChatPanel';
import Home from './components/HomePage';
export interface ExcelData {
  headers: string[];
  rows: any[][];
  sheetNames: string[];
  currentSheet: string;
  allSheets: Record<string, { headers: string[]; rows: any[][] }>;
}

export interface FilterConfig {
  column: string;
  type: 'text' | 'number' | 'date' | 'range';
  value: any;
  operator: 'equals' | 'contains' | 'greater' | 'less' | 'between';
}

function App() {
  const [excelData, setExcelData] = useState<ExcelData | null>(null);
  const [filters, setFilters] = useState<FilterConfig[]>([]);
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);
  // Removed unused 'active' and 'setActive'

  const filteredData = useMemo(() => {
    if (!excelData || filters.length === 0) return excelData;

    const filtered = excelData.rows.filter(row => {
      return filters.every(filter => {
        const columnIndex = excelData.headers.indexOf(filter.column);
        if (columnIndex === -1) return true;
        
        const cellValue = row[columnIndex];
        if (cellValue == null) return false;

        switch (filter.type) {
          case 'text':
            const textValue = String(cellValue).toLowerCase();
            const filterText = String(filter.value).toLowerCase();
            return filter.operator === 'contains' 
              ? textValue.includes(filterText)
              : textValue === filterText;
          
          case 'number':
            const numValue = Number(cellValue);
            const filterNum = Number(filter.value);
            switch (filter.operator) {
              case 'equals': return numValue === filterNum;
              case 'greater': return numValue > filterNum;
              case 'less': return numValue < filterNum;
              default: return true;
            }
          
          case 'range':
            const rangeValue = Number(cellValue);
            const [min, max] = filter.value;
            return rangeValue >= min && rangeValue <= max;
          
          default:
            return true;
        }
      });
    });

    return { ...excelData, rows: filtered };
  }, [excelData, filters]);

  const paginatedData = useMemo(() => {
    if (!filteredData) return null;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    return {
      ...filteredData,
      rows: filteredData.rows.slice(startIndex, endIndex)
    };
  }, [filteredData, currentPage, itemsPerPage]);

const totalPages = Math.ceil((filteredData?.rows.length || 0) / itemsPerPage);

// Handler and logic functions
const handleFileUpload = (data: ExcelData) => {
  setExcelData(data);
  setFilters([]);
  setCurrentPage(1);
  setSelectedColumns([]);
};

const handleSheetChange = (sheetName: string) => {
  if (!excelData || !excelData.allSheets[sheetName]) return;
  const sheetData = excelData.allSheets[sheetName];
  setExcelData({
    ...excelData,
    currentSheet: sheetName,
    headers: sheetData.headers,
    rows: sheetData.rows
  });
  setFilters([]);
  setCurrentPage(1);
};

const addFilter = (filter: FilterConfig) => {
  setFilters(prev => [...prev, filter]);
  setCurrentPage(1);
};

const removeFilter = (index: number) => {
  setFilters(prev => prev.filter((_, i) => i !== index));
};

const clearAllFilters = () => {
  setFilters([]);
  setCurrentPage(1);
};

// Main UI for /app route
const MainUI = () => {
  if (!excelData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <FileUpload onFileUpload={handleFileUpload} />
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <Stats 
            totalRows={excelData.rows.length}
            filteredRows={filteredData?.rows.length || 0}
            totalColumns={excelData.headers.length}
            currentSheet={excelData.currentSheet}
          />
        </div>
        {excelData.sheetNames.length > 1 && (
          <div className="mb-6">
            <SheetTabs
              sheets={excelData.sheetNames}
              currentSheet={excelData.currentSheet}
              onSheetChange={handleSheetChange}
            />
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FilterPanel
              headers={excelData.headers}
              filters={filters}
              onAddFilter={addFilter}
              onRemoveFilter={removeFilter}
              onClearAll={clearAllFilters}
            />
            <ChartPanel
              data={filteredData}
              selectedColumns={selectedColumns}
              onColumnSelect={setSelectedColumns}
            />
          </div>
          <div className="lg:col-span-3">
            <DataTable
              data={paginatedData}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
            <ChatPanel 
              messages={[]} // Replace with actual messages state
              onSendMessage={(msg) => console.log("Send message:", msg)} // Replace with actual send function
              isLoading={false} // Replace with actual loading state
            />
          </div>
        </div>
      </div>
    </div>
  );
};

return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<MainUI />} />
    </Routes>
  </BrowserRouter>
);
}
export default App;