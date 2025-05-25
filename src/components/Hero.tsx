import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Gateway to Global Opportunities
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Professional visa and immigration services to help you achieve your international goals. We specialize in work permits, tourist visas, visit visas, and student visas.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center">
                Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-md backdrop-blur-sm transition-all duration-300">
                Explore Services
              </button>
            </div>
            <div className="pt-4 flex items-center space-x-2 text-blue-100">
              <span className="flex h-2 w-2 bg-green-400 rounded-full"></span>
              <p>Trusted by 1000+ clients worldwide</p>
            </div>
          </div>
          
          <div className="hidden md:block relative h-96">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Global travel and visas" 
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/80 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-lg">
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-blue-900 font-semibold">Success Rate</p>
                    <p className="text-blue-800 text-2xl font-bold">98%</p>
                  </div>
                  <div>
                    <p className="text-blue-900 font-semibold">Countries</p>
                    <p className="text-blue-800 text-2xl font-bold">50+</p>
                  </div>
                  <div>
                    <p className="text-blue-900 font-semibold">Happy Clients</p>
                    <p className="text-blue-800 text-2xl font-bold">1000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};