export const SITE = {
  // Studio
  name: "LotadevStudio",
  tagline: "Crafting websites people remember.",

  // SEO
  url: "https://lotadevstudio.com",
  title: "LotadevStudio",
  description:
    "Thoughtfully crafted websites for businesses that want to stand out online.",

  // Contact
  email: "lotadevstudio@gmail.com",
  phone: "+2348103634850",
  whatsapp: "2348103634850",

  defaultWhatsappMessage:
    "Hi! I came across your work and I'd love to discuss building a website for my business.",

  // Socials
  social: {
    linkedin: "",
    github: "",
    instagram: "",
    x: "",
  },

  // Navigation
  navigation: [
    {
      label: "Work",
      href: "#work",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
} as const;

export const DEMO = {
  modalDelay: 25000,

  loadingMessages: [
    "Preparing your personalized experience...",
    "Loading your brand...",
    "Curating beautiful visuals...",
    "Crafting your digital storefront...",
    "Adding the finishing touches...",
  ],
} as const;
