import React, { useState, useMemo } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart3, LineChart as LineChartIcon, PieChart as PieChartIcon, TrendingUp, Sparkles, Zap } from 'lucide-react';
import { ExcelData } from '../App';

interface ChartPanelProps {
  data: ExcelData | null;
  selectedColumns: string[];
  onColumnSelect: (columns: string[]) => void;
}

export const ChartPanel: React.FC<ChartPanelProps> = ({
  data,
  selectedColumns,
  onColumnSelect
}) => {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');
  const [xAxisColumn, setXAxisColumn] = useState<string>('');
  const [yAxisColumn, setYAxisColumn] = useState<string>('');

  const chartData = useMemo(() => {
    if (!data || !xAxisColumn || !yAxisColumn) return [];

    const xIndex = data.headers.indexOf(xAxisColumn);
    const yIndex = data.headers.indexOf(yAxisColumn);

    if (xIndex === -1 || yIndex === -1) return [];

    // Group data by x-axis value and sum y-axis values
    const grouped = data.rows.reduce((acc, row) => {
      const xValue = String(row[xIndex] || 'Unknown');
      const yValue = Number(row[yIndex]) || 0;
      
      if (acc[xValue]) {
        acc[xValue] += yValue;
      } else {
        acc[xValue] = yValue;
      }
      
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(grouped).map(([key, value]) => ({
      name: key,
      value: value
    })).slice(0, 20); // Limit to 20 items for readability
  }, [data, xAxisColumn, yAxisColumn]);

  const numericColumns = useMemo(() => {
    if (!data) return [];
    return data.headers.filter((header, index) => {
      return data.rows.some(row => !isNaN(Number(row[index])) && row[index] !== null && row[index] !== '');
    });
  }, [data]);

  const colors = ['#8B5CF6', '#EC4899', '#F97316', '#EF4444', '#3B82F6', '#14B8A6', '#F59E0B', '#10B981'];

  if (!data) return null;

  const renderChart = () => {
    if (chartData.length === 0) {
      return (
        <div className="flex items-center justify-center h-64 text-gray-500 bg-gradient-to-br from-purple-50/50 to-blue-50/50 rounded-2xl border-2 border-dashed border-purple-200">
          <div className="text-center">
            <div className="relative">
              <TrendingUp className="w-16 h-16 mx-auto mb-4 text-purple-400" />
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
            </div>
            <p className="text-lg font-semibold text-gray-600">Select columns to generate beautiful charts</p>
            <p className="text-sm text-gray-500 mt-2">Choose your X and Y axis to visualize your data</p>
          </div>
        </div>
      );
    }

    switch (chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="url(#lineGradient)" 
                strokeWidth={3}
                dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, fill: '#EC4899' }}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                innerRadius={40}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
      
      <div className="relative">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Chart Generator
            </h3>
            <div className="flex items-center space-x-1 mt-1">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-gray-600 font-medium">Powered by AI insights</span>
            </div>
          </div>
        </div>

        <div className="space-y-5">
        {/* Chart Type Selection */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Chart Type</label>
          <div className="flex space-x-3">
            {[
              { type: 'bar', icon: BarChart3, label: 'Bar' },
              { type: 'line', icon: LineChartIcon, label: 'Line' },
              { type: 'pie', icon: PieChartIcon, label: 'Pie' }
            ].map(({ type, icon: Icon, label }) => (
              <button
                key={type}
                onClick={() => setChartType(type as any)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  chartType === type
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-purple-500 shadow-lg'
                    : 'bg-white/80 text-gray-600 border-purple-200 hover:bg-purple-50 hover:border-purple-300'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* X-Axis Selection */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">X-Axis (Categories)</label>
          <select
            value={xAxisColumn}
            onChange={(e) => setXAxisColumn(e.target.value)}
            className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200 hover:shadow-md font-medium"
          >
            <option value="">Select column</option>
            {data.headers.map((header) => (
              <option key={header} value={header}>{header}</option>
            ))}
          </select>
        </div>

        {/* Y-Axis Selection */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Y-Axis (Values)</label>
          <select
            value={yAxisColumn}
            onChange={(e) => setYAxisColumn(e.target.value)}
            className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200 hover:shadow-md font-medium"
          >
            <option value="">Select column</option>
            {numericColumns.map((header) => (
              <option key={header} value={header}>{header}</option>
            ))}
          </select>
        </div>

        {/* Chart Display */}
        <div className="border-2 border-purple-200/50 rounded-2xl p-6 bg-white/90 backdrop-blur-sm shadow-inner">
          {renderChart()}
        </div>
        </div>
      </div>
    </div>
  );
};