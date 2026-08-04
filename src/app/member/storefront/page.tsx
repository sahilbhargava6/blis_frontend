'use client';

import { useState } from 'react';
import { ShoppingBag, UploadCloud, Tag, Trash2, Check, Globe } from 'lucide-react';

export default function MemberStorefront() {
  const [storeName, setStoreName] = useState('My Local Organics');
  const [description, setDescription] = useState('Fresh farm-sourced veggies delivered to your door step.');
  const [products, setProducts] = useState([
    { id: 1, name: 'Organic Red Tomatoes', price: '$4.50', image: null, active: true },
    { id: 2, name: 'Fresh Green Broccoli', price: '$3.00', image: null, active: true },
  ]);

  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  // Auto-generate slug preview based on store name
  const slugPreview = storeName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  const handleToggleProduct = (id: number) => {
    setProducts(products.map(p => p.id === id ? { ...p, active: !p.active } : p));
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProductName || !newProductPrice) return;
    setProducts([
      ...products,
      {
        id: Date.now(),
        name: newProductName,
        price: '$' + parseFloat(newProductPrice).toFixed(2),
        image: null,
        active: true
      }
    ]);
    setNewProductName('');
    setNewProductPrice('');
  };

  const handleRemoveProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">O2O storefront catalog</h1>
        <p className="text-slate-400 mt-1 text-sm">Configure your local digital catalog storefront and list active products.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Storefront configurations settings form */}
        <div className="glass-panel p-6 rounded-2xl lg:col-span-1 space-y-6">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-emerald-400" />
            Store Settings
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Store Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Short Description</label>
              <textarea
                className="w-full px-4 py-3 rounded-xl glass-input text-sm min-h-[80px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Slug URL auto preview */}
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-2">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-sky-400" />
                Live URL Preview
              </span>
              <p className="text-xs font-mono text-sky-400 break-all select-all">
                http://blis.platform/store/{slugPreview}
              </p>
            </div>
          </form>
        </div>

        {/* Product listing & uploader dropzone */}
        <div className="glass-panel p-6 rounded-2xl lg:col-span-2 space-y-8">
          
          {/* Uploader Form */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Upload Product Item</h3>
            <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Product Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Red Tomatoes"
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Price (USD)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="e.g. 4.50"
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                    value={newProductPrice}
                    onChange={(e) => setNewProductPrice(e.target.value)}
                  />
                </div>
              </div>

              {/* Mock dragzone drop uploader box */}
              <div className="border-2 border-dashed border-white/10 hover:border-emerald-500/25 rounded-2xl flex flex-col items-center justify-center p-6 text-center transition cursor-pointer">
                <UploadCloud className="h-8 w-8 text-slate-400 mb-2" />
                <p className="text-xs font-bold text-slate-300">Drag & Drop Image</p>
                <p className="text-[10px] text-slate-500 mt-1">PNG, JPG up to 2MB</p>
              </div>

              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm cursor-pointer shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
                >
                  Upload & List Product
                </button>
              </div>
            </form>
          </div>

          {/* Product Grid Toggles */}
          <div className="space-y-4 pt-6 border-t border-white/5">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Catalog Inventory</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                      <Tag className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{p.name}</p>
                      <p className="text-xs font-extrabold text-emerald-400 mt-0.5">{p.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleToggleProduct(p.id)}
                      className={`w-11 h-5.5 rounded-full transition-all duration-300 relative border cursor-pointer ${
                        p.active ? 'bg-emerald-500 border-emerald-400' : 'bg-slate-800 border-slate-700'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full bg-white absolute top-0.5 transition-all ${
                        p.active ? 'left-6' : 'left-0.5'
                      }`}></span>
                    </button>
                    <button
                      onClick={() => handleRemoveProduct(p.id)}
                      className="p-1 rounded hover:bg-rose-500/15 text-slate-500 hover:text-rose-400 transition cursor-pointer"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
