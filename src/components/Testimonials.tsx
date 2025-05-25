import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Work Permit Applicant',
    country: 'Canada',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars: 5,
    content: 'SAI Reya Consultancy made my work permit application process incredibly smooth. They handled all the paperwork expertly and kept me informed throughout the process. I got my permit approved within 3 months!'
  },
  {
    name: 'Maria Garcia',
    role: 'Student Visa Applicant',
    country: 'United Kingdom',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars: 5,
    content: 'As an international student, I was nervous about the visa application process. The team at SAI Reya guided me with patience and expertise. Their assistance with university applications and visa documentation was invaluable.'
  },
  {
    name: 'Rajiv Patel',
    role: 'Tourist Visa Applicant',
    country: 'Australia',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars: 4,
    content: 'I had a tight timeline for my vacation, and SAI Reya Consultancy expedited my tourist visa process. Their attention to detail and proactive communication helped me get my visa on time. Highly recommend their services!'
  },
  {
    name: 'Sarah Chen',
    role: 'Family Visit Visa',
    country: 'United States',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars: 5,
    content: 'I needed to visit my sister in the US for a family emergency. SAI Reya understood the urgency and prioritized my application. Their team worked diligently to ensure all my documents were perfect. Forever grateful for their support.'
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-blue-100">
            Discover how we've helped hundreds of clients achieve their immigration goals and dreams.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg p-8 text-gray-800 shadow-xl">
                    <div className="flex items-center mb-6">
                      <div className="flex-shrink-0 mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-blue-900">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <div className="flex items-center mt-1">
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                            {testimonial.country}
                          </span>
                        </div>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.stars ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="italic text-gray-600">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-blue-900 rounded-full p-2 shadow-lg hover:bg-blue-50 transition-colors focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-blue-900 rounded-full p-2 shadow-lg hover:bg-blue-50 transition-colors focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full mx-1 transition-colors ${
                index === activeIndex ? 'bg-amber-500' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold py-3 px-8 rounded-md transition-all duration-300">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};