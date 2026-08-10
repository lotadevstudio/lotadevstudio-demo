export function createAssetResolver(slug: string) {
  return {
    hero: () => `/businesses/${slug}/hero.jpg`,
    logo: () => `/businesses/${slug}/logo.png`,
  };
}