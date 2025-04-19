import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { resources } from '../data/resources';
import Button from './Button';
import { BookOpen, FileText, BookMarked } from 'lucide-react';

const ResourcesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  const getIcon = (index: number) => {
    const iconProps = { size: 24, className: 'text-primary-600' };
    
    switch (index) {
      case 0: return <BookOpen {...iconProps} />;
      case 1: return <BookMarked {...iconProps} />;
      case 2: return <FileText {...iconProps} />;
      default: return <BookOpen {...iconProps} />;
    }
  };

  return (
    <section 
      id="resources" 
      ref={sectionRef}
      className="relative py-24 bg-secondary-50"
      style={{
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/rice-paper-2.png)',
        backgroundSize: '300px',
      }}
    >
      <div className="absolute inset-0 bg-secondary-50/90"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-900 mb-4">
            Helpful Resources
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Guidance and tools to support your wellbeing journey between sessions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div 
              key={resource.title}
              className={`bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-secondary-100 shadow-sm transition-all duration-300 hover:shadow-md ${
                isInView ? 'animate-slide-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {getIcon(index)}
              </div>
              
              <h3 className="font-serif text-xl text-primary-800 mb-3">
                {resource.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {resource.description}
              </p>
              
              <Button href={resource.link} variant="outline" size="sm">
                {resource.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            For more resources and regular insights on mental wellbeing, 
            join our thoughtful community through the monthly newsletter.
          </p>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2.5 border border-secondary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;