'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Megaphone, 
  Link as LinkIcon, 
  Wallet, 
  ShoppingBag, 
  LogOut, 
  Sparkles,
  RefreshCw
} from 'lucide-react';

export default function MemberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const navigation = [
    { name: 'Overview', href: '/member', icon: LayoutDashboard },
    { name: 'Campaign Offers', href: '/member/campaigns', icon: Megaphone },
    { name: 'My Promo Links', href: '/member/links', icon: LinkIcon },
    { name: 'Wallet & Stats', href: '/member/stats', icon: Wallet },
    { name: 'O2O Storefront', href: '/member/storefront', icon: ShoppingBag },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col z-20 shadow-[4px_0_24px_rgba(0,0,0,0.03)]">
        {/* Brand Header */}
        <div className="h-16 flex items-center gap-2.5 px-6 border-b border-slate-100">
          <div className="p-1.5 rounded-lg bg-[#0E76C0]/10 text-[#0E76C0] border border-[#0E76C0]/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-extrabold tracking-tight text-black text-lg font-['Plus_Jakarta_Sans']">BLIS Promoter</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1.5">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all font-['Plus_Jakarta_Sans'] ${
                  isActive 
                    ? 'bg-[#0E76C0] text-white shadow-lg shadow-[#0E76C0]/20' 
                    : 'text-slate-500 hover:text-black hover:bg-slate-50'
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
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#B98776]/10 hover:bg-[#B98776]/20 border border-[#B98776]/20 text-xs font-bold text-[#B98776] cursor-pointer transition-all font-['Plus_Jakarta_Sans']"
          >
            <RefreshCw className="h-3 w-3" />
            Switch Role
          </button>
          
          <button
            onClick={() => router.push('/')}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-[#F047AB] hover:bg-[#F047AB]/5 transition-all cursor-pointer font-['Plus_Jakarta_Sans']"
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
            <h2 className="text-sm font-semibold text-slate-700 font-['Plus_Jakarta_Sans']">Promoter Hub</h2>
            <p className="text-xs text-slate-400 font-['Roboto']">Gold Affiliate Network</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#0E76C0] animate-pulse"></span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Promoter Online</span>
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
