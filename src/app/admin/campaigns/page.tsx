'use client';

import { useState } from 'react';
import { Plus, Megaphone, Link as LinkIcon, Percent, Sliders } from 'lucide-react';

export default function AdminCampaigns() {
  const [showModal, setShowModal] = useState(false);
  
  // Commission split percentages states
  const [memberSplit, setMemberSplit] = useState(70);
  const [leaderSplit, setLeaderSplit] = useState(20);
  const [platformSplit, setPlatformSplit] = useState(10);

  // Auto-balance splits when sliders move
  const handleSplitChange = (val: number, type: 'member' | 'leader') => {
    if (type === 'member') {
      setMemberSplit(val);
      const remaining = 100 - val;
      setLeaderSplit(Math.round(remaining * 0.67));
      setPlatformSplit(100 - val - Math.round(remaining * 0.67));
    } else {
      setLeaderSplit(val);
      const remaining = 100 - val;
      setMemberSplit(Math.round(remaining * 0.77));
      setPlatformSplit(100 - val - Math.round(remaining * 0.77));
    }
  };

  const campaigns = [
    { id: 1, title: 'Amazon Electronics Promo', type: 'CPS (10%)', link: 'https://amazon.com/aff/electronics', status: 'Active' },
    { id: 2, title: 'Hostinger Cloud Web Hosting', type: 'CPA ($50.00)', link: 'https://hostinger.com/aff/cloud', status: 'Active' },
    { id: 3, title: 'Canva Pro Annual Subscriptions', type: 'Revenue Share (30%)', link: 'https://canva.com/aff/pro', status: 'Paused' },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Campaign Manager</h1>
          <p className="text-slate-400 mt-1 text-sm">Create offers, distribute master links, and adjust payouts.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold text-sm cursor-pointer shadow-lg shadow-emerald-500/25 transition-all"
        >
          <Plus className="h-4 w-4" />
          Create Campaign
        </button>
      </div>

      {/* Commission Split Controller */}
      <div className="glass-panel p-6 rounded-2xl">
        <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-6 flex items-center gap-2">
          <Sliders className="h-4 w-4 text-emerald-400" />
          Global Commission Splits
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex justify-between text-sm font-bold mb-2">
              <span className="text-slate-300">Promoter Member</span>
              <span className="text-emerald-400">{memberSplit}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={memberSplit}
              onChange={(e) => handleSplitChange(parseInt(e.target.value), 'member')}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <p className="text-[10px] text-slate-500 mt-1.5">Direct commission paid to member driving click.</p>
          </div>

          <div>
            <div className="flex justify-between text-sm font-bold mb-2">
              <span className="text-slate-300">Group Leader</span>
              <span className="text-amber-400">{leaderSplit}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={leaderSplit}
              onChange={(e) => handleSplitChange(parseInt(e.target.value), 'leader')}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <p className="text-[10px] text-slate-500 mt-1.5">Override commission awarded to group leader.</p>
          </div>

          <div className="flex flex-col justify-center p-4 rounded-xl bg-slate-900/60 border border-white/5">
            <div className="flex items-center justify-between text-sm font-bold text-slate-300">
              <span className="flex items-center gap-1.5">
                <Percent className="h-4 w-4 text-purple-400" />
                Platform Share
              </span>
              <span className="text-purple-400">{platformSplit}%</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-1.5">Platform operations and network margin fee.</p>
          </div>
        </div>
      </div>

      {/* Campaigns Table */}
      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/5">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Active Campaigns</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-white/5 text-[10px] uppercase tracking-wider text-slate-500 font-bold bg-white/2">
                <th className="py-4 px-6">Campaign Info</th>
                <th className="py-4 px-6">Conversion Type</th>
                <th className="py-4 px-6">Master Link</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {campaigns.map((camp) => (
                <tr key={camp.id} className="hover:bg-white/2 transition">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                      <Megaphone className="h-4 w-4" />
                    </div>
                    {camp.title}
                  </td>
                  <td className="py-4 px-6 text-slate-400 font-semibold">{camp.type}</td>
                  <td className="py-4 px-6 text-slate-400 font-mono text-xs max-w-[200px] truncate">
                    {camp.link}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      camp.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-500'
                    }`}>
                      {camp.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-emerald-400 hover:text-emerald-300 transition cursor-pointer">
                    Edit
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Creation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg glass-panel rounded-2xl p-8 relative">
            <h3 className="text-xl font-black text-white mb-6">Create New Campaign</h3>
            <form onSubmit={(e) => { e.preventDefault(); setShowModal(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Campaign Title</label>
                <input type="text" placeholder="e.g. Hostinger Web Hosting" className="w-full px-4 py-3 rounded-xl glass-input text-sm" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Commission Type</label>
                  <select className="w-full px-4 py-3 rounded-xl glass-input text-sm">
                    <option>CPA (Cost Per Acquisition)</option>
                    <option>CPS (Cost Per Sale)</option>
                    <option>Revenue Share</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Total Payout Amount</label>
                  <input type="number" placeholder="50.00" className="w-full px-4 py-3 rounded-xl glass-input text-sm" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Master Affiliate Link</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                    <LinkIcon className="h-4 w-4" />
                  </span>
                  <input type="url" placeholder="https://brand.com/affiliate-code" className="w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm" required />
                </div>
              </div>

              <div className="flex gap-3 pt-4 justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="py-2.5 px-5 rounded-lg border border-white/10 hover:bg-white/5 text-slate-400 hover:text-white font-bold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs cursor-pointer shadow-lg shadow-emerald-500/25"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
