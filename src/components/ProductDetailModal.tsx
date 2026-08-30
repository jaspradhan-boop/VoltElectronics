import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Truck, 
  ShieldCheck, 
  MapPin, 
  ShoppingBag, 
  Heart, 
  Share2, 
  Check, 
  RotateCcw,
  Sparkles,
  Zap,
  CreditCard
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedColor?: string, selectedStorage?: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors ? product.colors[0] : '');
  const [selectedStorage, setSelectedStorage] = useState<string>(product.storageOptions ? product.storageOptions[0] : '');
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'delivery'>('overview');
  const [added, setAdded] = useState(false);

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedStorage);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        id="product-detail-modal"
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200/80">
            {/* Main Stage Image */}
            <div className="relative aspect-square w-full rounded-3xl bg-white p-6 sm:p-8 flex items-center justify-center shadow-sm overflow-hidden border border-slate-200/80">
              {discount > 0 && (
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-orange-600 text-white text-xs font-black uppercase tracking-wider shadow-md shadow-orange-600/30">
                  Save {discount}%
                </span>
              )}
              <img 
                src={images[activeImageIndex] || product.image} 
                alt={product.name}
                className="w-full h-full object-contain transition-all duration-300 hover:scale-105"
              />
            </div>

            {/* Thumbnail Carousel */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-16 rounded-2xl bg-white p-2 border-2 transition-all flex items-center justify-center shrink-0 cursor-pointer ${
                      activeImageIndex === idx 
                        ? 'border-orange-600 shadow-md ring-2 ring-orange-500/20' 
                        : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Dubai Store Stock Notification */}
            <div className="mt-5 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-2.5 text-xs text-emerald-950 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <div>
                <span className="font-bold text-emerald-900">Available in Dubai: </span>
                <span>{product.stockLocation} ({product.stockCount} units left)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specs, Variants, Pricing & Actions */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              {/* Brand and Rating Header */}
              <div className="flex items-center justify-between text-xs">
                <span className="px-3 py-1 rounded-xl bg-orange-100/80 text-orange-900 font-bold uppercase tracking-wider border border-orange-200">
                  {product.brand} Official Middle East
                </span>
                <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-400 font-normal">({product.reviewsCount} customer reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug font-sans tracking-tight">
                {product.name}
              </h2>

              {/* Price & Monthly Installment preview */}
              <div className="p-5 rounded-3xl bg-[#0F1219] text-white space-y-3 shadow-xl">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-xs text-zinc-400">Volt UAE Official Price (incl. 5% VAT)</div>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                        AED {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-zinc-400 line-through font-mono">
                          AED {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-orange-600 text-white text-[11px] font-black uppercase tracking-wider">
                    In Stock
                  </span>
                </div>

                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-300">
                  <div className="flex items-center gap-1.5 text-orange-400 font-medium">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Or 4 payments of <strong>AED {Math.round(product.price / 4).toLocaleString()}</strong></span>
                  </div>
                  <span className="text-[10px] bg-[#1A1D28] px-2.5 py-1 rounded-lg text-zinc-300 font-bold border border-zinc-800">
                    Tabby / Tamara 0%
                  </span>
                </div>
              </div>

              {/* Color variant selector if available */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <label className="text-xs font-black text-slate-800 uppercase tracking-wider block mb-2">
                    Select Finish / Color: <span className="text-orange-600 font-bold">{selectedColor}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all border cursor-pointer ${
                          selectedColor === color
                            ? 'bg-orange-600 text-white border-orange-600 shadow-md shadow-orange-600/30 ring-2 ring-orange-500/20'
                            : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200 border-slate-200'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Storage variant selector if available */}
              {product.storageOptions && product.storageOptions.length > 0 && (
                <div>
                  <label className="text-xs font-black text-slate-800 uppercase tracking-wider block mb-2">
                    Configuration / Storage: <span className="text-orange-600 font-bold">{selectedStorage}</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.storageOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setSelectedStorage(opt)}
                        className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all border cursor-pointer ${
                          selectedStorage === opt
                            ? 'bg-[#0F1219] text-white border-[#0F1219] shadow-sm'
                            : 'bg-slate-100/90 text-slate-700 hover:bg-slate-200 border-slate-200'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Tabs: Overview vs Technical Specs */}
              <div className="pt-2">
                <div className="flex border-b border-slate-200 text-xs font-bold">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`py-2 px-4 border-b-2 transition-colors cursor-pointer ${
                      activeTab === 'overview'
                        ? 'border-orange-600 text-orange-600 font-black'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Product Highlights
                  </button>
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`py-2 px-4 border-b-2 transition-colors cursor-pointer ${
                      activeTab === 'specs'
                        ? 'border-orange-600 text-orange-600 font-black'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Tech Specifications
                  </button>
                  <button
                    onClick={() => setActiveTab('delivery')}
                    className={`py-2 px-4 border-b-2 transition-colors cursor-pointer ${
                      activeTab === 'delivery'
                        ? 'border-orange-600 text-orange-600 font-black'
                        : 'border-transparent text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    UAE Delivery & Warranty
                  </button>
                </div>

                <div className="py-3 text-xs text-slate-600 leading-relaxed">
                  {activeTab === 'overview' && (
                    <div className="space-y-2">
                      <p>{product.description}</p>
                      <ul className="space-y-1.5 pt-2">
                        {product.keyFeatures.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === 'specs' && (
                    <div className="divide-y divide-slate-100">
                      {Object.entries(product.specs).map(([k, v]) => (
                        <div key={k} className="py-1.5 flex justify-between gap-4">
                          <span className="font-semibold text-slate-700">{k}</span>
                          <span className="text-slate-900 text-right font-medium">{v}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'delivery' && (
                    <div className="space-y-2.5">
                      <div className="flex items-start gap-2.5 text-slate-800">
                        <Truck className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900">Same-Day Express Courier: </span>
                          <span>Delivery across Dubai, Sharjah & Ajman on orders before 4 PM.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 text-slate-800">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900">Official Warranty: </span>
                          <span>{product.warranty}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5 text-slate-800">
                        <RotateCcw className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900">14-Day Free Returns: </span>
                          <span>Unopened items eligible for instant store exchange or full refund.</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
              <button
                id="modal-wishlist-toggle"
                onClick={() => onToggleWishlist(product.id)}
                className="p-3.5 rounded-2xl border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-rose-600 transition-colors shrink-0 cursor-pointer"
                title="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'text-rose-600 fill-rose-600' : ''}`} />
              </button>

              <button
                id="modal-add-to-cart-btn"
                onClick={handleAdd}
                className={`flex-1 py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer ${
                  added 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-orange-600 hover:bg-orange-500 text-white shadow-orange-600/30'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart • AED {product.price.toLocaleString()}</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
