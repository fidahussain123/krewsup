import React from 'react';
import { SHOWCASE } from '../constants';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/UI';

export const Trust: React.FC = () => {
  return (
    <section className="py-24 border-y border-white/10 z-10 relative bg-black">
      <div className="container mx-auto px-6">
        <SectionTitle title="Recent Gigs." subtitle="Events Showcase" />
        
        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto space-x-6 pb-8 no-scrollbar">
          {SHOWCASE.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="min-w-[300px] md:min-w-[400px] bg-brand-darkgray border border-white/10 flex flex-col"
            >
              <div className="h-48 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.date}</span>
                    <span className="text-xs font-bold text-white uppercase tracking-widest border border-white/20 px-2 py-1">{item.location}</span>
                </div>
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};