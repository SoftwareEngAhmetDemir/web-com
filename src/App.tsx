import React, { useState } from "react";
import Navbar from "./components/NavBar/Navbar.tsx";
import LoginForm from "./components/LoginForm/LoginForm.tsx";
import List from "./components/common/List/List.tsx";
import StatsCard from "./components/StatsCard.tsx";
import Announcements from "./components/Announcements.tsx";
import FacebookWidget from "./components/FacebookWidget.tsx";
import DownloadBanner from "./components/DownloadBanner.tsx";
import Footer from "./components/Footer.tsx";
import RouteComp from "./routes/index.tsx";
import RegisterForm from "./components/RegisterForm/RegisterForm.tsx";
import ForgetPinForm from "./components/PinForgotPassword/PinForgotPassword.tsx";
import ForgetPasswordForm from "./components/ForgotPassword/ForgotPassword.tsx";
import TawkWidget from "./components/TawkWidget/TawkWidget.tsx";
import { GuildList } from "./components/GuildList/GuildList.tsx";
import { PlayerRankingList } from "./components/PlayerRankingList/PlayerRankingList.tsx";
import RouteView from "./routes/index.tsx";

export default function App() {
  const [lang, setLang] = useState("TR");

  return (
    <div className="site-wrap">
      <RouteComp />
      {/* Language Picker */}
      {/* <div className="lang-bar">
        {["TR", "EN"].map((l) => (
          <button
            key={l}
            className={`lang-btn ${lang === l ? "active" : ""}`}
            onClick={() => setLang(l)}
          >
            {l}
          </button>
        ))}
      </div> */}

      <div className="hero-line" />
      <div className="hero-line2" />

      <Navbar />

      <div className="main-layout">
        {/* Left Sidebar */}
        <aside className="sidebar">
          <LoginForm />
         <GuildList/>
        </aside>

        {/* Center Content */}
        <main className="content">
          <RouteView/>
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
