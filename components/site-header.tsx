import Link from "next/link";
import { UserRound, LogOut, Swords, LayoutDashboard } from "lucide-react";
import { logout } from "@/app/actions";

type User = { email: string; name: string | null } | null;

export function SiteHeader({ user }: { user: User }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md motion-page">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="motion-link flex items-center gap-2 text-base font-extrabold tracking-tight text-foreground hover:opacity-90">
            <div className="motion-icon flex size-8 items-center justify-center rounded-lg bg-gold text-gold-foreground">
              <Swords className="size-4" />
            </div>
            <span>RAGNAROK INFINITE</span>
          </Link>
          <nav aria-label="Primary navigation" className="hidden items-center gap-5 text-sm font-medium text-muted md:flex">
            <Link href="/" className="motion-link transition hover:text-foreground">หน้าแรก</Link>
            <Link href="/#download" className="motion-link transition hover:text-foreground">ดาวน์โหลด</Link>
            <Link href="/#server-info" className="motion-link transition hover:text-foreground">ข้อมูลเซิร์ฟ</Link>
            <Link href="/#guide" className="motion-link transition hover:text-foreground">คู่มือการเล่น</Link>
            <Link href="/#refill" className="motion-link transition hover:text-foreground">เติมเงิน</Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-md bg-surface px-3 py-1.5 text-xs font-semibold border border-border text-foreground transition hover:bg-surface-raised"
              >
                <LayoutDashboard className="size-3.5" />
                <span>Dashboard</span>
              </Link>
              <form action={logout}>
                <button
                  type="submit"
                  aria-label="Sign out"
                  className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-muted transition hover:text-foreground"
                >
                  <LogOut className="size-3.5" />
                  <span className="hidden sm:inline">Sign out</span>
                </button>
              </form>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-semibold text-on-primary transition hover:opacity-95"
            >
              <UserRound className="size-3.5" />
              <span>Sign In</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
