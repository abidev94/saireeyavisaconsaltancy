import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Globe className="h-8 w-8 text-blue-900" />
          <span className="ml-2 text-xl font-bold text-blue-900">SAI REEYAA Consultancy</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Services', 'About', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
            Get Started
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-blue-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Home', 'Services', 'About', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};