'use client';

import { useState } from 'react';
import { ShoppingBag, ArrowLeft, Heart, Share2, ShoppingCart, Star } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: string;
  active: boolean;
}

export default function StoreCatalog({ params }: { params: { slug: string } }) {
  // Decode slug name
  const storeName = params.slug 
    ? params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Local Storefront';

  const defaultProducts: Product[] = [
    { id: 1, name: 'Organic Red Tomatoes', price: '₹370.00', active: true },
    { id: 2, name: 'Fresh Green Broccoli', price: '₹250.00', active: true },
    { id: 3, name: 'Fresh Farm Apples', price: '₹180.00', active: true },
    { id: 4, name: 'Organic Honey jar', price: '₹450.00', active: true },
  ];

  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-['Roboto'] pb-12">
      {/* Store Header */}
      <header className="sticky top-0 bg-white border-b border-slate-100 shadow-sm z-30 transition-all">
        <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#0E76C0]/10 text-[#0E76C0]">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <span className="font-extrabold text-slate-800 text-lg font-['Plus_Jakarta_Sans']">{storeName}</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCartCount(c => c + 1)}
              className="relative p-2 text-slate-600 hover:text-[#0E76C0] transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-[#F047AB] text-white text-[9px] font-black rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
            <Link 
              href="/"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold font-['Plus_Jakarta_Sans'] hover:bg-slate-50 transition-all"
            >
              BLIS Portal
            </Link>
          </div>
        </div>
      </header>

      {/* Main Promo Banner */}
      <section className="bg-gradient-to-r from-[#0E76C0] to-[#0E76C0]/80 py-12 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] font-extrabold tracking-widest bg-white/20 px-3 py-1 rounded-full uppercase">O2O Digital Catalog</span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">Fresh Produce Delivered Fast</h2>
          <p className="text-sm text-white/90 font-light font-['Roboto']">Support local catalog promoters by shopping high-quality organics directly.</p>
        </div>
      </section>

      {/* Products Grid */}
      <main className="max-w-6xl mx-auto px-6 mt-10">
        <h3 className="text-lg font-bold text-slate-700 uppercase tracking-wider mb-6 font-['Plus_Jakarta_Sans']">Catalog Inventory</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {defaultProducts.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              
              {/* Product Visual Placeholder */}
              <div className="h-44 bg-slate-100 flex items-center justify-center relative">
                <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
                  <button className="p-1.5 rounded-full bg-white hover:bg-red-50 text-slate-400 hover:text-red-500 shadow-sm transition-all">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <ShoppingBag className="h-16 w-16 text-slate-300" />
              </div>

              {/* Product Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold mb-1">
                    <Star className="h-3 w-3 fill-amber-500" />
                    <span>4.8</span>
                    <span className="text-slate-400 font-medium">(12 reviews)</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 font-['Plus_Jakarta_Sans']">{p.name}</h4>
                  <p className="text-xs text-slate-500 mt-1 font-['Roboto']">Organically grown without chemical pesticides.</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                  <span className="text-base font-extrabold text-green-600 font-['Plus_Jakarta_Sans']">{p.price}</span>
                  <button 
                    onClick={() => setCartCount(c => c + 1)}
                    className="py-1.5 px-3 rounded-lg bg-[#0E76C0] hover:bg-[#0c66a8] text-white text-xs font-bold transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
