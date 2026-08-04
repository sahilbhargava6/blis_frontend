'use client';

import { Search, UserCheck, Users, ShieldAlert } from 'lucide-react';

export default function AdminGroups() {
  const groups = [
    { id: 1, name: 'Mumbai Retail Team', leader: 'Sahil Bhargava', membersCount: 18, clicks: '14,890', revenue: '$18,450.00' },
    { id: 2, name: 'Bangalore O2O Sellers', leader: 'Kunal G.', membersCount: 20, clicks: '22,400', revenue: '$32,100.00' },
    { id: 3, name: 'Delhi Tech Marketers', leader: 'Priya Sharma', membersCount: 8, clicks: '6,210', revenue: '$9,300.00' },
    { id: 4, name: 'Pune Homepreneurs', leader: 'Ramesh Patel', membersCount: 12, clicks: '9,430', revenue: '$12,600.00' },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Group Oversight</h1>
          <p className="text-slate-400 mt-1 text-sm">Monitor group capacities, active leaders, and team performance metrics.</p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xs">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
            <Search className="h-4 w-4" />
          </span>
          <input
            type="text"
            placeholder="Search group or leader..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs"
          />
        </div>
      </div>

      {/* Grid or Table Card */}
      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/5">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Active Teams</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-white/5 text-[10px] uppercase tracking-wider text-slate-500 font-bold bg-white/2">
                <th className="py-4 px-6">Group Info</th>
                <th className="py-4 px-6">Assigned Leader</th>
                <th className="py-4 px-6">20-Member Capacity Limit</th>
                <th className="py-4 px-6">Total Clicks</th>
                <th className="py-4 px-6 text-right">Team Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {groups.map((group) => {
                const isFull = group.membersCount >= 20;
                const capacityPercentage = (group.membersCount / 20) * 100;
                
                return (
                  <tr key={group.id} className="hover:bg-white/2 transition">
                    <td className="py-4 px-6 font-bold text-white flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                        <Users className="h-4 w-4" />
                      </div>
                      {group.name}
                    </td>
                    <td className="py-4 px-6 text-slate-400 font-semibold flex items-center gap-2">
                      <UserCheck className="h-4 w-4 text-emerald-400" />
                      {group.leader}
                    </td>
                    <td className="py-4 px-6">
                      <div className="w-full max-w-[150px]">
                        <div className="flex items-center justify-between text-xs font-semibold mb-1">
                          <span className={`${isFull ? 'text-rose-400 font-bold' : 'text-slate-400'}`}>
                            {group.membersCount}/20 Members
                          </span>
                          {isFull && <ShieldAlert className="h-3.5 w-3.5 text-rose-400 animate-bounce" />}
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              isFull ? 'bg-rose-500 shadow-md shadow-rose-500/50' : 'bg-emerald-400'
                            }`}
                            style={{ width: `${capacityPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-400 font-semibold">{group.clicks}</td>
                    <td className="py-4 px-6 text-right font-extrabold text-emerald-400">{group.revenue}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
