'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function BannerScrollBanners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const banner1Ref = useRef<HTMLDivElement>(null);
  const banner2Ref = useRef<HTMLDivElement>(null);
  const banner3Ref = useRef<HTMLDivElement>(null);
  const banner4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Banner 1: Slides from Left to Right
      if (banner1Ref.current) {
        gsap.fromTo(
          banner1Ref.current,
          { xPercent: -100, opacity: 0.3 },
          {
            xPercent: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: banner1Ref.current,
              start: 'top bottom-=50',
              end: 'top center+=100',
              scrub: 0.5
            }
          }
        );
      }

      // Banner 2: Slides from Right to Left
      if (banner2Ref.current) {
        gsap.fromTo(
          banner2Ref.current,
          { xPercent: 100, opacity: 0.3 },
          {
            xPercent: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: banner2Ref.current,
              start: 'top bottom-=50',
              end: 'top center+=100',
              scrub: 0.5
            }
          }
        );
      }

      // Banner 3: Slides from Left to Right
      if (banner3Ref.current) {
        gsap.fromTo(
          banner3Ref.current,
          { xPercent: -100, opacity: 0.3 },
          {
            xPercent: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: banner3Ref.current,
              start: 'top bottom-=50',
              end: 'top center+=100',
              scrub: 0.5
            }
          }
        );
      }

      // Banner 4: Slides from Right to Left
      if (banner4Ref.current) {
        gsap.fromTo(
          banner4Ref.current,
          { xPercent: 100, opacity: 0.3 },
          {
            xPercent: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: banner4Ref.current,
              start: 'top bottom-=50',
              end: 'top center+=100',
              scrub: 0.5
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col overflow-hidden w-full">
      {/* Banner 1 (Pink - Left to Right) */}
      <div 
        ref={banner1Ref}
        className="w-full min-h-[190px] bg-[#F047AB]/20 border-t border-b border-[#F047AB] px-6 md:px-24 flex items-center"
      >
        <div className="max-w-[1260px] mx-auto w-full flex justify-start">
          <div className="text-left w-full space-y-1">
            <h3 className="text-2xl md:text-[32px] font-bold text-black font-['Roboto'] leading-[38px]">
              Discover and share
            </h3>
            <p className="text-xl md:text-[28px] text-black font-light font-['Roboto'] leading-[36px] max-w-4xl">
              Find campaigns worth recommending and share them through your network.
            </p>
          </div>
        </div>
      </div>

      {/* Banner 2 (Blue - Right to Left) */}
      <div 
        ref={banner2Ref}
        className="w-full min-h-[190px] bg-[#0E76C0]/20 border-b border-[#0E76C0] px-6 md:px-24 flex items-center"
      >
        <div className="max-w-[1260px] mx-auto w-full flex justify-end">
          <div className="text-right w-full flex flex-col items-end space-y-1">
            <h3 className="text-2xl md:text-[32px] font-bold text-black font-['Roboto'] leading-[38px]">
              Build local chapters
            </h3>
            <p className="text-xl md:text-[28px] text-black font-light font-['Roboto'] leading-[36px] max-w-4xl">
              Create and participate in structured community groups close to home.
            </p>
          </div>
        </div>
      </div>

      {/* Banner 3 (Pink - Left to Right) */}
      <div 
        ref={banner3Ref}
        className="w-full min-h-[190px] bg-[#F047AB]/20 border-b border-[#F047AB] px-6 md:px-24 flex items-center"
      >
        <div className="max-w-[1260px] mx-auto w-full flex justify-start">
          <div className="text-left w-full space-y-1">
            <h3 className="text-2xl md:text-[32px] font-bold text-black font-['Roboto'] leading-[38px]">
              Your own storefront
            </h3>
            <p className="text-xl md:text-[28px] text-black font-light font-['Roboto'] leading-[36px] max-w-4xl">
              A digital storefront that connects your recommendations with customers.
            </p>
          </div>
        </div>
      </div>

      {/* Banner 4 (Blue - Right to Left) */}
      <div 
        ref={banner4Ref}
        className="w-full min-h-[190px] bg-[#0E76C0]/20 border-b border-[#0E76C0] px-6 md:px-24 flex items-center"
      >
        <div className="max-w-[1260px] mx-auto w-full flex justify-end">
          <div className="text-right w-full flex flex-col items-end space-y-1">
            <h3 className="text-2xl md:text-[32px] font-bold text-black font-['Roboto'] leading-[38px]">
              Beyond the click
            </h3>
            <p className="text-xl md:text-[28px] text-black font-light font-['Roboto'] leading-[36px] max-w-4xl">
              Take commerce beyond links and into genuine customer conversations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
