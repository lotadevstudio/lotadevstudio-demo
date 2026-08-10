import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lotadevstudio Demo",
  description: "Dynamic business showcase",
};

// PREVENT MOBILE TOUCH LAG & DOUBLE-TAP ZOOM
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {/* MOBILE CONSOLE INSPECTOR (INLINE INJECTION FOR RSC COMPATIBILITY) */}
        <Script
          src="https://cdn.jsdelivr.net/npm/eruda"
          strategy="afterInteractive"
        />
        <Script id="eruda-init" strategy="afterInteractive">
          {`if (typeof window !== 'undefined' && window.eruda) { window.eruda.init(); }`}
        </Script>
      </body>
    </html>
  );
}