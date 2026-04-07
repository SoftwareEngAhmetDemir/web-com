// StatsCard.jsx
import React from "react";
import { RedCard } from "./common/RedCard/RedCard";

export default function StatsCard({ activePlayers }: { activePlayers: number }) {
  return (
    <div className="card">
      <div className="card-header">
       <RedCard text="Statistics" />
      </div>
      <div className="flex justify-between items-center  p-3">

        <span className="text-[#ffedc6]!">Active Player</span>
        <span className="text-[#e8cc7a]!">{activePlayers.toLocaleString()}</span>
      </div>
    </div>
  );
}
