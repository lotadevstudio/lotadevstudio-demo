"use client";

import {
  Gift,
  Briefcase,
  Droplets,
  Crown,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import type { Business } from "@/types/business";

interface ServicesSectionProps {
  business: Business;
}

// Dynamic icon mapping with dynamic fallback
const iconMap: Record<string, React.ElementType> = {
  Gift,
  Briefcase,
  Droplets,
  Crown,
};

export default function ServicesSection({ business }: ServicesSectionProps) {
  const { theme, services } = business;

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
        <div className="mt-6 max-w-3xl">
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

        {/* CLASSIC MONOCHROME SINGLE-PIXEL GRID */}
        <div
          className="mt-14 overflow-hidden rounded-3xl border shadow-sm transition-colors duration-300"
          style={{
            borderColor: theme.border,
            backgroundColor: theme.border, // Acts as the 1px grid separator
          }}
        >
          <div className="grid gap-px md:grid-cols-2">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Gift;
              const formattedNum = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={service.id || index}
                  className="group relative flex flex-col justify-between p-8 sm:p-10 transition-colors duration-500 hover:z-10"
                  style={{
                    backgroundColor: theme.background,
                  }}
                >
                  {/* TOP ROW: ICON & INDEX */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:border-transparent"
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

                  {/* BOTTOM HOVER ACCENT FOOTER */}
                  <div className="mt-8 flex items-center justify-between pt-6 border-t" style={{ borderColor: `${theme.border}40` }}>
                    <span
                      className="text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300 group-hover:text-current"
                      style={{ color: theme.muted }}
                    >
                      Full Scope Care
                    </span>

                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 group-hover:bg-current"
                      style={{
                        borderColor: theme.border,
                        color: theme.text,
                      }}
                    >
                      <ArrowUpRight size={15} />
                    </div>
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