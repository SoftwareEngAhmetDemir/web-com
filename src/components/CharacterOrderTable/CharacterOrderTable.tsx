import { useEffect } from "react";
import { CustomTable } from "../common/CustomTable/CustomTable";
import { useTranslation } from "react-i18next";
import { useRankingStore } from "../../store/rankingStore";

const EMPIRE_FLAG_URL = (empire: number) =>
  `https://capomt2.com/web/assets/images/empire/${empire}.jpg`;

export const CharacterOrderTable = () => {
  const { t } = useTranslation();

  const {
    characters,
    isLoadingCharacters,
    charactersError,
    fetchCharacters,
  } = useRankingStore();

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const columns = [
    t("characterTable.characterName"),
    t("characterTable.level"),
    t("characterTable.guild"),
    t("characterTable.playTime"),
    t("characterTable.kingdom"),
  ];

  const data = characters.map((c) => [
    c.characterName ?? c.name ?? "—",
    String(c.level ?? "—"),
    c.guildName ?? c.guild ?? "—",
    c.playTime ?? "—",
    c.empire
      ? { src: EMPIRE_FLAG_URL(c.empire), alt: `Empire ${c.empire}` }
      : "—",
  ] as (string | { src: string; alt?: string })[]);

  return (
    <>
      <h1 className="text-[2rem] font-medium text-center">
        {t("characterTable.title")}
      </h1>
      <hr className="my-[20px]" />

      {isLoadingCharacters && (
        <p className="text-center py-8 opacity-70">{t("list.loading") ?? "Loading..."}</p>
      )}

      {charactersError && !isLoadingCharacters && (
        <p className="text-center py-8 text-red-400">{charactersError}</p>
      )}

      {!isLoadingCharacters && !charactersError && (
        <CustomTable columns={columns} data={data} />
      )}
    </>
  );
};
