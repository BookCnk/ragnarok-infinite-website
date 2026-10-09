import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Zap,
  Swords,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import styles from "./game-footer.module.css";

const quickLinks = [
  { label: "หน้าแรก", href: "/" },
  { label: "ข่าวสารและกิจกรรม", href: "/event" },
  { label: "ดาวน์โหลดตัวเกม (PC)", href: "/download" },
  { label: "สมัครสมาชิกใหม่", href: "/register" },
  { label: "เข้าสู่ระบบสมาชิก", href: "/login" },
];

const communityLinks = [
  {
    label: "Discord Community",
    sub: "พูดคุย หาปาร์ตี้ & รับบทบาทกิลด์",
    href: "https://discord.com",
    badge: "10K+ สมาชิก",
    brand: "discord",
  },
  {
    label: "Facebook Fanpage",
    sub: "ข่าวสาร อัปเดตแพตช์ และกิจกรรมแจกไอเทม",
    href: "https://facebook.com",
    badge: "Official",
    brand: "facebook",
  },
  {
    label: "YouTube Channel",
    sub: "ไฮไลต์กิลด์วอร์ และคู่มือเจาะลึกอาชีพ",
    href: "https://youtube.com",
    badge: "Video",
    brand: "youtube",
  },
  {
    label: "LINE Official Account",
    sub: "แจ้งปัญหา ติดต่อแอดมิน ตลอด 24 ชม.",
    href: "https://line.me",
    badge: "Support 24/7",
    brand: "line",
  },
];

const securityBadges = [
  {
    icon: Shield,
    title: "Gepard Shield 3.0",
    desc: "ระบบป้องกันบอทและโปรแกรมช่วยเล่น 100%",
  },
  {
    icon: Zap,
    title: "Dedicated Anti-DDoS",
    desc: "เซิร์ฟเวอร์เสถียร ลื่นไหล ไร้สะดุด 24/7",
  },
  {
    icon: Swords,
    title: "War of Emperium S1",
    desc: "ชิงเงินรางวัลรวมกว่า 500,000 บาท",
  },
];

export function GameFooter() {
  return (
    <footer id="contact" className={styles.footer}>
      {/* Top Center Golden Diamond Ornament */}
      <div aria-hidden="true" className={styles.topOrnament} />

      <div className={styles.container}>
        {/* Main 4-Column Grid */}
        <div className={styles.grid} data-motion="stagger">
          {/* Column 1: Brand & Lore */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLink} aria-label="Ragnarok Infinite หน้าแรก">
              <Image
                src="/images/brand/logo.png"
                alt="Ragnarok Infinite"
                width={130}
                height={38}
                className={styles.brandLogo}
              />
            </Link>
            <p className={styles.brandTagline}>
              ตำนานบทใหม่ที่ไม่มีที่สิ้นสุด · Classic Revo EP. 4.0
            </p>
            <p className={styles.brandDesc}>
              เปิดประตูสู่ดินแดน Midgard อีกครั้ง สัมผัสความสนุกแบบคลาสสิกที่แท้จริง
              ระบบเสถียร ไร้บอท ไร้โปร พร้อมสงครามกิลด์วอร์สุดมันส์และคอมมูนิตี้ผู้เล่นที่อบอุ่นที่สุด
            </p>

            {/* Server Online Status Pill */}
            <div className={styles.statusPill}>
              <span className={styles.statusPulse} aria-hidden="true">
                <span className={styles.statusDot} />
              </span>
              <span className={styles.statusText}>SERVER ONLINE · 99.9% UPTIME</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.navCol}>
            <h3 className={styles.colTitle}>
              <span aria-hidden="true" className={styles.titleJewel} />
              เมนูนำทาง
            </h3>
            <ul className={styles.linkList}>
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.navLink}>
                    <span aria-hidden="true" className={styles.linkBullet}>›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Community & Socials */}
          <div className={styles.communityCol}>
            <h3 className={styles.colTitle}>
              <span aria-hidden="true" className={styles.titleJewel} />
              คอมมูนิตี้ทางการ
            </h3>
            <div className={styles.communityList}>
              {communityLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.communityCard} ${styles[`brand_${item.brand}`]}`}
                >
                  <div className={styles.communityInfo}>
                    <div className={styles.communityHeader}>
                      <span className={styles.communityTitle}>{item.label}</span>
                      <ExternalLink aria-hidden="true" className={styles.externalIcon} />
                    </div>
                    <span className={styles.communitySub}>{item.sub}</span>
                  </div>
                  <span className={styles.communityBadge}>{item.badge}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Security & Features */}
          <div className={styles.securityCol}>
            <h3 className={styles.colTitle}>
              <span aria-hidden="true" className={styles.titleJewel} />
              ความปลอดภัยและระบบ
            </h3>
            <div className={styles.badgeList}>
              {securityBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.title} className={styles.badgeCard}>
                    <div className={styles.badgeIconWrap}>
                      <Icon aria-hidden="true" className={styles.badgeIcon} />
                    </div>
                    <div className={styles.badgeContent}>
                      <h4 className={styles.badgeTitle}>{badge.title}</h4>
                      <p className={styles.badgeDesc}>{badge.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar / Sub-footer */}
        <div className={styles.bottomBar} data-motion="fade-up">
          <div className={styles.copyrightGroup}>
            <p className={styles.copyrightText}>
              © 2026 <strong>Ragnarok Infinite</strong>. All rights reserved.
            </p>
            <p className={styles.disclaimerText}>
              Ragnarok Online and related logos and characters are registered trademarks of Gravity Co., Ltd. &amp; Lee Myoungjin.
              This server is an independent private community project for entertainment purposes only and is not affiliated with or endorsed by Gravity Co., Ltd.
            </p>
          </div>

          {/* Back to Top */}
          <a
            href="#"
            aria-label="กลับสู่ด้านบนสุดของหน้า"
            className={styles.backToTopBtn}
          >
            <span>กลับสู่ด้านบน</span>
            <ChevronUp aria-hidden="true" className={styles.backToTopIcon} />
          </a>
        </div>
      </div>
    </footer>
  );
}
