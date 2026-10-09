import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, ChevronRight, ArrowRight } from "lucide-react";
import styles from "./home-news-section.module.css";

const previewNews = [
  {
    id: 1,
    badgeType: "update",
    badgeLabel: "UPDATE",
    title: "อัปเดตแพทช์ครั้งที่ 1.0.0",
    desc: "พบฟีเจอร์ใหม่ อาชีพใหม่ และระบบความท้าทายมากมาย",
    date: "18 ต.ค. 2026",
    image: "/images/event/bg.png",
    href: "/event",
  },
  {
    id: 2,
    badgeType: "event",
    badgeLabel: "EVENT",
    title: "กิจกรรมล็อกอิน 7 วัน รับไอเทมฟรีทุกวัน!",
    desc: "รับ Poring Box และยาบัฟสุดพรีเมียม",
    date: "15 ต.ค. 2026",
    image: "/images/event/poring-gift.jpg",
    href: "/event",
  },
  {
    id: 3,
    badgeType: "news",
    badgeLabel: "NEWS",
    title: "ประกาศเปิดให้บริการอย่างเป็นทางการ",
    desc: "เปิดประตูสู่การผจญภัยพร้อมกันทั่วประเทศ",
    date: "10 ต.ค. 2026",
    image: "/images/event/photo.jpg",
    href: "/event",
  },
];

export function HomeNewsSection() {
  return (
    <section id="news" aria-labelledby="home-news-title" className={`${styles.section} motion-section`}>
      {/* Night Background Artwork */}
      <Image
        src="/images/event/bg.png"
        alt="Ragnarok Infinite Events Background"
        fill
        sizes="100vw"
        className={styles.bgArtwork}
      />

      <div aria-hidden="true" className={styles.overlay} />

      <div className={styles.container}>
        {/* Header Row */}
        <div className={styles.headerRow}>
          <div className={styles.titleArea}>
            <span className={styles.badge}>
              <Sparkles className={styles.badgeIcon} />
              <span>LATEST NEWS &amp; EVENTS</span>
            </span>
            <h2 id="home-news-title" className={styles.heading}>
              ข่าวสาร &amp; กิจกรรมล่าสุด <span className={styles.headingHighlight}>Ragnarok Infinite</span>
            </h2>
            <p className={styles.subheading}>
              ติดตามความเคลื่อนไหว อัปเดตแพทช์ และกิจกรรมพิเศษต้อนรับเปิดเซิร์ฟเวอร์
            </p>
          </div>

          <Link href="/event" className={styles.viewMoreBtn}>
            <span>ดูเพิ่มเติม</span>
            <ChevronRight size={16} />
          </Link>
        </div>

        {/* Grid: Featured Left + 3 Side Cards Right */}
        <div className={styles.grid}>
          {/* Featured Hero Card */}
          <Link href="/event" className={styles.featuredCard}>
            {/* Corner Filigree Accents */}
            <div aria-hidden="true" className={styles.cornerTopLeft} />
            <div aria-hidden="true" className={styles.cornerTopRight} />
            <div aria-hidden="true" className={styles.cornerBottomLeft} />
            <div aria-hidden="true" className={styles.cornerBottomRight} />

            <Image
              src="/images/event/bg.png"
              alt="เทศกาลเริ่มต้นครั้งใหม่ ผจญภัยไปด้วยกัน!"
              fill
              sizes="(max-width: 860px) 100vw, 680px"
              className={styles.featuredBg}
            />

            <div aria-hidden="true" className={styles.featuredOverlay} />

            <div className={styles.featuredContent}>
              <span className={styles.badgeEvent}>EVENT</span>
              <h3 className={styles.featuredTitle}>
                เทศกาลเริ่มต้นครั้งใหม่ ผจญภัยไปด้วยกัน!
              </h3>
              <p className={styles.featuredDesc}>
                ร่วมกิจกรรมต้อนรับเปิดเซิร์ฟเวอร์ รับไอเทมสุดพิเศษมากมาย
              </p>
              <div className={styles.metaRow}>
                <span className={styles.date}>
                  <Calendar size={12} />
                  <span>20 ต.ค. 2026</span>
                </span>
                <span className={styles.readMoreText}>
                  <span>อ่านรายละเอียด</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </Link>

          {/* 3 Compact Cards */}
          <div className={`${styles.sideList} motion-stagger`}>
            {previewNews.map((item) => (
              <Link key={item.id} href={item.href} className={styles.sideCard}>
                <div className={styles.sideThumb}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="100px"
                    className={styles.sideThumbImg}
                  />
                </div>

                <div className={styles.sideInfo}>
                  <span
                    className={
                      item.badgeType === "update"
                        ? styles.badgeUpdate
                        : item.badgeType === "news"
                        ? styles.badgeNews
                        : styles.badgeEvent
                    }
                  >
                    {item.badgeLabel}
                  </span>
                  <h4 className={styles.sideTitle}>{item.title}</h4>
                  <p className={styles.sideDesc}>{item.desc}</p>
                  <div className={styles.sideDate}>
                    <Calendar size={11} />
                    <span>{item.date}</span>
                  </div>
                </div>

                <ChevronRight className={styles.chevronIcon} />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA for Mobile & Tablet */}
        <div className={styles.bottomCtaRow}>
          <Link href="/event" className={styles.bottomCtaBtn}>
            <span>ดูข่าวสารและกิจกรรมทั้งหมด</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
