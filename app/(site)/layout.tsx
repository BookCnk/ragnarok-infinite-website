import Link from "next/link";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex-1">{children}</div>
      <footer id="contact" className="motion-page border-t border-border bg-background">
        <div className="flex flex-col gap-4 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Ragnarok Infinite. All rights reserved. Not affiliated with Gravity Co., Ltd.</p>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
            <Link href="/#download" className="motion-link hover:text-foreground">ดาวน์โหลด</Link>
            <Link href="/#server-info" className="motion-link hover:text-foreground">ข้อมูลเซิร์ฟ</Link>
            <Link href="/#guide" className="motion-link hover:text-foreground">คู่มือการเล่น</Link>
            <Link href="/#refill" className="motion-link hover:text-foreground">เติมเงิน</Link>
            <Link href="/login" className="motion-link hover:text-foreground">เข้าสู่ระบบ</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
