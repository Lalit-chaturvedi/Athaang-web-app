import React from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ResourcesSection from './components/ResourcesSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ResourcesSection />
      <ContactSection />
    </Layout>
  );
}

export default App;