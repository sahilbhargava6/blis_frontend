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

  const [postbackUrl, setPostbackUrl] = useState("");
  const [savingPostback, setSavingPostback] = useState(false);

  const fetchLinksData = async () => {
    try {
      const res = await api.get('/member/links').catch(() => ({ data: { data: [] } }));
      setLinks(res.data.data || []);
      
      const camps = await api.get('/admin/campaigns').catch(() => ({ data: { data: [
        { id: 1, title: 'Summer Promo 2026', total_payout: 50.0 }
      ] } }));
      setCampaigns(camps.data.data || []);

      const postbackRes = await api.get('/member/postback').catch(() => ({ data: { data: { postback_url: "" } } }));
      setPostbackUrl(postbackRes.data.data.postback_url || "");
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

  const handleSavePostback = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingPostback(true);
    try {
      await api.post('/member/postback', { postback_url: postbackUrl || null });
      alert("S2S Postback URL updated successfully!");
    } catch (err) {
      alert("Failed to update Postback URL. Make sure it is a valid absolute URL.");
    } finally {
      setSavingPostback(false);
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

      <div className="glass-panel" style={{ minHeight: "350px", marginBottom: "40px" }}>
        <div className="table-responsive">
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--glass-border)" }}>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Label</th>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Campaign</th>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Tracking Link</th>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Created</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} style={{ padding: "24px", textAlign: "center" }}>Loading links...</td></tr>
              ) : links.length > 0 ? (
                links.map((link: any) => (
                  <tr key={link.id} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <td style={{ padding: "16px", fontWeight: "600", color: "var(--text-strong)" }}>{link.custom_label || 'Default Link'}</td>
                    <td style={{ padding: "16px", color: "var(--text-muted)" }}>{link.campaign?.title || `Campaign ID: ${link.campaign_id}`}</td>
                    <td style={{ padding: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <code style={{ background: "rgba(0,0,0,0.05)", padding: "4px 8px", borderRadius: "6px", fontSize: "0.85rem", color: "var(--primary)" }}>
                          {process.env.NEXT_PUBLIC_API_URL?.replace('/api/v1', '') || 'http://localhost:8000'}/track/{link.unique_hash}
                        </code>
                        <button className="btn-primary" style={{ padding: "4px 12px", fontSize: "0.8rem", borderRadius: "6px" }} onClick={() => navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_API_URL?.replace('/api/v1', '') || 'http://localhost:8000'}/track/${link.unique_hash}`)}>
                          Copy
                        </button>
                      </div>
                    </td>
                    <td style={{ padding: "16px", color: "var(--text-muted)" }}>{link.created_at ? new Date(link.created_at).toLocaleDateString() : 'N/A'}</td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan={4} style={{ padding: "24px", textAlign: "center", color: "var(--text-muted)" }}>No tracking links generated yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* S2S Postback Settings Card */}
      <div className="glass-panel" style={{ maxWidth: "800px" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "12px" }}>📡 Server-to-Server (S2S) Postback Setup</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.4, marginBottom: "20px" }}>
          Configure a global webhook callback to automatically notify your external tracking systems (like Voluum, Keitaro, or AdsBridge) when you secure an approved conversion.
        </p>

        <form onSubmit={handleSavePostback} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>Global Postback URL</label>
            <input 
              type="url" 
              value={postbackUrl} 
              onChange={e => setPostbackUrl(e.target.value)} 
              className="input-field"
              placeholder="https://yourtracker.com/postback?cid={click_id}&payout={payout}" 
            />
          </div>

          <div style={{ background: "rgba(0,0,0,0.02)", padding: "16px", borderRadius: "8px", border: "1px solid var(--glass-border)" }}>
            <h3 style={{ fontSize: "0.85rem", fontWeight: "700", margin: "0 0 10px 0", color: "var(--text-strong)" }}>💡 Available Macro Replacements</h3>
            <ul style={{ paddingLeft: "20px", margin: 0, fontSize: "0.8rem", color: "var(--text-muted)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <li><code>{`{click_id}`}</code> - Unique Click Database ID</li>
              <li><code>{`{sub_id}`}</code> - Original Click UUID sent to brand</li>
              <li><code>{`{payout}`}</code> - Your exact commission payout (₹)</li>
              <li><code>{`{campaign_id}`}</code> - Campaign Master ID</li>
              <li><code>{`{status}`}</code> - Conversion Status (approved)</li>
            </ul>
          </div>

          <button 
            type="submit" 
            disabled={savingPostback}
            className="btn-primary" 
            style={{ alignSelf: "flex-start", padding: "10px 20px" }}
          >
            {savingPostback ? "Saving..." : "Save Postback Settings"}
          </button>
        </form>
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
                    <option key={c.id} value={c.id}>{c.title} (Payout: ₹{c.total_payout})</option>
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
