'use client';

import { TrendingUp, MousePointerClick, CheckCircle, BarChart3, Users2 } from 'lucide-react';

export default function AdminOverview() {
  const stats = [
    { name: 'Total Active Clicks', value: '45,892', change: '+12.3%', icon: MousePointerClick, color: 'text-sky-400' },
    { name: 'Total Conversions', value: '2,931', change: '+8.4%', icon: CheckCircle, color: 'text-emerald-400' },
    { name: 'Active Groups', value: '18', change: '+2 new this week', icon: Users2, color: 'text-amber-400' },
    { name: 'Gross Revenue Share', value: '$84,930.00', change: '+15.2%', icon: TrendingUp, color: 'text-purple-400' },
  ];

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">System Command Center</h1>
        <p className="text-slate-400 mt-1 text-sm">Real-time telemetry and overview statistics.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="glass-panel p-6 rounded-2xl transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.name}</p>
                <h3 className="text-3xl font-black text-white mt-2">{stat.value}</h3>
              </div>
              <div className={`p-2.5 rounded-xl bg-white/5 ${stat.color}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-4">
              <span className="text-xs font-bold text-emerald-400">{stat.change}</span>
              <span className="text-[10px] text-slate-500 font-medium">vs previous period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main telemetry graph placeholder */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-emerald-400" />
              Click & Conversion Velocity
            </h3>
            <span className="text-xs text-slate-400 font-semibold bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
              Last 7 Days
            </span>
          </div>
          {/* Simple premium mock graph using CSS grid bars */}
          <div className="h-64 flex items-end justify-between gap-3 pt-6 border-b border-white/5">
            {[65, 45, 80, 55, 95, 70, 85].map((val, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div 
                  className="w-full rounded-t-lg bg-gradient-to-t from-emerald-500/10 to-emerald-400 transition-all duration-1000" 
                  style={{ height: `${val}%` }}
                ></div>
                <span className="text-[10px] text-slate-500 font-bold">Day {idx + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Global Live Conversion Feed */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4">
            Live Feed
          </h3>
          <div className="flex-1 space-y-4 overflow-y-auto pr-1">
            {[
              { member: 'Rahul S.', amt: '$70.00', status: 'Pending Hold' },
              { member: 'Kunal G.', amt: '$140.00', status: 'Pending Hold' },
              { member: 'Priya K.', amt: '$210.00', status: 'Approved' },
            ].map((feed, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5">
                <div>
                  <p className="text-xs font-bold text-white">{feed.member}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">O2O store click referral</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-extrabold text-emerald-400">{feed.amt}</p>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                    feed.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                  }`}>
                    {feed.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
