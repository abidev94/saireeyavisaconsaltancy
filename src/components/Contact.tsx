import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-medium">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-2 mb-4">
            Get In Touch With Our Experts
          </h2>
          <p className="text-gray-600">
            Have questions about our services? Ready to start your visa application?
            Reach out to us for professional assistance tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 bg-blue-900 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-800 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Phone Number</p>
                  <p className="font-semibold">+94 (72) 875-6296</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-800 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Email Address</p>
                  <p className="font-semibold">saireeraaconsultancy@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-800 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Office Address</p>
                  <p className="font-semibold">820A 1/1 3rd Mile Post</p>
                  <p>Trincomalee</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-800 p-3 rounded-full mr-4">
                  <Clock className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-blue-200 text-sm">Business Hours</p>
                  <p className="font-semibold">Monday - Friday: 9AM - 6PM</p>
                  <p>Saturday: 10AM - 2PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-semibold mb-4">Follow Us</h4>
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
          </div>
          
          <div className="md:col-span-3 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+94 (72) 875-6296"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="service">
                    Service Interested In
                  </label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="work-permit">Work Permit</option>
                    <option value="tourist-visa">Tourist Visa</option>
                    <option value="visit-visa">Visit Visa</option>
                    <option value="student-visa">Student Visa</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please share details about your visa requirements..."
                  required
                ></textarea>
              </div>
              
              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" required />
                  <span className="ml-2 text-gray-700">
                    I agree to the <a href="#" className="text-blue-900 font-medium">Terms & Conditions</a> and <a href="#" className="text-blue-900 font-medium">Privacy Policy</a>
                  </span>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 flex items-center justify-center"
              >
                Send Message <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};