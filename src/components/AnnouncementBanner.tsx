"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/api";

interface Announcement {
  id: number;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
}

export default function AnnouncementBanner() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [dismissed, setDismissed] = useState<number[]>([]);

  useEffect(() => {
    // Load dismissed announcements from local storage
    const saved = localStorage.getItem("blis_dismissed_announcements");
    if (saved) {
      setDismissed(JSON.parse(saved));
    }

    const fetchAnnouncements = async () => {
      try {
        const res = await api.get("/announcements/active");
        setAnnouncements(res.data.data);
      } catch (err) {
        console.error("Failed to fetch announcements:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnnouncements();
  }, []);

  const handleDismiss = (id: number) => {
    const newDismissed = [...dismissed, id];
    setDismissed(newDismissed);
    localStorage.setItem("blis_dismissed_announcements", JSON.stringify(newDismissed));
  };

  if (loading || announcements.length === 0) return null;

  const activeAnnouncements = announcements.filter((a) => !dismissed.includes(a.id));

  if (activeAnnouncements.length === 0) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
      {activeAnnouncements.map((announcement) => {
        let bgColor = "rgba(59, 130, 246, 0.1)";
        let borderColor = "var(--primary)";
        
        if (announcement.type === "success") {
          bgColor = "rgba(16, 185, 129, 0.1)";
          borderColor = "var(--success)";
        } else if (announcement.type === "warning") {
          bgColor = "rgba(245, 158, 11, 0.1)";
          borderColor = "var(--warning)";
        } else if (announcement.type === "error") {
          bgColor = "rgba(239, 68, 68, 0.1)";
          borderColor = "var(--danger)";
        }

        return (
          <div key={announcement.id} style={{ 
            background: bgColor, 
            borderLeft: `4px solid ${borderColor}`,
            padding: "16px 20px", 
            borderRadius: "0 8px 8px 0",
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "flex-start",
            boxShadow: "0 2px 8px rgba(0,0,0,0.02)"
          }}>
            <div>
              <h4 style={{ margin: "0 0 4px 0", fontSize: "1rem", color: "var(--text-strong)" }}>{announcement.title}</h4>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.4 }}>{announcement.message}</p>
            </div>
            <button 
              onClick={() => handleDismiss(announcement.id)}
              style={{ 
                background: "transparent", 
                border: "none", 
                fontSize: "1.2rem", 
                cursor: "pointer", 
                color: "var(--text-muted)",
                padding: "0 4px"
              }}
            >
              &times;
            </button>
          </div>
        );
      })}
    </div>
  );
}
