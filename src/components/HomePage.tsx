import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Features } from './Features';
import { CTA } from './CTA';
import { Footer } from './Footer';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;