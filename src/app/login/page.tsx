"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", { email, password });
      
      const { user, token } = res.data.data;
      login(token, user);
      
      // Redirect based on role
      if (user.role === 'admin') router.push('/admin');
      else if (user.role === 'leader') router.push('/leader');
      else router.push('/member');

    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed. Check credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="glass-panel" style={{ width: "100%", maxWidth: "400px", padding: "40px" }}>
        <h1 className="page-title" style={{ textAlign: "center", marginBottom: "32px", fontSize: "1.8rem" }}>Welcome to BLIS</h1>
        
        {error && <div style={{ background: "rgba(220, 38, 38, 0.1)", color: "var(--danger)", padding: "12px", borderRadius: "8px", marginBottom: "24px", fontSize: "0.9rem", textAlign: "center" }}>{error}</div>}

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "8px", color: "var(--text-strong)", fontWeight: "600", fontSize: "0.9rem" }}>Email Address</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid var(--glass-border)", background: "rgba(255,255,255,0.5)", outline: "none", color: "var(--text-strong)" }} 
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px", color: "var(--text-strong)", fontWeight: "600", fontSize: "0.9rem" }}>Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid var(--glass-border)", background: "rgba(255,255,255,0.5)", outline: "none", color: "var(--text-strong)" }} 
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn-primary" style={{ marginTop: "12px" }} disabled={loading}>
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
