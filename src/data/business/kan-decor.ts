import type { Business } from "@/types/business";

const business: Business = {
  slug: "kan-decor",
  name: "Kan Decor",
  legalName: "Kan Decor Interiors Ltd.",
  industry: "Interior Design & Fit-Out",
  tagline: "Interiors with quiet confidence",
  description:
    "Kan Decor designs calm, contemporary interiors for homes and workspaces — full-service concept, sourcing and fit-out.",
  theme: {
    primary: "#8B5E3C",
    secondary: "#2E2A26",
    accent: "#C9A227",
    background: "#FBF8F4",
    surface: "#F2ECE4",
    text: "#231F1C",
    muted: "#7A716A",
    border: "#E3D9CC",
    displayFont: '"Fraunces", Georgia, serif',
    bodyFont: '"DM Sans", system-ui, sans-serif',
    radius: "18px",
  },
  navigation: [
    { label: "About", target: "about" },
    { label: "Services", target: "services" },
    { label: "Showcase", target: "showcase" },
    { label: "Contact", target: "contact" },
  ],
  hero: {
    eyebrow: "Interior design studio",
    headline: "Spaces that feel",
    highlight: "effortlessly yours",
    subheadline:
      "We design and deliver warm, contemporary interiors — from first concept sketch to the final styled shelf.",
    primaryCta: "Book a consultation",
    secondaryCta: "View our work",
  },
  about: {
    eyebrow: "The studio",
    title: "Considered design, delivered end to end",
    paragraphs: [
      "Kan Decor is a design-and-build studio working across residences, boutique offices and hospitality spaces. We believe a room should feel resolved the moment you step into it.",
      "Every project begins with how you actually live — light, routine, texture — and ends with a space handed over complete, styled and photographed.",
    ],
    signature: "Kanyi A., Principal Designer",
    pillars: [
      "Concept & 3D visualisation",
      "Bespoke joinery",
      "Turnkey fit-out",
      "Styling & handover",
    ],
  },
  services: [
    {
      id: "concept",
      title: "Concept & Space Planning",
      description:
        "Moodboards, layouts and photoreal 3D renders so you see the space before we build it.",
      icon: "PenTool",
    },
    {
      id: "fitout",
      title: "Turnkey Fit-Out",
      description:
        "One accountable team for joinery, finishes, lighting, and installation.",
      icon: "Hammer",
    },
    {
      id: "furnishing",
      title: "Furnishing & Sourcing",
      description:
        "Curated pieces sourced locally and abroad, negotiated at trade pricing.",
      icon: "Armchair",
    },
    {
      id: "styling",
      title: "Styling & Handover",
      description:
        "Final layers — art, textiles, objects — and a photographed handover.",
      icon: "Sparkles",
    },
  ],
  showcase: [
    {
      id: "the-oak-residence",
      title: "The Oak Residence",
      category: "Residential",
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      alt: "The Oak Residence warm minimal interior",
      caption:
        "A five-bedroom family home rebuilt around light, oak and quiet.",
      description: [
        "The brief was a home that felt calm without feeling cold. We stripped the interior back to its shell and rebuilt around a spine of warm oak joinery.",
        "Travertine floors carry through the ground level, softened by linen upholstery and a restrained palette of clay, bone and bronze.",
      ],
      servicesUsed: [
        "Space Planning",
        "Bespoke Joinery",
        "Turnkey Fit-Out",
        "Styling",
      ],
      timeline: [
        {
          id: "t1",
          label: "Week 1–3",
          detail: "Discovery, measurement and concept direction",
        },
        {
          id: "t2",
          label: "Week 4–7",
          detail: "3D visualisation and material sign-off",
        },
        {
          id: "t3",
          label: "Week 8–18",
          detail: "Joinery fabrication and site works",
        },
        {
          id: "t4",
          label: "Week 19–20",
          detail: "Furnishing, styling and handover",
        },
      ],
      location: "Lekki, Lagos",
      year: "2025",
      span: "wide",
    },
    {
      id: "clay-house",
      title: "Clay House",
      category: "Residential",
      src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop",
      alt: "Clay House earth-toned plaster interior",
      caption:
        "Earth-toned plaster, arched thresholds and sculptural furniture.",
      description: [
        "A compact apartment reimagined with hand-troweled plaster walls and arched openings that soften every sightline.",
        "Furniture was kept sculptural and few, letting the shell of the apartment do the talking.",
      ],
      servicesUsed: [
        "Concept Design",
        "Plaster Finishes",
        "Furniture Sourcing",
      ],
      timeline: [
        { id: "t1", label: "Week 1–2", detail: "Concept and palette" },
        { id: "t2", label: "Week 3–9", detail: "Finishes and joinery" },
        { id: "t3", label: "Week 10", detail: "Styling and handover" },
      ],
      location: "Ikoyi, Lagos",
      year: "2024",
      span: "normal",
    },
    {
      id: "oak-dining-nook",
      title: "Arched Dining Nook",
      category: "Dining",
      src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop",
      alt: "Dining nook with wood and stone accents",
      caption:
        "Custom arched wall niche with travertine ledge and recessed lighting.",
      servicesUsed: ["Bespoke Joinery", "Lighting Design"],
      location: "Lekki, Lagos",
      year: "2025",
      span: "normal",
    },
    {
      id: "oak-principal-bedroom",
      title: "Oak Panelled Suite",
      category: "Bedroom",
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
      alt: "Principal bedroom with wood slatting",
      caption: "Restful sleeping sanctuary wrapped in acoustic oak slatting.",
      servicesUsed: ["Turnkey Fit-Out", "Furniture Sourcing"],
      location: "Lekki, Lagos",
      year: "2025",
      span: "wide",
    },
    {
      id: "open-lounge-curation",
      title: "Open Plan Sanctuary",
      category: "Living",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      alt: "Warm modern open plan living space",
      caption: "Low-profile sectional paired with raw stone coffee surfaces.",
      servicesUsed: ["Styling", "Furnishing & Sourcing"],
      location: "Victoria Island, Lagos",
      year: "2024",
      span: "full",
    },
  ],
  showcaseCategories: ["Residential", "Living", "Dining", "Bedroom"],
  testimonials: [
    {
      id: "t1",
      quote:
        "They handed over a home, not a construction site. Everything was styled, cleaned and photographed the day we moved in.",
      author: "Tunde & Ada O.",
      role: "The Oak Residence",
    },
    {
      id: "t2",
      quote:
        "The 3D renders were almost identical to the finished rooms. No surprises, no overruns.",
      author: "Ifeoma N.",
      role: "Clay House",
    },
  ],
  statistics: [
    { id: "s1", value: "120+", label: "Spaces delivered" },
    { id: "s2", value: "9", label: "Years designing" },
    { id: "s3", value: "94%", label: "Referral rate" },
    { id: "s4", value: "20", label: "Avg. weeks to handover" },
  ],
  faqs: [
    {
      id: "f1",
      question: "Do you take on single rooms?",
      answer:
        "Yes. Many clients start with one room and expand once they've seen the process.",
    },
    {
      id: "f2",
      question: "How is pricing structured?",
      answer:
        "A fixed design fee, then a transparent, itemised build and furnishing budget you approve before works begin.",
    },
    {
      id: "f3",
      question: "Do you work outside Lagos?",
      answer:
        "We deliver nationwide and have completed projects in Abuja, Port Harcourt and Accra.",
    },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { label: "Pinterest", href: "https://pinterest.com", icon: "Bookmark" },
  ],
  contact: {
    phone: "+234 800 000 0001",
    whatsapp: "2348000000001",
    email: "studio@kandecor.com",
    addressLines: ["12B Admiralty Way", "Lekki Phase 1, Lagos"],
    mapQuery: "Admiralty Way, Lekki Phase 1, Lagos",
    hours: "Mon–Fri, 9am – 6pm",
  },
  whatsappMessages: {
    general:
      "Hello Kan Decor, I found your website and I'd like to learn more.",
    quotation: "Hello Kan Decor, I'd like a quotation for an interior project.",
    consultation: "Hello Kan Decor, I'd like to book a design consultation.",
    project: "Hello Kan Decor, I'd like to discuss this project.",
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
};

export default business;
