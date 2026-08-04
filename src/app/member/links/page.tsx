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
      // Fallback
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
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Affiliate Link Generator</h1>
        <p className="text-slate-400 mt-1 text-sm">Customize tracking anchors and share links instantly to your social channels.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Link Generator settings Card */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-sky-400" />
            Generator Tool
          </h3>
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Select Campaign</label>
              <select
                value={selectedCampaign}
                onChange={(e) => setSelectedCampaign(e.target.value)}
                className="w-full px-4 py-3 rounded-xl glass-input text-sm"
              >
                <option value="1">Amazon Electronics Promo</option>
                <option value="2">Hostinger Cloud Web Hosting</option>
                <option value="3">Canva Pro Annual Subscriptions</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Custom Channel Tag (Optional)</label>
              <input
                type="text"
                placeholder="e.g. instagram_bio, whatsapp_group"
                className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                value={customParams}
                onChange={(e) => setCustomParams(e.target.value)}
              />
              <p className="text-[10px] text-slate-500 mt-1.5">Appends channel tracking parameters for traffic segmentation.</p>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm cursor-pointer shadow-lg shadow-sky-500/20 active:scale-95 transition-all"
            >
              Generate Unique Link
            </button>
          </form>
        </div>

        {/* Share Box panel */}
        <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Your Tracking Link</h3>
            
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 font-mono text-xs text-sky-400 break-all select-all">
              {generatedLink}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCopyToClipboard}
                className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-300 cursor-pointer border border-white/5 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
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

          <div className="space-y-2 mt-6 pt-6 border-t border-white/5">
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-2">Quick Share Channels</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleWhatsAppShare}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-xs font-bold text-emerald-400 cursor-pointer transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </button>
              <button
                onClick={handleNativeShare}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 text-xs font-bold text-sky-400 cursor-pointer transition-all"
              >
                <Share2 className="h-4 w-4" />
                Native Share
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
