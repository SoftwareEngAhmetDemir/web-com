import React, { useEffect, useState } from "react";
import Navbar from "./components/NavBar/Navbar.tsx";
import LoginForm from "./components/LoginForm/LoginForm.tsx";
import StatsCard from "./components/StatsCard.tsx";
import DownloadBanner from "./components/DownloadBanner.tsx";
import Footer from "./components/Footer.tsx";
import TawkWidget from "./components/TawkWidget/TawkWidget.tsx";
import { GuildList } from "./components/GuildList/GuildList.tsx";
import { PlayerRankingList } from "./components/PlayerRankingList/PlayerRankingList.tsx";
import RouteView from "./routes/index.tsx";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", img: "https://capomt2.com/web/assets/images/en.png" },
  { code: "tr", img: "https://capomt2.com/web/assets/images/tr.png" },
];

export default function App() {
  const { i18n } = useTranslation();

  const savedLang = localStorage.getItem("lang") ?? "tr";
  const [lang, setLang] = useState(savedLang);

  useEffect(() => {
    i18n.changeLanguage(lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLang = (code: string) => {
    setLang(code);
    localStorage.setItem("lang", code);
    i18n.changeLanguage(code);
  };

  // Selected language first, the other second
  const ordered = [
    LANGS.find((l) => l.code === lang)!,
    ...LANGS.filter((l) => l.code !== lang),
  ];

  return (
    <div className="site-wrap">

      <ul className="languagepicker">
        {ordered.map((l, i) => (
          <li
            key={l.code}
            value={l.code}
            className={i === 1 ? "second-wrapper" : ""}
            onClick={() => changeLang(l.code)}
          >
            {i === 1 && <div className="sepatator"><hr /></div>}
            <img src={l.img} />
          </li>
        ))}
      </ul>

      <div className="hero-line" />
      <div className="hero-line2" />

      <Navbar />

      <div className="main-layout">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <LoginForm />
          <GuildList />
        </aside>

        {/* Center Content */}
        <main className="content">
          <RouteView />
        </main>

        {/* Right Sidebar */}
        <aside className="sidebar right">
          <DownloadBanner />
          <StatsCard activePlayers={150738} />
          <PlayerRankingList />
        </aside>
      </div>

      <Footer />
      <TawkWidget />
    </div>
  );
}
