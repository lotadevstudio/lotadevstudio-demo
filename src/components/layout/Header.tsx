"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MessageCircle, Menu, X, ArrowUpRight, ShoppingBag, ArrowLeft } from "lucide-react";
import type { Business } from "@/types/business";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/store/CartDrawer";

interface HeaderProps {
  business: Business;
}

export default function Header({ business }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Destructure cart and compute total count locally to fix TS2339
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const { theme, navigation, contact, whatsappMessages, products, slug } = business;

  const isStorePage = pathname.endsWith("/store");
  const hasProducts = Array.isArray(products) && products.length > 0;

  const whatsappUrl = `https://wa.me/${contact?.whatsapp?.replace(/\D/g, "")}?text=${encodeURIComponent(
    whatsappMessages?.consultation || "Hello!"
  )}`;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);

    if (isStorePage) {
      router.push(`/${slug}#${target}`);
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = target;
      }
    }, 100);
  };

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full border-b backdrop-blur-xl transition-all duration-300"
        style={{
          backgroundColor: `${theme.background}E6`,
          borderColor: `${theme.border}80`,
        }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* BRAND LOGO / RETURN LINK */}
          <Link
            href={`/${slug}`}
            className="flex items-center gap-2 max-w-[50%] sm:max-w-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span
              className="text-base sm:text-lg font-semibold tracking-tight truncate"
              style={{
                fontFamily: theme.displayFont,
                color: theme.text,
              }}
            >
              {business.name}
            </span>
            {isStorePage && (
              <span
                className="hidden sm:inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest border"
                style={{
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                  color: theme.muted,
                }}
              >
                Store
              </span>
            )}
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {isStorePage ? (
                <>
                </>
              ) : (
                <>
                  {navigation.map((item) => (
                    <li key={item.target}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.target)}
                        className="group relative py-2 text-xs font-medium uppercase tracking-widest transition-colors duration-200 cursor-pointer"
                        style={{ color: theme.muted }}
                      >
                        <span
                          className="transition-colors duration-200 group-hover:opacity-100"
                          style={{ color: theme.text }}
                        >
                          {item.label}
                        </span>
                        <span
                          className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-300 ease-out group-hover:w-full"
                          style={{
                            backgroundColor: theme.accent || theme.primary,
                            boxShadow: `0 0 8px ${theme.accent || theme.primary}`,
                          }}
                        />
                      </button>
                    </li>
                  ))}

                  {hasProducts && (
                    <li>
                      <Link
                        href={`/${slug}/store`}
                        className="group relative py-2 text-xs font-medium uppercase tracking-widest transition-colors duration-200"
                        style={{ color: theme.muted }}
                      >
                        <span
                          className="transition-colors duration-200 group-hover:opacity-100"
                          style={{ color: theme.text }}
                        >
                          Store
                        </span>
                        <span
                          className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-300 ease-out group-hover:w-full"
                          style={{
                            backgroundColor: theme.accent || theme.primary,
                            boxShadow: `0 0 8px ${theme.accent || theme.primary}`,
                          }}
                        />
                      </Link>
                    </li>
                  )}
                </>
              )}
            </ul>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* CART TRIGGER BUTTON */}
            <button
              type="button"
              aria-label="Open Shopping Cart"
              onClick={() => setCartOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border transition-transform active:scale-90 cursor-pointer touch-manipulation"
              style={{
                borderColor: theme.border,
                backgroundColor: theme.surface,
                color: theme.text,
              }}
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span
                  className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: theme.primary }}
                >
                  {totalItems}
                </span>
              )}
            </button>

            {/* MAIN CTA / BACK TO SITE */}
            {isStorePage ? (
              <Link
                href={`/${slug}`}
                className="hidden md:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium border transition-all duration-200 active:scale-95 shadow-sm"
                style={{
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                  color: theme.text,
                }}
              >
                <ArrowLeft size={14} className="shrink-0" />
                <span>Back to Main</span>
              </Link>
            ) : (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-white transition-all duration-200 active:scale-95 shadow-sm"
                style={{ backgroundColor: theme.primary }}
              >
                <MessageCircle size={14} className="shrink-0" />
                <span>Consult</span>
              </a>
            )}

            {/* HAMBURGER TOGGLE BUTTON */}
            <button
              type="button"
              aria-label="Open Menu"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-transform active:scale-90 md:hidden cursor-pointer touch-manipulation"
              style={{
                borderColor: theme.border,
                backgroundColor: theme.surface,
                color: theme.text,
              }}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN MOBILE OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between px-6 pt-4 pb-8 backdrop-blur-2xl md:hidden overflow-y-auto animate-in fade-in duration-200"
          style={{ backgroundColor: `${theme.background}FD` }}
        >
          {/* OVERLAY TOP BAR */}
          <div
            className="flex h-12 items-center justify-between border-b pb-3"
            style={{ borderColor: theme.border }}
          >
            <span
              className="text-lg font-semibold tracking-tight truncate max-w-[75%]"
              style={{ fontFamily: theme.displayFont, color: theme.text }}
            >
              {business.name}
            </span>

            <button
              type="button"
              aria-label="Close Menu"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-transform active:scale-90 cursor-pointer touch-manipulation"
              style={{
                borderColor: theme.border,
                backgroundColor: theme.surface,
                color: theme.text,
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* NAVIGATION LINKS */}
          <nav className="flex flex-col gap-3 my-auto pt-6">
            <p
              className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-1"
              style={{ color: theme.muted }}
            >
              Navigation
            </p>

            {isStorePage ? (
              <Link
                href={`/${slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all duration-200 active:scale-[0.98] cursor-pointer touch-manipulation"
                style={{
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                }}
              >
                <span
                  className="text-base font-medium tracking-tight"
                  style={{
                    fontFamily: theme.displayFont,
                    color: theme.text,
                  }}
                >
                  Return to Main Site
                </span>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-200 group-active:translate-x-1"
                  style={{
                    backgroundColor: `${theme.primary}15`,
                    color: theme.primary,
                  }}
                >
                  <ArrowUpRight size={16} />
                </div>
              </Link>
            ) : (
              <>
                {navigation.map((item) => (
                  <button
                    key={item.target}
                    type="button"
                    onClick={() => handleNavClick(item.target)}
                    className="group flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all duration-200 active:scale-[0.98] cursor-pointer touch-manipulation"
                    style={{
                      backgroundColor: theme.surface,
                      borderColor: theme.border,
                    }}
                  >
                    <span
                      className="text-base font-medium tracking-tight"
                      style={{
                        fontFamily: theme.displayFont,
                        color: theme.text,
                      }}
                    >
                      {item.label}
                    </span>
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-200 group-active:translate-x-1"
                      style={{
                        backgroundColor: `${theme.primary}15`,
                        color: theme.primary,
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </button>
                ))}

                {hasProducts && (
                  <Link
                    href={`/${slug}/store`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all duration-200 active:scale-[0.98] cursor-pointer touch-manipulation"
                    style={{
                      backgroundColor: theme.surface,
                      borderColor: theme.border,
                    }}
                  >
                    <span
                      className="text-base font-medium tracking-tight"
                      style={{
                        fontFamily: theme.displayFont,
                        color: theme.text,
                      }}
                    >
                      Online Store
                    </span>
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-200 group-active:translate-x-1"
                      style={{
                        backgroundColor: `${theme.primary}15`,
                        color: theme.primary,
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </Link>
                )}
              </>
            )}
          </nav>

          {/* DIRECT REACH FOOTER CARD */}
          <div
            className="rounded-2xl p-5 border shadow-sm mt-auto"
            style={{
              backgroundColor: theme.surface,
              borderColor: theme.border,
            }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1"
              style={{ color: theme.muted }}
            >
              Direct Reach
            </p>
            {contact?.phone && (
              <p
                className="text-sm font-semibold mb-4"
                style={{ color: theme.text }}
              >
                {contact.phone}
              </p>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-semibold text-white shadow-sm active:scale-95 transition-transform touch-manipulation"
              style={{ backgroundColor: theme.primary }}
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* SHOPPING CART DRAWER */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        business={business}
      />
    </>
  );
}