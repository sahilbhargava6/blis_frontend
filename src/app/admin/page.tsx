'use client';

import { TrendingUp, MousePointerClick, CheckCircle, BarChart3, Users2, ArrowUpRight } from 'lucide-react';

export default function AdminOverview() {
  const stats = [
    { name: 'Total Active Clicks', value: '45,892', change: '+12.3%', icon: MousePointerClick, color: 'text-[#0E76C0]', bg: 'bg-[#0E76C0]/10', border: 'border-[#0E76C0]/20' },
    { name: 'Total Conversions', value: '2,931', change: '+8.4%', icon: CheckCircle, color: 'text-[#F047AB]', bg: 'bg-[#F047AB]/10', border: 'border-[#F047AB]/20' },
    { name: 'Active Groups', value: '18', change: '+2 new this week', icon: Users2, color: 'text-[#B98776]', bg: 'bg-[#B98776]/10', border: 'border-[#B98776]/20' },
    { name: 'Gross Revenue Share', value: '$84,930', change: '+15.2%', icon: TrendingUp, color: 'text-[#0E76C0]', bg: 'bg-[#0E76C0]/10', border: 'border-[#0E76C0]/20' },
  ];

  const recentActivity = [
    { member: 'Rahul S.', action: 'O2O store click referral', amt: '$70.00', status: 'Pending Hold', time: '2 min ago' },
    { member: 'Kunal G.', action: 'Campaign deep link click', amt: '$140.00', status: 'Pending Hold', time: '8 min ago' },
    { member: 'Priya K.', action: 'Affiliate conversion', amt: '$210.00', status: 'Approved', time: '23 min ago' },
    { member: 'Deepak R.', action: 'WhatsApp catalog share', amt: '$95.00', status: 'Approved', time: '45 min ago' },
    { member: 'Sneha M.', action: 'Instagram story link', amt: '$55.00', status: 'Pending Hold', time: '1 hr ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 font-['Plus_Jakarta_Sans']">System Command Center</h1>
        <p className="text-slate-500 mt-1 text-sm font-semibold font-['Roboto']">Real-time telemetry and overview statistics.</p>
      </div>

      {/* Stats Grid */}
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
            <div className="flex items-center gap-1.5 mt-4">
              <ArrowUpRight className="h-3 w-3 text-green-600" />
              <span className="text-xs font-bold text-green-600">{stat.change}</span>
              <span className="text-[10px] text-slate-500 font-semibold font-['Roboto']">vs previous period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Feed Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main telemetry graph */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2 font-['Plus_Jakarta_Sans']">
              <BarChart3 className="h-4 w-4 text-[#0E76C0]" />
              Click & Conversion Velocity
            </h3>
            <span className="text-xs text-slate-500 font-semibold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 font-['Plus_Jakarta_Sans']">
              Last 7 Days
            </span>
          </div>
          {/* Bar chart */}
          <div className="h-64 flex items-end justify-between gap-3 pt-6 border-b border-slate-100">
            {[
              { val: 65, label: 'Mon' },
              { val: 45, label: 'Tue' },
              { val: 80, label: 'Wed' },
              { val: 55, label: 'Thu' },
              { val: 95, label: 'Fri' },
              { val: 70, label: 'Sat' },
              { val: 85, label: 'Sun' },
            ].map((day, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <span className="text-[10px] font-bold text-[#0E76C0] opacity-0 group-hover:opacity-100 transition-opacity">{day.val}%</span>
                <div 
                  className="w-full rounded-t-lg bg-gradient-to-t from-[#0E76C0]/20 to-[#0E76C0] group-hover:from-[#F047AB]/20 group-hover:to-[#F047AB] transition-all duration-500 cursor-pointer" 
                  style={{ height: `${day.val}%` }}
                ></div>
                <span className="text-[11px] text-slate-600 font-bold font-['Roboto']">{day.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Conversion Feed */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4 font-['Plus_Jakarta_Sans']">
            Live Feed
          </h3>
          <div className="flex-1 space-y-3 overflow-y-auto pr-1">
            {recentActivity.map((feed, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-slate-50 transition-colors">
                <div>
                  <p className="text-xs font-bold text-slate-800 font-['Plus_Jakarta_Sans']">{feed.member}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-semibold font-['Roboto']">{feed.action}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-extrabold text-[#0E76C0]">{feed.amt}</p>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded font-['Plus_Jakarta_Sans'] ${
                    feed.status === 'Approved' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-[#B98776]/10 text-[#B98776] border border-[#B98776]/20'
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
