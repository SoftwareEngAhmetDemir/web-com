import React from "react";

const LINKS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Kayıt Ol", href: "/register" },
  { label: "Karakter Sıralaması", href: "/ranking/player" },
  { label: "Lonca Sıralaması", href: "/ranking/guild" },
  { label: "İndir", href: "/download" },
];

export default function Footer() {
  return (
    <footer>
      <div className="hero-line" />
      <nav className="footer-links">
        {LINKS.map((link) => (
          <a key={link.label} href={link.href} className="footer-link">
            {link.label}
          </a>
        ))}
      </nav>
      <div className="footer-logo">CAPO2</div>
      <div className="footer-copy">© 2026 Tüm Hakları Saklıdır | Capo2</div>
    </footer>
  );
}
