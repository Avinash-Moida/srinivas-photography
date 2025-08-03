import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import SecondCTA from './components/SecondCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-warm-white">
      <Header />
      <Hero />
      <Intro />
      <Problems />
      <Solution />
      <Benefits />
      <Gallery />
      <Testimonials />
      <SecondCTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;