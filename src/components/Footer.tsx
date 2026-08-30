import React, { useState } from 'react';
import { 
  Zap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Send, 
  CheckCircle2, 
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Banknote,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { CategoryId } from '../types';

interface FooterProps {
  onNavigate: (tab: string, categoryId?: CategoryId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmailInput('');
      }, 3000);
    }
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/10' },
    { name: 'Twitter / X', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-400 hover:border-red-500/40 hover:bg-red-500/10' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-300 hover:border-blue-400/40 hover:bg-blue-400/10' },
  ];

  return (
    <footer id="main-footer" className="bg-[#0F1219] text-slate-300 border-t border-zinc-800/80">
      
      {/* Top Value Assurance Banner */}
      <div className="border-b border-zinc-800/80 py-7 sm:py-9 bg-[#141721]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-slate-300">
            
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1D28] border border-zinc-800 shadow-sm">
              <div className="w-11 h-11 rounded-2xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-wider">Same-Day Dubai Delivery</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5">Order by 4 PM for 3-hr courier</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1D28] border border-zinc-800 shadow-sm">
              <div className="w-11 h-11 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-wider">Official UAE Warranty</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5">100% TDRA registered stock</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1D28] border border-zinc-800 shadow-sm">
              <div className="w-11 h-11 rounded-2xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-wider">0% Interest Installments</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5">Pay in 4 via Tabby & Tamara</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1A1D28] border border-zinc-800 shadow-sm">
              <div className="w-11 h-11 rounded-2xl bg-orange-600/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-white uppercase tracking-wider">Support 9am – 9pm</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5">Daily phone & WhatsApp hotline</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Links & Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Socials Column */}
          <div className="lg:col-span-4 space-y-5">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer group select-none"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white shadow-lg shadow-orange-600/30 border border-orange-400/30 group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6 fill-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-white font-sans">
                    VOLT
                  </span>
                  <span className="text-xl font-medium tracking-wide text-orange-400">
                    ELECTRONICS
                  </span>
                </div>
                <span className="text-[9px] font-black tracking-widest text-zinc-400 uppercase">
                  Dubai • United Arab Emirates
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Dubai’s premier smart electronics hub. Flagship mobile devices, computing, studio audio, and wearables with official UAE manufacturer warranties.
            </p>

            {/* Social Icons Row */}
            <div className="space-y-2.5 pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                Connect with Volt Dubai
              </div>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className={`w-10 h-10 rounded-2xl bg-[#1A1D28] border border-zinc-800 flex items-center justify-center text-zinc-400 transition-all duration-200 ${social.color} hover:scale-110 active:scale-95`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <button 
                  id="footer-nav-home"
                  onClick={() => onNavigate('home')} 
                  className="hover:text-orange-400 hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer py-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-nav-shop"
                  onClick={() => onNavigate('shop')} 
                  className="hover:text-orange-400 hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer py-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Shop</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-nav-about"
                  onClick={() => onNavigate('about')} 
                  className="hover:text-orange-400 hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer py-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                  <span>About</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-nav-contact"
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-orange-400 hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer py-1"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Contact</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-nav-deals"
                  onClick={() => onNavigate('deals')} 
                  className="hover:text-orange-300 hover:translate-x-1 transition-all inline-flex items-center gap-1.5 cursor-pointer py-1 text-orange-400 font-semibold"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-orange-500/60" />
                  <span>Dubai Deals</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Contact Details
            </h4>
            
            <div className="space-y-3.5 text-xs text-zinc-400">
              {/* Dubai Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="text-zinc-200 font-bold">Dubai Flagship Hub</div>
                  <p className="text-[11px] leading-relaxed text-zinc-400">
                    Fashion Avenue, Dubai Mall & Sheikh Zayed Road (Exit 43), Dubai, UAE
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <div>
                  <a 
                    href="tel:+97148008658" 
                    className="text-zinc-200 font-bold hover:text-orange-400 transition-colors"
                  >
                    +971 4 800 VOLT (8658)
                  </a>
                  <div className="text-[10px] text-zinc-500 font-mono">Toll-free UAE Landline</div>
                </div>
              </div>

              {/* Support Hours: 9am - 9pm */}
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-zinc-200 font-bold">Customer Support:</div>
                  <div className="text-[11px] text-emerald-400 font-semibold">9:00 AM – 9:00 PM (Daily)</div>
                  <div className="text-[10px] text-zinc-500">WhatsApp & Phone Hotline</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a 
                  href="mailto:support@volt.ae" 
                  className="text-zinc-300 hover:text-orange-300 transition-colors text-[11px]"
                >
                  support@volt.ae
                </a>
              </div>
            </div>
          </div>

          {/* Payment Methods & VIP Club Column */}
          <div className="lg:col-span-3 space-y-4">
            {/* Payment Icons */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-orange-400" />
                Accepted Payment Methods
              </h4>
              
              <div className="grid grid-cols-2 gap-2">
                {/* Visa Badge */}
                <div className="px-3 py-2 rounded-2xl bg-[#1A1D28] border border-zinc-800 text-zinc-200 flex items-center justify-center gap-1.5 text-xs font-bold hover:border-zinc-700 transition-colors shadow-sm">
                  <span className="text-blue-400 font-serif italic text-sm font-black tracking-wider">VISA</span>
                </div>

                {/* Mastercard Badge */}
                <div className="px-3 py-2 rounded-2xl bg-[#1A1D28] border border-zinc-800 text-zinc-200 flex items-center justify-center gap-1 text-xs font-bold hover:border-zinc-700 transition-colors shadow-sm">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-500 opacity-90 inline-block -mr-1.5" />
                  <span className="w-3.5 h-3.5 rounded-full bg-amber-500 opacity-90 inline-block" />
                  <span className="text-[11px] font-sans ml-1 text-zinc-200 font-bold">Mastercard</span>
                </div>

                {/* Apple Pay Badge */}
                <div className="px-3 py-2 rounded-2xl bg-[#1A1D28] border border-zinc-800 text-zinc-200 flex items-center justify-center gap-1 text-xs font-semibold hover:border-zinc-700 transition-colors shadow-sm">
                  <span className="text-sm font-medium"></span>
                  <span className="text-[11px] font-sans font-black text-white">Apple Pay</span>
                </div>

                {/* Cash on Delivery Badge */}
                <div className="px-3 py-2 rounded-2xl bg-[#1A1D28] border border-zinc-800 text-emerald-400 flex items-center justify-center gap-1 text-xs font-semibold hover:border-zinc-700 transition-colors shadow-sm">
                  <Banknote className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] font-sans font-bold text-zinc-200">Cash on Delivery</span>
                </div>
              </div>

              <div className="text-[10px] text-zinc-500 text-center sm:text-left">
                Also supports 0% Buy Now Pay Later via Tabby & Tamara
              </div>
            </div>

            {/* VIP Club Newsletter */}
            <div className="pt-3 border-t border-zinc-800 space-y-2">
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>Dubai Tech VIP Restock Alerts</span>
              </div>

              {subscribed ? (
                <div className="p-2.5 rounded-2xl bg-emerald-950/70 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Subscribed to VIP alerts!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="name@email.ae"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="bg-[#1A1D28] border border-zinc-800 rounded-2xl px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 flex-1 min-w-0"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Join</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright and Attribution Line */}
        <div className="pt-8 mt-12 border-t border-zinc-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-400 gap-4 text-center md:text-left">
          <div className="space-y-1.5">
            <div>
              © {new Date().getFullYear()} Volt Electronics LLC. All Rights Reserved. Dubai, United Arab Emirates.
            </div>
            {/* Required Credit Line */}
            <div className="text-zinc-400 font-medium text-[11px] flex items-center justify-center md:justify-start gap-1.5">
              <span className="text-zinc-300 font-bold">Volt Electronics</span>
              <span>·</span>
              <span>built at London International</span>
              <span>·</span>
              <a 
                href="https://lisrc.ae" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-bold inline-flex items-center gap-0.5"
              >
                <span>lisrc.ae</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-zinc-400 text-[11px]">
            <span className="font-semibold text-zinc-300">TDRA Approved</span>
            <span>•</span>
            <span className="font-semibold text-zinc-300">Dubai Chamber Member</span>
            <span>•</span>
            <span className="font-mono text-zinc-400">TRN: 100489281200003</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

