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
      <nav className="footer-links">
        {LINKS.map((link) => (
          <a key={link.labelKey} href={link.href} className="footer-link">
            {t(link.labelKey)}
          </a>
        ))}
      </nav>
      <div className="footer-copy">{t("footer.copyright")}</div>
      <div className="footer-logo">
        <img src="https://capomt2.com/web/assets/images/logo.png" alt="Capo2" />
      </div>
    </footer>
  );
}
