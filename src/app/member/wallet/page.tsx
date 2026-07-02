"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";
import { exportToCSV } from "@/lib/exportUtils";

export default function MemberWallet() {
  const [payouts, setPayouts] = useState([]);
  const [stats, setStats] = useState({ cleared_balance: 0, pending_balance: 0 });
  const [loading, setLoading] = useState(true);

  const fetchWalletData = async () => {
    try {
      // Assuming a wallet endpoint
      const [payoutsRes, statsRes] = await Promise.all([
        api.get('/member/wallet').catch(() => ({ data: { data: [] } })),
        api.get('/member/dashboard/stats').catch(() => ({ data: { data: { cleared_balance: 0, pending_balance: 0 } } }))
      ]);
      setPayouts(payoutsRes.data.data || []);
      setStats(statsRes.data.data);
    } catch (err) {
      console.error("Failed to fetch wallet data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWalletData();
  }, []);

  const handleWithdraw = async () => {
    if (stats.cleared_balance <= 0) {
      alert("You have no cleared balance to withdraw.");
      return;
    }

    try {
      // await api.post('/member/withdraw', { amount: stats.cleared_balance });
      alert(`Withdrawal request for ₹${stats.cleared_balance} submitted successfully. (Backend hookup pending)`);
      fetchWalletData();
    } catch (err) {
      alert("Failed to request withdrawal.");
    }
  };

  const handleExport = () => {
    exportToCSV(
      payouts,
      {
        created_at: "Date",
        id: "Transaction ID",
        amount: "Amount (INR)",
        status: "Status"
      },
      "Payout_History"
    );
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px" }}>
        <div>
          <h1 className="page-title">Wallet & Payouts</h1>
          <p className="page-subtitle">Track your earnings and request withdrawals.</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "32px" }}>
        <div className="glass-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", borderColor: "var(--success)", background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.02) 100%)" }}>
          <div>
            <div className="stat-label" style={{ color: "var(--success)" }}>Available for Withdrawal</div>
            <div className="stat-value" style={{ color: "var(--text-strong)", fontSize: "2.5rem" }}>
              ₹{loading ? "..." : parseFloat(stats.cleared_balance as any).toFixed(2)}
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "8px" }}>Minimum withdrawal is ₹50.00</p>
          </div>
          <button 
            className="btn-primary" 
            style={{ width: "100%", background: "var(--success)", marginTop: "24px" }}
            onClick={handleWithdraw}
            disabled={stats.cleared_balance < 50}
          >
            {stats.cleared_balance >= 50 ? 'Request Payout' : 'Minimum Not Reached'}
          </button>
        </div>

        <div className="glass-card" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="stat-label">Pending Approval</div>
          <div className="stat-value" style={{ color: "var(--text-muted)", fontSize: "2rem" }}>
            ₹{loading ? "..." : parseFloat(stats.pending_balance as any).toFixed(2)}
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "8px" }}>These funds will become available once the network verifies the conversions.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ minHeight: "300px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "1.25rem", margin: 0 }}>Payout History</h2>
          <button 
            onClick={handleExport} 
            disabled={payouts.length === 0} 
            className="btn-primary" 
            style={{ padding: "8px 16px", display: "flex", alignItems: "center", gap: "8px", background: "transparent", border: "1px solid var(--glass-border)", color: "var(--text-strong)", fontSize: "0.9rem" }}
          >
            📥 Export CSV
          </button>
        </div>
        <div className="table-responsive">
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
            <thead>
              <tr style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--glass-border)" }}>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Date</th>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Transaction ID</th>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Amount</th>
                <th style={{ padding: "12px 16px", fontWeight: "500" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} style={{ padding: "24px", textAlign: "center" }}>Loading history...</td></tr>
              ) : payouts.length > 0 ? (
                payouts.map((payout: any) => (
                  <tr key={payout.id} style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                    <td style={{ padding: "16px", color: "var(--text-strong)" }}>{new Date(payout.created_at).toLocaleDateString()}</td>
                    <td style={{ padding: "16px", color: "var(--text-muted)", fontFamily: "monospace" }}>{payout.reference_id || `TRX-${payout.id}`}</td>
                    <td style={{ padding: "16px", color: "var(--text-strong)", fontWeight: "600" }}>₹{parseFloat(payout.amount).toFixed(2)}</td>/td>
                    <td style={{ padding: "16px" }}>
                      <span style={{ 
                        background: payout.status === 'paid' ? "rgba(16, 185, 129, 0.15)" : "rgba(245, 158, 11, 0.15)", 
                        color: payout.status === 'paid' ? "var(--success)" : "var(--warning)", 
                        padding: "4px 12px", borderRadius: "12px", fontSize: "0.85rem", fontWeight: "600" 
                      }}>
                        {payout.status.charAt(0).toUpperCase() + payout.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} style={{ padding: "24px", textAlign: "center", color: "var(--text-muted)" }}>
                    No previous payouts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
