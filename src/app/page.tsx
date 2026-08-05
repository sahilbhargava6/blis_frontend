'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const benefits = [
    {
      title: 'Partner Identification',
      description: 'We identify and onboard partners who already reach your ideal customer - content creators, review sites, cashback platforms, and niche communities - then vet each one before they go live.',
      bg: 'rgba(14, 118, 192, 0.2)',
      border: '#0E76C0'
    },
    {
      title: 'Transparent Tracking',
      description: 'Every click, sale, and payout runs through transparent, real-time tracking so you always know which partner drove which conversion - no black-box reporting.',
      bg: 'rgba(240, 71, 171, 0.2)',
      border: '#F047AB'
    },
    {
      title: 'Continuous Optimization',
      description: 'We continuously test commission structures, creative assets, and top-partner incentives, then reallocate budget toward what\'s actually converting.',
      bg: 'rgba(185, 135, 118, 0.2)',
      border: '#B98776'
    }
  ];

  const stats = [
    { value: '3,200+', label: 'Active affiliates' },
    { value: '4.6x', label: 'Average program ROI' },
    { value: '140+', label: 'Brands managed' }
  ];

  const brands = [
    'Amazon', 'Flipkart', 'Tata CLiQ', 'Meesho', 'Cashify', 'Myntra', 'Nykaa', 'Mamaearth', 'MakeMyTrip', 'Yatra', 'Cleartrip'
  ];

  const faqs = [
    { q: 'What is Blis and how does it work?', a: 'Blis is a multi-tier affiliate and O2O catalog platform that helps brands, leaders, and promoters coordinate and track link sharing payouts seamlessly.' },
    { q: 'How can I start earning with Blis?', a: 'Sign up with your phone number, join a group leader\'s team, browse campaigns assigned to your group, and start sharing your custom affiliate links.' },
    { q: 'Is Blis completely free to join?', a: 'Yes! Joining Blis as a promoter is 100% free with no hidden registration costs.' },
    { q: 'Who can earn money with Blis?', a: 'Anyone! From social media influencers and bloggers to local home-based catalog sellers.' },
    { q: 'How much can I earn through Blis?', a: 'Earnings are uncapped. Depending on your traffic source quality, commission ratios, and active conversions, you can earn recurring payouts.' },
    { q: 'Which brands can I promote on Blis?', a: 'You can promote campaigns from leading retail, hosting, and e-commerce companies assigned globally or by your group leader.' },
    { q: 'How do I withdraw my earnings?', a: 'Once the 30-day safety holding period clears, you can request a direct bank or wallet withdrawal from your promoter stats dashboard.' },
    { q: 'Is Blis safe and trustworthy?', a: 'Yes. Every transaction, conversion webhook, and commission split runs on verified ledger checks and fraud prevention logic.' },
    { q: 'Why should I choose Blis?', a: 'Blis provides immediate transparent tracking, direct messaging sharing shortcuts, custom local catalog setups, and high-tier splits.' },
    { q: 'How can I contact Blis Support?', a: 'You can reach support directly through your dashboard chat support button or by emailing support@blis.platform.' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      
      {/* 1. Header Navigation (100px height with pink shadow bg) */}
      <header className="h-[100px] figma-pink-bg figma-shadow flex items-center justify-between px-6 md:px-24">
        <div className="text-4xl font-bold tracking-wider text-black font-['Plus_Jakarta_Sans']">
          BLIS
        </div>
        <Link 
          href="/login" 
          className="text-xs md:text-sm font-bold text-slate-700 hover:text-black hover:underline transition-all font-['Plus_Jakarta_Sans']"
        >
          Already an Affiliate? <span className="font-extrabold text-[#0E76C0]">Access the Affiliate Portal</span>
        </Link>
      </header>

      {/* 2. Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <h1 className="text-4xl md:text-[64px] font-bold text-black font-['Plus_Jakarta_Sans'] leading-[81px]">
              Turn partners into your <br />
              <span className="text-[#F047AB] italic font-extrabold">best-performing</span> channel
            </h1>
            <p className="text-xl md:text-[36px] text-black font-light leading-[42px] font-['Roboto']">
              We recruit, manage, and optimize affiliate programs so every partnership is tracked and every campaign compounds.
            </p>
            
            <div className="space-y-6 pt-4">
              <div>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center h-[66px] px-10 rounded-[30px] bg-[#0E76C0] hover:bg-[#0c66a8] active:scale-95 transition-all text-[#FFFAFF] font-medium text-2xl text-center figma-shadow font-['Plus_Jakarta_Sans']"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="block pt-2">
                <span className="text-2xl text-black font-normal font-['Plus_Jakarta_Sans']">
                  Already an Affiliate?{' '}
                  <Link
                    href="/login"
                    className="text-[#F047AB] hover:underline font-semibold transition"
                  >
                    Access to the Affiliate Portal
                  </Link>
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual elements mockup - Precise Layered Figma Composition */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="relative w-full max-w-[640px] aspect-[775/640] overflow-visible">
              
              {/* Image 3: ch3.png - left-most layer */}
              <div 
                className="absolute"
                style={{
                  width: '42.71%',
                  height: '51.72%',
                  left: '0%',
                  top: '22.81%',
                  zIndex: 3
                }}
              >
                <Image
                  src="/images/ch3.png"
                  alt="Telemetry visual"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Image 1: ch1.png - background circle/main layer */}
              <div 
                className="absolute"
                style={{
                  width: '82.58%',
                  height: '100%',
                  left: '13.29%',
                  top: '0%',
                  zIndex: 1
                }}
              >
                <Image
                  src="/images/ch1.png"
                  alt="Character background"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Image 2: ch2.png - character details overlay */}
              <div 
                className="absolute"
                style={{
                  width: '69.42%',
                  height: '84.06%',
                  left: '26.45%',
                  top: '15.94%',
                  zIndex: 2
                }}
              >
                <Image
                  src="/images/ch2.png"
                  alt="Character graphic"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Image 4: ch4.png - right-most floating info overlay */}
              <div 
                className="absolute"
                style={{
                  width: '27.87%',
                  height: '33.75%',
                  left: '72.13%',
                  top: '29.69%',
                  zIndex: 4
                }}
              >
                <Image
                  src="/images/ch4.png"
                  alt="Promo bubble"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Decorative Dashed Line 1 */}
      <div className="max-w-7xl mx-auto px-6 md:px-24 py-8">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 3. Core Benefits Section */}
      <section className="py-16 px-6 md:px-24 max-w-7xl mx-auto space-y-16">
        
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-[36px] font-bold tracking-tight text-[#F047AB] font-['Plus_Jakarta_Sans'] uppercase">
            Full-service affiliate program management
          </h2>
          <p className="text-[32px] text-black font-light leading-[38px] font-['Roboto']">
            We recruit, manage, and optimize affiliate programs so every partnership is tracked and every campaign compounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-lg flex flex-col justify-center min-h-[270px] space-y-4"
              style={{
                backgroundColor: benefit.bg,
                border: `1px solid ${benefit.border}`
              }}
            >
              <h3 className="text-2xl font-bold text-black font-['Plus_Jakarta_Sans']">{benefit.title}</h3>
              <p className="text-xl font-light text-black leading-[28px] font-['Roboto']">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* Decorative Solid Line 3 */}
      <div className="max-w-7xl mx-auto px-6 md:px-24 py-8">
        <div className="border-t-2 border-solid border-[#0E76C0]"></div>
      </div>

      {/* 4. Stats Section (Rectangle 6: pink bg with solid border) */}
      <section className="figma-pink-bg border-y border-[#F047AB] py-16 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-6xl md:text-[96px] font-light text-black tracking-tight leading-[112px] font-['Roboto']">
                {stat.value}
              </h3>
              <p className="text-2xl font-bold text-[#010004] font-['Plus_Jakarta_Sans']">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Decorative Dashed Line 2 */}
      <div className="max-w-7xl mx-auto px-6 md:px-24 py-8">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 5. Testimonials Deck */}
      <section className="py-16 px-6 md:px-24 max-w-7xl mx-auto space-y-12">
        
        <div className="text-center">
          <h2 className="text-[36px] font-bold text-black font-['Plus_Jakarta_Sans']">
            Real Earners, Real Experiences
          </h2>
        </div>

        {/* Stacked layout showing cards overlapping as per Figma offsets */}
        <div className="relative max-w-5xl mx-auto flex overflow-x-auto gap-6 py-6 scrollbar-hide">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[400px] h-[500px] p-8 rounded-[30px] bg-[rgba(240,243,249,0.2)] shadow-[-4px_4px_4px_rgba(0,0,0,0.25)] flex flex-col justify-between relative border border-slate-100 hover:bg-slate-50 transition duration-300"
            >
              {/* Rotated text representing name on card side */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-4xl font-medium text-black/25 font-['Roboto'] rotate-[-90deg] uppercase tracking-wider">
                  ASTERIA XING
                </span>
              </div>
              <div className="z-10 mt-auto bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                <p className="text-sm font-semibold text-slate-800">"Exceptional conversion tracking velocity and easy payments structure."</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">Verified Promoter</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Decorative Dashed Line 4 */}
      <div className="max-w-7xl mx-auto px-6 md:px-24 py-8">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 6. Popular Brands Section */}
      <section className="py-16 px-6 md:px-24 max-w-7xl mx-auto space-y-12">
        
        <div className="text-center">
          <h3 className="text-[36px] font-bold text-[#F047AB] font-['Plus_Jakarta_Sans']">
            Most Popular Affiliate Programs
          </h3>
        </div>

        {/* Brand layout showing blocks with light mint green bg */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="h-[100px] rounded-lg bg-[rgba(204,252,244,0.2)] flex items-center justify-center text-xl font-bold text-[#0E76C0] font-['Plus_Jakarta_Sans'] hover:bg-slate-50 transition border border-emerald-500/10 cursor-pointer"
            >
              {brand}
            </div>
          ))}
        </div>

      </section>

      {/* 7. FAQ Accordion Section */}
      <section className="py-16 px-6 md:px-24 max-w-6xl mx-auto space-y-12">
        
        <div className="text-center">
          <h2 className="text-[36px] font-bold text-black font-['Plus_Jakarta_Sans']">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            
            return (
              <div 
                key={idx} 
                className="bg-[#FFFAFF] figma-faq-shadow rounded-[30px] overflow-hidden transition"
              >
                <div
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="min-h-[60px] px-8 py-4 flex items-center justify-between cursor-pointer select-none hover:bg-slate-50/50"
                >
                  <span className="text-xl md:text-[32px] text-black font-light leading-[38px] font-['Roboto']">
                    {faq.q}
                  </span>
                  {isOpen ? <ChevronUp className="h-5 w-5 text-slate-600" /> : <ChevronDown className="h-5 w-5 text-slate-600" />}
                </div>
                {isOpen && (
                  <div className="px-8 pb-6 pt-2 text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-50 font-['Roboto']">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* 8. Footer (406px height with pink shadow bg) */}
      <footer className="min-h-[406px] figma-pink-bg figma-shadow py-16 px-6 md:px-24 flex flex-col justify-between">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <span className="text-3xl font-bold text-black font-['Plus_Jakarta_Sans'] tracking-wider">BLIS</span>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              Geomarket Multi-tier affiliate distributions & O2O digital storefront builder networks.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-black uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">Resources</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li><Link href="/login" className="hover:text-black">Access the Affiliate Portal</Link></li>
              <li><Link href="#" className="hover:text-black">Campaign Guidelines</Link></li>
              <li><Link href="#" className="hover:text-black">S2S Webhook Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-black uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">Platform</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li><Link href="#" className="hover:text-black">Pricing Ratios</Link></li>
              <li><Link href="#" className="hover:text-black">Fraud ESCROW safety</Link></li>
              <li><Link href="#" className="hover:text-black">O2O store slugs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-black uppercase tracking-widest mb-4 font-['Plus_Jakarta_Sans']">Legal</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              <li><Link href="#" className="hover:text-black">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-black">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-black">Anti-Fraud Disclosures</Link></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto w-full border-t border-slate-300 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-700 font-medium">
          <span>&copy; 2026 BLIS Platform Inc. All rights reserved.</span>
          <span>Made for affiliate marketing networks globally.</span>
        </div>
      </footer>

    </div>
  );
}
