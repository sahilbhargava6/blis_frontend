'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Footer from '@/components/Footer';
import StackingCards from '@/components/StackingCards';

export default function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <Link href="/about" className="text-xl md:text-[24px] font-semibold text-black leading-[30px]">
              About
            </Link>
            <Link href="/faq" className="text-xl font-medium text-slate-800 hover:text-[#0E76C0] transition-colors">
              FAQs
            </Link>
            <Link href="/#campaigns" className="text-xl font-medium text-slate-800 hover:text-[#0E76C0] transition-colors">
              Campaigns
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
              className="block py-2 text-base font-bold text-black"
            >
              About
            </Link>
            <Link 
              href="/#campaigns" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-white transition-colors"
            >
              Campaigns
            </Link>
            <Link 
              href="/#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-800 hover:text-white transition-colors"
            >
              Contact
            </Link>
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
                className="w-full text-center py-2.5 rounded-full bg-[#F047AB] text-white text-sm font-bold shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              >
                Join BLIS
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* 2. Hero Section (Rectangle 51 - #CCFCF4 Background) */}
      <section className="relative bg-[#CCFCF4] py-16 md:py-24 px-6 md:px-16 overflow-hidden min-h-[700px] lg:min-h-[850px] flex items-center">
        {/* Floating Decorative Orbs / Bubbles (Exact Figma Ellipse Elements) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          {/* Pink Orbs */}
          <div className="absolute w-[100px] h-[100px] rounded-full bg-[#F047AB]/20 left-[44%] top-[75%]"></div>
          <div className="absolute w-[100px] h-[100px] rounded-full bg-[#F047AB]/20 left-[20%] top-[48%]"></div>
          <div className="absolute w-[100px] h-[100px] rounded-full bg-[#F047AB]/20 left-[58%] top-[78%]"></div>
          <div className="absolute w-[100px] h-[100px] rounded-full bg-[#F047AB]/20 left-[75%] top-[75%]"></div>
          <div className="absolute w-[100px] h-[100px] rounded-full bg-[#F047AB]/20 left-[85%] top-[65%]"></div>

          {/* Brown / Beige Orbs */}
          <div className="absolute w-[100px] h-[100px] rounded-full bg-[#B98776]/20 left-[88%] top-[90%]"></div>
          <div className="absolute w-[100px] h-[100px] rounded-full bg-[#B98776]/20 left-[38%] top-[52%]"></div>
          <div className="absolute w-[100px] h-[100px] rounded-full bg-[#B98776]/20 left-[7%] top-[46%]"></div>
          <div className="absolute w-[100px] h-[100px] rounded-full bg-[#B98776]/20 left-[7%] top-[76%]"></div>
          <div className="absolute w-[100px] h-[100px] rounded-full bg-[#B98776]/20 left-[65%] top-[66%]"></div>

          {/* Additional Floating SVG Vector Graphics */}
          <div className="absolute left-[5%] top-[25%] opacity-80">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-12">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" fill="#FF5252" opacity="0.85"/>
              <line x1="7" y1="7" x2="7.01" y2="7" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="absolute left-[15%] top-[60%] opacity-80">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 6H6v-4h6v4z" fill="#FF7043" opacity="0.85"/>
            </svg>
          </div>

          <div className="absolute left-[38%] top-[78%] opacity-80">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-45">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="#0E76C0" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="#0E76C0" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Spacer for graphics positioning */}
          <div className="lg:col-span-4 hidden lg:block"></div>

          {/* Right Main Hero Copy (Right Aligned per Figma Spec) */}
          <div className="lg:col-span-8 space-y-8 text-right flex flex-col items-end">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-black font-['Plus_Jakarta_Sans'] leading-tight md:leading-[81px] max-w-[810px]">
              Your <span className="text-[#0E76C0] italic">network</span> has more <span className="text-[#0E76C0] italic">potential</span> than you think.
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-[36px] text-black font-light leading-normal lg:leading-[42px] font-['Roboto'] max-w-[965px]">
              BLIS is building a smarter way to connect people, products, and opportunities — turning the connections you already have into a real network worth growing.
            </p>

            <div className="pt-4">
              <Link
                href="/login"
                className="inline-flex items-center justify-center w-[222px] h-[66px] rounded-[30px] bg-[#F047AB] hover:bg-[#e0369b] active:scale-95 transition-all text-[#FFFAFF] font-normal text-[24px] leading-[30px] font-['Plus_Jakarta_Sans'] shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              >
                Join BLIS
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Dashed Line Divider 1 (Line 2 - 2px dashed #0E76C0) */}
      <div className="w-full max-w-[1780px] mx-auto px-6 py-10">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 3. Section: Stacking Cards (The gap. The problem. / What is BLIS? / The big idea) */}
      <StackingCards />

      {/* Dashed Line Divider 2 (Line 1 - 2px dashed #0E76C0) */}
      <div className="w-full max-w-[1780px] mx-auto px-6 py-10">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 4. Section: Why BLIS? */}
      <section className="py-8 px-6 md:px-12 max-w-[1780px] mx-auto space-y-10 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-[36px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-[45px]">
            Why <span className="text-[#0E76C0]">BLIS?</span>
          </h2>
          <p className="text-2xl md:text-[32px] text-black font-normal leading-[38px] font-['Roboto']">
            Built around <span className="text-[#B98776] italic font-medium">people,</span> not just platforms.
          </p>
          <p className="text-xl md:text-[32px] text-black font-light leading-[38px] max-w-[1260px] mx-auto font-['Roboto']">
            Traditional affiliate marketing often focuses on clicks, links, and transactions. BLIS focuses on the network behind them.
          </p>
        </div>

        {/* 2x2 Feature Cards Grid (Rectangle 53, 54, 55, 56) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {/* Card 1 (Rectangle 53 - Pink Border) */}
          <div className="bg-[#F0F3F9]/20 border border-[#F047AB] rounded-[15px] p-8 space-y-4 min-h-[216px] flex flex-col justify-center">
            <h3 className="text-2xl md:text-[32px] font-normal text-black font-['Roboto'] leading-[38px]">
              Community-first growth
            </h3>
            <p className="text-lg md:text-[32px] font-light text-black font-['Roboto'] leading-[38px]">
              Build meaningful networks where people can discover and share opportunities together.
            </p>
          </div>

          {/* Card 2 (Rectangle 54 - Blue Border) */}
          <div className="bg-[#F0F3F9]/20 border border-[#0E76C0] rounded-[15px] p-8 space-y-4 min-h-[216px] flex flex-col justify-center">
            <h3 className="text-2xl md:text-[32px] font-normal text-black font-['Roboto'] leading-[38px]">
              Radical transparency
            </h3>
            <p className="text-lg md:text-[32px] font-light text-black font-['Roboto'] leading-[38px]">
              Clear systems, understandable performance, and visibility into your journey.
            </p>
          </div>

          {/* Card 3 (Rectangle 55 - Blue Border) */}
          <div className="bg-[#F0F3F9]/20 border border-[#0E76C0] rounded-[15px] p-8 space-y-4 min-h-[216px] flex flex-col justify-center">
            <h3 className="text-2xl md:text-[32px] font-normal text-black font-['Roboto'] leading-[38px]">
              Quality over quantity
            </h3>
            <p className="text-lg md:text-[32px] font-light text-black font-['Roboto'] leading-[38px]">
              Sustainable growth comes from the right opportunities and communities — not simply more links.
            </p>
          </div>

          {/* Card 4 (Rectangle 56 - Pink Border) */}
          <div className="bg-[#F0F3F9]/20 border border-[#F047AB] rounded-[15px] p-8 space-y-4 min-h-[216px] flex flex-col justify-center">
            <h3 className="text-2xl md:text-[32px] font-normal text-black font-['Roboto'] leading-[38px]">
              Technology that connects
            </h3>
            <p className="text-lg md:text-[32px] font-light text-black font-['Roboto'] leading-[38px]">
              Powerful digital tools designed to make sharing, tracking, and growing simpler.
            </p>
          </div>
        </div>
      </section>

      {/* Dashed Line Divider 3 (Line 3 - 2px dashed #0E76C0) */}
      <div className="w-full max-w-[1780px] mx-auto px-6 py-10">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 5. Section: Create your own network */}
      <section className="relative py-12 px-6 md:px-12 max-w-[1780px] mx-auto space-y-8 text-center overflow-hidden">
        {/* Decorative Watermark Vector Lines */}
        <div className="absolute inset-y-0 left-0 w-48 pointer-events-none opacity-20 hidden md:block">
          <svg width="160" height="100%" viewBox="0 0 100 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 40 C60 80, 60 120, 20 160 C-20 200, -20 240, 20 280 C60 320, 60 360, 20 400" stroke="#F047AB" strokeWidth="12" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="absolute inset-y-0 right-0 w-48 pointer-events-none opacity-20 hidden md:block">
          <svg width="160" height="100%" viewBox="0 0 100 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80 40 C40 80, 40 120, 80 160 C120 200, 120 240, 80 280 C40 320, 40 360, 80 400" stroke="#0E76C0" strokeWidth="12" strokeLinecap="round"/>
          </svg>
        </div>

        <h2 className="text-3xl md:text-[36px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-[45px]">
          Create your <span className="text-[#F047AB]">own network</span>
        </h2>

        <p className="text-2xl md:text-[32px] text-[#B98776] italic font-medium leading-[38px] font-['Roboto']">
          One connection <span className="not-italic text-black">can start something bigger.</span>
        </p>

        <p className="text-xl md:text-[32px] text-black font-light leading-relaxed md:leading-[38px] font-['Roboto'] max-w-[1260px] mx-auto">
          BLIS is designed around the power of local networks. Whether you&apos;re looking to build a community, discover new opportunities, or share products you genuinely believe in, BLIS gives you the tools to turn connections into action. You don&apos;t need to build an audience from scratch. Start with the network you already have.
        </p>
      </section>

      {/* Dashed Line Divider 4 (Line 4 - 2px dashed #0E76C0) */}
      <div className="w-full max-w-[1780px] mx-auto px-6 py-10">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 6. Section: A new way to think about affiliate marketing (Full-Width Stacked Cards) */}
      <section className="py-8 space-y-10 text-center">
        <div className="space-y-4 px-6 md:px-12 max-w-[1780px] mx-auto">
          <h2 className="text-3xl md:text-[36px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-[45px]">
            A new way to think about <span className="text-[#0E76C0]">affiliate marketing</span>
          </h2>
          <p className="text-2xl md:text-[32px] text-[#010004] font-normal leading-[38px] font-['Roboto']">
            Less <span className="text-[#B98776] italic">&ldquo;share a link.&rdquo;</span> More <span className="italic">&ldquo;build a network.&rdquo;</span>
          </p>
        </div>

        {/* 4 Full-Width Banners (190px height each, alternating colors, flush with zero gap) */}
        <div className="flex flex-col">
          {/* Banner 1 (Rectangle 6 - Pink Tint, Left Aligned Box) */}
          <div className="w-full min-h-[190px] bg-[#F047AB]/20 border-t border-b border-[#F047AB] px-6 md:px-24 flex items-center">
            <div className="max-w-[1260px] mx-auto w-full flex justify-start">
              <div className="text-left max-w-xl space-y-1">
                <h3 className="text-2xl md:text-[32px] font-bold text-black font-['Roboto'] leading-[38px]">
                  Discover and share
                </h3>
                <p className="text-xl md:text-[28px] text-black font-light font-['Roboto'] leading-[36px]">
                  Find campaigns worth recommending and share them through your network.
                </p>
              </div>
            </div>
          </div>

          {/* Banner 2 (Rectangle 57 - Blue Tint, Right Aligned Box) */}
          <div className="w-full min-h-[190px] bg-[#0E76C0]/20 border-b border-[#0E76C0] px-6 md:px-24 flex items-center">
            <div className="max-w-[1260px] mx-auto w-full flex justify-end">
              <div className="text-right max-w-xl space-y-1">
                <h3 className="text-2xl md:text-[32px] font-bold text-black font-['Roboto'] leading-[38px]">
                  Build local chapters
                </h3>
                <p className="text-xl md:text-[28px] text-black font-light font-['Roboto'] leading-[36px]">
                  Create and participate in structured community groups close to home.
                </p>
              </div>
            </div>
          </div>

          {/* Banner 3 (Rectangle 58 - Pink Tint, Left Aligned Box) */}
          <div className="w-full min-h-[190px] bg-[#F047AB]/20 border-b border-[#F047AB] px-6 md:px-24 flex items-center">
            <div className="max-w-[1260px] mx-auto w-full flex justify-start">
              <div className="text-left max-w-xl space-y-1">
                <h3 className="text-2xl md:text-[32px] font-bold text-black font-['Roboto'] leading-[38px]">
                  Your own storefront
                </h3>
                <p className="text-xl md:text-[28px] text-black font-light font-['Roboto'] leading-[36px]">
                  A digital storefront that connects your recommendations with customers.
                </p>
              </div>
            </div>
          </div>

          {/* Banner 4 (Rectangle 59 - Blue Tint, Right Aligned Box) */}
          <div className="w-full min-h-[190px] bg-[#0E76C0]/20 border-b border-[#0E76C0] px-6 md:px-24 flex items-center">
            <div className="max-w-[1260px] mx-auto w-full flex justify-end">
              <div className="text-right max-w-xl space-y-1">
                <h3 className="text-2xl md:text-[32px] font-bold text-black font-['Roboto'] leading-[38px]">
                  Beyond the click
                </h3>
                <p className="text-xl md:text-[28px] text-black font-light font-['Roboto'] leading-[36px]">
                  Take commerce beyond links and into genuine customer conversations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashed Line Divider 5 (Line 5 - 2px dashed #0E76C0) */}
      <div className="w-full max-w-[1780px] mx-auto px-6 py-10">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 7. Section: The BLIS philosophy */}
      <section className="py-8 px-6 md:px-12 max-w-[1780px] mx-auto space-y-8 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-[36px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-[45px]">
            The BLIS <span className="text-[#F047AB]">philosophy</span>
          </h2>
          <p className="text-2xl md:text-[32px] text-[#010004] font-normal leading-[38px] font-['Roboto']">
            Technology can scale a business. <span className="text-[#B98776] italic font-medium">People build it.</span>
          </p>
        </div>

        <p className="text-xl md:text-[32px] text-black font-light leading-[38px] font-['Roboto'] max-w-[1260px] mx-auto">
          We believe the future of commerce isn&apos;t purely digital. It&apos;s connected.
        </p>

        <div className="max-w-[1260px] mx-auto text-center font-['Roboto'] text-xl md:text-[32px] font-light leading-[42px] text-black pt-4 flex flex-col items-center space-y-2">
          <p>Connected to communities.</p>
          <p>Connected to recommendations.</p>
          <p>Connected to local businesses.</p>
          <p>Connected to people.</p>
        </div>
      </section>

      {/* 8. Footer */}
      <Footer />

    </div>
  );
}
