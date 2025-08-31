import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Expertise from './components/Expertise';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-900">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
      <Expertise />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
