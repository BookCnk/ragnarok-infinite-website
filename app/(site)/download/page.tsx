import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, BookOpen } from "lucide-react";
import { GameNavbar } from "@/components/game-navbar";
import styles from "@/components/download-page.module.css";

export const metadata: Metadata = {
  title: "ดาวน์โหลดเกม · Ragnarok Infinite (PC Client)",
  description:
    "ดาวน์โหลดตัวเกม Ragnarok Infinite เวอร์ชั่น 1.0.0 ล่าสุด ปลอดภัย 100% ไร้ไวรัส ออกเดินทางสู่โลกแห่งการผจญภัยครั้งใหม่",
};

const minSpecs = [
  { label: "OS", value: "Windows 10 (64-bit)" },
  { label: "CPU", value: "Intel Core i3-6100 / AMD Ryzen 3 1200" },
  { label: "RAM", value: "8 GB" },
  { label: "GPU", value: "NVIDIA GTX 750 Ti / AMD R7 260X" },
  { label: "Storage", value: "30 GB ขึ้นไป" },
];

const recSpecs = [
  { label: "OS", value: "Windows 10/11 (64-bit)" },
  { label: "CPU", value: "Intel Core i5-9400F / AMD Ryzen 5 3600" },
  { label: "RAM", value: "16 GB" },
  { label: "GPU", value: "NVIDIA GTX 1660 / AMD RX 5600 XT" },
  { label: "Storage", value: "30 GB SSD" },
];

export default function DownloadPage() {
  return (
    <div className={styles.page}>
      {/* Fixed Centered Fantasy Navigation Bar */}
      <GameNavbar />

      {/* Background Anime Artwork */}
      <Image
        src="/images/hero/bg.png"
        alt="Ragnarok Infinite Download Background"
        fill
        priority
        className={styles.bgArtwork}
      />

      {/* Atmospheric Vignette & Contrast Overlay */}
      <div aria-hidden="true" className={styles.overlay} />

      {/* Main Centered Container */}
      <main className={styles.container}>
        {/* Game Brand Logo */}
        <div className={styles.logoWrapper}>
          <Link href="/" aria-label="กลับสู่หน้าแรก Ragnarok Infinite">
            <Image
              src="/images/brand/logo.png"
              alt="Ragnarok Infinite Logo"
              width={290}
              height={145}
              priority
              className={styles.logo}
            />
          </Link>
        </div>

        {/* Title & Subtitle */}
        <div className={styles.titleLine}>
          <span aria-hidden="true" className={styles.goldDivider} />
          <h1 className={styles.mainTitle}>ดาวน์โหลดเกม</h1>
          <span aria-hidden="true" className={styles.goldDivider} />
        </div>
        <p className={styles.subTitle}>✦ ออกเดินทางสู่โลกแห่งการผจญภัยครั้งใหม่ ✦</p>

        {/* Primary Download HUD Card */}
        <section aria-label="ดาวน์โหลดไคลเอนต์เกม" className={`${styles.hudCard} ${styles.downloadCard}`}>
          {/* Corner Filigree Accents */}
          <div aria-hidden="true" className={styles.cornerTopLeft} />
          <div aria-hidden="true" className={styles.cornerTopRight} />
          <div aria-hidden="true" className={styles.cornerBottomLeft} />
          <div aria-hidden="true" className={styles.cornerBottomRight} />

          {/* Windows Platform Header */}
          <div className={styles.platformHeader}>
            {/* Windows 4-square icon */}
            <svg
              aria-hidden="true"
              viewBox="0 0 88 88"
              className={styles.windowsLogo}
            >
              <path
                fill="currentColor"
                d="M0 12.402l35.689-4.86.016 34.423-35.67.243zm35.67 33.529l.029 34.453-35.687-4.908-.012-29.78zm5.297-39.294l47.033-6.637v41.674l-47.033.153zm47.033 43.152l-.01 41.811-47.023-6.611-.072-35.15z"
              />
            </svg>
            <div className={styles.platformInfo}>
              <h2 className={styles.platformTitle}>Windows</h2>
              <span className={styles.platformSubtitle}>PC CLIENT</span>
            </div>
          </div>

          {/* Golden Download CTA Button */}
          <a
            href="/download/installer.exe"
            className={styles.goldDownloadBtn}
            download
          >
            <Download aria-hidden="true" className={styles.downloadIcon} strokeWidth={2.8} />
            <span>ดาวน์โหลดเกม</span>
          </a>

          {/* Metadata Row */}
          <div className={styles.metaRow}>
            <span>ขนาดไฟล์ : 12.8 GB</span>
            <span aria-hidden="true" className={styles.metaSeparator}>|</span>
            <span>เวอร์ชันล่าสุด : 1.0.0</span>
          </div>

          {/* Guide Link */}
          <Link href="#guide" className={styles.guideLink}>
            <span>ดูคู่มือการติดตั้ง &gt;</span>
          </Link>
        </section>

        {/* System Requirements HUD Card */}
        <section aria-label="ความต้องการระบบ" className={`${styles.hudCard} ${styles.specsCard}`}>
          {/* Corner Filigree Accents */}
          <div aria-hidden="true" className={styles.cornerTopLeft} />
          <div aria-hidden="true" className={styles.cornerTopRight} />
          <div aria-hidden="true" className={styles.cornerBottomLeft} />
          <div aria-hidden="true" className={styles.cornerBottomRight} />

          {/* Header */}
          <div className={styles.specsHeader}>
            <BookOpen aria-hidden="true" className={styles.specsHeaderIcon} />
            <h2>ความต้องการระบบ</h2>
          </div>

          {/* 2-Column Grid */}
          <div className={styles.specsGrid}>
            {/* Minimum Specs */}
            <div>
              <h3 className={styles.specColTitle}>ขั้นต่ำ (Minimum)</h3>
              <div className={styles.specTable}>
                {minSpecs.map((item) => (
                  <div key={item.label} className={styles.specRow}>
                    <span className={styles.specLabel}>{item.label}</span>
                    <span className={styles.specValue}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Specs */}
            <div>
              <h3 className={`${styles.specColTitle} ${styles.specColTitleRecommended}`}>
                แนะนำ (Recommended)
              </h3>
              <div className={styles.specTable}>
                {recSpecs.map((item) => (
                  <div key={item.label} className={styles.specRow}>
                    <span className={styles.specLabel}>{item.label}</span>
                    <span className={styles.specValue}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
