import React from 'react';
import { Shield, Menu, X, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <div className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 p-2 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative">
              <Shield className="h-6 w-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-500">
              Accugov
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 relative">
            <a href="#solutions" className="text-gray-600 hover:text-blue-700 transition-all duration-300 relative group">
              Solutions
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#capabilities" className="text-gray-600 hover:text-blue-700 transition-all duration-300 relative group">
              Capabilities
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#security" className="text-gray-600 hover:text-blue-700 transition-all duration-300 relative group">
              Security
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-700 transition-all duration-300 relative group">
              Contact
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <button className="group bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-4 py-2 rounded-xl hover:from-blue-800 hover:to-indigo-800 transition-all duration-500 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center space-x-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Request Demo</span>
              Request Demo
            </button>
          </nav>

          <button 
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="h-6 w-6 text-gray-700 transform rotate-90 transition-transform duration-300" /> : 
              <Menu className="h-6 w-6 text-gray-700 transition-transform duration-300" />
            }
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 py-4 animate-fade-in-down">
            <nav className="flex flex-col space-y-4">
              <a href="#solutions" className="text-gray-600 hover:text-blue-700 px-4 py-2 hover:bg-blue-50 rounded-lg transition-all duration-300 mx-4">Solutions</a>
              <a href="#capabilities" className="text-gray-600 hover:text-blue-700 px-4 py-2 hover:bg-blue-50 rounded-lg transition-all duration-300 mx-4">Capabilities</a>
              <a href="#security" className="text-gray-600 hover:text-blue-700 px-4 py-2 hover:bg-blue-50 rounded-lg transition-all duration-300 mx-4">Security</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-700 px-4 py-2 hover:bg-blue-50 rounded-lg transition-all duration-300 mx-4">Contact</a>
              <button className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-4 py-2 rounded-xl hover:from-blue-800 hover:to-indigo-800 transition-all duration-500 mx-4 flex items-center space-x-2 shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span>Request Demo</span>
                Request Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};