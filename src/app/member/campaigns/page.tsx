"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";

export default function MemberCampaigns() {
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);

  const fetchCampaigns = async () => {
    try {
      const res = await api.get("/member/campaigns");
      setCampaigns(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch campaigns", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div>
      <h1 className="page-title">Available Campaigns</h1>
      <p className="page-subtitle">Browse campaigns distributed by your Group Leader and access marketing materials.</p>

      {loading ? (
        <div style={{ textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>Loading campaigns...</div>
      ) : campaigns.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px", marginTop: "24px" }}>
          {campaigns.map((camp) => {
            const memberCut = camp.total_payout * (camp.split_member_percent / 100);
            return (
              <div key={camp.id} className="glass-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ fontSize: "1.2rem", color: "var(--text-strong)", marginBottom: "8px" }}>{camp.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "0.8rem", background: "rgba(16,185,129,0.15)", color: "var(--success)", padding: "4px 8px", borderRadius: "6px", fontWeight: "600" }}>
                      Earn ₹{memberCut.toFixed(2)} per sale
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      ({camp.split_member_percent}% split)
                    </span>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.4, marginBottom: "16px" }}>
                    Promote this campaign using your tracking links. Click below to retrieve banners, text creatives, and swipe files.
                  </p>
                </div>
                
                <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
                  <button 
                    onClick={() => setSelectedCampaign(camp)} 
                    className="btn-primary" 
                    style={{ flex: 1, padding: "10px", fontSize: "0.9rem", background: "transparent", border: "1px solid var(--glass-border)", color: "var(--text-strong)" }}
                  >
                    📁 Marketing Assets ({camp.assets?.length || 0})
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="glass-panel" style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", marginTop: "24px" }}>
          No campaigns have been distributed to your group by your leader yet.
        </div>
      )}

      {selectedCampaign && (
        <CampaignAssetsModal 
          campaign={selectedCampaign} 
          onClose={() => setSelectedCampaign(null)} 
        />
      )}
    </div>
  );
}

function CampaignAssetsModal({ campaign, onClose }: { campaign: any; onClose: () => void }) {
  const assets = campaign.assets || [];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
      <div className="glass-panel" style={{ width: "100%", maxWidth: "600px", background: "rgba(255, 255, 255, 0.8)", display: "flex", flexDirection: "column", maxHeight: "80vh" }}>
        <h2 style={{ fontSize: "1.25rem", color: "var(--text-strong)", marginBottom: "8px" }}>Marketing Assets</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "20px" }}>Campaign: <strong>{campaign.title}</strong></p>

        <div style={{ overflowY: "auto", flex: 1, display: "flex", flexDirection: "column", gap: "16px", paddingRight: "8px" }}>
          {assets.length > 0 ? (
            assets.map((asset: any) => (
              <div key={asset.id} style={{ background: "rgba(0,0,0,0.02)", border: "1px solid var(--glass-border)", padding: "16px", borderRadius: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <div>
                    <span style={{ fontWeight: "600", fontSize: "0.95rem", color: "var(--text-strong)" }}>{asset.name}</span>
                    <span style={{ fontSize: "0.75rem", background: "rgba(99,102,241,0.1)", color: "var(--primary)", padding: "2px 6px", borderRadius: "4px", marginLeft: "8px", textTransform: "capitalize" }}>{asset.type}</span>
                  </div>
                  {asset.type === "text" ? (
                    <button 
                      onClick={() => handleCopy(asset.content)}
                      className="btn-primary" 
                      style={{ padding: "4px 10px", fontSize: "0.75rem", borderRadius: "4px" }}
                    >
                      📋 Copy Copywriting Text
                    </button>
                  ) : (
                    <a 
                      href={asset.content} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-primary" 
                      style={{ padding: "4px 10px", fontSize: "0.75rem", borderRadius: "4px", textDecoration: "none", textAlign: "center" }}
                    >
                      🔗 Open Link / Download Banner
                    </a>
                  )}
                </div>
                {asset.description && (
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: "0 0 8px 0" }}>{asset.description}</p>
                )}
                <div style={{ background: "rgba(0,0,0,0.04)", padding: "10px", borderRadius: "6px", fontSize: "0.85rem", fontFamily: "monospace", color: "var(--text-strong)", overflowX: "auto", wordBreak: "break-all" }}>
                  {asset.content}
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: "center", color: "var(--text-muted)", padding: "40px 0" }}>No marketing materials provided for this campaign.</div>
          )}
        </div>

        <button type="button" onClick={onClose} style={{ padding: "10px", marginTop: "20px", border: "1px solid var(--glass-border)", borderRadius: "8px", background: "transparent", cursor: "pointer", fontWeight: "600" }}>Close</button>
      </div>
    </div>
  );
}
