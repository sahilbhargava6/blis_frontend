"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function MemberLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { logout } = useAuth();

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="dashboard-layout">
      {/* Mobile Header */}
      <div className="mobile-header">
        <h2 style={{ color: "var(--text-strong)", fontSize: "1.25rem", margin: 0 }}>BLIS <span style={{ color: "var(--success)" }}>Affiliate</span></h2>
        <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>☰</button>
      </div>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ color: "var(--text-strong)", fontSize: "1.5rem", marginBottom: "8px" }}>BLIS <span style={{ color: "var(--success)" }}>Affiliate</span></h2>
            <p className="stat-label">Member Portal</p>
          </div>
          <button className="hamburger-btn" style={{ display: "block" }} onClick={closeSidebar}>✕</button>
        </div>
        
        <nav style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "24px" }}>
          <Link href="/member" onClick={closeSidebar} className={`nav-link ${pathname === '/member' ? 'active' : ''}`} style={pathname === '/member' ? { borderLeftColor: "var(--success)" } : {}}>
            My Overview
          </Link>
          <Link href="/member/campaigns" onClick={closeSidebar} className={`nav-link ${pathname === '/member/campaigns' ? 'active' : ''}`} style={pathname === '/member/campaigns' ? { borderLeftColor: "var(--success)" } : {}}>
            Campaigns
          </Link>
          <Link href="/member/links" onClick={closeSidebar} className={`nav-link ${pathname === '/member/links' ? 'active' : ''}`} style={pathname === '/member/links' ? { borderLeftColor: "var(--success)" } : {}}>
            My Links
          </Link>
          <Link href="/member/wallet" onClick={closeSidebar} className={`nav-link ${pathname === '/member/wallet' ? 'active' : ''}`} style={pathname === '/member/wallet' ? { borderLeftColor: "var(--success)" } : {}}>
            Wallet & Withdraw
          </Link>
        </nav>
        
        <div style={{ marginTop: "auto", paddingTop: "24px", borderTop: "1px solid var(--glass-border)", display: "flex", justifyContent: "center" }}>
          <button onClick={logout} className="nav-link" style={{ width: "100%", justifyContent: "center", color: "var(--danger)", background: "transparent", cursor: "pointer" }}>
            Sign Out
          </button>
        </div>
      </aside>
      
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
