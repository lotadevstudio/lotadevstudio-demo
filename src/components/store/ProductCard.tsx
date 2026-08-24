"use client";

import { Plus, Check } from "lucide-react";
import { useState } from "react";
import type { ProductItem, ThemeConfig } from "@/types/business";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: ProductItem;
  theme: ThemeConfig;
}

export default function ProductCard({ product, theme }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group flex flex-col justify-between overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-md"
      style={{
        backgroundColor: theme.surface,
        borderColor: theme.border,
      }}
    >
      {/* PRODUCT IMAGE CONTAINER */}
      <div>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5">
          <img
            src={product.src}
            alt={product.name}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.category && (
            <span
              className="absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md"
              style={{
                backgroundColor: `${theme.background}D9`,
                color: theme.text,
                borderColor: theme.border,
              }}
            >
              {product.category}
            </span>
          )}
        </div>

        {/* PRODUCT DETAILS */}
        <div className="p-5">
          <h3
            className="text-lg font-semibold tracking-tight mb-1"
            style={{
              fontFamily: theme.displayFont,
              color: theme.text,
            }}
          >
            {product.name}
          </h3>
          {product.description && (
            <p
              className="text-xs line-clamp-2 leading-relaxed mb-4"
              style={{ color: theme.muted }}
            >
              {product.description}
            </p>
          )}
        </div>
      </div>

      {/* FOOTER & CTA */}
      <div
        className="flex items-center justify-between border-t p-4 pt-3 mt-auto"
        style={{ borderColor: `${theme.border}80` }}
      >
        <span
          className="text-sm font-semibold tracking-tight"
          style={{ color: theme.text }}
        >
          {product.formattedPrice}
        </span>

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer touch-manipulation"
          style={{ backgroundColor: theme.primary }}
        >
          {added ? (
            <>
              <Check size={14} />
              <span>Added</span>
            </>
          ) : (
            <>
              <Plus size={14} />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}