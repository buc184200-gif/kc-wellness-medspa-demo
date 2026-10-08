// ============================================================
// SITE CONFIG — KC WELLNESS PERSONALIZATION (20% layer)
// Swap this file to rebrand for a new Med Spa prospect.
// ============================================================

export const siteConfig = {
  // ---- Brand ----
  name: 'KC Wellness',
  tagline: 'A Top Medical Spa in Oklahoma City',
  heroHeadline: 'Personalized Aesthetics.\nWhole-Person Wellness.',
  heroSubheadline:
    'Expert-led treatments designed to enhance your natural beauty — with a "less is more" philosophy that keeps results looking like you, only refreshed.',
  heroCta: 'Book Complimentary Consultation',
  heroCtaSecondary: 'Find My Treatment',

  // ---- Contact / Location (Verified) ----
  phone: '(405) 704-6673',
  email: 'kelli@kcwellness.life',
  address: '13820 Wireless Way',
  city: 'Oklahoma City',
  state: 'OK',
  zip: '73134',
  locationNote: 'Located inside Refined OKC',
  website: 'https://www.kcwellnessokc.com',
  instagram: 'https://www.instagram.com/kcwellnessokc/',
  facebook: 'https://www.facebook.com/profile.php?id=61586372644487',

  // ---- Consultation terminology ----
  consultationLabel: 'Complimentary Consultation',
  bookingCtaText: 'Book Complimentary Consultation',
  bookingCtaShort: 'Book Consultation',

  // ---- External booking ----
  bookingUrl: 'https://www.kcwellnessokc.com', // fallback to their site

  // ---- Navigation ----
  navLinks: [
    { label: 'Treatments', href: '/treatments' },
    { label: 'Concerns', href: '/#concerns' },
    { label: 'Results', href: '/results' },
    { label: 'Providers', href: '/providers' },
    { label: 'About', href: '/about' },
  ],
};

// ============================================================
// PROVIDERS — Verified KC Wellness Information
// ============================================================

export const providers = [
  {
    id: 'kelli-cossey',
    name: 'Kelli Cossey',
    credentials: 'RN, BSN',
    role: 'Owner & Nurse Injector',
    philosophy:
      'Kelli believes in a "less is more" approach — delivering natural, undetectable enhancements that let your authentic beauty shine through. She combines advanced medical aesthetics with a holistic, whole-person perspective.',
    specialties: [
      'Botox & Dysport',
      'Dermal Fillers',
      'Sculptra',
      'SkinPen Microneedling',
    ],
    education: 'Continuing education in Naturopathic Medicine',
    // Photo not verified — using placeholder
    photo: null,
    verified: true,
  },
];

// ============================================================
// CONCERNS — Reusable Med Spa concern categories
// ============================================================

export const concerns = [
  {
    id: 'fine-lines',
    label: 'Fine Lines & Wrinkles',
    shortDesc: 'Smooth expression lines and restore a refreshed appearance.',
    icon: '✦',
    relatedTreatments: ['botox-dysport', 'fillers'],
  },
  {
    id: 'skin-texture',
    label: 'Skin Texture & Scarring',
    shortDesc:
      'Improve uneven texture, acne scarring, and overall skin quality.',
    icon: '◈',
    relatedTreatments: ['microneedling', 'laser-treatments'],
  },
  {
    id: 'volume-loss',
    label: 'Volume Loss',
    shortDesc:
      'Restore youthful contours to the cheeks, lips, jawline, and temples.',
    icon: '◉',
    relatedTreatments: ['fillers', 'sculptra'],
  },
  {
    id: 'pigmentation',
    label: 'Pigmentation & Tone',
    shortDesc:
      'Address sun damage, dark spots, and uneven skin tone for a brighter complexion.',
    icon: '❋',
    relatedTreatments: ['laser-treatments', 'microneedling'],
  },
  {
    id: 'weight-management',
    label: 'Weight Management',
    shortDesc:
      'Targeted lipotropic support and cellular metabolism optimization for healthy body composition.',
    icon: '✤',
    relatedTreatments: ['weight-loss', 'iv-therapy'],
  },
  {
    id: 'wellness',
    label: 'Energy & Wellness',
    shortDesc:
      'Support whole-body vitality with IV therapy, NAD+, and wellness treatments.',
    icon: '❂',
    relatedTreatments: ['iv-therapy', 'wellness-shots', 'weight-loss'],
  },
];

// ============================================================
// TREATMENTS — Verified KC Wellness Services
// ============================================================

export const treatments = [
  {
    id: 'botox-dysport',
    slug: 'botox-dysport',
    name: 'Botox & Dysport',
    category: 'Injectables',
    tagline: 'Soften expression lines. Keep your natural movement.',
    shortDesc:
      'Neuromodulators that gently relax targeted facial muscles to smooth fine lines and wrinkles — with results that look natural, never frozen.',
    whatItHelps: [
      'Forehead lines',
      "Crow's feet",
      'Frown lines (11s)',
      'Brow lift',
    ],
    whoItsFor:
      'Clients looking to soften dynamic wrinkles while maintaining natural facial expression.',
    overview:
      'Botox and Dysport are FDA-approved neuromodulators that temporarily relax specific facial muscles responsible for expression lines. Treatments typically take 15–30 minutes with minimal downtime.',
    provider: 'kelli-cossey',
    concernIds: ['fine-lines'],
    featured: true,
    image: '/images/injectables.jpg',
  },
  {
    id: 'fillers',
    slug: 'dermal-fillers',
    name: 'Dermal Fillers',
    category: 'Injectables',
    tagline: 'Restore volume. Enhance contours. Naturally.',
    shortDesc:
      'Hyaluronic acid-based fillers designed to restore lost volume, enhance facial contours, and achieve a refreshed, balanced appearance.',
    whatItHelps: [
      'Cheek volume',
      'Lip enhancement',
      'Jawline contouring',
      'Under-eye hollows',
      'Nasolabial folds',
    ],
    whoItsFor:
      'Clients experiencing age-related volume loss or seeking subtle facial enhancement.',
    overview:
      'Dermal fillers use biocompatible hyaluronic acid to restore volume and smooth deeper lines. Results are immediate and can last 6–18 months depending on the treatment area and product used.',
    provider: 'kelli-cossey',
    concernIds: ['volume-loss', 'fine-lines'],
    featured: true,
    image: '/images/facial-contour.jpg',
  },
  {
    id: 'sculptra',
    slug: 'sculptra',
    name: 'Sculptra',
    category: 'Injectables',
    tagline: 'Stimulate your own collagen. Gradual, lasting results.',
    shortDesc:
      'A biostimulator that works with your body to gradually rebuild collagen, restoring facial volume over time for natural-looking, long-lasting improvement.',
    whatItHelps: [
      'Deep facial folds',
      'Overall facial volume loss',
      'Skin laxity',
      'Temple hollowing',
    ],
    whoItsFor:
      'Clients looking for gradual, long-lasting facial rejuvenation through collagen stimulation.',
    overview:
      'Sculptra is an injectable poly-L-lactic acid (PLLA) biostimulator that helps your body rebuild its own natural collagen. Results develop gradually over several months and can last up to two years.',
    provider: 'kelli-cossey',
    concernIds: ['volume-loss'],
    featured: false,
    image: '/images/facial-contour.jpg',
  },
  {
    id: 'microneedling',
    slug: 'microneedling',
    name: 'SkinPen Microneedling',
    category: 'Skin Rejuvenation',
    tagline: 'Stimulate renewal. Reveal smoother skin.',
    shortDesc:
      'FDA-cleared microneedling that creates controlled micro-injuries to stimulate your skin\'s natural healing response, improving texture, tone, and scarring.',
    whatItHelps: [
      'Acne scars',
      'Fine lines',
      'Uneven texture',
      'Large pores',
      'Overall skin quality',
    ],
    whoItsFor:
      'Clients seeking improvement in skin texture, scarring, or overall skin quality through a minimally invasive treatment.',
    overview:
      'SkinPen Microneedling uses fine needles to create controlled micro-channels in the skin, triggering the body\'s natural wound-healing process and stimulating collagen and elastin production.',
    provider: 'kelli-cossey',
    concernIds: ['skin-texture'],
    featured: true,
    image: '/images/skin-texture.jpg',
  },
  {
    id: 'laser-treatments',
    slug: 'laser-treatments',
    name: 'BBL & Moxi Laser',
    category: 'Skin Rejuvenation',
    tagline: 'Advanced light therapy for clearer, more even skin.',
    shortDesc:
      'BroadBand Light (BBL) and Moxi laser treatments that address pigmentation, sun damage, and skin texture with minimal downtime.',
    whatItHelps: [
      'Sun damage',
      'Age spots',
      'Uneven pigmentation',
      'Skin texture',
      'Early signs of aging',
    ],
    whoItsFor:
      'Clients looking to address pigmentation, sun damage, or overall skin tone improvement.',
    overview:
      'BBL uses intense pulsed light to target pigmentation and redness, while Moxi is a gentle fractional laser that improves tone and texture. Both treatments support a clearer, more youthful complexion.',
    provider: 'kelli-cossey',
    concernIds: ['pigmentation', 'skin-texture'],
    featured: true,
    image: '/images/skin-texture.jpg',
  },
  {
    id: 'iv-therapy',
    slug: 'iv-therapy',
    name: 'IV Therapy',
    category: 'Wellness',
    tagline: 'Replenish. Recover. Revitalize.',
    shortDesc:
      'Medical-grade IV infusions delivering essential vitamins, minerals, and hydration directly to your system for rapid replenishment and whole-body support.',
    whatItHelps: [
      'Low energy',
      'Dehydration',
      'Immune support',
      'Recovery',
      'Overall wellness',
    ],
    whoItsFor:
      'Clients seeking an efficient boost in hydration, energy, immune support, or recovery.',
    overview:
      "IV therapy delivers a customized blend of vitamins and minerals directly into the bloodstream for maximum absorption. KC Wellness offers options including the classic Myer's Cocktail.",
    provider: 'kelli-cossey',
    concernIds: ['wellness'],
    featured: false,
    image: '/images/wellness.jpg',
  },
  {
    id: 'wellness-shots',
    slug: 'wellness-shots',
    name: 'Bio-Hacking Shots',
    category: 'Wellness',
    tagline: 'Targeted support. Maximum absorption.',
    shortDesc:
      'Quick intramuscular injections of NAD+, PolyMVA, B12, and other targeted nutrients for energy, cognitive support, and cellular health.',
    whatItHelps: [
      'Energy levels',
      'Cognitive clarity',
      'Cellular health',
      'Inflammation',
    ],
    whoItsFor:
      'Clients interested in targeted nutrient support for energy, focus, and overall cellular wellness.',
    overview:
      'Bio-Hacking Shots are quick intramuscular injections that deliver concentrated nutrients directly into the body. Options include NAD+, PolyMVA, and B12 shots.',
    provider: 'kelli-cossey',
    concernIds: ['wellness'],
    featured: false,
    image: '/images/wellness.jpg',
  },
  {
    id: 'weight-loss',
    slug: 'weight-loss',
    name: 'Metabolic & Weight Support',
    category: 'Wellness',
    tagline: 'Optimize metabolism. Support natural vitality.',
    shortDesc:
      'Targeted lipotropic MIC injections (Methionine, Inositol, Choline) and customized metabolic infusions designed to support efficient fat metabolism and cellular energy.',
    whatItHelps: [
      'Metabolic efficiency',
      'Fat metabolism support',
      'Energy & stamina',
      'Nutrient absorption',
      'Body composition goals',
    ],
    whoItsFor:
      'Clients seeking medically formulated metabolic and lipotropic support alongside nutrition and lifestyle goals.',
    overview:
      'KC Wellness provides targeted lipotropic therapies including MIC Lipo B12 injections and metabolic wellness infusions. Formulated with key lipotropic nutrients—Methionine, Inositol, Choline, and L-Carnitine—these treatments support liver function, cellular energy production, and efficient fat metabolism.',
    provider: 'kelli-cossey',
    concernIds: ['weight-management', 'wellness'],
    featured: true,
    image: '/images/wellness.jpg',
  },
  {
    id: 'prp',
    slug: 'prp',
    name: 'PRP Therapy',
    category: 'Skin Rejuvenation',
    tagline: 'Harness your body\'s own healing power.',
    shortDesc:
      'Platelet-Rich Plasma therapy uses your own blood\'s growth factors to stimulate tissue regeneration, collagen production, and skin rejuvenation.',
    whatItHelps: [
      'Skin rejuvenation',
      'Hair restoration',
      'Acne scarring',
      'Fine lines',
    ],
    whoItsFor:
      'Clients seeking a natural approach to skin rejuvenation using their body\'s own growth factors.',
    overview:
      'PRP therapy involves drawing a small amount of blood, processing it to concentrate the platelets and growth factors, and then applying it to the treatment area to stimulate natural healing and regeneration.',
    provider: 'kelli-cossey',
    concernIds: ['skin-texture', 'fine-lines'],
    featured: false,
    image: '/images/skin-texture.jpg',
  },
  {
    id: 'diamond-glow',
    slug: 'diamond-glow',
    name: 'DiamondGlow',
    category: 'Skin Rejuvenation',
    tagline: 'Exfoliate. Extract. Infuse.',
    shortDesc:
      'A medical-grade skin resurfacing treatment that simultaneously exfoliates, extracts impurities, and infuses targeted serums for immediately radiant skin.',
    whatItHelps: [
      'Dull skin',
      'Congested pores',
      'Dehydration',
      'Uneven texture',
    ],
    whoItsFor:
      'Clients seeking immediate skin radiance with no downtime through a medical-grade facial treatment.',
    overview:
      'DiamondGlow is a next-level skin resurfacing treatment that goes beyond a standard facial. It uses a patented wand with a diamond tip to exfoliate dead skin, extract debris, and simultaneously infuse customized serums.',
    provider: 'kelli-cossey',
    concernIds: ['skin-texture', 'pigmentation'],
    featured: false,
    image: '/images/skin-texture.jpg',
  },
];

// ============================================================
// TREATMENT CATEGORIES — for filtering
// ============================================================

export const treatmentCategories = [
  'All',
  'Injectables',
  'Skin Rejuvenation',
  'Wellness',
];

// ============================================================
// RESULTS / PROOF — Smart Proof System
// ============================================================

export const results = [
  // State B — Decision-Support & Expectation Guides
  // Active when clinical photography is pending patient consent.
  // Replaces empty "Coming Soon" tiles with actionable clinical timelines.
  {
    id: 'botox-result',
    treatmentId: 'botox-dysport',
    treatmentName: 'Botox & Dysport',
    hasApprovedPhotos: false,
    whatClientsAddress: ['Expression lines', 'Forehead creases', "Crow's feet", 'Frown lines (11s)'],
    whatToExpect:
      'Most clients notice softening of expression lines within 3–7 days, with full results visible at 2 weeks. Results typically last 3–4 months. Touch-ups help maintain a consistently refreshed appearance.',
    clinicalInsight:
      'Conservative micro-dosing preserves full natural expression while preventing crease deepening.',
    category: 'Injectables',
  },
  {
    id: 'filler-result',
    treatmentId: 'fillers',
    treatmentName: 'Dermal Fillers',
    hasApprovedPhotos: false,
    whatClientsAddress: ['Lip volume', 'Cheek contour', 'Under-eye hollows', 'Nasolabial folds'],
    whatToExpect:
      'Results are visible immediately after treatment, with final results at 2 weeks once any initial swelling subsides. Most hyaluronic acid fillers last 6–18 months depending on the area and product used.',
    clinicalInsight:
      'Layered micro-droplet placement restores structural harmony without overfilling or unnatural projection.',
    category: 'Injectables',
  },
  {
    id: 'microneedling-result',
    treatmentId: 'microneedling',
    treatmentName: 'SkinPen Microneedling',
    hasApprovedPhotos: false,
    whatClientsAddress: ['Acne scarring', 'Uneven texture', 'Fine lines', 'Pore size'],
    whatToExpect:
      'Skin may appear pink for 24–72 hours post-treatment. Visible improvements in texture and tone typically emerge within 2–4 weeks, with progressive collagen remodeling continuing for up to 6 months.',
    clinicalInsight:
      'Mechanical micro-injury stimulates natural physiological healing cascades without heat-induced pigmentation risk.',
    category: 'Skin Rejuvenation',
  },
  {
    id: 'laser-result',
    treatmentId: 'laser-treatments',
    treatmentName: 'BBL & Moxi Laser',
    hasApprovedPhotos: false,
    whatClientsAddress: ['Sun damage', 'Age spots', 'Uneven tone', 'Texture'],
    whatToExpect:
      'Treated areas may appear slightly flushed for 1–3 days. Dark spots may temporarily darken ("coffee-grounding") before naturally sloughing away in 5–7 days, revealing brighter, clearer skin.',
    clinicalInsight:
      'Dual-depth light energy targets superficial melanin clusters and stimulates deep dermal elasticity simultaneously.',
    category: 'Skin Rejuvenation',
  },
  {
    id: 'weight-result',
    treatmentId: 'weight-loss',
    treatmentName: 'Metabolic & Weight Support',
    hasApprovedPhotos: false,
    whatClientsAddress: ['Fat metabolism', 'Energy levels', 'Metabolic efficiency', 'Body composition'],
    whatToExpect:
      'Clients begin with a dedicated consultation and weekly MIC Lipo injections or targeted metabolic infusions. Most report increased physical stamina and sustained energy within 1–2 weeks.',
    clinicalInsight:
      'Lipotropic compounds (Methionine, Inositol, Choline) and Methyl-B12 act as biological catalysts to support liver lipid transport.',
    category: 'Body & Weight',
  },
  {
    id: 'iv-result',
    treatmentId: 'iv-therapy',
    treatmentName: 'IV Therapy',
    hasApprovedPhotos: false,
    whatClientsAddress: ['Low energy', 'Dehydration', 'Immune support', 'Recovery'],
    whatToExpect:
      'Many clients feel increased energy and hydration within hours of treatment. Sessions typically last 30–60 minutes. Regular treatments can support sustained vitality and wellness.',
    clinicalInsight:
      'Direct intravenous delivery bypasses GI tract degradation for 100% cellular bioavailability of micronutrients.',
    category: 'Wellness',
  },
  // State A Demonstration — Shows how approved clinical results render when patient photography consent is available
  {
    id: 'demo-state-a-clinical',
    treatmentId: 'botox-dysport',
    treatmentName: 'Botox & Dysport (State A Clinical Case)',
    hasApprovedPhotos: true,
    isSampleDemo: true,
    timeline: '14 Days Post-Treatment',
    providerName: 'Kelli Cossey, RN, BSN',
    whatClientsAddress: ['Glabellar frown lines', 'Forehead smoothing', 'Natural movement'],
    whatToExpect:
      'Sample clinical documentation illustrating natural mobility retention with complete softening of resting lines.',
    clinicalInsight:
      'State A Architecture: Activates when clinical photography is approved. Replaces generic stock photos with verified before & after clinical comparison.',
    category: 'Injectables',
  },
];

export const resultCategories = [
  'All',
  'Injectables',
  'Skin Rejuvenation',
  'Body & Weight',
  'Wellness',
];
