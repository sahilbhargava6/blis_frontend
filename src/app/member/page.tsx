'use client';

import { useState } from 'react';
import { ArrowUpRight, BadgeCheck, HelpCircle, Eye, EyeOff, MousePointerClick, ShieldCheck } from 'lucide-react';

export default function MemberOverview() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Promoter Dashboard</h1>
          <p className="text-slate-400 mt-1 text-sm">Quick dashboard lookup for commissions and payouts.</p>
        </div>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/5 text-xs font-bold text-slate-300 transition-all cursor-pointer"
        >
          {showAdvanced ? (
            <>
              <EyeOff className="h-4 w-4 text-slate-400" />
              Simple View
            </>
          ) : (
            <>
              <Eye className="h-4 w-4 text-emerald-400" />
              View Advanced Analytics
            </>
          )}
        </button>
      </div>

      {/* Progressive Disclosure (Simple View: Only Payouts and Conversions) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Simple Payout Summary Card */}
        <div className="glass-panel p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[200px]">
          <div className="absolute top-0 right-0 p-6 opacity-5">
            <ArrowUpRight className="h-32 w-32 text-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Withdrawable Balance</p>
            <h2 className="text-5xl font-black text-emerald-400 mt-3">$420.00</h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mt-4">
            <BadgeCheck className="h-4 w-4 text-emerald-400" />
            Held securely in local wallet ledger.
          </div>
        </div>

        {/* Active Conversions Counter */}
        <div className="glass-panel p-8 rounded-2xl min-h-[200px] flex flex-col justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Conversions (30d)</p>
            <h2 className="text-5xl font-black text-white mt-3">28</h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mt-4">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
            Last conversion logged 2 hours ago.
          </div>
        </div>

      </div>

      {/* Advanced Analytics Panel (Toggled view) */}
      {showAdvanced && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
          {/* Total Clicks card */}
          <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Link Click-Throughs</p>
              <h3 className="text-3xl font-black text-sky-400 mt-2">1,842 Clicks</h3>
            </div>
            <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <MousePointerClick className="h-5 w-5" />
            </div>
          </div>

          {/* Escrow Pending card */}
          <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Escrow Held Staging</p>
              <h3 className="text-3xl font-black text-amber-400 mt-2">$210.00</h3>
            </div>
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <ShieldCheck className="h-5 w-5" />
            </div>
          </div>

          {/* Help Quick Reference */}
          <div className="glass-panel p-6 rounded-2xl bg-sky-500/5 border-sky-500/10 flex flex-col justify-center">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="h-4 w-4 text-sky-400" />
              Need Support?
            </h4>
            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
              Your commissions are split 3-ways upon brand postbacks. For help, contact your team Group Leader.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
