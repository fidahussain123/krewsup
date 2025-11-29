import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
    return (
        <div className="relative w-full z-10 bg-transparent">
             {FEATURES.map((feature, i) => (
                 <div key={feature.id} className="h-screen w-full flex items-center justify-center relative pointer-events-none">
                     <div className={`container mx-auto px-6 flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <motion.div 
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: "-30% 0px -30% 0px" }}
                            transition={{ duration: 0.8 }}
                            className="max-w-md bg-black/50 backdrop-blur-md p-8 border border-white/10 rounded-sm"
                        >
                            <h3 className="text-4xl font-display font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>
                        </motion.div>
                     </div>
                 </div>
             ))}
        </div>
    )
};
