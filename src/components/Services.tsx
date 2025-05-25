import React from 'react';
import { Briefcase, Plane, Users, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="h-8 w-8 text-amber-500" />,
    title: 'Work Permit',
    description: 'Get assistance with work permits for various countries. Our experts handle the complete application process.',
    features: ['Document verification', 'Application preparation', 'Interview coaching', 'Follow-up assistance'],
  },
  {
    icon: <Plane className="h-8 w-8 text-amber-500" />,
    title: 'Tourist Visa',
    description: 'Plan your vacation with our hassle-free tourist visa services. We ensure a smooth application process.',
    features: ['Travel itinerary planning', 'Documentation support', 'Visa application filing', 'Quick processing'],
  },
  {
    icon: <Users className="h-8 w-8 text-amber-500" />,
    title: 'Visit Visa',
    description: 'Connecting families and friends. Our visit visa services make reunions possible across borders.',
    features: ['Sponsor documentation', 'Relationship proof assistance', 'Application submission', 'Status tracking'],
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-amber-500" />,
    title: 'Student Visa',
    description: 'Pursue your educational dreams abroad with our specialized student visa consultancy services.',
    features: ['University application support', 'Financial documentation', 'SOP & LOR guidance', 'Pre-departure orientation'],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-4">
            Comprehensive Visa & Immigration Solutions
          </h2>
          <p className="text-gray-600">
            We offer end-to-end consultation services to make your immigration journey smooth and successful.
            Our team of experts specializes in various visa categories to meet your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 text-blue-900 font-medium flex items-center hover:text-amber-500 transition-colors">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300">
            Get Expert Consultation
          </button>
        </div>
      </div>
    </section>
  );
};