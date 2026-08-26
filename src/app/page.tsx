'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(9);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroImages = [
    '/images/ch1.png',
    '/images/ch2.png',
    '/images/ch3.png',
    '/images/ch4.png'
  ];

  // Auto-rotate carousel slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const benefits = [
    {
      title: 'Affiliate recruitment',
      description: 'We identify and onboard partners who already reach your ideal customer - content creators, review sites, cashback platforms, and niche communities - then vet each one before they go live.',
      bg: 'rgba(14, 118, 192, 0.2)',
      border: '#0E76C0',
      icon: '/images/homeicon1.png'
    },
    {
      title: 'Tracking & attribution',
      description: 'Every click, sale, and payout runs through transparent, real-time tracking so you always know which partner drove which conversion - no black-box reporting.',
      bg: 'rgba(240, 71, 171, 0.2)',
      border: '#F047AB',
      icon: '/images/homeicon2.png'
    },
    {
      title: 'Program optimization',
      description: 'We continuously test commission structures, creative assets, and top-partner incentives, then reallocate budget toward what\'s actually converting.',
      bg: 'rgba(185, 135, 118, 0.2)',
      border: '#B98776',
      icon: '/images/homeicon3.png'
    }
  ];

  const stats = [
    { value: '3,200+', label: 'Active affiliates' },
    { value: '4.6x', label: 'Average program ROI' },
    { value: '140+', label: 'Brands managed' }
  ];

  const testimonials = [
    { name: 'ROHIT SHARMA', comment: 'Blis simplified my influencer campaigns. Direct payouts cleared on time.', type: 'Instagram Creator' },
    { name: 'PRIYA NAIR', comment: 'Best payout splits in the market. The dashboard tracking is instant.', type: 'Beauty Blogger' },
    { name: 'KABIR MEHTA', comment: 'Highly transparent dashboard. The O2O local catalog links are game changers.', type: 'Digital Promoter' },
    { name: 'ANANYA SEN', comment: 'My team conversions doubled using the Leader tracking links catalog.', type: 'Group Leader' },
    { name: 'VISHAL SAXENA', comment: 'Zero leakages in tracking webhooks. Exceptional stability under heavy traffic.', type: 'SaaS Affiliate' },
    { name: 'MEGHA GUPTA', comment: 'Withdrew my first promoter commission directly to my bank in 24 hours.', type: 'Catalog Promoter' },
    { name: 'DEEPAK RAJ', comment: 'Awesome support! Direct S2S campaign webhooks are easy to configure.', type: 'API Integrator' },
    { name: 'SNEHA REDDY', comment: 'Affiliate store builder makes sharing product links super intuitive.', type: 'E-commerce Promoter' },
    { name: 'ARJUN VERMA', comment: 'Managed 50+ promoters under my team catalog easily. High-tier margins.', type: 'Promoter Leader' },
    { name: 'ASTERIA XING', comment: 'Exceptional conversion tracking velocity and easy payments structure.', type: 'Verified Promoter' }
  ];

  const brandsRow1 = ['Amazon', 'Flipkart', 'Tata CLiQ', 'Meesho', 'Cashify', 'Myntra', 'Nykaa', 'Mamaearth', 'MakeMyTrip', 'Yatra', 'Cleartrip'];
  const brandsRow2 = ['Ajio', 'Swiggy', 'Zomato', 'PhonePe', 'Cred', 'Lenskart', 'BoAt', 'Pepperfry', 'Urban Company', 'FirstCry', 'BigBasket'];

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

      {/* 1. Elegant Header Navigation */}
      <header className="sticky top-0 bg-[#F047AB]/20 backdrop-blur-[4px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] z-50 transition-all duration-300">
        <div className="max-w-[1800px] mx-auto h-20 px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="text-3xl font-extrabold tracking-wider font-['Plus_Jakarta_Sans'] bg-gradient-to-r from-[#F047AB] to-[#0E76C0] bg-clip-text text-transparent cursor-pointer">
            BLIS
          </div>

          {/* Nav Options */}
          <nav className="hidden md:flex items-center gap-8 font-['Plus_Jakarta_Sans']">
            <Link href="/" className="text-sm font-bold text-slate-800 hover:text-[#0E76C0] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-bold text-slate-600 hover:text-[#0E76C0] transition-colors">
              About Us
            </Link>
            <Link href="/faq" className="text-sm font-bold text-slate-600 hover:text-[#0E76C0] transition-colors">
              FAQs
            </Link>
            <a href="#contact" className="text-sm font-bold text-slate-600 hover:text-[#0E76C0] transition-colors">
              Contact
            </a>
            <a href="#campaigns" className="text-sm font-bold text-slate-600 hover:text-[#0E76C0] transition-colors">
              Campaigns
            </a>
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
              className="block py-2 text-base font-bold text-slate-600 hover:text-[#0E76C0] transition-colors"
            >
              About Us
            </Link>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-600 hover:text-[#0E76C0] transition-colors"
            >
              Contact
            </a>
            <a 
              href="#campaigns" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-slate-600 hover:text-[#0E76C0] transition-colors"
            >
              Campaigns
            </a>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full border border-slate-200 text-slate-700 text-sm font-bold"
              >
                Affiliate Portal
              </Link>
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full bg-[#0E76C0] text-white text-sm font-bold shadow-sm shadow-[#0E76C0]/20"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section className="py-12 md:py-24 px-6 md:px-12 max-w-[1800px] mx-auto animate-fadeIn">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Hero Carousel - Order on top on mobile, second on desktop */}
          <div className="w-full lg:col-span-6 flex justify-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-[640px] aspect-[4/3] flex items-center justify-center overflow-visible">
              {/* Fade carousel items */}
              {heroImages.map((src, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                  <Image
                    src={src}
                    alt={`Affiliate marketing visual ${idx + 1}`}
                    fill
                    className="object-contain"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Hero Left Content - Order second on mobile, first on desktop */}
          <div className="w-full lg:col-span-6 space-y-6 text-left order-2 lg:order-1 mt-4 lg:mt-0">
            <h1 className="text-4xl md:text-[64px] font-bold text-black font-['Plus_Jakarta_Sans'] leading-tight md:leading-[81px]">
              Turn partners into your <br className="hidden md:inline" />
              <span className="text-[#F047AB] italic font-extrabold">best-performing</span> channel
            </h1>
            <p className="text-lg md:text-[36px] text-slate-800 font-light leading-snug md:leading-[42px] font-['Roboto']">
              We recruit, manage, and optimize affiliate programs so every partnership is tracked and every campaign compounds.
            </p>

            <div className="space-y-4 pt-2">
              <div>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center h-[60px] md:h-[66px] px-8 md:px-10 rounded-[30px] bg-[#0E76C0] hover:bg-[#0c66a8] active:scale-95 transition-all text-[#FFFAFF] font-medium text-lg md:text-2xl text-center figma-shadow font-['Plus_Jakarta_Sans']"
                >
                  Get Started
                </Link>
              </div>

              <div className="block pt-2">
                <span className="text-lg md:text-2xl text-slate-700 font-normal font-['Plus_Jakarta_Sans']">
                  Already an Affiliate?{' '}
                  <Link
                    href="/login"
                    className="text-[#F047AB] hover:underline font-semibold transition"
                  >
                    Access the Affiliate Portal
                  </Link>
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Decorative Dashed Line 1 */}
      <div className="w-full py-8">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 3. Core Benefits Section */}
      <section className="py-8 px-6 md:px-12 max-w-[1800px] mx-auto space-y-8">

        <div className="text-center space-y-3 max-w-6xl mx-auto">
          <h2 className="text-[36px] font-bold tracking-tight font-['Plus_Jakarta_Sans'] uppercase leading-tight">
            <span className="text-[#F047AB]">Full-service</span> <span className="text-[#000000]">affiliate program management</span>
          </h2>
          <p className="text-xl md:text-[32px] text-black font-light leading-snug md:leading-[38px] font-['Roboto']">
            We recruit, manage, and optimize affiliate programs so every partnership is tracked and every campaign compounds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const isRaised = hoveredCard === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className="flex flex-col items-center justify-end h-auto md:h-[420px] py-4 md:py-0"
              >
                {/* Circle Icon Container positioned above */}
                <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full bg-[rgba(204,252,244,0.2)] flex items-center justify-center mb-4 relative flex-shrink-0">
                  <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
                    <Image
                      src={benefit.icon}
                      alt={benefit.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Main Card with specific figma parameters: H: 77px initially, H: 270px on hover, corner radius 0 */}
                <div
                  className={`w-full px-8 py-4 rounded-none flex flex-col justify-center transition-all duration-300 cursor-pointer ${isRaised ? '-translate-y-4 shadow-2xl h-[270px]' : 'translate-y-0 shadow-sm h-[77px] overflow-hidden'
                    }`}
                  style={{
                    backgroundColor: benefit.bg,
                    border: `1px solid ${benefit.border}`
                  }}
                >
                  <h3 className="text-2xl font-bold text-black font-['Plus_Jakarta_Sans'] text-center hover:text-[#0E76C0] transition-colors">
                    {benefit.title}
                  </h3>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isRaised ? 'max-h-[220px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                      }`}
                  >
                    <p className="text-xl font-light text-black leading-[28px] font-['Roboto'] text-center">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* Decorative Solid Line 3 (resides directly flush below the cards with zero gap) */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="border-t-2 border-solid border-[#0E76C0]"></div>
      </div>

      {/* 4. Stats Section (Rectangle 6: Glass layout matching Figma specifications) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[rgba(240,71,171,0.25)] to-[rgba(240,71,171,0.05)] backdrop-blur-[4px] border-y border-[#F047AB] py-16 px-6 md:px-12 mt-16 shadow-[0_8px_32px_0_rgba(240,71,171,0.15)]">

        {/* Floating Glassmorphism Bubbles (Moving all over the strip randomly with higher opacities and count) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Group 1: Pink Bubbles */}
          <div className="absolute rounded-full bg-[#F047AB]/40 w-[90px] h-[90px] top-4 blur-sm animate-across-1" style={{ animationDelay: '0s' }}></div>
          <div className="absolute rounded-full bg-[#F047AB]/50 w-[140px] h-[140px] bottom-2 blur-sm animate-across-4" style={{ animationDelay: '-18s' }}></div>
          <div className="absolute rounded-full bg-[#F047AB]/45 w-[70px] h-[70px] top-[60%] blur-sm animate-across-3" style={{ animationDelay: '-10s' }}></div>
          <div className="absolute rounded-full bg-[#F047AB]/40 w-[110px] h-[110px] top-[20%] blur-sm animate-across-1" style={{ animationDelay: '-8s' }}></div>

          {/* Group 2: Blue Bubbles */}
          <div className="absolute rounded-full bg-[#0E76C0]/40 w-[120px] h-[120px] bottom-4 blur-sm animate-across-2" style={{ animationDelay: '-6s' }}></div>
          <div className="absolute rounded-full bg-[#0E76C0]/50 w-[95px] h-[95px] top-6 blur-sm animate-across-1" style={{ animationDelay: '-2s' }}></div>
          <div className="absolute rounded-full bg-[#0E76C0]/40 w-[100px] h-[100px] top-[40%] blur-sm animate-across-4" style={{ animationDelay: '-22s' }}></div>
          <div className="absolute rounded-full bg-[#0E76C0]/45 w-[80px] h-[80px] bottom-10 blur-sm animate-across-2" style={{ animationDelay: '-14s' }}></div>

          {/* Group 3: Brown/Beige Bubbles */}
          <div className="absolute rounded-full bg-[#B98776]/50 w-[80px] h-[80px] top-2 blur-sm animate-across-3" style={{ animationDelay: '-12s' }}></div>
          <div className="absolute rounded-full bg-[#B98776]/45 w-[70px] h-[70px] bottom-6 blur-sm animate-across-2" style={{ animationDelay: '-15s' }}></div>
          <div className="absolute rounded-full bg-[#B98776]/50 w-[110px] h-[110px] top-[30%] blur-sm animate-across-4" style={{ animationDelay: '-28s' }}></div>

          {/* Group 4: Additional scattered bubbles for density */}
          <div className="absolute rounded-full bg-[#F047AB]/40 w-[60px] h-[60px] bottom-12 blur-sm animate-across-3" style={{ animationDelay: '-24s' }}></div>
          <div className="absolute rounded-full bg-[#0E76C0]/45 w-[130px] h-[130px] top-12 blur-sm animate-across-2" style={{ animationDelay: '-4s' }}></div>
          <div className="absolute rounded-full bg-[#B98776]/40 w-[90px] h-[90px] bottom-1 blur-sm animate-across-1" style={{ animationDelay: '-32s' }}></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-6xl md:text-[96px] font-light text-black tracking-tight leading-[112px] font-['Roboto']">
                {stat.value}
              </h3>
              <p className="text-2xl font-bold text-[#010004] font-['Plus_Jakarta_Sans'] whitespace-nowrap">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>



      {/* 5. Testimonials Deck (Stacked Cards Deck styled precisely like Figma) */}
      <section className="py-16 px-6 md:px-24 max-w-7xl mx-auto space-y-12">

        <div className="text-center">
          <h2 className="text-[36px] font-bold font-['Plus_Jakarta_Sans']">
            <span className="text-black">Real Earners,</span> <span className="text-[#F047AB]">Real Experiences</span>
          </h2>
        </div>

        {/* Desktop Stacked Layout Wrapper — Figma: W:400 H:500, radius:30, fill #F0F3F9 20%, glass + drop-shadow */}
        <div className="hidden md:block relative w-full max-w-5xl mx-auto h-[550px] mt-8 overflow-hidden select-none">
          {testimonials.map((testimonial, idx) => {
            const isActive = idx === activeTestimonial;

            // Cards before active sit stacked on the left; active card is fully visible; cards after shift right
            const cardLeftOffset = idx <= activeTestimonial
              ? `${idx * 40}px`
              : `${idx * 40 + 340}px`;

            return (
              <div
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`absolute top-4 w-[400px] h-[500px] rounded-[30px] backdrop-blur-[4px] transition-all duration-500 ease-out cursor-pointer ${isActive
                  ? 'bg-white/95 z-40'
                  : 'bg-[rgba(240,243,249,0.2)] z-10'
                  }`}
                style={{
                  left: cardLeftOffset,
                  zIndex: isActive ? 50 : idx,
                  boxShadow: isActive
                    ? '-4px 4px 16px rgba(0,0,0,0.25)'
                    : '-4px 4px 4px rgba(0,0,0,0.25)'
                }}
              >

                {/* Rotated text representing name on card side (always visible on left strip) */}
                <div className="absolute left-0 top-0 bottom-0 w-[50px] flex items-center justify-center">
                  <span className="text-lg font-bold text-black/80 font-['Roboto'] rotate-[-90deg] whitespace-nowrap uppercase tracking-widest">
                    {testimonial.name}
                  </span>
                </div>

                {/* Card Face Content (fades in only when card is active/expanded) */}
                <div
                  className={`flex flex-col justify-between h-full py-10 pr-10 pl-[70px] transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                >
                  <div className="space-y-6">
                    <span className="text-[96px] leading-none text-[#F047AB] font-serif block h-10 select-none">&ldquo;</span>
                    <p className="text-[22px] font-light text-slate-800 leading-[34px] font-['Roboto']">
                      {testimonial.comment}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-black font-['Plus_Jakarta_Sans'] uppercase tracking-wider">
                      {testimonial.name}
                    </h4>
                    <p className="text-[11px] text-[#0E76C0] font-extrabold uppercase tracking-widest mt-1">
                      {testimonial.type}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile Horizontal Carousel — clean grid scroll */}
        <div className="md:hidden flex overflow-x-auto gap-4 py-4 px-2 scrollbar-hide snap-x snap-mandatory">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[280px] bg-slate-50 border border-slate-100 rounded-3xl p-6 snap-start shadow-sm flex flex-col justify-between h-[360px] font-['Roboto']"
            >
              <div className="space-y-3">
                <span className="text-5xl leading-none text-[#F047AB] font-serif block h-6">&ldquo;</span>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">
                  {testimonial.comment}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-sm font-bold text-slate-800 font-['Plus_Jakarta_Sans'] uppercase tracking-wider">
                  {testimonial.name}
                </h4>
                <p className="text-[10px] text-[#0E76C0] font-extrabold uppercase tracking-wider mt-0.5">
                  {testimonial.type}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Decorative Dashed Line 4 */}
      <div className="w-full py-8">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>

      {/* 6. Popular Brands Section — Infinite Marquee Carousel */}
      <section className="py-16 space-y-12 overflow-hidden">

        <div className="text-center">
          <h3 className="text-[36px] font-bold font-['Plus_Jakarta_Sans']">
            <span className="text-[#F047AB]">Most Popular</span> <span className="text-black">Affiliate Programs</span>
          </h3>
        </div>

        {/* Row 1: Left to Right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-marquee-ltr">
            {[...brandsRow1, ...brandsRow1, ...brandsRow1].map((brand, idx) => (
              <div
                key={`r1-${idx}`}
                className="flex-shrink-0 w-[180px] h-[80px] rounded-xl bg-[rgba(204,252,244,0.15)] flex items-center justify-center text-lg font-bold text-[#0E76C0] font-['Plus_Jakarta_Sans'] border border-emerald-500/10 cursor-pointer hover:bg-white/60 transition-colors duration-300"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-marquee-rtl">
            {[...brandsRow2, ...brandsRow2, ...brandsRow2].map((brand, idx) => (
              <div
                key={`r2-${idx}`}
                className="flex-shrink-0 w-[180px] h-[80px] rounded-xl bg-[rgba(204,252,244,0.15)] flex items-center justify-center text-lg font-bold text-[#0E76C0] font-['Plus_Jakarta_Sans'] border border-emerald-500/10 cursor-pointer hover:bg-white/60 transition-colors duration-300"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Decorative Dashed Line 4 */}
      <div className="w-full py-8">
        <div className="border-t-2 border-dashed border-[#0E76C0]"></div>
      </div>


      {/* 7. FAQ Accordion Section */}
      <section className="py-16 px-6 md:px-24 max-w-6xl mx-auto space-y-12">

        <div className="text-center">
          <h2 className="text-[36px] font-bold font-['Plus_Jakarta_Sans']">
            <span className="text-black">Frequently</span> <span className="text-[#F047AB]">Asked Questions</span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;

            return (
              <div
                key={idx}
                className="bg-[#FFFAFF] figma-faq-shadow rounded-[30px] overflow-hidden transition-all duration-500 ease-in-out"
              >
                <div
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="min-h-[60px] px-8 py-4 flex items-center justify-between cursor-pointer select-none hover:bg-slate-50/50 transition-colors duration-300"
                >
                  <span className="text-xl md:text-[32px] text-black font-light leading-[38px] font-['Roboto']">
                    {faq.q}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-slate-600 flex-shrink-0 transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-8 pb-6 pt-2 text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-50 font-['Roboto']">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 8. Footer */}
      <Footer />

    </div>
  );
}
