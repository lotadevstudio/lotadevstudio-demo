"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import type { Business } from "@/types/business";

interface HeaderProps {
  business: Business;
}

export default function Header({ business }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, navigation, contact, whatsappMessages } = business;

  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    whatsappMessages.consultation
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
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300"
        style={{
          backgroundColor: `${theme.background}E6`,
          borderColor: `${theme.border}80`,
        }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* BRAND LOGO */}
          <Link
            href={`/${business.slug}`}
            className="relative z-[70] flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span
              className="text-lg font-semibold tracking-tight"
              style={{
                fontFamily: theme.displayFont,
                color: theme.text,
              }}
            >
              {business.name}
            </span>
          </Link>

          {/* DESKTOP NAV WITH GLOWING UNDERLINE ANIMATION */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item.target}>
                  <a
                    href={`#${item.target}`}
                    className="group relative py-2 text-xs font-medium uppercase tracking-widest transition-colors duration-200"
                    style={{ color: theme.muted }}
                  >
                    <span className="transition-colors duration-200 group-hover:opacity-100" style={{ color: theme.text }}>
                      {item.label}
                    </span>
                    {/* Animated Underline */}
                    <span
                      className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full transition-all duration-300 ease-out group-hover:w-full"
                      style={{
                        backgroundColor: theme.accent || theme.primary,
                        boxShadow: `0 0 8px ${theme.accent || theme.primary}`,
                      }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ACTIONS & TOGGLE */}
          <div className="relative z-[70] flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-white transition-all duration-200 active:scale-95 shadow-sm"
              style={{ backgroundColor: theme.primary }}
            >
              <MessageCircle size={14} className="shrink-0" />
              <span>Consult</span>
            </a>

            {/* MOBILE TOGGLE BUTTON (Explicit pointer events & Z-index isolation) */}
            <button
              type="button"
              aria-label="Toggle Menu"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen((prev) => !prev);
              }}
              className="relative z-[80] flex h-10 w-10 items-center justify-center rounded-full border transition-transform active:scale-90 md:hidden"
              style={{
                borderColor: `${theme.border}`,
                backgroundColor: theme.surface,
                color: theme.text,
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col justify-between px-6 pt-24 pb-8 backdrop-blur-2xl md:hidden overflow-y-auto"
          style={{ backgroundColor: `${theme.background}F2` }}
        >
          {/* NAVIGATION LINKS AS STYLED INTERACTIVE BUTTONS */}
          <nav className="flex flex-col gap-3">
            <p
              className="text-[10px] uppercase tracking-[0.25em] font-semibold mb-1"
              style={{ color: theme.muted }}
            >
              Navigation
            </p>
            {navigation.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => handleNavClick(item.target)}
                className="group flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all duration-200 active:scale-[0.98]"
                style={{
                  backgroundColor: theme.surface,
                  borderColor: theme.border,
                }}
              >
                <span
                  className="text-lg font-medium tracking-tight"
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
          </nav>

          {/* DIRECT REACH FOOTER CARD */}
          <div
            className="mt-8 rounded-2xl p-5 border shadow-sm"
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
            <p
              className="text-sm font-semibold mb-4"
              style={{ color: theme.text }}
            >
              {contact.phone}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs font-semibold text-white shadow-sm active:scale-95 transition-transform"
              style={{ backgroundColor: theme.primary }}
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}