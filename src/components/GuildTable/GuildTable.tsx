import { useEffect } from "react";
import { CustomTable } from "../common/CustomTable/CustomTable";
import { useTranslation } from "react-i18next";
import { useRankingStore } from "../../store/rankingStore";

export const GuildTable = () => {
  const { t } = useTranslation();

  const {
    guilds,
    isLoadingGuilds,
    guildsError,
    fetchGuilds,
  } = useRankingStore();

  useEffect(() => {
    fetchGuilds();
  }, [fetchGuilds]);

  const columns = [
    t("guildTable.guildName"),
    t("guildTable.level"),
    t("guildTable.points"),
    t("guildTable.kingdom"),
    t("guildTable.win"),
    t("guildTable.draw"),
    t("guildTable.lose"),
  ];

  const data = guilds.map((g) => [
    g.guildName ?? "—",
    String(g.level ?? "—"),
    String(g.score ?? "—"),
    String(g.kingdom ?? "—"),
    String(g.winCount ?? "—"),
    String(g.drawCount ?? "—"),
    String(g.loseCount ?? "—"),
  ]);

  return (
    <>
      <h1 className="text-[2rem] font-medium text-center">
        {t("guildTable.title")}
      </h1>
      <hr className="my-[20px]" />

      {isLoadingGuilds && (
        <p className="text-center py-8 opacity-70">{t("list.loading")}</p>
      )}

      {guildsError && !isLoadingGuilds && (
        <p className="text-center py-8 text-red-400">{guildsError}</p>
      )}

      {!isLoadingGuilds && !guildsError && (
        <CustomTable columns={columns} data={data} />
      )}
    </>
  );
};
