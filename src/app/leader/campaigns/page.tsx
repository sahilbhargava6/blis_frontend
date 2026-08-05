'use client';

import { useState } from 'react';
import { Megaphone, ChevronDown, ChevronUp, Share2, Check } from 'lucide-react';

export default function LeaderCampaigns() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [distributed, setDistributed] = useState<Record<number, boolean>>({});

  const campaigns = [
    { id: 1, title: 'Amazon Electronics Promo', type: 'CPS (10%)', description: 'Promote top electronics products on Amazon. Direct cookies valid for 24 hours. Split is: 70% Member, 20% Leader, 10% Platform.' },
    { id: 2, title: 'Hostinger Cloud Web Hosting', type: 'CPA (₹4,200.00)', description: 'Earn high commissions for each annual cloud web hosting subscription driven. Cookies valid for 30 days. Real-time conversion tracking.' },
    { id: 3, title: 'Canva Pro Annual Subscriptions', type: 'Revenue Share (30%)', description: 'Awarded to users registering for Canva Pro subscriptions. Recurring split calculated monthly.' },
  ];

  const handleDistribute = (campId: number) => {
    setDistributed(prev => ({ ...prev, [campId]: true }));
    setTimeout(() => {
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
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 font-['Plus_Jakarta_Sans']">Group Campaigns</h1>
        <p className="text-slate-400 mt-1 text-sm font-['Roboto']">Browse campaigns, view details, and instantly distribute tracking codes to your team.</p>
      </div>

      {/* Campaigns Accordion List */}
      <div className="space-y-4">
        {campaigns.map((camp) => {
          const isOpen = activeAccordion === camp.id;
          const isCampDistributed = distributed[camp.id];

          return (
            <div key={camp.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm transition-all duration-300">
              {/* Head Accordion click bar */}
              <div
                onClick={() => toggleAccordion(camp.id)}
                className="p-6 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 select-none transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#B98776]/10 text-[#B98776] border border-[#B98776]/20">
                    <Megaphone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-['Plus_Jakarta_Sans']">{camp.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 font-['Roboto']">{camp.type}</p>
                  </div>
                </div>
                <div>
                  {isOpen ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                </div>
              </div>

              {/* Accordion Content */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-[300px] border-t border-slate-100 bg-slate-50/30' : 'max-h-0'
                }`}
              >
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-500 leading-relaxed max-w-2xl font-['Roboto']">
                    {camp.description}
                  </p>
                  <div className="flex justify-between items-center pt-2 flex-wrap gap-3">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold font-['Plus_Jakarta_Sans']">
                      Payout ratio: 70% Member | 20% Leader
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDistribute(camp.id);
                      }}
                      className={`flex items-center gap-2 py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer font-['Plus_Jakarta_Sans'] ${
                        isCampDistributed 
                          ? 'bg-green-50 border border-green-200 text-green-600' 
                          : 'bg-[#B98776] hover:bg-[#a17262] text-white shadow-md shadow-[#B98776]/20 active:scale-95'
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
