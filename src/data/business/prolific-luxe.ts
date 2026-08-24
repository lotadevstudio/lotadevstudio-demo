import type { Business } from "@/types/business";

const business: Business = {
  slug: "prolific-luxe",
  name: "Prolific Luxe & Soles",
  legalName: "Prolific Luxe & Soles Ltd.",
  industry: "Luxury Jewelry, Timepieces & Custom Footwear",
  tagline: "Uncompromised Luxury & Craftsmanship",
  description:
    "Each piece holds a story. Make sure it's one worth telling with custom gold jewelry, luxury timepieces, and handcrafted footwear.",
  theme: {
    primary: "#D4AF37", // Rich Gold
    secondary: "#1A1A1A",
    accent: "#F3E5AB", // Soft Gold Accent
    background: "#0A0A0A", // Deep Luxury Dark
    surface: "#141414",
    text: "#F5F5F7",
    muted: "#98989A",
    border: "#2A2A2A",
    displayFont: '"Cormorant Garamond", Georgia, serif',
    bodyFont: '"Plus Jakarta Sans", system-ui, sans-serif',
    radius: "12px",
  },
  navigation: [
    { label: "About", target: "about" },
    { label: "Services", target: "services" },
    { label: "Showcase", target: "showcase" },
    { label: "Contact", target: "contact" },
  ],
  hero: {
    eyebrow: "Bespoke Jewelry, Watches & Soles",
    headline: "Statement pieces crafted with",
    highlight: "pure precision",
    subheadline:
      "Each piece holds a story make sure it’s one worth telling with your choice of jewelry/footwear from us 🫂 🌍",
    primaryCta: "Inquire via WhatsApp",
    secondaryCta: "Explore Store",
  },
  about: {
    eyebrow: "The Brand",
    title: "Defining Luxury Through Fine Detail",
    paragraphs: [
      "Prolific Luxe & Soles represents the pinnacle of personal style and luxury craftsmanship.",
      "From bespoke solid gold jewelry and fully-studded luxury timepieces to custom footwear handcrafted from scratch, every piece is forged to elevate your presence.",
    ],
    signature: "Prolific Luxe, Founder",
    pillars: [
      "Custom Footwear Made From Scratch",
      "Fully Studded Luxury Timepieces",
      "Pocket Knife Belts & Designer Accessories",
      "Nationwide Insured Delivery",
    ],
  },
  services: [
    {
      id: "custom-jewelry",
      title: "Custom Gold & Jewelry",
      description:
        "Bespoke pendants, Cuban link chains, rings, and grillz crafted in 10k, 14k, or 18k solid gold.",
      icon: "Sparkles",
    },
    {
      id: "bespoke-footwear",
      title: "Handcrafted Custom Footwear",
      description:
        "Criss-cross sandals, loafers, and custom soles built completely from scratch using premium leather.",
      icon: "Sparkles",
    },
    {
      id: "sourcing-sourcing",
      title: "Luxury Watch Sourcing",
      description:
        "Fully boxed luxury watches complete with manuals, fully studded bezels, and precision quartz movements.",
      icon: "Sparkles",
    },
    {
      id: "restoration",
      title: "Designer Accessories",
      description:
        "Unique statement belts, including Pocket Knife leather belts and custom-tailored luxury accents.",
      icon: "Sparkles",
    },
  ],
  showcase: [
    {
      id: "top-time-wrist-watch",
      title: "Top Time Luxury Studded Watch",
      category: "Timepieces",
      src: "https://instagram.fabb1-2.fna.fbcdn.net/v/t51.82787-15/730608349_18048574613613961_1330755546188635093_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzkyNzIzNTA5Njg5MjY1NTE5Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTI4OC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=lyWfLUs4YKIQ7kNvwFYjlmy&_nc_oc=AdqQKEQBnVSfwQLgO-Wed6FMDG1Frz0_ny5qKaM12H2W14nO0c-NZz359Hb1EB7kmvQ&_nc_zt=23&_nc_ht=instagram.fabb1-2.fna&_nc_gid=WbAA26wIkh3RdIwb6c0-fQ&_nc_ss=7ba8c&oh=00_AQGCXO82UwDIyvmk-fkdzDdOCRpAaaTy5n-5VFPUDMTWGg&oe=6A9213C3",
      alt: "Top Time Luxury Wristwatch fully studded with ice",
      caption: "Price: ₦170,000 — Fully boxed with manual and studded bezel.",
      description: [
        "Top time luxury wrist watch now available in store.",
        "Details: Fully boxed with watch manual, fully studded bezel, and long-lasting precision battery.",
      ],
      servicesUsed: ["Watch Sourcing", "Luxury Timepieces"],
      location: "Lagos, Nigeria",
      year: "2026",
      span: "wide",
    },
    {
      id: "citizen-timepiece",
      title: "Citizen Timepiece",
      category: "Timepieces",
      src: "https://instagram.fabb1-1.fna.fbcdn.net/v/t51.82787-15/776718726_18056428844613961_7270407458311015547_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzk2NjM3OTQ2NDUwNDk4NDc5MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=trup2muh6lIQ7kNvwF1ygoE&_nc_oc=AdrXBKwzsAkE_D0iIX3bicLxjakWNEg4AZ_6VObGxVhAuAB3vBte1EDm0sD8DP1G3nQ&_nc_zt=23&_nc_ht=instagram.fabb1-1.fna&_nc_gid=lG5rIK4lk0516NCsWyx_MQ&_nc_ss=7ba8c&oh=00_AQGTuiTdDIv-MYmNuEvu2YghxeG23DbkruKm8Bceiy4Nkw&oe=6A91F0C2",
      alt: "Citizen Timepiece luxury watch",
      caption: "Price: ₦55,000 — Now available in store.",
      description: [
        "Citizen Timepiece crafted for minimalist everyday luxury.",
      ],
      servicesUsed: ["Watch Sourcing"],
      location: "Lagos, Nigeria",
      year: "2026",
      span: "normal",
    },
    {
      id: "criss-cross-footwear",
      title: "Criss Cross Footwear",
      category: "Footwear",
      src: "https://instagram.fabb1-1.fna.fbcdn.net/v/t51.82787-15/743157336_18051144752613961_2852816913131880963_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=Mzk3OTY2Mjc0Mzk1NDIzNDI1Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTIwMC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=nha25kpQTjwQ7kNvwEqoxw3&_nc_oc=Adp2v-R5AtSOgbdYTv7x7s5N9uD4Aqa7PYMNWjwFmhCAtMm_NoTYT2zfuZ4dP2KHKfE&_nc_zt=23&_nc_ht=instagram.fabb1-1.fna&_nc_gid=H_6Aiam728dVzglphxkMkw&_nc_ss=7ba8c&oh=00_AQHA1G9s_x3X9-ju-dFMQ_jmi7c_exG2muJt4MxEvdHKVQ&oe=6A920322",
      alt: "Handcrafted Criss Cross footwear made from scratch",
      caption: "Price: ₦38,000 — Custom made from scratch.",
      description: [
        "New design unlocked: Criss Cross footwear made from scratch with premium materials for maximum comfort and durability.",
      ],
      servicesUsed: ["Handcrafted Footwear"],
      location: "Lagos, Nigeria",
      year: "2026",
      span: "normal",
    },
    {
      id: "pocket-knife-belt",
      title: "Pocket Knife Belt",
      category: "Accessories",
      src: "https://instagram.fabb1-1.fna.fbcdn.net/v/t51.82787-15/742155341_18050898341613961_2074382729251623444_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzkzODM5MDY1MzA2NjA1NTM4MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTIwNi5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=GSjVTTwVw8wQ7kNvwEfauaV&_nc_oc=AdrfQ9o1U1ymZGSSbKjDN2Q3y1nLXaP4nggPwfBF9uadeYs_eyjJnO3Js_0Uiq8KH5E&_nc_zt=23&_nc_ht=instagram.fabb1-1.fna&_nc_gid=yZJXTtQbeuC-NDo0HWjnWg&_nc_ss=7ba8c&oh=00_AQEKHWRH6AOfob4U2bZxUEIKJcIhU94AQFbmXRYef9x8sg&oe=6A9215E9",
      alt: "Pocket Knife leather designer belt",
      caption: "Price: ₦35,000 — Statement accessory available in store.",
      description: [
        "New in stock: Pocket Knife belt designed for modern hypebeast style.",
      ],
      servicesUsed: ["Designer Accessories"],
      location: "Lagos, Nigeria",
      year: "2026",
      span: "wide",
    },
  ],
  showcaseCategories: ["Timepieces", "Footwear", "Accessories"],
  testimonials: [
    {
      id: "t1",
      quote:
        "The Top Time watch arrived fully boxed and heavily studded. Unbeatable quality for 170k.",
      author: "Verified Buyer",
      role: "Instagram Client",
    },
    {
      id: "t2",
      quote:
        "Criss Cross footwear built from scratch fits perfectly and feels premium.",
      author: "Satisfied Client",
      role: "Repeat Customer",
    },
  ],
  statistics: [
    { id: "s1", value: "500+", label: "Items Delivered" },
    { id: "s2", value: "100%", label: "Authentic Materials" },
    { id: "s3", value: "4.9/5", label: "Client Rating" },
    { id: "s4", value: "24-48h", label: "Fast Shipping" },
  ],
  faqs: [
    {
      id: "f1",
      question: "Are custom footwear built from scratch?",
      answer:
        "Yes! Our Criss Cross footwear and custom leather soles are made from scratch to guarantee quality and precise fit.",
    },
    {
      id: "f2",
      question: "Do luxury timepieces come with packaging?",
      answer:
        "Yes, timepieces like the Top Time luxury watch come fully boxed with user manuals.",
    },
    {
      id: "f3",
      question: "How do I order or make inquiries?",
      answer:
        "Click any WhatsApp button on the catalog to send a direct message with the item you want.",
    },
  ],
  socials: [
    {
      label: "Instagram",
      href: "https://instagram.com/prolific_luxe_and_soles",
      icon: "Instagram",
    },
  ],
  contact: {
    phone: "+234 813 458 1505",
    whatsapp: "2348134581505",
    email: "contact@prolificluxe.com",
    addressLines: ["Lagos, Nigeria"],
    mapQuery: "Lagos, Nigeria",
    hours: "Mon–Sat, 9am – 8pm",
  },
  whatsappMessages: {
    general:
      "Hello Prolific Luxe & Soles, I'm visiting your website and I'd like to make an inquiry.",
    quotation:
      "Hello Prolific Luxe & Soles, I'd like to get a quote for a custom jewelry / footwear piece.",
    consultation:
      "Hello Prolific Luxe & Soles, I'd like to inquire about ordering gold jewelry or custom shoes.",
    project:
      "Hello Prolific Luxe & Soles, I'd like to discuss this item on your website.",
  },
  sections: {
    showAbout: true,
    showServices: true,
    showShowcase: true,
    showTestimonials: true,
    showStatistics: true,
    showFaq: true,
    showContact: true,
    showMap: false,
  },
};

export default business;
