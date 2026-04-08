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

export default function App() {
  const [lang, setLang] = useState("TR");
  const { t, i18n } = useTranslation();

  return (
    <div className="site-wrap">
      {/* Language Picker */}
      <div className="lang-bar">
        {["TR", "EN"].map((l) => (
          <button
            key={l}
            className={`lang-btn ${lang === l ? "active" : ""}`}
            onClick={() => {
              setLang(l);

              i18n.changeLanguage(l.toLowerCase());
            }}
          >
            {l}
          </button>
        ))}
      </div>

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
