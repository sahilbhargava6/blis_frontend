"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="dashboard-layout">
      {/* Mobile Header */}
      <div className="mobile-header">
        <h2 style={{ color: "var(--text-strong)", fontSize: "1.25rem", margin: 0 }}>BLIS <span style={{ color: "var(--primary)" }}>Admin</span></h2>
        <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>☰</button>
      </div>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={closeSidebar}></div>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ color: "var(--text-strong)", fontSize: "1.5rem", marginBottom: "8px" }}>BLIS <span style={{ color: "var(--primary)" }}>Admin</span></h2>
            <p className="stat-label">Master Controls</p>
          </div>
          {/* Close button for mobile */}
          <button className="hamburger-btn" style={{ display: "block" }} onClick={closeSidebar}>✕</button>
        </div>
        
        <nav style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "24px" }}>
          <Link href="/admin" onClick={closeSidebar} className={`nav-link ${pathname === '/admin' ? 'active' : ''}`}>
            Dashboard
          </Link>
          <Link href="/admin/campaigns" onClick={closeSidebar} className={`nav-link ${pathname === '/admin/campaigns' ? 'active' : ''}`}>
            Campaigns
          </Link>
          <Link href="/admin/groups" onClick={closeSidebar} className={`nav-link ${pathname === '/admin/groups' ? 'active' : ''}`}>
            Groups & Leaders
          </Link>
          <Link href="/admin/reports" onClick={closeSidebar} className={`nav-link ${pathname === '/admin/reports' ? 'active' : ''}`}>
            Reports
          </Link>
          <Link href="/admin/payouts" onClick={closeSidebar} className={`nav-link ${pathname === '/admin/payouts' ? 'active' : ''}`}>
            Payouts
          </Link>
          <Link href="/admin/settings" onClick={closeSidebar} className={`nav-link ${pathname === '/admin/settings' ? 'active' : ''}`}>
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
