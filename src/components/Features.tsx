import React from 'react';
import { Link } from 'react-router-dom';
import {
  Database,
  Calculator,
  FileText,
  Zap,
  Brain,
  CheckCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const capabilities = [
  {
    icon: Database,
    title: "Automated Data Preparation",
    description: "AI-driven data cleaning automatically detects and fixes errors, omissions, and inconsistencies across large datasets. Seamlessly integrates data from multiple sources (CSV, databases, APIs) with intelligent transformation and optimization.",
    color: "from-blue-600 via-blue-700 to-indigo-700",
    technologies: ["Boomi DataHub", "Hyland IDP", "Microsoft Fabric Data Wrangler"]
  },
  {
    icon: Calculator,
    title: "Automated Estimation",
    description: "AI-powered estimation algorithms use predictive analytics and machine learning to generate accurate estimates. Real-time analysis with customizable templates for financial, construction, and market analysis domains.",
    color: "from-indigo-600 via-purple-600 to-purple-700",
    technologies: ["Togal.AI", "TensorFlow/PyTorch", "AWS/Google Cloud"]
  },
  {
    icon: FileText,
    title: "Automated Report Writing",
    description: "Natural Language Generation converts structured data into comprehensive, well-formatted reports. Dynamic visualizations and workflow automation enable seamless sharing across government teams.",
    color: "from-purple-600 via-pink-600 to-pink-700",
    technologies: ["ReportGPT", "Skywork Super Agents", "Mammoth Analytics"]
  }
];

export const Features: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #3B82F6 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-sm font-semibold rounded-full border border-indigo-200 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Three Core Capabilities
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up delay-200">
            Three Core Automated Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-400">
            Streamline government operations with enterprise-grade automation that transforms complex data workflows into simple, intelligent processes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative z-10">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 hover:border-gray-300/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 group transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              {/* Floating Icon Container */}
              <div className="relative mb-6">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${capability.color} mb-2 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                <div className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r ${capability.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-ping`}></div>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-indigo-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                {capability.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                {capability.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-blue-600" />
                  Key Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {capability.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs rounded-full hover:from-blue-100 hover:to-indigo-100 hover:text-blue-800 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center text-blue-700 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-sm font-medium mr-2">Explore capability</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:scale-[1.02] animate-fade-in-up delay-1400 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"></div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4 group">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">End-to-End Automation</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our integrated platform connects all three capabilities seamlessly. Raw data flows through automated preparation, intelligent estimation, and professional report generation without manual intervention.
              </p>
              <Link to="/app" className="group bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-6 py-3 rounded-xl hover:from-blue-800 hover:to-indigo-800 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl flex items-center space-x-2">
                See Integration Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border border-blue-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="flex items-center mb-4 group">
                <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">AI-Powered Intelligence</h4>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center hover:text-gray-800 transition-colors duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
                  Machine learning models for data quality assessment
                </li>
                <li className="flex items-center hover:text-gray-800 transition-colors duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                  Predictive analytics for accurate estimations
                </li>
                <li className="flex items-center hover:text-gray-800 transition-colors duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  Natural language processing for report generation
                </li>
                <li className="flex items-center hover:text-gray-800 transition-colors duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mr-3"></div>
                  Continuous learning from government data patterns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};