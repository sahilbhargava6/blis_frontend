'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  Megaphone, 
  BarChart3, 
  LogOut, 
  Sparkles,
  RefreshCw
} from 'lucide-react';

export default function LeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const navigation = [
    { name: 'Overview', href: '/leader', icon: LayoutDashboard },
    { name: 'My Team', href: '/leader/team', icon: Users },
    { name: 'Campaigns', href: '/leader/campaigns', icon: Megaphone },
    { name: 'Team Leaderboard', href: '/leader/analytics', icon: BarChart3 },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col z-20 shadow-[4px_0_24px_rgba(0,0,0,0.03)]">
        {/* Brand Header */}
        <div className="h-16 flex items-center gap-2.5 px-6 border-b border-slate-100">
          <div className="p-1.5 rounded-lg bg-[#B98776]/10 text-[#B98776] border border-[#B98776]/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-extrabold tracking-tight text-black text-lg font-['Plus_Jakarta_Sans']">BLIS Leader</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1.5">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all font-['Plus_Jakarta_Sans'] ${
                  isActive 
                    ? 'bg-[#B98776] text-white shadow-lg shadow-[#B98776]/20' 
                    : 'text-slate-600 hover:text-black hover:bg-slate-50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer info & Logout */}
        <div className="p-4 border-t border-slate-100 space-y-3">
          {/* Quick Switch role trigger for testing convenience */}
          <button
            onClick={() => router.push('/')}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#0E76C0]/10 hover:bg-[#0E76C0]/20 border border-[#0E76C0]/30 text-xs font-bold text-[#095791] cursor-pointer transition-all font-['Plus_Jakarta_Sans']"
          >
            <RefreshCw className="h-3 w-3" />
            Switch Role
          </button>
          
          <button
            onClick={() => router.push('/')}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:text-[#F047AB] hover:bg-[#F047AB]/5 transition-all cursor-pointer font-['Plus_Jakarta_Sans']"
          >
            <LogOut className="h-3.5 w-3.5" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 border-b border-slate-100 flex items-center justify-between px-8 bg-white/80 backdrop-blur-sm">
          <div>
            <h2 className="text-sm font-bold text-slate-800 font-['Plus_Jakarta_Sans']">Beta Group Leader</h2>
            <p className="text-xs text-slate-500 font-semibold font-['Roboto']">Mumbai Retail Group</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#B98776] animate-pulse"></span>
            <span className="text-xs font-extrabold text-slate-600 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Group Active</span>
          </div>
        </header>

        {/* Content Wrapper */}
        <main className="flex-1 p-8 overflow-y-auto bg-[#FAFAFA]">
          {children}
        </main>
      </div>
    </div>
  );
}
