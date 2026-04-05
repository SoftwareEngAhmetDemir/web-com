import React from "react";

export default function DownloadBanner() {
  return (
    <a href="/download" className="dl-banner" style={{ textDecoration: "none", display: "block" }}>
      <span className="dl-icon">⬇</span>
      <div className="dl-title">İNDİR</div>
      <div className="dl-sub">Download Client</div>
    </a>
  );
}
