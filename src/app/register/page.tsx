"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import api from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();
  
  const token = searchParams.get("invite_token");

  const [form, setForm] = useState({ name: "", email: "", password: "", niche_field: "" });
  const [invitation, setInvitation] = useState<any>(null);
  const [validatingToken, setValidatingToken] = useState(!!token);
  const [tokenError, setTokenError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;

    const validateToken = async () => {
      try {
        const res = await api.get(`/auth/invitation/${token}`);
        setInvitation(res.data.data);
        setForm(prev => ({ ...prev, email: res.data.data.email }));
      } catch (err: any) {
        setTokenError(err.response?.data?.message || "This invitation link is invalid or has expired.");
      } finally {
        setValidatingToken(false);
      }
    };

    validateToken();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const payload = {
        ...form,
        role: "member",
        invite_token: token || undefined
      };
      
      const res = await api.post("/auth/register", payload);
      const { user, token: apiToken } = res.data.data;
      
      // Log user in
      login(user, apiToken);
      
      // Redirect to Member dashboard
      router.push("/member");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (validatingToken) {
    return (
      <div className="login-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <div className="glass-panel" style={{ width: "100%", maxWidth: "400px", textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)" }}>Validating secure invitation...</p>
        </div>
      </div>
    );
  }

  if (tokenError) {
    return (
      <div className="login-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <div className="glass-panel" style={{ width: "100%", maxWidth: "400px", textAlign: "center" }}>
          <h2 style={{ color: "var(--danger)", marginBottom: "16px" }}>⚠️ Access Denied</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "24px" }}>{tokenError}</p>
          <Link href="/login" className="btn-primary" style={{ display: "inline-block", textDecoration: "none" }}>
            Return to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", padding: "20px" }}>
      <div className="glass-panel" style={{ width: "100%", maxWidth: "450px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-strong)", letterSpacing: "-1px" }}>BLIS</h1>
          <p style={{ color: "var(--text-muted)", marginTop: "4px" }}>Create your affiliate account</p>
        </div>

        {invitation && (
          <div style={{ background: "rgba(16,185,129,0.1)", borderLeft: "4px solid var(--success)", padding: "12px 16px", borderRadius: "0 8px 8px 0", marginBottom: "24px" }}>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-strong)" }}>
              👋 You are invited to join <strong>{invitation.group?.group_name || "Team"}</strong>!
            </p>
            <p style={{ margin: "4px 0 0 0", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              Managed by Leader: {invitation.group?.leader?.name}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "0.85rem", color: "var(--text-muted)" }}>Full Name</label>
            <input 
              required 
              type="text" 
              value={form.name} 
              onChange={e => setForm({ ...form, name: e.target.value })} 
              className="input-field" 
              placeholder="John Doe" 
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "0.85rem", color: "var(--text-muted)" }}>Email Address</label>
            <input 
              required 
              type="email" 
              value={form.email} 
              onChange={e => setForm({ ...form, email: e.target.value })} 
              className="input-field" 
              readOnly={!!invitation}
              style={invitation ? { background: "rgba(0,0,0,0.03)", color: "var(--text-muted)", cursor: "not-allowed" } : {}}
              placeholder="name@example.com" 
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "0.85rem", color: "var(--text-muted)" }}>Password (Min 8 Characters)</label>
            <input 
              required 
              type="password" 
              value={form.password} 
              onChange={e => setForm({ ...form, password: e.target.value })} 
              className="input-field" 
              placeholder="••••••••" 
            />
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "6px", fontWeight: "600", fontSize: "0.85rem", color: "var(--text-muted)" }}>Niche / Promotion Category</label>
            <input 
              type="text" 
              value={form.niche_field} 
              onChange={e => setForm({ ...form, niche_field: e.target.value })} 
              className="input-field" 
              placeholder="e.g. Finance, Tech, Fashion (Optional)" 
            />
          </div>

          {error && (
            <p style={{ color: "var(--danger)", fontSize: "0.85rem", fontWeight: "600" }}>⚠️ {error}</p>
          )}

          <button type="submit" disabled={loading} className="btn-primary" style={{ marginTop: "12px", padding: "12px" }}>
            {loading ? "Creating Account..." : "Register & Join Network"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Already have an account? </span>
          <Link href="/login" style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: "600", textDecoration: "none" }}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Register() {
  return (
    <Suspense fallback={<div style={{ textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>Loading secure invitation...</div>}>
      <RegisterForm />
    </Suspense>
  );
}
