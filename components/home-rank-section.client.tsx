"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Crown,
  Swords,
  Shield,
  Sparkles,
  Flame,
  Search,
  ChevronLeft,
  ChevronRight,
  Gem,
  Award,
} from "lucide-react";
import styles from "./home-rank-section.module.css";

interface CategoryTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const tabs: CategoryTab[] = [
  { id: "level", label: "เลเวล", icon: Crown },
  { id: "cp", label: "พลังต่อสู้ (CP)", icon: Swords },
  { id: "guild", label: "กิลด์", icon: Shield },
  { id: "class", label: "เส้นทางอาชีพ", icon: Sparkles },
  { id: "pvp", label: "PVP", icon: Swords },
  { id: "mvp", label: "MVP", icon: Flame },
  { id: "collection", label: "สะสมไอเทม", icon: Gem },
];

interface PlayerRank {
  rank: number;
  name: string;
  job: string;
  guild: string;
  score: string;
  avatarChar: string;
}

const rankingsData: Record<string, PlayerRank[]> = {
  level: [
    { rank: 1, name: "AresKnight", job: "Knight", guild: "Valhalla", score: "120", avatarChar: "A" },
    { rank: 2, name: "Lunaria", job: "High Priest", guild: "Eternal", score: "118", avatarChar: "L" },
    { rank: 3, name: "ZeroRush", job: "Sniper", guild: "Nova", score: "118", avatarChar: "Z" },
    { rank: 4, name: "Blazewind", job: "Wizard", guild: "Eclipse", score: "117", avatarChar: "B" },
    { rank: 5, name: "MochiCat", job: "Assassin Cross", guild: "Seraphim", score: "116", avatarChar: "M" },
    { rank: 6, name: "RinShiro", job: "Paladin", guild: "Zenith", score: "116", avatarChar: "R" },
    { rank: 7, name: "KuroNeko", job: "Stalker", guild: "Mirage", score: "115", avatarChar: "K" },
    { rank: 8, name: "ValenTine", job: "Warlock", guild: "Luminous", score: "115", avatarChar: "V" },
    { rank: 9, name: "SoraAoi", job: "Ranger", guild: "Horizon", score: "114", avatarChar: "S" },
    { rank: 10, name: "Kenzo", job: "Mechanic", guild: "Overload", score: "114", avatarChar: "K" },
  ],
  cp: [
    { rank: 1, name: "AresKnight", job: "Knight", guild: "Valhalla", score: "2,480,500", avatarChar: "A" },
    { rank: 2, name: "Lunaria", job: "High Priest", guild: "Eternal", score: "2,395,200", avatarChar: "L" },
    { rank: 3, name: "ZeroRush", job: "Sniper", guild: "Nova", score: "2,350,100", avatarChar: "Z" },
    { rank: 4, name: "Blazewind", job: "Wizard", guild: "Eclipse", score: "2,290,000", avatarChar: "B" },
    { rank: 5, name: "MochiCat", job: "Assassin Cross", guild: "Seraphim", score: "2,240,800", avatarChar: "M" },
    { rank: 6, name: "RinShiro", job: "Paladin", guild: "Zenith", score: "2,190,400", avatarChar: "R" },
    { rank: 7, name: "KuroNeko", job: "Stalker", guild: "Mirage", score: "2,150,000", avatarChar: "K" },
    { rank: 8, name: "ValenTine", job: "Warlock", guild: "Luminous", score: "2,120,000", avatarChar: "V" },
    { rank: 9, name: "SoraAoi", job: "Ranger", guild: "Horizon", score: "2,090,500", avatarChar: "S" },
    { rank: 10, name: "Kenzo", job: "Mechanic", guild: "Overload", score: "2,050,000", avatarChar: "K" },
  ],
  pvp: [
    { rank: 1, name: "AresKnight", job: "Knight", guild: "Valhalla", score: "3,850 pt", avatarChar: "A" },
    { rank: 2, name: "ZeroRush", job: "Sniper", guild: "Nova", score: "3,720 pt", avatarChar: "Z" },
    { rank: 3, name: "Lunaria", job: "High Priest", guild: "Eternal", score: "3,690 pt", avatarChar: "L" },
    { rank: 4, name: "MochiCat", job: "Assassin Cross", guild: "Seraphim", score: "3,580 pt", avatarChar: "M" },
    { rank: 5, name: "Blazewind", job: "Wizard", guild: "Eclipse", score: "3,490 pt", avatarChar: "B" },
    { rank: 6, name: "RinShiro", job: "Paladin", guild: "Zenith", score: "3,420 pt", avatarChar: "R" },
    { rank: 7, name: "KuroNeko", job: "Stalker", guild: "Mirage", score: "3,380 pt", avatarChar: "K" },
    { rank: 8, name: "ValenTine", job: "Warlock", guild: "Luminous", score: "3,300 pt", avatarChar: "V" },
    { rank: 9, name: "SoraAoi", job: "Ranger", guild: "Horizon", score: "3,250 pt", avatarChar: "S" },
    { rank: 10, name: "Kenzo", job: "Mechanic", guild: "Overload", score: "3,190 pt", avatarChar: "K" },
  ],
};

export function HomeRankSection() {
  const [activeTab, setActiveTab] = useState("level");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const currentList = rankingsData[activeTab] || rankingsData.level;

  const filteredPlayers = currentList.filter((item) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      item.job.toLowerCase().includes(query) ||
      item.guild.toLowerCase().includes(query)
    );
  });

  return (
    <section id="rank" aria-labelledby="ranking-title" className={`${styles.section} motion-section`}>
      {/* Grand Night Palace Background */}
      <Image
        src="/images/rank/bg.png"
        alt="Ragnarok Infinite Ranking Palace"
        fill
        sizes="100vw"
        className={styles.bgArtwork}
      />

      <div aria-hidden="true" className={styles.overlay} />

      <div className={styles.container}>
        {/* Header: Title, Star Sparkle & Subtitle */}
        <div className={styles.headerArea}>
          <div className={styles.titleRow}>
            <h2 id="ranking-title" className={styles.heading}>อันดับ</h2>
            <Sparkles className={`${styles.sparkleIcon} size-7`} />
          </div>

          <div className={styles.dividerRow}>
            <span aria-hidden="true" className={styles.dividerLine} />
            <span className={styles.dividerText}>RANKING</span>
            <span aria-hidden="true" className={styles.dividerLine} />
          </div>

          <p className={styles.subheading}>
            พิสูจน์ความแข็งแกร่งของคุณ และก้าวสู่ตำนานแห่งโลก Ragnarok III Infinite
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className={styles.tabsBar}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentPage(1);
                }}
                className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
              >
                <Icon className={styles.tabIcon} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Left Top 3 Podium + Right Ranking Table */}
        <div className={styles.mainGrid}>
          {/* Left: Top 3 Podium Cards */}
          <div className={styles.podiumContainer}>
            <div className={styles.podiumCards}>
              {/* Rank 2 (Left - Silver - Lunaria) */}
              <div className={`${styles.podiumCard} ${styles.podiumRank2}`}>
                <div className={`${styles.podiumCrown} ${styles.crownRank2}`}>
                  <Crown size={14} />
                  <span>2</span>
                </div>

                <Image
                  src="/images/rank/rank2.jpg"
                  alt="อันดับ 2 Lunaria"
                  fill
                  sizes="220px"
                  className={styles.podiumPortrait}
                />

                <div aria-hidden="true" className={styles.podiumOverlay} />

                <div className={styles.podiumInfo}>
                  <h3 className={styles.podiumName}>Lunaria</h3>
                  <span className={styles.podiumScore}>Lv. 118</span>
                  <div className={styles.podiumGuild}>
                    <Shield size={11} />
                    <span>Eternal</span>
                  </div>
                </div>
              </div>

              {/* Rank 1 (Center - Gold - AresKnight) */}
              <div className={`${styles.podiumCard} ${styles.podiumRank1}`}>
                <div className={`${styles.podiumCrown} ${styles.crownRank1}`}>
                  <Crown size={16} />
                  <span>1</span>
                </div>

                <Image
                  src="/images/rank/rank1.jpg"
                  alt="อันดับ 1 AresKnight"
                  fill
                  priority
                  sizes="260px"
                  className={styles.podiumPortrait}
                />

                <div aria-hidden="true" className={styles.podiumOverlay} />

                <div className={styles.podiumInfo}>
                  <h3 className={`${styles.podiumName} ${styles.podiumNameGold}`}>
                    AresKnight
                  </h3>
                  <span className={styles.podiumScore}>Lv. 120</span>
                  <div className={styles.podiumGuild}>
                    <Shield size={11} />
                    <span>Valhalla</span>
                  </div>
                </div>
              </div>

              {/* Rank 3 (Right - Bronze - ZeroRush) */}
              <div className={`${styles.podiumCard} ${styles.podiumRank3}`}>
                <div className={`${styles.podiumCrown} ${styles.crownRank3}`}>
                  <Crown size={14} />
                  <span>3</span>
                </div>

                <Image
                  src="/images/rank/rank3.jpg"
                  alt="อันดับ 3 ZeroRush"
                  fill
                  sizes="220px"
                  className={styles.podiumPortrait}
                />

                <div aria-hidden="true" className={styles.podiumOverlay} />

                <div className={styles.podiumInfo}>
                  <h3 className={styles.podiumName}>ZeroRush</h3>
                  <span className={styles.podiumScore}>Lv. 118</span>
                  <div className={styles.podiumGuild}>
                    <Shield size={11} />
                    <span>Nova</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stepped Pedestal Under Podium */}
            <div aria-hidden="true" className={styles.podiumSteps}>
              <div className={styles.step2} />
              <div className={styles.step1} />
              <div className={styles.step3} />
            </div>
          </div>

          {/* Right: Ranking Table Card */}
          <div className={styles.tableCard}>
            {/* Corner Filigree Accents */}
            <div aria-hidden="true" className={styles.cornerTopLeft} />
            <div aria-hidden="true" className={styles.cornerTopRight} />
            <div aria-hidden="true" className={styles.cornerBottomLeft} />
            <div aria-hidden="true" className={styles.cornerBottomRight} />

            {/* Search Input Bar */}
            <div className={styles.searchBarRow}>
              <div className={styles.searchWrapper}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ค้นหาชื่อผู้เล่น..."
                  className={styles.searchInput}
                />
                <Search className={styles.searchIcon} />
              </div>
            </div>

            {/* Table */}
            <table className={styles.table}>
              <thead>
                <tr className={styles.theadRow}>
                  <th className={`${styles.th} ${styles.thRank}`}>อันดับ</th>
                  <th className={`${styles.th} ${styles.thName}`}>ชื่อผู้เล่น</th>
                  <th className={`${styles.th} ${styles.thJob}`}>อาชีพ</th>
                  <th className={`${styles.th} ${styles.thGuild}`}>กิลด์</th>
                  <th className={`${styles.th} ${styles.thScore}`}>เลเวล</th>
                </tr>
              </thead>
              <tbody>
                {filteredPlayers.map((player) => {
                  const isTop1 = player.rank === 1;
                  const isTop2 = player.rank === 2;
                  const isTop3 = player.rank === 3;

                  return (
                    <tr
                      key={player.rank}
                      className={`${styles.tr} ${
                        isTop1
                          ? styles.trTop1
                          : isTop2
                          ? styles.trTop2
                          : isTop3
                          ? styles.trTop3
                          : ""
                      }`}
                    >
                      {/* Rank Column */}
                      <td className={`${styles.td} ${styles.tdRank}`}>
                        {isTop1 ? (
                          <span className={`${styles.rankBadge} ${styles.rankBadge1}`}>
                            1
                          </span>
                        ) : isTop2 ? (
                          <span className={`${styles.rankBadge} ${styles.rankBadge2}`}>
                            2
                          </span>
                        ) : isTop3 ? (
                          <span className={`${styles.rankBadge} ${styles.rankBadge3}`}>
                            3
                          </span>
                        ) : (
                          <span className={styles.rankNum}>{player.rank}</span>
                        )}
                      </td>

                      {/* Player Name Column */}
                      <td className={styles.td}>
                        <div className={styles.playerCell}>
                          <div className={styles.playerAvatar}>
                            {player.avatarChar}
                          </div>
                          <span className={styles.playerName}>{player.name}</span>
                        </div>
                      </td>

                      {/* Job Column */}
                      <td className={`${styles.td} ${styles.tdJob}`}>
                        <div className={styles.jobCell}>
                          <Award size={12} />
                          <span>{player.job}</span>
                        </div>
                      </td>

                      {/* Guild Column */}
                      <td className={`${styles.td} ${styles.tdGuild}`}>
                        <div className={styles.guildCell}>
                          <Shield size={12} />
                          <span>{player.guild}</span>
                        </div>
                      </td>

                      {/* Level / Score Column */}
                      <td className={`${styles.td} ${styles.scoreCell}`}>
                        {player.score}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className={styles.paginationRow}>
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                aria-label="หน้าก่อนหน้า"
                className={styles.pageBtn}
              >
                <ChevronLeft size={13} />
              </button>

              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setCurrentPage(num)}
                  className={`${styles.pageBtn} ${
                    currentPage === num ? styles.pageBtnActive : ""
                  }`}
                >
                  {num}
                </button>
              ))}

              <span className="px-1 text-xs text-muted">...</span>

              <button
                type="button"
                onClick={() => setCurrentPage(10)}
                className={`${styles.pageBtn} ${
                  currentPage === 10 ? styles.pageBtnActive : ""
                }`}
              >
                10
              </button>

              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(10, p + 1))}
                aria-label="หน้าถัดไป"
                className={styles.pageBtn}
              >
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
