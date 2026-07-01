import React from "react";

export default function LeaderDashboard() {
  return (
    <div>
      <h1 className="page-title">Leader Overview</h1>
      <p className="page-subtitle">Track your team's performance and distribute campaigns.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "40px" }}>
        
        <div className="glass-card">
          <div className="stat-label">Group Clicks</div>
          <div className="stat-value">45,102</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>+8.2% from last week</p>
        </div>

        <div className="glass-card">
          <div className="stat-label">Group Conversions</div>
          <div className="stat-value">2,109</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>4.6% Avg Rate</p>
        </div>

        <div className="glass-card">
          <div className="stat-label">My Earnings Cut</div>
          <div className="stat-value">$18,450</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>Available to withdraw</p>
        </div>

        <div className="glass-card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <div className="stat-label">Team Roster</div>
          <div style={{ fontSize: "2rem", fontWeight: "700", color: "var(--secondary)" }}>18 / 20</div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Active Members</p>
        </div>

      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
        <div className="glass-panel" style={{ minHeight: "350px" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "24px" }}>Team Performance Trends</h2>
          <div style={{ width: "100%", height: "250px", border: "1px dashed var(--glass-border)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)" }}>
            [ Sparkline Chart ]
          </div>
        </div>
        
        <div className="glass-panel">
          <h2 style={{ fontSize: "1.25rem", marginBottom: "24px" }}>Top Members</h2>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
            <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "16px", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <div>
                <div style={{ fontWeight: "600", color: "var(--text-strong)" }}>Alex Carter</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>1,204 Conversions</div>
              </div>
              <div style={{ color: "var(--success)", fontWeight: "600" }}>$4,120</div>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "16px", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <div>
                <div style={{ fontWeight: "600", color: "var(--text-strong)" }}>Sarah Jenkins</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>890 Conversions</div>
              </div>
              <div style={{ color: "var(--success)", fontWeight: "600" }}>$3,450</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
