import { notFound } from "next/navigation";
import { getBusiness } from "@/data/businesses";
import ProductCard from "@/components/store/ProductCard";

interface StorePageProps {
  params: Promise<{ business: string }>;
}

export default async function StorePage({ params }: StorePageProps) {
  const { business: slug } = await params;
  const business = getBusiness(slug);

  if (!business || !business.products || business.products.length === 0) {
    notFound();
  }

  const { theme, name, products } = business;

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* STORE HEADER */}
        <div className="mb-12 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-2"
            style={{ color: theme.muted }}
          >
            Catalog & Inquiry
          </p>
          <h1
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3"
            style={{
              fontFamily: theme.displayFont,
              color: theme.text,
            }}
          >
            {name} Store
          </h1>
          <p
            className="text-sm sm:text-base max-w-lg mx-auto"
            style={{ color: theme.muted }}
          >
            Select items to build your inquiry and order directly via WhatsApp.
          </p>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              theme={theme}
            />
          ))}
        </div>
      </main>

      {/* FOOTER CLOSURE */}
      <footer
        className="border-t py-8 text-center text-xs mt-auto"
        style={{ borderColor: theme.border, color: theme.muted }}
      >
        <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
      </footer>
    </>
  );
}