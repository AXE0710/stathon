import React from 'react';
import { ArrowRight, Play, Sparkles, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 lg:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-indigo-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Analytics
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight animate-fade-in-up delay-200">
            Automated Survey Analytics
            <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent animate-gradient-x"> Made Simple</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
            Accugov streamlines government survey operations with AI-powered data preparation, automated estimation, and intelligent report generation. Transform complex datasets into actionable insights with enterprise-grade security and compliance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-up delay-600">
            <Link to="/app" className="group bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-800 hover:to-indigo-800 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span>Demo</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in-up delay-800">
            <div className="group transform hover:scale-105 transition-all duration-300 hover:-translate-y-2">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
                <div className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">500+</div>
                <div className="text-gray-600 font-medium">Government Agencies</div>
              </div>
            </div>
            <div className="group transform hover:scale-105 transition-all duration-300 hover:-translate-y-2 delay-100">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
                <div className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-indigo-700 to-purple-700 bg-clip-text text-transparent">99.9%</div>
                <div className="text-gray-600 font-medium">Data Accuracy</div>
              </div>
            </div>
            <div className="group transform hover:scale-105 transition-all duration-300 hover:-translate-y-2 delay-200">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
                <div className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">85%</div>
                <div className="text-gray-600 font-medium">Time Reduction</div>
              </div>
            </div>
            <div className="group transform hover:scale-105 transition-all duration-300 hover:-translate-y-2 delay-300">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
                <div className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-green-700 to-blue-700 bg-clip-text text-transparent">FedRAMP</div>
                <div className="text-gray-600 font-medium">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};