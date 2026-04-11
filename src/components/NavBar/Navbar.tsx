import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.scss";

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_LEFT = [
    { zh: "主页", labelKey: "nav.home", href: "/web" },
    { zh: "新闻", labelKey: "nav.register", href: "/register" },
    { zh: "媒体", labelKey: "nav.characterRanking", href: "/ranking/player" },
    { zh: "下载", labelKey: "nav.download", href: "/download" },
  ];

  const NAV_RIGHT = [
    { zh: "活动", labelKey: "nav.guildRanking", href: "/ranking/guild" },
    { zh: "支持", labelKey: "nav.support", href: "/support" },
    {
      zh: "脸书",
      labelKey: "nav.facebook",
      href: "https://facebook.com/capo2wslik",
      external: true,
    },
  ];

  const ALL_NAV = [...NAV_LEFT, ...NAV_RIGHT];

  const renderItem = (
    item: { zh: string; labelKey: string; href: string; external?: boolean },
    onClick?: () => void
  ) => {
    const baseClass = "navButton";
    if (item.external) {
      return (
        <a
          key={item.labelKey}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
          onClick={onClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--border-gold)";
            e.currentTarget.style.background = "rgba(201,168,76,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "transparent";
            e.currentTarget.style.background = "transparent";
          }}
        >
          <div className="zh">{item.zh}</div>
          <div className="nav-link">{t(item.labelKey)}</div>
        </a>
      );
    }
    return (
      <NavLink
        key={item.labelKey}
        to={item.href}
        end={item.href === "/"}
        className={({ isActive }) => `${baseClass} ${isActive ? "active" : ""}`}
        onClick={onClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--border-gold)";
          e.currentTarget.style.background = "rgba(201,168,76,0.06)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "transparent";
          e.currentTarget.style.background = "transparent";
        }}
      >
        <div className="zh">{item.zh}</div>
        <div className="nav-link">{t(item.labelKey)}</div>
      </NavLink>
    );
  };

  return (
    <nav
      className="relative z-10 w-full"
      style={{ borderBottom: "1px solid var(--border-gold)" }}
    >
      {/* ── Mobile bar ── */}
      <div className="flex items-center justify-between px-4 py-3 lg:hidden">
        <a href="https://capomt2.com/web/">
          <img
            src="https://capomt2.com/web/assets/images/logo.png"
            alt="logo"
            className="h-10 w-auto object-contain"
          />
        </a>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-0"
          aria-label="Toggle menu"
        >
          <span
            className="block h-[2px] w-6 bg-[var(--gold-nav)] transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }}
          />
          <span
            className="block h-[2px] w-6 bg-[var(--gold-nav)] transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-[2px] w-6 bg-[var(--gold-nav)] transition-all duration-300"
            style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }}
          />
        </button>
      </div>

      {/* ── Mobile dropdown menu ── */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "500px" : "0",
          borderTop: menuOpen ? "1px solid var(--border-gold)" : "none",
        }}
      >
        <div className="flex flex-wrap justify-center gap-1 px-3 py-3">
          {ALL_NAV.map((item) => renderItem(item, () => setMenuOpen(false)))}
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden lg:block" style={{ height: "53vh", overflow: "hidden", position: "relative" }}>
        <div className="navBarContainer">
          <div className="navBarPart">{NAV_LEFT.map((i) => renderItem(i))}</div>
          <div className="navBarPart">{NAV_RIGHT.map((i) => renderItem(i))}</div>
        </div>

        <div
          style={{
            position: "absolute",
            width: "400px",
            bottom: "12vh",
            transform: "translate(20%, 20px)",
          }}
        >
          <a href="https://capomt2.com/web/">
            <img
              src="https://capomt2.com/web/assets/images/logo.png"
              alt="logo"
              width="400"
              height="auto"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
