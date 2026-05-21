export interface Testimonial {
  id: string;
  name: string;
  role: string;
  videoUrl: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Appointment {
  date: string;
  time: string;
  name: string;
  email: string;
  website: string;
  businessType: string;
  notes?: string;
}

export type ActiveSection = 'home' | 'about' | 'work' | 'terms' | 'privacy' | 'refunds';
