'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';
import Footer from '@/components/Footer';

export default function FAQPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const gridCards = [
    {
      id: 1,
      title: 'Getting Started',
      borderColor: '#F047AB',
      bgColor: 'rgba(240, 71, 171, 0.15)',
      icon: (
        <div className="px-6 py-2 rounded-full bg-[#E5A853] border-2 border-slate-900 text-slate-900 font-black text-sm font-['Plus_Jakarta_Sans'] shadow-md tracking-wider">
          START
        </div>
      )
    },
    {
      id: 2,
      title: 'Earning Money',
      borderColor: '#0E76C0',
      bgColor: 'rgba(14, 118, 192, 0.15)',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="14" r="4" fill="#FFC107" stroke="#37474F" strokeWidth="1.5"/>
          <circle cx="15" cy="14" r="4" fill="#FFB300" stroke="#37474F" strokeWidth="1.5"/>
          <circle cx="12" cy="8" r="4" fill="#FFD54F" stroke="#37474F" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Affiliate Links',
      borderColor: '#F047AB',
      bgColor: 'rgba(240, 71, 171, 0.15)',
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-45">
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#E5A853" strokeWidth="3" strokeLinecap="round"/>
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="#E5A853" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Brands & Shopping',
      borderColor: '#0E76C0',
      bgColor: 'rgba(14, 118, 192, 0.15)',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke="#EC407A" strokeWidth="2" fill="#FF80AB" opacity="0.8"/>
          <path d="M19 11V8a3 3 0 00-6 0v3M11 10h10l1 10H10l1-10z" stroke="#FFA726" strokeWidth="1.5" fill="#FFCC80"/>
        </svg>
      )
    },
    {
      id: 5,
      title: 'Payments',
      borderColor: '#F047AB',
      bgColor: 'rgba(240, 71, 171, 0.15)',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="14" rx="2" fill="#42A5F5" stroke="#263238" strokeWidth="1.5"/>
          <rect x="3" y="8" width="18" height="3" fill="#263238"/>
          <path d="M7 15h4" stroke="#81C784" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 6,
      title: 'Account & Support',
      borderColor: '#0E76C0',
      bgColor: 'rgba(14, 118, 192, 0.15)',
      icon: (
        <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/90 border border-slate-300 shadow-sm w-16">
          <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-[10px] font-bold text-slate-800 mb-1">
            👤
          </div>
          <div className="w-10 h-1.5 bg-slate-200 rounded-full mb-1"></div>
          <div className="w-8 h-1.5 bg-[#F047AB] rounded-full"></div>
        </div>
      )
    },
    {
      id: 7,
      title: 'For Different Users',
      borderColor: '#F047AB',
      bgColor: 'rgba(240, 71, 171, 0.15)',
      icon: (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="9" r="3" fill="#81C784" stroke="#263238" strokeWidth="1.5"/>
          <path d="M4 19c0-2.5 2-4.5 5-4.5s5 2 5 4.5" stroke="#263238" strokeWidth="1.5" fill="#81C784"/>
          <circle cx="16" cy="11" r="3" fill="#1E88E5" stroke="#263238" strokeWidth="1.5"/>
          <path d="M12 20c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5" stroke="#263238" strokeWidth="1.5" fill="#1E88E5"/>
        </svg>
      )
    },
    {
      id: 8,
      title: 'Trust & Platform',
      borderColor: '#0E76C0',
      bgColor: 'rgba(14, 118, 192, 0.15)',
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="14" height="10" rx="1" fill="#FFCC80" stroke="#263238" strokeWidth="1.5"/>
          <path d="M1 17h18" stroke="#263238" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="18" cy="7" r="3" fill="#E57373" stroke="#263238" strokeWidth="1.5"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-['Roboto']">
      
      {/* 1. Header Navigation */}
      <header className="sticky top-0 bg-[#F047AB]/20 backdrop-blur-[4px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-50 transition-all duration-300">
        <div className="max-w-[1800px] mx-auto h-[100px] px-6 md:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-3xl md:text-[36px] font-bold font-['Plus_Jakarta_Sans'] text-black cursor-pointer leading-[45px]">
            BLIS
          </Link>

          {/* Nav Options */}
          <nav className="hidden md:flex items-center gap-12 font-['Plus_Jakarta_Sans']">
            <Link href="/" className="text-xl font-medium text-slate-800 hover:text-[#0E76C0] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-xl font-medium text-slate-800 hover:text-[#0E76C0] transition-colors">
              About
            </Link>
            <Link href="/faq" className="text-xl md:text-[24px] font-semibold text-black leading-[30px]">
              FAQs
            </Link>
            <Link href="/#contact" className="text-xl font-medium text-slate-800 hover:text-[#0E76C0] transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm md:text-base font-bold text-[#0E76C0] hover:underline font-['Plus_Jakarta_Sans']"
            >
              Affiliate Portal
            </Link>
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center justify-center w-[180px] h-[50px] rounded-[30px] bg-[#F047AB] hover:bg-[#e0369b] text-white text-lg font-normal font-['Plus_Jakarta_Sans'] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all"
            >
              Join BLIS
            </Link>
            
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-900 hover:text-[#0E76C0] transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#F047AB]/30 bg-[#F047AB]/90 backdrop-blur-md py-4 px-6 space-y-4 shadow-lg font-['Plus_Jakarta_Sans']">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-900 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-900 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link 
              href="/faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-black"
            >
              FAQs
            </Link>
            <Link 
              href="/#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </header>

      {/* 2. FAQ Hero Section with Rupee Watermark Pattern */}
      <section className="relative py-16 md:py-24 px-6 md:px-16 overflow-hidden bg-slate-100/60 min-h-[700px] flex items-center">
        
        {/* Faint Currency Watermark Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10 select-none bg-repeat"
          style={{
            backgroundImage: `radial-gradient(#F047AB 1px, transparent 1px), radial-gradient(#0E76C0 1px, #f8fafc 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px'
          }}
        ></div>

        <div className="max-w-[1780px] mx-auto w-full relative z-10 space-y-12">
          
          {/* Top Row: Search Input on Right with exact placeholder */}
          <div className="flex justify-end w-full">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search away your worries and doubts"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 md:h-14 px-6 pr-14 rounded-full bg-white/95 border-2 border-cyan-400 focus:border-[#F047AB] outline-none text-slate-800 placeholder-slate-400 font-['Roboto'] shadow-md transition-all text-sm md:text-base"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F047AB] hover:scale-110 transition-transform">
                <Search className="h-6 w-6 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Title */}
          <div className="text-left space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-extrabold text-slate-900 font-['Plus_Jakarta_Sans'] tracking-tight leading-tight">
              How does BLIS works?
            </h1>
          </div>

          {/* 8 Feature Icon Cards Grid (Hover reveals category text) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-4">
            {gridCards.map((card) => (
              <div
                key={card.id}
                style={{
                  borderColor: card.borderColor,
                  backgroundColor: card.bgColor
                }}
                className="group relative h-[140px] md:h-[160px] rounded-2xl border-2 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Default State: Icon */}
                <div className="flex items-center justify-center group-hover:opacity-0 group-hover:scale-75 transition-all duration-300">
                  {card.icon}
                </div>

                {/* Hover State: Text Title */}
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/40 backdrop-blur-xs">
                  <span className="text-lg md:text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] leading-tight">
                    {card.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
