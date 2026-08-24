"use client";

import { useState } from "react";
import Link from "next/link";
import { Award, ArrowRight, ShoppingBag } from "lucide-react";
import type { Business } from "@/types/business";

interface AboutSectionProps {
  business: Business;
}

export default function AboutSection({ business }: AboutSectionProps) {
  const { theme, about, products, slug } = business;
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const hasProducts = Array.isArray(products) && products.length > 0;

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36 transition-colors duration-500"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* AMBIENT GLOW BACKDROP */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-15 blur-3xl sm:h-96 sm:w-96"
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
            {about.eyebrow}
          </span>
        </div>

        {/* HEADLINE */}
        <h2
          className="mt-6 text-3xl font-light tracking-tight sm:text-5xl lg:text-6xl max-w-3xl leading-[1.15]"
          style={{
            fontFamily: theme.displayFont,
            color: theme.text,
          }}
        >
          {about.title}
        </h2>

        {/* MAIN BODY GRID */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* LEFT: TEXT PARAGRAPHS & SIGNATURE / STORE CARD */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            {about.paragraphs.map((para, index) => (
              <p
                key={index}
                className="text-base font-normal leading-relaxed text-balance sm:text-lg sm:leading-relaxed"
                style={{
                  color: `${theme.text}CC`,
                  fontFamily: theme.bodyFont,
                }}
              >
                {para}
              </p>
            ))}

            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* CURATOR / PRINCIPAL SIGNATURE CARD */}
              {about.signature && (
                <div
                  className="flex flex-1 items-center gap-4 rounded-2xl border p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 shadow-sm"
                  style={{
                    backgroundColor: `${theme.surface}80`,
                    borderColor: theme.border,
                  }}
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border shadow-inner"
                    style={{
                      backgroundColor: `${theme.primary}15`,
                      borderColor: `${theme.primary}30`,
                      color: theme.primary,
                    }}
                  >
                    <Award size={20} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider font-semibold"
                      style={{ color: theme.muted }}
                    >
                      Leadership & Vision
                    </p>
                    <p
                      className="text-base font-medium tracking-tight mt-0.5"
                      style={{
                        fontFamily: theme.displayFont,
                        color: theme.text,
                      }}
                    >
                      {about.signature}
                    </p>
                  </div>
                </div>
              )}

              {/* STORE CATALOG BRIDGE CARD */}
              {hasProducts && (
                <Link
                  href={`/${slug}/store`}
                  className="group flex flex-1 items-center justify-between gap-4 rounded-2xl border p-4 sm:p-5 backdrop-blur-xl transition-all duration-300 hover:border-opacity-100 shadow-sm active:scale-[0.98]"
                  style={{
                    backgroundColor: `${theme.surface}80`,
                    borderColor: `${theme.primary}40`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-transform group-hover:scale-105"
                      style={{
                        backgroundColor: `${theme.primary}15`,
                        borderColor: `${theme.primary}30`,
                        color: theme.primary,
                      }}
                    >
                      <ShoppingBag size={18} />
                    </div>
                    <div>
                      <p
                        className="text-xs uppercase tracking-wider font-semibold"
                        style={{ color: theme.muted }}
                      >
                        Curated Collection
                      </p>
                      <p
                        className="text-sm font-medium tracking-tight mt-0.5"
                        style={{ color: theme.text }}
                      >
                        {products.length} Products Available
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                    style={{ color: theme.primary }}
                  />
                </Link>
              )}
            </div>
          </div>

          {/* RIGHT: CLASSIC EDITORIAL PILLARS / STANDARDS GRID */}
          <div className="flex flex-col gap-3.5 lg:col-span-5">
            <div className="flex items-center justify-between px-1 mb-1">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.25em]"
                style={{ color: theme.muted }}
              >
                Our Core Pillars
              </span>
              <span
                className="text-[10px] font-semibold uppercase tracking-widest"
                style={{ color: theme.accent || theme.primary }}
              >
                Standard of Excellence
              </span>
            </div>

            {about.pillars.map((pillar, idx) => {
              const isActive = activePillar === idx;
              const formattedNum = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={idx}
                  onClick={() => setActivePillar(isActive ? null : idx)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-300 active:scale-[0.98]"
                  style={{
                    backgroundColor: isActive ? theme.surface : `${theme.surface}50`,
                    borderColor: isActive ? (theme.accent || theme.primary) : theme.border,
                    boxShadow: isActive ? `0 12px 30px -10px ${theme.primary}15` : "none",
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span
                        className="text-xs font-mono font-bold tracking-widest"
                        style={{
                          color: isActive ? (theme.accent || theme.primary) : theme.muted,
                        }}
                      >
                        {formattedNum}
                      </span>
                      <span
                        className="text-sm font-medium tracking-tight sm:text-base"
                        style={{
                          color: theme.text,
                          fontFamily: theme.displayFont,
                        }}
                      >
                        {pillar}
                      </span>
                    </div>

                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-full border transition-transform duration-300 group-hover:translate-x-0.5"
                      style={{
                        borderColor: theme.border,
                        backgroundColor: isActive ? theme.background : `${theme.border}30`,
                        color: theme.muted,
                      }}
                    >
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}