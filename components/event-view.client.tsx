"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Newspaper,
  Sparkles,
  RefreshCw,
  Megaphone,
  BookOpen,
  Search,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import styles from "./event-page.module.css";

interface CategoryTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const tabs: CategoryTab[] = [
  { id: "all", label: "ทั้งหมด", icon: Layers },
  { id: "news", label: "ข่าวสาร", icon: Newspaper },
  { id: "event", label: "กิจกรรม", icon: Sparkles },
  { id: "update", label: "อัปเดต", icon: RefreshCw },
  { id: "announce", label: "ประกาศ", icon: Megaphone },
  { id: "guide", label: "ไกด์เกม", icon: BookOpen },
];

const featuredSlides = [
  {
    id: 1,
    badge: "EVENT",
    title: "เทศกาลเริ่มต้นครั้งใหม่ ผจญภัยไปด้วยกัน!",
    desc: "ร่วมกิจกรรมต้อนรับเปิดเซิร์ฟเวอร์ รับไอเทมสุดพิเศษมากมาย",
    date: "20 ต.ค. 2026",
    bg: "/images/event/bg.png",
    href: "#",
  },
  {
    id: 2,
    badge: "EVENT",
    title: "ศึกชิงปราสาทกิลด์วอร์ War of Emperium ซีซั่น 1",
    desc: "ชิงเงินรางวัลรวมกว่า 500,000 บาท ทุกวันพุธและอาทิตย์",
    date: "25 ต.ค. 2026",
    bg: "/images/event/mvp.jpg",
    href: "#",
  },
  {
    id: 3,
    badge: "UPDATE",
    title: "กิจกรรมคูณ EXP & Drop x2 ต้อนรับสุดสัปดาห์",
    desc: "เก็บเลเวลไว ไอเทมดรอปกระจาย ทุกแมพตลอด 48 ชม.",
    date: "28 ต.ค. 2026",
    bg: "/images/event/chest.jpg",
    href: "#",
  },
];

const sideNews = [
  {
    id: 1,
    category: "update",
    badgeType: "update",
    badgeLabel: "UPDATE",
    title: "อัปเดตแพทช์ครั้งที่ 1.0.0",
    desc: "พบฟีเจอร์ใหม่ อาชีพใหม่ และระบบความท้าทายมากมาย",
    date: "18 ต.ค. 2026",
    image: "/images/event/bg.png",
    href: "#",
  },
  {
    id: 2,
    category: "event",
    badgeType: "event",
    badgeLabel: "EVENT",
    title: "กิจกรรมล็อกอิน 7 วัน รับไอเทมฟรีทุกวัน!",
    desc: "รับ Poring Box และยาบัฟสุดพรีเมียม",
    date: "15 ต.ค. 2026",
    image: "/images/event/poring-gift.jpg",
    href: "#",
  },
  {
    id: 3,
    category: "news",
    badgeType: "news",
    badgeLabel: "NEWS",
    title: "ประกาศเปิดให้บริการ Ragnarok III Infinite อย่างเป็นทางการ",
    desc: "เปิดประตูสู่การผจญภัยพร้อมกันทั่วประเทศ",
    date: "10 ต.ค. 2026",
    image: "/images/event/photo.jpg",
    href: "#",
  },
];

const ongoingEvents = [
  {
    id: 1,
    badgeLabel: "EVENT",
    title: "กิจกรรมล่า MVP รับไอเทมระดับตำนาน",
    desc: "ล่าบอสสุดโหด ดรอปการ์ด MVP & อาวุธเทียร์สูง",
    image: "/images/event/mvp.jpg",
    href: "#",
  },
  {
    id: 2,
    badgeLabel: "EVENT",
    title: "ภารกิจรายวัน สะสมแต้มแลกของรางวัล",
    desc: "ทำเควสต์กิลด์ สะสมคะแนนแลกคอสตูมสุดลิมิเต็ด",
    image: "/images/event/chest.jpg",
    href: "#",
  },
  {
    id: 3,
    badgeLabel: "EVENT",
    title: "กิจกรรมถ่ายภาพ มุมโปรดแห่ง Rune-Midgard",
    desc: "แชร์ภาพความทรงจำ ลุ้นรับรางวัล Cash Points",
    image: "/images/event/photo.jpg",
    href: "#",
  },
];

export function EventView() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);

  const currentSlide = featuredSlides[slideIndex];

  const filteredSideNews = sideNews.filter((item) => {
    const matchesTab = activeTab === "all" || item.category === activeTab;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % featuredSlides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 1 + featuredSlides.length) % featuredSlides.length);
  };

  return (
    <>
      {/* Category Tabs & Search Bar */}
      <nav aria-label="หมวดหมู่ข่าวสารและกิจกรรม" className={styles.filterBar}>
        <div className={styles.tabsList}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
              >
                <Icon className={styles.tabIcon} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className={styles.searchWrapper}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ค้นหาข่าวสาร..."
            className={styles.searchInput}
          />
          <Search className={styles.searchIcon} />
        </div>
      </nav>

      {/* Main Grid: Featured Carousel + 3 Side Cards */}
      <section aria-label="ข่าวเด่นและกิจกรรมไฮไลต์" className={styles.mainGrid}>
        {/* Left: Featured Large Carousel Card */}
        <div className={styles.featuredCard}>
          {/* Corner Filigree Accents */}
          <div aria-hidden="true" className={styles.cornerTopLeft} />
          <div aria-hidden="true" className={styles.cornerTopRight} />
          <div aria-hidden="true" className={styles.cornerBottomLeft} />
          <div aria-hidden="true" className={styles.cornerBottomRight} />

          {/* Background Image */}
          <Image
            src={currentSlide.bg}
            alt={currentSlide.title}
            fill
            priority
            className={styles.featuredBg}
          />

          <div aria-hidden="true" className={styles.featuredOverlay} />

          {/* Carousel Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="กิจกรรมก่อนหน้า"
            className={`${styles.carouselArrow} ${styles.carouselPrev}`}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="กิจกรรมถัดไป"
            className={`${styles.carouselArrow} ${styles.carouselNext}`}
          >
            <ChevronRight size={18} />
          </button>

          {/* Content */}
          <div className={styles.featuredContent}>
            <span className={styles.badgeEvent}>{currentSlide.badge}</span>
            <h2 className={styles.featuredTitle}>{currentSlide.title}</h2>
            <p className={styles.featuredDesc}>{currentSlide.desc}</p>
            <div className={styles.featuredDate}>
              <Calendar size={13} />
              <span>{currentSlide.date}</span>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className={styles.carouselDots}>
            {featuredSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setSlideIndex(idx)}
                aria-label={`ไปที่สไลด์ ${idx + 1}`}
                className={`${styles.dot} ${idx === slideIndex ? styles.dotActive : ""}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Stack of 3 Compact News Cards */}
        <div className={styles.sideList}>
          {filteredSideNews.length > 0 ? (
            filteredSideNews.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={styles.sideCard}
              >
                {/* Thumbnail */}
                <div className={styles.sideThumb}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="120px"
                    className={styles.sideThumbImg}
                  />
                </div>

                {/* Info */}
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
                  <h3 className={styles.sideTitle}>{item.title}</h3>
                  <p className={styles.sideDesc}>{item.desc}</p>
                  <div className={styles.sideDate}>
                    <Calendar size={11} />
                    <span>{item.date}</span>
                  </div>
                </div>

                <ChevronRight className={styles.chevronIcon} />
              </Link>
            ))
          ) : (
            <div className="flex min-h-[220px] items-center justify-center rounded-lg border border-dashed border-border p-6 text-center text-xs text-muted">
              ไม่พบข่าวสารหรือกิจกรรมในหมวดหมู่นี้
            </div>
          )}
        </div>
      </section>

      {/* Lower Section: Ongoing Events Grid */}
      <section aria-labelledby="ongoing-events-title" className="mt-4">
        <div className={styles.sectionHeader}>
          <h2 id="ongoing-events-title" className={styles.sectionTitle}>
            <span aria-hidden="true" className={styles.sectionTitleIcon}>✦</span>
            <span>กิจกรรมที่กำลังจัดในปัจจุบัน</span>
          </h2>
          <Link href="#all" className={styles.viewAllLink}>
            <span>ดูทั้งหมด</span>
            <ChevronRight size={14} />
          </Link>
        </div>

        <div className={styles.eventsGrid}>
          {ongoingEvents.map((event) => (
            <Link
              key={event.id}
              href={event.href}
              className={styles.eventCard}
            >
              {/* Corner Filigree Accents */}
              <div aria-hidden="true" className={styles.cornerTopLeft} />
              <div aria-hidden="true" className={styles.cornerTopRight} />
              <div aria-hidden="true" className={styles.cornerBottomLeft} />
              <div aria-hidden="true" className={styles.cornerBottomRight} />

              {/* Background Art */}
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className={styles.eventCardBg}
              />

              <div aria-hidden="true" className={styles.eventCardOverlay} />

              <div className={styles.eventCardContent}>
                <span className={styles.badgeEvent}>{event.badgeLabel}</span>
                <h3 className={styles.eventCardTitle}>{event.title}</h3>
                <p className={styles.eventCardDesc}>{event.desc}</p>
              </div>

              <div aria-hidden="true" className={styles.eventCardAction}>
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
