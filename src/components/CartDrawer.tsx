import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Tag, 
  Check, 
  Sparkles,
  MapPin,
  Clock,
  CreditCard,
  Building,
  CheckCircle2
} from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [promoInput, setPromoInput] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discountPercent?: number; flatDiscount?: number } | null>(null);
  const [promoError, setPromoError] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  // Checkout form state
  const [selectedArea, setSelectedArea] = useState('Downtown Dubai');
  const [addressDetail, setAddressDetail] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('Today (6:00 PM – 9:00 PM)');
  const [paymentMethod, setPaymentMethod] = useState<'applepay' | 'card' | 'tabby' | 'cod'>('applepay');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  
  // Calculate discount
  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.discountPercent) {
      discountAmount = Math.round(rawSubtotal * (appliedPromo.discountPercent / 100));
    } else if (appliedPromo.flatDiscount) {
      discountAmount = Math.min(rawSubtotal, appliedPromo.flatDiscount);
    }
  }

  const freeDeliveryThreshold = 500;
  const isFreeDelivery = rawSubtotal >= freeDeliveryThreshold;
  const deliveryFee = rawSubtotal === 0 ? 0 : (isFreeDelivery ? 0 : 25);
  const subtotalAfterDiscount = Math.max(0, rawSubtotal - discountAmount);
  // UAE VAT (5% inclusive/calculated)
  const vatAmount = Math.round(subtotalAfterDiscount * 0.05);
  const grandTotal = subtotalAfterDiscount + deliveryFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const code = promoInput.trim().toUpperCase();

    if (code === 'VOLT10') {
      setAppliedPromo({ code: 'VOLT10', discountPercent: 10 });
      setPromoInput('');
    } else if (code === 'DUBAI2026') {
      setAppliedPromo({ code: 'DUBAI2026', flatDiscount: 200 });
      setPromoInput('');
    } else if (code === 'EXPRESS') {
      setAppliedPromo({ code: 'EXPRESS', discountPercent: 5 });
      setPromoInput('');
    } else {
      setPromoError('Invalid code. Try VOLT10 or DUBAI2026');
    }
  };

  const handlePlaceMockOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `VOLT-DXB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(generatedRef);
    setOrderComplete(true);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/70 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div 
        id="cart-slideover-drawer"
        className="w-full max-w-md sm:max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Top Header */}
        <div className="p-5 border-b border-zinc-800/80 bg-[#0F1219] text-white flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-orange-600 flex items-center justify-center text-white shadow-md shadow-orange-600/40">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white leading-tight font-sans">Your Tech Cart</h2>
              <p className="text-xs text-orange-400 font-semibold mt-0.5">
                {items.reduce((sum, i) => sum + i.quantity, 0)} Items Selected
              </p>
            </div>
          </div>

          <button
            id="close-cart-drawer-btn"
            onClick={onClose}
            className="w-10 h-10 rounded-2xl bg-[#1A1D28] hover:bg-zinc-800 text-slate-300 flex items-center justify-center transition-colors cursor-pointer border border-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-orange-50/90 px-5 py-3.5 border-b border-orange-100 text-xs">
          <div className="flex items-center justify-between font-bold text-slate-800 mb-1.5">
            <div className="flex items-center gap-2 text-orange-950">
              <Truck className="w-4 h-4 text-orange-600 shrink-0" />
              {isFreeDelivery ? (
                <span className="font-bold text-emerald-800">Unlocked Free Same-Day Dubai Express Delivery!</span>
              ) : (
                <span>Add <strong className="text-orange-600 font-black">AED {(freeDeliveryThreshold - rawSubtotal).toLocaleString()}</strong> for Free Delivery</span>
              )}
            </div>
            <span className="font-mono text-slate-700 font-bold">
              {Math.min(100, Math.round((rawSubtotal / freeDeliveryThreshold) * 100))}%
            </span>
          </div>
          <div className="w-full h-2.5 bg-orange-200/80 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-600 to-amber-500 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(100, (rawSubtotal / freeDeliveryThreshold) * 100)}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="text-base font-black text-slate-800">Your cart is currently empty</h3>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Explore our catalog of flagship electronics, M4 MacBooks, audio gear, and gaming hardware.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all shadow-md shadow-orange-600/30 cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                id={`cart-item-${item.product.id}`}
                className="p-4 rounded-3xl bg-white border border-slate-200/90 hover:border-orange-300 shadow-sm flex gap-4 relative group transition-all"
              >
                {/* Image */}
                <div className="w-20 h-20 rounded-2xl bg-slate-100/80 p-2 flex items-center justify-center shrink-0 border border-slate-200/60">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1 leading-snug">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-slate-400 hover:text-rose-600 p-1 transition-colors cursor-pointer"
                        title="Remove product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Variant tags */}
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-1">
                      {item.selectedColor && (
                        <span className="bg-slate-100 px-2.5 py-0.5 rounded-lg text-slate-700 font-medium">
                          {item.selectedColor}
                        </span>
                      )}
                      {item.selectedStorage && (
                        <span className="bg-slate-100 px-2.5 py-0.5 rounded-lg text-slate-700 font-medium">
                          {item.selectedStorage}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex items-center justify-between pt-2 mt-1">
                    <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-xs transition-all cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-bold text-slate-800 font-mono">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-lg flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-xs transition-all cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right font-mono">
                      <div className="text-sm font-black text-slate-900">
                        AED {(item.product.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Bottom Actions & Pricing Summary */}
        {items.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-[#F8F9FC] space-y-4">
            
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="space-y-1">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Coupon (e.g. VOLT10)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-2xl pl-9 pr-3 py-2.5 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#0F1219] hover:bg-zinc-800 text-white rounded-2xl text-xs font-bold transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
              {promoError && <p className="text-[11px] text-rose-600 font-medium pl-1">{promoError}</p>}
              {appliedPromo && (
                <div className="flex items-center justify-between text-xs text-emerald-800 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Coupon <strong>{appliedPromo.code}</strong> applied!
                  </span>
                  <button 
                    type="button"
                    onClick={() => setAppliedPromo(null)}
                    className="text-[10px] text-slate-500 hover:text-rose-600 underline font-bold cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              )}
            </form>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-slate-600 pt-1">
              <div className="flex justify-between">
                <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                <span className="font-mono font-medium text-slate-900">AED {rawSubtotal.toLocaleString()}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Discount ({appliedPromo?.code})</span>
                  <span className="font-mono">- AED {discountAmount.toLocaleString()}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Dubai Express Delivery</span>
                <span className="font-mono font-medium text-slate-900">
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-600 font-bold">FREE</span>
                  ) : (
                    `AED ${deliveryFee}`
                  )}
                </span>
              </div>

              <div className="flex justify-between text-[11px] text-slate-500">
                <span>Estimated UAE VAT (5% included)</span>
                <span className="font-mono">AED {vatAmount.toLocaleString()}</span>
              </div>

              <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                <span>Total (AED)</span>
                <span className="font-mono text-orange-600 text-lg font-black">
                  AED {grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              id="proceed-to-checkout-btn"
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full py-3.5 px-6 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm transition-all shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
            >
              <span>Proceed to Express Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        )}

      </div>

      {/* Interactive Mock Express Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-60 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6">
            
            {orderComplete ? (
              /* Order Confirmation Step */
              <div className="text-center space-y-4 py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Order Confirmed!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for shopping with Volt Electronics Dubai. Your express dispatch order has been received.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-sans">Order Reference:</span>
                    <span className="font-bold text-orange-600">{orderRef}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-sans">Delivery Neighborhood:</span>
                    <span className="font-bold text-slate-900">{selectedArea}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-sans">Slot:</span>
                    <span className="font-bold text-slate-900">{selectedSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-sans">Total Paid / COD:</span>
                    <span className="font-bold text-emerald-600">AED {grandTotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsCheckoutOpen(false);
                      setOrderComplete(false);
                      onClose();
                    }}
                    className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold shadow-md shadow-orange-600/30 cursor-pointer"
                  >
                    Back to Store
                  </button>
                </div>
              </div>
            ) : (
              /* Checkout Form */
              <form onSubmit={handlePlaceMockOrder} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2 font-black text-slate-900 text-lg">
                    <Truck className="w-5 h-5 text-orange-600" />
                    <span>Dubai Express Delivery</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsCheckoutOpen(false)}
                    className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Delivery Zone Selector */}
                <div>
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1.5">
                    Dubai Neighborhood / Area
                  </label>
                  <select
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
                  >
                    <option value="Downtown Dubai">Downtown Dubai / Burj Khalifa District</option>
                    <option value="Dubai Marina">Dubai Marina & JBR</option>
                    <option value="Palm Jumeirah">Palm Jumeirah & Bluewaters</option>
                    <option value="Business Bay">Business Bay & DIFC</option>
                    <option value="Al Barsha">Al Barsha & Mall of the Emirates Area</option>
                    <option value="Deira & Bur Dubai">Deira & Bur Dubai Old City</option>
                    <option value="Mirdif & Dubai Hills">Dubai Hills Estate & Mirdif</option>
                    <option value="Sharjah Express">Sharjah Express Delivery</option>
                  </select>
                </div>

                {/* Street & Villa/Apartment Details */}
                <div>
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1.5">
                    Building / Villa & Street Address
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tower 2, Apt 1404, Marasi Drive"
                    value={addressDetail}
                    onChange={(e) => setAddressDetail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Delivery Time Slot */}
                <div>
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1.5">
                    Select Courier Time Slot
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedSlot('Today (6:00 PM – 9:00 PM)')}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                        selectedSlot.includes('Today')
                          ? 'border-orange-600 bg-orange-50 text-slate-900 ring-2 ring-orange-500/20'
                          : 'border-slate-200 bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-600" />
                        Today Evening
                      </div>
                      <div className="text-[11px] text-slate-500">6:00 PM – 9:00 PM</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedSlot('Tomorrow Morning (9:00 AM – 1:00 PM)')}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                        selectedSlot.includes('Tomorrow')
                          ? 'border-orange-600 bg-orange-50 text-slate-900 ring-2 ring-orange-500/20'
                          : 'border-slate-200 bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="font-bold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-600" />
                        Tomorrow Morning
                      </div>
                      <div className="text-[11px] text-slate-500">9:00 AM – 1:00 PM</div>
                    </button>
                  </div>
                </div>

                {/* Payment Options (Placeholder) */}
                <div>
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-1.5">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('applepay')}
                      className={`p-2.5 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        paymentMethod === 'applepay'
                          ? 'border-orange-600 bg-slate-900 text-white'
                          : 'border-slate-200 bg-slate-50 text-slate-800'
                      }`}
                    >
                      <span> Apple Pay</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-2.5 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        paymentMethod === 'card'
                          ? 'border-orange-600 bg-slate-900 text-white'
                          : 'border-slate-200 bg-slate-50 text-slate-800'
                      }`}
                    >
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Card on Delivery</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('tabby')}
                      className={`p-2.5 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        paymentMethod === 'tabby'
                          ? 'border-emerald-600 bg-emerald-950 text-emerald-200'
                          : 'border-slate-200 bg-slate-50 text-slate-800'
                      }`}
                    >
                      <span>Tabby 4x (0%)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-2.5 rounded-xl border font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        paymentMethod === 'cod'
                          ? 'border-orange-600 bg-slate-900 text-white'
                          : 'border-slate-200 bg-slate-50 text-slate-800'
                      }`}
                    >
                      <span>Cash on Delivery</span>
                    </button>
                  </div>
                </div>

                {/* Grand Total & Final Confirm */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Payable Amount</div>
                    <div className="text-xl font-black text-slate-900 font-mono">
                      AED {grandTotal.toLocaleString()}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs transition-all shadow-md shadow-orange-600/30 cursor-pointer"
                  >
                    Confirm Express Order
                  </button>
                </div>

              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
