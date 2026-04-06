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
  title
}: {
  data: { name: string; score: string }[];
  title: string;
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
              <div className="cardText">
                <div>
                  {i < 3 ? (
                    <img src={MEDALS[i]} alt={`Medal ${i + 1}`} />
                  ) : (
                    i + 1
                  )}
                </div>
                <div>{guild.name}</div>
                <div> {guild.score}</div>
              </div>
            }
            classes="rank-card"
          />
        ))}
      </div>
    <div className="buttonContainer">
      <GridButton text="Tum Liste" className="listButton"/>
    </div>
    </div>
  );
}
