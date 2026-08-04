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
    <div className="flex min-h-screen bg-[#090d16]">
      {/* Sidebar */}
      <aside className="w-64 glass-panel border-r border-white/5 flex flex-col z-20">
        {/* Brand Header */}
        <div className="h-16 flex items-center gap-2.5 px-6 border-b border-white/5">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-extrabold tracking-tight text-white text-lg">BLIS Leader</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1.5">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive 
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Footer info & Logout */}
        <div className="p-4 border-t border-white/5 space-y-3">
          {/* Quick Switch role trigger for testing convenience */}
          <button
            onClick={() => router.push('/')}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-xs font-bold text-emerald-400 cursor-pointer transition-all"
          >
            <RefreshCw className="h-3 w-3" />
            Switch Role
          </button>
          
          <button
            onClick={() => router.push('/')}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-500 hover:text-rose-400 hover:bg-rose-500/5 transition-all cursor-pointer"
          >
            <LogOut className="h-3.5 w-3.5" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-slate-950/20 backdrop-blur-sm">
          <div>
            <h2 className="text-sm font-semibold text-slate-400">Beta Group Leader</h2>
            <p className="text-xs text-slate-500">Mumbai Retail Group</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Group Active</span>
          </div>
        </header>

        {/* Content Wrapper */}
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
