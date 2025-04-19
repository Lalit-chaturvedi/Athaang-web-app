import React from 'react';
import { navLinks } from '../data/navLinks';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-2xl mb-4">Sampada Deshpande</h3>
            <p className="text-primary-100 mb-6 max-w-xs">
              Providing compassionate therapy and guidance for mental wellbeing in a supportive, calm environment.
            </p>
            <p className="text-primary-200 text-sm">
              Licensed in the state of Massachusetts
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-100 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-4">Office Hours</h4>
            <ul className="space-y-2 text-primary-100">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            
            <div className="mt-6">
              <p className="text-primary-200 text-sm mb-2">Connect with me</p>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-100 hover:text-white transition-colors duration-200">
                  LinkedIn
                </a>
                <a href="#" className="text-primary-100 hover:text-white transition-colors duration-200">
                  Psychology Today
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-200">
            <p>© {new Date().getFullYear()} Athaang Therapy. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center">
              Made with <Heart size={14} className="mx-1 text-accent-300" /> for mindful wellbeing
            </p>
            <div className="mt-2 md:mt-0 flex space-x-4">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;