// StatsCard.jsx
import React from "react";

export default function StatsCard({ activePlayers }: { activePlayers: number }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>İstatistikler</h3>
      </div>
      <div className="stat-item">
        <span className="stat-label">Aktif Oyuncu</span>
        <span className="stat-value">{activePlayers.toLocaleString()}</span>
      </div>
    </div>
  );
}
