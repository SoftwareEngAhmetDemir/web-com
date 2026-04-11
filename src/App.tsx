import { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/NavBar/Navbar.tsx";
import LoginForm from "./components/LoginForm/LoginForm.tsx";
import UserPanel from "./components/UserPanel/UserPanel.tsx";
import StatsCard from "./components/StatsCard.tsx";
import DownloadBanner from "./components/DownloadBanner.tsx";
import Footer from "./components/Footer.tsx";
import TawkWidget from "./components/TawkWidget/TawkWidget.tsx";
import { GuildList } from "./components/GuildList/GuildList.tsx";
import { PlayerRankingList } from "./components/PlayerRankingList/PlayerRankingList.tsx";
import RouteView from "./routes/index.tsx";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "./store/authStore";

const LANGS = [
  { code: "en", img: "https://capomt2.com/web/assets/images/en.png" },
  { code: "tr", img: "https://capomt2.com/web/assets/images/tr.png" },
];

function AppInner() {
  const { i18n } = useTranslation();
  const { user, isInitializing, initialize } = useAuthStore();

  const savedLang = localStorage.getItem("lang") ?? "tr";
  const [lang, setLang] = useState(savedLang);

  useEffect(() => {
    i18n.changeLanguage(lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLang = (code: string) => {
    setLang(code);
    localStorage.setItem("lang", code);
    i18n.changeLanguage(code);
  };

  const ordered = [
    LANGS.find((l) => l.code === lang)!,
    ...LANGS.filter((l) => l.code !== lang),
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-3 sm:px-5">
      {/* Language picker */}
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

      {/*
        Mobile  → flex-col, ordered by `order-*`
        Desktop → 3-col × 2-row grid, items placed explicitly
                  Col 1 : auth panel (row 1) + guild list (row 2)
                  Col 2 : main content (spans both rows)
                  Col 3 : right sidebar (spans both rows)
      */}
      <div className="
        flex flex-col
        lg:grid lg:grid-cols-[2fr_4.5fr_2fr] lg:grid-rows-[auto_1fr]
        relative z-[1]
      ">

        {/* ── Auth panel (UserPanel or LoginForm) ──
            mobile : first (order-1)
            desktop: left col, top row
        */}
        <div className="
          order-1
          lg:col-start-1 lg:row-start-1
          p-3
          border-b border-[var(--border-gold)]
          lg:border-b-0 lg:border-r lg:border-[var(--border-gold)]
        ">
          {!isInitializing && (user ? <UserPanel /> : <LoginForm />)}
        </div>

        {/* ── Center content ──
            mobile : second (order-2)
            desktop: middle col, spans both rows
        */}
        <main className="
          order-2
          lg:col-start-2 lg:row-start-1 lg:row-span-2
          p-4 sm:p-6
          bg-[var(--bg-mid)]
          border-x border-[var(--border-gold)]
          min-h-[400px]
        ">
          <RouteView />
        </main>

        {/* ── Guild list ──
            mobile : third (order-3), directly after content
            desktop: left col, bottom row
        */}
        <div className="
          order-3
          lg:col-start-1 lg:row-start-2
          p-3
          border-b border-[var(--border-gold)]
          lg:border-b-0 lg:border-r lg:border-[var(--border-gold)]
        ">
          <GuildList />
        </div>

        {/* ── Right sidebar ──
            mobile : fourth (order-4)
            desktop: right col, spans both rows
        */}
        <aside className="
          order-4
          lg:col-start-3 lg:row-start-1 lg:row-span-2
          p-3
          border-b border-[var(--border-gold)]
          lg:border-b-0 lg:border-l lg:border-[var(--border-gold)]
        ">
          <div className="lg:sticky lg:top-4 space-y-4">
            <DownloadBanner />
            <StatsCard activePlayers={150738} />
            <PlayerRankingList />
          </div>
        </aside>

      </div>

      <Footer />
      <TawkWidget />
    </div>
  );
}

export default function App() {
  return <AppInner />;
}
