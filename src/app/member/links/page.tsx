'use client';

import { useState } from 'react';
import { Share2, Copy, Check, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';

export default function MemberLinks() {
  const [selectedCampaign, setSelectedCampaign] = useState('1');
  const [customParams, setCustomParams] = useState('');
  const [generatedLink, setGeneratedLink] = useState('http://localhost:8000/api/v1/track/click/amazon_electronics_promo_usr_5');
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const mockHash = selectedCampaign === '1' ? 'amazon_promo' : selectedCampaign === '2' ? 'hostinger_hosting' : 'canva_pro';
    const paramsQuery = customParams ? '?source=' + encodeURIComponent(customParams) : '';
    setGeneratedLink(`http://localhost:8000/api/v1/track/click/${mockHash}_usr_5${paramsQuery}`);
    setCopied(false);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join my BLIS Affiliate Offer',
        text: 'Check out this awesome product promo link!',
        url: generatedLink,
      }).catch(err => console.log(err));
    } else {
      alert('Native sharing is not fully supported on this desktop browser. Please copy the link instead!');
    }
  };

  const handleWhatsAppShare = () => {
    const text = `Hey, check this out! ${generatedLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 font-['Plus_Jakarta_Sans']">Affiliate Link Generator</h1>
        <p className="text-slate-500 mt-1 text-sm font-semibold font-['Roboto']">Customize tracking anchors and share links instantly to your social channels.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Link Generator settings Card */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-6 flex items-center gap-2 font-['Plus_Jakarta_Sans']">
            <Sparkles className="h-4 w-4 text-[#0E76C0]" />
            Generator Tool
          </h3>
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-650 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">Select Campaign</label>
              <select
                value={selectedCampaign}
                onChange={(e) => setSelectedCampaign(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-205 text-sm text-slate-850 focus:border-[#0E76C0] outline-none transition-all font-['Roboto']"
              >
                <option value="1">Amazon Electronics Promo</option>
                <option value="2">Hostinger Cloud Web Hosting</option>
                <option value="3">Canva Pro Annual Subscriptions</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-650 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">Custom Channel Tag (Optional)</label>
              <input
                type="text"
                placeholder="e.g. instagram_bio, whatsapp_group"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-205 text-sm text-slate-850 focus:border-[#0E76C0] outline-none transition-all font-['Roboto']"
                value={customParams}
                onChange={(e) => setCustomParams(e.target.value)}
              />
              <p className="text-[10px] text-slate-450 mt-1.5 font-['Roboto']">Appends channel tracking parameters for traffic segmentation.</p>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-[#0E76C0] hover:bg-[#0c66a8] text-white font-bold text-sm cursor-pointer shadow-md shadow-[#0E76C0]/20 active:scale-95 transition-all font-['Plus_Jakarta_Sans']"
            >
              Generate Unique Link
            </button>
          </form>
        </div>

        {/* Share Box panel */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider font-['Plus_Jakarta_Sans']">Your Tracking Link</h3>
            
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-mono text-xs text-[#0E76C0] font-semibold break-all select-all">
              {generatedLink}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCopyToClipboard}
                className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 cursor-pointer border border-slate-200 transition-all font-['Plus_Jakarta_Sans']"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-600" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Link
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="space-y-2 mt-6 pt-6 border-t border-slate-100">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2 font-['Plus_Jakarta_Sans']">Quick Share Channels</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleWhatsAppShare}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-green-50 hover:bg-green-100 border border-green-200 text-xs font-bold text-green-600 cursor-pointer transition-all font-['Plus_Jakarta_Sans']"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </button>
              <button
                onClick={handleNativeShare}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#0E76C0]/10 hover:bg-[#0E76C0]/20 border border-[#0E76C0]/20 text-xs font-bold text-[#0E76C0] cursor-pointer transition-all font-['Plus_Jakarta_Sans']"
              >
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
