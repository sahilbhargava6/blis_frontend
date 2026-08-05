'use client';

import { useState } from 'react';
import { ArrowUpRight, BadgeCheck, HelpCircle, Eye, EyeOff, MousePointerClick, ShieldCheck, Wallet } from 'lucide-react';

export default function MemberOverview() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800 font-['Plus_Jakarta_Sans']">Promoter Dashboard</h1>
          <p className="text-slate-400 mt-1 text-sm font-['Roboto']">Quick dashboard lookup for commissions and payouts.</p>
        </div>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2 py-2.5 px-5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 transition-all cursor-pointer font-['Plus_Jakarta_Sans'] shadow-sm"
        >
          {showAdvanced ? (
            <>
              <EyeOff className="h-4 w-4 text-slate-400" />
              Simple View
            </>
          ) : (
            <>
              <Eye className="h-4 w-4 text-[#0E76C0]" />
              View Advanced Analytics
            </>
          )}
        </button>
      </div>

      {/* Primary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Withdrawable Balance Card */}
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden hover:shadow-md transition-all duration-300">
          <div className="absolute top-0 right-0 p-6 opacity-[0.04]">
            <Wallet className="h-32 w-32 text-[#0E76C0]" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Withdrawable Balance</p>
            <h2 className="text-5xl font-extrabold text-[#0E76C0] mt-3 font-['Plus_Jakarta_Sans']">$420.00</h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mt-5 font-['Roboto']">
            <BadgeCheck className="h-4 w-4 text-green-500" />
            Held securely in local wallet ledger.
          </div>
          <button className="mt-5 py-2.5 px-6 rounded-xl bg-[#0E76C0] text-white text-xs font-bold hover:bg-[#0c66a8] transition-all shadow-sm shadow-[#0E76C0]/20 cursor-pointer font-['Plus_Jakarta_Sans']">
            Withdraw Now
          </button>
        </div>

        {/* Active Conversions Counter */}
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
          <div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Active Conversions (30d)</p>
            <h2 className="text-5xl font-extrabold text-slate-800 mt-3 font-['Plus_Jakarta_Sans']">28</h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mt-5 font-['Roboto']">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Last conversion logged 2 hours ago.
          </div>
          {/* Mini progress indicator */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { label: 'Approved', count: 18, color: 'bg-green-500' },
              { label: 'Pending', count: 7, color: 'bg-[#B98776]' },
              { label: 'Rejected', count: 3, color: 'bg-slate-300' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className={`h-1 rounded-full ${item.color} mb-1.5`}></div>
                <span className="text-lg font-bold text-slate-700 font-['Plus_Jakarta_Sans']">{item.count}</span>
                <p className="text-[10px] text-slate-400 font-['Roboto']">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Advanced Analytics Panel */}
      {showAdvanced && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Total Clicks */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:shadow-md transition-all duration-300">
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Link Click-Throughs</p>
              <h3 className="text-3xl font-extrabold text-[#0E76C0] mt-2 font-['Plus_Jakarta_Sans']">1,842</h3>
              <p className="text-[10px] text-slate-400 mt-1 font-['Roboto']">Total clicks tracked</p>
            </div>
            <div className="p-3 rounded-xl bg-[#0E76C0]/10 text-[#0E76C0] border border-[#0E76C0]/20">
              <MousePointerClick className="h-5 w-5" />
            </div>
          </div>

          {/* Escrow Pending */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between hover:shadow-md transition-all duration-300">
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Escrow Held Staging</p>
              <h3 className="text-3xl font-extrabold text-[#B98776] mt-2 font-['Plus_Jakarta_Sans']">$210.00</h3>
              <p className="text-[10px] text-slate-400 mt-1 font-['Roboto']">30-day hold period</p>
            </div>
            <div className="p-3 rounded-xl bg-[#B98776]/10 text-[#B98776] border border-[#B98776]/20">
              <ShieldCheck className="h-5 w-5" />
            </div>
          </div>

          {/* Help Quick Reference */}
          <div className="bg-white p-6 rounded-2xl border border-[#0E76C0]/20 shadow-sm flex flex-col justify-center">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5 font-['Plus_Jakarta_Sans']">
              <HelpCircle className="h-4 w-4 text-[#0E76C0]" />
              Need Support?
            </h4>
            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-['Roboto']">
              Your commissions are split 3-ways upon brand postbacks. For help, contact your team Group Leader.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
