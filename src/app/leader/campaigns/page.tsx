'use client';

import { useState } from 'react';
import { Megaphone, ChevronDown, ChevronUp, Share2, Check } from 'lucide-react';

export default function LeaderCampaigns() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [distributed, setDistributed] = useState<Record<number, boolean>>({});

  const campaigns = [
    { id: 1, title: 'Amazon Electronics Promo', type: 'CPS (10%)', description: 'Promote top electronics products on Amazon. Direct cookies valid for 24 hours. Split is: 70% Member, 20% Leader, 10% Platform.' },
    { id: 2, title: 'Hostinger Cloud Web Hosting', type: 'CPA ($50.00)', description: 'Earn high commissions for each annual cloud web hosting subscription driven. Cookies valid for 30 days. Real-time conversion tracking.' },
    { id: 3, title: 'Canva Pro Annual Subscriptions', type: 'Revenue Share (30%)', description: 'Awarded to users registering for Canva Pro subscriptions. Recurring split calculated monthly.' },
  ];

  const handleDistribute = (campId: number) => {
    setDistributed(prev => ({ ...prev, [campId]: true }));
    setTimeout(() => {
      // Clear notification after 3 seconds
      setDistributed(prev => ({ ...prev, [campId]: false }));
    }, 3000);
  };

  const toggleAccordion = (id: number) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Group Campaigns</h1>
        <p className="text-slate-400 mt-1 text-sm">Browse campaigns, view details, and instantly distribute tracking codes to your team.</p>
      </div>

      {/* Campaigns Accordion List */}
      <div className="space-y-4">
        {campaigns.map((camp) => {
          const isOpen = activeAccordion === camp.id;
          const isCampDistributed = distributed[camp.id];

          return (
            <div key={camp.id} className="glass-panel rounded-2xl overflow-hidden transition-all duration-300">
              {/* Head Accordion click bar */}
              <div
                onClick={() => toggleAccordion(camp.id)}
                className="p-6 flex items-center justify-between cursor-pointer hover:bg-white/2 select-none"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Megaphone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">{camp.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{camp.type}</p>
                  </div>
                </div>
                <div>
                  {isOpen ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                </div>
              </div>

              {/* Accordion Content */}
              {isOpen && (
                <div className="px-6 pb-6 pt-2 border-t border-white/5 bg-slate-900/20 space-y-4 animate-fadeIn">
                  <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                    {camp.description}
                  </p>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                      Payout ratio: 70% Member | 20% Leader
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDistribute(camp.id);
                      }}
                      className={`flex items-center gap-2 py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isCampDistributed 
                          ? 'bg-emerald-500/15 border border-emerald-500/20 text-emerald-400' 
                          : 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/20 active:scale-95'
                      }`}
                    >
                      {isCampDistributed ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          Distributed!
                        </>
                      ) : (
                        <>
                          <Share2 className="h-3.5 w-3.5" />
                          Distribute to Team
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
