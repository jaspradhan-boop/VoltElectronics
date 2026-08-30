import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { DUBAI_LOCATIONS } from '../data/products';
import { StoreLocation } from '../types';

export const ContactSection: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<StoreLocation>(DUBAI_LOCATIONS[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'product-inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'product-inquiry',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact-section" className="py-18 sm:py-24 bg-[#F8F9FC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-900 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-orange-600" />
            <span>Visit Our Dubai Showrooms & Service Desks</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-[#0F1219] tracking-tight font-sans">
            Connect with Volt Electronics Dubai
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Have a question about product availability, enterprise procurement, or same-day dispatch? Our Dubai tech specialists are here to assist.
          </p>
        </div>

        {/* 2-Column: Showrooms Picker on Left, Contact Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Dubai Showroom Switcher */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2 tracking-tight">
                  <Zap className="w-4 h-4 text-orange-600" />
                  <span>Flagship Retail Experience Centers</span>
                </h3>
                <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Open 7 Days a Week
                </span>
              </div>

              {/* Showroom Location Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {DUBAI_LOCATIONS.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${
                      selectedLocation.id === loc.id
                        ? 'bg-orange-600 text-white border-orange-600 shadow-md shadow-orange-600/30'
                        : 'bg-slate-50/80 text-slate-700 hover:bg-slate-100 border-slate-200/90'
                    }`}
                  >
                    <div className="text-[11px] font-black uppercase tracking-wider opacity-80">
                      {loc.area}
                    </div>
                    <div className="text-xs sm:text-sm font-bold truncate mt-0.5">
                      {loc.name.split(' ')[0]} {loc.name.split(' ')[1]}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Location Display Card */}
              <div className="rounded-3xl bg-[#0F1219] text-white p-6 sm:p-7 space-y-5 relative overflow-hidden border border-zinc-800 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-mono text-orange-400 font-bold uppercase tracking-wider">
                      {selectedLocation.area} • Dubai
                    </span>
                    <h4 className="text-xl font-black text-white mt-0.5">
                      {selectedLocation.name}
                    </h4>
                  </div>
                  {selectedLocation.isFlagship && (
                    <span className="self-start px-3 py-1 rounded-xl bg-orange-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                      Main Flagship
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-300 pt-3 border-t border-zinc-800">
                  <div className="space-y-1">
                    <div className="font-bold text-zinc-100 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>Address & Location</span>
                    </div>
                    <p className="text-zinc-400 pl-5 leading-relaxed">{selectedLocation.address}</p>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold text-zinc-100 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>Store Hours</span>
                    </div>
                    <p className="text-zinc-400 pl-5 leading-relaxed">{selectedLocation.timings}</p>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-2 pt-3 border-t border-zinc-800">
                  <div className="text-xs font-bold text-zinc-200">Showroom Features:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                    {selectedLocation.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Contacts */}
                <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${selectedLocation.phone.replace(/[^0-9+]/g, '')}`}
                    className="px-4 py-2.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Showroom ({selectedLocation.phone})</span>
                  </a>

                  <a
                    href={`https://wa.me/${selectedLocation.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Advisor</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-5">
              
              <div>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">Send an Inquiry</h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Our Dubai customer care team responds within 1 hour during store hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Message Received!</h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    Thank you, {formData.name || 'valued customer'}. A Volt Dubai specialist will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-black text-slate-800 uppercase tracking-wider block mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rashid Al Maktoum"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F8F9FC] border border-slate-300 rounded-2xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-black text-slate-800 uppercase tracking-wider block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F8F9FC] border border-slate-300 rounded-2xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-black text-slate-800 uppercase tracking-wider block mb-1.5">
                        UAE Phone (+971)
                      </label>
                      <input
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F8F9FC] border border-slate-300 rounded-2xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-800 uppercase tracking-wider block mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#F8F9FC] border border-slate-300 rounded-2xl px-4 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
                    >
                      <option value="product-inquiry">Product Availability & Specs</option>
                      <option value="express-delivery">Same-Day Express Delivery Question</option>
                      <option value="corporate-b2b">Corporate / B2B Tech Procurement</option>
                      <option value="warranty-support">Warranty & Service Repair Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-800 uppercase tracking-wider block mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="How can our Dubai team assist you today?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F8F9FC] border border-slate-300 rounded-2xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-orange-600/30 active:scale-98 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Volt Dubai</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
