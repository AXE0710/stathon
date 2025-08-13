import React from 'react';
import { ArrowRight, Shield, Lock, Award, Sparkles, Zap } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float-delayed"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/20 shadow-xl">
              <Sparkles className="w-4 h-4 mr-2" />
              Transform Your Agency Today
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in-up delay-200">
            Ready to Modernize Government Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-400">
            Join hundreds of government agencies that trust Accugov to deliver secure, automated analytics with enterprise-grade compliance.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fade-in-up delay-600">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/20 shadow-xl group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 transform group-hover:-translate-y-2">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">Government Security</h3>
              <p className="text-blue-100 group-hover:text-white transition-colors duration-300">FedRAMP authorized with SOC 2 Type II compliance</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/20 shadow-xl group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 transform group-hover:-translate-y-2 delay-100">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">Data Protection</h3>
              <p className="text-blue-100 group-hover:text-white transition-colors duration-300">End-to-end encryption with on-premises deployment options</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/20 shadow-xl group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 transform group-hover:-translate-y-2 delay-200">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">Proven Results</h3>
              <p className="text-blue-100 group-hover:text-white transition-colors duration-300">85% reduction in manual processing time</p>
            </div>
          </div>

        
          <p className="text-blue-100 text-sm mt-6 animate-fade-in-up delay-1000 flex items-center justify-center space-x-2">
            <Zap className="w-4 h-4" />
            <span>
            Secure pilot program available • FedRAMP compliance included • Dedicated government support
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};