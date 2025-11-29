import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/UI';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-start overflow-hidden pt-20 z-10 pointer-events-none">
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 pointer-events-auto">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="inline-block px-3 py-1 mb-6 border border-white/30 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-white text-xs font-bold tracking-widest uppercase">The Event Network</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8 text-white">
            Where Events <br />
            <span className="text-white">
              Come Alive.
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-10 max-w-md leading-relaxed">
            KrewsUp connects organizers with trained, verified crew — fast and professionally. Hire or work at events, all in one platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button className="w-full sm:w-auto">
              Post an Event
            </Button>
            <Button variant="secondary" className="flex items-center justify-center gap-2 w-full sm:w-auto">
              Join the Crew <ArrowRight size={16} />
            </Button>
          </div>
        </motion.div>
        
        {/* Right side is reserved for the 3D phone entry */}
        <div className="hidden md:block"></div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500">Scroll to Explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};