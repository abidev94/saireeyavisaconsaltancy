import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What documents are required for a work permit application?',
    answer: 'Document requirements vary by country, but typically include a valid passport, job offer letter, educational credentials, professional experience certificates, and passport-sized photographs. Our consultants will provide you with a complete checklist based on your specific destination country.'
  },
  {
    question: 'How long does the visa application process take?',
    answer: 'Processing times vary depending on the type of visa and destination country. Tourist visas may take 2-4 weeks, while work permits and student visas can take 1-3 months. We work to expedite the process wherever possible and keep you updated on timelines throughout your application.'
  },
  {
    question: 'Do you offer visa rejection case analysis?',
    answer: 'Yes, we provide comprehensive analysis of rejected visa applications. Our experts identify the reasons for rejection and develop strategies to address these issues in reapplications. We have a high success rate with previously rejected cases.'
  },
  {
    question: 'What is your success rate for visa approvals?',
    answer: 'We maintain a 98% success rate across all visa categories. This is achieved through our thorough understanding of immigration requirements, attention to detail in application preparation, and personalized approach for each client.'
  },
  {
    question: 'Do you provide support after visa approval?',
    answer: 'Absolutely! Our services extend beyond visa approval. We offer pre-departure briefings, accommodation guidance, local transportation information, and continued support for any post-arrival documentation or extensions needed during your stay abroad.'
  },
  {
    question: 'What fees do you charge for your consultancy services?',
    answer: 'Our fee structure varies based on the type of visa and complexity of the case. We maintain transparent pricing with no hidden charges. During your initial consultation, we provide a detailed breakdown of all costs involved, including our service fees and government application charges.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-medium">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about visa applications and our services.
            Can't find what you're looking for? Contact us directly for personalized assistance.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-lg transition-all duration-300 ${
                openIndex === index ? 'bg-white shadow-md border-blue-200' : 'bg-white border-gray-200 hover:border-blue-200'
              }`}
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-blue-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-900 flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-900 flex-shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 bg-blue-50 p-8 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our team of experts is ready to answer any specific questions you may have about your visa application.
          </p>
          <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};