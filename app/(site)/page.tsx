import type { Metadata } from "next";
import Link from "next/link";
import {
  Download,
  HardDrive,
  FileArchive,
  CheckCircle2,
  Coins,
  BookOpen,
  Server,
  Sparkles,
  Swords,
  Trophy,
  Laptop,
} from "lucide-react";
import { GameHero } from "@/components/game-hero";
import { GameNavbar } from "@/components/game-navbar";

export const metadata: Metadata = {
  title: "Ragnarok Infinite · Classic Revo EP. 4.0",
  description:
    "เซิร์ฟเวอร์ Ragnarok Online คลาสสิก ยุค 4.0 ระบบเสถียร ไร้บอท ไร้โปร ด้วย Gepard Shield 3.0 สนุกกับสงครามกิลด์วอร์ชิงเงินรางวัลรวมกว่า 500,000 บาท",
};

const serverRates = [
  { title: "Base EXP", value: "x5", desc: "สมดุลสำหรับสายฟาร์มและเก็บเลเวล" },
  { title: "Job EXP", value: "x5", desc: "อัปสกิลได้ต่อเนื่อง ไม่ติดขัด" },
  { title: "Etc Drop", value: "x3", desc: "ไอเทมขยะและของเควสต์หาง่าย" },
  { title: "Equipment Drop", value: "x3", desc: "อัตราดรอปอุปกรณ์กำลังดี" },
  { title: "Normal Card", value: "x1", desc: "การ์ดทั่วไปมีมูลค่าในตลาด" },
  { title: "MVP Drop", value: "x1", desc: "บอสล่าสนุก มีคุณค่าทุกชิ้น" },
];

const downloadSources = [
  {
    title: "Full Client Installer",
    version: "Version 4.0 (Latest)",
    size: "3.2 GB",
    desc: "ตัวเกมตัวเต็ม แตกไฟล์หรือติดตั้งแล้วเข้าเล่นได้ทันที (แนะนำสำหรับผู้เล่นใหม่)",
    mirrors: [
      { name: "Google Drive", href: "#" },
      { name: "Mega.nz", href: "#" },
      { name: "Direct Link", href: "#" },
    ],
  },
  {
    title: "Data Patch Only",
    version: "Patch 4.0.2",
    size: "185 MB",
    desc: "เฉพาะไฟล์แพตช์ สำหรับผู้ที่มีตัวเกม Ragnarok อยู่แล้ว",
    mirrors: [
      { name: "Google Drive", href: "#" },
      { name: "Mega.nz", href: "#" },
    ],
  },
];

const starterPacks = [
  "Novice Starter Box (อาวุธและชุดเกราะเริ่มต้น)",
  "Free Buff NPC ประจำทุกเมือง (Agi / Bless Lv.10)",
  "Warp Portal NPC วาร์ปฟรีสู่ดันเจี้ยนยอดนิยม",
  "Free Reset Skill & Status 1 ครั้งเมื่อเปลี่ยนอาชีพ",
  "สัตว์เลี้ยง Poring ขวัญใจมหาชนช่วยเก็บของ",
  "คูณค่าประสบการณ์ 50% เป็นเวลา 7 วันสำหรับไอดีใหม่",
];

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      {/* Fixed Centered Fantasy Navigation Bar */}
      <GameNavbar />

      {/* Hero Section */}
      <GameHero />

      {/* Download Section */}
      <section
        id="download"
        className="relative scroll-mt-20 border-b border-border bg-surface/40 px-4 py-16 sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-badge-border bg-badge-bg px-3.5 py-1 text-xs font-bold text-badge-text">
              <Download className="size-3.5 text-gold" />
              <span>GAME CLIENT DOWNLOAD</span>
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
              ดาวน์โหลดตัวเกม <span className="text-gold">Ragnarok Infinite</span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted sm:text-base">
              เลือกดาวน์โหลดตัวเกมเวอร์ชันเต็ม หรือดาวน์โหลดเฉพาะแพตช์อัปเดตเพื่อเข้าเล่นได้ทันที
            </p>
          </div>

          {/* Download cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {downloadSources.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-gold/60"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-badge-bg text-gold border border-badge-border">
                      {idx === 0 ? (
                        <HardDrive className="size-6" />
                      ) : (
                        <FileArchive className="size-6" />
                      )}
                    </div>
                    <span className="rounded-full bg-surface px-3 py-1 text-xs font-bold text-muted">
                      {item.size}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium text-gold">{item.version}</span>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  <span className="block text-xs font-semibold text-muted">
                    เลือกลิงก์ดาวน์โหลด:
                  </span>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {item.mirrors.map((mirror, mIdx) => (
                      <a
                        key={mIdx}
                        href={mirror.href}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-bold text-foreground transition hover:border-gold hover:bg-surface-raised active:scale-95"
                      >
                        <Download className="size-3.5 text-gold" />
                        <span>{mirror.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* System Requirements */}
          <div className="mt-8 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm sm:p-6">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Laptop className="size-4 text-gold" />
              <span>ความต้องการของระบบ (System Requirements)</span>
            </div>
            <div className="mt-3 grid gap-3 text-xs text-muted sm:grid-cols-2 md:grid-cols-4">
              <div className="rounded-lg bg-surface p-2.5 border border-border/60">
                <span className="block font-bold text-foreground">OS:</span>
                Windows 10 / 11 (64-bit)
              </div>
              <div className="rounded-lg bg-surface p-2.5 border border-border/60">
                <span className="block font-bold text-foreground">CPU:</span>
                Intel i3 / AMD Ryzen 3 ขึ้นไป
              </div>
              <div className="rounded-lg bg-surface p-2.5 border border-border/60">
                <span className="block font-bold text-foreground">RAM:</span>
                4 GB RAM (แนะนำ 8 GB)
              </div>
              <div className="rounded-lg bg-surface p-2.5 border border-border/60">
                <span className="block font-bold text-foreground">Storage:</span>
                พื้นที่ว่างอย่างน้อย 6 GB
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Server Info Section */}
      <section
        id="server-info"
        className="relative scroll-mt-20 border-b border-border bg-background px-4 py-16 sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-badge-border bg-badge-bg px-3.5 py-1 text-xs font-bold text-badge-text">
              <Server className="size-3.5 text-gold" />
              <span>SERVER SPECIFICATIONS & RATES</span>
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
              ข้อมูลเซิร์ฟเวอร์ <span className="text-gold">Ragnarok Infinite</span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted sm:text-base">
              รายละเอียดอัตราคูณ กฎกติกา และระบบหลักที่ถูกปรับแต่งมาเพื่อความสมดุลสูงสุด
            </p>
          </div>

          {/* Rates Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {serverRates.map((rate, idx) => (
              <div
                key={idx}
                className="group rounded-xl border border-border bg-card p-5 transition hover:border-gold/60 hover:bg-surface-raised"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-muted uppercase">
                    {rate.title}
                  </span>
                  <span className="rounded-md bg-badge-bg px-2.5 py-0.5 text-sm font-black text-gold border border-badge-border">
                    {rate.value}
                  </span>
                </div>
                <p className="mt-2 text-xs text-muted leading-relaxed">{rate.desc}</p>
              </div>
            ))}
          </div>

          {/* WoE Guild War Prize Card */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-badge-border bg-gradient-to-r from-badge-bg via-surface to-badge-bg p-6 text-foreground sm:p-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-0.5 text-xs font-bold text-gold border border-gold/30">
                  <Trophy className="size-3.5 text-gold" />
                  <span>WAR OF EMPERIUM SEASON 1</span>
                </div>
                <h3 className="text-xl font-extrabold sm:text-2xl">
                  สงครามกิลด์วอร์ ชิงเงินรางวัลรวมกว่า{" "}
                  <span className="text-gold">500,000 บาท</span>
                </h3>
                <p className="max-w-xl text-xs text-muted sm:text-sm">
                  ชิงชัยปราสาทกิลด์วอร์ประจำสัปดาห์ แจกเงินสดและคะแนนกิลด์ทุกวันพุธและวันอาทิตย์
                  เวลา 20:00 - 22:00 น.
                </p>
              </div>

              <Link
                href="/login"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-extrabold text-gold-foreground shadow-md transition hover:bg-gold-hover hover:scale-105"
              >
                <Swords className="size-4" />
                <span>ลงทะเบียนกิลด์เข้าร่วม</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guide & Starter Section */}
      <section
        id="guide"
        className="relative scroll-mt-20 border-b border-border bg-surface/40 px-4 py-16 sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-badge-border bg-badge-bg px-3.5 py-1 text-xs font-bold text-badge-text">
              <BookOpen className="size-3.5 text-gold" />
              <span>STARTER GUIDE & PACKAGES</span>
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
              แนะนำผู้เล่นใหม่ <span className="text-gold">เริ่มต้นง่าย เล่นได้ทุกคน</span>
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted sm:text-base">
              ไม่ต้องกลัวตามไม่ทัน เซิร์ฟเวอร์เตรียมของขวัญและสิ่งอำนวยความสะดวกไว้ให้อย่างครบครัน
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* Starter Box Items */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-badge-bg text-gold border border-badge-border">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground sm:text-lg">
                    แพ็กเกจผู้เล่นใหม่ (Newbie Package)
                  </h3>
                  <span className="text-xs text-muted">รับฟรีทันทีเมื่อสร้างตัวละคร</span>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {starterPacks.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-muted sm:text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick 4 Steps */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div>
                <h3 className="text-base font-bold text-foreground sm:text-lg">
                  ขั้นตอนการเริ่มต้นผจญภัย
                </h3>
                <span className="text-xs text-muted">เพียง 4 ขั้นตอนง่ายๆ เข้าเล่นได้ทันที</span>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-gold-foreground">
                      1
                    </span>
                    <span className="text-xs font-medium text-foreground sm:text-sm">
                      สมัครไอดีเกมผ่านหน้าเว็บไซต์ หรือปุ่มสมัครสมาชิก
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-gold-foreground">
                      2
                    </span>
                    <span className="text-xs font-medium text-foreground sm:text-sm">
                      ดาวน์โหลดตัวเกมและติดตั้งลงในคอมพิวเตอร์ของคุณ
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-gold-foreground">
                      3
                    </span>
                    <span className="text-xs font-medium text-foreground sm:text-sm">
                      เปิดเกมผ่าน Launcher เพื่ออัปเดตไฟล์ให้เป็นเวอร์ชันล่าสุด
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-gold-foreground">
                      4
                    </span>
                    <span className="text-xs font-medium text-foreground sm:text-sm">
                      เข้าสู่โลก Ragnarok Infinite รับของขวัญเริ่มต้นแล้วลุยได้เลย!
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <Link
                  href="/login"
                  className="flex-1 rounded-xl bg-purple py-2.5 text-center text-xs font-bold text-purple-foreground transition hover:bg-purple-hover"
                >
                  สมัครสมาชิกตอนนี้
                </Link>
                <Link
                  href="#download"
                  className="flex-1 rounded-xl border border-border bg-surface py-2.5 text-center text-xs font-bold text-foreground transition hover:bg-surface-raised hover:border-gold"
                >
                  ดาวน์โหลดเกม
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refill Section */}
      <section
        id="refill"
        className="relative scroll-mt-20 border-b border-border bg-background px-4 py-16 sm:px-6 md:py-24"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-badge-border bg-badge-bg px-3.5 py-1 text-xs font-bold text-badge-text">
            <Coins className="size-3.5 text-gold" />
            <span>TOPUP & REFILL SYSTEM</span>
          </div>
          <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
            ระบบเติมเงิน <span className="text-gold">Ragnarok Infinite</span>
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted sm:text-base">
            เติมเงินอัตโนมัติ รวดเร็ว ปลอดภัย 24 ชั่วโมง พร้อมรับ Cash Points และของแถมสุดคุ้ม
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-surface p-4 text-center">
                <span className="text-xs font-semibold text-muted">เรทเติมเงินปกติ</span>
                <span className="mt-1 block text-lg font-black text-foreground">
                  1 บาท = 100 Cash
                </span>
                <span className="text-[11px] text-muted">ทุกยอดไม่มีขั้นต่ำ</span>
              </div>
              <div className="rounded-xl border border-gold/50 bg-badge-bg p-4 text-center">
                <span className="text-xs font-semibold text-badge-text">โบนัสเปิดเซิร์ฟ</span>
                <span className="mt-1 block text-lg font-black text-gold">
                  แถมฟรี +20% Cash
                </span>
                <span className="text-[11px] text-muted">เฉพาะช่วงทดสอบ & สัปดาห์แรก</span>
              </div>
              <div className="rounded-xl border border-border bg-surface p-4 text-center">
                <span className="text-xs font-semibold text-muted">ช่องทางที่รองรับ</span>
                <span className="mt-1 block text-lg font-black text-foreground">
                  พร้อมเพย์ / ธนาคาร
                </span>
                <span className="text-[11px] text-muted">ระบบตรวจสอบยอดทันที</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-extrabold text-gold-foreground shadow-md transition hover:bg-gold-hover hover:scale-105"
              >
                <Coins className="size-4" />
                <span>เข้าสู่ระบบเพื่อเติมเงิน</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
