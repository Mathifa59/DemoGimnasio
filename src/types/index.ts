export interface Feature {
  icon: string;
  title: string;
  description: string;
  stat: string;
}

export interface Program {
  name: string;
  description: string;
  image: string;
  ctaText: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  currency: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface Testimonial {
  name: string;
  text: string;
  result: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PainPoint {
  problem: string;
  solution: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
