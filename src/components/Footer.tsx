import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const LINKS = [
    { labelKey: "footer.home", href: "/" },
    { labelKey: "footer.register", href: "/register" },
    { labelKey: "footer.characterRanking", href: "/ranking/player" },
    { labelKey: "footer.guildRanking", href: "/ranking/guild" },
    { labelKey: "footer.download", href: "/download" }
  ];

  return (
    <footer>
      <div className="hero-line" />
      <nav className="footer-links">
        {LINKS.map((link) => (
          <a key={link.labelKey} href={link.href} className="footer-link">
            {t(link.labelKey)}
          </a>
        ))}
      </nav>
      <div className="footer-logo">CAPO2</div>
      <div className="footer-copy">{t("footer.copyright")}</div>
    </footer>
  );
}
