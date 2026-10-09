import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  HardDrive,
  FileArchive,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Laptop,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Cpu,
  Monitor,
  FolderLock,
  Headphones,
} from "lucide-react";
import { GameNavbar } from "@/components/game-navbar";

export const metadata: Metadata = {
  title: "ดาวน์โหลดเกม · Ragnarok Infinite (Full Client & Mini Patch)",
  description:
    "ดาวน์โหลดตัวเกม Ragnarok Infinite เวอร์ชั่น 4.0 ล่าสุด ปลอดภัย 100% ไร้ไวรัส พร้อมระบบป้องกันบอท Gepard Shield 3.0 เลือกลิงก์ดาวน์โหลดความเร็วสูงได้ทันที",
};

interface DownloadMirror {
  name: string;
  href: string;
  isPopular?: boolean;
}

interface ClientPackage {
  title: string;
  badge: string;
  isPrimary?: boolean;
  version: string;
  size: string;
  date: string;
  description: string;
  features: string[];
  mirrors: DownloadMirror[];
}

const clientPackages: ClientPackage[] = [
  {
    title: "Full Client Installer (ตัวเกมตัวเต็ม)",
    badge: "⭐ แนะนำสำหรับผู้เล่นใหม่",
    isPrimary: true,
    version: "Version 4.0.5 Full",
    size: "3.2 GB",
    date: "อัปเดต: ต.ค. 2026",
    description:
      "ตัวเกมตัวเต็มสมบูรณ์ 100% รวมไฟล์เกม เพลงประกอบ BGM และระบบป้องกัน Gepard Shield 3.0 แตกไฟล์แล้วเปิด Patcher เล่นได้ทันที ไม่ต้องมีตัวเกมอื่น",
    features: [
      "ไฟล์ Data, Sprite, BGM ดนตรีไพเราะครบทุกแมพ 100%",
      "ระบบป้องกันโปรและบอท Gepard Shield 3.0 รุ่นล่าสุด",
      "มี Auto-Patcher อัปเดตไฟล์เกมอัตโนมัติก่อนเข้าเล่น",
      "พร้อมโปรแกรม Setup.exe ปรับขนาดหน้าจอทุก Resolution",
      "ผ่านการตรวจสอบความปลอดภัย VirusTotal ปลอดภัย 100%",
    ],
    mirrors: [
      { name: "Google Drive (ความเร็วสูง)", href: "#", isPopular: true },
      { name: "Mega.nz (Cloud Mirror)", href: "#" },
      { name: "MediaFire (ลิงก์สำรอง)", href: "#" },
      { name: "Direct Link (เซิร์ฟเวอร์หลัก)", href: "#" },
    ],
  },
  {
    title: "Mini Data Patch (เฉพาะไฟล์แพตช์)",
    badge: "⚡ สำหรับผู้มีตัวเกมอยู่แล้ว",
    version: "Version 4.0.5 Mini",
    size: "185 MB",
    date: "อัปเดต: ต.ค. 2026",
    description:
      "สำหรับผู้เล่นที่มีตัวเกม Ragnarok Online คลาสสิกโฟลเดอร์อื่นอยู่แล้ว นำไฟล์แพตช์นี้ไปแตกไฟล์ทับ แล้วเปิด Patcher เพื่ออัปเดตเข้าเล่นได้ทันที",
    features: [
      "ไฟล์ Data, System, Ragnarok.exe ประจำเซิร์ฟเวอร์",
      "ประหยัดพื้นที่และเวลาดาวน์โหลด สำหรับอินเทอร์เน็ตความเร็วจำกัด",
      "รองรับการทับกับตัวเกม Ragnarok Revo-Classic มาตรฐาน",
      "มีระบบตรวจเช็คความถูกต้องของไฟล์อัตโนมัติ",
    ],
    mirrors: [
      { name: "Google Drive (ความเร็วสูง)", href: "#", isPopular: true },
      { name: "Mega.nz (Cloud Mirror)", href: "#" },
      { name: "Direct Link (เซิร์ฟเวอร์หลัก)", href: "#" },
    ],
  },
];

const essentialPrograms = [
  {
    name: "DirectX 9.0c End-User Runtime",
    desc: "แก้ปัญหาเข้าเกมไม่ได้ / จอดำ / แจ้งเตือนขาดไฟล์ d3dx9_43.dll",
    size: "95 MB",
    href: "https://www.microsoft.com/en-us/download/details.aspx?id=35",
  },
  {
    name: "Microsoft Visual C++ (x86 / x64)",
    desc: "แพ็กเกจ C++ รันไทม์ที่จำเป็นสำหรับ Windows 10 และ 11",
    size: "25 MB",
    href: "https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist",
  },
  {
    name: "Setup.exe Config Utility",
    desc: "โปรแกรมตั้งค่าความละเอียดจอ (Resolution) และอุปกรณ์เสียงในเกม",
    size: "3.5 MB",
    href: "#",
  },
  {
    name: "โปรแกรมช่วยเหลือ AnyDesk / TeamViewer",
    desc: "สำหรับประสานงานให้แอดมินช่วยแก้ไขปัญหาเข้าเกมแบบรีโมท",
    size: "5 MB",
    href: "https://anydesk.com",
  },
];

const installationSteps = [
  {
    step: "01",
    title: "ดาวน์โหลดตัวเกม",
    desc: "เลือกดาวน์โหลด Full Client จากลิงก์ Google Drive หรือ Mega.nz ด้านบน แนะนำให้เก็บไฟล์ไว้ในไดรฟ์ C: หรือ D:",
    tip: "แนะนำใช้ IDM ช่วยดาวน์โหลดเพื่อความรวดเร็ว",
  },
  {
    step: "02",
    title: "แตกไฟล์หรือติดตั้ง",
    desc: "คลิกขวาที่ไฟล์ .zip แล้วเลือก Extract Here หรือติดตั้งลงโฟลเดอร์ที่ไม่ซ้อนทับกับ Program Files เพื่อป้องกันปัญหา Permission",
    tip: "แนะนำสร้างโฟลเดอร์ เช่น D:\\Ragnarok-Infinite",
  },
  {
    step: "03",
    title: "ตั้งค่ากราฟิก Setup.exe",
    desc: "เปิดไฟล์ Setup.exe เลือก Graphic Device เป็นการ์ดจอของคุณ และเลือก Resolution ขนาดหน้าจอที่ต้องการ จากนั้นกด OK",
    tip: "หากปรับขนาดจอไม่ได้ ให้คลิกขวา Run as Administrator",
  },
  {
    step: "04",
    title: "เปิด Patcher แล้วลุยเลย!",
    desc: "เปิดไฟล์ Ragnarok-Infinite.exe ระบบจะอัปเดตไฟล์แพตช์ล่าสุดโดยอัตโนมัติ จากนั้นกดปุ่ม START เพื่อเข้าเล่นเกมได้ทันที",
    tip: "สมัครไอดีล่วงหน้าผ่านหน้าเว็บไซต์ได้ตลอด 24 ชม.",
  },
];

const systemSpecs = [
  {
    part: "ระบบปฏิบัติการ (OS)",
    min: "Windows 7 / 8 (32 หรือ 64-bit)",
    rec: "Windows 10 / 11 (64-bit)",
  },
  {
    part: "หน่วยประมวลผล (CPU)",
    min: "Intel Pentium 4 / AMD Athlon 64",
    rec: "Intel Core i3 / AMD Ryzen 3 ขึ้นไป",
  },
  {
    part: "หน่วยความจำ (RAM)",
    min: "2 GB RAM",
    rec: "4 GB - 8 GB RAM ขึ้นไป",
  },
  {
    part: "การ์ดจอ (GPU)",
    min: "GeForce 6600 / Radeon X1600 (128MB)",
    rec: "GeForce GTX 750 / Radeon R7 ขึ้นไป",
  },
  {
    part: "DirectX",
    min: "DirectX 9.0c",
    rec: "DirectX 9.0c / 11",
  },
  {
    part: "พื้นที่ว่างฮาร์ดดิสก์",
    min: "อย่างน้อย 5 GB",
    rec: "10 GB ขึ้นไป (SSD แนะนำ)",
  },
];

const faqs = [
  {
    q: "เปิดเกมแล้วขึ้นเตือน Error d3dx9_43.dll หรือ MSVCP140.dll แก้ไขอย่างไร?",
    a: "เกิดจากคอมพิวเตอร์ยังไม่ได้ติดตั้ง DirectX 9 หรือ Microsoft Visual C++ ให้ดาวน์โหลดโปรแกรมเสริมจากหมวด 'โปรแกรมเสริมที่จำเป็น' ด้านล่าง ติดตั้งแล้วรีสตาร์ทเครื่อง 1 ครั้ง จะสามารถเข้าเกมได้ตามปกติครับ",
  },
  {
    q: "โปรแกรม Windows Defender หรือ Antivirus ลบไฟล์เกมทำอย่างไร?",
    a: "เนื่องจากระบบป้องกัน Gepard Shield 3.0 มีการเข้ารหัสโค้ดเพื่อป้องกันโปรแกรมช่วยเล่น อาจทำให้ Antivirus บางตัวตรวจจับเป็น False-Positive วิธีแก้คือให้เพิ่มโฟลเดอร์ตัวเกมเข้าในรายการ Exclusion / Exception ของ Antivirus ของท่าน",
  },
  {
    q: "หน้าจอเกมเล็กมาก ปรับขนาดหน้าจอ Full Screen หรือขยายหน้าต่างไม่ได้?",
    a: "ให้คลิกขวาที่ไฟล์ Setup.exe แล้วเลือก 'Run as administrator' จากนั้นในช่อง Graphic Device ให้เลือกการ์ดจอของคุณ (ไม่ใช่ Direct3D HAL ธรรมดา) แล้วเลือก Resolution ที่ต้องการ จากนั้นกด OK ครับ",
  },
  {
    q: "กดเริ่มเกมแล้วหลุดทันที หรือเข้าเกมแล้วจอดำ?",
    a: "ให้ตรวจสอบว่าได้แตกไฟล์ครบถ้วนหรือไม่ หรือปิดโปรแกรมช่วยเล่น/Macro ของเมาส์บางชนิดที่ Gepard บล็อกไว้ หากยังไม่หาย สามารถดาวน์โหลด AnyDesk แล้วติดต่อทีมงานผ่านทาง Facebook Fanpage หรือ Discord เพื่อให้ทีมงานช่วยดูให้ได้ตลอดเวลาครับ",
  },
];

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Fixed Centered Fantasy Navigation Bar */}
      <GameNavbar />

      {/* Hero Header Section */}
      <section className="relative overflow-hidden border-b border-border pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24">
        {/* Background Artwork */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/bg.png"
            alt="Ragnarok Infinite Wallpaper"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-top filter brightness-[0.4] dark:brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4 inline-flex items-center gap-1.5 text-xs text-muted">
            <Link href="/" className="hover:text-foreground">
              หน้าแรก
            </Link>
            <ChevronRight className="size-3 text-gold" />
            <span className="font-semibold text-foreground">ดาวน์โหลดตัวเกม</span>
          </nav>

          {/* Badge */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-badge-border bg-badge-bg px-4 py-1.5 text-xs font-bold text-badge-text shadow-sm">
              <Sparkles className="size-3.5 text-gold" />
              <span>LATEST CLIENT RELEASE · EPISODE 4.0</span>
            </div>
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
            ดาวน์โหลดตัวเกม{" "}
            <span className="block text-gold">Ragnarok Infinite</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base md:text-lg">
            เลือกลิงก์ดาวน์โหลดตัวเกมเวอร์ชันล่าสุด ติดตั้งง่าย ปลอดภัย 100%
            พร้อมระบบป้องกันบอท Gepard Shield 3.0 และบริการซัพพอร์ตช่วยเหลือตลอด 24 ชั่วโมง
          </p>

          {/* Quick Security Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:gap-6">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-surface/70 px-3.5 py-2 backdrop-blur-sm">
              <ShieldCheck className="size-4 text-success" />
              <span className="font-semibold text-foreground">Gepard Shield 3.0</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-surface/70 px-3.5 py-2 backdrop-blur-sm">
              <CheckCircle2 className="size-4 text-gold" />
              <span className="font-semibold text-foreground">VirusTotal ตรวจสอบแล้ว</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-surface/70 px-3.5 py-2 backdrop-blur-sm">
              <Monitor className="size-4 text-primary" />
              <span className="font-semibold text-foreground">รองรับ Windows 10 / 11</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Download Cards Section */}
      <section className="relative px-4 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {clientPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-3xl border p-6 transition-all duration-300 sm:p-8 ${
                  pkg.isPrimary
                    ? "border-gold/70 bg-card shadow-xl shadow-gold/5"
                    : "border-border bg-card shadow-sm hover:border-gold/40"
                }`}
              >
                <div>
                  {/* Top Badge and Icon */}
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-extrabold ${
                        pkg.isPrimary
                          ? "border border-badge-border bg-badge-bg text-badge-text"
                          : "border border-border bg-surface text-muted"
                      }`}
                    >
                      {pkg.badge}
                    </span>

                    <div className="flex items-center gap-2 text-xs font-semibold text-muted">
                      <span>{pkg.date}</span>
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-4">
                    <div
                      className={`flex size-14 shrink-0 items-center justify-center rounded-2xl border ${
                        pkg.isPrimary
                          ? "border-badge-border bg-badge-bg text-gold"
                          : "border-border bg-surface text-primary"
                      }`}
                    >
                      {pkg.isPrimary ? (
                        <HardDrive className="size-7" />
                      ) : (
                        <FileArchive className="size-7" />
                      )}
                    </div>
                    <div>
                      <h2 className="text-xl font-black text-foreground sm:text-2xl">
                        {pkg.title}
                      </h2>
                      <div className="mt-1 flex items-center gap-3 text-xs">
                        <span className="font-bold text-gold">{pkg.version}</span>
                        <span className="text-muted">•</span>
                        <span className="rounded bg-surface px-2 py-0.5 font-bold text-foreground">
                          ขนาดไฟล์: {pkg.size}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-muted sm:text-sm">
                    {pkg.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="mt-6 rounded-2xl border border-border/80 bg-surface/50 p-4">
                    <span className="block text-xs font-bold text-foreground">
                      สิ่งที่รวมอยู่ในแพ็กเกจนี้:
                    </span>
                    <ul className="mt-3 space-y-2">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-muted">
                          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-success" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Mirror Buttons */}
                <div className="mt-8 border-t border-border pt-6">
                  <span className="block text-xs font-extrabold text-foreground">
                    เลือกลิงก์ดาวน์โหลด (Download Mirrors):
                  </span>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {pkg.mirrors.map((mirror, mIdx) => (
                      <a
                        key={mIdx}
                        href={mirror.href}
                        className={`group flex items-center justify-between rounded-xl border px-4 py-3 text-xs font-extrabold transition-all duration-200 active:scale-95 ${
                          mirror.isPopular && pkg.isPrimary
                            ? "border-gold bg-gold text-gold-foreground shadow-md shadow-gold/20 hover:bg-gold-hover"
                            : "border-border bg-surface text-foreground hover:border-gold hover:bg-surface-raised"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Download className="size-4 transition-transform group-hover:-translate-y-0.5" />
                          <span>{mirror.name}</span>
                        </div>
                        <ExternalLink className="size-3.5 opacity-70" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Programs & Utilities Section */}
      <section className="border-t border-border bg-surface/30 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-badge-border bg-badge-bg px-3.5 py-1 text-xs font-bold text-badge-text">
              <Cpu className="size-3.5 text-gold" />
              <span>DRIVER & UTILITY SOFTWARE</span>
            </div>
            <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
              โปรแกรมเสริมที่จำเป็นสำหรับเข้าเล่น
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs text-muted sm:text-sm">
              หากเปิดเกมแล้วขึ้นเตือนข้อผิดพลาด ขาดไฟล์ DLL หรือจอดำ ให้ดาวน์โหลดโปรแกรมเหล่านี้ติดตั้งเพิ่มเติม
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {essentialPrograms.map((prog, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition hover:border-gold/50"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-surface px-2 py-0.5 text-[11px] font-bold text-gold">
                      {prog.size}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-foreground">{prog.name}</h3>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed">{prog.desc}</p>
                </div>

                <a
                  href={prog.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface py-2 text-xs font-bold text-foreground transition hover:border-gold hover:bg-surface-raised active:scale-95"
                >
                  <Download className="size-3.5 text-gold" />
                  <span>ดาวน์โหลด</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step by Step Installation Guide */}
      <section className="border-t border-border bg-background px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-badge-border bg-badge-bg px-3.5 py-1 text-xs font-bold text-badge-text">
              <FolderLock className="size-3.5 text-gold" />
              <span>STEP BY STEP GUIDE</span>
            </div>
            <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
              ขั้นตอนการติดตั้งตัวเกม 4 สเต็ปง่ายๆ
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-xs text-muted sm:text-sm">
              ทำตามขั้นตอนนี้เพื่อเข้าเล่น Ragnarok Infinite ได้อย่างราบรื่น ไม่มีสะดุด
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {installationSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-border bg-card p-6 transition hover:border-gold/60"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-gold text-base font-black text-gold-foreground shadow-md shadow-gold/20">
                  {step.step}
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">{step.desc}</p>

                <div className="mt-4 rounded-lg border border-border/70 bg-surface/60 p-2.5 text-[11px] text-muted">
                  <strong className="text-gold">ข้อแนะนำ:</strong> {step.tip}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements Table */}
      <section className="border-t border-border bg-surface/30 px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-badge-border bg-badge-bg px-3.5 py-1 text-xs font-bold text-badge-text">
              <Laptop className="size-3.5 text-gold" />
              <span>SYSTEM SPECIFICATIONS</span>
            </div>
            <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
              ความต้องการของระบบคอมพิวเตอร์
            </h2>
            <p className="mx-auto mt-2 max-w-md text-xs text-muted sm:text-sm">
              ตรวจสอบสเปคเครื่องของคุณเพื่อให้เล่นเกมได้อย่างลื่นไหลที่สุด
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-border bg-surface text-foreground font-bold">
                  <tr>
                    <th className="px-5 py-3.5">อุปกรณ์ / ฮาร์ดแวร์</th>
                    <th className="px-5 py-3.5">สเปคขั้นต่ำ (Minimum)</th>
                    <th className="px-5 py-3.5 text-gold">สเปคที่แนะนำ (Recommended)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-muted">
                  {systemSpecs.map((spec, sIdx) => (
                    <tr key={sIdx} className="hover:bg-surface/50 transition">
                      <td className="px-5 py-3.5 font-bold text-foreground">{spec.part}</td>
                      <td className="px-5 py-3.5">{spec.min}</td>
                      <td className="px-5 py-3.5 font-semibold text-foreground">{spec.rec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) */}
      <section className="border-t border-border bg-background px-4 py-16 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-badge-border bg-badge-bg px-3.5 py-1 text-xs font-bold text-badge-text">
              <HelpCircle className="size-3.5 text-gold" />
              <span>TROUBLESHOOTING & FAQ</span>
            </div>
            <h2 className="mt-3 text-2xl font-black text-foreground sm:text-3xl">
              คำถามที่พบบ่อย & วิธีแก้ปัญหา
            </h2>
            <p className="mx-auto mt-2 max-w-md text-xs text-muted sm:text-sm">
              รวบรวมวิธีแก้ไขปัญหาที่พบบ่อยในการติดตั้งและเปิดตัวเกม
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-5 sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 size-4 shrink-0 text-gold" />
                  <div>
                    <h3 className="text-sm font-bold text-foreground sm:text-base">
                      {faq.q}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Need More Help Box */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-purple text-purple-foreground">
                <Headphones className="size-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">ยังพบปัญหาในการติดตั้ง?</h4>
                <p className="text-xs text-muted">ทีมงานแอดมินพร้อมซัพพอร์ตช่วยเหลือทุกวันตลอด 24 ชม.</p>
              </div>
            </div>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-purple px-5 py-2.5 text-xs font-bold text-purple-foreground shadow-md transition hover:bg-purple-hover active:scale-95"
            >
              <span>ติดต่อแอดมินทาง Fanpage</span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
