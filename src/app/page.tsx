'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  SearchCode, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ArrowRight, 
  Heart, 
  CheckCircle2, 
  Award,
  DollarSign
} from 'lucide-react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const benefits = [
    {
      title: 'Partner Identification',
      description: 'We identify and onboard partners who already reach your ideal customer - content creators, review sites, cashback platforms, and niche communities - then vet each one before they go live.',
      icon: SearchCode,
      color: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20'
    },
    {
      title: 'Transparent Tracking',
      description: 'Every click, sale, and payout runs through transparent, real-time tracking so you always know which partner drove which conversion—no black-box reporting.',
      icon: TrendingUp,
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
    },
    {
      title: 'Continuous Optimization',
      description: 'We continuously test commission structures, creative assets, and top-partner incentives, then reallocate budget toward what\'s actually converting.',
      icon: Users,
      color: 'bg-rose-500/10 text-rose-600 border-rose-500/20'
    }
  ];

  const stats = [
    { value: '3,200+', label: 'Active Affiliates' },
    { value: '4.6x', label: 'Average Program ROI' },
    { value: '140+', label: 'Brands Managed' }
  ];

  const testimonials = [
    { name: 'Aarav Mehta', role: 'Tech Influencer', text: 'BLIS helped me turn my audience into a recurring stream of revenue. The tracking is 100% transparent.' },
    { name: 'Neha Sharma', role: 'Home Storefront Owner', text: 'I started listing my organic groceries on the O2O storefront, and my local sales doubled in 3 weeks!' },
    { name: 'Rohan Gupta', role: 'Group Leader', text: 'Managing a team of 20 promoters became incredibly simple with the override commission splitting tools.' },
    { name: 'Priya Patel', role: 'Fashion Blogger', text: 'The native WhatsApp share buttons allow me to instantly send tracking codes to my broad groups.' }
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
    <div className="min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden">
      
      {/* 1. Header Navigation */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-pink-100/50 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-wider text-pink-500 uppercase">BLIS</span>
          </div>
          <Link 
            href="/login" 
            className="text-xs md:text-sm font-bold text-slate-600 hover:text-pink-500 hover:underline transition-all"
          >
            Already an Affiliate? <span className="text-pink-500 font-extrabold">Access the Affiliate Portal</span>
          </Link>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
              Turn partners into your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 animate-gradient">
                best-performing
              </span>{' '}
              channel
            </h1>
            <p className="text-lg text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We recruit, manage, and optimize affiliate programs so every partnership is tracked and every campaign compounds.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/login"
                className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-white font-bold text-sm text-center shadow-lg shadow-blue-600/20"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold text-sm text-center transition"
              >
                Access Affiliate Portal
              </Link>
            </div>
          </div>

          {/* Hero Right Visuals */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Visual card mockup container */}
            <div className="relative w-full max-w-md p-6 bg-slate-50 border border-slate-100 rounded-3xl shadow-2xl flex flex-col justify-between aspect-square overflow-hidden">
              
              {/* Dashboard chart mockup */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Campaign Telemetry</span>
                  </div>
                  <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">Gold Tier</span>
                </div>
                
                <h4 className="text-sm font-black text-slate-800">Affiliate Link Tracker</h4>
                <div className="h-32 w-full flex items-end justify-between gap-1 pt-6 border-b border-slate-200/60">
                  {[35, 45, 25, 60, 50, 75, 40, 90, 85, 95].map((val, idx) => (
                    <div key={idx} className="flex-1 rounded-t bg-gradient-to-t from-blue-500/20 to-blue-500" style={{ height: `${val}%` }}></div>
                  ))}
                </div>
              </div>

              {/* Floating hotspot earnings card matching mockup */}
              <div className="absolute bottom-6 right-6 p-5 rounded-2xl bg-white border border-pink-100 shadow-2xl flex flex-col items-center justify-center text-center animate-bounce min-w-[140px] z-10">
                <div className="p-2 rounded-full bg-pink-500/10 text-pink-500 border border-pink-500/20 mb-2">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">your earnings</span>
                <span className="text-xl font-black text-pink-500 mt-1">₹50,000</span>
              </div>

              {/* Simple background decorative bubbles */}
              <div className="absolute top-1/3 left-10 w-24 h-24 bg-pink-400/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-blue-400/5 rounded-full blur-lg"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Benefits Section */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-black text-pink-500 uppercase tracking-widest">Full-service affiliate program management</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              We recruit, manage, and optimize affiliate programs so every partnership is tracked and every campaign compounds.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6 hover:shadow-md transition duration-300">
                <div className={`p-3.5 rounded-xl w-fit border ${benefit.color}`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900">{benefit.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Soft circle background accents */}
        <div className="absolute top-12 left-12 w-48 h-48 bg-pink-100/40 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-12 right-12 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">{stat.value}</h3>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Testimonials Deck */}
      <section className="bg-pink-50/30 border-y border-pink-100/20 py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Real Earners, <span className="text-pink-500">Real Experiences</span>
            </h2>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Hear from active promoters and local sellers</p>
          </div>

          {/* Testimonial stacked carousel cards */}
          <div className="relative h-64 flex items-center justify-center">
            {testimonials.map((item, idx) => {
              const isActive = idx === activeTestimonial;
              
              return (
                <div
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`absolute w-full max-w-xl p-8 rounded-2xl bg-white border border-slate-100 shadow-xl cursor-pointer transition-all duration-500 select-none ${
                    isActive 
                      ? 'z-20 scale-100 opacity-100 translate-y-0 rotate-0' 
                      : 'z-10 scale-95 opacity-40 translate-y-4 -rotate-1 pointer-events-none'
                  }`}
                  style={{
                    transform: isActive ? 'none' : `translateY(${ (idx - activeTestimonial) * 8 }px) scale(${1 - Math.abs(idx - activeTestimonial) * 0.05})`
                  }}
                >
                  <p className="text-slate-600 font-medium italic leading-relaxed text-sm">
                    "{item.text}"
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4">
                    <div>
                      <h4 className="text-sm font-black text-slate-800">{item.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.role}</p>
                    </div>
                    <div className="flex gap-0.5 text-pink-500">
                      {[...Array(5)].map((_, i) => (
                        <Heart key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 pt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === activeTestimonial ? 'w-6 bg-pink-500' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
              ></button>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Popular Brands Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Most Popular Affiliate Programs</h3>
          </div>

          {/* Continuous scrolling row mockup */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-8 items-center py-4 overflow-x-auto scrollbar-hide">
              {brands.map((brand, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-extrabold text-slate-500 tracking-wider hover:text-pink-500 hover:bg-white hover:shadow transition duration-200"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. FAQ Accordion Section */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Frequently <span className="text-pink-500">Asked Questions</span>
            </h2>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Common inquiries about payouts and onboarding</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              
              return (
                <div key={idx} className="bg-white border border-slate-200/60 rounded-xl overflow-hidden shadow-sm transition">
                  <div
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="p-5 flex items-center justify-between cursor-pointer select-none hover:bg-slate-50/50"
                  >
                    <span className="text-sm font-bold text-slate-800">{faq.q}</span>
                    {isOpen ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
                  </div>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-500 font-medium leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <span className="text-xl font-black text-white tracking-wider uppercase">BLIS</span>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Geomarket Multi-tier affiliate distributions & O2O digital storefront builder networks.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Resources</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/login" className="hover:text-pink-400">Affiliate Portal</Link></li>
              <li><Link href="#" className="hover:text-pink-400">Campaign Guidelines</Link></li>
              <li><Link href="#" className="hover:text-pink-400">S2S Webhook Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Platform</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="#" className="hover:text-pink-400">Pricing Ratios</Link></li>
              <li><Link href="#" className="hover:text-pink-400">Fraud ESCROW safety</Link></li>
              <li><Link href="#" className="hover:text-pink-400">O2O store slugs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Legal</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="#" className="hover:text-pink-400">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-pink-400">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-pink-400">Anti-Fraud Disclosures</Link></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600 font-medium">
          <span>&copy; 2026 BLIS Platform Inc. All rights reserved.</span>
          <span className="flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart className="h-3 w-3 text-pink-500 fill-current" /> for promoters globally.
          </span>
        </div>
      </footer>

    </div>
  );
}
