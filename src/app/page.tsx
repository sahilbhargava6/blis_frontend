'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Phone, Lock, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1 = Phone, 2 = OTP
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
      setMessage('OTP sent successfully via WhatsApp to ' + phone);
    }, 800);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Default to member dashboard on verify
      router.push('/member');
    }, 800);
  };

  // Direct Bypass for Developers/Users to test specific dashboards
  const handleQuickBypass = (role: 'admin' | 'leader' | 'member') => {
    router.push(`/${role}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="w-full max-w-md glass-panel rounded-2xl p-8 transition-all duration-300 hover:shadow-emerald-500/5 hover:shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 mb-3 border border-emerald-500/20">
            <Sparkles className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">BLIS</h1>
          <p className="text-sm text-slate-400 mt-2">
            Multi-Tier Affiliate & O2O Platform
          </p>
        </div>

        {message && (
          <div className="mb-6 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs text-center">
            {message}
          </div>
        )}

        {/* Step 1: Phone Input */}
        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <Phone className="h-5 w-5" />
                </span>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  className="w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              {loading ? 'Sending...' : 'Send OTP via WhatsApp'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}

        {/* Step 2: OTP Input */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                6-Digit Code
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                  <Lock className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  required
                  maxLength={6}
                  placeholder="Enter 6-digit OTP"
                  className="w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm tracking-widest text-center font-bold"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-slate-400 hover:text-white transition"
              >
                Change Phone
              </button>
              <button
                type="button"
                onClick={handleSendOtp}
                className="text-emerald-400 hover:text-emerald-300 font-semibold transition"
              >
                Resend Code
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition-all text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
              <Shield className="h-4 w-4" />
            </button>
          </form>
        )}

        {/* Dev Bypass Section */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-center text-xs font-medium text-slate-500 mb-4 flex items-center justify-center gap-1.5">
            <Zap className="h-3.5 w-3.5 text-amber-500" />
            Quick Access Testing Panel
          </p>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleQuickBypass('admin')}
              className="py-2.5 px-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-white/5 hover:border-emerald-500/20 text-[11px] font-bold text-slate-300 transition text-center cursor-pointer"
            >
              Admin
            </button>
            <button
              onClick={() => handleQuickBypass('leader')}
              className="py-2.5 px-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-white/5 hover:border-amber-500/20 text-[11px] font-bold text-slate-300 transition text-center cursor-pointer"
            >
              Leader
            </button>
            <button
              onClick={() => handleQuickBypass('member')}
              className="py-2.5 px-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-white/5 hover:border-sky-500/20 text-[11px] font-bold text-slate-300 transition text-center cursor-pointer"
            >
              Member
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
