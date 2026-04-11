import { useTranslation } from "react-i18next";
import { RedCard } from "../common/RedCard/RedCard";
import { CustomTable } from "../common/CustomTable/CustomTable";
import "./style.scss";

interface DownloadLink {
  label: string;
  url: string;
}

interface SysReqRow {
  component: string;
  minimum: string;
  moderate: string;
}

export default function Download() {
  const { t } = useTranslation();

  const downloadLinks: DownloadLink[] = [
    { label: t("download.tekLink"),     url: "#" },
    { label: t("download.googleDrive"), url: "#" },
  ];

  const sysReq: SysReqRow[] = [
    { component: t("download.sysReq.freeSpace"),   minimum: "2GB",               moderate: t("download.sysReq.gbUp", { n: 3 }) },
    { component: t("download.sysReq.memory"),      minimum: "2GB",               moderate: t("download.sysReq.gbUp", { n: 4 }) },
    { component: t("download.sysReq.cpu"),         minimum: "Pentium 3, 1GHz",   moderate: t("download.sysReq.cpuMod") },
    { component: t("download.sysReq.gpu"),         minimum: "512MB",             moderate: t("download.sysReq.gbUp", { n: 1 }) },
    { component: t("download.sysReq.os"),          minimum: "Win XP",            moderate: t("download.sysReq.osMod") },
    { component: t("download.sysReq.directx"),     minimum: "9",                 moderate: t("download.sysReq.directxMod") },
  ];

  const tableData = sysReq.map((r) => [r.component, r.minimum, r.moderate]);

  return (
    <div className="dl-wrap">
      {/* ── Title ── */}
      <h1 className="text-[2rem] font-medium text-center">
        {t("download.title")}
      </h1>
      <hr className="my-[20px]" />

      {/* ── Download links ── */}
      <div className="dl-links">
        {downloadLinks.map((link) => (
          <RedCard
            key={link.label}
            classes="dl-row !border-b"
            text={
              <div className="dl-row-inner">
                <span className="dl-row-label">{link.label}</span>
                <a
                  href={link.url}
                  className="cp-btn dl-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("download.downloadGame")}
                </a>
              </div>
            }
          />
        ))}
      </div>

      {/* ── System Requirements ── */}
      <h1 className="text-[2rem] font-medium text-center mt-8 mb-5">
        {t("download.sysReq.title")}
      </h1>

      <CustomTable
        columns={[
          t("download.sysReq.componentName"),
          t("download.sysReq.minReq"),
          t("download.sysReq.modReq"),
        ]}
        data={tableData}
      />
    </div>
  );
}
