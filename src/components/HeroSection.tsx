import React from 'react';
import Button from './Button';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 pb-16"
      style={{
        backgroundImage: `
          url(https://www.transparenttextures.com/patterns/handmade-paper.png),
          url(https://images.pexels.com/photos/1213053/pexels-photo-1213053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)
        `,
        backgroundSize: '200px, cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-white/50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl lg:ml-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-900 leading-tight mb-6">
            Find your path to <br />
            <span className="text-primary-700">clarity and peace</span>
          </h1>

          <div className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            <Typewriter
    words={[
      "Compassionate therapy in a serene environment, helping you navigate life's challenges with renewed strength and perspective."
    ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={30}
              delaySpeed={3000}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href="#contact" variant="primary" size="lg">
              Schedule a Consultation
            </Button>
            <Button href="#about" variant="outline" size="lg">
              Learn About My Approach
            </Button>
          </div>
        </div>
      </div>
      <div className="section-divider divider-wave"></div>
    </section>
  );
};

export default HeroSection;
