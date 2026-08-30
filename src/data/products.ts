import { Product, CategoryInfo, StoreLocation, DealBanner } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    iconName: 'Smartphone',
    itemCount: 24,
    description: 'Flagship iOS & Android devices with official UAE warranty',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop',
    highlight: 'iPhone 16 Series & Galaxy S25 in Stock'
  },
  {
    id: 'laptops',
    name: 'Laptops & Computers',
    iconName: 'Laptop',
    itemCount: 18,
    description: 'Workstations, M4 MacBooks, and high-performance gaming rigs',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    highlight: 'M4 Max & RTX 4090 Rigs'
  },
  {
    id: 'audio',
    name: 'Audio & Sound',
    iconName: 'Headphones',
    itemCount: 32,
    description: 'Noise-cancelling headphones, audiophile soundbars & Hi-Fi',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    highlight: 'Sony XM5 & AirPods Max'
  },
  {
    id: 'gaming',
    name: 'Gaming & VR',
    iconName: 'Gamepad2',
    itemCount: 28,
    description: 'Next-gen consoles, OLED handhelds & esports peripherals',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop',
    highlight: 'PS5 Pro & OLED Consoles'
  },
  {
    id: 'wearables',
    name: 'Wearables & Watches',
    iconName: 'Watch',
    itemCount: 16,
    description: 'Titanium sports smartwatches, fitness trackers & bands',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop',
    highlight: 'Apple Watch Ultra 2 & Garmin Fenix'
  },
  {
    id: 'cameras',
    name: 'Cameras & Drones',
    iconName: 'Camera',
    itemCount: 14,
    description: 'Full-frame 4K mirrorless systems and cinematic 4K drones',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
    highlight: 'DJI Mavic 3 & Sony Alpha'
  },
  {
    id: 'smarthome',
    name: 'Smart Living & TV',
    iconName: 'Tv',
    itemCount: 22,
    description: 'OLED 4K cinema screens, smart lighting and robot vacuums',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=800&auto=format&fit=crop',
    highlight: 'LG OLED Evo & Dyson Series'
  },
  {
    id: 'accessories',
    name: 'Tech Accessories',
    iconName: 'Cpu',
    itemCount: 45,
    description: 'GaN ultra-fast chargers, Thunderbolt docks, and cases',
    image: 'https://images.unsplash.com/photo-1622445262464-84b1456045b6?q=80&w=800&auto=format&fit=crop',
    highlight: 'MagSafe & 140W GaN Charging'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'volt-ip16pm',
    name: 'Apple iPhone 16 Pro Max 256GB - Desert Titanium',
    brand: 'Apple',
    category: 'smartphones',
    price: 5099,
    originalPrice: 5499,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Dubai Bestseller',
    badgeType: 'bestseller',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'The definitive flagship iPhone with Aerospace-grade Grade 5 titanium, revolutionary A18 Pro chip with 6-core GPU, Camera Control capacitive sensor, and 4K 120fps Dolby Vision recording.',
    keyFeatures: [
      'A18 Pro chip with Apple Intelligence readiness',
      '48MP Fusion Camera with 5x Optical Telephoto',
      '6.9-inch Super Retina XDR with ProMotion 120Hz',
      'Battery life up to 33 hours of video playback'
    ],
    specs: {
      'Processor': 'Apple A18 Pro (3nm)',
      'Display': '6.9" OLED Super Retina XDR 120Hz',
      'Camera': '48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto',
      'Storage': '256GB NVMe',
      'Connectivity': '5G Ultra-Wideband, Wi-Fi 7, Bluetooth 5.3',
      'Warranty': '1 Year Apple Official UAE + 1 Year Volt Care'
    },
    inStock: true,
    stockCount: 18,
    stockLocation: 'Dubai Mall Flagship & MOE Showroom',
    isDeal: true,
    warranty: '2-Year Official Apple UAE Warranty (TRA Approved)',
    deliveryTime: 'Same-Day Dubai Express (Order in 3h for 7 PM delivery)',
    colors: ['Desert Titanium', 'Natural Titanium', 'White Titanium', 'Black Titanium'],
    storageOptions: ['256GB', '512GB', '1TB']
  },
  {
    id: 'volt-s25u',
    name: 'Samsung Galaxy S25 Ultra 5G AI Edition 512GB - Titanium Silver',
    brand: 'Samsung',
    category: 'smartphones',
    price: 4899,
    originalPrice: 5399,
    rating: 4.8,
    reviewsCount: 98,
    badge: 'Save AED 500',
    badgeType: 'deal',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Galaxy AI is here. Powered by Snapdragon 8 Elite for Galaxy, built-in S-Pen, and a 200MP Quad Telephoto imaging system with titanium chassis.',
    keyFeatures: [
      'Snapdragon 8 Elite for Galaxy (3nm)',
      '200MP Main + 50MP 5x Periscope + S Pen included',
      '6.8-inch Dynamic AMOLED 2X flat display with Anti-Reflective armor',
      'Integrated Galaxy AI Live Translate & Circle to Search'
    ],
    specs: {
      'Processor': 'Snapdragon 8 Elite Mobile Platform',
      'RAM & Storage': '16GB RAM / 512GB UFS 4.0',
      'Display': '6.8" QHD+ Dynamic AMOLED 2X 1-120Hz',
      'Battery': '5000mAh with 45W Fast Charging',
      'OS': 'Android 15 with One UI 7'
    },
    inStock: true,
    stockCount: 12,
    stockLocation: 'Sheikh Zayed Rd Experience Center',
    isDeal: true,
    warranty: '2-Year Samsung Gulf Official Warranty',
    deliveryTime: 'Same-Day Dubai Express Delivery',
    colors: ['Titanium Silver', 'Titanium Black', 'Titanium Jade Green'],
    storageOptions: ['256GB', '512GB', '1TB']
  },
  {
    id: 'volt-mbp16-m4',
    name: 'MacBook Pro 16" Liquid Retina XDR - M4 Max (36-core GPU, 36GB RAM, 1TB SSD)',
    brand: 'Apple',
    category: 'laptops',
    price: 13999,
    originalPrice: 14799,
    rating: 5.0,
    reviewsCount: 45,
    badge: 'Pro Choice',
    badgeType: 'exclusive',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Unprecedented speed and workstation-grade compute power. Features the Apple M4 Max chip, 1600 nits peak brightness Liquid Retina XDR display, up to 24 hours battery life and 3x Thunderbolt 5 ports.',
    keyFeatures: [
      '14-Core CPU, 32-Core GPU, 16-Core Neural Engine',
      '16.2-inch Liquid Retina XDR with Nano-Texture option',
      '36GB Unified Memory with 400GB/s bandwidth',
      'Studio-grade 3-mic array and 6-speaker sound system with Spatial Audio'
    ],
    specs: {
      'Chip': 'Apple M4 Max',
      'Memory': '36GB Unified RAM',
      'Storage': '1TB Ultra-fast NVMe SSD',
      'Ports': '3x Thunderbolt 5, HDMI 2.1, SDXC slot, MagSafe 3',
      'Weight': '2.14 kg Space Black'
    },
    inStock: true,
    stockCount: 7,
    stockLocation: 'Dubai Mall Flagship Hub',
    isDeal: false,
    warranty: '2-Year Official Apple Middle East Warranty',
    deliveryTime: 'Free Dubai White-Glove Courier Delivery',
    colors: ['Space Black', 'Silver'],
    storageOptions: ['1TB SSD', '2TB SSD', '4TB SSD']
  },
  {
    id: 'volt-sony-xm5',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones - Midnight Blue',
    brand: 'Sony',
    category: 'audio',
    price: 1199,
    originalPrice: 1499,
    rating: 4.9,
    reviewsCount: 260,
    badge: 'Deal of the Week',
    badgeType: 'deal',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Industry-leading noise cancellation powered by two processors and 8 microphones. High-Resolution Audio with LDAC support, precise voice pickup technology, and 30-hour battery life.',
    keyFeatures: [
      'Auto NC Optimizer adjusting cancellation automatically based on wearing conditions',
      'Specially designed 30mm driver unit with carbon fiber composite dome',
      'Ultra-comfortable lightweight soft fit leather',
      'Multipoint connection pairing 2 Bluetooth devices simultaneously'
    ],
    specs: {
      'Driver Unit': '30mm Neodymium',
      'Battery Life': '30 Hours (NC On) / 40 Hours (NC Off)',
      'Quick Charge': '3 min charge gives 3 hours playback',
      'Codecs': 'LDAC, AAC, SBC',
      'Weight': '250g'
    },
    inStock: true,
    stockCount: 35,
    stockLocation: 'All Dubai Stores & Same-Day Dispatch Hub',
    isDeal: true,
    warranty: '1-Year Sony MEA Official Warranty',
    deliveryTime: 'Same-Day Delivery in Dubai (3-Hour Express Available)',
    colors: ['Midnight Blue', 'Platinum Silver', 'Black']
  },
  {
    id: 'volt-ps5-pro',
    name: 'Sony PlayStation 5 Pro Console 2TB SSD with DualSense Wireless Controller',
    brand: 'Sony',
    category: 'gaming',
    price: 2999,
    originalPrice: 3299,
    rating: 4.9,
    reviewsCount: 88,
    badge: 'New Launch',
    badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Experience advanced PlayStation Spectral Super Resolution (PSSR) AI-driven upscaling, upgraded GPU with 67% more compute units, advanced Ray Tracing, and massive 2TB high-speed SSD.',
    keyFeatures: [
      'PlayStation Spectral Super Resolution (PSSR) 4K/60-120fps gaming',
      'Advanced Ray Tracing reflection and refraction engine',
      'Full backwards compatibility with over 8,500 PS4 & PS5 titles',
      'Wi-Fi 7 wireless network hardware for lightning fast downloads'
    ],
    specs: {
      'Storage': '2TB High-Speed NVMe SSD',
      'Resolution': 'Native 4K, 8K ready, up to 120 FPS output',
      'Audio': 'Tempest 3D AudioTech',
      'Includes': 'Console, DualSense Controller, Astro\'s Playroom pre-installed',
      'Region': 'UAE / Middle East Official Edition'
    },
    inStock: true,
    stockCount: 14,
    stockLocation: 'Dubai Mall & City Centre Mirdif',
    isDeal: true,
    warranty: '2-Year Jumbo Sony UAE Warranty',
    deliveryTime: 'Same-Day Express Dubai Delivery',
    colors: ['Signature White/Black']
  },
  {
    id: 'volt-aw-ultra2',
    name: 'Apple Watch Ultra 2 GPS + Cellular 49mm Titanium - Orange Ocean Band',
    brand: 'Apple',
    category: 'wearables',
    price: 3199,
    originalPrice: 3499,
    rating: 4.9,
    reviewsCount: 114,
    badge: 'Popular',
    badgeType: 'bestseller',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'The ultimate sports and adventure watch. Aerospace-grade 49mm titanium case, S9 SiP processor with Double Tap gesture, 3000 nits ultra-bright display, precision dual-frequency GPS, and up to 72h battery in Low Power Mode.',
    keyFeatures: [
      'Precision Dual-Frequency L1 & L5 GPS',
      '100m Water Resistance & EN13319 Recreational Dive Certified up to 40m',
      '86dB emergency siren audible up to 180 meters',
      'Modular Ultra watch face displaying real-time depth & altitude'
    ],
    specs: {
      'Case': '49mm Titanium Grade 5',
      'Screen': 'Always-On Retina Sapphire Crystal (3000 nits)',
      'Battery': 'Up to 36 hours standard / 72 hours Low Power Mode',
      'Sensors': 'Depth Gauge, Water Temp, ECG, Blood Oxygen, Compass',
      'Band': 'Ocean Band (High-grade fluoroelastomer)'
    },
    inStock: true,
    stockCount: 20,
    stockLocation: 'Mall of the Emirates & Dubai Mall',
    isDeal: true,
    warranty: '2-Year Official Apple UAE Warranty',
    deliveryTime: 'Same-Day Dubai Express Delivery',
    colors: ['Titanium + Orange Ocean', 'Titanium + Blue Ocean', 'Titanium + Trail Loop']
  },
  {
    id: 'volt-dji-mavic3p',
    name: 'DJI Mavic 3 Pro Cine Drone with Hasselblad Triple-Camera System & RC Pro',
    brand: 'DJI',
    category: 'cameras',
    price: 9499,
    originalPrice: 10299,
    rating: 4.9,
    reviewsCount: 37,
    badge: 'Pro Creator',
    badgeType: 'exclusive',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Flagship tri-camera aerial imaging system featuring a 4/3 CMOS Hasselblad camera, 70mm medium telephoto, and 166mm telephoto camera. Apple ProRes codec on all three cameras with 1TB internal SSD storage.',
    keyFeatures: [
      '4/3 CMOS Hasselblad 5.1K/50fps and 4K/120fps recording',
      '43-Minute Maximum Flight Time per battery',
      'Omnidirectional Obstacle Sensing with APAS 5.0',
      '15km HD O3+ Video Transmission with 1080p/60fps live feed'
    ],
    specs: {
      'Main Camera': '4/3 CMOS Hasselblad 20MP, f/2.8-f/11',
      'Tele Cameras': '1/1.3" CMOS 70mm + 1/2" CMOS 166mm',
      'Video Codec': 'Apple ProRes 422 HQ, H.264, H.265',
      'Storage': 'Built-in 1TB SSD + MicroSD slot',
      'Controller': 'DJI RC Pro with 1000-nit 5.5" screen'
    },
    inStock: true,
    stockCount: 5,
    stockLocation: 'Sheikh Zayed Rd Flagship',
    isDeal: false,
    warranty: '1-Year DJI Official UAE Warranty + GCAA Registration Assistance',
    deliveryTime: 'Same-Day Dubai Courier Delivery',
    colors: ['DJI Slate Gray']
  },
  {
    id: 'volt-lg-g4-oled',
    name: 'LG 65" G4 OLED evo 4K Smart TV with α11 AI Processor & Zero-Gap Wall Mount',
    brand: 'LG',
    category: 'smarthome',
    price: 8499,
    originalPrice: 9999,
    rating: 4.9,
    reviewsCount: 52,
    badge: 'Save AED 1,500',
    badgeType: 'deal',
    image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558888401-3cc1de77652d?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'LG\'s pinnacle OLED evo television featuring Brightness Booster Max (up to 150% brighter than conventional OLED), 144Hz native refresh rate with NVIDIA G-Sync, and the groundbreaking α11 AI 4K processor.',
    keyFeatures: [
      'Brightness Booster Max for vibrant specular highlights even in bright Dubai living rooms',
      'α11 AI 4K Processor with AI Super Upscaling & AI Sound Pro 11.1.2 Virtual Surround',
      '4x HDMI 2.1 ports with 4K 144Hz VRR, ALLM, and AMD FreeSync Premium',
      'One Wall Design sitting completely flush against the wall with included zero-gap bracket'
    ],
    specs: {
      'Display Type': '4K OLED evo Self-Lit Pixels (3840 x 2160)',
      'Refresh Rate': '144Hz Native (G-Sync / FreeSync)',
      'HDR Format': 'Dolby Vision, HDR10, HLG, Filmmaker Mode',
      'Audio': '60W 4.2 Channel with Dolby Atmos',
      'Smart OS': 'webOS 24 with 5 years of Guaranteed OS Upgrades'
    },
    inStock: true,
    stockCount: 8,
    stockLocation: 'Volt Central Dubai Warehouse',
    isDeal: true,
    warranty: '5-Year LG Official UAE Panel Warranty & Free Home Wall Mounting',
    deliveryTime: 'Scheduled Next-Day Dubai Free Delivery & Professional Installation',
    colors: ['Gallery Silver Bezel']
  },
  {
    id: 'volt-rog-g16',
    name: 'ASUS ROG Zephyrus G16 OLED Gaming Laptop (Intel Core Ultra 9, RTX 4080 12GB, 32GB, 2TB SSD)',
    brand: 'ASUS',
    category: 'laptops',
    price: 10999,
    originalPrice: 11999,
    rating: 4.8,
    reviewsCount: 41,
    badge: 'Esports Rig',
    badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'CNC-machined aluminum chassis packed with an Intel Core Ultra 9 185H processor and NVIDIA GeForce RTX 4080 Laptop GPU. Features the breathtaking 2.5K 240Hz ROG Nebula OLED display.',
    keyFeatures: [
      '16" 2.5K 240Hz 0.2ms ROG Nebula OLED with 100% DCI-P3 & G-Sync',
      'NVIDIA GeForce RTX 4080 12GB GDDR6 (115W TGP with Dynamic Boost)',
      'ROG Intelligent Cooling with Liquid Metal & Vapor Chamber',
      'Slash Lighting matrix on the lid with customizable slash animations'
    ],
    specs: {
      'CPU': 'Intel Core Ultra 9 185H (16 Cores, up to 5.1GHz, Intel AI Boost)',
      'GPU': 'NVIDIA GeForce RTX 4080 12GB GDDR6',
      'RAM': '32GB LPDDR5X 7467MHz Dual Channel',
      'Storage': '2TB PCIe 4.0 NVMe M.2 Performance SSD',
      'Weight': '1.85 kg / 1.49 cm Ultra-thin'
    },
    inStock: true,
    stockCount: 9,
    stockLocation: 'Dubai Mall Flagship',
    isDeal: false,
    warranty: '2-Year ASUS Perfect UAE Warranty',
    deliveryTime: 'Same-Day Express Dubai Delivery',
    colors: ['Eclipse Gray', 'Platinum White']
  },
  {
    id: 'volt-airpods-max',
    name: 'Apple AirPods Max (USB-C) Over-Ear Headphones with Active Noise Cancellation',
    brand: 'Apple',
    category: 'audio',
    price: 2099,
    originalPrice: 2299,
    rating: 4.8,
    reviewsCount: 180,
    badge: 'Popular',
    badgeType: 'bestseller',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Updated with USB-C charging and fresh modern colorways. Apple-designed dynamic driver delivers high-fidelity audio, computational audio with H1 chips in each cup, and Personalized Spatial Audio with dynamic head tracking.',
    keyFeatures: [
      'Active Noise Cancellation with Transparency mode',
      'Personalized Spatial Audio with dynamic head tracking',
      'Knit-mesh canopy and acoustically engineered memory foam ear cushions',
      'Seamless switching between iPhone, iPad, Mac, and Apple Watch'
    ],
    specs: {
      'Connector': 'USB-C for charging and lossless audio',
      'Battery': '20 hours with Active Noise Cancellation or Spatial Audio enabled',
      'Case': 'Smart Case that preserves battery charge in ultra-low-power state',
      'Weight': '384.8 grams'
    },
    inStock: true,
    stockCount: 22,
    stockLocation: 'All Dubai Volt Showrooms',
    isDeal: false,
    warranty: '2-Year Apple UAE Official Warranty',
    deliveryTime: 'Same-Day Dubai Delivery (Within 4 Hours)',
    colors: ['Midnight', 'Starlight', 'Blue', 'Purple', 'Orange']
  },
  {
    id: 'volt-dyson-v15s',
    name: 'Dyson V15s Detect Submarine Wet & Dry Cordless Vacuum Cleaner',
    brand: 'Dyson',
    category: 'smarthome',
    price: 3499,
    originalPrice: 3899,
    rating: 4.9,
    reviewsCount: 64,
    badge: 'Top Pick',
    badgeType: 'deal',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Dyson\'s first all-in-one wet and dry cordless machine. Features the Submarine wet roller head that washes hard floors with clean water from start to finish, plus laser illumination for invisible dust.',
    keyFeatures: [
      'Submarine wet roller head removes spills and tough stains with clean water extraction',
      'Fluffy Optic cleaner head reveals 2x more invisible dust on hard floors',
      'Piezo sensor continuously sizes and counts dust particles, showing proof of deep clean on LCD screen',
      'Dyson Hyperdymium motor spins at up to 125,000rpm for 240AW powerful suction'
    ],
    specs: {
      'Suction Power': '240 AW',
      'Run Time': 'Up to 60 minutes fade-free power',
      'Filtration': 'Whole-machine HEPA filtration capturing 99.99% of particles down to 0.1 microns',
      'Weight': '3.8 kg with Submarine head'
    },
    inStock: true,
    stockCount: 16,
    stockLocation: 'Dubai Mall & Deira Showroom',
    isDeal: true,
    warranty: '2-Year Dyson Official UAE Warranty',
    deliveryTime: 'Same-Day Dubai Delivery',
    colors: ['Nickel / Yellow']
  },
  {
    id: 'volt-anker-140w',
    name: 'Anker Prime 140W 3-Port GaN Wall Fast Charger + 240W Braided Cable',
    brand: 'Anker',
    category: 'accessories',
    price: 349,
    originalPrice: 429,
    rating: 4.9,
    reviewsCount: 310,
    badge: 'Essential',
    badgeType: 'deal',
    image: 'https://images.unsplash.com/photo-1622445262464-84b1456045b6?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1622445262464-84b1456045b6?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'High-speed multi-device charging powered by GaNPrime technology. Charges a 16-inch MacBook Pro to 50% in just 28 minutes while simultaneously charging an iPhone 16 Pro and Apple Watch Ultra.',
    keyFeatures: [
      '140W Max Single Port Output with Power Delivery 3.1',
      '2x USB-C + 1x USB-A for charging 3 devices at once',
      'ActiveShield 2.0 temperature monitoring with 3 million checks per day',
      'Includes 140W fast charging braided USB-C cable'
    ],
    specs: {
      'Total Output': '140W Max',
      'Input': '100-240V ~ 50/60Hz (UAE 3-pin plug compliant)',
      'Dimensions': '67.5 × 59 × 31 mm',
      'Warranty': '2-Year Anker UAE Replacement Guarantee'
    },
    inStock: true,
    stockCount: 65,
    stockLocation: 'All Dubai Outlets',
    isDeal: true,
    warranty: '2-Year Anker Official UAE Warranty',
    deliveryTime: 'Same-Day Express Dubai Delivery',
    colors: ['Black Metallic', 'Silver']
  },
  {
    id: 'volt-ipad-pro-m4',
    name: 'Apple iPad Pro 13" Ultra Retina XDR OLED (M4 Chip, 256GB Wi-Fi) - Space Black',
    brand: 'Apple',
    category: 'smartphones',
    price: 4699,
    originalPrice: 4999,
    rating: 4.9,
    reviewsCount: 92,
    badge: 'Pro Retina',
    badgeType: 'exclusive',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'The thinnest Apple product ever at 5.1mm. Features groundbreaking Tandem OLED Ultra Retina XDR display, next-generation M4 chip, and support for Apple Pencil Pro.',
    keyFeatures: [
      'Breakthrough Tandem OLED Ultra Retina XDR with 1000 nits full-screen brightness',
      'Apple M4 chip with 9-core CPU and 10-core GPU with Hardware Ray Tracing',
      'Landscape 12MP Center Stage Ultra Wide camera',
      'Thunderbolt / USB 4 port for connecting high-speed storage and Pro Display XDR'
    ],
    specs: {
      'Display': '13" Ultra Retina XDR OLED (2752 x 2064 at 264 ppi)',
      'Chip': 'Apple M4 Chip (Next-Gen Neural Engine)',
      'Storage': '256GB NVMe',
      'Thickness': '5.1 mm Ultra-thin',
      'Weight': '579 grams'
    },
    inStock: true,
    stockCount: 15,
    stockLocation: 'Dubai Mall & MOE Showrooms',
    isDeal: false,
    warranty: '2-Year Apple UAE Official Warranty',
    deliveryTime: 'Same-Day Dubai Delivery',
    colors: ['Space Black', 'Silver'],
    storageOptions: ['256GB', '512GB', '1TB']
  },
  {
    id: 'volt-jbl-boombox3',
    name: 'JBL Boombox 3 Wi-Fi & Bluetooth Heavy Bass Portable Speaker (Dolby Atmos)',
    brand: 'JBL',
    category: 'audio',
    price: 1799,
    originalPrice: 2199,
    rating: 4.8,
    reviewsCount: 110,
    badge: 'Sale',
    badgeType: 'deal',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Massive sound and deepest bass with 3-way speaker design and Dolby Atmos spatial audio over Wi-Fi. 24-hour battery and built-in power bank.',
    keyFeatures: [
      'High Definition Wi-Fi streaming with 3D Dolby Atmos support',
      'Subwoofer delivering earth-shaking bass without distortion',
      'IP67 waterproof and dustproof metallic handle design',
      'Self-tuning technology detects surroundings and optimizes acoustics'
    ],
    specs: {
      'Output Power': '1x 80W RMS Subwoofer + 2x 40W Mid + 2x 10W Tweeter',
      'Playtime': 'Up to 24 hours (10,000mAh built-in power bank)',
      'Connectivity': 'Wi-Fi 6, Bluetooth 5.3, AirPlay, Alexa MRM',
      'Durability': 'IP67 Waterproof & Dustproof'
    },
    inStock: true,
    stockCount: 18,
    stockLocation: 'All Dubai Showrooms',
    isDeal: true,
    warranty: '1-Year Harman / JBL UAE Official Warranty',
    deliveryTime: 'Same-Day Express Dubai Delivery',
    colors: ['Black', 'Squad Camo']
  },
  {
    id: 'volt-anker-prime-pb',
    name: 'Anker Prime 27,650mAh 250W GaN Fast Charging Power Bank with Smart App',
    brand: 'Anker',
    category: 'accessories',
    price: 549,
    originalPrice: 649,
    rating: 4.9,
    reviewsCount: 224,
    badge: 'Fast GaN',
    badgeType: 'exclusive',
    image: 'https://images.unsplash.com/photo-1609592424376-7cfa57f12e87?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1609592424376-7cfa57f12e87?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622445262464-84b1456045b6?q=80&w=1000&auto=format&fit=crop'
    ],
    description: '250W multi-device ultra-fast charging with 27,650mAh capacity. Can fast charge two MacBook Pros and an iPhone simultaneously, featuring a full-color smart digital display and Bluetooth companion app.',
    keyFeatures: [
      '250W Total Multi-Port Output (140W single-port PD 3.1 max)',
      '27,650mAh airline-approved TSA compliant travel capacity',
      'Smart Digital Display showing battery health, cycle count, and real-time wattage',
      '170W Ultra-Fast Dual-Port Recharging in under 37 minutes'
    ],
    specs: {
      'Capacity': '27,650mAh / 99.54Wh (TSA Carry-on Approved)',
      'Total Output': '250W (USB-C1 140W + USB-C2 140W + USB-A 65W)',
      'Screen': 'Full Color TFT Display',
      'Warranty': '2-Year Anker UAE Replacement Guarantee'
    },
    inStock: true,
    stockCount: 42,
    stockLocation: 'Dubai Mall Flagship & Express Courier Hub',
    isDeal: true,
    warranty: '2-Year Anker Official UAE Warranty',
    deliveryTime: 'Same-Day Dubai Courier Delivery',
    colors: ['Space Gray Metallic']
  }
];

export const DUBAI_LOCATIONS: StoreLocation[] = [
  {
    id: 'dubai-mall',
    name: 'Dubai Mall Flagship Tech Lounge',
    area: 'Downtown Dubai',
    address: 'Level 2, Grand Atrium (Opposite Apple Store & Fashion Avenue), Dubai Mall',
    timings: 'Mon - Sun: 10:00 AM – Midnight',
    phone: '+971 4 330 8658',
    whatsapp: '+971 50 865 8658',
    isFlagship: true,
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop',
    features: [
      'Interactive Apple & Sony Experience Stations',
      'Custom PC Rigs & Esports Battlestation Lounge',
      'Same-Day Click & Collect in 15 Minutes',
      'Certified Apple & Android On-Site Repair Technicians'
    ]
  },
  {
    id: 'moe',
    name: 'Mall of the Emirates Experience Hub',
    area: 'Al Barsha 1',
    address: 'Level 1, Near Ski Dubai & Metro Link Entrance, Mall of the Emirates',
    timings: 'Mon - Sun: 10:00 AM – 11:00 PM (Fri-Sat till Midnight)',
    phone: '+971 4 341 9090',
    whatsapp: '+971 50 341 9090',
    isFlagship: false,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    features: [
      'Hi-Fi Audio Listening Room',
      'Drone & Camera Flight Simulators',
      'Express Trade-In Valuations',
      'Multilingual Tech Advisors (English, Arabic, Russian, Hindi)'
    ]
  },
  {
    id: 'szr-center',
    name: 'Sheikh Zayed Road Tech Mega-Showroom',
    area: 'Financial Centre / Trade Centre',
    address: 'Volt Tower, Sheikh Zayed Road (Next to Financial Centre Metro Station 2), Dubai',
    timings: 'Mon - Sat: 9:00 AM – 11:00 PM | Sun: 10:00 AM – 10:00 PM',
    phone: '+971 4 800 VOLT (8658)',
    whatsapp: '+971 52 800 8658',
    isFlagship: true,
    image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=800&auto=format&fit=crop',
    features: [
      '5,000 sq.ft OLED Home Cinema & Smart Home Suite',
      'B2B Enterprise & Corporate Tech Purchasing Desk',
      'Valet Parking & VIP Lounge',
      'Central Dubai Express Dispatch Warehouse Hub'
    ]
  }
];

export const DEALS_PROMOS: DealBanner[] = [
  {
    id: 'deal-dubai-fest',
    title: 'Dubai Tech Week Mega Sale',
    subtitle: 'Up to 30% OFF Flagship Laptops, PS5 Pro, and Sony Audio Gear + Free Same-Day Express Delivery',
    discountBadge: '30% OFF',
    code: 'VOLT10',
    endsInHours: 36,
    featuredProductId: 'volt-sony-xm5',
    bgGradient: 'from-slate-900 via-blue-950 to-indigo-950'
  },
  {
    id: 'deal-apple-fest',
    title: 'Apple Pro Bundle Offer',
    subtitle: 'Buy iPhone 16 Pro Max and receive AED 300 Instant Voucher towards AirPods Max or Apple Watch Ultra',
    discountBadge: 'VOUCHER AED 300',
    code: 'DUBAI2026',
    endsInHours: 54,
    featuredProductId: 'volt-ip16pm',
    bgGradient: 'from-blue-950 via-slate-900 to-sky-950'
  }
];

export const POPULAR_BRANDS = [
  'Apple',
  'Sony',
  'Samsung',
  'ASUS',
  'DJI',
  'LG',
  'Dyson',
  'Anker',
  'Bose',
  'Nvidia'
];
