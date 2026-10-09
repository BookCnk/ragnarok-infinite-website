import Image from "next/image";
import Link from "next/link";
import { Monitor, Sparkle } from "lucide-react";
import styles from "./game-hero.module.css";

const embers = Array.from({ length: 18 });

export function GameHero() {
  return (
    <section aria-labelledby="hero-title" className={`${styles.hero} bg-hero-surface text-hero-foreground`}>
      <Image
        src="/images/hero/bg.png"
        alt=""
        fill
        preload
        sizes="(max-width: 768px) 1800px, 100vw"
        className={styles.artwork}
      />
      <div aria-hidden="true" className={styles.shade} />
      <div aria-hidden="true" className={styles.embers}>
        {embers.map((_, index) => <span key={index} />)}
      </div>

      <div className={styles.content}>
        <Image
          src="/images/brand/logo.png"
          alt="Ragnarok Infinite"
          width={1774}
          height={887}
          sizes="(max-width: 768px) 88vw, 560px"
          className={styles.logo}
        />

        <h1 id="hero-title" className={styles.title}>
          ตำนานบทใหม่
          <span className={styles.subtitle}>
            <span aria-hidden="true" className={styles.ornament} />
            ที่ไม่มีที่สิ้นสุด
            <span aria-hidden="true" className={styles.ornament} />
          </span>
        </h1>
        <p className={styles.description}>ออกผจญภัยในโลกกว้าง ไปด้วยกันอีกครั้ง</p>

        {/* Glossy Graphic Action Buttons */}
        <div className={styles.actions}>
          <Link
            href="/download"
            className={`${styles.graphicActionBtn} ${styles.downloadAction}`}
            aria-label="ดาวน์โหลดเกม Ragnarok Infinite"
          >
            <div className={styles.graphicActionInner}>
              <Image
                src="/images/ui/dowload-btn.png"
                alt="ดาวน์โหลดเกม"
                width={2172}
                height={724}
                priority
                className={styles.graphicActionImg}
              />
              {/* Glossy Reflections & Shimmer Light Sweeps */}
              <span aria-hidden="true" className={styles.glossGlassReflection} />
              <span aria-hidden="true" className={styles.glossShine} />
              <span aria-hidden="true" className={styles.glossSparkle} />
            </div>
          </Link>

          <Link
            href="/login"
            className={`${styles.graphicActionBtn} ${styles.loginAction}`}
            aria-label="เข้าสู่ระบบ Ragnarok Infinite"
          >
            <div className={styles.graphicActionInner}>
              <Image
                src="/images/ui/login-btn.png"
                alt="เข้าสู่ระบบ"
                width={2172}
                height={724}
                priority
                className={styles.graphicActionImg}
              />
              {/* Glossy Reflections & Shimmer Light Sweeps */}
              <span aria-hidden="true" className={styles.glossGlassReflection} />
              <span aria-hidden="true" className={`${styles.glossShine} ${styles.glossShineOffset}`} />
              <span aria-hidden="true" className={`${styles.glossSparkle} ${styles.glossSparkleOffset}`} />
            </div>
          </Link>
        </div>

        <div className={styles.platform}>
          <Monitor aria-hidden="true" size={25} strokeWidth={1.5} />
          <span>Windows <span className={styles.platformDetail}>PC · Windows 10 / 11</span></span>
          <span aria-hidden="true" className={styles.platformDivider} />
          <span className={styles.invitation}><Sparkle aria-hidden="true" size={15} /> การผจญภัยครั้งใหม่รอคุณอยู่</span>
        </div>
      </div>
    </section>
  );
}
