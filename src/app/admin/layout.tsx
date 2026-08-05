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
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col z-20 shadow-[4px_0_24px_rgba(0,0,0,0.03)]">
        {/* Brand Header */}
        <div className="h-16 flex items-center gap-2.5 px-6 border-b border-slate-100">
          <div className="p-1.5 rounded-lg bg-[#F047AB]/10 text-[#F047AB] border border-[#F047AB]/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-extrabold tracking-tight text-black text-lg font-['Plus_Jakarta_Sans']">BLIS Admin</span>
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
                    ? 'bg-[#0E76C0] text-white shadow-lg shadow-[#0E76C0]/20' 
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
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#B98776]/10 hover:bg-[#B98776]/20 border border-[#B98776]/30 text-xs font-bold text-[#b87661] cursor-pointer transition-all font-['Plus_Jakarta_Sans']"
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
            <h2 className="text-sm font-bold text-slate-800 font-['Plus_Jakarta_Sans']">Welcome back,</h2>
            <p className="text-xs text-slate-500 font-semibold font-['Roboto']">Super Administrator</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#0E76C0] animate-pulse"></span>
            <span className="text-xs font-extrabold text-slate-600 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Live System</span>
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
