import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Accugov</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The most advanced automated analytics platform designed for government agencies. Transform complex data workflows with AI-powered automation and enterprise-grade security.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <span className="text-xs">in</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Data Preparation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automated Estimation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Report Generation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Government APIs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Government Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security & Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Government Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>gov-sales@accugov.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+1 (800) GOV-DATA</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>Washington, DC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Accugov. All rights reserved. FedRAMP Authorized.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Security Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};