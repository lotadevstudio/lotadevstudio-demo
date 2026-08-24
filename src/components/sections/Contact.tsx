"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";
import type { Business } from "@/types/business";

interface ContactProps {
  business: Business;
}

export default function Contact({ business }: ContactProps) {
  const { theme, contact, whatsappMessages, name, products, slug } = business;

  const hasProducts = Array.isArray(products) && products.length > 0;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 4000);
  };

  const cleanPhone = contact?.whatsapp?.replace(/\D/g, "") || "";
  const defaultMessage =
    whatsappMessages?.general ||
    `Hello ${name}, I am reaching out through your website.`;
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36 transition-colors duration-500 select-none"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* AMBIENT GLOW BACKDROP */}
      <div
        className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full opacity-10 blur-[130px]"
        style={{ backgroundColor: theme.accent || theme.primary }}
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
            Initiate Conversation
          </span>
        </div>

        {/* SECTION HEADLINE */}
        <div className="mt-6 max-w-2xl">
          <h2
            className="text-3xl font-light tracking-tight sm:text-5xl lg:text-6xl leading-[1.15]"
            style={{
              fontFamily: theme.displayFont,
              color: theme.text,
            }}
          >
            Let’s compose something <br />
            <span className="italic opacity-90">extraordinary together.</span>
          </h2>
        </div>

        {/* TWO-COLUMN GRID */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* LEFT: DIRECT CONTACT DETAILS & ACTION CARDS */}
          <div className="lg:col-span-5 space-y-8">
            <p
              className="text-sm sm:text-base leading-relaxed font-normal"
              style={{ color: theme.muted }}
            >
              Whether you are looking to place a custom order, inquire about products in our store, or arrange a private consultation, our team is at your disposal.
            </p>

            {/* DIRECT STORE ACTION CARD (IF PRODUCTS EXIST) */}
            {hasProducts && (
              <Link
                href={`/${slug}/store`}
                className="group flex items-center justify-between p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl active:scale-[0.98]"
                style={{
                  borderColor: `${theme.primary}40`,
                  backgroundColor: theme.surface,
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white"
                    style={{ backgroundColor: theme.primary }}
                  >
                    <ShoppingBag size={22} />
                  </div>
                  <div>
                    <p
                      className="text-xs font-mono uppercase tracking-widest font-semibold"
                      style={{ color: theme.accent || theme.primary }}
                    >
                      Instant Catalog
                    </p>
                    <h4
                      className="text-base font-medium mt-0.5"
                      style={{ color: theme.text }}
                    >
                      Browse Store Products
                    </h4>
                  </div>
                </div>

                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 group-hover:bg-black group-hover:text-white"
                  style={{ borderColor: theme.border }}
                >
                  <ArrowUpRight size={16} />
                </div>
              </Link>
            )}

            {/* DIRECT WHATSAPP ACTION BOX */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl active:scale-[0.98]"
              style={{
                borderColor: theme.border,
                backgroundColor: theme.surface,
              }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white"
                  style={{ backgroundColor: theme.primary }}
                >
                  <MessageCircle size={22} />
                </div>
                <div>
                  <p
                    className="text-xs font-mono uppercase tracking-widest font-semibold"
                    style={{ color: theme.accent || theme.primary }}
                  >
                    Instant Response
                  </p>
                  <h4
                    className="text-base font-medium mt-0.5"
                    style={{ color: theme.text }}
                  >
                    Chat on WhatsApp
                  </h4>
                </div>
              </div>

              <div
                className="flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 group-hover:bg-black group-hover:text-white"
                style={{ borderColor: theme.border }}
              >
                <ArrowUpRight size={16} />
              </div>
            </a>

            {/* CONTACT METADATA LIST */}
            <div
              className="space-y-6 rounded-3xl border p-6 sm:p-8"
              style={{
                borderColor: theme.border,
                backgroundColor: `${theme.surface}60`,
              }}
            >
              {contact?.email && (
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border mt-0.5"
                    style={{
                      borderColor: theme.border,
                      backgroundColor: theme.surface,
                    }}
                  >
                    <Mail size={16} style={{ color: theme.accent || theme.primary }} />
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest font-bold"
                      style={{ color: theme.muted }}
                    >
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="block text-sm font-medium hover:underline mt-0.5"
                      style={{ color: theme.text }}
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              )}

              {contact?.phone && (
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border mt-0.5"
                    style={{
                      borderColor: theme.border,
                      backgroundColor: theme.surface,
                    }}
                  >
                    <Phone size={16} style={{ color: theme.accent || theme.primary }} />
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest font-bold"
                      style={{ color: theme.muted }}
                    >
                      Direct Line
                    </span>
                    <a
                      href={`tel:${contact.phone}`}
                      className="block text-sm font-medium hover:underline mt-0.5"
                      style={{ color: theme.text }}
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {contact?.addressLines && contact.addressLines.length > 0 && (
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border mt-0.5"
                    style={{
                      borderColor: theme.border,
                      backgroundColor: theme.surface,
                    }}
                  >
                    <MapPin size={16} style={{ color: theme.accent || theme.primary }} />
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest font-bold"
                      style={{ color: theme.muted }}
                    >
                      Showroom / Atelier
                    </span>
                    <p
                      className="text-sm font-medium leading-normal mt-0.5"
                      style={{ color: theme.text }}
                    >
                      {contact.addressLines.join(", ")}
                    </p>
                  </div>
                </div>
              )}

              {contact?.hours && (
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border mt-0.5"
                    style={{
                      borderColor: theme.border,
                      backgroundColor: theme.surface,
                    }}
                  >
                    <Clock size={16} style={{ color: theme.accent || theme.primary }} />
                  </div>
                  <div>
                    <span
                      className="text-[10px] font-mono uppercase tracking-widest font-bold"
                      style={{ color: theme.muted }}
                    >
                      Operating Hours
                    </span>
                    <p
                      className="text-sm font-medium mt-0.5"
                      style={{ color: theme.text }}
                    >
                      {contact.hours}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: INTERACTIVE FORM CARD */}
          <div
            className="lg:col-span-7 rounded-3xl border p-6 sm:p-10 shadow-sm relative overflow-hidden"
            style={{
              borderColor: theme.border,
              backgroundColor: theme.surface,
            }}
          >
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in duration-500">
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: theme.primary }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h3
                  className="text-2xl font-light"
                  style={{ fontFamily: theme.displayFont, color: theme.text }}
                >
                  Message Received
                </h3>
                <p className="text-xs max-w-sm mx-auto" style={{ color: theme.muted }}>
                  Thank you for contacting us. A dedicated curator will review your inquiry and reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <p
                    className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1"
                    style={{ color: theme.accent || theme.primary }}
                  >
                    Send An Inquiry
                  </p>
                  <h3
                    className="text-2xl font-light"
                    style={{ fontFamily: theme.displayFont, color: theme.text }}
                  >
                    How can we assist you?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-2"
                      style={{ color: theme.muted }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Chidinma Okafor"
                      className="w-full rounded-xl border px-4 py-3 text-xs outline-none transition-all duration-200 focus:ring-1"
                      style={{
                        backgroundColor: theme.background,
                        borderColor: theme.border,
                        color: theme.text,
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-2"
                      style={{ color: theme.muted }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. client@domain.com"
                      className="w-full rounded-xl border px-4 py-3 text-xs outline-none transition-all duration-200 focus:ring-1"
                      style={{
                        backgroundColor: theme.background,
                        borderColor: theme.border,
                        color: theme.text,
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-2"
                      style={{ color: theme.muted }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234..."
                      className="w-full rounded-xl border px-4 py-3 text-xs outline-none transition-all duration-200 focus:ring-1"
                      style={{
                        backgroundColor: theme.background,
                        borderColor: theme.border,
                        color: theme.text,
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-2"
                      style={{ color: theme.muted }}
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border px-4 py-3 text-xs outline-none transition-all duration-200 focus:ring-1"
                      style={{
                        backgroundColor: theme.background,
                        borderColor: theme.border,
                        color: theme.text,
                      }}
                    >
                      <option value="">Select a subject</option>
                      {hasProducts && (
                        <option value="store_catalog">Store Catalog Inquiry</option>
                      )}
                      <option value="bespoke">Bespoke Curation</option>
                      <option value="corporate">Corporate Programme</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-mono font-semibold uppercase tracking-wider mb-2"
                    style={{ color: theme.muted }}
                  >
                    Details & Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the product, occasion, timeline, quantity or budget..."
                    className="w-full rounded-xl border px-4 py-3 text-xs outline-none transition-all duration-200 focus:ring-1 resize-none"
                    style={{
                      backgroundColor: theme.background,
                      borderColor: theme.border,
                      color: theme.text,
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-lg transition-transform active:scale-[0.98]"
                  style={{ backgroundColor: theme.primary }}
                >
                  <Send size={15} />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}