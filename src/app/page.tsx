import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SITE } from "@/config/site";
import { allBusinesses } from "@/data/businesses";
import { createAssetResolver } from "@/lib/core/asset-resolver";

export const metadata = {
  title: SITE.title,
  description: SITE.description,
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl p-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold">{SITE.name}</h1>
          <p className="mt-2 text-slate-500">
            Select a business to preview its website.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allBusinesses.map((business) => {
            const assets = createAssetResolver(business.slug);

            return (
              <Link
                key={business.slug}
                href={`/${business.slug}`}
                className="group overflow-hidden rounded-2xl border bg-white transition hover:shadow-xl"
              >
                <img
                  src={assets.hero()}
                  alt={business.name}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-5">
                  <p className="text-xs uppercase tracking-widest text-blue-600">
                    {business.industry}
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold">
                    {business.name}
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    {business.tagline}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-blue-600">
                    Open Website
                    <ArrowUpRight
                      size={18}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}