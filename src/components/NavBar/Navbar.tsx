import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const NAV_LEFT = [
  { zh: "主页", label: "Ana Sayfa", href: "/web" },
  { zh: "新闻", label: "Register", href: "/register" },
  { zh: "媒体", label: "Character S.", href: "/ranking/player" },
  { zh: "下载", label: "Download", href: "/download" }
];

const NAV_RIGHT = [
  { zh: "活动", label: "GUILD S.", href: "/ranking/guild" },
  { zh: "支持", label: "SUPPORT", href: "/support" },
  {
    zh: "脸书",
    label: "FACEBOOK",
    href: "https://facebook.com/capo2wslik",
    external: true
  }
];

export default function Navbar() {
  const renderItem = (item) => {
    const baseClass = "navButton";

    // External links (unchanged)
    if (item.external) {
      return (
        <a
          key={item.label}
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
          <div className="nav-link">{item.label}</div>
        </a>
      );
    }

    // Internal links with NavLink
    return (
      <NavLink
        key={item.label}
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
        <div className="nav-link">{item.label}</div>
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
        {/* Left Links */}
        <div className="navBarPart">
          {NAV_LEFT.map(renderItem)}
        </div>

        {/* Right Links */}
        <div className="navBarPart">
          {NAV_RIGHT.map(renderItem)}
        </div>
      </div>

      {/* Logo */}
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