import React from 'react';
import { 
  Star, 
  ShoppingBag, 
  Eye, 
  Sparkles, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface FeaturedProductsSectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onExploreMore?: () => void;
}

interface FeaturedItemConfig {
  productId: string;
  categoryLabel: string;
  oneLineSpec: string;
  isSale?: boolean;
  saleLabel?: string;
  fallbackProduct: Product;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({
  onSelectProduct,
  onAddToCart,
  onExploreMore
}) => {
  // 8 Specific placeholder electronics products requested:
  // 1. Smartphone
  // 2. Laptop
  // 3. Wireless Headphones (Sale)
  // 4. Smartwatch
  // 5. Tablet
  // 6. Bluetooth Speaker (Sale)
  // 7. Gaming Console
  // 8. Power Bank
  const featuredConfigs: FeaturedItemConfig[] = [
    {
      productId: 'volt-ip16pm',
      categoryLabel: 'Smartphone',
      oneLineSpec: '6.9" Super Retina XDR OLED • A18 Pro 3nm • 48MP 5x Optical',
      fallbackProduct: PRODUCTS[0]
    },
    {
      productId: 'volt-mbp16-m4',
      categoryLabel: 'Laptop',
      oneLineSpec: '16.2" Liquid Retina XDR • M4 Max 36-Core GPU • 1TB NVMe SSD',
      fallbackProduct: PRODUCTS[2]
    },
    {
      productId: 'volt-sony-xm5',
      categoryLabel: 'Wireless Headphones',
      oneLineSpec: 'Industry-Leading ANC • 30h Battery • LDAC Hi-Res Audio',
      isSale: true,
      saleLabel: 'Sale',
      fallbackProduct: PRODUCTS[3]
    },
    {
      productId: 'volt-aw-ultra2',
      categoryLabel: 'Smartwatch',
      oneLineSpec: '49mm Titanium Grade 5 • 3000 Nits Sapphire • 72h Battery',
      fallbackProduct: PRODUCTS[5]
    },
    {
      productId: 'volt-ipad-pro-m4',
      categoryLabel: 'Tablet',
      oneLineSpec: '13" Ultra Retina XDR OLED • Apple M4 Chip • 5.1mm Ultra-thin',
      fallbackProduct: PRODUCTS.find(p => p.id === 'volt-ipad-pro-m4') || PRODUCTS[0]
    },
    {
      productId: 'volt-jbl-boombox3',
      categoryLabel: 'Bluetooth Speaker',
      oneLineSpec: 'Dolby Atmos 3D Audio • 24h Playtime • IP67 Waterproof & Dustproof',
      isSale: true,
      saleLabel: 'Sale',
      fallbackProduct: PRODUCTS.find(p => p.id === 'volt-jbl-boombox3') || PRODUCTS[3]
    },
    {
      productId: 'volt-ps5-pro',
      categoryLabel: 'Gaming Console',
      oneLineSpec: '2TB High-Speed SSD • 4K 120FPS with PSSR AI Upscaling & Ray Tracing',
      fallbackProduct: PRODUCTS[4]
    },
    {
      productId: 'volt-anker-prime-pb',
      categoryLabel: 'Power Bank',
      oneLineSpec: '250W Multi-Port GaN Output • 27,650mAh Airline-Safe • Color TFT Display',
      fallbackProduct: PRODUCTS.find(p => p.id === 'volt-anker-prime-pb') || PRODUCTS[7] || PRODUCTS[0]
    }
  ];

  return (
    <section id="featured-products-section" className="py-16 sm:py-24 bg-[#F8F9FC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-5">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200/90 text-orange-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Handpicked Flagships</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-[#0F1219] tracking-tight font-sans">
              Featured products
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal">
              Explore Dubai's most sought-after electronics, smart wearables, and audio gear with official UAE manufacturer warranties.
            </p>
          </div>

          {onExploreMore && (
            <button
              onClick={onExploreMore}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-slate-200/90 text-sm font-bold text-orange-600 hover:text-orange-700 hover:border-orange-300 hover:shadow-md transition-all group self-start md:self-auto cursor-pointer"
            >
              <span>View full catalog</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* 8 Product Cards Grid: Responsive 1 or 2 per row on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {featuredConfigs.map((config, index) => {
            const product = PRODUCTS.find(p => p.id === config.productId) || config.fallbackProduct;
            
            return (
              <div
                key={product.id || index}
                id={`featured-card-${product.id}`}
                className="group bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 hover:border-orange-400/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(255,90,31,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Badges: Category Label & Red Sale Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                  <span className="text-[11px] font-black text-slate-700 uppercase tracking-wider bg-slate-100/90 px-3 py-1 rounded-xl">
                    {config.categoryLabel}
                  </span>

                  {/* Red/Orange Sale Badge on two cards */}
                  {config.isSale ? (
                    <span 
                      id={`featured-sale-badge-${product.id}`}
                      className="px-3 py-1 rounded-xl bg-red-600 text-white text-[11px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1"
                    >
                      <Zap className="w-3 h-3 fill-white" />
                      <span>{config.saleLabel || 'Sale'}</span>
                    </span>
                  ) : (
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      In Stock
                    </span>
                  )}
                </div>

                {/* Product Image Container */}
                <div 
                  onClick={() => onSelectProduct(product)}
                  className="relative aspect-4/3 rounded-2xl bg-[#F8F9FC] border border-slate-100 p-4 flex items-center justify-center overflow-hidden cursor-pointer group-hover:bg-slate-100/70 transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Quick View Hover Pill */}
                  <div className="absolute inset-0 bg-[#0F1219]/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-white/95 text-slate-900 text-xs font-bold shadow-md flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-orange-600" />
                      Quick Specs
                    </span>
                  </div>
                </div>

                {/* Product Information */}
                <div className="pt-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Star Rating Row */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1.5 text-amber-500">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < Math.floor(product.rating) 
                                  ? 'fill-amber-400 text-amber-400' 
                                  : 'text-slate-200 fill-slate-200'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-bold text-slate-900 ml-1">
                          {product.rating.toFixed(1)}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium">
                        ({product.reviewsCount})
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="text-base font-bold text-slate-900 line-clamp-2 hover:text-orange-600 transition-colors cursor-pointer leading-snug tracking-tight"
                      title={product.name}
                    >
                      {product.name}
                    </h3>

                    {/* One-Line Spec */}
                    <p className="text-xs text-slate-600 mt-2 font-medium line-clamp-1 border-l-2 border-orange-500 pl-2.5">
                      {config.oneLineSpec}
                    </p>
                  </div>

                  {/* Pricing & Add to Cart Action */}
                  <div className="pt-5 mt-4 border-t border-slate-100 space-y-3.5">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Price in Dubai</div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl sm:text-2xl font-black text-slate-900 font-mono tracking-tight">
                            AED {product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && product.originalPrice > product.price && (
                            <span className="text-xs text-slate-400 line-through font-mono">
                              AED {product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      {config.isSale && product.originalPrice && (
                        <span className="text-[11px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-lg border border-red-200/80">
                          Save AED {(product.originalPrice - product.price).toLocaleString()}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      id={`featured-add-to-cart-${product.id}`}
                      onClick={() => onAddToCart(product)}
                      className="w-full py-3 px-4 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-orange-600/25 hover:shadow-orange-600/40 active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer group/btn"
                    >
                      <ShoppingBag className="w-4 h-4 text-white group-hover/btn:scale-110 transition-transform" />
                      <span>Add to cart</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Value Micro-Banner below featured cards */}
        <div className="mt-12 pt-8 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs font-bold text-slate-800">
            <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
            <span>100% Genuine UAE Official Stock</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs font-bold text-slate-800">
            <Zap className="w-4.5 h-4.5 text-orange-500 shrink-0" />
            <span>3-Hour Express Courier in Dubai</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs font-bold text-slate-800">
            <Check className="w-4.5 h-4.5 text-orange-600 shrink-0" />
            <span>0% Installments with Tabby & Tamara</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5 text-xs font-bold text-slate-800">
            <Star className="w-4.5 h-4.5 text-amber-500 fill-amber-500 shrink-0" />
            <span>4.9/5 Rating from 12,000+ UAE Customers</span>
          </div>
        </div>

      </div>
    </section>
  );
};
