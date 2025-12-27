import { LucideIcon } from 'lucide-react';

export interface GridItem {
  id: string;
  title: string;
  icon: LucideIcon;
  path: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
}

export interface NewsItem {
  id: number;
  title: string;
  tag: string;
  content: string;
  isAlert?: boolean;
}

// KYC Types
export interface KYCOption {
  key: string;
  text: string;
  score: number;
}

export interface KYCQuestion {
  id: number;
  dimensionTag: string;
  questionText: string;
  options: KYCOption[];
}

export type PersonaType = 'Single' | 'Double' | 'Fused' | 'Detached';

export interface PersonaResult {
  type: PersonaType;
  title: string;
  definition: string;
  triggers: string[];
  recommendedTrack: {
    level: string;
    title: string;
    goal: string;
  };
  cta: string;
}

// Mirage Types
export interface TripoAnalysis {
  T: string;
  R: string;
  I: string;
  P: string;
  O: string;
}

export interface CtaRoutes {
  scan: { label_zh: string; route: string };
  train: { label_zh: string; route: string };
}

export interface MirageCardData {
  id: string;
  title: string;
  source_name: string;
  published_date: string;
  scam_type: string;
  summary_zh: string;
  top_signals: string[];
  wittgenstein_hint_zh: string;
  tripo: TripoAnalysis;
  recommended_actions: string[];
  cta: CtaRoutes;
  source_url: string;
}

export interface MirageModuleData {
  module: string;
  version: string;
  cards: MirageCardData[];
  slogans: string[];
}