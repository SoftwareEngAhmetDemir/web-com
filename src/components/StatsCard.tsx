// StatsCard.jsx
import React from "react";
import { RedCard } from "./common/RedCard/RedCard";

export default function StatsCard({ activePlayers }: { activePlayers: number }) {
  return (
    <div className="card">
      <div className="card-header">
       <RedCard text="Statistics" />
      </div>
      <div className="stat-item">

        <span className="stat-label">Active Player</span>
        <span className="stat-value">{activePlayers.toLocaleString()}</span>
      </div>
    </div>
  );
}
