import type { Business, ProductItem, IconName } from "@/types/business";

// Extended IconName union to resolve TypeScript errors in services:
// Add "Table" | "Briefcase" | "LayoutGrid" | "Facebook" to IconName in types/business.ts

export const chrisjoelProducts: ProductItem[] = [
  {
    id: "executive-mesh-office-chair",
    name: "Executive Ergonomic Mesh Office Chair",
    category: "Executive Chairs",
    price: 150000,
    formattedPrice: "₦150,000",
    src: "https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/753033981_122117381415361295_412047978048516253_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=p526x296&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFWBB0iZSCUmRRR6bIcUY601cpf_BV6fbbVyl_8FXp9tj5UIQWD9y0CG6_e4b8ZzrMsUxVff0jZu-Gj7pYeE86V&_nc_ohc=SAs5ZC01fGsQ7kNvwED0Lfu&_nc_oc=Adp8-ITPm5YskH6dJLa9avQln6ybV9r333jxZbjFYGkoK7iPBOaddCkL5OW5GoYSjhU&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=D--tF7-Z-B_bulO1GEhssw&_nc_ss=7b2a8&oh=00_AQGMYA_oZZgFC6D2ifOj8AyGqAMptYcLdXvoEAI1aYTDjw&oe=6A92C50D",
    inStock: true,
    description:
      "High-back executive office chair featuring lumbar support, adjustable headrest, tilt lock mechanism, and heavy-duty chrome base.",
  },
  {
    id: "curved-executive-desk-set",
    name: "Curved Executive CEO Workspace Suite",
    category: "Desks",
    price: 450000,
    formattedPrice: "Price on Request",
    src: "https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/726495295_122104193391361295_34576421689112268_n.jpg?stp=dst-jpg_tt6&cstp=mx960x1280&ctp=p526x296&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUl3bAv3Rp03Fku7tU5HBud7gPe7qDfnB3uA97uoN-cFqfx0NvR5go1xeA_mp_bVnLky74LsXa1ORL4walsYqe&_nc_ohc=dPXu_WKQTwAQ7kNvwHaSBgg&_nc_oc=AdoAvu5MMLw6vGw2vntBGx_7dAYg_xoVEaWtma4BbhFjxDqSJ_IKNfma0yczdzD_POE&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&_nc_gid=TVv6VhDLyraTrzSLvDjiCw&_nc_ss=7b2a8&oh=00_AQFyPx4hFzhGih-HQrWppfK0FPGHFxoRSmE2Jb82mW20fg&oe=6A92DF35",
    inStock: true,
    description:
      "High-end curved executive table crafted from solid hardwood, paired with a matching ergonomic leather executive chair.",
  },
  {
    id: "luxury-parlor-sofa-set",
    name: "Royal Velvet Living Room Sofa Set",
    category: "Living Room",
    price: 650000,
    formattedPrice: "Price on Request",
    src: "https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/725803725_122103689097361295_2189905920499298471_n.jpg?stp=dst-jpg_tt6&cstp=mx762x1096&ctp=s590x590&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEPSw4c1hTNzQ6bafjOWUsQ-Dt1j6NY8Uv4O3WPo1jxS6d4CVH6SbQiGapQsbxlwgrfA94zxV9-e4nvf6XQWkzV&_nc_ohc=kpuEDsKioGcQ7kNvwFcdYNL&_nc_oc=AdrYw-rKPAPSpHoJX1qdiV3uDuGiH_kb5wATVaO7sqRg-3tJTFopnOCpW9ILSucm_cM&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=TVv6VhDLyraTrzSLvDjiCw&_nc_ss=7b2a8&oh=00_AQGn4wkd26hLIhpKIuj77ZNRPaw0u5Ou8-ky4ooV_Yx90Q&oe=6A92D731",
    inStock: true,
    description:
      "Classic full parlour seating set featuring plush high-density foam cushioning, durable upholstery, and reinforced frames.",
  },
  {
    id: "executive-boss-chair",
    name: "High-Back Padded Leather Boss Chair",
    category: "Executive Chairs",
    price: 180000,
    formattedPrice: "Price on Request",
    src: "https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/726350032_122103688857361295_4905709457604653272_n.jpg?stp=dst-jpg_tt6&cstp=mx510x649&ctp=s590x590&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFzlUKeMKJmbeFpA6c9_XouzWVTqx2--DPNZVOrHb74MwvCIH3InQj9hbFnEC0XWmhQjXQKlCHgPt9uL4uNQd_I&_nc_ohc=mGZGyO1rOaEQ7kNvwHBAOrL&_nc_oc=AdqFrsexDWp9Ppqd0sguG968pMopO3q1arfgcT5m4fZXsUOXkNxt3JEUdiSDNBk6O6I&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&_nc_gid=TVv6VhDLyraTrzSLvDjiCw&_nc_ss=7b2a8&oh=00_AQGOC16RMEmzawddc4G15okv3hYcxDALK_AX5uktZOjM8g&oe=6A92D5F8",
    inStock: true,
    description:
      "Ergonomic director chair built with thick cushioning, heavy swivel castors, and pneumatic height adjustment.",
  },
  {
    id: "modern-lounge-seater",
    name: "Modern Accent Reception Seater",
    category: "Living Room",
    price: 220000,
    formattedPrice: "Price on Request",
    src: "https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/725880144_122103687459361295_1422160996303985631_n.jpg?stp=dst-jpg_tt6&cstp=mx1818x2048&ctp=s590x590&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHSRO5kHVuHSWSx1SAchqImW9xRhGygeA5b3FGEbKB4DoJdwPNAz9uJjxPZq7DgdtQh6aLXNE4UV2JAwnrWc68V&_nc_ohc=I1WiUmo0kIgQ7kNvwGVMWp5&_nc_oc=Adp21a-v3X7jbn9qXbtPG4VpycPNyBZ42S1P1uxMxPeo_T7PzbfPzp1hm1Bhm2V3j4M&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&_nc_gid=YfMaEZLARF7E0pnqzMNXEQ&_nc_ss=7b2a8&oh=00_AQEV78hyWn5U7fBg4QKFxOxvGaM1UIRSSfcQcap9tj1zUg&oe=6A92D1DA",
    inStock: true,
    description:
      "Stylish accent armchair suited for corporate reception areas, executive lounges, or modern residential spaces.",
  },
  {
    id: "grand-monarch-dining-set",
    name: "Grand Monarch Luxury Dining Set",
    category: "Dining",
    price: 850000,
    formattedPrice: "Price on Request",
    src: "https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/725966962_122103512781361295_2381816049426795834_n.jpg?stp=dst-jpg_tt6&cstp=mx1076x1004&ctp=p552x414&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH3DZHGEzjHb8L_yzK6jYR0AkvVoRzikK8CS9WhHOKQr727WX_gOEU_ryjzKLUoD_-euyVnIoFw3q6VM_BLjBgG&_nc_ohc=CC-nznBtXLUQ7kNvwEvqsAY&_nc_oc=AdrSGtDH5wECCeuuIlDjwUuTi225Vmbsm1VK0EEViNv81ZECtQrH6g0ygpdV-T6tOpk&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&_nc_gid=DW00DKkEX8yPSyohKF9vwg&_nc_ss=7b2a8&oh=00_AQELr5dB8NLIaUsAecK4DvfWf4gAfnbCfOm4d6k6GPzukw&oe=6A92EC9B",
    inStock: true,
    description:
      "Ornate luxury dining table set built with solid hardwood carving, polished glaze, and upholstered high-back chairs.",
  },
  {
    id: "pro-gaming-desk-chair-combo",
    name: "Pro Gaming Workstation Setup",
    category: "Gaming",
    price: 320000,
    formattedPrice: "Price on Request",
    src: "https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/726527367_122103512517361295_274900099868593223_n.jpg?stp=dst-jpg_tt6&cstp=mx700x1080&ctp=p526x296&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGlvq-OWDBSPdHYfJlyzwHKFZk6ivttOF0VmTqK-204XW7hixqfhohvg9TwYTTx0YE8DBYeTBdv7hM48Onq9GxP&_nc_ohc=hNO7PnZYCn4Q7kNvwGYLqTr&_nc_oc=AdozgweQ3ch6zCjdVtBmBUxzcaqDWnyJ6JJs0bHUJmxlqaGZqF3S6qvqXoP2pi796ME&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&_nc_gid=DW00DKkEX8yPSyohKF9vwg&_nc_ss=7b2a8&oh=00_AQH4xNRbx9J5o880X4qEv0WaVOvQ8cjBJtNaG1qCNeuYjg&oe=6A92D5F7",
    inStock: true,
    description:
      "Ergonomic gaming set with racing-style bucket seat chair, custom color variants, and heavy-duty gaming desk.",
  },
  {
    id: "royal-palace-dining-table",
    name: "Royal Palace Carved Dining Set",
    category: "Dining",
    price: 950000,
    formattedPrice: "Price on Request",
    src: "https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/726949485_122103512133361295_9129393203124185366_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x810&ctp=s720x720&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHB7Ucj6qSJ3hT2EOLFBUn5K8Jx2yLeit0rwnHbIt6K3WLU71kRV2oa8CK37wWEehp5fV3DJS610rHFOmSLZWUm&_nc_ohc=VlhFdqPEKSUQ7kNvwHhizjc&_nc_oc=Adrp2ghtpW_l3TZlNGypZ_xdccbVlpkgVIUJ-sywe6lIVYc-PYAzn7x_N4g2l9sLSY0&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=DW00DKkEX8yPSyohKF9vwg&_nc_ss=7b2a8&oh=00_AQGBKUtdxDVmi97GtRv6U5KFZD4zCkpzQH4dq3plcsrqeA&oe=6A92DE1D",
    inStock: true,
    description:
      "Classic luxury dining table constructed from mahogany wood, featuring hand-carved detailing and premium gloss finish.",
  },
  {
    id: "executive-l-shaped-desk",
    name: "Executive L-Shaped Manager Desk",
    category: "Desks",
    price: 380000,
    formattedPrice: "Price on Request",
    src: "https://scontent.flos5-2.fna.fbcdn.net/v/t39.30808-6/723100471_122103508833361295_6526458925940793546_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x707&ctp=s590x590&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFneBaqnhPUsBZqMrbAae12yQXWKuP_CorJBdYq4_8KirhbQDKkryZzJcFhNy7-_mrZJ9CoE6-HOUFLErEtNG7B&_nc_ohc=qXJj17PZiBoQ7kNvwFqBCMQ&_nc_oc=Adoo2jr3WLSLVeivErRtvWXPZORyQhdSznbtjeITV7_kW7MYN6tclt4JidR65tH09rg&_nc_zt=23&_nc_ht=scontent.flos5-2.fna&_nc_gid=EELnd3r_7dZAWRHS92tdoQ&_nc_ss=7b2a8&oh=00_AQGEyPJrY3K4h99aUToMGBJnZ6LgFPFELL-wI7DvhudQnQ&oe=6A92DDDD",
    inStock: true,
    description:
      "Spacious L-shaped executive desk equipped with extended work surface, side storage unit, and lockable drawers.",
  },
];

const business: Business = {
  slug: "chrisjoel-furniture",
  name: "Chrisjoel Furniture",
  legalName: "Chrisjoel Furniture Ltd.",
  industry: "Executive Office & Home Furniture Architecture",
  tagline: "Transforming Workspaces with Executive Office Furniture",
  description:
    "We deliver executive chairs, desks, and tables tailored for modern offices and home workspaces. Reliable quality, ergonomic design, and great prices nationwide.",
  theme: {
    primary: "#8B4513",
    secondary: "#2B1810",
    accent: "#D97706",
    background: "#FAF8F5",
    surface: "#FFFFFF",
    text: "#1C1917",
    muted: "#78716C",
    border: "#E7E5E4",
    displayFont: '"Playfair Display", Georgia, serif',
    bodyFont: '"Plus Jakarta Sans", system-ui, sans-serif',
    radius: "8px",
  },
  navigation: [
    { label: "About", target: "about" },
    { label: "Services", target: "services" },
    { label: "Showcase", target: "showcase" },
    { label: "Contact", target: "contact" },
  ],
  hero: {
    eyebrow: "Executive Office & Home Furniture",
    headline: "Transform your workspace with",
    highlight: "premium craftsmanship",
    subheadline:
      "We deliver executive chairs, workstations, and boardroom tables designed for durability, comfort, and luxury appeal 🚚📦",
    primaryCta: "Order via WhatsApp",
    secondaryCta: "Explore Furniture Catalog",
  },
  about: {
    eyebrow: "About Chrisjoel Furniture",
    title: "Defining Ergonomics & Executive Elegance",
    paragraphs: [
      "At Chrisjoel Furniture, we specialize in high-grade office setups and home workspace transformations across Nigeria.",
      "From high-back ergonomic mesh chairs to custom executive wooden desks, every piece is sourced and engineered for structural strength and long-term comfort.",
    ],
    signature: "Chrisjoel Furniture, Director",
    // Fixed: Standardized to represent company principles rather than product listings
    pillars: [
      "Uncompromised Build Quality & Hardwood Craftsmanship",
      "Ergonomic Engineering for Long-Hour Comfort",
      "Direct Factory Pricing with Zero Middleman Markup",
      "Seamless Nationwide Dispatch & Doorstep Delivery",
    ],
  },
  services: [
    {
      id: "executive-chairs",
      title: "Executive & Task Seating",
      description:
        "Ergonomic mesh and leather executive chairs featuring lumbar support, height adjustment, and heavy-duty swivel bases.",
      icon: "Armchair",
    },
    {
      id: "office-desks",
      title: "Executive Desks & Workstations",
      description:
        "Custom wooden desks, manager workstations, and standing desks built with concealed wire management.",
      icon: "PenTool", // Safe fallback till IconName type union is updated
    },
    {
      id: "conference-tables",
      title: "Boardroom & Meeting Tables",
      description:
        "Sleek 6 to 12-seater conference tables designed to make a commanding statement in corporate meeting spaces.",
      icon: "Hammer", // Safe fallback till IconName type union is updated
    },
    {
      id: "workspace-setup",
      title: "Custom Office Furnishing",
      description:
        "Full-room interior layout consultations and furniture setup for corporate offices and modern home studios.",
      icon: "Sparkles",
    },
  ],
  showcase: [
    {
      id: "curved-executive-desk-showcase",
      title: "Curved Executive CEO Workspace Suite",
      category: "Desks",
      src: "https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/726495295_122104193391361295_34576421689112268_n.jpg?stp=dst-jpg_tt6&cstp=mx960x1280&ctp=p526x296&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUl3bAv3Rp03Fku7tU5HBud7gPe7qDfnB3uA97uoN-cFqfx0NvR5go1xeA_mp_bVnLky74LsXa1ORL4walsYqe&_nc_ohc=dPXu_WKQTwAQ7kNvwHaSBgg&_nc_oc=AdoAvu5MMLw6vGw2vntBGx_7dAYg_xoVEaWtma4BbhFjxDqSJ_IKNfma0yczdzD_POE&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&_nc_gid=TVv6VhDLyraTrzSLvDjiCw&_nc_ss=7b2a8&oh=00_AQFyPx4hFzhGih-HQrWppfK0FPGHFxoRSmE2Jb82mW20fg&oe=6A92DF35",
      alt: "Large curved wooden executive table set with matching leather chair",
      caption: "High-grade executive wood construction built for CEO offices.",
      description: [
        "A heavy-duty curved executive setup featuring thick polished timber, embedded cable conduits, and matching high-back leather executive seating.",
      ],
      servicesUsed: ["Executive Desks & Workstations"],
      location: "Lagos, Nigeria",
      year: "2026",
      span: "wide",
    },
    {
      id: "grand-monarch-dining-showcase",
      title: "Grand Monarch Luxury Dining Set",
      category: "Dining",
      src: "https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/725966962_122103512781361295_2381816049426795834_n.jpg?stp=dst-jpg_tt6&cstp=mx1076x1004&ctp=p552x414&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH3DZHGEzjHb8L_yzK6jYR0AkvVoRzikK8CS9WhHOKQr727WX_gOEU_ryjzKLUoD_-euyVnIoFw3q6VM_BLjBgG&_nc_ohc=CC-nznBtXLUQ7kNvwEvqsAY&_nc_oc=AdrSGtDH5wECCeuuIlDjwUuTi225Vmbsm1VK0EEViNv81ZECtQrH6g0ygpdV-T6tOpk&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&_nc_gid=DW00DKkEX8yPSyohKF9vwg&_nc_ss=7b2a8&oh=00_AQELr5dB8NLIaUsAecK4DvfWf4gAfnbCfOm4d6k6GPzukw&oe=6A92EC9B",
      alt: "Ornate classic dining set screaming luxury",
      caption: "Statement luxury dining built for executive residences.",
      description: [
        "Premium solid wood dining set with sculpted legs, glossy dark finish, and custom high-back fabric dining chairs.",
      ],
      servicesUsed: ["Custom Office Furnishing"],
      location: "Abuja, Nigeria",
      year: "2026",
      span: "normal",
    },
    {
      id: "pro-gaming-desk-showcase",
      title: "Pro Gaming Workstation Setup",
      category: "Gaming",
      src: "https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/726527367_122103512517361295_274900099868593223_n.jpg?stp=dst-jpg_tt6&cstp=mx700x1080&ctp=p526x296&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGlvq-OWDBSPdHYfJlyzwHKFZk6ivttOF0VmTqK-204XW7hixqfhohvg9TwYTTx0YE8DBYeTBdv7hM48Onq9GxP&_nc_ohc=hNO7PnZYCn4Q7kNvwGYLqTr&_nc_oc=AdozgweQ3ch6zCjdVtBmBUxzcaqDWnyJ6JJs0bHUJmxlqaGZqF3S6qvqXoP2pi796ME&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&_nc_gid=DW00DKkEX8yPSyohKF9vwg&_nc_ss=7b2a8&oh=00_AQH4xNRbx9J5o880X4qEv0WaVOvQ8cjBJtNaG1qCNeuYjg&oe=6A92D5F7",
      alt: "Modern gaming desk and ergonomic chair set available in multiple colors",
      caption: "High-performance gaming setup with color variants.",
      description: [
        "Built for streamers and power users, combining a heavy-duty frame desk with a full-recline lumbar gaming chair.",
      ],
      servicesUsed: ["Executive & Task Seating"],
      location: "Lagos, Nigeria",
      year: "2026",
      span: "normal",
    },
  ],
  showcaseCategories: [
    "Executive Chairs",
    "Desks",
    "Tables",
    "Living Room",
    "Dining",
    "Gaming",
  ],
  testimonials: [
    {
      id: "t1",
      quote:
        "The 150k ergonomic mesh chair completely saved my back during long work hours. Super fast delivery in Lagos!",
      author: "Verified Customer",
      role: "Corporate Executive",
    },
    {
      id: "t2",
      quote:
        "Equipped our entire startup office with Chrisjoel desks and chairs. High quality wood and zero hassle.",
      author: "Office Manager",
      role: "Tech Studio Lead",
    },
  ],
  statistics: [
    { id: "s1", value: "350+", label: "Offices Furnished" },
    { id: "s2", value: "100%", label: "Durable Materials" },
    { id: "s3", value: "4.9/5", label: "Client Rating" },
    { id: "s4", value: "24-48h", label: "Lagos & Interstate Delivery" },
  ],
  faqs: [
    {
      id: "f1",
      question: "Do you deliver nationwide in Nigeria?",
      answer:
        "Yes! We deliver across Lagos and ship safely to all major cities in Nigeria.",
    },
    {
      id: "f2",
      question: "Can I inspect furniture before paying?",
      answer:
        "We send high-definition videos and live photos of your order before dispatch to ensure 100% satisfaction.",
    },
    {
      id: "f3",
      question: "How do I place an order?",
      answer:
        "Simply click 'Order via WhatsApp' or click any item in the store catalog to send us a direct message.",
    },
  ],
  socials: [
    {
      label: "Instagram",
      href: "https://web.facebook.com/people/Chrisjoel-furniture/61590838860059/",
      icon: "Instagram",
    },
  ],
  contact: {
    phone: "+234 814 836 5837",
    whatsapp: "2348148365837",
    email: "contact@chrisjoelfurniture.com",
    addressLines: ["Lagos, Nigeria"],
    mapQuery: "Lagos, Nigeria",
    hours: "Mon–Sat, 8am – 7pm",
  },
  whatsappMessages: {
    general:
      "Hello Chrisjoel Furniture, I'm visiting your website and I'd like to make an inquiry about office furniture.",
    quotation:
      "Hello Chrisjoel Furniture, I'd like to get a quote for outfitting an office workspace.",
    consultation:
      "Hello Chrisjoel Furniture, I'd like to consult on executive chairs and desks.",
    project:
      "Hello Chrisjoel Furniture, I'd like to place an order for this item from your catalog.",
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
  products: chrisjoelProducts,
};

export default business;
