'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function StackingCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const card2ContentRef = useRef<HTMLDivElement>(null);
  const card3ContentRef = useRef<HTMLDivElement>(null);

  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !card2Ref.current || !card3Ref.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial GSAP setup matching Jhey Tompkins' clipPath ellipse unclipping
      gsap.set(card2Ref.current, {
        clipPath: 'ellipse(220% 200% at 50% 300%)',
        zIndex: 20
      });

      gsap.set(card3Ref.current, {
        clipPath: 'ellipse(220% 200% at 50% 300%)',
        zIndex: 30
      });

      if (card2ContentRef.current) {
        gsap.set(card2ContentRef.current, { yPercent: 40, opacity: 0 });
      }

      if (card3ContentRef.current) {
        gsap.set(card3ContentRef.current, { yPercent: 40, opacity: 0 });
      }

      // 2. Animate Card 2 unclipping & text sliding in over Card 1
      gsap.to(card2Ref.current, {
        clipPath: 'ellipse(220% 200% at 50% 175%)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top+=100',
          end: 'top top+=400',
          scrub: 0.5,
          onUpdate: (self) => {
            if (self.progress > 0.15 && self.progress < 0.6) {
              setActiveCard(1);
            } else if (self.progress <= 0.15) {
              setActiveCard(0);
            }
          }
        }
      });

      if (card2ContentRef.current) {
        gsap.to(card2ContentRef.current, {
          yPercent: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top+=120',
            end: 'top top+=380',
            scrub: 0.5
          }
        });
      }

      // 3. Animate Card 3 unclipping & text sliding in over Card 2
      gsap.to(card3Ref.current, {
        clipPath: 'ellipse(220% 200% at 50% 175%)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top+=500',
          end: 'top top+=800',
          scrub: 0.5,
          onUpdate: (self) => {
            if (self.progress >= 0.6) {
              setActiveCard(2);
            }
          }
        }
      });

      if (card3ContentRef.current) {
        gsap.to(card3ContentRef.current, {
          yPercent: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top+=520',
            end: 'top top+=780',
            scrub: 0.5
          }
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;

    let offset = 0;
    if (index === 1) offset = 250;
    if (index === 2) offset = 650;

    window.scrollTo({
      top: containerTop + offset,
      behavior: 'smooth'
    });
  };

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full max-w-[1780px] mx-auto px-4 md:px-12 my-8">
      
      {/* Sticky Viewport Container */}
      <div className="sticky top-24 h-[600px] md:h-[540px] w-full rounded-[15px] shadow-2xl overflow-hidden bg-slate-50 border border-slate-200">
        
        {/* Navigation Tabs */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-slate-200">
          {[
            { title: '1. The gap & problem', index: 0 },
            { title: '2. What is BLIS?', index: 1 },
            { title: '3. The big idea', index: 2 }
          ].map((tab) => (
            <button
              key={tab.index}
              onClick={() => scrollToCard(tab.index)}
              className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-bold transition-all ${
                activeCard === tab.index
                  ? 'bg-[#0E76C0] text-white shadow-sm scale-105'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Card 1: The gap. The problem. */}
        <div 
          ref={card1Ref}
          className="absolute inset-0 w-full h-full bg-[#F0F3F9] border-2 border-[#0E76C0] rounded-[15px] p-8 md:p-12 text-center space-y-6 flex flex-col justify-center shadow-xl z-10"
        >
          <h2 className="text-3xl md:text-[36px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-[45px] pt-6">
            The <span className="text-[#F047AB]">gap.</span> The <span className="text-[#F047AB]">problem.</span>
          </h2>
          <p className="text-2xl md:text-[32px] text-black font-normal leading-[38px] font-['Roboto']">
            The internet made <span className="text-[#B98776] italic font-medium">selling easier.</span> It didn&apos;t make it more <span className="text-[#B98776] italic font-medium">personal.</span>
          </p>
          <p className="text-xl md:text-[28px] lg:text-[32px] text-black font-light leading-relaxed md:leading-[38px] font-['Roboto'] max-w-[1260px] mx-auto">
            Affiliate marketing has made it possible for anyone to recommend products and earn from their influence. But somewhere along the way, the human connection got lost — people trust people, not endless links and advertisements. Local communities already have something powerful: trust, relationships, and word-of-mouth. BLIS brings that human element back into digital commerce.
          </p>
        </div>

        {/* Card 2: What is BLIS? (GSAP Ellipse Unclip reveal over Card 1) */}
        <div
          ref={card2Ref}
          className="absolute inset-0 w-full h-full bg-[#F0F3F9] border-2 border-[#F047AB] rounded-[15px] p-8 md:p-12 text-center shadow-2xl flex flex-col justify-center"
        >
          <div ref={card2ContentRef} className="space-y-6 flex flex-col justify-center">
            <h2 className="text-3xl md:text-[36px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-[45px] pt-6">
              What is <span className="text-[#0E76C0]">BLIS</span>?
            </h2>
            <p className="text-2xl md:text-[32px] text-black font-normal leading-[38px] font-['Roboto']">
              Where digital affiliate marketing <span className="text-[#B98776] italic font-medium">meets local trust.</span>
            </p>
            <div className="space-y-4 text-xl md:text-[28px] lg:text-[32px] text-black font-light leading-relaxed md:leading-[38px] font-['Roboto'] max-w-[1260px] mx-auto">
              <p>
                BLIS is a community-first affiliate and referral platform designed to bring together digital opportunities and real-world networks. Instead of relying only on algorithms, ads, and anonymous audiences, BLIS helps people grow through structured communities, trusted referrals, and shared opportunities.
              </p>
              <p>
                Our approach combines the scalability of technology with something technology can&apos;t replace — human connection.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: The big idea (GSAP Ellipse Unclip reveal over Card 2) */}
        <div
          ref={card3Ref}
          className="absolute inset-0 w-full h-full bg-[#F0F3F9] border-2 border-[#0E76C0] rounded-[15px] p-8 md:p-12 text-center shadow-2xl flex flex-col justify-center"
        >
          <div ref={card3ContentRef} className="space-y-6 flex flex-col justify-center">
            <h2 className="text-3xl md:text-[36px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-[45px] pt-6">
              The <span className="text-[#F047AB]">big idea</span>
            </h2>
            <p className="text-2xl md:text-[32px] text-black font-normal leading-[38px] font-['Roboto']">
              We&apos;re redefining word-of-mouth <span className="text-[#B98776] italic font-medium">for the modern economy.</span>
            </p>
            <div className="space-y-3 text-xl md:text-[26px] lg:text-[30px] text-black font-light leading-relaxed md:leading-[36px] font-['Roboto'] max-w-[1260px] mx-auto">
              <p>
                A recommendation from someone you know carries a different kind of value. BLIS takes that timeless idea and gives it a digital infrastructure.
              </p>
              <div className="text-2xl md:text-[36px] font-normal text-black font-['Plus_Jakarta_Sans'] py-1">
                Discover <span className="text-[#F047AB]">•</span> Share <span className="text-[#F047AB]">•</span> Connect <span className="text-[#F047AB]">•</span> Grow
              </div>
              <p>
                The goal isn&apos;t to replace relationships with technology. It&apos;s to make those relationships more powerful.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
