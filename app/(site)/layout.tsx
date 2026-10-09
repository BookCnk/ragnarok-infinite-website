import { GameFooter } from "@/components/game-footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex-1">{children}</div>
      <GameFooter />
    </>
  );
}
