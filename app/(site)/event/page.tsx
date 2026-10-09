import type { Metadata } from "next";
import Image from "next/image";
import { GameNavbar } from "@/components/game-navbar";
import { EventView } from "@/components/event-view.client";
import styles from "@/components/event-page.module.css";

export const metadata: Metadata = {
  title: "ข่าวสาร & กิจกรรม · Ragnarok Infinite",
  description:
    "อัปเดตทุกความเคลื่อนไหว กิจกรรมล่าสุด และสิ่งน่าสนใจจาก Ragnarok III Infinite ต้อนรับนักผจญภัยสู่โลกแห่งตำนาน",
};

export default function EventPage() {
  return (
    <div className={styles.page}>
      {/* Fixed Centered Fantasy Navigation Bar */}
      <GameNavbar />

      {/* Atmospheric Night Background Artwork */}
      <Image
        src="/images/event/bg.png"
        alt="Ragnarok Infinite Events Background"
        fill
        priority
        className={styles.bgArtwork}
      />

      {/* Vignette Overlay */}
      <div aria-hidden="true" className={styles.overlay} />

      {/* Main Container */}
      <main className={styles.container}>
        {/* Header Row: Title on Left, Girl Artwork on Right */}
        <div className={styles.headerRow}>
          <div className={styles.titleGroup}>
            <h1 className={styles.mainTitle}>ข่าวสาร &amp; กิจกรรม</h1>
            <div className={styles.titleDecor}>
              <span aria-hidden="true" className={styles.decorLine} />
              <span className={styles.decorText}>NEWS &amp; EVENTS</span>
              <span aria-hidden="true" className={styles.decorLine} />
            </div>
            <p className={styles.subTitle}>
              อัปเดตทุกความเคลื่อนไหว กิจกรรมล่าสุด และสิ่งน่าสนใจจาก Ragnarok III Infinite
            </p>
          </div>

          {/* Right Header Character Artwork */}
          <div className={styles.headerArtWrapper}>
            <Image
              src="/images/hero/bg.png"
              alt="Adventurer Mascot"
              fill
              priority
              sizes="320px"
              className={styles.headerArt}
            />
          </div>
        </div>

        {/* Interactive Event View: Tabs, Search, Carousel & Cards */}
        <EventView />
      </main>
    </div>
  );
}
