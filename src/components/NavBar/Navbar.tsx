import React, { useState } from "react";
import "./style.scss";
const NAV_LEFT = [
  { zh: "主页", tr: "Ana Sayfa", href: "/" },
  { zh: "新闻", tr: "Kayıt Ol", href: "/register" },
  { zh: "媒体", tr: "Karakter S.", href: "/ranking/player" },
  { zh: "下载", tr: "İndir", href: "/download" }
];

const NAV_RIGHT = [
  { zh: "活动", tr: "Lonca S.", href: "/ranking/guild" },
  { zh: "支持", tr: "Destek", href: "/support" },
  {
    zh: "脸书",
    tr: "Facebook",
    href: "https://facebook.com/capo2wslik",
    external: true
  }
];

export default function Navbar() {
  const [active, setActive] = useState(0);

  return (
    <nav
      style={{
        position: "relative",
        zIndex: 10,
        // padding: "18px 0 10px",
        borderBottom: "1px solid var(--border-gold)",
        height: "45vh",
        width: "100%",
        overflow: "hidden"
      }}
    >
      <div
        className="navBarContainer"
      >
        {/* Left Links */}
        <div className="navBarPart">
          {NAV_LEFT.map((item, i) => (
            <a
              key={item.tr}
              href={item.href}
              className={`navButton ${active === i ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActive(i);
              }}
            >
              <div className="zh">{item.zh}</div>
              <div className="nav-link">{item.tr}</div>
            </a>
          ))}
        </div>

        {/* Right Links */}
        <div className="navBarPart">
          {NAV_RIGHT.map((item, i) => (
            <a
              key={item.tr}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`navButton ${active === i ? "active" : ""}`}
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
              <div className="nav-link">{item.tr}</div>
            </a>
          ))}
        </div>
      </div>

      <div>
        <div
          style={{
            position: "absolute",
            width: "400px",
            bottom: "0px",
            transform: "translateY(20px)"
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
