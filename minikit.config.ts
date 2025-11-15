const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 */
export const minikitConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: ""
  },
  miniapp: {
    version: "1",
    name: "IDRX",
    subtitle: "rupiah-backed-stablecoin",  // ← Fix: lowercase + hyphen, no spaces (37 chars)
    description: "idrx-is-indonesian-rupiah-backed-stablecoin-regulated-1-1-pegged-fast-global-transactions-24-7-access-and-instant-conversion",  // ← Fix: lowercase + hyphen, no tanda baca/spasi (169 chars)
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/idrx-logo-official.png`,
    splashImageUrl: `${ROOT_URL}/idrx-splash.png`,
    splashBackgroundColor: "#0a1f3d",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "finance",
    tags: ["stablecoin", "idrx", "rupiah", "indonesia", "web3"],  // ← Fix: lowercase only, no spasi/emoji (max 5 tags, masing-masing <20 chars)
    heroImageUrl: `${ROOT_URL}/idrx-splash.png`,
    tagline: "Get IDRX",
    ogTitle: "idrx-rupiah-stablecoin", // ← Fix: lowercase + hyphen, no spasi (32 chars)
    ogDescription: "get-idrx-rupiah-backed-stablecoin-for-seamless-web3-transactions",  // ← Fix: lowercase + hyphen, no tanda baca/spasi (68 chars)
    ogImageUrl: `${ROOT_URL}/idrx-splash.png`,
  },
} as const;
