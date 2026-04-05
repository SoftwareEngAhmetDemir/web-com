import React, { useState } from "react";

const PLAYERS = [
  { name: "ALeeeM", level: 99, faction: 1 },
  { name: "IcaruS", level: 99, faction: 1 },
  { name: "TITANSxALeeeM", level: 99, faction: 1 },
  { name: "NEO1", level: 99, faction: 1 },
  { name: "xTITANSxMORx", level: 99, faction: 1 },
  { name: "xOGYx", level: 99, faction: 1 },
  { name: "POYRAZZ", level: 99, faction: 1 },
  { name: "DAYI", level: 99, faction: 1 },
  { name: "BeyazToros", level: 99, faction: 1 },
  { name: "Lux", level: 99, faction: 1 },
];

const MEDALS = ["🥇", "🥈", "🥉"];

export default function PlayerRanking() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="card">
      <div className="card-header">
        <h3>Oyuncu Sıralaması</h3>
      </div>

      <div className="tabs-row">
        {["Seviye", "Güç"].map((tab, i) => (
          <button
            key={tab}
            className={`tab ${activeTab === i ? "active" : ""}`}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </div>

      <table className="rank-table">
        <tbody>
          {PLAYERS.map((player, i) => (
            <tr key={player.name}>
              <td>
                {i < 3 ? (
                  <span className="rank-medal">{MEDALS[i]}</span>
                ) : (
                  <span className="rank-num">{i + 1}</span>
                )}
              </td>
              <td className="rank-name" style={{ fontSize: 11 }}>{player.name}</td>
              <td>
                <span className="lv">{player.level}Lv</span>
                <a href={`/player/${player.name}`} className="detail-btn">↗</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="/ranking/player" className="btn-more">+ TÜM LİSTE</a>
    </div>
  );
}
