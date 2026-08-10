import { notFound } from "next/navigation";
import { getBusiness, allBusinesses } from "@/data/businesses";

// Modular Component Imports
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Showcase from "@/components/sections/Showcase";
import Contact from "@/components/sections/Contact";

interface PageProps {
  params: Promise<{ business: string }>;
}

export async function generateStaticParams() {
  return allBusinesses.map((b) => ({
    business: b.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { business: slug } = await params;
  const business = getBusiness(slug);
  if (!business) return {};

  return {
    title: `${business.name} — ${business.tagline}`,
    description: business.description,
  };
}

export default async function TenantDemoPage({ params }: PageProps) {
  const { business: slug } = await params;
  const business = getBusiness(slug);

  if (!business) {
    notFound();
  }

  const { theme, sections, name } = business;

  return (
    <div
      className="min-h-screen antialiased selection:bg-black/10"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        fontFamily: theme.bodyFont,
        // Custom CSS variables for child components
        "--primary": theme.primary,
        "--secondary": theme.secondary,
        "--accent": theme.accent,
        "--surface": theme.surface,
        "--border": theme.border,
        "--muted": theme.muted,
      } as React.CSSProperties}
    >
      <Header business={business} />

      <main>
        <Hero business={business} />
        {sections?.showAbout && <About business={business} />}
        {sections?.showServices && <Services business={business} />}
        {sections?.showShowcase && <Showcase business={business} />}
        {sections?.showContact && <Contact business={business} />}
      </main>

      {/* MINIMAL FOOTER CLOSURE */}
      <footer
        className="border-t py-8 text-center text-xs"
        style={{ borderColor: theme.border, color: theme.muted }}
      >
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
      </footer>
    </div>
  );
}