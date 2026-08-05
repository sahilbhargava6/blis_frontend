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
      // Default to member dashboard on verify, passing new_user parameter to trigger Setup Wizard
      router.push('/member?new_user=true');
    }, 800);
  };

  // Direct Bypass for Developers/Users to test specific dashboards
  const handleQuickBypass = (role: 'admin' | 'leader' | 'member') => {
    router.push(`/${role}?new_user=true`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#F047AB]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#0E76C0]/8 rounded-full blur-3xl -z-10"></div>

      <div className="w-full max-w-md bg-white rounded-[30px] p-8 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-slate-100 hover:shadow-[0_12px_48px_rgba(240,71,171,0.1)]">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-full bg-[#F047AB]/10 text-[#F047AB] mb-3 border border-[#F047AB]/20">
            <Sparkles className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-black font-['Plus_Jakarta_Sans']">BLIS</h1>
          <p className="text-sm text-slate-500 mt-2 font-['Roboto']">
            Multi-Tier Affiliate & O2O Platform
          </p>
        </div>

        {message && (
          <div className="mb-6 p-3 rounded-xl bg-[#0E76C0]/10 border border-[#0E76C0]/20 text-[#0E76C0] text-xs text-center font-medium">
            {message}
          </div>
        )}

        {/* Step 1: Phone Input */}
        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">
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
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-black text-sm font-['Roboto'] focus:border-[#F047AB] focus:ring-2 focus:ring-[#F047AB]/20 outline-none transition-all"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-[#0E76C0] hover:bg-[#0c66a8] active:scale-95 transition-all text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#0E76C0]/20 font-['Plus_Jakarta_Sans']"
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
              <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">
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
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-black text-sm tracking-widest text-center font-bold font-['Roboto'] focus:border-[#F047AB] focus:ring-2 focus:ring-[#F047AB]/20 outline-none transition-all"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-slate-500 hover:text-black transition font-['Roboto']"
              >
                Change Phone
              </button>
              <button
                type="button"
                onClick={handleSendOtp}
                className="text-[#F047AB] hover:text-[#d83d96] font-semibold transition font-['Roboto']"
              >
                Resend Code
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-[#0E76C0] hover:bg-[#0c66a8] active:scale-95 transition-all text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#0E76C0]/20 font-['Plus_Jakarta_Sans']"
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
              <Shield className="h-4 w-4" />
            </button>
          </form>
        )}

        {/* Dev Bypass Section */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <p className="text-center text-xs font-medium text-slate-400 mb-4 flex items-center justify-center gap-1.5 font-['Roboto']">
            <Zap className="h-3.5 w-3.5 text-[#B98776]" />
            Quick Access Testing Panel
          </p>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => handleQuickBypass('admin')}
              className="py-2.5 px-2 rounded-xl bg-slate-50 hover:bg-[#F047AB]/10 border border-slate-200 hover:border-[#F047AB]/30 text-[11px] font-bold text-slate-600 hover:text-[#F047AB] transition-all text-center cursor-pointer font-['Plus_Jakarta_Sans']"
            >
              Admin
            </button>
            <button
              onClick={() => handleQuickBypass('leader')}
              className="py-2.5 px-2 rounded-xl bg-slate-50 hover:bg-[#B98776]/10 border border-slate-200 hover:border-[#B98776]/30 text-[11px] font-bold text-slate-600 hover:text-[#B98776] transition-all text-center cursor-pointer font-['Plus_Jakarta_Sans']"
            >
              Leader
            </button>
            <button
              onClick={() => handleQuickBypass('member')}
              className="py-2.5 px-2 rounded-xl bg-slate-50 hover:bg-[#0E76C0]/10 border border-slate-200 hover:border-[#0E76C0]/30 text-[11px] font-bold text-slate-600 hover:text-[#0E76C0] transition-all text-center cursor-pointer font-['Plus_Jakarta_Sans']"
            >
              Member
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
