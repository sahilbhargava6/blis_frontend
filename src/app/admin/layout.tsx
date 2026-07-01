import Link from "next/link";
import React from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div>
          <h2 style={{ color: "var(--text-strong)", fontSize: "1.5rem", marginBottom: "8px" }}>BLIS <span style={{ color: "var(--primary)" }}>Admin</span></h2>
          <p className="stat-label">Master Controls</p>
        </div>
        
        <nav style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "24px" }}>
          <Link href="/admin" className="nav-link active">
            Dashboard
          </Link>
          <Link href="/admin/campaigns" className="nav-link">
            Campaigns
          </Link>
          <Link href="/admin/groups" className="nav-link">
            Groups & Leaders
          </Link>
          <Link href="/admin/reports" className="nav-link">
            Reports
          </Link>
          <Link href="/admin/payouts" className="nav-link">
            Payouts
          </Link>
          <Link href="/admin/settings" className="nav-link">
            Settings
          </Link>
        </nav>
      </aside>
      
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
