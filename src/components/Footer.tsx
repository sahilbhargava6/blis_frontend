'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#FAFAFA] text-slate-800 overflow-hidden border-t border-slate-100 font-['Roboto']">
      
      {/* Top CTA Strip */}
      <div className="bg-gradient-to-r from-[#F047AB] to-[#0E76C0] py-8 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Ready to scale your affiliate revenue?
            </h3>
            <p className="text-white/80 text-sm mt-1 font-['Roboto']">
              Join 3,200+ affiliates already earning with Blis.
            </p>
          </div>
          <Link
            href="/login"
            className="flex-shrink-0 px-8 py-3 rounded-full bg-white text-[#0a0a0a] font-bold text-sm font-['Plus_Jakarta_Sans'] hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get Started Free
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <span className="text-4xl font-bold tracking-wider font-['Plus_Jakarta_Sans'] bg-gradient-to-r from-[#F047AB] to-[#0E76C0] bg-clip-text text-transparent">
              BLIS
            </span>
            <p className="text-sm text-slate-500 leading-relaxed font-['Roboto'] max-w-xs">
              Geomarket multi-tier affiliate distributions & O2O digital storefront builder networks. Powering the next generation of partner-led growth.
            </p>
            {/* Social Icons Row */}
            <div className="flex gap-4 pt-2">
              {['X', 'In', 'Ig', 'Yt'].map((icon) => (
                <div key={icon} className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 hover:bg-[#F047AB]/10 hover:text-[#F047AB] hover:border-[#F047AB]/30 transition-all duration-300 cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-[#F047AB] uppercase tracking-[0.2em] mb-5 font-['Plus_Jakarta_Sans']">Resources</h4>
            <ul className="space-y-3">
              {[
                { name: 'Access the Affiliate Portal', href: '/login' },
                { name: 'Campaign Guidelines', href: '/#campaigns' },
                { name: 'S2S Webhook Integration', href: '#' },
                { name: 'API Documentation', href: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-slate-800 hover:translate-x-1 inline-block transition-all duration-300 font-['Roboto']">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-[#F047AB] uppercase tracking-[0.2em] mb-5 font-['Plus_Jakarta_Sans']">Platform</h4>
            <ul className="space-y-3">
              {['Pricing & Ratios', 'Fraud ESCROW Safety', 'O2O Store Slugs', 'Partner Dashboard'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-slate-800 hover:translate-x-1 inline-block transition-all duration-300 font-['Roboto']">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-[#F047AB] uppercase tracking-[0.2em] mb-5 font-['Plus_Jakarta_Sans']">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Careers', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Contact', href: '/#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-slate-800 hover:translate-x-1 inline-block transition-all duration-300 font-['Roboto']">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold text-[#F047AB] uppercase tracking-[0.2em] mb-5 font-['Plus_Jakarta_Sans']">Legal</h4>
            <ul className="space-y-3">
              {['Terms of Use', 'Privacy Policy', 'Anti-Fraud Disclosures', 'Cookie Settings'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-slate-400 hover:text-slate-800 hover:translate-x-1 inline-block transition-all duration-300 font-['Roboto']">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400 font-['Roboto']">
            &copy; 2026 BLIS Platform Inc. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F047AB] animate-pulse"></span>
            <span className="text-xs text-slate-400 font-['Roboto']">
              Made for affiliate marketing networks globally.
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
