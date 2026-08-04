'use client';

import { useState } from 'react';
import { Settings, Shield, Globe, Key, Save } from 'lucide-react';

export default function AdminSettings() {
  const [fraudPrevention, setFraudPrevention] = useState(true);
  const [whatsappGateway, setWhatsappGateway] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">System Settings</h1>
        <p className="text-slate-400 mt-1 text-sm">Manage API integrations, adjust security thresholds, and configure system flags.</p>
      </div>

      {/* Settings Grid */}
      <div className="space-y-6">
        {/* Security & Fraud Settings */}
        <div className="glass-panel p-6 rounded-2xl space-y-6">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Shield className="h-4 w-4 text-rose-400" />
            Security & Anti-Fraud Thresholds
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <div>
                <p className="text-sm font-bold text-white">Click Velocity Throttling</p>
                <p className="text-xs text-slate-400 mt-1">Automatically blocks an IP if it exceeds 50 link clicks in 1 minute.</p>
              </div>
              <button
                onClick={() => setFraudPrevention(!fraudPrevention)}
                className={`w-12 h-6 rounded-full transition-all duration-300 relative border cursor-pointer ${
                  fraudPrevention ? 'bg-emerald-500 border-emerald-400' : 'bg-slate-800 border-slate-700'
                }`}
              >
                <span className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all ${
                  fraudPrevention ? 'left-6.5' : 'left-0.5'
                }`}></span>
              </button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <div>
                <p className="text-sm font-bold text-white">Staging Escape Escrow Holding Period</p>
                <p className="text-xs text-slate-400 mt-1">Holds split commissions in a pending balance for 30 to 60 days to counter chargebacks.</p>
              </div>
              <select className="px-3 py-2 rounded-lg glass-input text-xs font-semibold">
                <option>30 Days (Default)</option>
                <option>45 Days</option>
                <option>60 Days</option>
              </select>
            </div>
          </div>
        </div>

        {/* API & Gateways */}
        <div className="glass-panel p-6 rounded-2xl space-y-6">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Globe className="h-4 w-4 text-sky-400" />
            Gateways & Endpoint Integrations
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <div>
                <p className="text-sm font-bold text-white">WhatsApp Business OTP Service</p>
                <p className="text-xs text-slate-400 mt-1">Toggle phone-based passwordless OTP dispatching.</p>
              </div>
              <button
                onClick={() => setWhatsappGateway(!whatsappGateway)}
                className={`w-12 h-6 rounded-full transition-all duration-300 relative border cursor-pointer ${
                  whatsappGateway ? 'bg-emerald-500 border-emerald-400' : 'bg-slate-800 border-slate-700'
                }`}
              >
                <span className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all ${
                  whatsappGateway ? 'left-6.5' : 'left-0.5'
                }`}></span>
              </button>
            </div>

            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Twilio Auth Endpoint Key</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                  <Key className="h-4 w-4" />
                </span>
                <input
                  type="password"
                  value="SK-xxxxxxxxxxxxxxxxxxxxxxxx"
                  readOnly
                  className="w-full pl-10 pr-4 py-3 rounded-xl glass-input text-xs"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold text-sm cursor-pointer shadow-lg shadow-emerald-500/25 transition-all">
            <Save className="h-4 w-4" />
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
