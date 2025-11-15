const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjM0NTk5MywidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDExMDkxOGJiRmQ2ODE3NjRhMTU3MDU4MUVBNTI0N2ZmYjk5M0NGYzAifQ",
    payload: "eyJkb21haW4iOiJpZHJ4LXN0YWJsZWNvaW4udmVyY2VsLmFwcCJ9",
    signature: "MKikHEiicCTLGxjnPmI08a4YDZYV/kdXcbKj/1r7UntxbtZBMr4LYWZmawNeyhrDCZskGZ7U37fBfT30yEYnbhw=",
  },
  baseBuilder: {
    ownerAddress: "0x4fbA95e4772be6d37a0c931D06570Fe2c9675524"  // ← wallet-mu yang sign association
  },
  miniapp: {
    version: "1",
    name: "IDRX",
    subtitle: "rupiah-backed-stablecoin",
    description: "idrx-is-indonesian-rupiah-backed-stablecoin-regulated-1-1-pegged-fast-global-transactions-24-7-access-and-instant-conversion",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/idrx-logo-official.png`,
    splashImageUrl: `${ROOT_URL}/idrx-splash.png`,
    splashBackgroundColor: "#0a1f3d",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "finance",
    tags: ["stablecoin", "idrx", "rupiah", "indonesia", "web3"],
    heroImageUrl: `${ROOT_URL}/idrx-splash.png`,
    tagline: "Get IDRX",
    ogTitle: "idrx-rupiah-stablecoin",
    ogDescription: "get-idrx-rupiah-backed-stablecoin-for-seamless-web3-transactions",
    ogImageUrl: `${ROOT_URL}/idrx-splash.png`,
    noindex: true  // ← tambahan opsional dari docs buat privacy
  }
} as const;
