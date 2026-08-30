import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Truck, 
  Award, 
  MapPin, 
  Users, 
  Sparkles, 
  CheckCircle2,
  Headphones,
  Smartphone,
  Cpu
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-18 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 text-orange-900 text-xs font-bold uppercase tracking-wider border border-orange-200">
            <Zap className="w-3.5 h-3.5 fill-orange-600 text-orange-600" />
            <span>The Volt Standard • Dubai, United Arab Emirates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-[#0F1219] tracking-tight font-sans">
            Pioneering Next-Generation Electronics in the Heart of Dubai
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Founded in Dubai with a vision to deliver genuine, ultra-high performance hardware with unmatched speed, Volt Electronics bridges the gap between revolutionary global tech and seamless local UAE service.
          </p>
        </div>

        {/* 3 Main Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          <div className="p-8 sm:p-9 rounded-3xl bg-[#F8F9FC] border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-4 relative overflow-hidden group hover:border-orange-400 hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-orange-600 text-white flex items-center justify-center shadow-lg shadow-orange-600/30">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">100% Official UAE Stock</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every device is officially imported, TDRA certified, and backed by authorized manufacturer warranties from Apple, Sony, Samsung, ASUS, and LG Middle East.
            </p>
          </div>

          <div className="p-8 sm:p-9 rounded-3xl bg-[#F8F9FC] border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-4 relative overflow-hidden group hover:border-orange-400 hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#0F1219] text-orange-400 flex items-center justify-center shadow-lg">
              <Truck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Dubai Express Dispatch</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our centralized logistics hub situated off Sheikh Zayed Road ensures 3-hour white-glove courier delivery across Downtown, Dubai Marina, Palm Jumeirah, and Sharjah.
            </p>
          </div>

          <div className="p-8 sm:p-9 rounded-3xl bg-[#F8F9FC] border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.02)] space-y-4 relative overflow-hidden group hover:border-orange-400 hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/30">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Flagship Tech Lounges</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Hands-on interactive experience centers located at Dubai Mall and Mall of the Emirates where you can test Hi-Fi acoustic rooms, flight simulators, and OLED home cinema rigs.
            </p>
          </div>
        </div>

        {/* Dubai Metrics Counter Banner */}
        <div className="rounded-3xl bg-[#0F1219] text-white p-8 sm:p-12 border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-orange-400 font-mono">
                50,000+
              </div>
              <div className="text-xs sm:text-sm text-zinc-300 font-medium">UAE Tech Enthusiasts Served</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">
                3 Hours
              </div>
              <div className="text-xs sm:text-sm text-zinc-300 font-medium">Average Dubai Delivery Window</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                100%
              </div>
              <div className="text-xs sm:text-sm text-zinc-300 font-medium">TRA / TDRA Approved Models</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-orange-300 font-mono">
                4.9 / 5.0
              </div>
              <div className="text-xs sm:text-sm text-zinc-300 font-medium">Verified Customer Satisfaction</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
