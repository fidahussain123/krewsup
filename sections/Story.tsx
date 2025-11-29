import React from 'react';
import { motion } from 'framer-motion';
import { STEPS } from '../constants';

export const Story: React.FC = () => {
  return (
    <div className="relative w-full z-10 bg-transparent py-20">
      {/* Introduction */}
      <div className="h-[50vh] flex items-center justify-center text-center">
         <div className="bg-black/80 p-8 rounded-lg backdrop-blur-md border border-white/10 max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400">Streamlined for speed and reliability.</p>
         </div>
      </div>

      {/* Steps - Each is 1 screen height to allow phone to travel */}
      <div className="relative">
          {STEPS.map((step, index) => (
            <div key={step.id} className="h-screen flex items-center justify-end container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-40% 0px -40% 0px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-md w-full pl-0 md:pl-10"
                >
                    <span className="text-6xl font-display font-bold text-white/20 block mb-4">{step.number}</span>
                    <h3 className="text-4xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-xl text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
            </div>
          ))}
      </div>
    </div>
  );
};