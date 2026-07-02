"use client";

import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface RevenueChartProps {
  data: any[];
  dataKey: string;
  color?: string;
  title?: string;
}

export default function RevenueChart({ data, dataKey, color = "#10b981", title = "Revenue Trend" }: RevenueChartProps) {
  if (!data || data.length === 0) {
    return <div style={{ padding: "40px", textAlign: "center", color: "var(--text-muted)" }}>No chart data available.</div>;
  }

  return (
    <div className="glass-panel" style={{ marginBottom: "40px" }}>
      <h2 style={{ fontSize: "1.25rem", marginBottom: "24px" }}>{title}</h2>
      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`color${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
            <XAxis dataKey="date" tick={{ fill: "var(--text-muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "var(--text-muted)", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(value) => `${value}`} />
            <Tooltip 
              contentStyle={{ background: "rgba(255,255,255,0.9)", border: "1px solid var(--glass-border)", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              labelStyle={{ color: "var(--text-strong)", fontWeight: 600, marginBottom: "4px" }}
              itemStyle={{ color, fontWeight: 600 }}
            />
            <Area type="monotone" dataKey={dataKey} stroke={color} strokeWidth={3} fillOpacity={1} fill={`url(#color${dataKey})`} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
