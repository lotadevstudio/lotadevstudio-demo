"use client";

import Link from "next/link";
import {
  Gift,
  Briefcase,
  Droplets,
  Crown,
  Sparkles,
  ArrowUpRight,
  ShoppingBag,
} from "lucide-react";
import type { Business } from "@/types/business";

interface ServicesSectionProps {
  business: Business;
}

// Dynamic icon mapping with fallback
const iconMap: Record<string, React.ElementType> = {
  Gift,
  Briefcase,
  Droplets,
  Crown,
  Sparkles,
};

export default function ServicesSection({ business }: ServicesSectionProps) {
  const { theme, services, products, slug, contact, whatsappMessages } = business;

  const hasProducts = Array.isArray(products) && products.length > 0;

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36 transition-colors duration-500"
      style={{
        backgroundColor: theme.surface,
        color: theme.text,
      }}
    >
      {/* AMBIENT GLOW BACKDROP */}
      <div
        className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full opacity-10 blur-3xl sm:h-96 sm:w-96"
        style={{
          backgroundColor: theme.accent || theme.primary,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* REFINED EDITORIAL EYEBROW */}
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
            What We Do
          </span>
        </div>

        {/* HEADLINE & SUBTITLE */}
        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <h2
              className="text-3xl font-light tracking-tight sm:text-5xl lg:text-6xl leading-[1.15]"
              style={{
                fontFamily: theme.displayFont,
                color: theme.text,
              }}
            >
              A complete service, <br />
              <span className="italic opacity-90">start to finish.</span>
            </h2>

            <p
              className="mt-4 text-base font-normal leading-relaxed sm:text-lg"
              style={{
                color: theme.muted,
                fontFamily: theme.bodyFont,
              }}
            >
              Everything {business.name} offers, curated and executed under one accountable roof.
            </p>
          </div>

          {/* QUICK CATALOG EXPLORER ACTION */}
          {hasProducts && (
            <Link
              href={`/${slug}/store`}
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border px-6 text-xs font-medium transition-all duration-300 hover:bg-black/5 active:scale-[0.98]"
              style={{
                borderColor: theme.border,
                color: theme.text,
              }}
            >
              <ShoppingBag size={14} style={{ color: theme.primary }} />
              <span>Browse Catalog ({products.length})</span>
            </Link>
          )}
        </div>

        {/* CLASSIC MONOCHROME SINGLE-PIXEL GRID */}
        <div
          className="mt-14 overflow-hidden rounded-3xl border shadow-sm transition-colors duration-300"
          style={{
            borderColor: theme.border,
            backgroundColor: theme.border, // Acts as 1px grid gap
          }}
        >
          <div className="grid gap-px md:grid-cols-2">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Sparkles;
              const formattedNum = String(index + 1).padStart(2, "0");

              // Route directly into relevant store category if store exists, otherwise WhatsApp consultation
              const serviceSlug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              const targetUrl = hasProducts
                ? `/${slug}/store?category=${encodeURIComponent(service.title)}`
                : `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                    `${whatsappMessages.consultation} I'd like to inquire about ${service.title}.`
                  )}`;

              const isExternal = !hasProducts;

              return (
                <article
                  key={service.id || index}
                  className="group relative flex flex-col justify-between p-8 sm:p-10 transition-colors duration-500 hover:z-10"
                  style={{
                    backgroundColor: theme.background,
                  }}
                >
                  <div>
                    {/* TOP ROW: ICON & INDEX */}
                    <div className="flex items-center justify-between">
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:border-transparent group-hover:scale-105"
                        style={{
                          borderColor: theme.border,
                          backgroundColor: `${theme.surface}80`,
                          color: theme.text,
                        }}
                      >
                        <IconComponent size={20} />
                      </span>

                      <span
                        className="text-xs font-mono font-bold tracking-widest"
                        style={{ color: theme.muted }}
                      >
                        {formattedNum}
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3
                      className="mt-8 text-2xl font-light tracking-tight sm:text-3xl"
                      style={{
                        fontFamily: theme.displayFont,
                        color: theme.text,
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className="mt-3 text-sm leading-relaxed sm:text-base"
                      style={{
                        color: `${theme.text}CC`,
                        fontFamily: theme.bodyFont,
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* BOTTOM ACTION FOOTER */}
                  <div
                    className="mt-8 flex items-center justify-between pt-6 border-t"
                    style={{ borderColor: `${theme.border}40` }}
                  >
                    <span
                      className="text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300"
                      style={{ color: theme.muted }}
                    >
                      {hasProducts ? "Explore Related Items" : "Inquire via WhatsApp"}
                    </span>

                    {isExternal ? (
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 group-hover:border-transparent"
                        style={{
                          borderColor: theme.border,
                          backgroundColor: `${theme.surface}80`,
                          color: theme.text,
                        }}
                      >
                        <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <Link
                        href={targetUrl}
                        className="flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 group-hover:border-transparent"
                        style={{
                          borderColor: theme.border,
                          backgroundColor: `${theme.surface}80`,
                          color: theme.text,
                        }}
                      >
                        <ArrowUpRight size={15} />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}