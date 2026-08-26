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
      // Pin the section wrapper while physically scrubbing compact entering cards that settle into place
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top+=110',
          end: '+=1800',
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress < 0.35) setActiveCard(0);
            else if (self.progress < 0.70) setActiveCard(1);
            else setActiveCard(2);
          }
        }
      });

      // Card 2 Box: Enters slightly larger (scale 1.05), slides UP over Card 1, then settles to scale 1.0
      gsap.set(card2Ref.current, { yPercent: 110, scale: 1.05, zIndex: 20 });
      tl.to(card2Ref.current, {
        yPercent: 0,
        scale: 1.03,
        duration: 0.7,
        ease: 'power2.out'
      })
      .to(card2Ref.current, {
        scale: 1.0,
        duration: 0.3,
        ease: 'power1.inOut'
      });

      // Card 3 Box: Enters slightly larger (scale 1.05), slides UP over Card 2, then settles to scale 1.0
      gsap.set(card3Ref.current, { yPercent: 110, scale: 1.05, zIndex: 30 });
      tl.to(card3Ref.current, {
        yPercent: 0,
        scale: 1.03,
        duration: 0.7,
        ease: 'power2.out'
      })
      .to(card3Ref.current, {
        scale: 1.0,
        duration: 0.3,
        ease: 'power1.inOut'
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
    <div ref={containerRef} className="w-full max-w-[1440px] mx-auto px-4 md:px-12 py-2 my-2">
      
      {/* Reduced Height Outer Card Deck Viewport */}
      <div className="relative h-[460px] md:h-[400px] w-full rounded-[15px]">
        
        {/* Navigation Control Tabs */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 md:gap-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-slate-200">
          {[
            { title: '1. The gap & problem', index: 0 },
            { title: '2. What is BLIS?', index: 1 },
            { title: '3. The big idea', index: 2 }
          ].map((tab) => (
            <button
              key={tab.index}
              onClick={() => selectCard(tab.index)}
              className={`px-3 py-1 rounded-full text-xs md:text-sm font-bold transition-all ${
                activeCard === tab.index
                  ? 'bg-[#0E76C0] text-white shadow-sm scale-105'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Card 1 Box: The gap. The problem. */}
        <div 
          ref={card1Ref}
          className="absolute inset-0 w-full h-full bg-[#F0F3F9] border-2 border-[#0E76C0] rounded-[15px] p-6 md:p-8 text-center space-y-3 flex flex-col justify-center shadow-xl z-10"
        >
          <h2 className="text-2xl md:text-[30px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-tight pt-4">
            The <span className="text-[#F047AB]">gap.</span> The <span className="text-[#F047AB]">problem.</span>
          </h2>
          <p className="text-lg md:text-[24px] text-black font-normal leading-snug font-['Roboto']">
            The internet made <span className="text-[#B98776] italic font-medium">selling easier.</span> It didn&apos;t make it more <span className="text-[#B98776] italic font-medium">personal.</span>
          </p>
          <p className="text-base md:text-[20px] text-black font-light leading-relaxed font-['Roboto'] max-w-[1100px] mx-auto">
            Affiliate marketing has made it possible for anyone to recommend products and earn from their influence. But somewhere along the way, the human connection got lost — people trust people, not endless links and advertisements. Local communities already have something powerful: trust, relationships, and word-of-mouth. BLIS brings that human element back into digital commerce.
          </p>
        </div>

        {/* Card 2 Box: What is BLIS? */}
        <div
          ref={card2Ref}
          className="absolute inset-0 w-full h-full bg-[#F0F3F9] border-2 border-[#F047AB] rounded-[15px] p-6 md:p-8 text-center space-y-3 flex flex-col justify-center shadow-2xl z-20"
        >
          <h2 className="text-2xl md:text-[30px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-tight pt-4">
            What is <span className="text-[#0E76C0]">BLIS</span>?
          </h2>
          <p className="text-lg md:text-[24px] text-black font-normal leading-snug font-['Roboto']">
            Where digital affiliate marketing <span className="text-[#B98776] italic font-medium">meets local trust.</span>
          </p>
          <div className="space-y-2 text-base md:text-[20px] text-black font-light leading-relaxed font-['Roboto'] max-w-[1100px] mx-auto">
            <p>
              BLIS is a community-first affiliate and referral platform designed to bring together digital opportunities and real-world networks. Instead of relying only on algorithms, ads, and anonymous audiences, BLIS helps people grow through structured communities, trusted referrals, and shared opportunities.
            </p>
            <p>
              Our approach combines the scalability of technology with something technology can&apos;t replace — human connection.
            </p>
          </div>
        </div>

        {/* Card 3 Box: The big idea */}
        <div
          ref={card3Ref}
          className="absolute inset-0 w-full h-full bg-[#F0F3F9] border-2 border-[#0E76C0] rounded-[15px] p-6 md:p-8 text-center space-y-3 flex flex-col justify-center shadow-2xl z-30"
        >
          <h2 className="text-2xl md:text-[30px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-tight pt-4">
            The <span className="text-[#F047AB]">big idea</span>
          </h2>
          <p className="text-lg md:text-[24px] text-black font-normal leading-snug font-['Roboto']">
            We&apos;re redefining word-of-mouth <span className="text-[#B98776] italic font-medium">for the modern economy.</span>
          </p>
          <div className="space-y-2 text-base md:text-[20px] text-black font-light leading-relaxed font-['Roboto'] max-w-[1100px] mx-auto">
            <p>
              A recommendation from someone you know carries a different kind of value. BLIS takes that timeless idea and gives it a digital infrastructure.
            </p>
            <div className="text-xl md:text-[26px] font-normal text-black font-['Plus_Jakarta_Sans'] py-0.5">
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
