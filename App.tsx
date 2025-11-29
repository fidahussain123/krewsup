import React, { Suspense } from 'react';
import { Scene } from './components/3D/Scene';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features'; // The Rotating Phone Section
import { Story } from './sections/Story';       // How It Works Timeline
import { Offerings } from './sections/Offerings'; // Roles
import { Trust } from './sections/Trust';       // Showcase
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

// Fallback for 3D loading
const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black z-50 pointer-events-none">
    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="relative bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navbar />
      
      {/* 3D Scene Layer - Fixed Background */}
      <Suspense fallback={<Loader />}>
        <Scene />
      </Suspense>

      {/* Content Layer - Scrolls over the 3D scene */}
      <main className="relative z-10 w-full">
        {/* 0vh - 100vh */}
        <Hero />
        
        {/* 100vh - 500vh (Tall container for Phone Rotation) */}
        <Features />
        
        {/* 500vh - 900vh (Tall container for Steps) */}
        <Story />
        
        {/* Normal Flow */}
        <Offerings />
        <Trust />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;