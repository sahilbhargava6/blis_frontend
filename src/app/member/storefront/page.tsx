'use client';

import { useState, useRef } from 'react';
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
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    setUploadedFileName('');
  };

  const handleRemoveProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Drag and drop event handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setUploadedFileName(file.name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFileName(file.name);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-8 max-w-5xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 font-['Plus_Jakarta_Sans']">O2O Storefront Catalog</h1>
        <p className="text-slate-500 mt-1 text-sm font-semibold font-['Roboto']">Configure your local digital catalog storefront and list active products.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Storefront configurations settings form */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm lg:col-span-1 space-y-6">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2 font-['Plus_Jakarta_Sans']">
            <ShoppingBag className="h-4 w-4 text-[#0E76C0]" />
            Store Settings
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-650 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">Store Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-205 text-sm text-slate-850 focus:border-[#0E76C0] outline-none transition-all font-['Roboto']"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-650 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">Short Description</label>
              <textarea
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-205 text-sm text-slate-850 focus:border-[#0E76C0] outline-none transition-all font-['Roboto'] min-h-[80px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Slug URL auto preview */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 font-['Plus_Jakarta_Sans']">
                <Globe className="h-3.5 w-3.5 text-[#0E76C0]" />
                Live URL Preview
              </span>
              <p className="text-xs font-mono text-[#0E76C0] break-all select-all font-semibold">
                https://blisfrontend.vercel.app/store/{slugPreview}
              </p>
            </div>
          </form>
        </div>

        {/* Product listing & uploader dropzone */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm lg:col-span-2 space-y-8">
          
          {/* Uploader Form */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Upload Product Item</h3>
            <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-650 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">Product Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Red Tomatoes"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-205 text-sm text-slate-850 focus:border-[#0E76C0] outline-none transition-all font-['Roboto']"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-650 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">Price (USD)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="e.g. 4.50"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-205 text-sm text-slate-850 focus:border-[#0E76C0] outline-none transition-all font-['Roboto']"
                    value={newProductPrice}
                    onChange={(e) => setNewProductPrice(e.target.value)}
                  />
                </div>
              </div>

              {/* Dragzone drop uploader box */}
              <div 
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={triggerFileInput}
                className={`border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-6 text-center transition cursor-pointer ${
                  dragActive 
                    ? 'border-[#0E76C0] bg-[#0E76C0]/5' 
                    : 'border-slate-200 hover:border-[#0E76C0]/35 bg-slate-50/50 hover:bg-slate-50'
                }`}
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <UploadCloud className="h-8 w-8 text-slate-400 mb-2 animate-pulse" />
                <p className="text-xs font-bold text-slate-700 font-['Plus_Jakarta_Sans']">
                  {uploadedFileName ? 'Selected:' : 'Drag & Drop Image'}
                </p>
                <p className="text-[10px] text-slate-500 mt-1 font-semibold font-['Roboto'] max-w-[180px] truncate">
                  {uploadedFileName ? uploadedFileName : 'PNG, JPG up to 2MB'}
                </p>
              </div>

              <div className="md:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#0E76C0] hover:bg-[#0c66a8] text-white font-bold text-sm cursor-pointer shadow-md shadow-[#0E76C0]/20 active:scale-95 transition-all font-['Plus_Jakarta_Sans']"
                >
                  Upload & List Product
                </button>
              </div>
            </form>
          </div>

          {/* Product Grid Toggles */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Catalog Inventory</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#0E76C0]/10 text-[#0E76C0] border border-[#0E76C0]/10">
                      <Tag className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 font-['Plus_Jakarta_Sans']">{p.name}</p>
                      <p className="text-xs font-extrabold text-green-600 mt-0.5 font-['Plus_Jakarta_Sans']">{p.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleToggleProduct(p.id)}
                      className={`w-11 h-5.5 rounded-full transition-all duration-300 relative border cursor-pointer ${
                        p.active ? 'bg-green-500 border-green-400' : 'bg-slate-200 border-slate-300'
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-full bg-white absolute top-0.5 transition-all ${
                        p.active ? 'left-6' : 'left-0.5'
                      }`}></span>
                    </button>
                    <button
                      onClick={() => handleRemoveProduct(p.id)}
                      className="p-1 rounded hover:bg-red-50 text-slate-400 hover:text-red-500 transition cursor-pointer"
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
