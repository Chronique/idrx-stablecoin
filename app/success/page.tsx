"use client";

import { useEffect } from "react";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const { isFrameReady, setFrameReady, context } = useMiniKit();

  useEffect(() => {
    if (!isFrameReady) setFrameReady();
  }, [isFrameReady, setFrameReady]);

  const userName = context?.user?.displayName || "there";

  return (
    <div className={styles.container}>
      <button className={styles.closeButton}>✕</button>

      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <Image
            src="/idrx-logo-official.png"  // nanti upload logo biru glossy ini
            alt="IDRX"
            width={140}
            height={140}
            priority
            className={styles.logo}
          />
          <h1 className={styles.title}>
            INDONESIAN RUPIAH-<br />BACKED STABLECOIN
          </h1>
          <p className={styles.subtitle}>
            Designed for rapid, global transactions and 24/7 access to financial markets, 
            IDRX is a regulated digital asset that offers seamless conversions and can be 
            redeemed at a fixed rate for Indonesian Rupiah.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={styles.buttons}>
          <a href="https://app.idrx.co" className={styles.primaryBtn}>
            Get IDRX
          </a>
          <a href="https://docs.idrx.co" className={styles.secondaryBtn}>
            Read Docs
          </a>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <a href="https://home.idrx.co/en">Why IDRX</a>
          <a href="https://home.idrx.co/en#features">Features</a>
          <a href="https://docs.idrx.co">Docs</a>
          <a href="https://home.idrx.co/en#utility">Utility</a>
          <a href="https://home.idrx.co/en#faq">FAQ</a>
          <a href="https://app.idrx.co/register">Register</a>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>Hai {userName} 👋 • IDRX — Rupiah Stablecoin Resmi Indonesia</p>
        </footer>
      </div>
    </div>
  );
}