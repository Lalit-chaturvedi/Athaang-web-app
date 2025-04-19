import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import Button from './Button';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-24 bg-white"
      style={{
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/handmade-paper.png)',
        backgroundSize: '200px',
      }}
    >
      <div className="absolute inset-0 bg-white/90"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={isInView ? 'animate-slide-right' : 'opacity-0'}>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-900 mb-4">
              Begin Your Journey
            </h2>
            <p className="text-gray-700 mb-8">
              I welcome your inquiries and look forward to understanding how I might support your wellbeing journey.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-primary-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-primary-800">Office Location</h3>
                  <address className="text-gray-600 not-italic">
                    123 Serenity Avenue, Suite 205<br />
                    Cambridge, MA 02138
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-primary-600">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-primary-800">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday to Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-primary-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-primary-800">Telephone</h3>
                  <p className="text-gray-600">(617) 555-0123</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-primary-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-primary-800">Email</h3>
                  <p className="text-gray-600">contact@eleanorgracetherapy.com</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-700 italic">
                "The journey of a thousand miles begins with a single step."
              </p>
            </div>
          </div>
          
          <div className={isInView ? 'animate-slide-left' : 'opacity-0'}>
            <div className="bg-secondary-50/90 backdrop-blur-sm p-8 rounded-lg border border-secondary-100">
              <h3 className="font-serif text-2xl text-primary-900 mb-6">
                Request a Consultation
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Brief Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Request Appointment
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500">
                  Your privacy is important. All information shared is confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;