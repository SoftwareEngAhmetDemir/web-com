import React from "react";

// To add announcements, push objects into this array:
// { id, title, date, content }
const ANNOUNCEMENTS:{ id: number; title: string; date: string; content: string }[] = [];

export default function Announcements() {
  return (
    <div>
      <div className="section-header">
        <span className="section-title">Duyurular</span>
      </div>
      <div className="ornament">◆ ◇ ◆</div>

      {ANNOUNCEMENTS.length === 0 ? (
        <div className="announce-empty">
          Henüz duyuru eklenmemiş.
          <br />
          <span style={{ fontSize: 11, opacity: 0.5 }}>No announcements have been added yet.</span>
        </div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {ANNOUNCEMENTS.map((ann) => (
            <li
              key={ann.id}
              style={{
                padding: "14px 16px",
                marginBottom: 8,
                background: "var(--bg-card)",
                border: "1px solid var(--border-gold)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: 12, color: "var(--gold)", letterSpacing: 2 }}>
                  {ann.title}
                </span>
                <span style={{ fontSize: 10, color: "var(--text-dim)" }}>{ann.date}</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--text-primary)", lineHeight: 1.6 }}>{ann.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
