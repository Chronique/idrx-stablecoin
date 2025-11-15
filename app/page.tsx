"use client";

import { useEffect } from "react";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import Image from "next/image";
import styles from "./page.module.css"; // nanti kita sesuaikan CSS-nya juga

export default function Home() {
  const { isFrameReady, setFrameReady, context } = useMiniKit();

  // Wajib: beri tahu MiniKit bahwa frame sudah siap render
  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady();
    }
  }, [isFrameReady, setFrameReady]);

  // Optional: ambil nama user kalau ada (Farcaster)
  const userName = context?.user?.displayName || "teman";

  return (
    <div className={styles.container}>
      {/* Close button — WAJIB ada di semua Mini App */}
      <button className={styles.closeButton} type="button">
        ✕
      </button>

      <div className={styles.scrollContent}>
        {/* Header */}
        <div className={styles.header}>
          <Image
            src="/idrx-logo.png" // taruh logo di /public/idrx-logo.png (512x512 idealnya)
            alt="IDRX Logo"
            width={80}
            height={80}
            priority
            className={styles.logo}
          />
          <h1 className={styles.title}>IDRX</h1>
          <p className={styles.tagline}>Rupiah Stablecoin untuk Web3 Indonesia</p>
          <p className={styles.greeting}>Hai {userName} 👋</p>
        </div>

        {/* What is IDRX */}
        <section className={styles.section}>
          <h2>Apa itu IDRX?</h2>
          <p className={styles.text}>
            IDRX adalah stablecoin berdenominasi Rupiah Indonesia (IDR) yang 
            di-backup 1:1 oleh aset rupiah di bank kustodian terdaftar OJK. 
            Dibuat transparan, auditable, dan siap dipakai di blockchain.
          </p>
        </section>

        {/* Features */}
        <section className={styles.section}>
          <h2>Fitur Utama</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.check}>✓</span> 1 IDRX = 1 Rupiah
            </div>
            <div className={styles.feature}>
              <span className={styles.check}>✓</span> Transparansi 100% (attestation tiap bulan)
            </div>
            <div className={styles.feature}>
              <span className={styles.check}>✓</span> Bisa dipakai di Ethereum, Base, Arbitrum, BSC
            </div>
            <div className={styles.feature}>
              <span className={styles.check}>✓</span> Mint & redeem langsung via website resmi
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className={styles.section}>
          <h2>Transparansi</h2>
          <p className={styles.text}>
            Setiap IDRX yang beredar dijamin oleh dana Rupiah di bank kustodian. 
            Laporan audit bulanan bisa di-download di bawah ini.
          </p>
          <a
            href="https://home.idrx.co/transparency-report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            Download Laporan Audit
          </a>
        </section>

        {/* Useful Links */}
        <section className={styles.section}>
          <h2>Pintasan Cepat</h2>
          <div className={styles.buttonGrid}>
            <a href="https://app.idrx.co" className={styles.secondaryButton}>
              Beli / Jual IDRX
            </a>
            <a href="https://home.idrx.co/en" className={styles.secondaryButton}>
              Website Resmi
            </a>
            <a href="https://twitter.com/idrx_nu" className={styles.secondaryButton}>
              Twitter @idrx_nu
            </a>
            <a href="https://t.me/idrx_nu" className={styles.secondaryButton}>
              Telegram
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>Dibuat dengan ❤️ untuk ekosistem Web3 Indonesia</p>
        </footer>
      </div>
    </div>
  );
}