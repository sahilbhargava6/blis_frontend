'use client';

import { Megaphone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function MemberCampaigns() {
  const campaigns = [
    { id: 1, title: 'Amazon Electronics Promo', type: 'CPS (10% Sales)', payout: '7% (Member Share)', description: 'Earn commissions promoting select home and laptop electronics. Average order value is $120.00.' },
    { id: 2, title: 'Hostinger Cloud Web Hosting', type: 'CPA ($50.00 Acquisition)', payout: '$35.00 (Member Share)', description: 'Flat payout for each web hosting package sold with an active annual contract.' },
    { id: 3, title: 'Canva Pro Annual Subscriptions', type: 'Revenue Share (30%)', payout: '21% (Member Share)', description: 'Get monthly recurring commissions for each active Canva Pro membership driven.' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Affiliate Offers</h1>
        <p className="text-slate-400 mt-1 text-sm">Browse campaigns assigned by your group leader and generate unique referral links.</p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((camp) => (
          <div key={camp.id} className="glass-panel p-6 rounded-2xl flex flex-col justify-between transition hover:-translate-y-1 hover:shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Megaphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">{camp.title}</h3>
                  <span className="text-[10px] font-bold text-slate-500">{camp.type}</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {camp.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Your Payout</p>
                <p className="text-sm font-black text-emerald-400">{camp.payout}</p>
              </div>
              <Link
                href="/member/links"
                className="flex items-center gap-1.5 py-2 px-3 rounded-lg bg-sky-500 hover:bg-sky-600 text-xs font-bold text-white transition cursor-pointer"
              >
                Get Link
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
