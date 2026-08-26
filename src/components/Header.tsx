'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Campaigns', href: '/#campaigns' },
  ];

  return (
    <header className="sticky top-0 bg-[#F047AB]/20 backdrop-blur-[4px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-50 transition-all duration-300">
      <div className="max-w-[1800px] mx-auto h-20 px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold tracking-wider font-['Plus_Jakarta_Sans'] bg-gradient-to-r from-[#F047AB] to-[#0E76C0] bg-clip-text text-transparent cursor-pointer">
          BLIS
        </Link>

        {/* Nav Options */}
        <nav className="hidden md:flex items-center gap-8 font-['Plus_Jakarta_Sans']">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold transition-colors ${
                  isActive ? 'text-[#0E76C0]' : 'text-slate-700 hover:text-[#0E76C0]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-xs md:text-sm font-bold text-[#0E76C0] hover:text-[#0c66a8] transition-all font-['Plus_Jakarta_Sans'] hover:underline"
          >
            Affiliate Portal
          </Link>
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0E76C0] hover:bg-[#0c66a8] text-white text-xs font-bold font-['Plus_Jakarta_Sans'] transition-all shadow-sm shadow-[#0E76C0]/20"
          >
            Get Started
          </Link>
          
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-[#0E76C0] transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#F047AB]/30 bg-[#F047AB]/90 backdrop-blur-md py-4 px-6 space-y-4 shadow-lg animate-fadeIn font-['Plus_Jakarta_Sans']">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-900 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-pink-300/40 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full border border-slate-700 text-slate-900 text-sm font-bold"
            >
              Affiliate Portal
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-[#0E76C0] text-white text-sm font-bold shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
