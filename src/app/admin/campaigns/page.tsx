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
    { id: 2, title: 'Hostinger Cloud Web Hosting', type: 'CPA (₹4,200.00)', link: 'https://hostinger.com/aff/cloud', status: 'Active' },
    { id: 3, title: 'Canva Pro Annual Subscriptions', type: 'Revenue Share (30%)', link: 'https://canva.com/aff/pro', status: 'Paused' },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800 font-['Plus_Jakarta_Sans']">Campaign Manager</h1>
          <p className="text-slate-400 mt-1 text-sm font-['Roboto']">Create offers, distribute master links, and adjust payouts.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 py-3 px-5 rounded-xl bg-[#0E76C0] hover:bg-[#0c66a8] active:scale-95 text-white font-bold text-sm cursor-pointer shadow-md shadow-[#0E76C0]/20 transition-all font-['Plus_Jakarta_Sans']"
        >
          <Plus className="h-4 w-4" />
          Create Campaign
        </button>
      </div>

      {/* Commission Split Controller */}
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-6 flex items-center gap-2 font-['Plus_Jakarta_Sans']">
          <Sliders className="h-4 w-4 text-[#0E76C0]" />
          Global Commission Splits
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex justify-between text-sm font-bold mb-2">
              <span className="text-slate-600 font-['Plus_Jakarta_Sans']">Promoter Member</span>
              <span className="text-[#0E76C0]">{memberSplit}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={memberSplit}
              onChange={(e) => handleSplitChange(parseInt(e.target.value), 'member')}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#0E76C0]"
            />
            <p className="text-[10px] text-slate-400 mt-1.5 font-['Roboto']">Direct commission paid to member driving click.</p>
          </div>

          <div>
            <div className="flex justify-between text-sm font-bold mb-2">
              <span className="text-slate-600 font-['Plus_Jakarta_Sans']">Group Leader</span>
              <span className="text-[#B98776]">{leaderSplit}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={leaderSplit}
              onChange={(e) => handleSplitChange(parseInt(e.target.value), 'leader')}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#B98776]"
            />
            <p className="text-[10px] text-slate-400 mt-1.5 font-['Roboto']">Override commission awarded to group leader.</p>
          </div>

          <div className="flex flex-col justify-center p-4 rounded-xl bg-slate-50 border border-slate-100">
            <div className="flex items-center justify-between text-sm font-bold text-slate-600">
              <span className="flex items-center gap-1.5 font-['Plus_Jakarta_Sans']">
                <Percent className="h-4 w-4 text-[#F047AB]" />
                Platform Share
              </span>
              <span className="text-[#F047AB]">{platformSplit}%</span>
            </div>
            <p className="text-[10px] text-slate-400 mt-1.5 font-['Roboto']">Platform operations and network margin fee.</p>
          </div>
        </div>
      </div>

      {/* Campaigns Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Active Campaigns</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] uppercase tracking-wider text-slate-400 font-bold bg-slate-50/50">
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Campaign Info</th>
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Conversion Type</th>
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Master Link</th>
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Status</th>
                <th className="py-4 px-6 text-right font-['Plus_Jakarta_Sans']">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {campaigns.map((camp) => (
                <tr key={camp.id} className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 font-bold text-slate-700 flex items-center gap-3 font-['Plus_Jakarta_Sans']">
                    <div className="p-2 rounded-lg bg-[#0E76C0]/10 text-[#0E76C0] border border-[#0E76C0]/10">
                      <Megaphone className="h-4 w-4" />
                    </div>
                    {camp.title}
                  </td>
                  <td className="py-4 px-6 text-slate-500 font-semibold font-['Roboto']">{camp.type}</td>
                  <td className="py-4 px-6 text-slate-400 font-mono text-xs max-w-[200px] truncate">
                    {camp.link}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold font-['Plus_Jakarta_Sans'] ${
                      camp.status === 'Active' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-slate-100 text-slate-400'
                    }`}>
                      {camp.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right font-bold text-[#0E76C0] hover:text-[#F047AB] transition cursor-pointer font-['Plus_Jakarta_Sans']">
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
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white rounded-2xl p-8 relative shadow-2xl border border-slate-100">
            <h3 className="text-xl font-extrabold text-slate-800 mb-6 font-['Plus_Jakarta_Sans']">Create New Campaign</h3>
            <form onSubmit={(e) => { e.preventDefault(); setShowModal(false); }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">Campaign Title</label>
                <input type="text" placeholder="e.g. Hostinger Web Hosting" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:border-[#0E76C0] focus:ring-2 focus:ring-[#0E76C0]/20 outline-none transition-all font-['Roboto']" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">Commission Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:border-[#0E76C0] outline-none transition-all font-['Roboto']">
                    <option>CPA (Cost Per Acquisition)</option>
                    <option>CPS (Cost Per Sale)</option>
                    <option>Revenue Share</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">Total Payout Amount</label>
                  <input type="number" placeholder="50.00" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:border-[#0E76C0] outline-none transition-all font-['Roboto']" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">Master Affiliate Link</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                    <LinkIcon className="h-4 w-4" />
                  </span>
                  <input type="url" placeholder="https://brand.com/affiliate-code" className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:border-[#0E76C0] outline-none transition-all font-['Roboto']" required />
                </div>
              </div>

              <div className="flex gap-3 pt-4 justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="py-2.5 px-5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-700 font-bold text-xs cursor-pointer transition-all font-['Plus_Jakarta_Sans']"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-5 rounded-xl bg-[#0E76C0] hover:bg-[#0c66a8] text-white font-bold text-xs cursor-pointer shadow-md shadow-[#0E76C0]/20 transition-all font-['Plus_Jakarta_Sans']"
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
