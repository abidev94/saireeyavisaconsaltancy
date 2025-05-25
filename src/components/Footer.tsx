import React from 'react';
import { Globe, ChevronRight, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Globe className="h-7 w-7 text-amber-500" />
              <span className="ml-2 text-xl font-bold">SAI REEYAA Consultancy</span>
            </div>
            <p className="text-blue-200 mb-6">
              Professional visa and immigration services helping clients achieve their international goals since 2013.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`}
                  className="bg-blue-800 hover:bg-amber-500 transition-colors p-2 rounded-full"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-5 w-5"></div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Work Permit', 'Tourist Visa', 'Visit Visa', 'Student Visa', 'Business Visa', 'Family Immigration', 'Permanent Residency'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="flex items-center text-blue-200 hover:text-amber-400 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Testimonials', 'FAQ', 'Contact', 'Blog', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="flex items-center text-blue-200 hover:text-amber-400 transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-blue-200 mb-4">
              Stay updated on visa policy changes and new opportunities
            </p>
            <form className="flex mb-6">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 w-full bg-blue-800 text-white border border-blue-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button 
                type="submit" 
                className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-md flex items-center justify-center text-blue-900 font-semibold"
              >
                <Mail className="h-5 w-5" />
              </button>
            </form>
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-blue-200 text-sm">
                820A 1/1 3rd Mile Post<br />
                Trincomalee<br />
                Email: saireeraaconsultancy@gmail.com<br />
                Phone: +94 (72) 875-6296<br/>
                       +94 (75) 392-9723<br/>
                       +94 (72) 673-7729<br/>          
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} SAI REEYA Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};