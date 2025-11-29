import React from 'react';
import { ROLES } from '../constants';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/UI';

export const Offerings: React.FC = () => {
  return (
    <section className="py-32 relative z-10 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <SectionTitle title="Assemble your team." subtitle="Crew Roles" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {ROLES.map((role, index) => (
            <motion.div 
              key={role.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square flex flex-col items-center justify-center bg-zinc-900 hover:bg-white hover:text-black transition-all duration-500 group cursor-pointer border border-black"
            >
              <div className="mb-4 text-white group-hover:text-black transition-colors">
                  <role.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-center">{role.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};