import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './UI';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter text-white">KrewsUp</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-white/70 transition-colors">Find Crew</a>
          <a href="#" className="text-sm font-medium hover:text-white/70 transition-colors">Find Work</a>
          <a href="#" className="text-sm font-medium hover:text-white/70 transition-colors">About</a>
          <Button variant="outline" className="py-2 px-6">Login</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-black border-b border-white/10 p-6 flex flex-col space-y-4">
           <a href="#" className="text-lg font-medium">Find Crew</a>
           <a href="#" className="text-lg font-medium">Find Work</a>
           <a href="#" className="text-lg font-medium">About</a>
           <Button variant="outline" className="w-full">Login</Button>
        </div>
      )}
    </nav>
  );
};