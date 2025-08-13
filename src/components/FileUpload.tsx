import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import * as XLSX from 'xlsx';
import { Upload, FileSpreadsheet, AlertCircle, Sparkles, Zap } from 'lucide-react';
import { ExcelData } from '../App';

interface FileUploadProps {
  onFileUpload: (data: ExcelData) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        
        const sheetNames = workbook.SheetNames;
        
        // Process all sheets
        const allSheets: Record<string, { headers: string[]; rows: any[][] }> = {};
        
        sheetNames.forEach(sheetName => {
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
          
          if (jsonData.length > 0) {
            const headers = jsonData[0] as string[];
            const rows = jsonData.slice(1) as any[][];
            allSheets[sheetName] = { headers, rows };
          }
        });
        
        const firstSheetData = allSheets[sheetNames[0]];
        if (!firstSheetData) {
          throw new Error('No valid data found in spreadsheet');
        }
        
        onFileUpload({
          headers: firstSheetData.headers,
          rows: firstSheetData.rows,
          sheetNames,
          currentSheet: sheetNames[0],
          allSheets
        });
      } catch (error) {
        console.error('Error reading file:', error);
        alert('Error reading file. Please make sure it\'s a valid Excel file.');
      }
    };
    
    reader.readAsArrayBuffer(file);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-excel': ['.xls'],
      'text/csv': ['.csv']
    },
    maxFiles: 1
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-3xl mb-6 shadow-2xl">
          <FileSpreadsheet className="w-10 h-10 text-white" />
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-300 animate-bounce" />
          <Zap className="absolute -bottom-1 -left-1 w-5 h-5 text-yellow-400 animate-pulse" />
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Transform Your Data
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Upload your Excel or CSV files and watch them come to life with powerful analytics, 
          beautiful visualizations, and intelligent insights
        </p>
      </div>

      <div
        {...getRootProps()}
        className={`
          relative border-3 border-dashed rounded-3xl p-16 text-center cursor-pointer
          transition-all duration-300 ease-in-out
          ${isDragActive && !isDragReject 
            ? 'border-purple-400 bg-gradient-to-br from-purple-50 to-blue-50 scale-105 shadow-2xl' 
            : isDragReject 
            ? 'border-red-400 bg-gradient-to-br from-red-50 to-orange-50' 
            : 'border-purple-300 hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-50/50 hover:to-blue-50/50 hover:scale-102 hover:shadow-xl'
          }
        `}
      >
        <input {...getInputProps()} />
        
        <div className="space-y-4">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg ${
            isDragReject ? 'bg-gradient-to-r from-red-400 to-orange-400' : 'bg-gradient-to-r from-purple-400 to-blue-400'
          }`}>
            {isDragReject ? (
              <AlertCircle className="w-8 h-8 text-white" />
            ) : (
              <Upload className="w-8 h-8 text-white animate-bounce" />
            )}
          </div>
          
          {isDragActive ? (
            isDragReject ? (
              <div>
                <p className="text-xl font-bold text-red-600 mb-2">Invalid file type</p>
                <p className="text-red-500">Please upload an Excel (.xlsx, .xls) or CSV file</p>
              </div>
            ) : (
              <div>
                <p className="text-2xl font-bold text-purple-600 mb-2">Drop your file here!</p>
                <p className="text-purple-500 text-lg">Release to start the magic ✨</p>
              </div>
            )
          ) : (
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-3">
                Drag & Drop Your Excel File
              </p>
              <p className="text-gray-600 mb-6 text-lg">or click anywhere to browse your files</p>
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                <Upload className="w-5 h-5 mr-3" />
                <span className="font-semibold text-lg">Choose Your File</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Excel (.xlsx, .xls)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>CSV Files</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>Max 10MB</span>
          </div>
        </div>
      </div>
    </div>
  );
};