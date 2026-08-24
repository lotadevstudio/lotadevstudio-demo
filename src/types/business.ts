export type IconName =
  | "PenTool"
  | "Hammer"
  | "Armchair"
  | "Sparkles"
  | "Instagram"
  | "Bookmark"
  | "Phone"
  | "Mail"
  | "MapPin";

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
  displayFont: string;
  bodyFont: string;
  radius: string;
}

export interface NavItem {
  label: string;
  target: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

/* ==========================================================================
   UNIFIED SHOWCASE (Replaces ProjectItem + GalleryItem redundancy)
   ========================================================================== */
export interface WorkTimelineStep {
  id: string;
  label: string;
  detail: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  src: string; // Cover image or hero visual
  alt: string;
  caption?: string; // Quick summary / client hook
  description?: string[]; // Optional deep-dive paragraphs
  servicesUsed?: string[]; // Optional tags linking back to Services
  timeline?: WorkTimelineStep[]; // Optional delivery milestones
  location?: string;
  year?: string;
  span?: "normal" | "wide" | "tall" | "full"; // Bento grid control
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  addressLines: string[];
  mapQuery: string;
  hours: string;
}

export interface WhatsAppTemplates {
  general: string;
  quotation: string;
  consultation: string;
  project?: string;
}

export interface SectionToggles {
  showAbout: boolean;
  showServices: boolean;
  showShowcase: boolean; // Cleaned from showProjects + showGallery
  showTestimonials: boolean;
  showStatistics: boolean;
  showFaq: boolean;
  showContact: boolean;
  showMap: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: number; // Raw integer in NGN (e.g., 170000)
  formattedPrice: string; // "₦170,000"
  src: string;
  inStock: boolean;
  description: string;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

export interface Business {
  slug: string;
  name: string;
  legalName: string;
  industry: string;
  tagline: string;
  description: string;
  theme: ThemeConfig;
  navigation: NavItem[];
  hero: {
    eyebrow: string;
    headline: string;
    highlight: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    signature: string;
    pillars: string[];
  };
  services: ServiceItem[];
  showcase: ShowcaseItem[]; 
  showcaseCategories: string[];
  testimonials: TestimonialItem[];
  statistics: StatItem[];
  faqs: FaqItem[];
  socials: SocialLink[];
  contact: ContactInfo;
  whatsappMessages: WhatsAppTemplates;
  sections: SectionToggles;
  products?: ProductItem[];
}

export type BusinessRegistry = Record<string, Business>;
