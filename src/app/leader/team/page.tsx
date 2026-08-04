'use client';

import { useState } from 'react';
import { Plus, Users, UserX, AlertTriangle, Sparkles, CheckCircle } from 'lucide-react';

export default function LeaderTeam() {
  const [members, setMembers] = useState([
    { id: 1, name: 'Aravind K.', phone: '+91 99999 11111', clicks: 231, conversions: 24, balance: '$840.00' },
    { id: 2, name: 'Ananya Sen', phone: '+91 99999 22222', clicks: 198, conversions: 18, balance: '$630.00' },
    { id: 3, name: 'Divya Nair', phone: '+91 99999 33333', clicks: 421, conversions: 50, balance: '$1,750.00' },
    { id: 4, name: 'Gaurav Das', phone: '+91 99999 44444', clicks: 87, conversions: 6, balance: '$210.00' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const isFull = members.length >= 20;

  const handleRemoveMember = (id: number) => {
    setMembers(members.filter(m => m.id !== id));
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFull) {
      setErrorMsg('Cannot add member. The team has reached its absolute limit of 20 members.');
      return;
    }

    setMembers([
      ...members,
      {
        id: Date.now(),
        name,
        phone,
        clicks: 0,
        conversions: 0,
        balance: '$0.00',
      }
    ]);
    setName('');
    setPhone('');
    setShowModal(false);
    setErrorMsg('');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Promoter Roster</h1>
          <p className="text-slate-400 mt-1 text-sm">Manage group enrollments and oversee member-level link referral metrics.</p>
        </div>
        <button
          onClick={() => {
            if (isFull) {
              setErrorMsg('Cannot add members. Group capacity is at maximum (20/20).');
            } else {
              setShowModal(true);
            }
          }}
          className={`flex items-center gap-2 py-3 px-5 rounded-xl text-white font-bold text-sm cursor-pointer shadow-lg transition-all ${
            isFull 
              ? 'bg-slate-800 text-slate-500 border border-white/5 shadow-none' 
              : 'bg-amber-500 hover:bg-amber-600 shadow-amber-500/25 active:scale-95'
          }`}
        >
          <Plus className="h-4 w-4" />
          Add Member
        </button>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-semibold flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          {errorMsg}
        </div>
      )}

      {/* Roster Table */}
      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Promoters List</h3>
          <span className={`text-xs font-bold px-3 py-1.5 rounded-lg ${
            isFull ? 'bg-rose-500/15 text-rose-400 border border-rose-500/20' : 'bg-white/5 text-slate-400'
          }`}>
            Capacity: {members.length} / 20 Members
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-white/5 text-[10px] uppercase tracking-wider text-slate-500 font-bold bg-white/2">
                <th className="py-4 px-6">Member Name</th>
                <th className="py-4 px-6">Phone (WhatsApp)</th>
                <th className="py-4 px-6">Total Clicks</th>
                <th className="py-4 px-6">Conversions</th>
                <th className="py-4 px-6">Member Earnings</th>
                <th className="py-4 px-6 text-right">Remove</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm">
              {members.map((member) => (
                <tr key={member.id} className="hover:bg-white/2 transition">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/10">
                      <Users className="h-4 w-4" />
                    </div>
                    {member.name}
                  </td>
                  <td className="py-4 px-6 text-slate-400 font-semibold">{member.phone}</td>
                  <td className="py-4 px-6 text-slate-400 font-semibold">{member.clicks}</td>
                  <td className="py-4 px-6 text-slate-400 font-semibold">{member.conversions}</td>
                  <td className="py-4 px-6 font-extrabold text-emerald-400">{member.balance}</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => handleRemoveMember(member.id)}
                      className="p-1.5 rounded-lg border border-white/5 hover:border-rose-500/20 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition cursor-pointer"
                    >
                      <UserX className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Member Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md glass-panel rounded-2xl p-8 relative">
            <h3 className="text-xl font-black text-white mb-6">Add Team Member</h3>
            <form onSubmit={handleAddMember} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Member Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
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
                  className="py-2.5 px-5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs cursor-pointer shadow-lg shadow-amber-500/25"
                >
                  Invite Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
