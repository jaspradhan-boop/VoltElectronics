export type CategoryId = 
  | 'all'
  | 'smartphones'
  | 'laptops'
  | 'audio'
  | 'gaming'
  | 'wearables'
  | 'cameras'
  | 'smarthome'
  | 'accessories';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: CategoryId;
  price: number; // in AED
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  badgeType?: 'deal' | 'new' | 'bestseller' | 'exclusive';
  image: string;
  gallery: string[];
  description: string;
  keyFeatures: string[];
  specs: Record<string, string>;
  inStock: boolean;
  stockCount: number;
  stockLocation: string; // e.g., 'Dubai Mall Flagship'
  isDeal?: boolean;
  warranty: string; // e.g., '2-Year Official UAE Warranty'
  deliveryTime: string; // e.g., 'Same-Day Dubai Delivery (by 8 PM)'
  colors?: string[];
  storageOptions?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedStorage?: string;
}

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  iconName: string;
  itemCount: number;
  description: string;
  image: string;
  highlight: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  area: string;
  address: string;
  timings: string;
  phone: string;
  whatsapp: string;
  isFlagship?: boolean;
  image: string;
  features: string[];
}

export interface DealBanner {
  id: string;
  title: string;
  subtitle: string;
  discountBadge: string;
  code: string;
  endsInHours: number;
  featuredProductId: string;
  bgGradient: string;
}

export interface FilterState {
  searchQuery: string;
  selectedCategory: CategoryId;
  selectedBrand: string;
  priceRange: [number, number];
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'discount';
  onlyDeals: boolean;
  inStockOnly: boolean;
}
