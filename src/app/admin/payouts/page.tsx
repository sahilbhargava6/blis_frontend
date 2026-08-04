'use client';

import { useState } from 'react';
import { CreditCard, CheckSquare, Search, Award } from 'lucide-react';

export default function AdminPayouts() {
  const [payouts, setPayouts] = useState([
    { id: 1, name: 'Sahil Bhargava', role: 'Leader', group: 'Mumbai Retail Team', pending: 8400.00, status: 'Pending Approval' },
    { id: 2, name: 'Kunal G.', role: 'Leader', group: 'Bangalore O2O Sellers', pending: 12600.00, status: 'Pending Approval' },
    { id: 3, name: 'Rahul Sharma', role: 'Member', group: 'Mumbai Retail Team', pending: 450.00, status: 'Pending Approval' },
    { id: 4, name: 'Priya K.', role: 'Member', group: 'Bangalore O2O Sellers', pending: 950.00, status: 'Pending Approval' },
  ]);

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleApproveAll = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPayouts(payouts.map(p => ({ ...p, status: 'Approved' })));
      setSuccessMsg('Bulk payouts approved successfully! Funds released to all wallets.');
    }, 1000);
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Financial Ledger</h1>
          <p className="text-slate-400 mt-1 text-sm">Review pending balances, oversee payouts, and release bulk funds.</p>
        </div>
        <button
          onClick={handleApproveAll}
          disabled={loading || payouts.every(p => p.status === 'Approved')}
          className="flex items-center gap-2 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-800 disabled:text-slate-600 active:scale-95 text-white font-bold text-sm cursor-pointer shadow-lg shadow-emerald-500/25 transition-all"
        >
          <CheckSquare className="h-4 w-4" />
          {loading ? 'Approving...' : 'Approve All Payouts'}
        </button>
      </div>

      {successMsg && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">
          {successMsg}
        </div>
      )}

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Pending Release</p>
          <h3 className="text-3xl font-black text-amber-400 mt-2">$22,400.00</h3>
          <p className="text-[10px] text-slate-500 mt-1.5">Held in escrow staging wallets.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Paid Out</p>
          <h3 className="text-3xl font-black text-emerald-400 mt-2">$342,100.00</h3>
          <p className="text-[10px] text-slate-500 mt-1.5">Cumulative lifetime paid payouts.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center bg-slate-900/40">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="h-4 w-4 text-purple-400" />
            Top Earning Group
          </p>
          <h4 className="text-lg font-bold text-white mt-1.5">Bangalore O2O Sellers</h4>
          <p className="text-[10px] text-slate-500">Led by Kunal G.</p>
        </div>
      </div>

      {/* Payouts Table */}
      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Pending Ledger</h3>
          <div className="relative max-w-xs">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
              <Search className="h-3.5 w-3.5" />
            </span>
            <input
              type="text"
              placeholder="Filter by name..."
              className="w-full pl-9 pr-4 py-2 rounded-lg glass-input text-[11px]"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-white/5 text-[10px] uppercase tracking-wider text-slate-500 font-bold bg-white/2">
                <th className="py-4 px-6">Payee Name</th>
                <th className="py-4 px-6">Account Level</th>
                <th className="py-4 px-6">Affiliated Group</th>
                <th className="py-4 px-6">Pending Commission</th>
                <th className="py-4 px-6 text-right">Approval Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {payouts.map((payout) => (
                <tr key={payout.id} className="hover:bg-white/2 transition">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                      <CreditCard className="h-4 w-4" />
                    </div>
                    {payout.name}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      payout.role === 'Leader' ? 'bg-amber-500/10 text-amber-400' : 'bg-sky-500/10 text-sky-400'
                    }`}>
                      {payout.role}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-400 font-semibold">{payout.group}</td>
                  <td className="py-4 px-6 font-bold text-slate-300">${payout.pending.toFixed(2)}</td>
                  <td className="py-4 px-6 text-right">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      payout.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                    }`}>
                      {payout.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
