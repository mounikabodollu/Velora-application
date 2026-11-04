/**
 * ==========================================================================
 * VELORA – Fashion & Lifestyle
 * Core JavaScript Application
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. Data: Luxury Catalog & Lookbook
     ========================================================================== */

  const PRODUCTS = [
    {
      id: 'velora-01',
      title: 'The Oversized Wool Trench Coat',
      category: 'women',
      price: 14999,
      badge: 'New Arrival',
      rating: 4.9,
      reviewsCount: 42,
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
      description: 'Hand-tailored from virgin Italian wool with an architectural drape, storm flap detailing, and tonal tortoiseshell buttons. Designed to command any room with understated confidence.',
      fabric: '100% Virgin Italian Wool; Lining: 100% Cupro',
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: 'velora-02',
      title: 'Structured Double-Breasted Blazer',
      category: 'men',
      price: 12499,
      badge: 'Bestseller',
      rating: 4.8,
      reviewsCount: 38,
      image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
      description: 'A sharp, modern cut crafted with peaked lapels and canvassed chest construction for a sculpted silhouette. Moves effortlessly between gallery openings and formal gatherings.',
      fabric: '95% Fine Wool, 5% Cashmere; Viscose Lining',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 'velora-03',
      title: 'Pure Mulberry Silk Slip Dress',
      category: 'women',
      price: 9899,
      badge: 'Bestseller',
      rating: 5.0,
      reviewsCount: 64,
      image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
      description: 'Cut on the bias from heavyweight 22-momme Mulberry silk. Cascades naturally against the body with a delicate cowl neckline and adjustable barely-there straps.',
      fabric: '100% Grade 6A Mulberry Silk',
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: 'velora-04',
      title: 'Cashmere Roll-Neck Knit',
      category: 'men',
      price: 8799,
      badge: 'New Arrival',
      rating: 4.7,
      reviewsCount: 29,
      image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=800&q=80',
      description: 'Spun from sustainably combed Inner Mongolian cashmere in a 7-gauge rib knit. Offers substantial warmth while preserving an impossibly featherlight touch.',
      fabric: '100% Grade-A Mongolian Cashmere',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 'velora-05',
      title: 'Sculpted Italian Leather Tote',
      category: 'accessories',
      price: 11200,
      badge: 'Bestseller',
      rating: 4.9,
      reviewsCount: 53,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
      description: 'Hand-shaped from vegetable-tanned Tuscan leather that patinas gracefully with age. Features magnetic closure, microfiber lining, and an internal zipped pouch.',
      fabric: '100% Full-Grain Tuscan Calf Leather; Brass Hardware',
      sizes: ['One Size']
    },
    {
      id: 'velora-06',
      title: 'Relaxed Pleated Wool Trousers',
      category: 'women',
      price: 6499,
      badge: 'New Arrival',
      rating: 4.8,
      reviewsCount: 21,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
      description: 'High-waisted with deep double front pleats and a fluid wide-leg cut. Engineered with internal waist curtaining for couture comfort and timeless balance.',
      fabric: '100% High-Twist Wool Crepe',
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: 'velora-07',
      title: 'Minimalist Leather Chelsea Boots',
      category: 'men',
      price: 13500,
      badge: 'New Arrival',
      rating: 4.9,
      reviewsCount: 47,
      image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=800&q=80',
      description: 'Goodyear-welted in Portugal using burnished full-grain calfskin with supple leather linings and tone-on-tone elastic side gussets for all-day elegance.',
      fabric: '100% Calfskin; Stacked Leather & Vibram Rubber Sole',
      sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44']
    },
    {
      id: 'velora-08',
      title: 'Gold-Plated Cuff & Signet Ring Set',
      category: 'accessories',
      price: 4299,
      badge: 'Bestseller',
      rating: 4.9,
      reviewsCount: 88,
      image: 'https://images.unsplash.com/photo-1611591475152-478d13b6676f?auto=format&fit=crop&w=800&q=80',
      description: 'Sculptural organic curves cast in recycled bronze and dipped in 18-karat micro-micron gold with a tactile satin finish. Anti-tarnish protected.',
      fabric: '18k Gold Plated Recycled Bronze',
      sizes: ['Adjustable']
    },
    {
      id: 'velora-09',
      title: 'Tailored Linen Blend Safari Jacket',
      category: 'men',
      price: 9499,
      badge: 'New Arrival',
      rating: 4.7,
      reviewsCount: 19,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
      description: 'A relaxed sartorial staple blending breathable French linen and soft cotton. Complete with four accordion pockets and horn button closures.',
      fabric: '60% French Linen, 40% Organic Cotton',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 'velora-10',
      title: 'Asymmetric Draped Evening Gown',
      category: 'women',
      price: 16800,
      badge: 'Bestseller',
      rating: 5.0,
      reviewsCount: 31,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80',
      description: 'A statuesque floor-length masterpiece featuring a one-shoulder drape and a graceful thigh-high slit. Tailored to flow like liquid mercury as you move.',
      fabric: 'Heavy Crepe Matte Silk Blend',
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: 'velora-11',
      title: 'Sartorial Double-Faced Cashmere Coat',
      category: 'men',
      price: 18999,
      badge: 'New Arrival',
      rating: 4.9,
      reviewsCount: 24,
      image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80',
      description: 'Hand-stitched in Florence from double-faced Mongolian cashmere. Features horn buttons, unlined minimalist construction, and an effortless drop shoulder.',
      fabric: '100% Hand-Faced Grade-A Cashmere',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 'velora-12',
      title: 'Pleated Silk-Georgette Column Skirt',
      category: 'women',
      price: 8499,
      badge: 'New Arrival',
      rating: 4.8,
      reviewsCount: 19,
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
      description: 'Micro-pleated Mulberry silk georgette with an elasticized grosgrain waistband and subtle asymmetric hem that dances as you walk.',
      fabric: '100% Pure Mulberry Silk Georgette',
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: 'velora-13',
      title: 'Minimalist Automatic Skeleton Watch',
      category: 'accessories',
      price: 15400,
      badge: 'New Arrival',
      rating: 5.0,
      reviewsCount: 45,
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
      description: '40mm sandblasted titanium casing with exhibition caseback, sapphire crystal glass, and Italian bridle leather strap. Powered by Swiss movement.',
      fabric: 'Aerospace Titanium & Italian Bridle Leather',
      sizes: ['One Size']
    },
    {
      id: 'velora-14',
      title: 'Heavyweight Raw Selvedge Denim Overshirt',
      category: 'men',
      price: 7999,
      badge: 'New Arrival',
      rating: 4.8,
      reviewsCount: 27,
      image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80',
      description: 'Woven on shuttle looms in Okayama using 14oz rope-dyed indigo organic cotton. Features selvedge ID on internal placket and copper shank buttons.',
      fabric: '100% Organic Okayama Selvedge Denim',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 'velora-15',
      title: 'Sculptural Acetate Cat-Eye Sunglasses',
      category: 'accessories',
      price: 6499,
      badge: 'New Arrival',
      rating: 4.9,
      reviewsCount: 36,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
      description: 'Handcrafted from bevelled Japanese Mazzucchelli acetate with CR-39 anti-reflective lenses offering 100% UV400 solar protection.',
      fabric: 'Mazzucchelli Acetate & Carl Zeiss Lenses',
      sizes: ['One Size']
    },
    {
      id: 'velora-16',
      title: 'Artisanal Hand-Woven Linen Co-ord Set',
      category: 'women',
      price: 11500,
      badge: 'New Arrival',
      rating: 4.9,
      reviewsCount: 22,
      image: 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?auto=format&fit=crop&w=800&q=80',
      description: 'A harmonious two-piece silhouette comprising an asymmetrical tunic and wide-leg trousers, woven from crisp Normandy flax linen.',
      fabric: '100% Certified Normandy Flax Linen',
      sizes: ['XS', 'S', 'M', 'L']
    }
  ];

  const LOOKBOOK_ITEMS = [
    {
      title: 'Look 01 / The Monochromatic Overcoat',
      subtitle: 'Autumn / Winter Editorial',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
      description: 'Structured silhouette in rich charcoal wool paired with relaxed tailoring.'
    },
    {
      title: 'Look 02 / The Camel & Cashmere Harmony',
      subtitle: 'Milan Atelier Series',
      image: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1200&q=80',
      description: 'Subtle textures, soft camel hues, and sculpted dark sunglasses.'
    },
    {
      title: 'Look 03 / Minimalist Noir Architecture',
      subtitle: 'Parisian Silhouettes',
      image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=80',
      description: 'Fluid black drapery meeting stark metropolitan angles.'
    },
    {
      title: 'Look 04 / Sculpted Leather Accents',
      subtitle: 'Accessories in Motion',
      image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=1200&q=80',
      description: 'Tactile leather goods designed to elevate everyday rituals.'
    },
    {
      title: 'Look 05 / Fluid Silk Reverie',
      subtitle: 'Golden Hour Study',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
      description: 'Weightless silk georgette dancing with the late afternoon breeze.'
    },
    {
      title: 'Look 06 / The Modern Tailored Suiting',
      subtitle: 'Runway Capsule 2026',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80',
      description: 'Clean shoulders and relaxed trouser lines redefining effortless power dressing.'
    }
  ];

  const SUB_COLLECTIONS = [
    // --- WOMEN'S COLLECTION (8 Departments) ---
    {
      id: 'women-dresses',
      category: 'women',
      categoryLabel: "Women's Collection",
      title: 'Dresses',
      tagline: 'Silk Cowls, Bias Cuts & Evening Maxis',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
      itemCount: '34 Styles'
    },
    {
      id: 'women-tops',
      category: 'women',
      categoryLabel: "Women's Collection",
      title: 'Tops & Shirts',
      tagline: 'Tailored Poplin, Silk Camisoles & Drape Blouses',
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
      itemCount: '28 Styles'
    },
    {
      id: 'women-jeans',
      category: 'women',
      categoryLabel: "Women's Collection",
      title: 'Jeans & Trousers',
      tagline: 'High-Rise Pleated Trousers & Raw Selvedge Denim',
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
      itemCount: '22 Styles'
    },
    {
      id: 'women-ethnic',
      category: 'women',
      categoryLabel: "Women's Collection",
      title: 'Ethnic Wear',
      tagline: 'Modern Handwoven Kurtas & Embroidered Ensembles',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      itemCount: '19 Styles'
    },
    {
      id: 'women-coord',
      category: 'women',
      categoryLabel: "Women's Collection",
      title: 'Co-ord Sets',
      tagline: 'Monochrome Linen Pairs & Sculpted Suiting Duos',
      image: 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?auto=format&fit=crop&w=800&q=80',
      itemCount: '16 Styles'
    },
    {
      id: 'women-skirts',
      category: 'women',
      categoryLabel: "Women's Collection",
      title: 'Skirts',
      tagline: 'Fluid Satin Midis & Architectural Column Cuts',
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
      itemCount: '18 Styles'
    },
    {
      id: 'women-jackets',
      category: 'women',
      categoryLabel: "Women's Collection",
      title: 'Jackets & Outerwear',
      tagline: 'Virgin Wool Trench Coats & Double-Faced Capes',
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
      itemCount: '25 Styles'
    },
    {
      id: 'women-footwear',
      category: 'women',
      categoryLabel: "Women's Collection",
      title: "Women's Footwear",
      tagline: 'Sculpted Kitten Heels, Leather Mules & Boots',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
      itemCount: '20 Styles'
    },

    // --- MEN'S COLLECTION (8 Departments) ---
    {
      id: 'men-tshirts',
      category: 'men',
      categoryLabel: "Men's Collection",
      title: 'T-Shirts & Polos',
      tagline: 'Heavyweight Pima Cotton & Fine Milano Knitted Polos',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
      itemCount: '30 Styles'
    },
    {
      id: 'men-shirts',
      category: 'men',
      categoryLabel: "Men's Collection",
      title: 'Shirts',
      tagline: 'Crisp French Poplins & Relaxed Band-Collar Linens',
      image: 'https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80',
      itemCount: '26 Styles'
    },
    {
      id: 'men-jeans',
      category: 'men',
      categoryLabel: "Men's Collection",
      title: 'Jeans & Trousers',
      tagline: 'Pleated Wool Trousers & Tapered Selvedge Denim',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80',
      itemCount: '24 Styles'
    },
    {
      id: 'men-casual',
      category: 'men',
      categoryLabel: "Men's Collection",
      title: 'Casual Wear',
      tagline: 'Relaxed Weekend Layers, Overshirts & Knitwear',
      image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80',
      itemCount: '22 Styles'
    },
    {
      id: 'men-formal',
      category: 'men',
      categoryLabel: "Men's Collection",
      title: 'Formal Wear',
      tagline: 'Full-Canvassed Wool Blazers & Dinner Tuxedos',
      image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=800&q=80',
      itemCount: '18 Styles'
    },
    {
      id: 'men-jackets',
      category: 'men',
      categoryLabel: "Men's Collection",
      title: 'Jackets & Hoodies',
      tagline: 'Fine Suede Overshirts & Cashmere Blend Hoodies',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
      itemCount: '21 Styles'
    },
    {
      id: 'men-ethnic',
      category: 'men',
      categoryLabel: "Men's Collection",
      title: 'Ethnic Wear',
      tagline: 'Raw Silk Bundis, Bandhgalas & Tailored Kurtas',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
      itemCount: '15 Styles'
    },
    {
      id: 'men-footwear',
      category: 'men',
      categoryLabel: "Men's Collection",
      title: "Men's Footwear",
      tagline: 'Goodyear-Welted Chelsea Boots & Penny Loafers',
      image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=800&q=80',
      itemCount: '19 Styles'
    },

    // --- ACCESSORIES COLLECTION (8 Departments) ---
    {
      id: 'acc-handbags',
      category: 'accessories',
      categoryLabel: 'Accessories Collection',
      title: 'Handbags',
      tagline: 'Sculpted Tuscan Leather Totes & Crossbody Bags',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      itemCount: '24 Styles'
    },
    {
      id: 'acc-watches',
      category: 'accessories',
      categoryLabel: 'Accessories Collection',
      title: 'Watches',
      tagline: 'Minimalist Dials with Swiss Automatic Movements',
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
      itemCount: '12 Styles'
    },
    {
      id: 'acc-sunglasses',
      category: 'accessories',
      categoryLabel: 'Accessories Collection',
      title: 'Sunglasses',
      tagline: 'Hand-Polished Japanese Acetate & UV400 Lenses',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
      itemCount: '16 Styles'
    },
    {
      id: 'acc-jewellery',
      category: 'accessories',
      categoryLabel: 'Accessories Collection',
      title: 'Jewellery',
      tagline: '18k Satin Gold-Plated Cuffs, Signets & Rings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      itemCount: '27 Styles'
    },
    {
      id: 'acc-belts',
      category: 'accessories',
      categoryLabel: 'Accessories Collection',
      title: 'Belts',
      tagline: 'Full-Grain Bridle Leather with Brushed Brass',
      image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80',
      itemCount: '14 Styles'
    },
    {
      id: 'acc-wallets',
      category: 'accessories',
      categoryLabel: 'Accessories Collection',
      title: 'Wallets',
      tagline: 'Slim Bifold Wallets & Leather Card Sleeves',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',
      itemCount: '15 Styles'
    },
    {
      id: 'acc-caps',
      category: 'accessories',
      categoryLabel: 'Accessories Collection',
      title: 'Caps & Hats',
      tagline: 'Hand-Molded Wool Fedoras & Cotton Twill Caps',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
      itemCount: '11 Styles'
    },
    {
      id: 'acc-shoes',
      category: 'accessories',
      categoryLabel: 'Accessories Collection',
      title: 'Shoes & Sandals',
      tagline: 'Minimalist Leather Slides & Hand-Stitched Mules',
      image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=800&q=80',
      itemCount: '17 Styles'
    }
  ];

  /* ==========================================================================
     2. Application State & Storage
     ========================================================================== */

  let state = {
    cart: JSON.parse(localStorage.getItem('velora_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('velora_wishlist')) || [],
    activeFilter: 'all',
    subCollectionFilter: 'all',
    searchQuery: '',
    sortBy: 'featured',
    appliedDiscount: 0, // e.g. 0.10 for 10%
    activePromoCode: '',
    currentLookbookIndex: 0
  };

  // URL query parameter support (e.g. ?category=men or ?category=women)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('category');
    if (catParam && ['all', 'women', 'men', 'accessories'].includes(catParam.toLowerCase())) {
      state.activeFilter = catParam.toLowerCase();
      state.subCollectionFilter = catParam.toLowerCase();
    }
  } catch (err) {
    // ignore
  }

  function saveCart() {
    localStorage.setItem('velora_cart', JSON.stringify(state.cart));
    updateCartBadges();
  }

  function saveWishlist() {
    localStorage.setItem('velora_wishlist', JSON.stringify(state.wishlist));
    updateWishlistBadges();
  }

  // Currency Formatter for Indian Rupee (₹)
  const formatINR = (val) => {
    return '₹' + Number(val).toLocaleString('en-IN');
  };

  /* ==========================================================================
     3. DOM Elements Cache
     ========================================================================== */

  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const navBackdrop = document.getElementById('navBackdrop');
  
  // Badges
  const cartBadges = document.querySelectorAll('.cart-badge');
  const wishlistBadges = document.querySelectorAll('.wishlist-badge');

  // Drawers
  const cartDrawer = document.getElementById('cartDrawer');
  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const openCartBtns = document.querySelectorAll('.open-cart-btn');
  const openWishlistBtns = document.querySelectorAll('.open-wishlist-btn');
  const closeDrawerBtns = document.querySelectorAll('.close-drawer-btn');

  // Product Elements
  const productsGrid = document.getElementById('productsGrid');
  const categoryTabBtns = document.querySelectorAll('.tab-btn');
  const productSearchInput = document.getElementById('productSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const sortSelect = document.getElementById('sortSelect');

  // Sub-Collections Elements
  const subCollectionsGrid = document.getElementById('subCollectionsGrid');
  const subCollectionsTabBtns = document.querySelectorAll('.subcollections-tab-btn');
  const subcollectionsSubtitle = document.getElementById('subcollectionsSubtitle');
  const subcollectionsTitle = document.getElementById('subcollectionsTitle');
  const subcollectionsDesc = document.getElementById('subcollectionsDesc');

  // Modals
  const searchModal = document.getElementById('searchModal');
  const searchModalInput = document.getElementById('searchModalInput');
  const searchModalResults = document.getElementById('searchModalResults');
  const openSearchBtns = document.querySelectorAll('.open-search-btn');
  const closeSearchBtn = document.getElementById('closeSearchBtn');

  const quickviewModal = document.getElementById('quickviewModal');
  const quickviewDialog = document.getElementById('quickviewDialog');
  const closeQuickviewBtn = document.getElementById('closeQuickviewBtn');

  const checkoutModal = document.getElementById('checkoutModal');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  const checkoutForm = document.getElementById('checkoutForm');
  const openCheckoutBtn = document.getElementById('openCheckoutBtn');

  // Lightbox
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  // Back to Top
  const backToTopBtn = document.getElementById('backToTopBtn');
  const footerBackToTop = document.getElementById('footerBackToTop');

  // Newsletter
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterMsg = document.getElementById('newsletterMsg');

  // Contact Form
  const contactForm = document.getElementById('contactForm');

  // Toast Container
  const toastContainer = document.getElementById('toastContainer');

  /* ==========================================================================
     4. Navigation & Header Behavior
     ========================================================================== */

  // Scroll effect on navbar
  function handleNavbarScroll() {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Toggle Back to Top Button
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // initial check

  // ScrollSpy with IntersectionObserver
  const sections = document.querySelectorAll('section[id], header[id]');
  if (sections.length > 0 && 'IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else if (link.getAttribute('href')?.startsWith('#')) {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => navObserver.observe(section));
  }

  // Mobile Navigation Toggle
  function openMobileNav() {
    if (hamburgerBtn) {
      hamburgerBtn.classList.add('active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
    }
    if (mobileNav) mobileNav.classList.add('open');
    if (navBackdrop) navBackdrop.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function closeMobileNav() {
    if (hamburgerBtn) {
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
    if (mobileNav) mobileNav.classList.remove('open');
    if (navBackdrop) navBackdrop.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeMobileNav);
  }

  // Close mobile nav after clicking any link
  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  // Smooth scroll helper for buttons
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Back to Top button clicks
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  if (footerBackToTop) {
    footerBackToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     5. Toast Notification System
     ========================================================================== */

  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>`;
    } else if (type === 'heart') {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="#C5A880" stroke="#C5A880" stroke-width="1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
    } else {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    }

    toast.innerHTML = `
      <span>${iconSvg}</span>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-remove');
      toast.addEventListener('animationend', () => {
        toast.remove();
      });
    }, 3200);
  }

  /* ==========================================================================
     6. Badge Updates
     ========================================================================== */

  function updateCartBadges() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadges.forEach((badge) => {
      badge.textContent = totalCount;
      badge.classList.add('bump');
      setTimeout(() => badge.classList.remove('bump'), 250);
    });
  }

  function updateWishlistBadges() {
    const totalCount = state.wishlist.length;
    wishlistBadges.forEach((badge) => {
      badge.textContent = totalCount;
      badge.classList.add('bump');
      setTimeout(() => badge.classList.remove('bump'), 250);
    });
  }

  /* ==========================================================================
     7. Product Catalog Rendering & Filtering
     ========================================================================== */

  function getFilteredProducts() {
    return PRODUCTS.filter((product) => {
      // Category filter
      const matchesCategory =
        state.activeFilter === 'all' || product.category === state.activeFilter;

      // Search query filter
      const query = state.searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (state.sortBy === 'price-low') return a.price - b.price;
      if (state.sortBy === 'price-high') return b.price - a.price;
      if (state.sortBy === 'name-asc') return a.title.localeCompare(b.title);
      // 'featured' default: return original catalog order
      return 0;
    });
  }

  function renderProducts() {
    const gridEl = document.getElementById('productsGrid') || document.getElementById('newArrivalsGrid');
    if (!gridEl) return;

    const filtered = getFilteredProducts();

    if (filtered.length === 0) {
      gridEl.innerHTML = `
        <div class="empty-products-state">
          <h3>No garments match your search</h3>
          <p>We couldn't find any piece matching "${state.searchQuery}". Try selecting another category or clear your search term.</p>
          <button class="btn btn-outline" id="resetFiltersBtn">Reset Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.activeFilter = 'all';
          state.searchQuery = '';
          if (productSearchInput) productSearchInput.value = '';
          if (searchClearBtn) searchClearBtn.classList.remove('visible');
          categoryTabBtns.forEach((btn) => {
            btn.classList.toggle('active', btn.dataset.category === 'all');
          });
          renderProducts();
        });
      }
      return;
    }

    gridEl.innerHTML = filtered
      .map((product) => {
        const isWishlisted = state.wishlist.includes(product.id);
        const badgeClass =
          product.badge.toLowerCase().includes('new') ? 'badge-new' : 'badge-bestseller';

        return `
          <article class="product-card" data-id="${product.id}">
            <div class="product-image-container">
              <span class="product-badge ${badgeClass}">${product.badge}</span>
              <button class="btn-wishlist ${isWishlisted ? 'active' : ''}" 
                      aria-label="Save to Wishlist" 
                      data-product-id="${product.id}">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </button>
              <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
              <button class="btn-quick-view" data-product-id="${product.id}">Quick View</button>
            </div>
            <div class="product-info">
              <span class="product-category">${product.category}</span>
              <h3 class="product-name">${product.title}</h3>
              <div class="product-rating">
                <span class="star-icon">★★★★★</span>
                <span>${product.rating} (${product.reviewsCount})</span>
              </div>
              <div class="product-price">${formatINR(product.price)}</div>
              <button class="btn-add-to-cart" data-product-id="${product.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                Add to Bag
              </button>
            </div>
          </article>
        `;
      })
      .join('');

    attachProductCardEvents(gridEl);
  }

  function attachProductCardEvents(gridEl) {
    if (!gridEl) return;

    // Wishlist Buttons
    gridEl.querySelectorAll('.btn-wishlist').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.productId;
        toggleWishlist(id);
      });
    });

    // Quick View Buttons
    gridEl.querySelectorAll('.btn-quick-view').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.productId;
        openQuickView(id);
      });
    });

    // Add to Cart Buttons
    gridEl.querySelectorAll('.btn-add-to-cart').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.productId;
        const product = PRODUCTS.find((p) => p.id === id);
        if (product) {
          addToCart(product, product.sizes[0] || 'M', 1);
          btn.classList.add('added');
          btn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            Added
          `;
          setTimeout(() => {
            btn.classList.remove('added');
            btn.innerHTML = `
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              Add to Bag
            `;
          }, 1800);
        }
      });
    });
  }

  // Category Tab Filtering
  categoryTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      categoryTabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeFilter = btn.dataset.category;
      renderProducts();
    });
  });

  // Search input live filtering
  if (productSearchInput) {
    productSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (searchClearBtn) {
        if (state.searchQuery.trim().length > 0) {
          searchClearBtn.classList.add('visible');
        } else {
          searchClearBtn.classList.remove('visible');
        }
      }
      renderProducts();
    });
  }

  if (searchClearBtn && productSearchInput) {
    searchClearBtn.addEventListener('click', () => {
      productSearchInput.value = '';
      state.searchQuery = '';
      searchClearBtn.classList.remove('visible');
      renderProducts();
      productSearchInput.focus();
    });
  }

  // Sort dropdown
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Collections Cards Click: filters sub-collections & smoothly scrolls or navigates
  document.querySelectorAll('.collection-card').forEach((card) => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      if (category === 'new-arrivals') {
        window.location.href = 'new-arrivals.html';
        return;
      }
      if (category) {
        state.subCollectionFilter = category;
        renderSubCollections();
        const subArea = document.getElementById('subCollectionsArea');
        if (subArea) {
          subArea.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = `collections.html?category=${category}#subCollectionsArea`;
        }
      }
    });
  });

  // Sub-collection Tab Buttons Click
  subCollectionsTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      state.subCollectionFilter = btn.dataset.subfilter;
      renderSubCollections();
    });
  });

  /* ==========================================================================
     7b. Sub-Collections Rendering & Dynamic Filtering
     ========================================================================== */

  function renderSubCollections() {
    if (!subCollectionsGrid) return;

    // Filter sub-collections based on state.subCollectionFilter
    const filteredSubs = SUB_COLLECTIONS.filter((sub) => {
      return state.subCollectionFilter === 'all' || sub.category === state.subCollectionFilter;
    });

    // Update Header Text & Subtitle dynamically
    if (subcollectionsTitle && subcollectionsSubtitle && subcollectionsDesc) {
      if (state.subCollectionFilter === 'women') {
        subcollectionsSubtitle.textContent = "Women's Atelier Line";
        subcollectionsTitle.textContent = "Women's Departments (8)";
        subcollectionsDesc.textContent = "Explore our 8 curated women's departments featuring architectural cuts, fluid drapes, and bespoke evening wear.";
      } else if (state.subCollectionFilter === 'men') {
        subcollectionsSubtitle.textContent = "Men's Sartorial Line";
        subcollectionsTitle.textContent = "Men's Departments (8)";
        subcollectionsDesc.textContent = "Explore our 8 curated men's departments featuring precision tailoring, relaxed knits, and modern footwear.";
      } else if (state.subCollectionFilter === 'accessories') {
        subcollectionsSubtitle.textContent = "Objects & Fine Leather";
        subcollectionsTitle.textContent = "Accessories Departments (8)";
        subcollectionsDesc.textContent = "Explore our 8 curated accessories departments featuring handcrafted Tuscan leather, Swiss dials, and 18k jewelry.";
      } else {
        subcollectionsSubtitle.textContent = "Curated Departments";
        subcollectionsTitle.textContent = "All Collections (24)";
        subcollectionsDesc.textContent = "Explore the breadth of VELORA's 24 specialized departments spanning women's, men's, and leather accessories.";
      }
    }

    // Update active state on 3 Main Category Cards
    document.querySelectorAll('.collection-card').forEach((card) => {
      const cat = card.dataset.category;
      card.classList.toggle('active', state.subCollectionFilter === cat);
    });

    // Update active state on Sub-collection Filter Tabs
    subCollectionsTabBtns.forEach((tab) => {
      const filter = tab.dataset.subfilter;
      tab.classList.toggle('active', state.subCollectionFilter === filter);
      tab.setAttribute('aria-selected', state.subCollectionFilter === filter ? 'true' : 'false');
    });

    // Render Sub-Collection Cards in responsive grid
    subCollectionsGrid.innerHTML = filteredSubs
      .map((sub) => {
        const catBadgeText = sub.category.toUpperCase();
        return `
          <article class="subcollection-card" data-category="${sub.category}" data-id="${sub.id}">
            <div class="subcollection-img-wrap">
              <span class="subcollection-badge">${catBadgeText}</span>
              <span class="subcollection-count">${sub.itemCount}</span>
              <img src="${sub.image}" alt="${sub.title}" class="subcollection-img" loading="lazy">
              <div class="subcollection-overlay"></div>
            </div>
            <div class="subcollection-body">
              <h4 class="subcollection-title">${sub.title}</h4>
              <p class="subcollection-tagline">${sub.tagline}</p>
              <a href="#products" class="subcollection-link" data-category="${sub.category}" data-title="${sub.title}">
                Shop Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>
        `;
      })
      .join('');

    // Attach click events on subcollection card / "Shop Now" links
    subCollectionsGrid.querySelectorAll('.subcollection-card').forEach((card) => {
      card.addEventListener('click', (e) => {
        const category = card.dataset.category;
        const title = card.querySelector('.subcollection-title').textContent;
        // Filter the main product catalog to this category
        state.activeFilter = category;
        categoryTabBtns.forEach((b) => {
          b.classList.toggle('active', b.dataset.category === category);
        });
        renderProducts();
        showToast(`Opening ${title} Collection`, 'info');
        const productsSection = document.getElementById('products') || document.getElementById('newArrivalsGrid');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = `new-arrivals.html?category=${category}`;
        }
      });
    });
  }

  /* ==========================================================================
     8. Wishlist Logic & Drawer
     ========================================================================== */

  function toggleWishlist(productId) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const index = state.wishlist.indexOf(productId);
    if (index > -1) {
      state.wishlist.splice(index, 1);
      showToast(`Removed "${product.title}" from Wishlist`, 'info');
    } else {
      state.wishlist.push(productId);
      showToast(`Added "${product.title}" to Wishlist`, 'heart');
    }

    saveWishlist();
    renderProducts();
    renderWishlistDrawer();
  }

  function renderWishlistDrawer() {
    const wishlistBody = document.getElementById('wishlistDrawerBody');
    const wishlistCountSpan = document.getElementById('wishlistCountText');
    if (!wishlistBody) return;

    wishlistCountSpan.textContent = `(${state.wishlist.length})`;

    if (state.wishlist.length === 0) {
      wishlistBody.innerHTML = `
        <div class="drawer-empty">
          <svg class="drawer-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
          <h4>Your Wishlist is Empty</h4>
          <p>Save pieces you love to curate your dream seasonal wardrobe.</p>
          <button class="btn btn-primary btn-sm" onclick="document.getElementById('wishlistDrawer').classList.remove('open'); document.getElementById('drawerBackdrop').classList.remove('active'); document.getElementById('products').scrollIntoView({behavior: 'smooth'})">Explore Collection</button>
        </div>
      `;
      return;
    }

    const savedProducts = PRODUCTS.filter((p) => state.wishlist.includes(p.id));

    wishlistBody.innerHTML = savedProducts
      .map(
        (product) => `
        <div class="wishlist-item" data-id="${product.id}">
          <img src="${product.image}" alt="${product.title}" class="wishlist-item-img">
          <div class="wishlist-item-info">
            <h4 class="cart-item-title">${product.title}</h4>
            <span class="cart-item-meta">${product.category}</span>
            <span class="cart-item-price">${formatINR(product.price)}</span>
          </div>
          <div class="wishlist-actions">
            <button class="btn btn-primary btn-sm wishlist-move-btn" data-id="${product.id}">
              Move to Bag
            </button>
            <button class="cart-item-remove wishlist-remove-btn" data-id="${product.id}" title="Remove">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      `
      )
      .join('');

    // Attach Wishlist drawer events
    wishlistBody.querySelectorAll('.wishlist-move-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const product = PRODUCTS.find((p) => p.id === id);
        if (product) {
          addToCart(product, product.sizes[0] || 'M', 1);
          toggleWishlist(id);
          closeAllDrawers();
          openCartDrawer();
        }
      });
    });

    wishlistBody.querySelectorAll('.wishlist-remove-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        toggleWishlist(id);
      });
    });
  }

  /* ==========================================================================
     9. Shopping Bag (Cart) Logic & Drawer
     ========================================================================== */

  function addToCart(product, size = 'M', quantity = 1) {
    const existing = state.cart.find((item) => item.id === product.id && item.size === size);

    if (existing) {
      existing.quantity += quantity;
    } else {
      state.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
        size: size,
        quantity: quantity
      });
    }

    saveCart();
    renderCartDrawer();
    showToast(`Added "${product.title}" (${size}) to Bag`, 'success');
  }

  function updateCartQuantity(index, delta) {
    if (state.cart[index]) {
      state.cart[index].quantity += delta;
      if (state.cart[index].quantity <= 0) {
        state.cart.splice(index, 1);
      }
      saveCart();
      renderCartDrawer();
    }
  }

  function removeCartItem(index) {
    if (state.cart[index]) {
      const removed = state.cart.splice(index, 1)[0];
      saveCart();
      renderCartDrawer();
      showToast(`Removed "${removed.title}" from Bag`, 'info');
    }
  }

  function renderCartDrawer() {
    const cartBody = document.getElementById('cartDrawerBody');
    const cartCountSpan = document.getElementById('cartCountText');
    const cartSubtotalSpan = document.getElementById('cartSubtotal');
    const cartDiscountRow = document.getElementById('cartDiscountRow');
    const cartDiscountSpan = document.getElementById('cartDiscount');
    const cartTotalSpan = document.getElementById('cartTotal');
    const shippingMeterFill = document.getElementById('shippingMeterFill');
    const shippingMeterText = document.getElementById('shippingMeterText');
    const cartFooter = document.getElementById('cartDrawerFooter');

    if (!cartBody) return;

    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.textContent = `(${totalCount})`;

    if (state.cart.length === 0) {
      cartBody.innerHTML = `
        <div class="drawer-empty">
          <svg class="drawer-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <h4>Your Shopping Bag is Empty</h4>
          <p>Discover our latest arrivals and timeless wardrobe essentials.</p>
          <button class="btn btn-primary btn-sm" onclick="document.getElementById('cartDrawer').classList.remove('open'); document.getElementById('drawerBackdrop').classList.remove('active'); document.getElementById('products').scrollIntoView({behavior: 'smooth'})">Explore New Arrivals</button>
        </div>
      `;
      cartFooter.style.display = 'none';
      if (shippingMeterFill) shippingMeterFill.style.width = '0%';
      if (shippingMeterText) {
        shippingMeterText.innerHTML = `Complimentary express shipping on orders over <strong>${formatINR(5000)}</strong>`;
      }
      return;
    }

    cartFooter.style.display = 'block';

    // Calculate subtotal
    const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const freeShippingThreshold = 5000;
    const shippingProgress = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

    if (shippingMeterFill) shippingMeterFill.style.width = `${shippingProgress}%`;

    if (shippingMeterText) {
      if (subtotal >= freeShippingThreshold) {
        shippingMeterText.innerHTML = `✨ <strong>Complimentary Express Shipping</strong> Unlocked!`;
      } else {
        const remaining = freeShippingThreshold - subtotal;
        shippingMeterText.innerHTML = `Add <strong>${formatINR(remaining)}</strong> more to enjoy <strong>Complimentary Express Shipping</strong>.`;
      }
    }

    // Discount calculations
    const discountAmount = Math.round(subtotal * state.appliedDiscount);
    const finalTotal = subtotal - discountAmount;

    cartSubtotalSpan.textContent = formatINR(subtotal);
    if (state.appliedDiscount > 0) {
      cartDiscountRow.style.display = 'flex';
      cartDiscountSpan.textContent = `-${formatINR(discountAmount)} (${state.activePromoCode})`;
    } else {
      cartDiscountRow.style.display = 'none';
    }
    cartTotalSpan.textContent = formatINR(finalTotal);

    // Render items
    cartBody.innerHTML = state.cart
      .map(
        (item, index) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" class="cart-item-img">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.title}</h4>
            <span class="cart-item-meta">Size: ${item.size} • ${item.category}</span>
            <span class="cart-item-price">${formatINR(item.price)}</span>
            <div class="cart-item-qty">
              <button class="qty-btn" data-action="decrease" data-index="${index}" aria-label="Decrease quantity">−</button>
              <span class="qty-value">${item.quantity}</span>
              <button class="qty-btn" data-action="increase" data-index="${index}" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="cart-item-remove" data-index="${index}" title="Remove item" aria-label="Remove item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      `
      )
      .join('');

    // Attach quantity and remove events
    cartBody.querySelectorAll('.qty-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.dataset.index, 10);
        const action = btn.dataset.action;
        updateCartQuantity(index, action === 'increase' ? 1 : -1);
      });
    });

    cartBody.querySelectorAll('.cart-item-remove').forEach((btn) => {
      btn.addEventListener('click', () => {
        const index = parseInt(btn.dataset.index, 10);
        removeCartItem(index);
      });
    });
  }

  // Promo Code Validation
  const promoInput = document.getElementById('promoInput');
  const applyPromoBtn = document.getElementById('applyPromoBtn');

  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'VELORA10') {
        state.appliedDiscount = 0.1;
        state.activePromoCode = 'VELORA10';
        showToast('Promo code applied: 10% Discount!', 'success');
        renderCartDrawer();
      } else if (code.length === 0) {
        showToast('Please enter a voucher code', 'info');
      } else {
        showToast('Invalid promo code. Try VELORA10', 'info');
      }
    });
  }

  // Drawer Toggle Helpers
  function openCartDrawer() {
    closeAllDrawers();
    if (cartDrawer) cartDrawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    document.body.classList.add('modal-open');
    renderCartDrawer();
  }

  function openWishlistDrawer() {
    closeAllDrawers();
    if (wishlistDrawer) wishlistDrawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    document.body.classList.add('modal-open');
    renderWishlistDrawer();
  }

  function closeAllDrawers() {
    if (cartDrawer) cartDrawer.classList.remove('open');
    if (wishlistDrawer) wishlistDrawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  openCartBtns.forEach((btn) => btn.addEventListener('click', openCartDrawer));
  openWishlistBtns.forEach((btn) => btn.addEventListener('click', openWishlistDrawer));
  closeDrawerBtns.forEach((btn) => btn.addEventListener('click', closeAllDrawers));
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeAllDrawers);

  /* ==========================================================================
     10. Quick View Modal
     ========================================================================== */

  let quickViewSelectedSize = 'M';
  let quickViewSelectedQty = 1;
  let activeQuickViewProduct = null;

  function openQuickView(productId) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    activeQuickViewProduct = product;
    quickViewSelectedSize = product.sizes[0] || 'M';
    quickViewSelectedQty = 1;

    quickviewDialog.innerHTML = `
      <button class="quickview-close" id="dialogCloseBtn" aria-label="Close modal">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <div class="quickview-img-wrapper">
        <img src="${product.image}" alt="${product.title}" class="quickview-img">
      </div>
      <div class="quickview-details">
        <span class="quickview-category">${product.category}</span>
        <h3 class="quickview-title">${product.title}</h3>
        <div class="quickview-rating">
          <span class="star-icon">★★★★★</span>
          <span>${product.rating} (${product.reviewsCount} verified reviews)</span>
        </div>
        <div class="quickview-price">${formatINR(product.price)}</div>
        <p class="quickview-desc">${product.description}</p>
        <p class="quickview-desc" style="font-size: 0.8rem; color: #7A624A; margin-top: -0.75rem;">
          <strong>Composition:</strong> ${product.fabric}
        </p>

        <div class="size-selector-label">Select Size</div>
        <div class="size-options">
          ${product.sizes
            .map(
              (size) => `
            <button class="size-btn ${size === quickViewSelectedSize ? 'active' : ''}" data-size="${size}">${size}</button>
          `
            )
            .join('')}
        </div>

        <div class="quickview-actions">
          <div class="quickview-qty">
            <button class="qty-btn" id="modalQtyMinus">−</button>
            <span class="qty-value" id="modalQtyVal">1</span>
            <button class="qty-btn" id="modalQtyPlus">+</button>
          </div>
          <button class="btn btn-primary quickview-add-btn" id="modalAddToCartBtn">
            Add to Bag • ${formatINR(product.price)}
          </button>
        </div>
      </div>
    `;

    // Size Selection
    quickviewDialog.querySelectorAll('.size-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        quickviewDialog.querySelectorAll('.size-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        quickViewSelectedSize = btn.dataset.size;
      });
    });

    // Qty Adjusters
    const modalQtyVal = document.getElementById('modalQtyVal');
    document.getElementById('modalQtyMinus').addEventListener('click', () => {
      if (quickViewSelectedQty > 1) {
        quickViewSelectedQty--;
        modalQtyVal.textContent = quickViewSelectedQty;
      }
    });
    document.getElementById('modalQtyPlus').addEventListener('click', () => {
      quickViewSelectedQty++;
      modalQtyVal.textContent = quickViewSelectedQty;
    });

    // Add to Cart
    document.getElementById('modalAddToCartBtn').addEventListener('click', () => {
      addToCart(activeQuickViewProduct, quickViewSelectedSize, quickViewSelectedQty);
      closeQuickView();
      openCartDrawer();
    });

    // Close button
    const dialogCloseBtn = document.getElementById('dialogCloseBtn');
    if (dialogCloseBtn) dialogCloseBtn.addEventListener('click', closeQuickView);

    if (quickviewModal) {
      quickviewModal.classList.add('active');
      document.body.classList.add('modal-open');
    }
  }

  function closeQuickView() {
    if (quickviewModal) quickviewModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  if (quickviewModal) {
    quickviewModal.addEventListener('click', (e) => {
      if (e.target === quickviewModal) closeQuickView();
    });
  }

  /* ==========================================================================
     11. Search Overlay Modal
     ========================================================================== */

  function openSearchModal() {
    if (!searchModal) return;
    searchModal.classList.add('active');
    document.body.classList.add('modal-open');
    if (searchModalInput) {
      searchModalInput.value = '';
      searchModalInput.focus();
    }
    renderSearchModalResults('');
  }

  function closeSearchModal() {
    if (!searchModal) return;
    searchModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  openSearchBtns.forEach((btn) => btn.addEventListener('click', openSearchModal));
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearchModal);

  function renderSearchModalResults(query) {
    const q = query.toLowerCase().trim();
    const results = !q
      ? PRODUCTS.slice(0, 3) // show 3 featured suggestions when empty
      : PRODUCTS.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        );

    if (results.length === 0) {
      searchModalResults.innerHTML = `
        <div style="grid-column: 1 / -1; color: rgba(255,255,255,0.7); text-align: center; padding: 3rem 0;">
          <p>No results found for "${query}".</p>
        </div>
      `;
      return;
    }

    searchModalResults.innerHTML = results
      .map(
        (product) => `
        <div class="product-card" style="background: #201e1d; border-color: rgba(255,255,255,0.1); color: #fff;">
          <div class="product-image-container" style="aspect-ratio: 4/5;">
            <img src="${product.image}" alt="${product.title}" class="product-image">
          </div>
          <div class="product-info" style="padding: 1rem;">
            <span class="product-category" style="color: #C5A880;">${product.category}</span>
            <h4 style="color: #fff; font-size: 1rem; margin-bottom: 0.35rem;">${product.title}</h4>
            <div style="color: #fff; font-weight: 600; margin-bottom: 0.75rem;">${formatINR(product.price)}</div>
            <button class="btn btn-gold btn-sm search-select-btn" data-id="${product.id}" style="width: 100%;">
              Quick View
            </button>
          </div>
        </div>
      `
      )
      .join('');

    searchModalResults.querySelectorAll('.search-select-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        closeSearchModal();
        openQuickView(id);
      });
    });
  }

  if (searchModalInput) {
    searchModalInput.addEventListener('input', (e) => {
      renderSearchModalResults(e.target.value);
    });
  }

  /* ==========================================================================
     12. Lookbook Lightbox Modal
     ========================================================================== */

  function openLightbox(index) {
    if (!lightboxModal) return;
    state.currentLookbookIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function updateLightboxContent() {
    const item = LOOKBOOK_ITEMS[state.currentLookbookIndex];
    if (!item) return;

    if (lightboxImg) {
      lightboxImg.src = item.image;
      lightboxImg.alt = item.title;
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = `${item.subtitle} • ${item.description}`;
  }

  function closeLightbox() {
    if (lightboxModal) lightboxModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  function nextLightbox() {
    state.currentLookbookIndex = (state.currentLookbookIndex + 1) % LOOKBOOK_ITEMS.length;
    updateLightboxContent();
  }

  function prevLightbox() {
    state.currentLookbookIndex =
      (state.currentLookbookIndex - 1 + LOOKBOOK_ITEMS.length) % LOOKBOOK_ITEMS.length;
    updateLightboxContent();
  }

  document.querySelectorAll('.lookbook-item').forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Global Keyboard Shortcuts (Esc to close, Arrow keys for lightbox)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDrawers();
      closeQuickView();
      closeSearchModal();
      closeLightbox();
      closeCheckoutModal();
      closeMobileNav();
    } else if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    }
  });

  /* ==========================================================================
     13. Testimonials Carousel
     ========================================================================== */

  const testimonialsSlider = document.getElementById('testimonialsSlider');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  const testimonialPrev = document.getElementById('testimonialPrev');
  const testimonialNext = document.getElementById('testimonialNext');
  let currentTestimonial = 0;
  let testimonialInterval = null;

  function setTestimonial(index) {
    currentTestimonial = index;
    if (testimonialsSlider) {
      testimonialsSlider.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    }
    testimonialDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentTestimonial);
    });
  }

  function nextTestimonial() {
    const nextIdx = (currentTestimonial + 1) % testimonialDots.length;
    setTestimonial(nextIdx);
  }

  function prevTestimonial() {
    const prevIdx = (currentTestimonial - 1 + testimonialDots.length) % testimonialDots.length;
    setTestimonial(prevIdx);
  }

  if (testimonialNext) testimonialNext.addEventListener('click', nextTestimonial);
  if (testimonialPrev) testimonialPrev.addEventListener('click', prevTestimonial);

  testimonialDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index, 10);
      setTestimonial(idx);
    });
  });

  // Auto rotation
  function startTestimonialTimer() {
    testimonialInterval = setInterval(nextTestimonial, 6000);
  }
  function stopTestimonialTimer() {
    clearInterval(testimonialInterval);
  }

  const carouselWrapper = document.querySelector('.testimonials-carousel-wrapper');
  if (carouselWrapper) {
    carouselWrapper.addEventListener('mouseenter', stopTestimonialTimer);
    carouselWrapper.addEventListener('mouseleave', startTestimonialTimer);
    startTestimonialTimer();
  }

  /* ==========================================================================
     14. Checkout Demo Modal
     ========================================================================== */

  function openCheckoutModal() {
    if (state.cart.length === 0) {
      showToast('Your shopping bag is empty!', 'info');
      return;
    }
    closeAllDrawers();
    renderCheckoutSummary();
    if (checkoutModal) {
      checkoutModal.classList.add('active');
      document.body.classList.add('modal-open');
    }
  }

  function closeCheckoutModal() {
    if (checkoutModal) checkoutModal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  function renderCheckoutSummary() {
    const checkoutItemsList = document.getElementById('checkoutItemsList');
    const checkoutTotal = document.getElementById('checkoutTotal');
    if (!checkoutItemsList) return;

    const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = Math.round(subtotal * state.appliedDiscount);
    const finalTotal = subtotal - discount;

    checkoutItemsList.innerHTML = state.cart
      .map(
        (item) => `
        <div style="display: flex; justify-content: space-between; font-size: 0.8125rem; margin-bottom: 0.5rem;">
          <span>${item.title} (${item.size}) × ${item.quantity}</span>
          <span style="font-weight: 600;">${formatINR(item.price * item.quantity)}</span>
        </div>
      `
      )
      .join('');

    if (checkoutTotal) checkoutTotal.textContent = formatINR(finalTotal);
  }

  if (openCheckoutBtn) openCheckoutBtn.addEventListener('click', openCheckoutModal);
  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckoutModal);

  if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) closeCheckoutModal();
    });
  }

  // Payment method selection
  const paymentCards = document.querySelectorAll('.payment-method-card');
  paymentCards.forEach((card) => {
    card.addEventListener('click', () => {
      paymentCards.forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = checkoutForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `Processing Order...`;

      setTimeout(() => {
        const orderId = 'VEL-' + Math.floor(100000 + Math.random() * 900000);
        state.cart = [];
        state.appliedDiscount = 0;
        state.activePromoCode = '';
        saveCart();
        renderCartDrawer();
        closeCheckoutModal();

        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        checkoutForm.reset();

        showToast(`🎉 Order Placed Successfully! Ref: ${orderId}`, 'success');

        // Show elegant confirmation alert dialog
        setTimeout(() => {
          alert(
            `Thank you for your demo order with VELORA.\n\nOrder Confirmation ID: #${orderId}\nA simulated receipt and styling guide have been dispatched.\n\n(Demo Mode: No real charges were processed.)`
          );
        }, 500);
      }, 1500);
    });
  }

  /* ==========================================================================
     15. Newsletter Subscription Logic
     ========================================================================== */

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        newsletterMsg.className = 'newsletter-message error';
        newsletterMsg.textContent = 'Please provide an email address.';
        return;
      }

      if (!emailRegex.test(email)) {
        newsletterMsg.className = 'newsletter-message error';
        newsletterMsg.textContent = 'Please provide a valid email format.';
        return;
      }

      // Simulate successful subscription
      newsletterMsg.className = 'newsletter-message success';
      newsletterMsg.innerHTML = `Welcome to VELORA. Your 10% welcome voucher: <strong>VELORA10</strong>`;
      showToast('Subscribed! Welcome to the Velora Circle.', 'success');
      newsletterEmail.value = '';
    });
  }

  /* ==========================================================================
     16. Contact & Concierge Form
     ========================================================================== */

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();

      if (!name || !email) {
        showToast('Please fill out all required fields.', 'info');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Transmitting to Atelier...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        contactForm.reset();
        showToast(`Thank you, ${name}. Our concierge will reply within 24 hours.`, 'success');
      }, 1000);
    });
  }

  /* ==========================================================================
     17. Scroll-Triggered Reveal Animations
     ========================================================================== */

  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('in-view'));
  }

  // Safe immediate reveal for all visible or top-level elements to ensure zero blank beige screen
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.5 || el.closest('.collections-section') || el.closest('.page-hero')) {
      el.classList.add('in-view');
    }
  });

  /* ==========================================================================
     18. Initialize Catalog & Drawers
     ========================================================================== */

  renderProducts();
  renderSubCollections();
  updateCartBadges();
  updateWishlistBadges();
  renderCartDrawer();
  renderWishlistDrawer();
});
