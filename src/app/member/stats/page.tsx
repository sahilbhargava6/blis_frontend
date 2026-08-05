'use client';

import { useState } from 'react';
import { CreditCard, TrendingUp, CheckCircle, Clock, XCircle, ChevronRight } from 'lucide-react';

export default function MemberStats() {
  const [requestSent, setRequestSent] = useState(false);

  const transactions = [
    { id: 101, campaign: 'Amazon Electronics Promo', type: 'CPS Split', amount: '₹14.05', status: 'Pending Hold', date: 'Today, 02:44 PM' },
    { id: 102, campaign: 'Hostinger Cloud Web Hosting', type: 'CPA Split', amount: '₹35.00', status: 'Approved', date: 'Yesterday, 11:15 AM' },
    { id: 103, campaign: 'Canva Pro Annual Subscriptions', type: 'RevShare Split', amount: '₹21.00', status: 'Rejected', date: 'Aug 02, 09:12 AM' },
  ];

  const handleWithdrawal = () => {
    setRequestSent(true);
    setTimeout(() => setRequestSent(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 font-['Plus_Jakarta_Sans']">Wallet & Conversion Ledger</h1>
        <p className="text-slate-500 mt-1 text-sm font-semibold font-['Roboto']">Verify payout balances, browse ledger entries, and trigger bank withdrawals.</p>
      </div>

      {/* Wallet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between min-h-[140px] hover:shadow-md transition-all duration-300">
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Available Balance</p>
            <h3 className="text-3xl font-extrabold text-green-600 mt-2 font-['Plus_Jakarta_Sans']">₹420.00</h3>
          </div>
          <button
            onClick={handleWithdrawal}
            disabled={requestSent}
            className="w-full mt-4 flex items-center justify-between p-2.5 rounded-xl bg-[#0E76C0] hover:bg-[#0c66a8] disabled:bg-slate-100 disabled:text-slate-400 font-bold text-xs text-white transition-all shadow-sm shadow-[#0E76C0]/20 cursor-pointer font-['Plus_Jakarta_Sans']"
          >
            <span>{requestSent ? 'Request Sent!' : 'Request Withdrawal'}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm min-h-[140px] flex flex-col justify-between hover:shadow-md transition-all duration-300">
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Staging Held Escrow</p>
            <h3 className="text-3xl font-extrabold text-[#B98776] mt-2 font-['Plus_Jakarta_Sans']">₹210.00</h3>
          </div>
          <p className="text-[10px] text-slate-500 font-semibold font-['Roboto'] mt-2">Held for fraud prevention checks.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm min-h-[140px] flex flex-col justify-between hover:shadow-md transition-all duration-300">
          <div>
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Lifetime Earnings</p>
            <h3 className="text-3xl font-extrabold text-[#0E76C0] mt-2 font-['Plus_Jakarta_Sans']">₹1,890.00</h3>
          </div>
          <p className="text-[10px] text-slate-500 font-semibold font-['Roboto'] mt-2">Cumulative payouts released.</p>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Transaction Ledger</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] uppercase tracking-wider text-slate-400 font-bold bg-slate-50/50">
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Source Campaign</th>
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Log Date</th>
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Split Share Type</th>
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">My Cut</th>
                <th className="py-4 px-6 text-right font-['Plus_Jakarta_Sans']">Approval Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 font-bold text-slate-800 flex items-center gap-3 font-['Plus_Jakarta_Sans']">
                    <div className="p-2 rounded-lg bg-[#0E76C0]/10 text-[#0E76C0] border border-[#0E76C0]/10">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                    {tx.campaign}
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-bold font-['Roboto']">{tx.date}</td>
                  <td className="py-4 px-6 text-slate-600 font-bold font-['Roboto']">{tx.type}</td>
                  <td className="py-4 px-6 font-extrabold text-green-600 font-['Plus_Jakarta_Sans']">{tx.amount}</td>
                  <td className="py-4 px-6 text-right">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold font-['Plus_Jakarta_Sans'] ${
                      tx.status === 'Approved' ? 'bg-green-50 text-green-600 border border-green-100' :
                      tx.status === 'Pending Hold' ? 'bg-[#B98776]/10 text-[#B98776] border border-[#B98776]/20' :
                      'bg-red-50 text-red-600 border border-red-100'
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
