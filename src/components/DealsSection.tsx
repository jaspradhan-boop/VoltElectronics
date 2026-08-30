import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Clock, 
  Flame, 
  Tag, 
  ArrowRight, 
  Check, 
  Copy, 
  ShoppingBag, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { DEALS_PROMOS, PRODUCTS } from '../data/products';
import { Product } from '../types';

interface DealsSectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const DealsSection: React.FC<DealsSectionProps> = ({
  onSelectProduct,
  onAddToCart
}) => {
  // Live Countdown state
  const [timeLeft, setTimeLeft] = useState({
    hours: 35,
    minutes: 42,
    seconds: 18
  });

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const dealProducts = PRODUCTS.filter(p => p.isDeal);

  return (
    <section id="deals-section" className="py-16 sm:py-24 bg-[#0E1015] text-white relative overflow-hidden border-b border-zinc-800/80">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Top Header with Live Countdown */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-10 border-b border-zinc-800/80">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 fill-orange-400 text-orange-400" />
              <span>Limited-Time Dubai Specials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black tracking-tight text-white font-sans">
              Flash Deals & Dubai Tech Fest
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-xl font-normal">
              Save up to 30% on flagship audio, smartphones, and consoles with zero-interest installments via Tabby & Tamara.
            </p>
          </div>

          {/* Flash Countdown Timer Widget */}
          <div className="flex items-center gap-3.5 bg-[#161922] p-4 sm:p-5 rounded-3xl border border-zinc-700/80 shadow-2xl self-start lg:self-auto backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase mr-1">
              <Clock className="w-4 h-4 animate-spin text-orange-500" />
              <span>Ends In:</span>
            </div>
            
            <div className="flex items-center gap-2.5 font-mono">
              <div className="flex flex-col items-center">
                <span className="w-13 h-12 rounded-2xl bg-zinc-900 border border-zinc-700 text-white font-black text-xl flex items-center justify-center shadow-inner">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-zinc-400 uppercase font-bold mt-1">Hours</span>
              </div>
              <span className="text-2xl font-bold text-orange-500 -mt-4">:</span>
              <div className="flex flex-col items-center">
                <span className="w-13 h-12 rounded-2xl bg-zinc-900 border border-zinc-700 text-white font-black text-xl flex items-center justify-center shadow-inner">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-zinc-400 uppercase font-bold mt-1">Mins</span>
              </div>
              <span className="text-2xl font-bold text-orange-500 -mt-4">:</span>
              <div className="flex flex-col items-center">
                <span className="w-13 h-12 rounded-2xl bg-zinc-900 border border-zinc-700 text-orange-400 font-black text-xl flex items-center justify-center shadow-inner animate-pulse">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-zinc-400 uppercase font-bold mt-1">Secs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Code Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DEALS_PROMOS.map((promo) => (
            <div
              key={promo.id}
              className={`rounded-3xl p-7 bg-gradient-to-r ${promo.bgGradient} border border-zinc-700/80 shadow-2xl relative overflow-hidden flex flex-col justify-between`}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <span className="px-3 py-1 rounded-xl bg-orange-600 text-white text-xs font-black uppercase tracking-wider mb-2.5 inline-block shadow-sm">
                    {promo.discountBadge}
                  </span>
                  <h3 className="text-2xl font-black text-white leading-tight">
                    {promo.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 mt-1.5 font-medium">
                    {promo.subtitle}
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-zinc-700/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <Tag className="w-4 h-4 text-orange-400" />
                  <span className="font-semibold">Promo Code:</span>
                  <span className="font-mono font-bold text-white bg-zinc-900/90 px-2.5 py-1 rounded-lg border border-zinc-700">
                    {promo.code}
                  </span>
                </div>

                <button
                  onClick={() => handleCopyCode(promo.code)}
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  {copiedCode === promo.code ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Deal Products Horizontal / Grid Cards */}
        <div>
          <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2.5">
            <Zap className="w-5 h-5 text-orange-400 fill-orange-400" />
            <span>Featured Markdown Products</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealProducts.slice(0, 4).map((product) => {
              const discount = product.originalPrice 
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                : 0;

              return (
                <div
                  key={product.id}
                  id={`deal-card-${product.id}`}
                  className="rounded-3xl bg-[#141720] border border-zinc-800 hover:border-orange-500/60 p-5 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-orange-950/30 hover:-translate-y-1.5"
                >
                  <div>
                    {/* Badge & Image */}
                    <div className="relative rounded-2xl overflow-hidden bg-[#0A0C10] aspect-square p-4 flex items-center justify-center mb-4 border border-zinc-800/80">
                      {discount > 0 && (
                        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-xl bg-orange-600 text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                          Save {discount}%
                        </span>
                      )}
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 cursor-pointer"
                        onClick={() => onSelectProduct(product)}
                      />
                    </div>

                    {/* Brand and name */}
                    <div className="text-[11px] font-black text-orange-400 uppercase tracking-wider">
                      {product.brand}
                    </div>
                    <h4 
                      onClick={() => onSelectProduct(product)}
                      className="text-base font-bold text-white hover:text-orange-400 transition-colors line-clamp-2 cursor-pointer mt-1"
                    >
                      {product.name}
                    </h4>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-4 mt-4 border-t border-zinc-800 space-y-3.5">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="text-xl font-black text-white font-mono tracking-tight">
                          AED {product.price.toLocaleString()}
                        </div>
                        {product.originalPrice && (
                          <div className="text-xs text-zinc-400 line-through font-mono">
                            AED {product.originalPrice.toLocaleString()}
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/70 px-2.5 py-1 rounded-full border border-emerald-800/50">
                        In Stock
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="w-full py-2.5 rounded-2xl bg-zinc-800/90 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition-colors cursor-pointer"
                      >
                        Details
                      </button>
                      <button
                        id={`deal-add-to-cart-${product.id}`}
                        onClick={() => onAddToCart(product)}
                        className="w-full py-2.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-orange-600/30 active:scale-95 cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
