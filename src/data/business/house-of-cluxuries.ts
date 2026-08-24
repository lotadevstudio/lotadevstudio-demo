import type { Business, ProductItem } from "@/types/business";

export const houseOfCluxuriesProducts: ProductItem[] = [
  {
    id: "the-emerald-edit-box",
    name: "The Emerald Edit Gift Box",
    category: "Signature Collection",
    price: 185000,
    formattedPrice: "₦185,000",
    src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop",
    inStock: true,
    description:
      "House fragrance, hand-poured candle, fine chocolates, and silk wrap in a lacquered emerald case.",
  },
  {
    id: "house-scents-trio-set",
    name: "House Scents Trio Discovery Set",
    category: "Fragrance",
    price: 95000,
    formattedPrice: "₦95,000",
    src: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop",
    inStock: true,
    description:
      "Layered extraction perfumes presented on custom marble display pedestals.",
  },
  {
    id: "luxe-emerald-hamper",
    name: "Luxe Emerald Hamper",
    category: "Hampers",
    price: 240000,
    formattedPrice: "₦240,000",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    inStock: true,
    description:
      "Curated assortment of fine chocolates, silk wraps, and custom aromatherapy candles.",
  },
];

const business: Business = {
  slug: "house-of-cluxuries",
  name: "House of Cluxuries",
  legalName: "House of Cluxuries Ltd.",
  industry: "Luxury Gifting & Lifestyle",
  tagline: "Gifting, elevated",
  description:
    "House of Cluxuries curates luxury gift experiences — bespoke hampers, corporate gifting and signature fragrance sets.",
  theme: {
    primary: "#0F3D2E",
    secondary: "#12261F",
    accent: "#C6A15B",
    background: "#FAF7F1",
    surface: "#F1EADD",
    text: "#14201B",
    muted: "#6B7A72",
    border: "#DCD1BC",
    displayFont: '"Cormorant Garamond", Georgia, serif',
    bodyFont: '"Jost", system-ui, sans-serif',
    radius: "4px",
  },
  navigation: [
    { label: "The House", target: "about" },
    { label: "Collections", target: "services" },
    { label: "Showcase", target: "showcase" },
    { label: "Contact", target: "contact" },
  ],
  hero: {
    eyebrow: "Luxury gifting house",
    headline: "The art of",
    highlight: "unforgettable gifting",
    subheadline:
      "Bespoke hampers, curated fragrance and corporate gifting — composed by hand, delivered beautifully.",
    primaryCta: "Request a quotation",
    secondaryCta: "Explore collections",
  },
  about: {
    eyebrow: "The house",
    title: "Every gift is composed, never assembled",
    paragraphs: [
      "House of Cluxuries began with a simple conviction: a gift should feel like it was chosen by someone who truly knows the recipient.",
      "We source, compose and finish each box in-house — from the ribbon tension to the handwritten card — so that the moment of opening is the product.",
    ],
    signature: "Chidinma L., Founder & Curator",
    pillars: [
      "Bespoke composition",
      "Corporate programmes",
      "Same-city delivery",
      "Signature fragrance",
    ],
  },
  services: [
    {
      id: "bespoke",
      title: "Bespoke Hampers",
      description:
        "Built around a person, a palette or an occasion. No two boxes repeat.",
      icon: "Sparkles",
    },
    {
      id: "corporate",
      title: "Corporate Gifting",
      description:
        "Branded programmes at scale, with fulfilment, tracking and delivery handled.",
      icon: "Hammer",
    },
    {
      id: "fragrance",
      title: "Signature Fragrance",
      description: "Our house scents, layered as sets or paired within a gift.",
      icon: "PenTool",
    },
    {
      id: "concierge",
      title: "Gifting Concierge",
      description:
        "A dedicated curator on call for birthdays, weddings and executive gifting calendars.",
      icon: "Armchair",
    },
  ],
  showcase: [
    {
      id: "the-emerald-edit",
      title: "The Emerald Edit",
      category: "Signature Collection",
      src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop",
      alt: "Luxury wrapped gift box with ribbon",
      caption:
        "Our house collection in emerald and antique gold, built for milestone moments.",
      description: [
        "The Emerald Edit pairs our house fragrance with hand-poured candles, fine chocolate and a keepsake in a lacquered emerald case.",
        "Every element is finished with gold foil and a handwritten note from the curator on duty.",
      ],
      servicesUsed: [
        "Curation",
        "Custom Packaging",
        "Handwritten Notes",
        "White-Glove Delivery",
      ],
      timeline: [
        {
          id: "t1",
          label: "Day 1",
          detail: "Brief, budget and recipient profile",
        },
        {
          id: "t2",
          label: "Day 2–3",
          detail: "Curation proposal and mock-up",
        },
        {
          id: "t3",
          label: "Day 4–5",
          detail: "Composition and finishing",
        },
        {
          id: "t4",
          label: "Day 6",
          detail: "White-glove delivery",
        },
      ],
      location: "Victoria Island, Lagos",
      year: "2025",
      span: "wide",
    },
    {
      id: "executive-programme",
      title: "Executive Gifting Programme",
      category: "Corporate",
      src: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1000&auto=format&fit=crop",
      alt: "Corporate executive luxury gift arrangement",
      caption:
        "A 400-box end-of-year programme for a financial services client.",
      description: [
        "We designed a three-tier programme mapped to client seniority, with a shared visual language across all tiers.",
        "Fulfilment, address collection and delivery tracking were handled entirely by the house.",
      ],
      servicesUsed: [
        "Programme Design",
        "Custom Branding",
        "Fulfilment",
        "Logistics",
      ],
      timeline: [
        { id: "t1", label: "Week 1", detail: "Tier design and sampling" },
        { id: "t2", label: "Week 2–3", detail: "Production and branding" },
        { id: "t3", label: "Week 4", detail: "Nationwide dispatch" },
      ],
      location: "Lagos & Abuja",
      year: "2024",
      span: "normal",
    },
    {
      id: "fragrance-trio",
      title: "House Scents Trio",
      category: "Fragrance",
      src: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop",
      alt: "Luxury perfume bottles on display",
      caption: "Layered extraction scents presented on custom marble displays.",
      servicesUsed: ["Signature Fragrance", "Custom Packaging"],
      location: "Victoria Island, Lagos",
      year: "2025",
      span: "normal",
    },
    {
      id: "emerald-hamper-flatlay",
      title: "Luxe Emerald Box",
      category: "Hampers",
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
      alt: "Flat lay view of open luxury hamper",
      caption:
        "Curated combination of fine chocolates, silk wraps, and custom candles.",
      servicesUsed: ["Bespoke Curation", "Handwritten Notes"],
      location: "Ikoyi, Lagos",
      year: "2025",
      span: "wide",
    },
    {
      id: "marble-pedestal-set",
      title: "Marble & Gold Pedestal",
      category: "Sets",
      src: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1600&auto=format&fit=crop",
      alt: "Luxury candle and essential oil set",
      caption:
        "Minimalist luxury sets arranged with solid brass and marble keepsakes.",
      servicesUsed: ["Curated Sourcing", "Presentation Design"],
      location: "Lagos",
      year: "2024",
      span: "full",
    },
  ],
  showcaseCategories: [
    "Signature Collection",
    "Corporate",
    "Hampers",
    "Fragrance",
    "Sets",
  ],
  testimonials: [
    {
      id: "t1",
      quote:
        "Our clients still talk about the boxes. It made our year-end look effortless.",
      author: "Adaeze M.",
      role: "Head of Brand, Financial Services",
    },
    {
      id: "t2",
      quote:
        "I described her in three sentences and they built the perfect gift from it.",
      author: "Segun A.",
      role: "Private client",
    },
  ],
  statistics: [
    { id: "s1", value: "6,400+", label: "Gifts composed" },
    { id: "s2", value: "48h", label: "Standard turnaround" },
    { id: "s3", value: "80+", label: "Corporate partners" },
    { id: "s4", value: "5.0", label: "Average rating" },
  ],
  faqs: [
    {
      id: "f1",
      question: "What is the minimum order for corporate gifting?",
      answer: "Programmes start at 25 boxes, with tiered pricing above 100.",
    },
    {
      id: "f2",
      question: "Can we add our company branding?",
      answer:
        "Yes — foiled logos, custom sleeves and printed notecards are all available.",
    },
    {
      id: "f3",
      question: "How quickly can you deliver?",
      answer:
        "Same-city delivery within 48 hours for in-stock collections; bespoke boxes take 4–6 days.",
    },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { label: "Mail", href: "mailto:hello@houseofcluxuries.com", icon: "Mail" },
  ],
  contact: {
    phone: "+234 800 000 0002",
    whatsapp: "2348000000002",
    email: "hello@houseofcluxuries.com",
    addressLines: ["7 Adeola Odeku Street", "Victoria Island, Lagos"],
    mapQuery: "Adeola Odeku Street, Victoria Island, Lagos",
    hours: "Mon–Sat, 10am – 7pm",
  },
  whatsappMessages: {
    general:
      "Hello House of Cluxuries, I found your website and I'd like to learn more.",
    quotation:
      "Hello House of Cluxuries, I'd like a quotation for a gifting order.",
    consultation:
      "Hello House of Cluxuries, I'd like to book a gifting consultation.",
    project: "Hello House of Cluxuries, I'd like to discuss this collection.",
  },
  sections: {
    showAbout: true,
    showServices: true,
    showShowcase: true,
    showTestimonials: true,
    showStatistics: true,
    showFaq: true,
    showContact: true,
    showMap: true,
  },
  products: houseOfCluxuriesProducts,
};

export default business;
