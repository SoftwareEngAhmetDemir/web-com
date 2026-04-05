import React from "react";

const GUILDS = [
  { name: "AKASYADURAGI", score: "24K" },
  { name: "TR", score: "23K" },
  { name: "AMGOTMEME", score: "23K" },
  { name: "KVP", score: "23K" },
  { name: "RAMPAGE", score: "22K" },
  { name: "FBI", score: "22K" },
  { name: "GREEDALLSTAR", score: "22K" },
  { name: "WOK", score: "22K" },
  { name: "FAVELA", score: "21K" },
  { name: "SOLDELACRIME", score: "21K" },
];

const MEDALS = ["🥇", "🥈", "🥉"];

export default function GuildRanking() {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Lonca Sıralaması</h3>
      </div>
      <table className="rank-table">
        <tbody>
          {GUILDS.map((guild, i) => (
            <tr key={guild.name}>
              <td>
                {i < 3 ? (
                  <span className="rank-medal">{MEDALS[i]}</span>
                ) : (
                  <span className="rank-num">{i}</span>
                )}
              </td>
              <td className="rank-name">{guild.name}</td>
              <td className="rank-score">{guild.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="/ranking/guild" className="btn-more">+ TÜM LİSTE</a>
    </div>
  );
}
