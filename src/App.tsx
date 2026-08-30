import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProductsSection } from './components/FeaturedProductsSection';
import { CategoriesSection } from './components/CategoriesSection';
import { DealsSection } from './components/DealsSection';
import { ShopSection } from './components/ShopSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { PRODUCTS } from './data/products';
import { Product, CartItem, CategoryId } from './types';
import { Check, Heart, ShoppingBag, X } from 'lucide-react';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Cart & Wishlist State with local persistence
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('volt_cart');
      return saved ? JSON.parse(saved) : [
        { product: PRODUCTS[3], quantity: 1, selectedColor: 'Midnight Blue' }, // Sony XM5
        { product: PRODUCTS[0], quantity: 1, selectedColor: 'Desert Titanium', selectedStorage: '256GB' } // iPhone 16 Pro Max
      ];
    } catch {
      return [];
    }
  });

  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('volt_wishlist');
      return saved ? JSON.parse(saved) : ['volt-ip16pm', 'volt-sony-xm5', 'volt-ps5-pro'];
    } catch {
      return [];
    }
  });

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<{ title: string; subtitle?: string; iconType?: 'cart' | 'heart' } | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('volt_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem('volt_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  const showToast = (title: string, subtitle?: string, iconType: 'cart' | 'heart' = 'cart') => {
    setToastMessage({ title, subtitle, iconType });
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Cart operations
  const handleAddToCart = (product: Product, selectedColor?: string, selectedStorage?: string) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => 
        item.product.id === product.id &&
        item.selectedColor === (selectedColor || (product.colors ? product.colors[0] : undefined)) &&
        item.selectedStorage === (selectedStorage || (product.storageOptions ? product.storageOptions[0] : undefined))
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            quantity: 1,
            selectedColor: selectedColor || (product.colors ? product.colors[0] : undefined),
            selectedStorage: selectedStorage || (product.storageOptions ? product.storageOptions[0] : undefined)
          }
        ];
      }
    });

    showToast(`Added to cart`, `${product.name.slice(0, 35)}...`, 'cart');
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCartItems(prev => prev.map(item => item.product.id === productId ? { ...item, quantity } : item));
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist toggle
  const handleToggleWishlist = (productId: string) => {
    setWishlistIds(prev => {
      if (prev.includes(productId)) {
        showToast('Removed from wishlist', undefined, 'heart');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to wishlist', undefined, 'heart');
        return [...prev, productId];
      }
    });
  };

  // Navigation router
  const handleNavigate = (tab: string, categoryId?: string) => {
    setActiveTab(tab);
    if (categoryId) {
      setSelectedCategory(categoryId as CategoryId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategoryFromWidget = (catId: CategoryId) => {
    setSelectedCategory(catId);
    setActiveTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartValue = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      
      {/* Sticky Top Navbar */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartTotal={totalCartValue}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* Render Views based on tab */}
        {activeTab === 'home' && (
          <>
            <Hero
              featuredProduct={PRODUCTS[0]} // iPhone 16 Pro Max
              onShopClick={() => handleNavigate('shop')}
              onDealsClick={() => handleNavigate('deals')}
              onSelectProduct={(p) => setSelectedProductForModal(p)}
              onSelectCategory={handleSelectCategoryFromWidget}
            />
            <FeaturedProductsSection
              onSelectProduct={(p) => setSelectedProductForModal(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              onExploreMore={() => handleNavigate('shop')}
            />
            <CategoriesSection onSelectCategory={handleSelectCategoryFromWidget} />
            <DealsSection
              onSelectProduct={(p) => setSelectedProductForModal(p)}
              onAddToCart={(p) => handleAddToCart(p)}
            />
            <ShopSection
              onSelectProduct={(p) => setSelectedProductForModal(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <AboutSection />
            <ContactSection />
          </>
        )}

        {activeTab === 'shop' && (
          <ShopSection
            onSelectProduct={(p) => setSelectedProductForModal(p)}
            onAddToCart={(p) => handleAddToCart(p)}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}

        {activeTab === 'categories' && (
          <>
            <CategoriesSection onSelectCategory={handleSelectCategoryFromWidget} />
            <ShopSection
              onSelectProduct={(p) => setSelectedProductForModal(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </>
        )}

        {activeTab === 'deals' && (
          <>
            <DealsSection
              onSelectProduct={(p) => setSelectedProductForModal(p)}
              onAddToCart={(p) => handleAddToCart(p)}
            />
            <ShopSection
              onSelectProduct={(p) => setSelectedProductForModal(p)}
              onAddToCart={(p) => handleAddToCart(p)}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </>
        )}

        {activeTab === 'about' && (
          <AboutSection />
        )}

        {activeTab === 'contact' && (
          <ContactSection />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals & Slide-over Drawers */}
      <ProductDetailModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProductForModal ? wishlistIds.includes(selectedProductForModal.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#181a20] text-white px-4 py-3 rounded-2xl shadow-2xl border border-zinc-800 animate-in slide-in-from-bottom-5 duration-200">
          <div className="w-8 h-8 rounded-xl bg-orange-600 flex items-center justify-center text-white shrink-0 shadow-sm shadow-orange-600/30">
            {toastMessage.iconType === 'heart' ? (
              <Heart className="w-4 h-4 fill-white" />
            ) : (
              <ShoppingBag className="w-4 h-4" />
            )}
          </div>
          <div className="text-xs">
            <div className="font-bold text-white">{toastMessage.title}</div>
            {toastMessage.subtitle && (
              <div className="text-zinc-300 text-[11px] truncate max-w-xs">{toastMessage.subtitle}</div>
            )}
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-zinc-400 hover:text-white p-1 ml-2 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

    </div>
  );
}
