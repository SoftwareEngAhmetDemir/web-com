import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.scss";

export default function Navbar() {
  const { t } = useTranslation();

  const NAV_LEFT = [
    { zh: "主页", labelKey: "nav.home", href: "/web" },
    { zh: "新闻", labelKey: "nav.register", href: "/register" },
    { zh: "媒体", labelKey: "nav.characterRanking", href: "/ranking/player" },
    { zh: "下载", labelKey: "nav.download", href: "/download" }
  ];

  const NAV_RIGHT = [
    { zh: "活动", labelKey: "nav.guildRanking", href: "/ranking/guild" },
    { zh: "支持", labelKey: "nav.support", href: "/support" },
    {
      zh: "脸书",
      labelKey: "nav.facebook",
      href: "https://facebook.com/capo2wslik",
      external: true
    }
  ];

  const renderItem = (item: { zh: string; labelKey: string; href: string; external?: boolean }) => {
    const baseClass = "navButton";

    if (item.external) {
      return (
        <a
          key={item.labelKey}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
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
        className={({ isActive }) =>
          `${baseClass} ${isActive ? "active" : ""}`
        }
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
      style={{
        position: "relative",
        zIndex: 10,
        borderBottom: "1px solid var(--border-gold)",
        height: "53vh",
        width: "100%",
        overflow: "hidden"
      }}
    >
      <div className="navBarContainer">
        <div className="navBarPart">
          {NAV_LEFT.map(renderItem)}
        </div>
        <div className="navBarPart">
          {NAV_RIGHT.map(renderItem)}
        </div>
      </div>

      <div>
        <div
          style={{
            position: "absolute",
            width: "400px",
            bottom: "12vh",
            transform: "translate(20%,20px)"
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
