'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-['Roboto']">
      
      {/* 1. Header Navigation with Mint Background */}
      <header className="sticky top-0 bg-[#CCFCF4]/70 backdrop-blur-md border-b border-teal-100 z-50 transition-all duration-300">
        <div className="max-w-[1800px] mx-auto h-20 px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-3xl font-extrabold tracking-wider font-['Plus_Jakarta_Sans'] text-slate-900 cursor-pointer">
            BLIS
          </Link>

          {/* Nav Options */}
          <nav className="hidden md:flex items-center gap-8 font-['Plus_Jakarta_Sans']">
            <Link href="/" className="text-sm font-bold text-slate-700 hover:text-[#0E76C0] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-bold text-[#0E76C0] transition-colors">
              About Us
            </Link>
            <Link href="/#campaigns" className="text-sm font-bold text-slate-700 hover:text-[#0E76C0] transition-colors">
              Campaigns
            </Link>
            <Link href="/#contact" className="text-sm font-bold text-slate-700 hover:text-[#0E76C0] transition-colors">
              Contact
            </Link>
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
              className="md:hidden p-2 text-slate-700 hover:text-[#0E76C0] transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-teal-100 bg-[#CCFCF4] py-4 px-6 space-y-4 shadow-lg font-['Plus_Jakarta_Sans']">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-[#0E76C0] transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-[#0E76C0] transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/#campaigns" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-700 hover:text-[#0E76C0] transition-colors"
            >
              Campaigns
            </Link>
            <Link 
              href="/#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-700 hover:text-[#0E76C0] transition-colors"
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-teal-200/50 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full border border-slate-300 text-slate-700 text-sm font-bold"
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

      {/* 2. Hero Section (Mint/Cyan Pastel Background with Floating Graphics & Hero Copy) */}
      <section className="relative bg-[#CCFCF4]/60 py-16 md:py-24 px-6 md:px-12 overflow-hidden">
        {/* Floating Decorative Vector Graphic Elements */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          {/* Tag Icon */}
          <div className="absolute left-[8%] top-[25%] animate-pulse duration-1000">
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-12">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" fill="#FF5252" opacity="0.85"/>
              <line x1="7" y1="7" x2="7.01" y2="7" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Location Pin */}
          <div className="absolute left-[18%] top-[18%]">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#0E76C0" opacity="0.85"/>
              <circle cx="12" cy="9" r="2.5" fill="white"/>
            </svg>
          </div>

          {/* Storefront Icon */}
          <div className="absolute left-[5%] top-[55%]">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 6H6v-4h6v4z" fill="#FF7043" opacity="0.85"/>
            </svg>
          </div>

          {/* Gift / Box */}
          <div className="absolute left-[26%] top-[60%]">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="8" width="18" height="4" rx="1" fill="#7E57C2" opacity="0.85"/>
              <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7H4z" fill="#9575CD" opacity="0.85"/>
            </svg>
          </div>

          {/* Chain Link Icon */}
          <div className="absolute left-[40%] top-[70%]">
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-45">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#0E76C0" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="#0E76C0" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Shopping Cart */}
          <div className="absolute left-[45%] top-[20%]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.45C4.52 15.37 5.48 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25z" fill="#EC407A" opacity="0.85"/>
            </svg>
          </div>

          {/* Bar Chart */}
          <div className="absolute left-[52%] top-[65%]">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="12" width="3" height="8" rx="1" fill="#26A69A" opacity="0.85"/>
              <rect x="10" y="8" width="3" height="12" rx="1" fill="#26A69A" opacity="0.85"/>
              <rect x="16" y="4" width="3" height="16" rx="1" fill="#26A69A" opacity="0.85"/>
            </svg>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Visual Illustration Area */}
          <div className="lg:col-span-6 h-[260px] md:h-[360px] relative hidden sm:block">
            {/* Soft decorative background circles */}
            <div className="absolute left-10 top-10 w-48 h-48 rounded-full bg-teal-200/40 blur-xl"></div>
            <div className="absolute right-10 bottom-10 w-56 h-56 rounded-full bg-pink-200/30 blur-xl"></div>
          </div>

          {/* Right Main Hero Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h1 className="text-3xl md:text-5xl lg:text-[54px] font-extrabold text-slate-900 font-['Plus_Jakarta_Sans'] leading-[1.2]">
              Your <span className="text-[#0E76C0] italic">network</span> has more <br />
              <span className="text-[#0E76C0] italic">potential</span> than you think.
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-slate-700 font-normal leading-relaxed font-['Roboto'] max-w-xl">
              BLIS is building a smarter way to connect people, products, and opportunities — turning the connections you already have into a real network worth growing.
            </p>

            <div className="pt-2">
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#F047AB] hover:bg-[#e0369b] active:scale-95 transition-all text-white font-bold text-base shadow-md font-['Plus_Jakarta_Sans']"
              >
                Join Us
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Dashed Line Divider 1 */}
      <div className="w-full max-w-[1400px] mx-auto px-6 py-10">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 3. Section: The gap. The problem. */}
      <section className="py-8 px-6 md:px-12 max-w-4xl mx-auto space-y-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] text-slate-900">
          The <span className="text-[#F047AB]">gap.</span> The <span className="text-[#F047AB]">problem.</span>
        </h2>

        <p className="text-xl md:text-2xl text-slate-800 font-medium font-['Roboto']">
          The internet made <span className="text-[#B98776] italic font-semibold">selling easier</span>. It didn&apos;t make it more <span className="text-[#B98776] italic font-semibold">personal</span>.
        </p>

        <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto font-['Roboto'] font-normal">
          <p>
            Affiliate marketing today is powerful for anyone to recommend products and earn from their influence. But somewhere along the way, the human connection got lost — people 1-in-10 people, endless links and advertisements.
          </p>
          <p>
            Local communities already have something special: trust, relationships, and word-of-mouth. BLIS brings that human element back into digital commerce.
          </p>
        </div>
      </section>

      {/* Dashed Line Divider 2 */}
      <div className="w-full max-w-[1400px] mx-auto px-6 py-10">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 4. Section: Why BLIS? */}
      <section className="py-8 px-6 md:px-12 max-w-5xl mx-auto space-y-10 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] text-slate-900">
            Why <span className="text-[#0E76C0]">BLIS?</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-800 font-medium font-['Roboto']">
            Built around <span className="text-[#B98776] italic font-semibold">people</span>, not just platforms.
          </p>
          <p className="text-base md:text-lg text-slate-600 font-normal max-w-2xl mx-auto font-['Roboto']">
            Traditional affiliate marketing often focuses on clicks, impressions, and transactions. BLIS focuses on the network behind them.
          </p>
        </div>

        {/* 2x2 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl border-2 border-[#F047AB] bg-pink-50/20 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-3">
              Community-first growth
            </h3>
            <p className="text-slate-600 leading-relaxed font-['Roboto'] text-sm md:text-base">
              Build meaningful networks where people can discover and share opportunities together.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl border-2 border-[#0E76C0] bg-blue-50/20 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-3">
              Radical transparency
            </h3>
            <p className="text-slate-600 leading-relaxed font-['Roboto'] text-sm md:text-base">
              Clear systems, easily translate performance, and visibility into your journey.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl border-2 border-[#0E76C0] bg-blue-50/20 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-3">
              Quality over quantity
            </h3>
            <p className="text-slate-600 leading-relaxed font-['Roboto'] text-sm md:text-base">
              Sustainable growth comes from the right opportunities and community — not simply more links.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 rounded-2xl border-2 border-[#F047AB] bg-pink-50/20 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-3">
              Technology that connects
            </h3>
            <p className="text-slate-600 leading-relaxed font-['Roboto'] text-sm md:text-base">
              Powerful digital tools designed to make sharing, tracking, and growing simple.
            </p>
          </div>
        </div>
      </section>

      {/* Dashed Line Divider 3 */}
      <div className="w-full max-w-[1400px] mx-auto px-6 py-10">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 5. Section: Create your own network */}
      <section className="relative py-12 px-6 md:px-12 max-w-4xl mx-auto space-y-6 text-center overflow-hidden">
        {/* Background Chain Vector Graphics */}
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none opacity-20 hidden md:block">
          <svg width="120" height="100%" viewBox="0 0 100 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 40 C60 80, 60 120, 20 160 C-20 200, -20 240, 20 280 C60 320, 60 360, 20 400" stroke="#F047AB" strokeWidth="12" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none opacity-20 hidden md:block">
          <svg width="120" height="100%" viewBox="0 0 100 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80 40 C40 80, 40 120, 80 160 C120 200, 120 240, 80 280 C40 320, 40 360, 80 400" stroke="#0E76C0" strokeWidth="12" strokeLinecap="round"/>
          </svg>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] text-slate-900">
          Create your <span className="text-[#F047AB]">own network</span>
        </h2>

        <p className="text-xl md:text-2xl text-slate-800 font-medium font-['Roboto']">
          <span className="text-[#B98776] italic font-semibold">One connection</span> can start something bigger.
        </p>

        <div className="space-y-6 text-base md:text-lg text-slate-700 leading-relaxed font-['Roboto'] font-normal max-w-3xl mx-auto">
          <p>
            BLIS is designed around the power of local networks. Whether you&apos;re looking to build a community, discover new opportunities, or share products you genuinely believe in, it all starts with the bonds and connections links so far.
          </p>
          <p>
            You don&apos;t need to be a massive creator to grow. Start with the network you already have.
          </p>
        </div>
      </section>

      {/* Dashed Line Divider 4 */}
      <div className="w-full max-w-[1400px] mx-auto px-6 py-10">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 6. Section: A new way to think about affiliate marketing (Full-Width Stacked Cards) */}
      <section className="py-8 px-6 md:px-12 max-w-5xl mx-auto space-y-10 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] text-slate-900">
            A new way to think about <span className="text-[#0E76C0]">affiliate marketing</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-800 font-medium font-['Roboto']">
            Less &ldquo;<span className="text-[#B98776] italic font-semibold">share a link</span>.&rdquo; More &ldquo;<span className="italic font-semibold">build a network</span>.&rdquo;
          </p>
        </div>

        {/* Stacked Cards Strip */}
        <div className="space-y-4">
          {/* Card 1: Discover and share (Pink Pastel) */}
          <div className="w-full bg-[#FDE8F3] p-8 md:p-10 rounded-xl text-left shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-2">
              Discover and share
            </h3>
            <p className="text-slate-700 font-['Roboto'] text-base md:text-lg">
              Find campaigns worth recommending and share them through your network.
            </p>
          </div>

          {/* Card 2: Build local chapters (Blue Pastel, Right Aligned) */}
          <div className="w-full bg-[#DDEBF7] p-8 md:p-10 rounded-xl text-right shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-2">
              Build local chapters
            </h3>
            <p className="text-slate-700 font-['Roboto'] text-base md:text-lg">
              Create and participate in structured community groups close to home.
            </p>
          </div>

          {/* Card 3: Your own storefront (Pink Pastel) */}
          <div className="w-full bg-[#FDE8F3] p-8 md:p-10 rounded-xl text-left shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-2">
              Your own storefront
            </h3>
            <p className="text-slate-700 font-['Roboto'] text-base md:text-lg">
              A digital storefront that connects your recommendations with customers.
            </p>
          </div>

          {/* Card 4: Beyond the click (Blue Pastel, Right Aligned) */}
          <div className="w-full bg-[#DDEBF7] p-8 md:p-10 rounded-xl text-right shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-['Plus_Jakarta_Sans'] mb-2">
              Beyond the click
            </h3>
            <p className="text-slate-700 font-['Roboto'] text-base md:text-lg">
              Take commerce beyond links and into genuine customer conversations.
            </p>
          </div>
        </div>
      </section>

      {/* Dashed Line Divider 5 */}
      <div className="w-full max-w-[1400px] mx-auto px-6 py-10">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 7. Section: The BLIS philosophy */}
      <section className="py-8 px-6 md:px-12 max-w-4xl mx-auto space-y-8 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] text-slate-900">
            The BLIS <span className="text-[#F047AB]">philosophy</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-800 font-medium font-['Roboto']">
            Technology can scale a business. <span className="text-[#B98776] italic font-semibold">People build it.</span>
          </p>
        </div>

        <p className="text-base md:text-lg text-slate-700 font-['Roboto']">
          We believe the future of commerce isn&apos;t purely digital. It&apos;s connected.
        </p>

        <div className="max-w-md mx-auto text-left space-y-3 pt-2 font-['Roboto'] text-base md:text-lg text-slate-700">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0E76C0]"></span>
            <span>Connected to communities.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F047AB]"></span>
            <span>Connected to recommendations.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0E76C0]"></span>
            <span>Connected to local businesses.</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F047AB]"></span>
            <span>Connected to people.</span>
          </div>
        </div>
      </section>

      {/* 8. Footer Strip */}
      <footer className="mt-16 bg-[#F9C7EA]/60 border-t border-pink-200 py-12 px-6 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-2xl font-bold font-['Plus_Jakarta_Sans'] text-slate-800">
            BLIS
          </div>
          <p className="text-xs text-slate-600 font-['Roboto']">
            &copy; 2026 BLIS Platform Inc. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
