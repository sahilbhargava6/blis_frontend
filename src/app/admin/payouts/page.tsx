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
          <h1 className="text-2xl font-bold tracking-tight text-slate-800 font-['Plus_Jakarta_Sans']">Financial Ledger</h1>
          <p className="text-slate-500 mt-1 text-sm font-semibold font-['Roboto']">Review pending balances, oversee payouts, and release bulk funds.</p>
        </div>
        <button
          onClick={handleApproveAll}
          disabled={loading || payouts.every(p => p.status === 'Approved')}
          className="flex items-center gap-2 py-3 px-5 rounded-xl bg-green-600 hover:bg-green-700 disabled:bg-slate-200 disabled:text-slate-400 active:scale-95 text-white font-bold text-sm cursor-pointer shadow-md shadow-green-600/20 transition-all font-['Plus_Jakarta_Sans']"
        >
          <CheckSquare className="h-4 w-4" />
          {loading ? 'Approving...' : 'Approve All Payouts'}
        </button>
      </div>

      {successMsg && (
        <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-bold font-['Plus_Jakarta_Sans']">
          {successMsg}
        </div>
      )}

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Pending Release</p>
          <h3 className="text-3xl font-extrabold text-[#B98776] mt-2 font-['Plus_Jakarta_Sans']">$22,400.00</h3>
          <p className="text-[10px] text-slate-400 font-semibold font-['Roboto'] mt-1.5">Held in escrow staging wallets.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Total Paid Out</p>
          <h3 className="text-3xl font-extrabold text-green-600 mt-2 font-['Plus_Jakarta_Sans']">$342,100.00</h3>
          <p className="text-[10px] text-slate-400 font-semibold font-['Roboto'] mt-1.5">Cumulative lifetime paid payouts.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center">
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 font-['Plus_Jakarta_Sans']">
            <Award className="h-4 w-4 text-[#F047AB]" />
            Top Earning Group
          </p>
          <h4 className="text-lg font-bold text-slate-800 mt-1.5 font-['Plus_Jakarta_Sans']">Bangalore O2O Sellers</h4>
          <p className="text-[10px] text-slate-450 font-semibold font-['Roboto'] mt-0.5">Led by Kunal G.</p>
        </div>
      </div>

      {/* Payouts Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between flex-wrap gap-3">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Pending Ledger</h3>
          <div className="relative max-w-xs w-full">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
              <Search className="h-3.5 w-3.5" />
            </span>
            <input
              type="text"
              placeholder="Filter by name..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-205 text-xs text-slate-800 focus:border-[#0E76C0] outline-none transition-all font-['Roboto']"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] uppercase tracking-wider text-slate-400 font-bold bg-slate-50/50">
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Payee Name</th>
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Account Level</th>
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Affiliated Group</th>
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Pending Commission</th>
                <th className="py-4 px-6 text-right font-['Plus_Jakarta_Sans']">Approval Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {payouts.map((payout) => (
                <tr key={payout.id} className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 font-bold text-slate-800 flex items-center gap-3 font-['Plus_Jakarta_Sans']">
                    <div className="p-2 rounded-lg bg-green-50 text-green-600 border border-green-100">
                      <CreditCard className="h-4 w-4" />
                    </div>
                    {payout.name}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-['Plus_Jakarta_Sans'] ${
                      payout.role === 'Leader' ? 'bg-[#B98776]/10 text-[#b6745f]' : 'bg-[#0E76C0]/10 text-[#0E76C0]'
                    }`}>
                      {payout.role}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-650 font-bold font-['Roboto']">{payout.group}</td>
                  <td className="py-4 px-6 font-bold text-slate-800 font-['Roboto']">${payout.pending.toFixed(2)}</td>
                  <td className="py-4 px-6 text-right">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold font-['Plus_Jakarta_Sans'] ${
                      payout.status === 'Approved' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-[#B98776]/10 text-[#b6745f]'
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
