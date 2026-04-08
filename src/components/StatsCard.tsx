import { RedCard } from "./common/RedCard/RedCard";
import { useTranslation } from "react-i18next";

export default function StatsCard({ activePlayers }: { activePlayers: number }) {
  const { t } = useTranslation();

  return (
    <div className="card">
      <div className="card-header">
        <RedCard text={t("stats.title")} />
      </div>
      <div className="flex justify-between items-center p-3">
        <span className="text-[#ffedc6]!">{t("stats.activePlayer")}</span>
        <span className="text-[#e8cc7a]!">{activePlayers.toLocaleString()}</span>
      </div>
    </div>
  );
}
