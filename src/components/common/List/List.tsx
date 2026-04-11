import { RedCard } from "../RedCard/RedCard";
import "./style.scss";
import { GridButton } from "../GridButton/GridButton";
import { useTranslation } from "react-i18next";

const MEDALS = [
  "https://capomt2.com/web/assets/ThemeFifteen/images/1.png",
  "https://capomt2.com/web/assets/ThemeFifteen/images/2.png",
  "https://capomt2.com/web/assets/ThemeFifteen/images/3.png"
];

export default function List({
  data,
  title,
  symbole,
  isLoading,
  error,
  onFullList,
}: {
  data: { name: string; score: string; flag?: string }[];
  title: string;
  symbole?: string;
  isLoading?: boolean;
  error?: string | null;
  onFullList?: () => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="card">
      <div className="card-header mb-2">
        <RedCard text={title} />
      </div>

      {isLoading && (
        <div className="text-center py-4 text-sm opacity-70">
          {t("list.loading")}
        </div>
      )}

      {error && !isLoading && (
        <div className="text-center py-4 text-sm text-red-400">
          {error}
        </div>
      )}

      {!isLoading && !error && (
        <div className="rank-table">
          {data.map((item, i) => (
            <RedCard
              key={i}
              text={
                <div className="cardText grid grid-cols-7 items-center">
                  <div className="col-span-1">
                    {i < 3 ? (
                      <img src={MEDALS[i]} alt={`Medal ${i + 1}`} />
                    ) : (
                      i + 1
                    )}
                  </div>
                  <div className="col-span-4">{item.name}</div>
                  {item.flag && (
                    <div className="col-span-1">
                      <img
                        width={"30"}
                        height={"30"}
                        src={item.flag}
                        alt={`Flag ${i + 1}`}
                      />
                    </div>
                  )}
                  <div
                    className={
                      "flex justify-end" +
                      (item.flag ? " col-span-1" : " col-span-2")
                    }
                  >
                    {item.score}{" "}
                    <div className="text-xs">{symbole ?? null}</div>
                  </div>
                </div>
              }
              classes="rank-card"
            />
          ))}
        </div>
      )}

      <div className="buttonContainer mt-4">
        <GridButton
          text={t("list.fullList")}
          className="listButton px-1"
          onClick={onFullList}
        />
      </div>
    </div>
  );
}
