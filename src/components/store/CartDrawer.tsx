"use client";

import { useEffect } from "react";
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import type { Business } from "@/types/business";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  business: Business;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function CartDrawer({
  business,
  isOpen: propIsOpen,
  onClose: propOnClose,
}: CartDrawerProps) {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
    isCartOpen: contextIsOpen,
    setIsCartOpen,
  } = useCart();

  const { theme, contact, name } = business;

  // Derive active visibility state and close handler
  const isOpen = propIsOpen !== undefined ? propIsOpen : contextIsOpen;
  const handleClose = propOnClose || (() => setIsCartOpen(false));

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Prevent background scrolling when drawer is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Format order summary for WhatsApp dispatch
  const orderLines = cart
    .map(
      (item) =>
        `- ${item.product.name} (x${item.quantity}): ₦${(
          item.product.price * item.quantity
        ).toLocaleString()}`
    )
    .join("\n");

  const whatsappMessage = `Hello ${name}! I would like to place an order for:\n\n${orderLines}\n\nTotal: ₦${totalPrice.toLocaleString()}\n\nPlease let me know how to proceed.`;

  const whatsappUrl = `https://wa.me/${contact?.whatsapp?.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={handleClose}
      />

      {/* DRAWER PANEL */}
      <aside
        className="relative z-10 flex h-full w-full max-w-md flex-col justify-between border-l shadow-2xl animate-in slide-in-from-right duration-300"
        style={{
          backgroundColor: theme.background,
          borderColor: theme.border,
          color: theme.text,
        }}
      >
        {/* HEADER */}
        <div
          className="flex h-16 items-center justify-between border-b px-6"
          style={{ borderColor: theme.border }}
        >
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} style={{ color: theme.primary }} />
            <h2
              className="text-base font-semibold tracking-tight"
              style={{ fontFamily: theme.displayFont }}
            >
              Your Inquiry Cart ({totalItems})
            </h2>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border transition-transform active:scale-90 cursor-pointer touch-manipulation"
            style={{
              borderColor: theme.border,
              backgroundColor: theme.surface,
              color: theme.text,
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* ITEMS LIST */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-12">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full border mb-4"
                style={{
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                  color: theme.muted,
                }}
              >
                <ShoppingBag size={28} />
              </div>
              <p className="text-sm font-medium mb-1" style={{ color: theme.text }}>
                Your cart is empty
              </p>
              <p className="text-xs max-w-xs" style={{ color: theme.muted }}>
                Add items from the store catalog to build your order inquiry.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 rounded-xl border p-3 transition-all"
                style={{
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                }}
              >
                {/* PRODUCT THUMBNAIL */}
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-black/5">
                  <img
                    src={item.product.src}
                    alt={item.product.name}
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                {/* PRODUCT INFO & QUANTITY CONTROLS */}
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between gap-2">
                    <h3
                      className="text-xs font-semibold tracking-tight line-clamp-1"
                      style={{ color: theme.text }}
                    >
                      {item.product.name}
                    </h3>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-xs transition-colors hover:opacity-80 cursor-pointer"
                      style={{ color: theme.muted }}
                      aria-label="Remove item"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>

                  <p className="text-xs font-semibold" style={{ color: theme.text }}>
                    {item.product.formattedPrice}
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <div
                      className="flex items-center gap-2 rounded-lg border px-2 py-1"
                      style={{ borderColor: theme.border }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="cursor-pointer touch-manipulation hover:opacity-80"
                        style={{ color: theme.text }}
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-xs font-semibold w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="cursor-pointer touch-manipulation hover:opacity-80"
                        style={{ color: theme.text }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <span className="text-xs font-bold" style={{ color: theme.primary }}>
                      ₦{(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* CHECKOUT / WHATSAPP ACTION */}
        {cart.length > 0 && (
          <div
            className="border-t p-6 space-y-4"
            style={{ borderColor: theme.border, backgroundColor: theme.surface }}
          >
            <div className="flex items-center justify-between text-sm font-semibold">
              <span style={{ color: theme.muted }}>Total</span>
              <span className="text-lg font-bold" style={{ color: theme.text }}>
                ₦{totalPrice.toLocaleString()}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              <button
                type="button"
                onClick={clearCart}
                className="col-span-1 flex items-center justify-center rounded-xl border py-3 text-xs font-semibold transition-all active:scale-95 cursor-pointer"
                style={{
                  borderColor: theme.border,
                  color: theme.muted,
                }}
              >
                Clear
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="col-span-3 flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold text-white shadow-sm transition-all active:scale-95 cursor-pointer touch-manipulation"
                style={{ backgroundColor: theme.primary }}
              >
                <MessageCircle size={16} />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}