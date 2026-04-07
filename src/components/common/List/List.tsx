import React from "react";
import { RedCard } from "../RedCard/RedCard";
import "./style.scss";
import { GridButton } from "../GridButton/GridButton";

const MEDALS = [
  "https://capomt2.com/web/assets/ThemeFifteen/images/1.png",
  "https://capomt2.com/web/assets/ThemeFifteen/images/2.png",
  "https://capomt2.com/web/assets/ThemeFifteen/images/3.png"
];

export default function List({
  data,
  title,
  symbole
}: {
  data: { name: string; score: string; flag?: string }[];
  title: string;
  symbole?: string;
}) {
  return (
    <div className="card">
      <div className="card-header mb-2">
        <RedCard text={title} />
      </div>
      <div className="rank-table">
        {data.map((guild, i) => (
          <RedCard
            key={i}
            text={
              <div className="cardText grid grid-cols-7  items-center">
                <div className="col-span-1">
                  {i < 3 ? (
                    <img src={MEDALS[i]} alt={`Medal ${i + 1}`} />
                  ) : (
                    i + 1
                  )}
                </div>
                <div className="col-span-4">{guild.name}</div>
                {guild.flag && (
                  <div className="col-span-1">
                    <img
                      width={"30"}
                      height={"30"}
                      src={guild.flag}
                      alt={`Flag ${i + 1}`}
                    />
                  </div>
                )}
                <div className={"flex justify-end" + (guild.flag ? " col-span-1" : " col-span-2")}> 
                  {guild.score} <div className="text-xs">{symbole??null}</div></div>
              </div>
            }
            classes="rank-card"
          />
        ))}
      </div>
      <div className="buttonContainer mt-4">
        <GridButton text="Full List +" className="listButton px-1" />
      </div>
    </div>
  );
}
