'use client';

import { Users, MousePointerClick, CheckCircle, TrendingUp, HelpCircle, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function LeaderOverview() {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const stats = [
    { name: 'Active Team Members', value: '18 / 20', progress: 90, icon: Users, color: 'text-[#B98776]', bg: 'bg-[#B98776]/10', border: 'border-[#B98776]/20' },
    { name: 'Team Clicks (30d)', value: '14,892', change: '+14%', icon: MousePointerClick, color: 'text-[#0E76C0]', bg: 'bg-[#0E76C0]/10', border: 'border-[#0E76C0]/20' },
    { name: 'Team Conversions', value: '1,204', change: '+9%', icon: CheckCircle, color: 'text-[#F047AB]', bg: 'bg-[#F047AB]/10', border: 'border-[#F047AB]/20' },
    { name: 'My Commission (20%)', value: '₹3,690', change: 'Escrow Pending', icon: TrendingUp, color: 'text-[#0E76C0]', bg: 'bg-[#0E76C0]/10', border: 'border-[#0E76C0]/20' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800 font-['Plus_Jakarta_Sans']">Team Dashboard</h1>
          <p className="text-slate-500 mt-1 text-sm font-semibold font-['Roboto']">Monitor promoter activities, commission splits, and group capacity limits.</p>
        </div>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-1.5 py-2.5 px-5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 transition-all cursor-pointer font-['Plus_Jakarta_Sans'] shadow-sm"
        >
          {showAdvanced ? 'Simple View' : 'View Advanced Analytics'}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-['Plus_Jakarta_Sans']">{stat.name}</p>
                <h3 className="text-3xl font-extrabold text-slate-800 mt-2 font-['Plus_Jakarta_Sans']">{stat.value}</h3>
              </div>
              <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color} border ${stat.border}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            {stat.progress !== undefined ? (
              <div className="mt-4">
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <div className="bg-[#B98776] h-1.5 rounded-full transition-all duration-1000" style={{ width: `${stat.progress}%` }}></div>
                </div>
                <span className="text-[10px] text-slate-500 font-bold mt-1.5 block font-['Roboto']">90% group capacity limit reached</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 mt-4">
                {stat.change === 'Escrow Pending' ? (
                  <span className="text-xs font-bold text-[#B98776] bg-[#B98776]/10 px-2 py-0.5 rounded-md font-['Plus_Jakarta_Sans']">{stat.change}</span>
                ) : (
                  <>
                    <ArrowUpRight className="h-3 w-3 text-green-600" />
                    <span className="text-xs font-bold text-green-600">{stat.change}</span>
                    <span className="text-[10px] text-slate-500 font-semibold font-['Roboto']">this month</span>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Progressive Disclosure Section */}
      {showAdvanced && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hourly Traffic Distribution */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-6 font-['Plus_Jakarta_Sans']">
              Hourly Traffic Distribution (UTC)
            </h3>
            <div className="h-48 flex items-end justify-between gap-2 pt-6">
              {[20, 35, 45, 30, 60, 50, 75, 40, 90, 80, 95, 65].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                  <span className="text-[9px] font-bold text-[#B98776] opacity-0 group-hover:opacity-100 transition-opacity">{val}%</span>
                  <div 
                    className="w-full rounded-t bg-gradient-to-t from-[#B98776]/20 to-[#B98776] group-hover:from-[#F047AB]/20 group-hover:to-[#F047AB] transition-all duration-500 cursor-pointer" 
                    style={{ height: `${val}%` }}
                  ></div>
                  <span className="text-[9px] text-slate-600 font-extrabold font-['Roboto']">{idx * 2}h</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leader Quick Tips */}
          <div className="bg-white p-6 rounded-2xl border border-[#B98776]/20 shadow-sm flex flex-col justify-center">
            <div className="p-3 rounded-full bg-[#B98776]/10 text-[#B98776] border border-[#B98776]/20 w-fit mb-4">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h4 className="text-sm font-bold text-slate-800 font-['Plus_Jakarta_Sans']">How splits work:</h4>
            <p className="text-xs text-slate-600 leading-relaxed mt-2 font-semibold font-['Roboto']">
              For every approved referral made by your promoters, you earn a 20% group override commission. These commissions are placed in pending status for 30 days to counter transaction disputes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
