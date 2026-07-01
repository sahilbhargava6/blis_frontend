"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";

export default function LeaderCampaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCampaigns = async () => {
    try {
      const res = await api.get('/leader/campaigns');
      setCampaigns(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch leader campaigns");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px" }}>
        <div>
          <h1 className="page-title">Active Campaigns</h1>
          <p className="page-subtitle">View available offers for your team to promote.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ minHeight: "400px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--glass-border)" }}>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Campaign Title</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Total Payout</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Your Split (Override)</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Member Split</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4} style={{ padding: "24px", textAlign: "center" }}>Loading campaigns...</td></tr>
            ) : campaigns.length > 0 ? (
              campaigns.map((camp: any) => (
                <tr key={camp.id} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <td style={{ padding: "16px", fontWeight: "600", color: "var(--text-strong)" }}>{camp.title}</td>
                  <td style={{ padding: "16px", color: "var(--text-muted)", fontWeight: "500" }}>${parseFloat(camp.total_payout).toFixed(2)} / sale</td>
                  <td style={{ padding: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ background: "rgba(16, 185, 129, 0.15)", color: "var(--success)", padding: "4px 10px", borderRadius: "8px", fontSize: "0.9rem", fontWeight: "700" }}>
                        {parseFloat(camp.split_leader_percent)}%
                      </div>
                      <span style={{ color: "var(--success)", fontSize: "0.85rem", fontWeight: "600" }}>
                        (${((camp.total_payout * camp.split_leader_percent) / 100).toFixed(2)})
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ background: "rgba(99, 102, 241, 0.1)", color: "var(--primary)", padding: "4px 10px", borderRadius: "8px", fontSize: "0.9rem", fontWeight: "600" }}>
                        {parseFloat(camp.split_member_percent)}%
                      </div>
                      <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                        (${((camp.total_payout * camp.split_member_percent) / 100).toFixed(2)})
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={4} style={{ padding: "24px", textAlign: "center", color: "var(--text-muted)" }}>No active campaigns available.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
