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
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800 font-['Plus_Jakarta_Sans']">Promoter Roster</h1>
          <p className="text-slate-500 mt-1 text-sm font-semibold font-['Roboto']">Manage group enrollments and oversee member-level link referral metrics.</p>
        </div>
        <button
          onClick={() => {
            if (isFull) {
              setErrorMsg('Cannot add members. Group capacity is at maximum (20/20).');
            } else {
              setShowModal(true);
            }
          }}
          className={`flex items-center gap-2 py-3 px-5 rounded-xl text-white font-bold text-sm cursor-pointer shadow-md transition-all font-['Plus_Jakarta_Sans'] ${
            isFull 
              ? 'bg-slate-200 text-slate-400 border border-slate-300 shadow-none cursor-not-allowed' 
              : 'bg-[#B98776] hover:bg-[#a17262] shadow-[#B98776]/20 active:scale-95'
          }`}
        >
          <Plus className="h-4 w-4" />
          Add Member
        </button>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-650 text-sm font-bold flex items-center gap-2 font-['Plus_Jakarta_Sans']">
          <AlertTriangle className="h-5 w-5" />
          {errorMsg}
        </div>
      )}

      {/* Roster Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center flex-wrap gap-3">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Promoters List</h3>
          <span className={`text-xs font-bold px-3 py-1.5 rounded-lg font-['Plus_Jakarta_Sans'] ${
            isFull ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-slate-50 text-slate-500 border border-slate-100'
          }`}>
            Capacity: {members.length} / 20 Members
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] uppercase tracking-wider text-slate-400 font-bold bg-slate-50/50">
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Member Name</th>
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Phone (WhatsApp)</th>
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Total Clicks</th>
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Conversions</th>
                <th className="py-4 px-6 font-['Plus_Jakarta_Sans']">Member Earnings</th>
                <th className="py-4 px-6 text-right font-['Plus_Jakarta_Sans']">Remove</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {members.map((member) => (
                <tr key={member.id} className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6 font-bold text-slate-800 flex items-center gap-3 font-['Plus_Jakarta_Sans']">
                    <div className="p-2 rounded-lg bg-[#B98776]/10 text-[#B98776] border border-[#B98776]/10">
                      <Users className="h-4 w-4" />
                    </div>
                    {member.name}
                  </td>
                  <td className="py-4 px-6 text-slate-600 font-bold font-['Roboto']">{member.phone}</td>
                  <td className="py-4 px-6 text-slate-600 font-bold font-['Roboto']">{member.clicks}</td>
                  <td className="py-4 px-6 text-slate-600 font-bold font-['Roboto']">{member.conversions}</td>
                  <td className="py-4 px-6 font-extrabold text-green-600 font-['Plus_Jakarta_Sans']">{member.balance}</td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => handleRemoveMember(member.id)}
                      className="p-1.5 rounded-lg border border-slate-200 hover:border-red-200 text-slate-400 hover:text-red-500 hover:bg-red-50 transition cursor-pointer"
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
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white rounded-2xl p-8 relative shadow-2xl border border-slate-100">
            <h3 className="text-xl font-extrabold text-slate-800 mb-6 font-['Plus_Jakarta_Sans']">Add Team Member</h3>
            <form onSubmit={handleAddMember} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">Member Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-850 focus:border-[#B98776] focus:ring-2 focus:ring-[#B98776]/20 outline-none transition-all font-['Roboto']"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-855 focus:border-[#B98776] focus:ring-2 focus:ring-[#B98776]/20 outline-none transition-all font-['Roboto']"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
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
                  className="py-2.5 px-5 rounded-xl bg-[#B98776] hover:bg-[#a17262] text-white font-bold text-xs cursor-pointer shadow-md shadow-[#B98776]/20 transition-all font-['Plus_Jakarta_Sans']"
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
