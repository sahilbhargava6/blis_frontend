'use client';

import { Award, TrendingUp, CreditCard, ChevronRight } from 'lucide-react';

export default function LeaderAnalytics() {
  const leaderboard = [
    { rank: 1, name: 'Divya Nair', conversions: 50, revenue: '₹1,750.00', leaderCut: '₹350.00' },
    { rank: 2, name: 'Aravind K.', conversions: 24, revenue: '₹840.00', leaderCut: '₹168.00' },
    { rank: 3, name: 'Ananya Sen', conversions: 18, revenue: '₹630.00', leaderCut: '₹126.00' },
    { rank: 4, name: 'Gaurav Das', conversions: 6, revenue: '₹210.00', leaderCut: '₹42.00' },
  ];

  const recentTransactions = [
    { date: 'Today, 02:44 PM', member: 'Divya Nair', amt: '₹70.00', cut: '₹14.00', type: 'Amazon Electronics CPS' },
    { date: 'Yesterday, 11:15 AM', member: 'Aravind K.', amt: '₹100.00', cut: '₹20.00', type: 'Hostinger Hosting CPA' },
    { date: 'Aug 03, 08:30 PM', member: 'Ananya Sen', amt: '₹50.00', cut: '₹10.00', type: 'Hostinger Hosting CPA' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 font-['Plus_Jakarta_Sans']">Performance Leaderboard</h1>
        <p className="text-slate-500 mt-1 text-sm font-semibold font-['Roboto']">Review active member rankings and track your generated override commission ledger.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Team Leaderboard Card */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-6 flex items-center gap-2 font-['Plus_Jakarta_Sans']">
            <Award className="h-4 w-4 text-[#B98776]" />
            Top Promoters
          </h3>
          <div className="space-y-4">
            {leaderboard.map((item) => (
              <div key={item.rank} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-3">
                  <span className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    item.rank === 1 ? 'bg-amber-100 text-amber-800' :
                    item.rank === 2 ? 'bg-slate-100 text-slate-700' :
                    item.rank === 3 ? 'bg-amber-50 text-amber-900' : 'bg-slate-200 text-slate-650'
                  }`}>
                    {item.rank}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800 font-['Plus_Jakarta_Sans']">{item.name}</p>
                    <p className="text-[10px] text-slate-500 font-semibold font-['Roboto'] mt-0.5">{item.conversions} conversions driven</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-extrabold text-green-650">{item.revenue}</p>
                  <p className="text-[9px] text-slate-500 font-bold font-['Plus_Jakarta_Sans']">My Cut: <span className="text-[#B98776]">{item.leaderCut}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Override Ledger */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-6 flex items-center gap-2 font-['Plus_Jakarta_Sans']">
              <TrendingUp className="h-4 w-4 text-green-600" />
              Override Commission Feed
            </h3>
            <div className="space-y-4 overflow-y-auto max-h-[250px] pr-1">
              {recentTransactions.map((tx, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-800 font-['Plus_Jakarta_Sans']">{tx.member}</span>
                    <span className="text-green-600">+{tx.cut}</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-semibold font-['Roboto']">
                    <span>{tx.type}</span>
                    <span>{tx.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="w-full flex items-center justify-between mt-6 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 transition-all cursor-pointer font-['Plus_Jakarta_Sans']">
            <span className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-[#B98776]" />
              Request Withdrawal
            </span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
