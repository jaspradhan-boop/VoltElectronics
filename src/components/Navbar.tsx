import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Search, 
  ShoppingBag, 
  Menu, 
  X, 
  Heart, 
  MapPin, 
  Phone, 
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Truck
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string, categoryId?: string) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartTotal: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onNavigate,
  cartCount,
  wishlistCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
  cartTotal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [cartBadgeBump, setCartBadgeBump] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setCartBadgeBump(true);
      const timer = setTimeout(() => setCartBadgeBump(false), 400);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop' },
    { id: 'categories', label: 'Categories' },
    { id: 'deals', label: 'Deals', badge: 'Hot' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Announcement Bar */}
      <div className="bg-[#0B0D13] text-slate-300 text-xs py-2.5 px-4 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 font-medium text-orange-400">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-white font-bold tracking-tight">Dubai Express:</span> Same-Day Delivery on orders placed before 4 PM
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-zinc-400 text-[11px] font-medium pl-2 border-l border-zinc-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Genuine TRA Approved Models
            </span>
          </div>

          <div className="flex items-center gap-3.5 text-zinc-300 text-xs">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-orange-500" />
              <span className="font-medium">Dubai, UAE</span>
            </div>
            <span className="text-zinc-700">/</span>
            <a 
              href="tel:+97148008658" 
              className="hover:text-orange-400 transition-colors flex items-center gap-1.5 font-semibold text-zinc-200"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <span>+971 4 800 VOLT</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">/</span>
            <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-700/80 font-bold text-[11px] text-orange-300 shadow-xs">
              <span>🇦🇪 AED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full bg-[#11141D] text-white border-b border-zinc-800/80 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl bg-[#11141D]/95 shadow-2xl shadow-black/40' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22 gap-4">
            
            {/* Brand Logo */}
            <div 
              id="brand-logo"
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3.5 cursor-pointer group select-none shrink-0"
            >
              <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-400 shadow-lg shadow-orange-600/30 group-hover:scale-105 group-hover:shadow-orange-600/50 transition-all duration-300 border border-orange-300/40">
                <Zap className="w-6 h-6 text-white fill-white group-hover:rotate-6 transition-transform" />
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400 border-2 border-[#11141D]"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 tracking-tight">
                  <span className="text-2xl sm:text-2.5xl font-black tracking-tight text-white font-sans">
                    VOLT
                  </span>
                  <span className="text-2xl sm:text-2.5xl font-light tracking-wide text-orange-400">
                    ELECTRONICS
                  </span>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                  Dubai Flagship Tech
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1.5 bg-zinc-900/60 p-1.5 rounded-2xl border border-zinc-800/80">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                      isActive 
                        ? 'text-white bg-orange-600 shadow-md shadow-orange-600/30' 
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-800/70'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className={`px-1.5 py-0.5 text-[9px] font-black uppercase rounded-md leading-tight ${
                        isActive ? 'bg-white text-orange-700' : 'bg-orange-500 text-white'
                      }`}>
                        {link.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Search Bar - Desktop / Tablet */}
            <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm relative">
              <div className={`w-full flex items-center bg-zinc-900/90 rounded-2xl border transition-all duration-200 px-3.5 py-2.5 ${
                isSearchFocused 
                  ? 'border-orange-500 ring-4 ring-orange-500/20 bg-zinc-900 shadow-lg shadow-orange-950/20' 
                  : 'border-zinc-700/80 hover:border-zinc-600'
              }`}>
                <Search className="w-4 h-4 text-zinc-400 shrink-0" />
                <input
                  id="desktop-search-input"
                  type="text"
                  placeholder="Search iPhone, PS5, M4 Mac, Sony..."
                  value={searchQuery}
                  onChange={(e) => {
                    onSearchChange(e.target.value);
                    if (activeTab !== 'shop') onNavigate('shop');
                  }}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full bg-transparent px-3 text-sm text-white placeholder-zinc-400 focus:outline-none font-medium"
                />
                {searchQuery && (
                  <button 
                    onClick={() => onSearchChange('')}
                    className="text-xs text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors"
                    title="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Action Icons */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Wishlist Button */}
              <button
                id="navbar-wishlist-btn"
                onClick={() => onNavigate('shop')}
                title="Wishlist"
                className="hidden sm:flex items-center justify-center w-11 h-11 rounded-2xl text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-all relative border border-zinc-800 hover:border-zinc-700 cursor-pointer"
              >
                <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-rose-500 text-white text-[10px] font-bold shadow-md">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Shopping Cart Button with Item-Count Badge */}
              <button
                id="navbar-cart-btn"
                onClick={onOpenCart}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 active:scale-95 border border-orange-400/40 cursor-pointer ${
                  cartBadgeBump ? 'scale-105 bg-orange-500 ring-4 ring-amber-400/30' : ''
                }`}
              >
                <div className="relative flex items-center justify-center">
                  <ShoppingBag className={`w-5 h-5 transition-transform ${cartBadgeBump ? 'scale-125 text-amber-200' : ''}`} />
                  {cartCount > 0 && (
                    <span 
                      id="cart-badge-count"
                      key={cartCount}
                      className={`absolute -top-2.5 -right-2.5 min-w-[20px] h-[20px] px-1 flex items-center justify-center rounded-full bg-white text-orange-700 font-black text-[11px] shadow-md border-2 border-[#11141D] transition-all duration-200 ${
                        cartBadgeBump ? 'scale-125 bg-amber-300 text-slate-950 animate-pulse' : 'scale-100'
                      }`}
                    >
                      {cartCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:flex flex-col items-start leading-none">
                  <span className="text-[10px] text-orange-100 uppercase tracking-wider font-bold">Cart</span>
                  <span className="text-xs font-black font-mono">
                    {cartTotal > 0 ? `AED ${cartTotal.toLocaleString()}` : '0 Items'}
                  </span>
                </div>
              </button>

              {/* Mobile Hamburger Menu Toggle Button */}
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-2xl bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700/80 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar (Directly below main bar on smaller screens) */}
        <div className="md:hidden px-4 pb-3">
          <div className="w-full flex items-center bg-zinc-900 rounded-2xl border border-zinc-700/80 px-3.5 py-2.5 text-sm">
            <Search className="w-4 h-4 text-zinc-400 mr-2 shrink-0" />
            <input
              id="mobile-search-input"
              type="text"
              placeholder="Search electronics, brands, models..."
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                if (activeTab !== 'shop') onNavigate('shop');
              }}
              className="w-full bg-transparent text-white placeholder-zinc-400 focus:outline-none font-medium"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')}
                className="text-xs text-zinc-400 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown / Slide Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-zinc-800 bg-[#11141D] px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30' 
                        : 'bg-zinc-900/90 text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge ? (
                      <span className="px-1.5 py-0.5 text-[10px] font-black rounded-md bg-orange-500 text-white">
                        {link.badge}
                      </span>
                    ) : (
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Contact & Store Location Info for Mobile */}
            <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-center justify-between text-zinc-400 font-semibold">
                <span>📍 Dubai Flagship Locations:</span>
                <span className="text-orange-400 font-bold">Open Daily</span>
              </div>
              <div className="text-zinc-200 font-medium leading-relaxed">
                Dubai Mall (Fashion Ave) • Mall of the Emirates • Sheikh Zayed Rd
              </div>
              <div className="pt-2.5 border-t border-zinc-800 flex items-center justify-between">
                <a 
                  href="tel:+97148008658" 
                  className="text-orange-400 font-bold flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +971 4 800 VOLT
                </a>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" /> Same-Day UAE
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
