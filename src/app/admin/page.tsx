"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";
import RevenueChart from "@/components/RevenueChart";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    total_clicks: 0,
    conversion_rate: 0,
    total_revenue: 0,
    pending_payouts: 0,
    chart_data: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get('/admin/dashboard/stats');
        setStats(res.data.data);
      } catch (err) {
        console.error("Failed to fetch admin stats. Is Auth setup?");
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="page-title">Master Dashboard</h1>
      <p className="page-subtitle">Welcome back, Admin. Here is what is happening today.</p>

      {error && <div style={{ background: "rgba(245, 158, 11, 0.1)", color: "var(--warning)", padding: "16px", borderRadius: "12px", marginBottom: "24px" }}>Note: API returned an error (likely 401 Unauthorized since login is skipped). Showing 0s.</div>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "40px" }}>
        
        <div className="glass-card">
          <div className="stat-label">Total Active Clicks</div>
          <div className="stat-value">{loading ? "..." : stats.total_clicks.toLocaleString()}</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>+0.0% from last week</p>
        </div>

        <div className="glass-card">
          <div className="stat-label">Total Conversions</div>
          <div className="stat-value">{loading ? "..." : `${stats.conversion_rate}%`}</div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", fontWeight: "500" }}>Average Rate</p>
        </div>

        <div className="glass-card">
          <div className="stat-label">Platform Revenue</div>
          <div className="stat-value">{loading ? "..." : `₹${stats.total_revenue.toLocaleString()}`}</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>Generated</p>
        </div>

        <div className="glass-card">
          <div className="stat-label">Pending Payouts</div>
          <div className="stat-value">{loading ? "..." : `₹${stats.pending_payouts.toLocaleString()}`}</div>
          <p style={{ color: "var(--warning)", fontSize: "0.9rem", fontWeight: "500" }}>Awaiting Approval</p>
        </div>

      </div>

      {!loading && stats.chart_data && (
        <RevenueChart data={stats.chart_data} dataKey="revenue" color="var(--primary)" title="Platform Revenue (Last 7 Days)" />
      )}

      <div className="glass-panel" style={{ minHeight: "400px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.25rem" }}>Revenue Overview</h2>
          <select style={{ background: "rgba(255,255,255,0.4)", color: "var(--text-strong)", border: "1px solid var(--glass-border)", padding: "8px 16px", borderRadius: "8px", outline: "none" }}>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
        </div>
        
        <div style={{ width: "100%", height: "300px", border: "1px dashed var(--glass-border)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)" }}>
          [ Daily Revenue Line Chart Component ]
        </div>
      </div>
    </div>
  );
}
