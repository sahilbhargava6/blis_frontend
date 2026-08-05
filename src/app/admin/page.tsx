'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
  TrendingUp, 
  MousePointerClick, 
  CheckCircle, 
  BarChart3, 
  Users2, 
  ArrowUpRight, 
  Play, 
  Activity, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

import { Suspense } from 'react';

function AdminOverviewContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showWizard, setShowWizard] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);

  // Stats State for live simulation
  const [clicks, setClicks] = useState(45892);
  const [conversions, setConversions] = useState(2931);
  const [revenue, setRevenue] = useState(84930);
  const [simulating, setSimulating] = useState<string | null>(null);

  // Live feed state
  const [activities, setActivities] = useState([
    { member: 'Rahul S.', action: 'O2O store click referral', amt: '₹70.00', status: 'Pending Hold', time: 'Just now' },
    { member: 'Kunal G.', action: 'Campaign deep link click', amt: '₹140.00', status: 'Pending Hold', time: '8 min ago' },
    { member: 'Priya K.', action: 'Affiliate conversion', amt: '₹210.00', status: 'Approved', time: '23 min ago' },
  ]);

  // Check query parameters to launch onboarding setup wizard
  useEffect(() => {
    if (searchParams.get('new_user') === 'true') {
      setShowWizard(true);
    }
  }, [searchParams]);

  // Simulators logic
  const handleSimulateClick = () => {
    setSimulating('click');
    setClicks(prev => prev + 1);
    
    // Add item to live feed list
    const names = ['Anik A.', 'Sarah M.', 'Vikram R.', 'Rohan D.', 'Nisha S.'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    setActivities(prev => [
      { member: randomName, action: 'Simulated click tracked', amt: '₹0.00', status: 'Tracked', time: 'Just now' },
      ...prev.slice(0, 4)
    ]);

    setTimeout(() => setSimulating(null), 800);
  };

  const handleSimulateConversion = () => {
    setSimulating('conversion');
    setConversions(prev => prev + 1);
    setRevenue(prev => prev + 75);

    const names = ['Sahil B.', 'Kunal G.', 'Neha P.', 'Divya K.', 'Rahul K.'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    setActivities(prev => [
      { member: randomName, action: 'Conversion Postback Webhook', amt: '₹75.00', status: 'Approved', time: 'Just now' },
      ...prev.slice(0, 4)
    ]);

    setTimeout(() => setSimulating(null), 800);
  };

  const stats = [
    { name: 'Total Active Clicks', value: clicks.toLocaleString(), change: '+12.3%', icon: MousePointerClick, color: 'text-[#0E76C0]', bg: 'bg-[#0E76C0]/10', border: 'border-[#0E76C0]/20' },
    { name: 'Total Conversions', value: conversions.toLocaleString(), change: '+8.4%', icon: CheckCircle, color: 'text-[#F047AB]', bg: 'bg-[#F047AB]/10', border: 'border-[#F047AB]/20' },
    { name: 'Active Groups', value: '18', change: '+2 new this week', icon: Users2, color: 'text-[#B98776]', bg: 'bg-[#B98776]/10', border: 'border-[#B98776]/20' },
    { name: 'Gross Revenue Share', value: `₹${revenue.toLocaleString()}`, change: '+15.2%', icon: TrendingUp, color: 'text-[#0E76C0]', bg: 'bg-[#0E76C0]/10', border: 'border-[#0E76C0]/20' },
  ];

  return (
    <div className="space-y-8 relative">
      
      {/* Onboarding Setup Wizard Overlay Modal */}
      {showWizard && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white rounded-3xl p-8 relative shadow-2xl border border-slate-100 font-['Plus_Jakarta_Sans']">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-[#F047AB]/10 text-[#F047AB] border border-[#F047AB]/20">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-800">Admin Onboarding Wizard</h3>
                <p className="text-xs text-slate-400 font-semibold font-['Roboto']">Step {wizardStep} of 3</p>
              </div>
            </div>

            {/* Wizard Steps Content */}
            {wizardStep === 1 && (
              <div className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed font-['Roboto']">
                  Welcome to the **BLIS SaaS Platform Command Center**! Here you will oversee active groups, manage conversion ratios, configure platform margins, and authorize bulk payouts.
                </p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Pro Tip</span>
                  <p className="text-xs text-slate-500 font-medium font-['Roboto'] mt-1">Use the **Simulation Panel** at the top right of this screen to trigger test clicks and conversion postbacks live.</p>
                </div>
              </div>
            )}

            {wizardStep === 2 && (
              <div className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed font-['Roboto']">
                  **Configure Campaigns**: Set active Cost Per Acquisition (CPA) values and direct commission split allocations. 
                </p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Promoter Member Share</span>
                    <span className="text-[#0E76C0]">70%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1 rounded-full">
                    <div className="bg-[#0E76C0] h-1 w-[70%] rounded-full"></div>
                  </div>
                </div>
              </div>
            )}

            {wizardStep === 3 && (
              <div className="space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed font-['Roboto']">
                  **Final Check**: Connect your Slack, WhatsApp notification logs, and Twilio endpoints to monitor promoter catalogs in real-time.
                </p>
                <div className="p-3 bg-green-50 text-green-700 border border-green-200 rounded-2xl text-xs font-bold flex items-center gap-2">
                  <Check className="h-4 w-4" /> Ready to launch Command Center!
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center pt-8 border-t border-slate-100 mt-6">
              <button
                onClick={() => {
                  setShowWizard(false);
                  // Remove query parameter cleanly
                  router.replace('/admin');
                }}
                className="text-xs font-bold text-slate-400 hover:text-slate-600 font-['Plus_Jakarta_Sans']"
              >
                Skip Onboarding
              </button>
              <div className="flex gap-2">
                {wizardStep > 1 && (
                  <button
                    onClick={() => setWizardStep(prev => prev - 1)}
                    className="py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={() => {
                    if (wizardStep < 3) {
                      setWizardStep(prev => prev + 1);
                    } else {
                      setShowWizard(false);
                      router.replace('/admin');
                    }
                  }}
                  className="py-2.5 px-5 rounded-xl bg-[#0E76C0] text-white text-xs font-bold hover:bg-[#0c66a8] shadow-sm shadow-[#0E76C0]/20 flex items-center gap-1.5 transition-all"
                >
                  {wizardStep === 3 ? 'Finish' : 'Next Step'}
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Title & Simulator Widget Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-800 font-['Plus_Jakarta_Sans']">System Command Center</h1>
          <p className="text-slate-500 mt-1 text-sm font-semibold font-['Roboto']">Real-time telemetry and overview statistics.</p>
        </div>

        {/* Live Simulator Widget */}
        <div className="bg-white border border-slate-200 rounded-2xl p-3.5 flex items-center gap-3.5 shadow-sm font-['Plus_Jakarta_Sans']">
          <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            SaaS Simulator:
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSimulateClick}
              disabled={simulating !== null}
              className="py-1.5 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-700 flex items-center gap-1 transition-all"
            >
              <Activity className="h-3 w-3 text-[#0E76C0]" />
              {simulating === 'click' ? 'Tracking Click...' : 'Simulate Click'}
            </button>
            <button
              onClick={handleSimulateConversion}
              disabled={simulating !== null}
              className="py-1.5 px-3 rounded-lg bg-green-50 hover:bg-green-100 border border-green-200 text-[10px] font-bold text-green-700 flex items-center gap-1 transition-all"
            >
              <Play className="h-3 w-3 text-green-600 animate-pulse" />
              {simulating === 'conversion' ? 'Webhook Postback...' : 'Simulate Webhook'}
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-['Plus_Jakarta_Sans']">{stat.name}</p>
                <h3 className="text-3xl font-extrabold text-slate-800 mt-2 font-['Plus_Jakarta_Sans']">{stat.value}</h3>
              </div>
              <div className={`p-2.5 rounded-xl ${stat.bg} ${stat.color} border ${stat.border}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-4">
              <ArrowUpRight className="h-3 w-3 text-green-600" />
              <span className="text-xs font-bold text-green-600">{stat.change}</span>
              <span className="text-[10px] text-slate-500 font-semibold font-['Roboto']">vs previous period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart + Feed Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main telemetry graph */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2 font-['Plus_Jakarta_Sans']">
              <BarChart3 className="h-4 w-4 text-[#0E76C0]" />
              Click & Conversion Velocity
            </h3>
            <span className="text-xs text-slate-500 font-semibold bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 font-['Plus_Jakarta_Sans']">
              Last 7 Days
            </span>
          </div>
          {/* Bar chart */}
          <div className="h-64 flex items-end justify-between gap-3 pt-6 border-b border-slate-100">
            {[
              { val: 65, label: 'Mon' },
              { val: 45, label: 'Tue' },
              { val: 80, label: 'Wed' },
              { val: 55, label: 'Thu' },
              { val: 95, label: 'Fri' },
              { val: 70, label: 'Sat' },
              { val: 85, label: 'Sun' },
            ].map((day, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <span className="text-[10px] font-bold text-[#0E76C0] opacity-0 group-hover:opacity-100 transition-opacity">{day.val}%</span>
                <div 
                  className="w-full rounded-t-lg bg-gradient-to-t from-[#0E76C0]/20 to-[#0E76C0] group-hover:from-[#F047AB]/20 group-hover:to-[#F047AB] transition-all duration-500 cursor-pointer" 
                  style={{ height: `${day.val}%` }}
                ></div>
                <span className="text-[11px] text-slate-600 font-bold font-['Roboto']">{day.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Conversion Feed */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-4 font-['Plus_Jakarta_Sans']">
            Live Feed
          </h3>
          <div className="flex-1 space-y-3 overflow-y-auto pr-1">
            {activities.map((feed, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:bg-slate-50 transition-colors">
                <div>
                  <p className="text-xs font-bold text-slate-800 font-['Plus_Jakarta_Sans']">{feed.member}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5 font-semibold font-['Roboto']">{feed.action}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-extrabold text-[#0E76C0]">{feed.amt}</p>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded font-['Plus_Jakarta_Sans'] ${
                    feed.status === 'Approved' ? 'bg-green-50 text-green-600 border border-green-100' : 
                    feed.status === 'Tracked' ? 'bg-sky-50 text-[#0E76C0] border border-[#0E76C0]/20' : 
                    'bg-[#B98776]/10 text-[#B98776] border border-[#B98776]/20'
                  }`}>
                    {feed.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminOverview() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500 font-bold font-['Plus_Jakarta_Sans'] animate-pulse">Loading Command Center...</div>}>
      <AdminOverviewContent />
    </Suspense>
  );
}
