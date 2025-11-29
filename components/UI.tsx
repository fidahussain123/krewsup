import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300 relative overflow-hidden group border border-white";
  
  const variants = {
    primary: "bg-white text-black hover:bg-black hover:text-white",
    secondary: "bg-transparent text-white hover:bg-white hover:text-black",
    outline: "border border-white/20 text-white hover:border-white hover:bg-white/10"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = false }) => (
  <div className={`mb-16 max-w-4xl ${centered ? 'mx-auto text-center' : ''}`}>
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-4 block"
      >
        {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="text-5xl md:text-6xl font-display font-bold leading-tight text-white"
    >
      {title}
    </motion.h2>
  </div>
);

export const FeatureCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  delay?: number 
}> = ({ title, description, icon: Icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
    className="bg-brand-darkgray border border-white/10 p-8 hover:bg-white/5 hover:border-white/30 transition-all duration-500 group cursor-pointer"
  >
    <div className="mb-6 w-14 h-14 bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300 text-white">
      <Icon size={24} />
    </div>
    <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
  </motion.div>
);