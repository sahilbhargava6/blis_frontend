import Link from "next/link";
import React from "react";

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div>
          <h2 style={{ color: "var(--text-strong)", fontSize: "1.5rem", marginBottom: "8px" }}>BLIS <span style={{ color: "var(--success)" }}>Affiliate</span></h2>
          <p className="stat-label">Member Portal</p>
        </div>
        
        <nav style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "24px" }}>
          <Link href="/member" className="nav-link active" style={{ borderLeftColor: "var(--success)" }}>
            My Overview
          </Link>
          <Link href="/member/campaigns" className="nav-link">
            Campaigns
          </Link>
          <Link href="/member/links" className="nav-link">
            My Links
          </Link>
          <Link href="/member/wallet" className="nav-link">
            Wallet & Withdraw
          </Link>
        </nav>
      </aside>
      
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
