// src\types\layout.ts
import { ReactNode } from 'react';
import { NavigationIcon } from './icon';

export interface LayoutProps {
  children: ReactNode;
}

export interface NavLink {
  name: string;
  href: string;
  icon?: NavigationIcon;
}

export interface NavigationSection {
  title: string;
  links: NavLink[];
}

export interface FooterProps {
  className?: string;
}

export interface ScrollToTopProps {
  showBelow?: number;
  className?: string;
}

export type PageTransition = {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  exit: Record<string, unknown>;
  transition?: Record<string, unknown>;
};