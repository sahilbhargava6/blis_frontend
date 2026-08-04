'use client';

import { Users, MousePointerClick, CheckCircle, TrendingUp, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function LeaderOverview() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const stats = [
    { name: 'Active Team Members', value: '18 / 20', progress: 90, color: 'text-amber-400' },
    { name: 'Team Clicks (30d)', value: '14,892', change: '+14%', color: 'text-sky-400' },
    { name: 'Team Conversions', value: '1,204', change: '+9%', color: 'text-emerald-400' },
    { name: 'My Commission Cut (20%)', value: '$3,690.00', change: 'Escrow Pending', color: 'text-purple-400' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Team Dashboard</h1>
          <p className="text-slate-400 mt-1 text-sm">Monitor promoter activities, commission splits, and group capacity limits.</p>
        </div>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/5 text-xs font-bold text-slate-300 transition-all cursor-pointer"
        >
          {showAdvanced ? 'Simple View' : 'View Advanced Analytics'}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="glass-panel p-6 rounded-2xl">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.name}</p>
            <h3 className="text-3xl font-black text-white mt-2">{stat.value}</h3>
            {stat.progress !== undefined ? (
              <div className="mt-4">
                <div className="w-full bg-slate-800 rounded-full h-1">
                  <div className="bg-amber-400 h-1 rounded-full" style={{ width: `${stat.progress}%` }}></div>
                </div>
                <span className="text-[10px] text-slate-500 font-semibold mt-1 block">90% group capacity limit reached</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 mt-4">
                <span className="text-xs font-bold text-emerald-400">{stat.change}</span>
                <span className="text-[10px] text-slate-500 font-medium">this month</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progressive Disclosure Section */}
      {showAdvanced && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fadeIn">
          {/* Detailed Sparkline telemetry */}
          <div className="lg:col-span-2 glass-panel p-6 rounded-2xl">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-6">
              Hourly Traffic Distribution (UTC)
            </h3>
            <div className="h-48 flex items-end justify-between gap-2 pt-6">
              {[20, 35, 45, 30, 60, 50, 75, 40, 90, 80, 95, 65].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <div className="w-full rounded-t bg-amber-400/80 hover:bg-amber-400 transition-all duration-300" style={{ height: `${val}%` }}></div>
                  <span className="text-[9px] text-slate-500 font-bold">{idx * 2}h</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leader Quick Tips Info box */}
          <div className="glass-panel p-6 rounded-2xl bg-amber-500/5 border-amber-500/10 flex flex-col justify-center">
            <div className="p-3 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 w-fit mb-4">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-200">How splits work:</h4>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              For every approved referral made by your promoters, you earn a 20% group override commission. These commissions are placed in pending status for 30 days to counter transaction disputes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
