import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { services } from '../data/services';
import { User, Users, Leaf, Heart, Compass, Flower } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const getIcon = (iconName: string) => {
    const iconProps = { size: 24, className: 'text-primary-600' };
    
    switch (iconName) {
      case 'User': return <User {...iconProps} />;
      case 'Users': return <Users {...iconProps} />;
      case 'Leaf': return <Leaf {...iconProps} />;
      case 'Heart': return <Heart {...iconProps} />;
      case 'Compass': return <Compass {...iconProps} />;
      case 'Flower': return <Flower {...iconProps} />;
      default: return <User {...iconProps} />;
    }
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-24 bg-white"
      style={{
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/paper-fibers.png)',
        backgroundSize: '200px',
      }}
    >
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-900 mb-4">
            Therapeutic Services
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Personalized approaches to support your mental health journey, tailored to your unique needs and goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`bg-secondary-50/90 backdrop-blur-sm p-6 rounded-lg border border-secondary-100 transition-all duration-300 hover:shadow-md ${
                isInView ? 'animate-slide-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-white inline-block rounded-full shadow-sm">
                {getIcon(service.icon)}
              </div>
              
              <h3 className="font-serif text-xl text-primary-800 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider divider-dots"></div>
    </section>
  );
};

export default ServicesSection;