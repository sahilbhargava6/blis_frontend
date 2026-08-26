'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function StackingCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !card1Ref.current || !card2Ref.current || !card3Ref.current) return;

    const ctx = gsap.context(() => {
      // Pin the section wrapper while scrubbing larger overlapping cards
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top+=90',
          end: '+=2000',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress < 0.35) setActiveCard(0);
            else if (self.progress < 0.70) setActiveCard(1);
            else setActiveCard(2);
          }
        }
      });

      // Base Card 1 scale
      gsap.set(card1Ref.current, { scale: 0.96, zIndex: 10 });

      // Card 2 Box: Slightly bigger than Card 1 (scale 1.02), opacity 0 initially, slides UP & sets over Card 1
      gsap.set(card2Ref.current, { yPercent: 120, opacity: 0, scale: 1.02, zIndex: 20 });
      tl.to(card2Ref.current, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      });

      // Card 3 Box: Slightly bigger than Card 2 (scale 1.08), opacity 0 initially, slides UP & sets over Card 2
      gsap.set(card3Ref.current, { yPercent: 120, opacity: 0, scale: 1.08, zIndex: 30 });
      tl.to(card3Ref.current, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const selectCard = (index: number) => {
    setActiveCard(index);
    if (!containerRef.current) return;
    const st = ScrollTrigger.getAll().find(s => s.trigger === containerRef.current);
    if (st) {
      let progress = 0;
      if (index === 1) progress = 0.5;
      if (index === 2) progress = 0.95;
      window.scrollTo({
        top: st.start + (st.end - st.start) * progress,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={containerRef} className="w-full max-w-[1540px] mx-auto px-4 md:px-12 py-4 my-4">
      
      {/* Outer Card Viewport Deck (Overflow visible so bigger card overlays outside) */}
      <div className="relative h-[520px] md:h-[460px] w-full rounded-[15px]">
        
        {/* Navigation Control Tabs */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 md:gap-3 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-slate-200">
          {[
            { title: '1. The gap & problem', index: 0 },
            { title: '2. What is BLIS?', index: 1 },
            { title: '3. The big idea', index: 2 }
          ].map((tab) => (
            <button
              key={tab.index}
              onClick={() => selectCard(tab.index)}
              className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold transition-all ${
                activeCard === tab.index
                  ? 'bg-[#0E76C0] text-white shadow-sm scale-105'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Card 1 Box: The gap. The problem. (Base scale 0.96) */}
        <div 
          ref={card1Ref}
          className="absolute inset-0 w-full h-full bg-[#F0F3F9] border-2 border-[#0E76C0] rounded-[15px] p-8 md:p-12 text-center space-y-4 flex flex-col justify-center shadow-xl transition-all duration-300"
        >
          <h2 className="text-3xl md:text-[34px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-tight pt-4">
            The <span className="text-[#F047AB]">gap.</span> The <span className="text-[#F047AB]">problem.</span>
          </h2>
          <p className="text-xl md:text-[28px] text-black font-normal leading-snug font-['Roboto']">
            The internet made <span className="text-[#B98776] italic font-medium">selling easier.</span> It didn&apos;t make it more <span className="text-[#B98776] italic font-medium">personal.</span>
          </p>
          <p className="text-lg md:text-[24px] text-black font-light leading-relaxed font-['Roboto'] max-w-[1260px] mx-auto">
            Affiliate marketing has made it possible for anyone to recommend products and earn from their influence. But somewhere along the way, the human connection got lost — people trust people, not endless links and advertisements. Local communities already have something powerful: trust, relationships, and word-of-mouth. BLIS brings that human element back into digital commerce.
          </p>
        </div>

        {/* Card 2 Box: What is BLIS? (Slightly bigger scale 1.02, overlays on top of Card 1) */}
        <div
          ref={card2Ref}
          className="absolute inset-0 w-full h-full bg-[#F0F3F9] border-2 border-[#F047AB] rounded-[15px] p-8 md:p-12 text-center space-y-4 flex flex-col justify-center shadow-2xl transition-all duration-300"
        >
          <h2 className="text-3xl md:text-[34px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-tight pt-4">
            What is <span className="text-[#0E76C0]">BLIS</span>?
          </h2>
          <p className="text-xl md:text-[28px] text-black font-normal leading-snug font-['Roboto']">
            Where digital affiliate marketing <span className="text-[#B98776] italic font-medium">meets local trust.</span>
          </p>
          <div className="space-y-3 text-lg md:text-[24px] text-black font-light leading-relaxed font-['Roboto'] max-w-[1260px] mx-auto">
            <p>
              BLIS is a community-first affiliate and referral platform designed to bring together digital opportunities and real-world networks. Instead of relying only on algorithms, ads, and anonymous audiences, BLIS helps people grow through structured communities, trusted referrals, and shared opportunities.
            </p>
            <p>
              Our approach combines the scalability of technology with something technology can&apos;t replace — human connection.
            </p>
          </div>
        </div>

        {/* Card 3 Box: The big idea (Slightly bigger scale 1.08, overlays on top of Card 2) */}
        <div
          ref={card3Ref}
          className="absolute inset-0 w-full h-full bg-[#F0F3F9] border-2 border-[#0E76C0] rounded-[15px] p-8 md:p-12 text-center space-y-4 flex flex-col justify-center shadow-2xl transition-all duration-300"
        >
          <h2 className="text-3xl md:text-[34px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-tight pt-4">
            The <span className="text-[#F047AB]">big idea</span>
          </h2>
          <p className="text-xl md:text-[28px] text-black font-normal leading-snug font-['Roboto']">
            We&apos;re redefining word-of-mouth <span className="text-[#B98776] italic font-medium">for the modern economy.</span>
          </p>
          <div className="space-y-3 text-lg md:text-[22px] text-black font-light leading-relaxed font-['Roboto'] max-w-[1260px] mx-auto">
            <p>
              A recommendation from someone you know carries a different kind of value. BLIS takes that timeless idea and gives it a digital infrastructure.
            </p>
            <div className="text-2xl md:text-[30px] font-normal text-black font-['Plus_Jakarta_Sans'] py-0.5">
              Discover <span className="text-[#F047AB]">•</span> Share <span className="text-[#F047AB]">•</span> Connect <span className="text-[#F047AB]">•</span> Grow
            </div>
            <p>
              The goal isn&apos;t to replace relationships with technology. It&apos;s to make those relationships more powerful.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
