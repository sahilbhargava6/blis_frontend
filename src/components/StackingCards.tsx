'use client';

import { useState, useEffect, useRef } from 'react';

export default function StackingCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - windowHeight;
      if (totalScrollableDistance <= 0) return;
      
      const currentScroll = Math.max(0, -rect.top);
      const progress = Math.min(1, Math.max(0, currentScroll / totalScrollableDistance));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Card 2 slides up between scroll progress 0.20 and 0.50
  const card2Offset = Math.max(0, Math.min(100, (0.50 - scrollProgress) / 0.30 * 100));
  // Card 3 slides up between scroll progress 0.55 and 0.85
  const card3Offset = Math.max(0, Math.min(100, (0.85 - scrollProgress) / 0.30 * 100));

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full max-w-[1780px] mx-auto px-4 md:px-12 my-12">
      {/* Sticky Viewport */}
      <div className="sticky top-28 h-[640px] md:h-[580px] w-full overflow-hidden rounded-[15px] shadow-2xl">
        
        {/* Card 1: The gap. The problem. */}
        <div className="absolute inset-0 w-full h-full bg-[#F0F3F9]/90 backdrop-blur-md rounded-[15px] p-8 md:p-12 border-2 border-[#0E76C0] shadow-xl flex flex-col justify-center text-center space-y-6">
          <h2 className="text-3xl md:text-[36px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-[45px]">
            The <span className="text-[#F047AB]">gap.</span> The <span className="text-[#F047AB]">problem.</span>
          </h2>

          <p className="text-2xl md:text-[32px] text-black font-normal leading-[38px] font-['Roboto']">
            The internet made <span className="text-[#B98776] italic font-medium">selling easier.</span> It didn&apos;t make it more <span className="text-[#B98776] italic font-medium">personal.</span>
          </p>

          <p className="text-xl md:text-[32px] text-black font-light leading-relaxed md:leading-[38px] font-['Roboto'] max-w-[1260px] mx-auto">
            Affiliate marketing has made it possible for anyone to recommend products and earn from their influence. But somewhere along the way, the human connection got lost — people trust people, not endless links and advertisements. Local communities already have something powerful: trust, relationships, and word-of-mouth. BLIS brings that human element back into digital commerce.
          </p>
        </div>

        {/* Card 2: What is BLIS? (Slides up from bottom over Card 1) */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#F0F3F9]/95 backdrop-blur-md rounded-[15px] p-8 md:p-12 border-2 border-[#F047AB] shadow-2xl flex flex-col justify-center text-center space-y-6 transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${card2Offset}%)` }}
        >
          <h2 className="text-3xl md:text-[36px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-[45px]">
            What is <span className="text-[#0E76C0]">BLIS</span>?
          </h2>

          <p className="text-2xl md:text-[32px] text-black font-normal leading-[38px] font-['Roboto']">
            Where digital affiliate marketing <span className="text-[#B98776] italic font-medium">meets local trust.</span>
          </p>

          <div className="space-y-4 text-xl md:text-[32px] text-black font-light leading-relaxed md:leading-[38px] font-['Roboto'] max-w-[1260px] mx-auto">
            <p>
              BLIS is a community-first affiliate and referral platform designed to bring together digital opportunities and real-world networks. Instead of relying only on algorithms, ads, and anonymous audiences, BLIS helps people grow through structured communities, trusted referrals, and shared opportunities.
            </p>
            <p>
              Our approach combines the scalability of technology with something technology can&apos;t replace — human connection.
            </p>
          </div>
        </div>

        {/* Card 3: The big idea (Slides up from bottom over Card 2) */}
        <div 
          className="absolute inset-0 w-full h-full bg-[#F0F3F9]/95 backdrop-blur-md rounded-[15px] p-8 md:p-12 border-2 border-[#0E76C0] shadow-2xl flex flex-col justify-center text-center space-y-6 transition-transform duration-75 ease-out"
          style={{ transform: `translateY(${card3Offset}%)` }}
        >
          <h2 className="text-3xl md:text-[36px] font-bold font-['Plus_Jakarta_Sans'] text-black leading-[45px]">
            The <span className="text-[#F047AB]">big idea</span>
          </h2>

          <p className="text-2xl md:text-[32px] text-black font-normal leading-[38px] font-['Roboto']">
            We&apos;re redefining word-of-mouth <span className="text-[#B98776] italic font-medium">for the modern economy.</span>
          </p>

          <div className="space-y-4 text-xl md:text-[32px] text-black font-light leading-relaxed md:leading-[38px] font-['Roboto'] max-w-[1260px] mx-auto">
            <p>
              A recommendation from someone you know carries a different kind of value. BLIS takes that timeless idea and gives it a digital infrastructure.
            </p>

            {/* Highlighted Row */}
            <div className="text-2xl md:text-[40px] font-normal text-black font-['Plus_Jakarta_Sans'] py-1">
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
