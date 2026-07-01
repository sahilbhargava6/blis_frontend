"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";

export default function MemberLinks() {
  const [links, setLinks] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [customLabel, setCustomLabel] = useState("");

  const fetchLinksData = async () => {
    try {
      // Mock endpoints or real endpoints for members
      // The member controller in laravel likely needs endpoints for index links and generating one
      // If they don't exist yet, we'll gracefully handle it.
      const res = await api.get('/member/links').catch(() => ({ data: { data: [] } }));
      setLinks(res.data.data || []);
      
      // Fetch available campaigns for the dropdown
      const camps = await api.get('/admin/campaigns').catch(() => ({ data: { data: [
        { id: 1, title: 'Summer Promo 2026', total_payout: 50.0 }
      ] } }));
      setCampaigns(camps.data.data || []);

    } catch (err) {
      console.error("Failed to fetch links data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLinksData();
  }, []);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // await api.post('/member/links', { campaign_id: selectedCampaign, custom_label: customLabel });
      alert(`Link generated logically for campaign ${selectedCampaign}. (Backend hookup pending)`);
      setShowGenerateModal(false);
      setSelectedCampaign("");
      setCustomLabel("");
      fetchLinksData();
    } catch (err) {
      alert("Failed to generate link.");
    }
  };

  const copyToClipboard = (hash: string) => {
    const url = `https://track.blis.com/${hash}`;
    navigator.clipboard.writeText(url);
    alert(`Copied tracking link: ${url}`);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px" }}>
        <div>
          <h1 className="page-title">Tracking Links</h1>
          <p className="page-subtitle">Generate custom URLs for active campaigns to start earning.</p>
        </div>
        <button className="btn-primary" onClick={() => setShowGenerateModal(true)}>+ Generate Link</button>
      </div>

      <div className="glass-panel" style={{ minHeight: "300px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--glass-border)" }}>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Custom Label</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Campaign</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Tracking URL</th>
              <th style={{ padding: "12px 16px", fontWeight: "500", textAlign: "right" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4} style={{ padding: "24px", textAlign: "center" }}>Loading links...</td></tr>
            ) : links.length > 0 ? (
              links.map((link: any) => (
                <tr key={link.id} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <td style={{ padding: "16px", fontWeight: "600", color: "var(--text-strong)" }}>{link.custom_label || 'Default'}</td>
                  <td style={{ padding: "16px", color: "var(--text-muted)" }}>{link.campaign?.title || 'Unknown Campaign'}</td>
                  <td style={{ padding: "16px", color: "var(--primary)" }}>https://track.blis.com/{link.unique_hash}</td>
                  <td style={{ padding: "16px", textAlign: "right" }}>
                    <button 
                      onClick={() => copyToClipboard(link.unique_hash)}
                      style={{ background: "rgba(99, 102, 241, 0.1)", color: "var(--primary)", border: "none", padding: "8px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}
                    >
                      Copy Link
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} style={{ padding: "24px", textAlign: "center", color: "var(--text-muted)" }}>
                  No tracking links generated yet. Click above to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showGenerateModal && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div className="glass-panel" style={{ width: "100%", maxWidth: "450px", background: "rgba(255, 255, 255, 0.8)" }}>
            <h2 style={{ marginBottom: "24px", fontSize: "1.25rem", color: "var(--text-strong)" }}>Generate Tracking Link</h2>
            <form onSubmit={handleGenerate} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>Select Campaign</label>
                <select 
                  required 
                  value={selectedCampaign} 
                  onChange={e => setSelectedCampaign(e.target.value)}
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--glass-border)", outline: "none", background: "rgba(255,255,255,0.6)", color: "var(--text-strong)" }}
                >
                  <option value="" disabled>Choose an active campaign...</option>
                  {campaigns.map((c: any) => (
                    <option key={c.id} value={c.id}>{c.title} (Payout: ${c.total_payout})</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>Custom Label (Optional)</label>
                <input 
                  type="text" 
                  value={customLabel} 
                  onChange={e => setCustomLabel(e.target.value)} 
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--glass-border)", outline: "none", background: "rgba(255,255,255,0.6)" }} 
                  placeholder="e.g. TikTok Bio, Email Blast #1" 
                />
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "8px" }}>Use labels to track which marketing channel performs best.</p>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "16px" }}>
                <button type="button" onClick={() => setShowGenerateModal(false)} style={{ padding: "10px 16px", background: "transparent", border: "none", cursor: "pointer", color: "var(--text-muted)", fontWeight: "600" }}>Cancel</button>
                <button type="submit" className="btn-primary">Generate URL</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
