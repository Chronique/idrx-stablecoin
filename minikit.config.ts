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
    subtitle: "Indonesian Rupiah-Backed Stablecoin",
    description: "Designed for rapid, global transactions and 24/7 access to financial markets, IDRX is a regulated digital asset that offers seamless conversions and can be redeemed at a fixed rate for Indonesian Rupiah.",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/idrx-logo-official.png`,
    splashImageUrl: `${ROOT_URL}/idrx-splash.png`,
    splashBackgroundColor: "#0a1f3d",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "finance",
    tags: ["stablecoin", "idrx", "rupiah", "indonesia", "web3", "defi"],
    heroImageUrl: `${ROOT_URL}/idrx-splash.png`,
    tagline: "Get IDRX",
    ogTitle: "IDRX - Indonesian Rupiah Stablecoin",
    ogDescription: "Get IDRX: Rupiah-backed stablecoin for seamless Web3 transactions.",
    ogImageUrl: `${ROOT_URL}/idrx-splash.png`,
  },
} as const;
