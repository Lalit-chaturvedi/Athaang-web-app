import React, { useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="relative py-24 bg-accent-50 overflow-hidden"
      style={{
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/notebook-dark.png)',
        backgroundSize: '300px',
      }}
    >
      <div className="absolute inset-0 bg-accent-50/90"></div>
      <div className="absolute top-12 left-12 w-40 h-40 rounded-full border border-accent-100 opacity-60"></div>
      <div className="absolute bottom-12 right-12 w-64 h-64 rounded-full border border-accent-100 opacity-60"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-primary-900 mb-4">
            Client Experiences
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Reflections from individuals who have embarked on their therapeutic journey.
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-sm p-8 md:p-12 relative ${
          isInView ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="absolute top-8 left-8 text-accent-300">
            <Quote size={48} />
          </div>
          
          <div className="pt-8 pl-8">
            <p className="text-gray-700 text-lg md:text-xl italic leading-relaxed mb-6">
              {testimonials[activeIndex].quote}
            </p>
            
            <div className="flex flex-col">
              <span className="font-serif text-primary-800 font-medium text-lg">
                {testimonials[activeIndex].author}
              </span>
              {testimonials[activeIndex].title && (
                <span className="text-gray-500 text-sm">
                  {testimonials[activeIndex].title}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 text-primary-600 hover:text-primary-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex items-center px-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-primary-600 w-4' : 'bg-primary-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 text-primary-600 hover:text-primary-800 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className="section-divider divider-lines"></div>
    </section>
  );
};

export default TestimonialsSection;