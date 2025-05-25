import React from 'react';
import { Award, Clock, Users, Globe, CheckCircle } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: <Clock className="h-6 w-6" />, value: '10+', label: 'Years Experience' },
    { icon: <Users className="h-6 w-6" />, value: '1000+', label: 'Satisfied Clients' },
    { icon: <Globe className="h-6 w-6" />, value: '50+', label: 'Countries Covered' },
    { icon: <Award className="h-6 w-6" />, value: '98%', label: 'Success Rate' },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="SAI Reya Consultancy Team" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 md:bottom-16 md:-right-16 bg-blue-900 rounded-lg shadow-lg p-6 w-64">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-2">
                    <div className="text-amber-500 mb-1 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-white font-bold text-xl">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-amber-500 font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Trusted Immigration Consultancy Since 2024
            </h2>
            <p className="text-gray-600">
              SAI REEYA Consultancy is a legitimate and respected name in the immigration industry. 
              We provide expert guidance for work permits, tourist visas, visit visas, and student visas.
              Our team consists of certified immigration consultants with in-depth knowledge of visa processes
              across multiple countries.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-900">Licensed Professionals</h4>
                  <p className="text-gray-600">Our team consists of licensed immigration consultants with years of experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-900">Personalized Approach</h4>
                  <p className="text-gray-600">We create customized strategies based on your specific situation and requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-blue-900">End-to-End Support</h4>
                  <p className="text-gray-600">From initial consultation to visa approval, we're with you at every step.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold py-3 px-8 rounded-md transition-all duration-300 mt-4">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};