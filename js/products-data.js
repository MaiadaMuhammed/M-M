/* ==========================================================================
   M&M SHOPPING - PRODUCTS DATABASE (GOLDEN ARGAN HAIR OIL PHOTO UPDATED)
   ========================================================================== */

const PRODUCTS_DATA = [
  {
    id: 1,
    title: "24K Radiant Gold Serum & Hydrating Essence",
    price: 34.99,
    oldPrice: 49.99,
    category: "Skincare",
    rating: 4.9,
    reviewsCount: 128,
    image: "imgs/pro1_ai.png",
    description: "24K gold particles in a luxury glass dropper bottle. Deeply moisturizing serum infused with luxury botanicals for a luminous golden glow.",
    featured: true,
    stock: 25,
    tag: "Best Seller"
  },
  {
    id: 2,
    title: "Rose Quartz Revitalizing Cream",
    price: 28.50,
    oldPrice: 38.00,
    category: "Skincare",
    rating: 4.8,
    reviewsCount: 95,
    image: "imgs/pro2_ai.png",
    description: "Silky anti-aging night cream in a frosted pink quartz glass jar with gold lid, enriched with natural damask rose extracts and collagen.",
    featured: true,
    stock: 18,
    tag: "60% Off"
  },
  {
    id: 3,
    title: "Velvet Matte Lipstick - Imperial Red",
    price: 19.99,
    oldPrice: 25.00,
    category: "Makeup",
    rating: 4.7,
    reviewsCount: 210,
    image: "imgs/pro3_ai.png",
    description: "Long-lasting weightless velvet lipstick bullet in an elegant metallic gold tube, delivering rich imperial red pigmentation.",
    featured: true,
    stock: 40,
    tag: "New"
  },
  {
    id: 4,
    title: "Celestial Glow Highlighter Palette",
    price: 42.00,
    oldPrice: 55.00,
    category: "Makeup",
    rating: 5.0,
    reviewsCount: 84,
    image: "imgs/pro4_ai.png",
    description: "Opened compact highlighter palette with multi-dimensional champagne and rose gold shimmering cheek powders and built-in mirror.",
    featured: true,
    stock: 12,
    tag: "Luxury Pick"
  },
  {
    id: 5,
    title: "Purifying Charcoal Detox Mask",
    price: 24.99,
    oldPrice: 32.00,
    category: "Skincare",
    rating: 4.6,
    reviewsCount: 67,
    image: "imgs/pro5_ai.png",
    description: "Purifying black clay detox mask in a matte black glass jar with custom wooden applicator spatula for deep pore refinement.",
    featured: false,
    stock: 30,
    tag: "Popular"
  },
  {
    id: 6,
    title: "Golden Amber Luxury Eau De Parfum",
    price: 89.99,
    oldPrice: 110.00,
    category: "Fragrance",
    rating: 4.9,
    reviewsCount: 156,
    image: "imgs/pro6_ai.png",
    description: "Crystal glass perfume bottle with gold cap filled with golden amber liquid. Notes of warm amber, vanilla orchid, and sandalwood.",
    featured: true,
    stock: 10,
    tag: "Exclusive"
  },
  {
    id: 7,
    title: "Nourishing Organic Body Lotion",
    price: 22.00,
    oldPrice: 30.00,
    category: "Body Care",
    rating: 4.8,
    reviewsCount: 78,
    image: "imgs/pro7_ai.png",
    description: "Luxury white and gold pump bottle of ultra-hydrating body lotion, crafted with organic shea butter and botanical oils.",
    featured: false,
    stock: 22,
    tag: "Organic"
  },
  {
    id: 8,
    title: "24K Gold Rejuvenating Eye Concentrate",
    price: 48.00,
    oldPrice: 65.00,
    category: "Skincare",
    rating: 4.9,
    reviewsCount: 142,
    image: "imgs/pro8.png",
    description: "Gold luxury jar of anti-aging eye cream formulated to diminish dark circles, puffiness, and fine expression lines around eyes.",
    featured: true,
    stock: 16,
    tag: "Top Rated"
  },
  {
    id: 9,
    title: "Midnight Blossom EDP Perfume Spray",
    price: 95.00,
    oldPrice: 120.00,
    category: "Fragrance",
    rating: 5.0,
    reviewsCount: 189,
    image: "imgs/pro9.png",
    description: "Intense evening perfume in a dark crystal bottle with gold atomizer. Featuring night-blooming jasmine and cashmere wood.",
    featured: true,
    stock: 8,
    tag: "Limited Edition"
  },
  {
    id: 10,
    title: "Satin Smooth Facial Oil Cleanser",
    price: 26.50,
    oldPrice: 35.00,
    category: "Skincare",
    rating: 4.7,
    reviewsCount: 112,
    image: "imgs/pro10_ai.png",
    description: "Golden facial oil in a clear glass bottle with botanical herbs and dropper, melting away makeup while hydrating skin.",
    featured: false,
    stock: 15,
    tag: "Trending"
  },
  {
    id: 11,
    title: "Rose Quartz Facial Roller & Gua Sha Set",
    price: 32.00,
    oldPrice: 45.00,
    category: "Body Care",
    rating: 4.8,
    reviewsCount: 94,
    image: "imgs/pro11_ai.png",
    description: "100% natural rose quartz massage roller and sculpted gua sha stone resting on pink silk, designed for lymphatic drainage.",
    featured: false,
    stock: 20,
    tag: "Self Care"
  },
  {
    id: 12,
    title: "Diamond Radiance Luminizing Powder",
    price: 39.50,
    oldPrice: 50.00,
    category: "Makeup",
    rating: 4.9,
    reviewsCount: 105,
    image: "imgs/pro12_ai.png",
    description: "Opened gold compact container with ultra-fine face powder and plush applicator puff, infused with real diamond dust for glow.",
    featured: false,
    stock: 14,
    tag: "Glowing"
  },
  {
    id: 13,
    title: "Rose Glow Illuminating Primer",
    price: 29.99,
    oldPrice: 38.00,
    category: "Makeup",
    rating: 4.8,
    reviewsCount: 88,
    image: "imgs/pro13_ai.png",
    description: "Rose glow liquid primer bottle with gold pump cap, smoothing pores and prepping skin with micro-pearl luminosity.",
    featured: false,
    stock: 25,
    tag: "Radiant"
  },
  {
    id: 14,
    title: "Pure Botanical Hydrating Elixir",
    price: 32.00,
    oldPrice: 45.00,
    category: "Skincare",
    rating: 4.8,
    reviewsCount: 115,
    image: "imgs/pro1.webp",
    description: "Botanical facial serum drops in a compact amber glass bottle, formulated with cold-pressed plant oils for instant moisture.",
    featured: false,
    stock: 15,
    tag: "Botanical"
  },
  {
    id: 15,
    title: "Damask Rose Soft Moisture Cream",
    price: 27.50,
    oldPrice: 36.00,
    category: "Skincare",
    rating: 4.7,
    reviewsCount: 134,
    image: "imgs/pro2.webp",
    description: "Daily soft moisturizing cream in a classic rose pink jar, delivering intense hydrators for a supple complexion.",
    featured: false,
    stock: 35,
    tag: "Soft Skin"
  },
  {
    id: 16,
    title: "Scarlet Matte Classic Lipstick",
    price: 18.50,
    oldPrice: 24.00,
    category: "Makeup",
    rating: 4.8,
    reviewsCount: 92,
    image: "imgs/pro3.webp",
    description: "Classic scarlet red lipstick in a sleek black tube case, offering creamy matte coverage for timeless lip glam.",
    featured: false,
    stock: 18,
    tag: "Classic Red"
  },
  {
    id: 17,
    title: "Champagne Shimmer Bronzer & Blush",
    price: 36.00,
    oldPrice: 48.00,
    category: "Makeup",
    rating: 4.8,
    reviewsCount: 176,
    image: "imgs/pro4.webp",
    description: "Baked cheek compact featuring champagne shimmer and warm bronzing tones for a natural contoured flush.",
    featured: true,
    stock: 12,
    tag: "Cheek Glow"
  },
  {
    id: 18,
    title: "Deep Sea Mineral Pore Clay Mask",
    price: 23.99,
    oldPrice: 30.00,
    category: "Skincare",
    rating: 4.7,
    reviewsCount: 160,
    image: "imgs/pro5.webp",
    description: "Natural deep sea mineral clay mask in a round tub, absorbing oil and purifying clogged pores gently.",
    featured: false,
    stock: 40,
    tag: "Mineral Clay"
  },
  {
    id: 19,
    title: "Royal Musk & Orchid Eau De Parfum",
    price: 82.00,
    oldPrice: 100.00,
    category: "Fragrance",
    rating: 4.9,
    reviewsCount: 154,
    image: "imgs/pro6.webp",
    description: "Luxury spray perfume bottle with amber golden liquid, blending royal white musk, vanilla orchid, and sweet amber.",
    featured: true,
    stock: 9,
    tag: "Royal Musk"
  },
  {
    id: 20,
    title: "Velvet Shea Hydrating Body Lotion",
    price: 21.00,
    oldPrice: 28.00,
    category: "Body Care",
    rating: 4.8,
    reviewsCount: 110,
    image: "imgs/pro7.webp",
    description: "Nourishing daily body lotion tube enriched with raw shea butter and Vitamin E for velvety soft touch.",
    featured: false,
    stock: 30,
    tag: "Velvet Body"
  },
  {
    id: 21,
    title: "Golden Argan Hair & Scalp Oil",
    price: 31.00,
    oldPrice: 40.00,
    category: "Body Care",
    rating: 4.8,
    reviewsCount: 145,
    image: "imgs/pro10_ai.png",
    description: "Moroccan golden argan oil in a clear glass dropper bottle with botanical herbs, conditioning dry hair ends and promoting scalp health.",
    featured: false,
    stock: 22,
    tag: "Argan Oil"
  },
  {
    id: 22,
    title: "Natural Pink Jade Facial Sculpting Roller",
    price: 33.50,
    oldPrice: 45.00,
    category: "Body Care",
    rating: 4.9,
    reviewsCount: 98,
    image: "imgs/pro11_ai.png",
    description: "100% natural pink jade dual-ended face massage roller tool and gua sha set resting on soft pink silk, designed for cheekbone sculpting and relaxing facial muscles.",
    featured: true,
    stock: 16,
    tag: "Jade Beauty"
  },
  {
    id: 23,
    title: "Rose Essence Glowing Body Oil Spray",
    price: 44.00,
    oldPrice: 56.00,
    category: "Body Care",
    rating: 4.8,
    reviewsCount: 112,
    image: "imgs/pro7_ai.png",
    description: "Luxury white and gold pump bottle of botanical rose essence body oil spray for skin radiance, leaving a subtle glowing finish and natural floral fragrance.",
    featured: false,
    stock: 14,
    tag: "Glow Oil"
  }
];

// Robust Helper to get image path relative to current page location (Handles %20, spaces, and case-insensitivity)
function getCorrectImagePath(imgPath) {
  try {
    const rawPath = window.location.pathname || '';
    const decodedPath = decodeURIComponent(rawPath).toLowerCase();
    const isSubFolder = decodedPath.includes('web pages') || rawPath.toLowerCase().includes('web%20pages');
    return isSubFolder ? '../' + imgPath : './' + imgPath;
  } catch(e) {
    return '../' + imgPath;
  }
}

// Robust Helper to get relative link path for pages
function getCorrectPageLink(pageName) {
  try {
    const rawPath = window.location.pathname || '';
    const decodedPath = decodeURIComponent(rawPath).toLowerCase();
    const isSubFolder = decodedPath.includes('web pages') || rawPath.toLowerCase().includes('web%20pages');
    if (pageName === 'home') {
      return isSubFolder ? '../home.html' : './home.html';
    }
    return isSubFolder ? `./${pageName}.html` : `./web pages/${pageName}.html`;
  } catch(e) {
    return pageName === 'home' ? '../home.html' : `./${pageName}.html`;
  }
}
