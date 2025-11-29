import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
  number: string;
}

export interface RoleItem {
  id: number;
  title: string;
  icon: LucideIcon;
}

export interface ShowcaseItem {
  id: number;
  title: string;
  date: string;
  location: string;
  image?: string;
}

export interface ScrollProps {
  scrollProgress: number; // 0 to 1
}