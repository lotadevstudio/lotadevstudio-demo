"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import type { Business } from "@/types/business";
import { createAssetResolver } from "@/lib/core/asset-resolver";

interface HeroProps {
  business: Business;
}

const containerVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Hero({ business }: HeroProps) {
  const { theme, hero, contact, whatsappMessages, statistics } = business;
  const assets = createAssetResolver(business.slug);

  // Fallback check to guarantee an image path string always exists
  const imageUrl = assets.hero() || "/images/placeholder-hero.jpg";

  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    whatsappMessages.consultation
  )}`;

  return (
    <section className="relative flex min-h-[calc(100dvh-3.5rem)] w-full flex-col justify-between overflow-hidden px-4 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
        <div className="grid h-full items-center gap-8 lg:grid-cols-12 lg:gap-12">

          {/* LEFT: EDITORIAL COPY */}
          <motion.div
            variants={containerVariants}
            initial={false}
            animate="visible"
            className="flex flex-col justify-center lg:col-span-5"
          >
            {hero.eyebrow && (
              <motion.div variants={itemVariants} className="mb-4">
                <span
                  className="text-[11px] font-medium uppercase tracking-[0.25em]"
                  style={{ color: theme.accent }}
                >
                  {hero.eyebrow}
                </span>
              </motion.div>
            )}

            <motion.h1
              variants={itemVariants}
              className="text-3xl font-light tracking-tight leading-[1.12] sm:text-5xl lg:text-5xl xl:text-6xl"
              style={{
                fontFamily: theme.displayFont,
                color: theme.text,
              }}
            >
              {hero.headline}{" "}
              <span
                className="italic font-normal block mt-1"
                style={{ color: theme.primary }}
              >
                {hero.highlight}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-xs sm:text-sm font-normal leading-relaxed max-w-md"
              style={{ color: theme.muted }}
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-xs font-medium text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98] shadow-sm"
                style={{ backgroundColor: theme.primary }}
              >
                <MessageCircle size={14} />
                <span>{hero.primaryCta || "Inquire via WhatsApp"}</span>
              </a>

              {hero.secondaryCta && (
                <a
                  href="#projects"
                  className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border px-5 text-xs font-medium transition-all duration-300 hover:bg-black/5 active:scale-[0.98]"
                  style={{
                    borderColor: theme.border,
                    color: theme.text,
                  }}
                >
                  <span>{hero.secondaryCta}</span>
                  <ArrowUpRight size={14} />
                </a>
              )}
            </motion.div>

            {statistics && statistics.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="mt-8 pt-6 border-t flex items-center gap-8"
                style={{ borderColor: `${theme.border}80` }}
              >
                {statistics.slice(0, 2).map((stat) => (
                  <div key={stat.id}>
                    <p
                      className="text-lg font-light tracking-tight"
                      style={{
                        fontFamily: theme.displayFont,
                        color: theme.text,
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-[10px] uppercase tracking-widest font-medium"
                      style={{ color: theme.muted }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* RIGHT: SHOWCASE */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl lg:col-span-7 lg:h-[72vh]">
            <img
              src={imageUrl}
              alt={`${business.name} Design Showcase`}
              className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
              loading="eager"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

            <div
              className="absolute bottom-4 left-4 rounded-full border px-3.5 py-1.5 text-[10px] font-medium tracking-wider uppercase backdrop-blur-md shadow-sm"
              style={{
                backgroundColor: `${theme.background}B3`,
                borderColor: `${theme.border}A0`,
                color: theme.text,
              }}
            >
              Featured Space • {business.name}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}