'use client';

import { useState } from 'react';
import { CreditCard, TrendingUp, CheckCircle, Clock, XCircle, ChevronRight } from 'lucide-react';

export default function MemberStats() {
  const [requestSent, setRequestSent] = useState(false);

  const transactions = [
    { id: 101, campaign: 'Amazon Electronics Promo', type: 'CPS Split', amount: '$14.00', status: 'Pending Hold', date: 'Today, 02:44 PM' },
    { id: 102, campaign: 'Hostinger Cloud Web Hosting', type: 'CPA Split', amount: '$35.00', status: 'Approved', date: 'Yesterday, 11:15 AM' },
    { id: 103, campaign: 'Canva Pro Annual Subscriptions', type: 'RevShare Split', amount: '$21.00', status: 'Rejected', date: 'Aug 02, 09:12 AM' },
  ];

  const handleWithdrawal = () => {
    setRequestSent(true);
    setTimeout(() => setRequestSent(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Wallet & Conversion Ledger</h1>
        <p className="text-slate-400 mt-1 text-sm">Verify payout balances, browse ledger entries, and trigger bank withdrawals.</p>
      </div>

      {/* Wallet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between min-h-[140px]">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Available Balance</p>
            <h3 className="text-3xl font-black text-emerald-400 mt-2">$420.00</h3>
          </div>
          <button
            onClick={handleWithdrawal}
            disabled={requestSent}
            className="w-full mt-4 flex items-center justify-between p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/10 disabled:text-emerald-400 font-bold text-xs text-white transition-all cursor-pointer"
          >
            <span>{requestSent ? 'Request Sent!' : 'Request Withdrawal'}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="glass-panel p-6 rounded-2xl min-h-[140px] flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Staging Held Escrow</p>
            <h3 className="text-3xl font-black text-amber-400 mt-2">$210.00</h3>
          </div>
          <p className="text-[10px] text-slate-500 mt-2">Held for fraud prevention checks.</p>
        </div>

        <div className="glass-panel p-6 rounded-2xl min-h-[140px] flex flex-col justify-between bg-slate-900/40">
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Lifetime Earnings</p>
            <h3 className="text-3xl font-black text-sky-400 mt-2">$1,890.00</h3>
          </div>
          <p className="text-[10px] text-slate-500 mt-2">Cumulative payouts released.</p>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/5">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Transaction Ledger</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-white/5 text-[10px] uppercase tracking-wider text-slate-500 font-bold bg-white/2">
                <th className="py-4 px-6">Source Campaign</th>
                <th className="py-4 px-6">Log Date</th>
                <th className="py-4 px-6">Split Share Type</th>
                <th className="py-4 px-6">My Cut</th>
                <th className="py-4 px-6 text-right">Approval Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-white/2 transition">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/10">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    {tx.campaign}
                  </td>
                  <td className="py-4 px-6 text-slate-400 font-semibold">{tx.date}</td>
                  <td className="py-4 px-6 text-slate-400 font-semibold">{tx.type}</td>
                  <td className="py-4 px-6 font-extrabold text-emerald-400">{tx.amount}</td>
                  <td className="py-4 px-6 text-right">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      tx.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400' :
                      tx.status === 'Pending Hold' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-rose-500/10 text-rose-400'
                    }`}>
                      {tx.status === 'Approved' ? <CheckCircle className="h-3 w-3" /> :
                       tx.status === 'Pending Hold' ? <Clock className="h-3 w-3" /> :
                       <XCircle className="h-3 w-3" />}
                      {tx.status}
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
