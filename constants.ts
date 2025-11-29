import { CheckCircle, Zap, Shield, Users, Mic2, Truck, Ticket, Briefcase, Music, Coffee, Settings } from 'lucide-react';
import { FeatureItem, StepItem, RoleItem, ShowcaseItem } from './types';

export const FEATURES: FeatureItem[] = [
  {
    id: 1,
    title: "Verified Crew",
    description: "Every profile vetted. Real ratings. No no-shows.",
    icon: CheckCircle,
  },
  {
    id: 2,
    title: "Fast Hiring",
    description: "AI-matching fills your roster in minutes, not days.",
    icon: Zap,
  },
  {
    id: 3,
    title: "Auto Payments",
    description: "Contracts and payouts handled automatically.",
    icon: Shield,
  },
  {
    id: 4,
    title: "On-Site Tools",
    description: "GPS check-ins and live communication.",
    icon: Settings,
  }
];

export const STEPS: StepItem[] = [
  { id: 1, number: "01", title: "Post Event", description: "Set your budget, roles, and dates." },
  { id: 2, number: "02", title: "Crew Applies", description: "Verified pros accept your offer instantly." },
  { id: 3, number: "03", title: "Mobilize", description: "Select your team and sync details." },
  { id: 4, number: "04", title: "Execute", description: "Monitor check-ins and approve hours." },
];

export const ROLES: RoleItem[] = [
  { id: 1, title: "Setup Crew", icon: Settings },
  { id: 2, title: "Hospitality", icon: Coffee },
  { id: 3, title: "Technician", icon: Zap },
  { id: 4, title: "Promo Staff", icon: Ticket },
  { id: 5, title: "Logistics", icon: Truck },
  { id: 6, title: "Security", icon: Shield },
];

export const SHOWCASE: ShowcaseItem[] = [
  { id: 1, title: "Neon Nights Festival", date: "Oct 2024", location: "Los Angeles", image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&q=80&w=1000" },
  { id: 2, title: "Tech Summit Global", date: "Sep 2024", location: "San Francisco", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000" },
  { id: 3, title: "Fashion Week Gala", date: "Aug 2024", location: "New York", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=1000" },
  { id: 4, title: "E-Sports Final", date: "July 2024", location: "Seoul", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000" },
];