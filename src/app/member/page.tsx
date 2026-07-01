import React from "react";

export default function MemberDashboard() {
  return (
    <div>
      <h1 className="page-title">Affiliate Overview</h1>
      <p className="page-subtitle">Track your personal promotional performance.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "40px" }}>
        
        <div className="glass-card">
          <div className="stat-label">My Clicks</div>
          <div className="stat-value">12,340</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>Traffic generated</p>
        </div>

        <div className="glass-card">
          <div className="stat-label">Conversions</div>
          <div className="stat-value">412</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>3.3% Conversion Rate</p>
        </div>

        <div className="glass-card" style={{ borderColor: "var(--success)", background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.02) 100%)" }}>
          <div className="stat-label" style={{ color: "var(--success)" }}>Cleared Balance</div>
          <div className="stat-value" style={{ color: "white" }}>$1,450</div>
          <button className="btn-primary" style={{ marginTop: "16px", width: "100%", background: "var(--success)" }}>Withdraw Now</button>
        </div>

        <div className="glass-card">
          <div className="stat-label">Pending Balance</div>
          <div className="stat-value">$320</div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Awaiting network approval</p>
        </div>

      </div>

      <div className="glass-panel" style={{ minHeight: "400px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.25rem" }}>Recent Conversions</h2>
          <button className="btn-primary" style={{ background: "var(--glass-border)", color: "white" }}>View All</button>
        </div>
        
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--glass-border)" }}>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Date</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Campaign</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Link Label</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Commission</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <td style={{ padding: "16px", color: "var(--text-strong)", fontWeight: "500" }}>Oct 12, 10:45 AM</td>
              <td style={{ padding: "16px", color: "var(--text-strong)", fontWeight: "500" }}>Summer Promo 2026</td>
              <td style={{ padding: "16px", color: "var(--text-muted)" }}>Instagram Bio</td>
              <td style={{ padding: "16px", color: "var(--success)", fontWeight: "600" }}>$25.00</td>
              <td style={{ padding: "16px" }}><span style={{ padding: "4px 8px", background: "rgba(16, 185, 129, 0.15)", color: "var(--success)", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "600" }}>Cleared</span></td>
            </tr>
            <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <td style={{ padding: "16px", color: "var(--text-strong)", fontWeight: "500" }}>Oct 12, 09:12 AM</td>
              <td style={{ padding: "16px", color: "var(--text-strong)", fontWeight: "500" }}>Tech Gadgets List</td>
              <td style={{ padding: "16px", color: "var(--text-muted)" }}>Twitter Thread</td>
              <td style={{ padding: "16px", color: "var(--warning)", fontWeight: "600" }}>$15.00</td>
              <td style={{ padding: "16px" }}><span style={{ padding: "4px 8px", background: "rgba(245, 158, 11, 0.15)", color: "var(--warning)", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "600" }}>Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
