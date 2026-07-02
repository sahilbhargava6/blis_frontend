"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";

export default function AdminPayouts() {
  const [payouts, setPayouts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPayouts = async () => {
    try {
      const res = await api.get('/admin/payouts');
      setPayouts(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch payouts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayouts();
  }, []);

  const handleApprove = async (id: number) => {
    try {
      await api.post(`/admin/payouts/${id}/approve`);
      alert(`Payout #${id} approved successfully!`);
      fetchPayouts();
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed to approve payout.");
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px" }}>
        <div>
          <h1 className="page-title">Payouts Ledger</h1>
          <p className="page-subtitle">Review and approve affiliate withdrawal requests.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ minHeight: "400px" }}>
        <div className="table-responsive">
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--glass-border)" }}>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Date Requested</th>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>User</th>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Role</th>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Amount</th>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Status</th>
                <th style={{ padding: "12px 16px", fontWeight: "500", textAlign: "right" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} style={{ padding: "24px", textAlign: "center" }}>Loading payouts...</td></tr>
              ) : payouts.length > 0 ? (
                payouts.map((payout: any) => (
                  <tr key={payout.id} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <td style={{ padding: "16px", color: "var(--text-strong)" }}>{new Date(payout.created_at).toLocaleDateString()}</td>
                    <td style={{ padding: "16px", fontWeight: "600", color: "var(--text-strong)" }}>{payout.user?.name || `User ID: ${payout.user_id}`}</td>
                    <td style={{ padding: "16px", color: "var(--text-muted)", textTransform: "capitalize" }}>{payout.user?.role || 'Unknown'}</td>
                    <td style={{ padding: "16px", color: "var(--success)", fontWeight: "600" }}>₹{parseFloat(payout.amount).toFixed(2)}</td>
                    <td style={{ padding: "16px" }}>
                      <span style={{ 
                        background: payout.status === 'paid' || payout.status === 'approved' ? "rgba(16, 185, 129, 0.15)" : "rgba(245, 158, 11, 0.15)", 
                        color: payout.status === 'paid' || payout.status === 'approved' ? "var(--success)" : "var(--warning)", 
                        padding: "4px 12px", borderRadius: "12px", fontSize: "0.85rem", fontWeight: "600", textTransform: "capitalize" 
                      }}>
                        {payout.status}
                      </span>
                    </td>
                    <td style={{ padding: "16px", textAlign: "right" }}>
                      {payout.status === 'pending' ? (
                        <button 
                          onClick={() => handleApprove(payout.id)}
                          className="btn-primary" 
                          style={{ padding: "8px 16px", background: "var(--success)" }}
                        >
                          Approve
                        </button>
                      ) : (
                        <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Processed</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan={6} style={{ padding: "24px", textAlign: "center", color: "var(--text-muted)" }}>No payout requests found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
