"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";

export default function AdminGroups() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newGroup, setNewGroup] = useState({
    group_name: "",
    leader_id: ""
  });

  const fetchGroups = async () => {
    try {
      const res = await api.get('/admin/groups');
      setGroups(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch groups");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/admin/groups', newGroup);
      setShowModal(false);
      setNewGroup({ group_name: "", leader_id: "" });
      fetchGroups();
    } catch (err: any) {
      alert("Failed to provision group. Note: leader_id must exist in users table.");
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px" }}>
        <div>
          <h1 className="page-title">Group Provisioning</h1>
          <p className="page-subtitle">Allocate teams and assign Group Leaders.</p>
        </div>
        <button className="btn-primary" onClick={() => setShowModal(true)}>+ Provision Group</button>
      </div>

      <div className="glass-panel" style={{ minHeight: "400px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--glass-border)" }}>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Group Name</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Leader Name</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Active Members</th>
              <th style={{ padding: "12px 16px", fontWeight: "500" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4} style={{ padding: "24px", textAlign: "center" }}>Loading groups...</td></tr>
            ) : groups.length > 0 ? (
              groups.map((group: any) => (
                <tr key={group.id} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <td style={{ padding: "16px", fontWeight: "600", color: "var(--text-strong)" }}>{group.group_name}</td>
                  <td style={{ padding: "16px", color: "var(--text-muted)" }}>{group.leader?.name || `Leader ID: ${group.leader_id}`}</td>
                  <td style={{ padding: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "100px", height: "6px", background: "rgba(0,0,0,0.05)", borderRadius: "3px", overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${(group.members_count / 20) * 100}%`, background: "var(--primary)" }}></div>
                      </div>
                      <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--primary)" }}>{group.members_count || 0}/20</span>
                    </div>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ background: "rgba(16, 185, 129, 0.15)", color: "var(--success)", padding: "4px 12px", borderRadius: "12px", fontSize: "0.85rem", fontWeight: "600" }}>Active</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={4} style={{ padding: "24px", textAlign: "center", color: "var(--text-muted)" }}>No groups found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
          <div className="glass-panel" style={{ width: "100%", maxWidth: "450px", background: "rgba(255, 255, 255, 0.8)" }}>
            <h2 style={{ marginBottom: "24px", fontSize: "1.25rem", color: "var(--text-strong)" }}>Provision New Group</h2>
            <form onSubmit={handleCreate} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>Group Name</label>
                <input required type="text" value={newGroup.group_name} onChange={e => setNewGroup({...newGroup, group_name: e.target.value})} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--glass-border)", outline: "none", background: "rgba(255,255,255,0.6)" }} placeholder="e.g. Alpha Affiliate Team" />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "600", fontSize: "0.9rem" }}>Leader ID</label>
                <input required type="number" value={newGroup.leader_id} onChange={e => setNewGroup({...newGroup, leader_id: e.target.value})} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid var(--glass-border)", outline: "none", background: "rgba(255,255,255,0.6)" }} placeholder="Numeric ID of the Leader" />
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "8px" }}>Enter the User ID of the Leader for this group.</p>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "16px" }}>
                <button type="button" onClick={() => setShowModal(false)} style={{ padding: "10px 16px", background: "transparent", border: "none", cursor: "pointer", color: "var(--text-muted)", fontWeight: "600" }}>Cancel</button>
                <button type="submit" className="btn-primary">Provision Group</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
