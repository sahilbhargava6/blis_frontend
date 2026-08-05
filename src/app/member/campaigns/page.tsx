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
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 font-['Plus_Jakarta_Sans']">Affiliate Offers</h1>
        <p className="text-slate-400 mt-1 text-sm font-['Roboto']">Browse campaigns assigned by your group leader and generate unique referral links.</p>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((camp) => (
          <div key={camp.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#0E76C0]/10 text-[#0E76C0] border border-[#0E76C0]/20">
                  <Megaphone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-['Plus_Jakarta_Sans']">{camp.title}</h3>
                  <span className="text-[10px] font-bold text-slate-400 font-['Roboto']">{camp.type}</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-['Roboto']">
                {camp.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Your Payout</p>
                <p className="text-sm font-black text-green-600 font-['Plus_Jakarta_Sans']">{camp.payout}</p>
              </div>
              <Link
                href="/member/links"
                className="flex items-center gap-1.5 py-2 px-3.5 rounded-xl bg-[#0E76C0] hover:bg-[#0c66a8] text-xs font-bold text-white transition-all shadow-sm shadow-[#0E76C0]/20 cursor-pointer font-['Plus_Jakarta_Sans']"
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
