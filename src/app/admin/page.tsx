import React from "react";

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="page-title">Master Dashboard</h1>
      <p className="page-subtitle">Welcome back, Admin. Here is what is happening today.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "40px" }}>
        
        <div className="glass-card">
          <div className="stat-label">Total Active Clicks</div>
          <div className="stat-value">124,592</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>+14.5% from last week</p>
        </div>

        <div className="glass-card">
          <div className="stat-label">Total Conversions</div>
          <div className="stat-value">8,439</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>+5.2% from last week</p>
        </div>

        <div className="glass-card">
          <div className="stat-label">Platform Revenue</div>
          <div className="stat-value">$142,890</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>+22.4% from last week</p>
        </div>

        <div className="glass-card">
          <div className="stat-label">Pending Payouts</div>
          <div className="stat-value">$45,210</div>
          <p style={{ color: "var(--warning)", fontSize: "0.9rem", fontWeight: "500" }}>24 Requests Pending</p>
        </div>

      </div>

      <div className="glass-panel" style={{ minHeight: "400px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.25rem" }}>Revenue Overview</h2>
          <select style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid var(--glass-border)", padding: "8px 16px", borderRadius: "8px", outline: "none" }}>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
        </div>
        
        {/* Placeholder for chart */}
        <div style={{ width: "100%", height: "300px", border: "1px dashed var(--glass-border)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)" }}>
          [ Daily Revenue Line Chart Component ]
        </div>
      </div>
    </div>
  );
}
