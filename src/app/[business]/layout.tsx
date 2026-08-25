import { notFound } from "next/navigation";
import { CartProvider } from "@/context/CartContext";
import { getBusiness } from "@/data/businesses";
import Header from "@/components/layout/Header";

interface BusinessLayoutProps {
  children: React.ReactNode;
  params: Promise<{ business: string }>;
}

export default async function BusinessLayout({
  children,
  params,
}: BusinessLayoutProps) {
  const { business: slug } = await params;
  const business = getBusiness(slug);

  if (!business) {
    notFound();
  }

  const { theme } = business;

  return (
    <CartProvider key={slug} businessSlug={slug}>
      <div
        className="min-h-screen antialiased selection:bg-black/10"
        style={{
          backgroundColor: theme.background,
          color: theme.text,
          fontFamily: theme.bodyFont,
          "--primary": theme.primary,
          "--secondary": theme.secondary,
          "--accent": theme.accent,
          "--surface": theme.surface,
          "--border": theme.border,
          "--muted": theme.muted,
        } as React.CSSProperties}
      >
        <Header business={business} />
        {children}
      </div>
    </CartProvider>
  );
}