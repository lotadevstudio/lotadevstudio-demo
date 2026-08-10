"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Layers,
  X,
  MessageCircle,
  Clock,
  CheckCircle2,
  MapPin,
  Calendar,
} from "lucide-react";
import type { Business, ShowcaseItem } from "@/types/business";

interface ShowcaseSectionProps {
  business: Business;
}

export default function Showcase({ business }: ShowcaseSectionProps) {
  const {
    theme,
    showcase = [],
    showcaseCategories = [],
    contact,
  } = business;

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<ShowcaseItem | null>(null);

  // Lock body scroll when mobile detail drawer is open
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeItem]);

  // Dynamic filter items
  const categories = ["All", ...showcaseCategories];

  const filteredItems =
    selectedCategory === "All"
      ? showcase
      : showcase.filter((item) => item?.category === selectedCategory);

  // Helper to construct WhatsApp URL per specific showcase item
  const getInquiryUrl = (item: ShowcaseItem) => {
    const text = `Hello, I am interested in work similar to "${item.title}" (${item.category}). Can we discuss scope and pricing?`;
    const cleanNumber = contact?.whatsapp?.replace(/\D/g, "") || "";
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="showcase"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36 transition-colors duration-500 select-none"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* AMBIENT GLOW BACKDROP */}
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full opacity-15 blur-[120px] sm:h-96 sm:w-96"
        style={{
          backgroundColor: theme.accent || theme.primary,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* EDITORIAL EYEBROW */}
        <div className="flex items-center gap-3">
          <span
            className="h-px w-8"
            style={{ backgroundColor: theme.accent || theme.primary }}
          />
          <span
            className="text-[11px] font-bold uppercase tracking-[0.3em]"
            style={{
              color: theme.accent || theme.primary,
              fontFamily: theme.displayFont,
            }}
          >
            Curated Work
          </span>
        </div>

        {/* HEADLINE */}
        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2
              className="text-3xl font-light tracking-tight sm:text-5xl lg:text-6xl leading-[1.15]"
              style={{
                fontFamily: theme.displayFont,
                color: theme.text,
              }}
            >
              Excellence in motion, <br />
              <span className="italic opacity-90">proven by craft.</span>
            </h2>
          </div>

          <p
            className="text-xs font-mono uppercase tracking-widest md:text-right"
            style={{ color: theme.muted }}
          >
            [{filteredItems.length} Archive Entries]
          </p>
        </div>

        {/* HORIZONTAL SCROLLABLE CATEGORY PILLS (NO SCROLLBARS) */}
        <div className="mt-10 -mx-5 flex items-center gap-2.5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className="shrink-0 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95"
                style={{
                  borderColor: isActive
                    ? theme.accent || theme.primary
                    : theme.border,
                  backgroundColor: isActive
                    ? theme.primary
                    : `${theme.surface}90`,
                  color: isActive ? "#FFFFFF" : theme.muted,
                  boxShadow: isActive
                    ? `0 8px 20px -6px ${theme.primary}40`
                    : "none",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* HIGH-STYLIZED BENTO MASONRY GRID */}
        <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
          {filteredItems.map((item, index) => {
            const formattedNum = String(index + 1).padStart(2, "0");

            // Dynamic Bento Column & Height Calculations
            let colSpan = "lg:col-span-4";
            let minHeight = "min-h-[380px] sm:min-h-[420px]";

            if (item.span === "wide") {
              colSpan = "lg:col-span-8";
            } else if (item.span === "tall") {
              minHeight = "min-h-[460px] sm:min-h-[520px]";
            } else if (item.span === "full") {
              colSpan = "lg:col-span-12";
              minHeight = "min-h-[360px] sm:min-h-[440px]";
            }

            return (
              <article
                key={item.id || index}
                onClick={() => setActiveItem(item)}
                className={`group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-500 active:scale-[0.98] ${colSpan} ${minHeight}`}
                style={{
                  borderColor: theme.border,
                  backgroundColor: theme.surface,
                }}
              >
                {/* BACKGROUND IMAGE WITH ZOOM EFFECT */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${item.src})`,
                  }}
                />

                {/* VIGNETTE GRADIENT FOR MAXIMUM CONTRAST */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-300 group-hover:opacity-95" />

                {/* TOP HEADER */}
                <div className="relative z-10 flex items-center justify-between p-6 sm:p-7">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
                    <Layers size={11} />
                    {item.category}
                  </span>

                  <span className="font-mono text-xs font-bold tracking-widest text-white/70">
                    {formattedNum}
                  </span>
                </div>

                {/* BOTTOM CONTENT OVERLAY */}
                <div className="relative z-10 mt-auto p-6 sm:p-7">
                  {item.year && (
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1 block">
                      {item.location ? `${item.location} • ` : ""}
                      {item.year}
                    </span>
                  )}

                  <h3
                    className="text-2xl font-light tracking-tight text-white sm:text-3xl"
                    style={{
                      fontFamily: theme.displayFont,
                    }}
                  >
                    {item.title}
                  </h3>

                  {item.caption && (
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/75 font-normal">
                      {item.caption}
                    </p>
                  )}

                  {/* TOUCH ACTION TRIGGER */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                      Tap To Inspect
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* ========================================================================
          MOBILE & DESKTOP ULTRA-CLEAN DRAWER / MODAL (NO SCROLLBARS)
         ======================================================================== */}
      {activeItem && (
        <div className="fixed inset-0 z-[10000] flex items-end sm:items-center justify-center p-0 sm:p-6">
          {/* BACKDROP */}
          <div
            onClick={() => setActiveItem(null)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
          />

          {/* DRAWER CARD */}
          <div
            className="relative z-10 flex flex-col max-h-[92vh] sm:max-h-[88vh] w-full max-w-2xl overflow-hidden rounded-t-[32px] sm:rounded-[32px] border shadow-2xl transition-all duration-300"
            style={{
              backgroundColor: theme.background,
              borderColor: theme.border,
              color: theme.text,
            }}
          >
            {/* MOBILE DRAG INDICATOR HANDLE */}
            <div className="flex sm:hidden w-full justify-center pt-3 pb-1">
              <div className="h-1 w-10 rounded-full bg-stone-300/40" />
            </div>

            {/* STICKY HEADER */}
            <div
              className="flex items-center justify-between border-b px-6 py-4 backdrop-blur-xl shrink-0"
              style={{
                backgroundColor: `${theme.background}E6`,
                borderColor: theme.border,
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ backgroundColor: theme.accent || theme.primary }}
                />
                <span
                  className="text-xs font-mono font-bold uppercase tracking-widest"
                  style={{ color: theme.muted }}
                >
                  {activeItem.category} Case
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-transform active:scale-90"
                style={{
                  borderColor: theme.border,
                  backgroundColor: theme.surface,
                  color: theme.text,
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* SCROLLABLE BODY (HIDDEN SCROLLBAR) */}
            <div className="overflow-y-auto p-6 sm:p-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {/* HERO MEDIA */}
              <div
                className="relative h-60 w-full overflow-hidden rounded-2xl border sm:h-80 shrink-0"
                style={{ borderColor: theme.border }}
              >
                <img
                  src={activeItem.src}
                  alt={activeItem.alt || activeItem.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* TITLE & METADATA BAR */}
              <div className="mt-6">
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono" style={{ color: theme.muted }}>
                  {activeItem.location && (
                    <span className="flex items-center gap-1">
                      <MapPin size={13} style={{ color: theme.accent || theme.primary }} />
                      {activeItem.location}
                    </span>
                  )}
                  {activeItem.year && (
                    <span className="flex items-center gap-1">
                      <Calendar size={13} style={{ color: theme.accent || theme.primary }} />
                      {activeItem.year}
                    </span>
                  )}
                </div>

                <h3
                  className="mt-2 text-3xl font-light tracking-tight sm:text-4xl"
                  style={{
                    fontFamily: theme.displayFont,
                    color: theme.text,
                  }}
                >
                  {activeItem.title}
                </h3>

                {activeItem.caption && (
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: theme.muted }}
                  >
                    {activeItem.caption}
                  </p>
                )}
              </div>

              {/* DELIVERABLES & SCOPE */}
              {activeItem.servicesUsed && activeItem.servicesUsed.length > 0 && (
                <div className="mt-6 border-t pt-5" style={{ borderColor: theme.border }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: theme.muted }}>
                    Deliverables & Scope
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeItem.servicesUsed.map((srv, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium"
                        style={{
                          borderColor: theme.border,
                          backgroundColor: theme.surface,
                          color: theme.text,
                        }}
                      >
                        <CheckCircle2 size={13} style={{ color: theme.accent || theme.primary }} />
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* DESCRIPTION PARAGRAPHS */}
              {activeItem.description && activeItem.description.length > 0 && (
                <div className="mt-6 space-y-3 border-t pt-5" style={{ borderColor: theme.border }}>
                  {activeItem.description.map((p, i) => (
                    <p
                      key={i}
                      className="text-sm font-normal leading-relaxed"
                      style={{ color: `${theme.text}EE` }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {/* EXECUTION TIMELINE */}
              {activeItem.timeline && activeItem.timeline.length > 0 && (
                <div className="mt-6 border-t pt-5" style={{ borderColor: theme.border }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: theme.muted }}>
                    Execution Sequence
                  </p>
                  <div className="space-y-2.5">
                    {activeItem.timeline.map((step) => (
                      <div
                        key={step.id}
                        className="flex items-start gap-3 rounded-xl border p-3"
                        style={{
                          backgroundColor: theme.surface,
                          borderColor: theme.border,
                        }}
                      >
                        <Clock size={15} className="mt-0.5 shrink-0" style={{ color: theme.accent || theme.primary }} />
                        <div>
                          <p className="text-xs font-semibold" style={{ color: theme.text }}>
                            {step.label}
                          </p>
                          <p className="text-xs mt-0.5" style={{ color: theme.muted }}>
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DIRECT ACTION CTA */}
              <div className="mt-8 pt-2">
                <a
                  href={getInquiryUrl(activeItem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-lg transition-transform active:scale-[0.98]"
                  style={{ backgroundColor: theme.primary }}
                >
                  <MessageCircle size={16} />
                  <span>Inquire About Similar Work</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}