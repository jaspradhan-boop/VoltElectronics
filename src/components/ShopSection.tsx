import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  ArrowUpDown, 
  Star, 
  Heart, 
  ShoppingBag, 
  Eye, 
  Check, 
  RotateCcw,
  Zap,
  Truck,
  ShieldCheck,
  X
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, POPULAR_BRANDS } from '../data/products';
import { Product, CategoryId, FilterState } from '../types';

interface ShopSectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: CategoryId;
  onSelectCategory: (categoryId: CategoryId) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({
  onSelectProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'discount'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(15000);
  const [onlyDeals, setOnlyDeals] = useState<boolean>(false);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);
  const [addedItemAnimationId, setAddedItemAnimationId] = useState<string | null>(null);

  const handleAddToCartWithFeedback = (product: Product) => {
    onAddToCart(product);
    setAddedItemAnimationId(product.id);
    setTimeout(() => setAddedItemAnimationId(null), 1500);
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'all' && item.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }
      // Price filter
      if (item.price > maxPrice) {
        return false;
      }
      // Deals filter
      if (onlyDeals && !item.isDeal) {
        return false;
      }
      // Stock filter
      if (inStockOnly && !item.inStock) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesBrand = item.brand.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesDescription = item.description.toLowerCase().includes(q);
        return matchesName || matchesBrand || matchesCategory || matchesDescription;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'discount') {
        const discountA = a.originalPrice ? a.originalPrice - a.price : 0;
        const discountB = b.originalPrice ? b.originalPrice - b.price : 0;
        return discountB - discountA;
      }
      return 0; // 'featured' retains natural sequence
    });
  }, [selectedCategory, selectedBrand, maxPrice, onlyDeals, inStockOnly, searchQuery, sortBy]);

  const resetAllFilters = () => {
    onSelectCategory('all');
    setSelectedBrand('all');
    setMaxPrice(15000);
    setOnlyDeals(false);
    setInStockOnly(false);
    onSearchChange('');
    setSortBy('featured');
  };

  const activeFilterCount = (selectedCategory !== 'all' ? 1 : 0) +
    (selectedBrand !== 'all' ? 1 : 0) +
    (maxPrice < 15000 ? 1 : 0) +
    (onlyDeals ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  return (
    <section id="shop-section" className="py-16 sm:py-24 bg-[#F8F9FC] min-h-[800px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title & Breadcrumb */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-8 border-b border-slate-200/90 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
              <span>Store Catalog • Volt Electronics Dubai</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F1219] tracking-tight font-sans">
              {selectedCategory === 'all' 
                ? 'All Electronic Hardware & Gadgets' 
                : CATEGORIES.find(c => c.id === selectedCategory)?.name || 'Product Catalog'}
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> verified UAE items
              {searchQuery && <span> matching "<strong className="text-orange-600">{searchQuery}</strong>"</span>}
            </p>
          </div>

          {/* Sort & Mobile Filter Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-800 text-xs font-bold flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <SlidersHorizontal className="w-4 h-4 text-orange-600" />
              <span>Filters ({activeFilterCount})</span>
            </button>

            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl border border-slate-200/90 shadow-sm text-xs">
              <ArrowUpDown className="w-4 h-4 text-slate-500" />
              <span className="text-slate-500 font-semibold hidden sm:inline">Sort:</span>
              <select
                id="shop-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent font-bold text-slate-900 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured / Top Picks</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Horizontal Pill Carousel for Quick Selection */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => onSelectCategory('all')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                : 'bg-white text-slate-700 hover:bg-slate-100/80 border border-slate-200/90'
            }`}
          >
            <span>All Products</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-black/10 font-mono font-bold">
              {PRODUCTS.length}
            </span>
          </button>
          
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'bg-white text-slate-700 hover:bg-slate-100/80 border border-slate-200/90'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Main 2-Column Layout (Sidebar Filters + Products Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar Filters (Desktop & Mobile Drawer) */}
          <aside className={`lg:col-span-3 space-y-6 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5 font-black text-slate-900 text-sm tracking-tight">
                  <Filter className="w-4 h-4 text-orange-600" />
                  <span>Refine Results</span>
                </div>
                {activeFilterCount > 0 && (
                  <button
                    onClick={resetAllFilters}
                    className="text-xs text-orange-600 hover:text-orange-700 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Brand Filter */}
              <div>
                <label className="text-xs font-black text-slate-900 uppercase tracking-wider block mb-3">
                  Brand / Manufacturer
                </label>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setSelectedBrand('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedBrand === 'all'
                        ? 'bg-[#0F1219] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                    }`}
                  >
                    All Brands
                  </button>
                  {POPULAR_BRANDS.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand === selectedBrand ? 'all' : brand)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedBrand.toLowerCase() === brand.toLowerCase()
                          ? 'bg-orange-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-wider">
                    Max Price
                  </label>
                  <span className="text-xs font-black font-mono text-orange-600">
                    AED {maxPrice.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={15000}
                  step={100}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono font-semibold mt-1.5">
                  <span>AED 300</span>
                  <span>AED 7,500</span>
                  <span>AED 15,000+</span>
                </div>
              </div>

              {/* Toggles: Deals Only & In Stock */}
              <div className="pt-3 border-t border-slate-100 space-y-3.5">
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    Special Deals Only
                  </span>
                  <input
                    type="checkbox"
                    checked={onlyDeals}
                    onChange={(e) => setOnlyDeals(e.target.checked)}
                    className="w-4.5 h-4.5 rounded text-orange-600 focus:ring-orange-500 border-slate-300 cursor-pointer accent-orange-600"
                  />
                </label>

                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 flex items-center gap-2">
                    <Truck className="w-3.5 h-3.5 text-emerald-500" />
                    In Stock (Dubai Stores)
                  </span>
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4.5 h-4.5 rounded text-orange-600 focus:ring-orange-500 border-slate-300 cursor-pointer accent-orange-600"
                  />
                </label>
              </div>

              {/* Dubai Store Guarantee Callout */}
              <div className="p-4 rounded-2xl bg-orange-50/80 border border-orange-200/90 space-y-2">
                <div className="flex items-center gap-2 text-xs font-black text-orange-950">
                  <ShieldCheck className="w-4 h-4 text-orange-600" />
                  <span>Volt Dubai Guarantee</span>
                </div>
                <p className="text-[11px] text-orange-900/80 leading-relaxed font-medium">
                  All devices are 100% genuine Middle East / UAE models with 2-year official manufacturer warranty.
                </p>
              </div>

            </div>
          </aside>

          {/* Right Product Grid */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-14 border border-slate-200 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">No electronics found</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  We couldn't find any products matching your specific filters. Try expanding your price range or clearing brand selections.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="px-6 py-3 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const isWishlisted = wishlistIds.includes(product.id);
                  const isJustAdded = addedItemAnimationId === product.id;

                  return (
                    <div
                      key={product.id}
                      id={`product-card-${product.id}`}
                      className="group bg-white rounded-3xl border border-slate-200/90 hover:border-orange-400/80 p-5 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(255,90,31,0.12)] hover:-translate-y-1.5 relative"
                    >
                      {/* Top Action / Badges */}
                      <div className="relative mb-4">
                        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1">
                          {product.badge && (
                            <span className={`px-2.5 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-sm ${
                              product.badgeType === 'bestseller' 
                                ? 'bg-amber-500 text-slate-950' 
                                : product.badgeType === 'deal'
                                ? 'bg-orange-600 text-white'
                                : product.badgeType === 'new'
                                ? 'bg-emerald-600 text-white'
                                : 'bg-orange-600 text-white'
                            }`}>
                              {product.badge}
                            </span>
                          )}
                        </div>

                        {/* Wishlist Heart Button */}
                        <button
                          id={`wishlist-btn-${product.id}`}
                          onClick={() => onToggleWishlist(product.id)}
                          className="absolute top-2.5 right-2.5 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-600 hover:text-orange-600 transition-colors shadow-sm cursor-pointer hover:scale-105"
                          title="Save to wishlist"
                        >
                          <Heart className={`w-4.5 h-4.5 ${isWishlisted ? 'text-orange-600 fill-orange-600' : ''}`} />
                        </button>

                        {/* Image Container */}
                        <div 
                          className="aspect-square rounded-2xl bg-[#F8F9FC] p-5 flex items-center justify-center overflow-hidden cursor-pointer relative group-hover:bg-slate-100/70 transition-colors"
                          onClick={() => onSelectProduct(product)}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                          {/* Quick View Hover overlay */}
                          <div className="absolute inset-0 bg-[#0F1219]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="px-4 py-2 rounded-xl bg-white/95 text-[#0F1219] text-xs font-bold flex items-center gap-2 shadow-lg">
                              <Eye className="w-4 h-4 text-orange-600" />
                              <span>Quick View</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content Info */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-black text-orange-600 uppercase tracking-wider">
                            {product.brand}
                          </span>
                          <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            <span>{product.rating}</span>
                            <span className="text-slate-400 font-medium">({product.reviewsCount})</span>
                          </div>
                        </div>

                        <h3
                          onClick={() => onSelectProduct(product)}
                          className="text-base font-bold text-slate-900 hover:text-orange-600 transition-colors cursor-pointer line-clamp-2 leading-snug"
                        >
                          {product.name}
                        </h3>

                        {/* Dubai Stock Location & Express badge */}
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-1 font-medium">
                          <Truck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{product.stockLocation}</span>
                        </div>
                      </div>

                      {/* Pricing & Add to Cart Action */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                        <div>
                          <div className="text-lg font-black text-slate-900 font-mono tracking-tight">
                            AED {product.price.toLocaleString()}
                          </div>
                          {product.originalPrice && (
                            <div className="text-xs text-slate-400 line-through font-mono">
                              AED {product.originalPrice.toLocaleString()}
                            </div>
                          )}
                        </div>

                        <button
                          id={`shop-add-cart-${product.id}`}
                          onClick={() => handleAddToCartWithFeedback(product)}
                          className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer ${
                            isJustAdded
                              ? 'bg-emerald-600 text-white'
                              : 'bg-orange-600 hover:bg-orange-500 text-white shadow-orange-600/30'
                          }`}
                        >
                          {isJustAdded ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <ShoppingBag className="w-4 h-4" />
                              <span>Add</span>
                            </>
                          )}
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}
          </main>

        </div>

      </div>
    </section>
  );
};
