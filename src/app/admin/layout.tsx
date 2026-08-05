'use client';

import { useState } from 'react';
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
  RefreshCw,
  Menu,
  X
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard },
    { name: 'Campaigns', href: '/admin/campaigns', icon: Megaphone },
    { name: 'Groups', href: '/admin/groups', icon: Users },
    { name: 'Payouts', href: '/admin/payouts', icon: CreditCard },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FAFAFA]">
      
      {/* Mobile Header Bar */}
      <header className="md:hidden h-16 bg-white border-b border-slate-100 flex items-center justify-between px-6 z-30 sticky top-0 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded-lg bg-[#F047AB]/10 text-[#F047AB]">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-extrabold text-black text-base font-['Plus_Jakarta_Sans']">BLIS Admin</span>
        </div>
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className="p-1.5 text-slate-650 hover:text-black transition-colors"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Sidebar - Hidden on mobile, shown on md+ screens */}
      <aside className={`w-64 bg-white border-r border-slate-100 flex flex-col z-20 shadow-[4px_0_24px_rgba(0,0,0,0.03)] fixed md:sticky top-0 h-screen transition-transform duration-300 md:translate-x-0 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        {/* Brand Header (Only visible in sidebar on desktop) */}
        <div className="hidden md:flex h-16 items-center gap-2.5 px-6 border-b border-slate-100">
          <div className="p-1.5 rounded-lg bg-[#F047AB]/10 text-[#F047AB] border border-[#F047AB]/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-extrabold tracking-tight text-black text-lg font-['Plus_Jakarta_Sans']">BLIS Admin</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
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
        <div className="p-4 border-t border-slate-100 space-y-3 bg-white">
          <button
            onClick={() => { router.push('/'); setMobileOpen(false); }}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#B98776]/10 hover:bg-[#B98776]/20 border border-[#B98776]/30 text-xs font-bold text-[#b87661] cursor-pointer transition-all font-['Plus_Jakarta_Sans']"
          >
            <RefreshCw className="h-3 w-3" />
            Switch Role
          </button>
          
          <button
            onClick={() => { router.push('/'); setMobileOpen(false); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:text-[#F047AB] hover:bg-[#F047AB]/5 transition-all cursor-pointer font-['Plus_Jakarta_Sans']"
          >
            <LogOut className="h-3.5 w-3.5" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Backdrop overlay for mobile menu */}
      {mobileOpen && (
        <div 
          onClick={() => setMobileOpen(false)} 
          className="fixed inset-0 bg-black/20 z-10 md:hidden backdrop-blur-xs"
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 border-b border-slate-100 hidden md:flex items-center justify-between px-8 bg-white/80 backdrop-blur-sm">
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
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
