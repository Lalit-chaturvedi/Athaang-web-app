import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 bg-secondary-50"
      style={{
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/sketchy-halftone.png)',
        backgroundSize: '300px',
      }}
    >
      <div className="absolute inset-0 bg-secondary-50/90"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${isInView ? 'animate-slide-right' : 'opacity-0'}`}>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQELlkixvYBrcw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706805477094?e=1750291200&v=beta&t=gqWdjYHJ42PdwnDvedgBVSastG2kY8a1ilLAnHWAlAk"
              alt="Therapist in a calm setting"
              className="rounded-lg shadow-lg max-h-[500px] object-cover w-full"
            />
          </div>
          
          <div className={`${isInView ? 'animate-slide-left' : 'opacity-0'}`}>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-900 mb-6">Meet Sampada Deshpande</h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                As a licensed psychotherapist with over 15 years of experience, I believe that therapy is a collaborative journey toward understanding, healing, and growth.
              </p>
              
              <p>
                My approach integrates evidence-based techniques with a deeply humanistic perspective, honoring each client's unique experiences and strengths. I specialize in helping individuals navigate anxiety, trauma, relationships, and life transitions.
              </p>
              
              <p>
                I hold a Master's degree in Clinical Psychology from Columbia University and have advanced training in Cognitive Behavioral Therapy, Psychodynamic Therapy, and Mindfulness-Based Stress Reduction.
              </p>
              
              <p>
                My practice is guided by the belief that each person holds the wisdom they need within themselves. My role is to provide the tools, insights, and supportive space that allows that wisdom to emerge.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col space-y-2">
              <div className="flex items-center">
                <span className="w-8 h-[1px] bg-primary-300 mr-3"></span>
                <p className="font-serif text-lg text-primary-700">Compassionate Care</p>
              </div>
              <div className="flex items-center">
                <span className="w-8 h-[1px] bg-primary-300 mr-3"></span>
                <p className="font-serif text-lg text-primary-700">Evidence-Based Approach</p>
              </div>
              <div className="flex items-center">
                <span className="w-8 h-[1px] bg-primary-300 mr-3"></span>
                <p className="font-serif text-lg text-primary-700">Holistic Wellbeing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider divider-leaves"></div>
    </section>
  );
};

export default AboutSection;