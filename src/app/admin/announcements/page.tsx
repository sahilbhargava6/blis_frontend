"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";

export default function AdminAnnouncements() {
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: "", message: "", type: "info" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const res = await api.get("/admin/announcements");
      setAnnouncements(res.data.data);
    } catch (err) {
      console.error("Failed to fetch announcements", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post("/admin/announcements", form);
      setForm({ title: "", message: "", type: "info" });
      fetchAnnouncements();
    } catch (err) {
      console.error(err);
      alert("Failed to create announcement.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to deactivate this announcement?")) return;
    try {
      await api.delete(`/admin/announcements/${id}`);
      fetchAnnouncements();
    } catch (err) {
      console.error(err);
      alert("Failed to deactivate.");
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <h1 style={{ fontSize: "1.8rem" }}>Global Announcements</h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "24px" }}>
        <div className="glass-panel" style={{ alignSelf: "start" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "24px" }}>Create Announcement</h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "var(--text-muted)", fontSize: "0.9rem" }}>Title</label>
              <input 
                type="text" 
                required 
                value={form.title} 
                onChange={(e) => setForm({ ...form, title: e.target.value })} 
                className="input-field" 
                placeholder="e.g. New Feature Live!" 
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "var(--text-muted)", fontSize: "0.9rem" }}>Message</label>
              <textarea 
                required 
                value={form.message} 
                onChange={(e) => setForm({ ...form, message: e.target.value })} 
                className="input-field" 
                rows={4} 
                placeholder="Details about the announcement..." 
              />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "var(--text-muted)", fontSize: "0.9rem" }}>Type</label>
              <select 
                value={form.type} 
                onChange={(e) => setForm({ ...form, type: e.target.value })} 
                className="input-field"
              >
                <option value="info">Info (Blue)</option>
                <option value="success">Success (Green)</option>
                <option value="warning">Warning (Yellow)</option>
                <option value="error">Error (Red)</option>
              </select>
            </div>
            <button type="submit" disabled={submitting} className="btn-primary" style={{ marginTop: "8px" }}>
              {submitting ? "Broadcasting..." : "Broadcast to Network"}
            </button>
          </form>
        </div>

        <div className="glass-panel">
          <h2 style={{ fontSize: "1.25rem", marginBottom: "24px" }}>Announcement History</h2>
          
          <div className="table-responsive">
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                  <th style={{ padding: "16px", color: "var(--text-muted)", fontWeight: "600" }}>Date</th>
                  <th style={{ padding: "16px", color: "var(--text-muted)", fontWeight: "600" }}>Title</th>
                  <th style={{ padding: "16px", color: "var(--text-muted)", fontWeight: "600" }}>Type</th>
                  <th style={{ padding: "16px", color: "var(--text-muted)", fontWeight: "600" }}>Status</th>
                  <th style={{ padding: "16px", color: "var(--text-muted)", fontWeight: "600" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={5} style={{ padding: "24px", textAlign: "center" }}>Loading...</td></tr>
                ) : announcements.length > 0 ? (
                  announcements.map((announcement) => (
                    <tr key={announcement.id} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                      <td style={{ padding: "16px", color: "var(--text-muted)" }}>{new Date(announcement.created_at).toLocaleDateString()}</td>
                      <td style={{ padding: "16px", fontWeight: "600", color: "var(--text-strong)" }}>{announcement.title}</td>
                      <td style={{ padding: "16px", textTransform: "capitalize", color: "var(--text-muted)" }}>{announcement.type}</td>
                      <td style={{ padding: "16px" }}>
                        {announcement.is_active ? (
                          <span style={{ color: "var(--success)", background: "rgba(16,185,129,0.15)", padding: "4px 8px", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "600" }}>Active</span>
                        ) : (
                          <span style={{ color: "var(--text-muted)", background: "rgba(0,0,0,0.05)", padding: "4px 8px", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "600" }}>Inactive</span>
                        )}
                      </td>
                      <td style={{ padding: "16px" }}>
                        {announcement.is_active && (
                          <button 
                            onClick={() => handleDelete(announcement.id)}
                            className="btn-danger"
                            style={{ padding: "6px 12px", fontSize: "0.85rem", borderRadius: "6px", background: "rgba(239, 68, 68, 0.1)", color: "var(--danger)", border: "none" }}
                          >
                            Deactivate
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan={5} style={{ padding: "24px", textAlign: "center", color: "var(--text-muted)" }}>No announcements yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
