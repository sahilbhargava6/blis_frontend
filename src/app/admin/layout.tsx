'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Megaphone, 
  Users, 
  CreditCard, 
  Settings, 
  LogOut, 
  Sparkles,
  RefreshCw
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const navigation = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Campaigns', href: '/admin/campaigns', icon: Megaphone },
    { name: 'Groups', href: '/admin/groups', icon: Users },
    { name: 'Payouts', href: '/admin/payouts', icon: CreditCard },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-[#0b0f19]">
      {/* Sidebar */}
      <aside className="w-64 glass-panel border-r border-white/5 flex flex-col z-20">
        {/* Brand Header */}
        <div className="h-16 flex items-center gap-2.5 px-6 border-b border-white/5">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-extrabold tracking-tight text-white text-lg">BLIS Admin</span>
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
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25' 
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
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 text-xs font-bold text-amber-400 cursor-pointer transition-all"
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
            <h2 className="text-sm font-semibold text-slate-400">Welcome back,</h2>
            <p className="text-xs text-slate-500">Super Administrator</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Live System</span>
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
