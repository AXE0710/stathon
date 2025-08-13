import { useState } from 'react';
import { Menu, X } from 'lucide-react'; 

export default function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className=" shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-20">
        
        
        <div className="flex-shrink-0">
        <a href="#" className="text-2xl font-bold text-gray-800">
          Accu-Gov
        </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <a
          key={link.label}
          href={link.href}
          className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300"
          >
          {link.label}
          </a>
        ))}
        <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Login
        </a>
        </div>

        <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        </div>
      </div>
      </div>

      <div
      className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}
      >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
        {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="block text-gray-600 hover:bg-gray-100 px-3 py-2 rounded-md font-medium"
          onClick={() => setIsMenuOpen(false)} 
        >
          {link.label}
        </a>
        ))}
         <a href="#" className="block bg-blue-600 text-white mx-2 mt-2 px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Login
        </a>
      </div>
      </div>
    </nav>
  );
}