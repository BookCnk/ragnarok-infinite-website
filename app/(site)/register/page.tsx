import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/server/auth";
import { GameNavbar } from "@/components/game-navbar";
import { RegisterForm } from "./register-form.client";
import styles from "@/components/auth-card.module.css";

export const metadata: Metadata = {
  title: "สมัครสมาชิก | Ragnarok Infinite",
  description: "สมัครสมาชิก Ragnarok Infinite เริ่มต้นการผจญภัยครั้งใหม่ไปด้วยกัน สัมผัสโลกแฟนตาซีสุดคลาสสิก",
};

export default async function RegisterPage() {
  if (await getCurrentUser()) {
    redirect("/dashboard");
  }

  return (
    <div className={styles.page}>
      {/* Top Navigation Bar */}
      <GameNavbar />

      {/* Background Anime Artwork */}
      <Image
        src="/images/dowlaod/bg.png"
        alt="Ragnarok Infinite Register Background"
        fill
        priority
        className={styles.bgArtwork}
      />

      {/* Atmospheric Vignette & Contrast Overlay */}
      <div aria-hidden="true" className={styles.overlay} />

      {/* Main Container */}
      <main className={styles.container}>
        {/* Game Brand Logo */}
        <div className={styles.logoWrapper}>
          <Link href="/" aria-label="กลับสู่หน้าแรก Ragnarok Infinite">
            <Image
              src="/images/brand/logo.png"
              alt="Ragnarok Infinite Logo"
              width={280}
              height={140}
              priority
              className={styles.logo}
            />
          </Link>
        </div>

        {/* Title & Subtitle */}
        <div className={styles.titleLine}>
          <span aria-hidden="true" className={styles.goldDivider} />
          <h1 className={styles.mainTitle}>สมัครสมาชิก</h1>
          <span aria-hidden="true" className={styles.goldDivider} />
        </div>
        <p className={styles.subTitle}>✦ เริ่มต้นการผจญภัยครั้งใหม่ไปด้วยกัน ✦</p>

        {/* Client Form Card */}
        <RegisterForm />
      </main>
    </div>
  );
}
