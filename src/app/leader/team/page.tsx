"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";

export default function LeaderTeam() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");

  const fetchTeam = async () => {
    try {
      const res = await api.get('/leader/team');
      setTeam(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch team");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);

  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Assuming a leader invite endpoint exists or will exist
      // await api.post('/leader/invite', { email: inviteEmail });
      alert(`Invitation logically sent to ${inviteEmail}. (Backend hookup pending)`);
      setShowInviteModal(false);
      setInviteEmail("");
    } catch (err) {
      alert("Failed to send invite.");
    }
  };

  const memberCap = 20;
  const currentMembers = team.length;
  const progressPercent = (currentMembers / memberCap) * 100;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px" }}>
        <div>
          <h1 className="page-title">Team Roster</h1>
          <p className="page-subtitle">Manage your allocated {memberCap} affiliates and track their performance.</p>
        </div>
        <button 
          className="btn-primary" 
          onClick={() => setShowInviteModal(true)}
          disabled={currentMembers >= memberCap}
          style={{ opacity: currentMembers >= memberCap ? 0.5 : 1 }}
        >
          {currentMembers >= memberCap ? 'Team Full' : '+ Invite Member'}
        </button>
      </div>

      <div className="glass-panel" style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
          <span style={{ fontWeight: "600", color: "var(--text-strong)" }}>Capacity Filled</span>
          <span style={{ color: "var(--text-muted)", fontWeight: "500" }}>{currentMembers} / {memberCap} Members</span>
        </div>
        <div style={{ width: "100%", height: "12px", background: "rgba(0,0,0,0.05)", borderRadius: "6px", overflow: "hidden" }}>
          <div style={{ 
            height: "100%", 
            width: `${progressPercent}%`, 
            background: progressPercent > 90 ? "var(--warning)" : "var(--primary)",
            transition: "width 0.5s ease"
          }} />
        </div>
      </div>

      <div className="glass-panel" style={{ minHeight: "400px" }}>
        <div className="table-responsive">
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--glass-border)" }}>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Name</th>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Email</th>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Joined</th>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Total Earnings</th>
                <th style={{ padding: "12px 16px", fontWeight: "500", textAlign: "right" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={5} style={{ padding: "24px", textAlign: "center" }}>Loading team members...</td></tr>
              ) : members.length > 0 ? (
                members.map((member: any) => (
                  <tr key={member.id} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <td style={{ padding: "16px", fontWeight: "600", color: "var(--text-strong)" }}>{member.name}</td>
                    <td style={{ padding: "16px", color: "var(--text-muted)" }}>{member.email}</td>
                    <td style={{ padding: "16px", color: "var(--text-muted)" }}>{new Date(member.created_at).toLocaleDateString()}</td>
                    <td style={{ padding: "16px", color: "var(--success)", fontWeight: "600" }}>${parseFloat(member.cleared_balance).toFixed(2)}</td>
                    <td style={{ padding: "16px", textAlign: "right" }}>
                      <span style={{ background: "rgba(16, 185, 129, 0.15)", color: "var(--success)", padding: "4px 12px", borderRadius: "12px", fontSize: "0.85rem", fontWeight: "600" }}>Active</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan={5} style={{ padding: "24px", textAlign: "center", color: "var(--text-muted)" }}>No team members found. Send invites to grow your group!</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showInviteModal && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div className="glass-panel" style={{ width: "100%", maxWidth: "450px", background: "rgba(255, 255, 255, 0.8)" }}>
            <h2 style={{ marginBottom: "24px", fontSize: "1.25rem", color: "var(--text-strong)" }}>Invite Affiliate to Team</h2>
            <form onSubmit={handleInvite} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>Affiliate Email Address</label>
                <input required type="email" value={inviteEmail} onChange={e => setInviteEmail(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--glass-border)", outline: "none", background: "rgba(255,255,255,0.6)" }} placeholder="affiliate@example.com" />
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "8px" }}>They will receive a secure registration link tied to your Group.</p>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "16px" }}>
                <button type="button" onClick={() => setShowInviteModal(false)} style={{ padding: "10px 16px", background: "transparent", border: "none", cursor: "pointer", color: "var(--text-muted)", fontWeight: "600" }}>Cancel</button>
                <button type="submit" className="btn-primary">Send Invite</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
