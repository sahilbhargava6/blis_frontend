"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";

export default function MemberDashboard() {
  const [stats, setStats] = useState({
    personal_clicks: 0,
    successful_conversions: 0,
    pending_balance: 0,
    cleared_balance: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMemberData = async () => {
      try {
        const res = await api.get('/member/dashboard/stats');
        setStats(res.data.data);
      } catch (err) {
        console.error("Failed to fetch member stats. Is Auth setup?");
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMemberData();
  }, []);

  return (
    <div>
      <h1 className="page-title">Affiliate Overview</h1>
      <p className="page-subtitle">Track your personal promotional performance.</p>

      {error && <div style={{ background: "rgba(245, 158, 11, 0.1)", color: "var(--warning)", padding: "16px", borderRadius: "12px", marginBottom: "24px" }}>Note: API returned an error (likely 401 Unauthorized since login is skipped). Showing 0s.</div>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "40px" }}>
        
        <div className="glass-card">
          <div className="stat-label">My Clicks</div>
          <div className="stat-value">{loading ? "..." : stats.personal_clicks.toLocaleString()}</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>Traffic generated</p>
        </div>

        <div className="glass-card">
          <div className="stat-label">Conversions</div>
          <div className="stat-value">{loading ? "..." : stats.successful_conversions.toLocaleString()}</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>Total Sales</p>
        </div>

        <div className="glass-card" style={{ borderColor: "var(--success)", background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)" }}>
          <div className="stat-label" style={{ color: "var(--success)" }}>Cleared Balance</div>
          <div className="stat-value" style={{ color: "var(--text-strong)" }}>
            {loading ? "..." : `₹${stats.cleared_balance.toLocaleString()}`}
          </div>
          <button className="btn-primary" style={{ marginTop: "16px", width: "100%", background: "var(--success)" }}>Withdraw Now</button>
        </div>

        <div className="glass-card">
          <div className="stat-label">Pending Balance</div>
          <div className="stat-value">{loading ? "..." : `₹${stats.pending_balance.toLocaleString()}`}</div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Awaiting network approval</p>
        </div>

      </div>

      <div className="glass-panel" style={{ minHeight: "400px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.25rem" }}>Recent Conversions</h2>
          <button className="btn-primary" style={{ background: "var(--glass-border)", color: "var(--text-strong)" }}>View All</button>
        </div>
        
        <div className="table-responsive">
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
              <tr>
                <td colSpan={5} style={{ padding: "24px", textAlign: "center", color: "var(--text-muted)" }}>
                  No recent conversions found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
