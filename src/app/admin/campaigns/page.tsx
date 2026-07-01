"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";

export default function AdminCampaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    title: "",
    master_url: "",
    total_payout: 50.00,
    split_member_percent: 70,
    split_leader_percent: 30,
  });

  const fetchCampaigns = async () => {
    try {
      // Assuming AdminController has an index endpoint or we just mock if not
      const res = await api.get('/admin/campaigns');
      setCampaigns(res.data.data);
    } catch (err) {
      console.error("Failed to fetch campaigns");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/admin/campaigns', newCampaign);
      setShowModal(false);
      setNewCampaign({ title: "", master_url: "", total_payout: 50.0, split_member_percent: 70, split_leader_percent: 30 });
      fetchCampaigns();
    } catch (err) {
      alert("Failed to create campaign. Check logs.");
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
        <div>
          <h1 className="page-title">Campaign Manager</h1>
          <p className="page-subtitle">Create offers and configure global commission splits.</p>
        </div>
        <button className="btn-primary" onClick={() => setShowModal(true)}>+ New Campaign</button>
      </div>

      <div className="glass-panel" style={{ minHeight: "400px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--glass-border)" }}>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Title</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Master URL</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Payout ($)</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Member / Leader Split</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={5} style={{ padding: "24px", textAlign: "center" }}>Loading...</td></tr>
            ) : campaigns.length > 0 ? (
              campaigns.map((camp: any) => (
                <tr key={camp.id} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <td style={{ padding: "16px", fontWeight: "600", color: "var(--text-strong)" }}>{camp.title}</td>
                  <td style={{ padding: "16px", color: "var(--text-muted)" }}>{camp.master_url}</td>
                  <td style={{ padding: "16px", color: "var(--success)", fontWeight: "600" }}>${parseFloat(camp.total_payout).toFixed(2)}</td>
                  <td style={{ padding: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ background: "rgba(99, 102, 241, 0.1)", color: "var(--primary)", padding: "4px 8px", borderRadius: "4px", fontSize: "0.85rem", fontWeight: "600" }}>
                        {parseFloat(camp.split_member_percent)}%
                      </div>
                      <span style={{ color: "var(--text-muted)" }}>/</span>
                      <div style={{ background: "rgba(16, 185, 129, 0.1)", color: "var(--success)", padding: "4px 8px", borderRadius: "4px", fontSize: "0.85rem", fontWeight: "600" }}>
                        {parseFloat(camp.split_leader_percent)}%
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ background: camp.is_active ? "rgba(16, 185, 129, 0.15)" : "rgba(220, 38, 38, 0.15)", color: camp.is_active ? "var(--success)" : "var(--danger)", padding: "4px 12px", borderRadius: "12px", fontSize: "0.85rem", fontWeight: "600" }}>
                      {camp.is_active ? 'Active' : 'Paused'}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={5} style={{ padding: "24px", textAlign: "center", color: "var(--text-muted)" }}>No campaigns found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div className="glass-panel" style={{ width: "100%", maxWidth: "500px", background: "rgba(255, 255, 255, 0.8)" }}>
            <h2 style={{ marginBottom: "24px", fontSize: "1.25rem", color: "var(--text-strong)" }}>Create New Campaign</h2>
            <form onSubmit={handleCreate} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>Campaign Title</label>
                <input required type="text" value={newCampaign.title} onChange={e => setNewCampaign({...newCampaign, title: e.target.value})} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--glass-border)", outline: "none", background: "rgba(255,255,255,0.6)" }} placeholder="e.g. Winter Sale 2026" />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>Master Destination URL</label>
                <input required type="url" value={newCampaign.master_url} onChange={e => setNewCampaign({...newCampaign, master_url: e.target.value})} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--glass-border)", outline: "none", background: "rgba(255,255,255,0.6)" }} placeholder="https://store.com/sale" />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>Total CPA Payout ($)</label>
                <input required type="number" step="0.01" value={newCampaign.total_payout} onChange={e => setNewCampaign({...newCampaign, total_payout: parseFloat(e.target.value)})} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--glass-border)", outline: "none", background: "rgba(255,255,255,0.6)" }} />
              </div>

              <div style={{ display: "flex", gap: "16px" }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem", color: "var(--primary)" }}>Member Split (%)</label>
                  <input required type="number" min="0" max="100" value={newCampaign.split_member_percent} onChange={e => setNewCampaign({...newCampaign, split_member_percent: parseInt(e.target.value), split_leader_percent: 100 - parseInt(e.target.value)})} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--primary)", outline: "none", background: "rgba(99, 102, 241, 0.05)" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem", color: "var(--success)" }}>Leader Split (%)</label>
                  <input readOnly type="number" value={newCampaign.split_leader_percent} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--success)", outline: "none", background: "rgba(16, 185, 129, 0.05)" }} />
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "16px" }}>
                <button type="button" onClick={() => setShowModal(false)} style={{ padding: "10px 16px", background: "transparent", border: "none", cursor: "pointer", color: "var(--text-muted)", fontWeight: "600" }}>Cancel</button>
                <button type="submit" className="btn-primary">Create Campaign</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
