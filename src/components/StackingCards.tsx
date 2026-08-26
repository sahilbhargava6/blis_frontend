'use client';

export default function StackingCards() {
  return (
    <div className="w-full max-w-[1780px] mx-auto px-4 md:px-12 my-12 space-y-16">
      
      {/* Card 1: The gap. The problem. */}
      <div className="sticky top-24 z-10 w-full bg-[#F0F3F9] border-2 border-[#0E76C0] rounded-[15px] p-8 md:p-12 text-center space-y-6 shadow-xl transition-all duration-300">
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

      {/* Card 2: What is BLIS? (Slides up and stacks over Card 1) */}
      <div className="sticky top-28 z-20 w-full bg-[#F0F3F9] border-2 border-[#F047AB] rounded-[15px] p-8 md:p-12 text-center space-y-6 shadow-2xl transition-all duration-300">
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

      {/* Card 3: The big idea (Slides up and stacks over Card 2) */}
      <div className="sticky top-32 z-30 w-full bg-[#F0F3F9] border-2 border-[#0E76C0] rounded-[15px] p-8 md:p-12 text-center space-y-6 shadow-2xl transition-all duration-300">
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
  );
}
