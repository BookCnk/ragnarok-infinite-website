"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  Home,
  Newspaper,
  BookOpen,
  Swords,
  Gamepad2,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import styles from "./game-navbar.module.css";

interface NavMenuItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const menuItems: NavMenuItem[] = [
  { label: "หน้าแรก", href: "/", icon: Home },
  { label: "ข่าวสาร", href: "/event", icon: Newspaper },
  { label: "แนะนำเกม", href: "/#guide", icon: BookOpen },
  { label: "อาชีพ", href: "/#classes", icon: Swords },
  { label: "ระบบเกม", href: "/#systems", icon: Gamepad2 },
];

export function GameNavbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);


  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
    >
      <nav aria-label="เมนูหลัก Ragnarok Infinite" className={styles.navBar}>
        {/* Top Center Golden Diamond Accent */}
        <div aria-hidden="true" className={styles.topOrnament} />

        {/* Left Side: Brand Logo + Live Server Status */}
        <div className={styles.leftGroup}>
          <Link href="/" className={styles.brandLink} aria-label="Ragnarok Infinite หน้าแรก">
            <Image
              src="/images/brand/logo.png"
              alt="Ragnarok Infinite"
              width={112}
              height={32}
              priority
              className={styles.brandLogo}
            />
          </Link>

          <span aria-hidden="true" className={styles.brandDivider} />

          <div className={styles.serverStatus} title="สถานะเซิร์ฟเวอร์: เปิดให้บริการปกติ">
            <span className={styles.statusPulse} aria-hidden="true">
              <span className={styles.statusDot} />
            </span>
            <span className={styles.statusText}>ONLINE</span>
          </div>
        </div>

        {/* Center: Desktop Navigation Items */}
        <div className={styles.menuList}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href) ||
                  (item.href === "/event" && pathname.startsWith("/news"));

            if (isActive) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${styles.menuLink} ${styles.activeLink}`}
                >
                  <Icon aria-hidden="true" className={styles.menuIcon} />
                  <span className={styles.menuText}>{item.label}</span>
                  <span aria-hidden="true" className={styles.activeGlowFlare} />
                </Link>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={styles.menuLink}
              >
                <Icon aria-hidden="true" className={styles.menuIconMuted} />
                <span className={styles.menuText}>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right Side: Social Media Capsule + Gold Download CTA */}
        <div className={styles.rightGroup}>
          {/* Social Icons Capsule */}
          <div className={styles.socialCapsule}>
            {/* Discord */}
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord Community"
              className={`${styles.socialBtn} ${styles.discordBtn}`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialSvg}>
                <path
                  fill="currentColor"
                  d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Fanpage"
              className={`${styles.socialBtn} ${styles.facebookBtn}`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialSvg}>
                <path
                  fill="currentColor"
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className={`${styles.socialBtn} ${styles.youtubeBtn}`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialSvg}>
                <path
                  fill="currentColor"
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>

            {/* Line */}
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LINE Official Account"
              className={`${styles.socialBtn} ${styles.lineBtn}`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialSvg}>
                <path
                  fill="currentColor"
                  d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.019 9.587.39.085.922.26 1.057.595.122.298.08.766.04 1.068l-.176 1.057c-.053.323-.245 1.262 1.104.688 1.349-.574 7.288-4.292 9.945-7.348C23.328 14.341 24 12.43 24 10.304z"
                />
              </svg>
            </a>
          </div>

          {/* Graphic Fantasy Download CTA Button */}
          <Link
            href="/download"
            className={styles.graphicDownloadBtn}
            aria-label="ดาวน์โหลดเกม Ragnarok Infinite"
          >
            <Image
              src="/images/ui/image.png"
              alt="ดาวน์โหลดเกม"
              width={2172}
              height={724}
              priority
              className={styles.graphicDownloadImg}
            />
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "ปิดเมนู" : "เปิดเมนูหลัก"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.mobileToggleBtn}
          >
            {mobileMenuOpen ? (
              <X aria-hidden="true" className={styles.toggleIcon} />
            ) : (
              <Menu aria-hidden="true" className={styles.toggleIcon} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className={styles.mobileBackdrop}
            aria-hidden="true"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className={styles.mobileDrawer}>
            <div className={styles.mobileDrawerHeader}>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={styles.mobileDrawerBrand}
              >
                <Image
                  src="/images/brand/logo.png"
                  alt="Ragnarok Infinite"
                  width={100}
                  height={28}
                  className={styles.brandLogo}
                />
              </Link>
              <div className={styles.serverStatus}>
                <span className={styles.statusPulse} aria-hidden="true">
                  <span className={styles.statusDot} />
                </span>
                <span className={styles.statusText}>ONLINE</span>
              </div>
            </div>

            <div className={styles.mobileMenuList}>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href) ||
                      (item.href === "/event" && pathname.startsWith("/news"));

                return (
                  <Link
                    key={`mobile-${item.label}`}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`${styles.mobileMenuItem} ${
                      isActive ? styles.mobileActiveItem : ""
                    }`}
                  >
                    <div className={styles.mobileItemLabelGroup}>
                      <Icon aria-hidden="true" className={styles.mobileItemIcon} />
                      <span>{item.label}</span>
                    </div>
                    {isActive ? (
                      <span className={styles.mobileActiveDot} aria-hidden="true" />
                    ) : (
                      <ChevronRight aria-hidden="true" className={styles.mobileChevron} />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className={styles.mobileDrawerFooter}>
              <Link
                href="/download"
                onClick={() => setMobileMenuOpen(false)}
                className={styles.mobileGraphicDownloadBtn}
                aria-label="ดาวน์โหลดเกม Ragnarok Infinite"
              >
                <Image
                  src="/images/ui/image.png"
                  alt="ดาวน์โหลดเกม"
                  width={2172}
                  height={724}
                  className={styles.mobileGraphicDownloadImg}
                />
              </Link>

              {/* Mobile Social Links Row */}
              <div className={styles.mobileSocialRow}>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord"
                  className={`${styles.mobileSocialBtn} ${styles.discordBtn}`}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialSvg}>
                    <path
                      fill="currentColor"
                      d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                    />
                  </svg>
                  <span>Discord</span>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={`${styles.mobileSocialBtn} ${styles.facebookBtn}`}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialSvg}>
                    <path
                      fill="currentColor"
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                  <span>Facebook</span>
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className={`${styles.mobileSocialBtn} ${styles.youtubeBtn}`}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialSvg}>
                    <path
                      fill="currentColor"
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    />
                  </svg>
                  <span>YouTube</span>
                </a>

                <a
                  href="https://line.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LINE"
                  className={`${styles.mobileSocialBtn} ${styles.lineBtn}`}
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.socialSvg}>
                    <path
                      fill="currentColor"
                      d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.019 9.587.39.085.922.26 1.057.595.122.298.08.766.04 1.068l-.176 1.057c-.053.323-.245 1.262 1.104.688 1.349-.574 7.288-4.292 9.945-7.348C23.328 14.341 24 12.43 24 10.304z"
                    />
                  </svg>
                  <span>LINE</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
