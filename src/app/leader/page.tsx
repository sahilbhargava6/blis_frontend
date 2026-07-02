"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";
import RevenueChart from "@/components/RevenueChart";
import LeaderboardWidget from "@/components/LeaderboardWidget";

export default function LeaderDashboard() {
  const [stats, setStats] = useState({
    total_group_clicks: 0,
    group_conversion_rate: 0,
    accumulated_leader_cut: 0,
    chart_data: []
  });
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLeaderData = async () => {
      try {
        const [statsRes, teamRes] = await Promise.all([
          api.get('/leader/dashboard/stats'),
          api.get('/leader/team')
        ]);
        setStats(statsRes.data.data);
        setTeamMembers(teamRes.data.data || []);
      } catch (err) {
        console.error("Failed to fetch leader data. Is Auth setup?");
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLeaderData();
  }, []);

  return (
    <div>
      <h1 className="page-title">Leader Overview</h1>
      <p className="page-subtitle">Track your team's performance and distribute campaigns.</p>

      {error && <div style={{ background: "rgba(245, 158, 11, 0.1)", color: "var(--warning)", padding: "16px", borderRadius: "12px", marginBottom: "24px" }}>Note: API returned an error (likely 401 Unauthorized since login is skipped). Showing 0s.</div>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "40px" }}>
        
        <div className="glass-card">
          <div className="stat-label">Group Clicks</div>
          <div className="stat-value">{loading ? "..." : stats.total_group_clicks.toLocaleString()}</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>Traffic generated</p>
        </div>

        <div className="glass-card">
          <div className="stat-label">Group Conversions</div>
          <div className="stat-value">{loading ? "..." : `${stats.group_conversion_rate}%`}</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>Avg Rate</p>
        </div>

        <div className="glass-card">
          <div className="stat-label">My Earnings Cut</div>
          <div className="stat-value">{loading ? "..." : `₹${stats.accumulated_leader_cut.toLocaleString()}`}</div>
          <p style={{ color: "var(--success)", fontSize: "0.9rem", fontWeight: "500" }}>Available</p>
        </div>

        <div className="glass-card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <div className="stat-label">Team Roster</div>
          <div style={{ fontSize: "2rem", fontWeight: "700", color: "var(--secondary)" }}>
            {loading ? "..." : `${teamMembers.length} / 20`}
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Active Members</p>
        </div>

      </div>

      {!loading && stats.chart_data && (
        <RevenueChart data={stats.chart_data} dataKey="revenue" color="var(--secondary)" title="Leader Earnings (Last 7 Days)" />
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginTop: "40px" }}>
        <LeaderboardWidget />
        
        <div className="glass-panel">
          <h2 style={{ fontSize: "1.25rem", marginBottom: "24px" }}>My Active Affiliates</h2>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
            {teamMembers.length > 0 ? (
              teamMembers.slice(0, 5).map((member: any) => (
                <li key={member.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "16px", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <div>
                    <div style={{ fontWeight: "600", color: "var(--text-strong)" }}>{member.name}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Active Member</div>
                  </div>
                </li>
              ))
            ) : (
              <li style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>No active team members.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
