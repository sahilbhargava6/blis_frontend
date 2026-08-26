'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function StackingCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !card1Ref.current || !card2Ref.current || !card3Ref.current) return;

    const ctx = gsap.context(() => {
      // 60fps GSAP Pinning Timeline (No React re-renders during scroll)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top+=90',
          end: '+=1600',
          pin: true,
          scrub: 0.1,
          anticipatePin: 1
        }
      });

      // Card 1 base
      gsap.set(card1Ref.current, { scale: 0.96, zIndex: 10 });

      // Card 2 Box: Hidden initially, slides UP from bottom & overlays Card 1
      gsap.set(card2Ref.current, { yPercent: 120, opacity: 0, scale: 1.02, zIndex: 20 });
      tl.to(card2Ref.current, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'none'
      });

      // Card 3 Box: Hidden initially, slides UP from bottom & overlays Card 2
      gsap.set(card3Ref.current, { yPercent: 120, opacity: 0, scale: 1.06, zIndex: 30 });
      tl.to(card3Ref.current, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'none'
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-[1540px] mx-auto px-4 md:px-12 py-4 my-4">
      
      {/* Outer Card Deck Viewport Frame */}
      <div className="relative h-[520px] md:h-[460px] w-full rounded-[15px] shadow-2xl overflow-hidden">

        {/* Card 1 Box: The gap. The problem. */}
        <div 
          ref={card1Ref}
          className="absolute inset-0 w-full h-full bg-[#F0F3F9] border-2 border-[#0E76C0] rounded-[15px] p-8 md:p-12 text-center space-y-4 flex flex-col justify-center shadow-xl z-10"
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

        {/* Card 2 Box: What is BLIS? (Slides UP over Card 1) */}
        <div
          ref={card2Ref}
          className="absolute inset-0 w-full h-full bg-[#F0F3F9] border-2 border-[#F047AB] rounded-[15px] p-8 md:p-12 text-center space-y-4 flex flex-col justify-center shadow-2xl z-20"
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

        {/* Card 3 Box: The big idea (Slides UP over Card 2) */}
        <div
          ref={card3Ref}
          className="absolute inset-0 w-full h-full bg-[#F0F3F9] border-2 border-[#0E76C0] rounded-[15px] p-8 md:p-12 text-center space-y-4 flex flex-col justify-center shadow-2xl z-30"
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
