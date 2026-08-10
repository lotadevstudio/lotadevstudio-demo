import type { Business } from "@/types/business";
import kanDecor from "./business/kan-decor";
import houseOfCluxuries from "./business/house-of-cluxuries";

// 1. Add new business objects here
export const allBusinesses: Business[] = [
  kanDecor,
  houseOfCluxuries,
];

// Map for instant O(1) lookup by slug
export const businessRegistry: Record<string, Business> = Object.fromEntries(
  allBusinesses.map((b) => [b.slug, b])
);

export function getBusiness(slug: string): Business | undefined {
  return businessRegistry[slug];
}