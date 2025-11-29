import React from 'react';
import { Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/10 relative z-10 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
           <div>
             <h2 className="text-3xl font-bold mb-2 text-white">KrewsUp</h2>
             <p className="text-gray-500 max-w-sm">
               The on-demand staffing platform for the event industry.
             </p>
           </div>
           
           <div className="mt-8 md:mt-0 flex gap-6">
             <SocialIcon icon={Twitter} />
             <SocialIcon icon={Instagram} />
             <SocialIcon icon={Linkedin} />
           </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <FooterColumn title="Company" links={['About Us', 'Careers', 'Press', 'Contact']} />
          <FooterColumn title="For Organizers" links={['Post Event', 'Pricing', 'Success Stories', 'Enterprise']} />
          <FooterColumn title="For Crew" links={['Find Work', 'Crew Benefits', 'Safety', 'Community']} />
          <div className="col-span-1">
             <h4 className="text-white font-bold mb-4">Get the App</h4>
             <button className="bg-white text-black px-4 py-2 rounded text-sm font-bold w-full mb-2 hover:bg-gray-200 transition-colors">
               App Store
             </button>
             <button className="bg-transparent text-white border border-white/20 px-4 py-2 rounded text-sm font-bold w-full hover:bg-white/10 transition-colors">
               Play Store
             </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 text-xs">
          <p>&copy; 2024 KrewsUp Inc. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Los Angeles • New York • London • Sydney</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ElementType }> = ({ icon: Icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-white">
    <Icon size={18} />
  </a>
);

const FooterColumn: React.FC<{ title: string; links: string[] }> = ({ title, links }) => (
  <div>
    <h4 className="text-white font-bold mb-6">{title}</h4>
    <ul className="space-y-3">
      {links.map(link => (
        <li key={link}>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm flex items-center gap-1 group">
            {link}
            <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </li>
      ))}
    </ul>
  </div>
);