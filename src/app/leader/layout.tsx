import Link from "next/link";
import React from "react";

export default function LeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div>
          <h2 style={{ color: "var(--text-strong)", fontSize: "1.5rem", marginBottom: "8px" }}>BLIS <span style={{ color: "var(--secondary)" }}>Leader</span></h2>
          <p className="stat-label">Group Controls</p>
        </div>
        
        <nav style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "24px" }}>
          <Link href="/leader" className="nav-link active" style={{ borderLeftColor: "var(--secondary)" }}>
            Overview
          </Link>
          <Link href="/leader/team" className="nav-link">
            My Team
          </Link>
          <Link href="/leader/campaigns" className="nav-link">
            Campaigns
          </Link>
          <Link href="/leader/analytics" className="nav-link">
            Analytics
          </Link>
          <Link href="/leader/earnings" className="nav-link">
            Earnings
          </Link>
        </nav>
      </aside>
      
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
