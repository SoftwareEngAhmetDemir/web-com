// FacebookWidget.jsx
import React from "react";

export default function FacebookWidget() {
  return (
    <div className="fb-mock">
      <div className="fb-mock-inner">
        <div className="fb-mock-logo">f</div>
        <div className="fb-mock-name">Capo2 WS Server</div>
        <div className="fb-mock-handle">@capo2wslik</div>
        <a
          href="https://www.facebook.com/capo2wslik"
          target="_blank"
          rel="noopener noreferrer"
          className="fb-btn"
        >
          Sayfayı Beğen
        </a>
      </div>
    </div>
  );
}
