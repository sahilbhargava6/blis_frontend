"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function LeaderLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="dashboard-layout">
      {/* Mobile Header */}
      <div className="mobile-header">
        <h2 style={{ color: "var(--text-strong)", fontSize: "1.25rem", margin: 0 }}>BLIS <span style={{ color: "var(--secondary)" }}>Leader</span></h2>
        <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>☰</button>
      </div>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ color: "var(--text-strong)", fontSize: "1.5rem", marginBottom: "8px" }}>BLIS <span style={{ color: "var(--secondary)" }}>Leader</span></h2>
            <p className="stat-label">Group Controls</p>
          </div>
          <button className="hamburger-btn" style={{ display: "block" }} onClick={closeSidebar}>✕</button>
        </div>
        
        <nav style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "24px" }}>
          <Link href="/leader" onClick={closeSidebar} className={`nav-link ${pathname === '/leader' ? 'active' : ''}`} style={pathname === '/leader' ? { borderLeftColor: "var(--secondary)" } : {}}>
            Overview
          </Link>
          <Link href="/leader/team" onClick={closeSidebar} className={`nav-link ${pathname === '/leader/team' ? 'active' : ''}`} style={pathname === '/leader/team' ? { borderLeftColor: "var(--secondary)" } : {}}>
            My Team
          </Link>
          <Link href="/leader/campaigns" onClick={closeSidebar} className={`nav-link ${pathname === '/leader/campaigns' ? 'active' : ''}`} style={pathname === '/leader/campaigns' ? { borderLeftColor: "var(--secondary)" } : {}}>
            Campaigns
          </Link>
          <Link href="/leader/analytics" onClick={closeSidebar} className={`nav-link ${pathname === '/leader/analytics' ? 'active' : ''}`} style={pathname === '/leader/analytics' ? { borderLeftColor: "var(--secondary)" } : {}}>
            Analytics
          </Link>
          <Link href="/leader/earnings" onClick={closeSidebar} className={`nav-link ${pathname === '/leader/earnings' ? 'active' : ''}`} style={pathname === '/leader/earnings' ? { borderLeftColor: "var(--secondary)" } : {}}>
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
