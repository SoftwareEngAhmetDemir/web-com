import { CustomTable } from "../common/CustomTable/CustomTable";
import { useTranslation } from "react-i18next";

const data = [
  ["ALeeeM", "99", "ALeeeMFARM", "% a day% h hours%i min", { src: "https://capomt2.com/web/assets/images/empire/1.jpg", alt: "Kingdom Flag" }],
  ["IcaruS", "99", "SPARTANUS", "% a day% h hours%i min", { src: "https://capomt2.com/web/assets/images/empire/1.jpg", alt: "Kingdom Flag" }],
  ["TITANSxALeeeM", "99", "-", "% a day% h hours%i min", { src: "https://capomt2.com/web/assets/images/empire/1.jpg", alt: "Kingdom Flag" }],
];

export const CharacterOrderTable = () => {
  const { t } = useTranslation();

  const columns = [
    t("characterTable.characterName"),
    t("characterTable.level"),
    t("characterTable.guild"),
    t("characterTable.playTime"),
    t("characterTable.kingdom")
  ];

  return (
    <>
      <h1 className="text-[2rem] font-medium text-center">{t("characterTable.title")}</h1>
      <hr className="my-[20px]" />
      <CustomTable columns={columns} data={data} />
    </>
  );
};
