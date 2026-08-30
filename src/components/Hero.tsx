import React from 'react';
import { 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Clock, 
  CreditCard, 
  Sparkles, 
  Star,
  CheckCircle2,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  ChevronRight,
  ShoppingBag
} from 'lucide-react';
import { Product, CategoryId } from '../types';

interface HeroProps {
  onShopClick: () => void;
  onDealsClick: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectCategory?: (category: CategoryId) => void;
  featuredProduct: Product;
}

export const Hero: React.FC<HeroProps> = ({
  onShopClick,
  onDealsClick,
  onSelectProduct,
  onSelectCategory,
  featuredProduct
}) => {
  const categoryCards = [
    {
      id: 'smartphones' as CategoryId,
      name: 'Phones',
      tagline: 'iPhone, Galaxy & Flagships',
      count: '18+ Models',
      icon: Smartphone,
      accentColor: 'text-orange-600',
      bgGlow: 'group-hover:border-orange-400 group-hover:bg-orange-50/50'
    },
    {
      id: 'laptops' as CategoryId,
      name: 'Laptops',
      tagline: 'MacBook & Gaming Rigs',
      count: '14+ Models',
      icon: Laptop,
      accentColor: 'text-amber-600',
      bgGlow: 'group-hover:border-amber-400 group-hover:bg-amber-50/50'
    },
    {
      id: 'audio' as CategoryId,
      name: 'Audio',
      tagline: 'Hi-Fi & Noise Cancelling',
      count: '16+ Models',
      icon: Headphones,
      accentColor: 'text-orange-600',
      bgGlow: 'group-hover:border-orange-400 group-hover:bg-orange-50/50'
    },
    {
      id: 'wearables' as CategoryId,
      name: 'Wearables',
      tagline: 'Smartwatches & Fitness',
      count: '12+ Models',
      icon: Watch,
      accentColor: 'text-emerald-600',
      bgGlow: 'group-hover:border-emerald-400 group-hover:bg-emerald-50/50'
    }
  ];

  const handleCategoryClick = (catId: CategoryId) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    } else {
      onShopClick();
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FC] via-white to-[#F1F4F9] text-slate-900 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-slate-200/80">
      {/* Subtle ambient lighting spheres */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-orange-500/10 to-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Tech grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e130_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e130_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_75%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14 sm:space-y-16">
        {/* Main Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-orange-200/80 text-slate-800 text-xs font-bold shadow-sm shadow-orange-500/5 backdrop-blur-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-orange-500 animate-ping" />
              <span className="text-orange-600 tracking-wider uppercase font-black text-[11px]">Official UAE Distributor</span>
              <span className="text-slate-300">/</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                Same-Day Express Dubai
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-black tracking-tight text-[#0F1219] leading-[1.08] font-sans">
              Dubai’s smart <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                electronics store
              </span>
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Official flagship smartphones, high-performance laptops, pro studio audio, and wearables with TDRA certified UAE warranties and 3-hour express courier delivery.
            </p>

            {/* Main Call to Action: Bright Yellow Button with Dark Navy Text + Secondary Deal Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Bright Yellow Main Call-To-Action with Dark Navy Text */}
              <button
                id="hero-shop-now-main-btn"
                onClick={onShopClick}
                className="px-8 py-4.5 rounded-2xl bg-[#FFE600] hover:bg-[#FFDF00] text-[#0E1015] font-black text-base transition-all duration-200 shadow-xl shadow-yellow-500/25 hover:shadow-yellow-500/40 flex items-center justify-center gap-3 group active:scale-[0.98] border border-yellow-300 cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 text-[#0E1015]" />
                <span className="tracking-tight">Shop now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#0E1015]" />
              </button>

              {/* Secondary Deal Action */}
              <button
                id="hero-view-deals-btn"
                onClick={onDealsClick}
                className="px-7 py-4.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm transition-all duration-150 border border-slate-200/90 hover:border-slate-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-sm hover:shadow-md active:scale-[0.98]"
              >
                <Zap className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span>Dubai Flash Deals</span>
              </button>
            </div>

            {/* Trust Badges Strip */}
            <div className="pt-8 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-orange-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-600 shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Same-Day UAE</div>
                  <div className="text-[11px] text-slate-500 font-medium">Order by 4 PM</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Genuine</div>
                  <div className="text-[11px] text-slate-500 font-medium">2-Yr UAE Warranty</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-amber-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">0% Installments</div>
                  <div className="text-[11px] text-slate-500 font-medium">Tabby & Tamara</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-orange-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">14-Day Returns</div>
                  <div className="text-[11px] text-slate-500 font-medium">Instant Exchange</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Spotlight Featured Gadget Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[32px] bg-white p-6 sm:p-7 border border-slate-200/90 shadow-2xl shadow-slate-200/60 hover:shadow-slate-300/80 transition-shadow">
              {/* Top Tag & Stock Status */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="px-3.5 py-1.5 rounded-xl bg-[#0F1219] text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 border border-zinc-800">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                  <span>Spotlight Flagship</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  In Stock (Dubai Mall)
                </span>
              </div>

              {/* Product Visual */}
              <div 
                className="group cursor-pointer relative overflow-hidden rounded-2xl bg-[#F8F9FC] p-6 border border-slate-100 flex items-center justify-center aspect-4/3 hover:bg-slate-100/70 transition-all duration-300"
                onClick={() => onSelectProduct(featuredProduct)}
              >
                <img 
                  src={featuredProduct.image} 
                  alt={featuredProduct.name}
                  className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200/80 text-[11px] font-bold text-slate-700 shadow-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  Click to View Specs & Gallery
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-black text-orange-600 uppercase tracking-widest">{featuredProduct.brand}</span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200/60">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-slate-900">{featuredProduct.rating}</span>
                    <span className="text-slate-500 font-medium">({featuredProduct.reviewsCount})</span>
                  </div>
                </div>

                <h3 
                  onClick={() => onSelectProduct(featuredProduct)}
                  className="text-lg sm:text-xl font-black text-slate-900 hover:text-orange-600 transition-colors cursor-pointer line-clamp-2"
                >
                  {featuredProduct.name}
                </h3>

                {/* Key Spec highlights */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 bg-[#F8F9FC] p-2 rounded-xl border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span className="truncate font-semibold">A18 Pro / 5x Optical</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#F8F9FC] p-2 rounded-xl border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                    <span className="truncate font-semibold">Official UAE Model</span>
                  </div>
                </div>

                {/* Pricing and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-3">
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Dubai Special Price</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2.5xl font-black text-slate-900 font-mono tracking-tight">
                        AED {featuredProduct.price.toLocaleString()}
                      </span>
                      {featuredProduct.originalPrice && (
                        <span className="text-xs text-slate-400 line-through font-mono">
                          AED {featuredProduct.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    id="hero-quick-view-featured-btn"
                    onClick={() => onSelectProduct(featuredProduct)}
                    className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all shadow-md shadow-orange-600/30 hover:shadow-orange-600/50 flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>Quick View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Shop By Category Row (Phones, Laptops, Audio, Wearables) */}
        <div className="pt-8 sm:pt-10 border-t border-slate-200/90">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-orange-500" />
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-wider uppercase font-sans">
                Shop by category
              </h2>
            </div>
            <button
              onClick={onShopClick}
              className="text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1.5 transition-colors group cursor-pointer"
            >
              <span>View All Departments</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Four Category Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {categoryCards.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  id={`hero-category-card-${category.id}`}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`group text-left p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-orange-500/80 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between relative overflow-hidden ${category.bgGlow}`}
                >
                  <div>
                    {/* Icon Badge & Count */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/70 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-xs">
                        <Icon className={`w-6 h-6 ${category.accentColor} group-hover:text-white transition-colors`} />
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/80">
                        {category.count}
                      </span>
                    </div>

                    {/* Category Title */}
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-orange-600 transition-colors tracking-tight">
                      {category.name}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1 font-medium">
                      {category.tagline}
                    </p>
                  </div>

                  {/* Bottom Action Hint */}
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-slate-700 group-hover:text-orange-600 transition-colors">
                    <span>Explore Department</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
