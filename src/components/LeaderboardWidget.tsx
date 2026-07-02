"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";

interface AffiliateRank {
  rank: number;
  name: string;
  earnings: number;
}

interface TeamRank {
  rank: number;
  group_name: string;
  leader: string;
  earnings: number;
}

export default function LeaderboardWidget() {
  const [data, setData] = useState<{ month: string; top_affiliates: AffiliateRank[]; top_teams: TeamRank[] } | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"affiliates" | "teams">("affiliates");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await api.get("/leaderboard");
        setData(res.data.data);
      } catch (err) {
        console.error("Failed to fetch leaderboard data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="glass-panel" style={{ padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Loading leaderboard standings...</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="glass-panel" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h2 style={{ fontSize: "1.2rem", color: "var(--text-strong)", margin: 0 }}>🏆 Network Leaderboard</h2>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "500" }}>{data.month}</span>
        </div>
        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: "4px 0 0 0" }}>Obscured rankings to encourage friendly competition.</p>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", background: "rgba(0,0,0,0.03)", padding: "4px", borderRadius: "8px", gap: "4px" }}>
        <button
          onClick={() => setActiveTab("affiliates")}
          style={{
            flex: 1,
            padding: "8px",
            border: "none",
            borderRadius: "6px",
            background: activeTab === "affiliates" ? "white" : "transparent",
            color: activeTab === "affiliates" ? "var(--text-strong)" : "var(--text-muted)",
            fontWeight: "600",
            fontSize: "0.85rem",
            cursor: "pointer",
            boxShadow: activeTab === "affiliates" ? "0 2px 4px rgba(0,0,0,0.05)" : "none",
            transition: "all 0.2s ease"
          }}
        >
          Top Affiliates
        </button>
        <button
          onClick={() => setActiveTab("teams")}
          style={{
            flex: 1,
            padding: "8px",
            border: "none",
            borderRadius: "6px",
            background: activeTab === "teams" ? "white" : "transparent",
            color: activeTab === "teams" ? "var(--text-strong)" : "var(--text-muted)",
            fontWeight: "600",
            fontSize: "0.85rem",
            cursor: "pointer",
            boxShadow: activeTab === "teams" ? "0 2px 4px rgba(0,0,0,0.05)" : "none",
            transition: "all 0.2s ease"
          }}
        >
          Top Teams
        </button>
      </div>

      {/* Standings List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "4px" }}>
        {activeTab === "affiliates" ? (
          data.top_affiliates.length > 0 ? (
            data.top_affiliates.map((item) => (
              <div
                key={item.rank}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  background: item.rank === 1 ? "linear-gradient(90deg, rgba(245,158,11,0.1) 0%, transparent 100%)" : "rgba(0,0,0,0.01)",
                  border: item.rank === 1 ? "1px solid rgba(245,158,11,0.2)" : "1px solid var(--glass-border)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    background: item.rank === 1 ? "#F59E0B" : item.rank === 2 ? "#94A3B8" : item.rank === 3 ? "#B45309" : "rgba(0,0,0,0.05)",
                    color: item.rank <= 3 ? "white" : "var(--text-muted)"
                  }}>
                    {item.rank === 1 ? "👑" : item.rank}
                  </span>
                  <span style={{ fontWeight: "600", color: "var(--text-strong)", fontSize: "0.9rem" }}>{item.name}</span>
                </div>
                <span style={{ color: "var(--success)", fontWeight: "700", fontSize: "0.9rem" }}>₹{item.earnings.toFixed(2)}</span>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem", padding: "20px 0" }}>No affiliate earnings logged this month.</p>
          )
        ) : (
          data.top_teams.length > 0 ? (
            data.top_teams.map((item) => (
              <div
                key={item.rank}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  background: item.rank === 1 ? "linear-gradient(90deg, rgba(99,102,241,0.1) 0%, transparent 100%)" : "rgba(0,0,0,0.01)",
                  border: item.rank === 1 ? "1px solid rgba(99,102,241,0.2)" : "1px solid var(--glass-border)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", overflow: "hidden" }}>
                  <span style={{
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    fontSize: "0.8rem",
                    fontWeight: "700",
                    background: item.rank === 1 ? "#6366F1" : item.rank === 2 ? "#94A3B8" : item.rank === 3 ? "#B45309" : "rgba(0,0,0,0.05)",
                    color: item.rank <= 3 ? "white" : "var(--text-muted)"
                  }}>
                    {item.rank === 1 ? "🏆" : item.rank}
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    <span style={{ fontWeight: "600", color: "var(--text-strong)", fontSize: "0.9rem", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                      {item.group_name}
                    </span>
                    <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Leader: {item.leader}</span>
                  </div>
                </div>
                <span style={{ color: "var(--success)", fontWeight: "700", fontSize: "0.9rem", marginLeft: "8px" }}>₹{item.earnings.toFixed(2)}</span>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem", padding: "20px 0" }}>No team earnings logged this month.</p>
          )
        )}
      </div>
    </div>
  );
}
