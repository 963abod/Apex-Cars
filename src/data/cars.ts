export interface CarAngleImage {
  id: string;
  label: string; // e.g., "الواجهة الأمامية", "المقصورة الداخلية", "الخلفية", "الجانب الأيمن", "العجلات والأطواق", "المحرك والتفاصيل"
  url: string;
}

export interface Car {
  id: string;
  make: string; // e.g. "Range Rover", "Mercedes-Benz", "BMW", "Porsche", "Lexus", "Audi", "Hyundai"
  makeAr: string;
  model: string;
  year: number;
  priceUSD: number;
  fuelType: "بنزين" | "هايبرد" | "كهرباء";
  transmission: "أوتوماتيك" | "أوتوماتيك رياضي" | "ستيبترونيك";
  mileage: string; // e.g. "0 كم (وكالة)", "12,000 كم"
  engineCapacity: string; // e.g. "4.0L V8 Twin-Turbo", "3.0L Inline-6 Turbo"
  horsepower: number; // e.g. 585
  exteriorColor: string;
  interiorColor: string;
  statusCondition: "وكالة (زيرو)" | "خالية تماماً (بحالة الوكالة)" | "خالية العلام وبحالة ممتازة";
  registrationRegion: "مسجلة دمشق" | "مسجلة ريف دمشق" | "مسجلة حلب" | "ترسيم مدفوع 2024";
  featured?: boolean;
  images: CarAngleImage[];
  description: string;
  keyFeatures: string[];
}

export const CARS_DATA: Car[] = [
  {
    id: "range-rover-defender-110-2024",
    make: "Range Rover",
    makeAr: "رينج روفر",
    model: "Defender 110 V8 First Edition",
    year: 2024,
    priceUSD: 168000,
    fuelType: "بنزين",
    transmission: "أوتوماتيك",
    mileage: "0 كم (وكالة)",
    engineCapacity: "5.0L V8 Supercharged",
    horsepower: 518,
    exteriorColor: "أسود سانتوريني ميتاليك",
    interiorColor: "جلد طبيعي بيج وفحم",
    statusCondition: "وكالة (زيرو)",
    registrationRegion: "مسجلة دمشق",
    featured: true,
    description: "رينج روفر ديفندر 110 موديل 2024 زيرو وكالة. أفخم سيارة دفع رباعي متطورة تجمع بين الهيبة والرفاهية العالية مع حزمة الطرق الوعرة كاملة المواصفات.",
    keyFeatures: [
      "نظام رؤية 360 درجة بانو كاميرا",
      "تعليق هوائي ديناميكي متغير",
      "نظام صوتي Meridian Surround 825W",
      "سقف بانورامي متحرك بالكامل",
      "مقاعد ماساج تهوية وتسخين",
      "جنوط مقاس 22 إنش V8 سوداء"
    ],
    images: [
      {
        id: "front",
        label: "المظهر الأمامي",
        url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "side",
        label: "الجانب الأنيق",
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "rear",
        label: "الواجهة الخلفية",
        url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "interior",
        label: "المقصورة الداخلية",
        url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "rims",
        label: "العجلات والأطواق",
        url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "detail",
        label: "التفاصيل والمحرك",
        url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=85&w=1200"
      }
    ]
  },
  {
    id: "mercedes-amg-g63-2024",
    make: "Mercedes",
    makeAr: "مرسيدس بنز",
    model: "AMG G 63 Night Package",
    year: 2024,
    priceUSD: 245000,
    fuelType: "بنزين",
    transmission: "أوتوماتيك رياضي",
    mileage: "2,500 كم (بحالة الزيرو)",
    engineCapacity: "4.0L V8 Bi-Turbo AMG",
    horsepower: 585,
    exteriorColor: "أبيض لؤلؤي ماغنو مطفي",
    interiorColor: "جلد نابا أصفر وشوكولاته ديزاينو",
    statusCondition: "وكالة (زيرو)",
    registrationRegion: "مسجلة دمشق",
    featured: true,
    description: "مرسيدس AMG G63 الجي كلاس الأيقونية موديل 2024. كاملة المواصفات بزمة ناين نايت باكيدج، صوت عادم أوريجينال AMG ونظام القيادة المتطور.",
    keyFeatures: [
      "حزمة Night Package II الرياضية",
      "نظام Burmester High-End 3D Sound",
      "إضاءة محيطية 64 لون متكيفة",
      "عوادم AMG الجانبية المزدوجة",
      "مقاعد ديزاينو ماساج وتبريد",
      "أنظمة مساعدة السائق الذكية الكاملة"
    ],
    images: [
      {
        id: "front",
        label: "المظهر الأمامي",
        url: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "side",
        label: "الجانب الرياضي",
        url: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "rear",
        label: "الخلفية الهجومية",
        url: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "interior",
        label: "الفخامة الداخلية",
        url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "rims",
        label: "جنوط AMG المزدوجة",
        url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=85&w=1200"
      }
    ]
  },
  {
    id: "porsche-cayenne-coupe-turbo-gt-2023",
    make: "Porsche",
    makeAr: "بورش",
    model: "Cayenne GTS Coupe",
    year: 2023,
    priceUSD: 185000,
    fuelType: "بنزين",
    transmission: "ستيبترونيك",
    mileage: "8,000 كم",
    engineCapacity: "4.0L V8 Twin-Turbo",
    horsepower: 541,
    exteriorColor: "رمادي كريت ميتاليك (Crayon)",
    interiorColor: "جلد ألكانتارا أسود مع تطريز أحمر",
    statusCondition: "خالية تماماً (بحالة الوكالة)",
    registrationRegion: "مسجلة ريف دمشق",
    featured: true,
    description: "بورش كايين كوبيه GTS موديل 2023 بحالة الوكالة الخالية تماماً من الحوادث أو الخدوش. أداء رياضي خارق مع راحة السيارات الفارهة.",
    keyFeatures: [
      "سقف كربون فايبر وخلفية رياضية",
      "عادم بورش الرياضي Porsche Sport Exhaust",
      "نظام التعليق التكيفي PASM",
      "شاشات خلفية لمسية ترفيهية",
      "سيراميك بريك بورش المركب",
      "مقاعد رياضية 18 اتجاه ذاكرة"
    ],
    images: [
      {
        id: "front",
        label: "المظهر الأمامي",
        url: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "side",
        label: "الجانب الانسيابي",
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "rear",
        label: "الإضاءة الممتدة الخلفية",
        url: "https://images.unsplash.com/photo-1611245138031-a28a2a0ff398?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "interior",
        label: "المقصورة الرياضية",
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "rims",
        label: "جنوط بورش GTS مقاس 22",
        url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=85&w=1200"
      }
    ]
  },
  {
    id: "bmw-i7-xdrive60-2024",
    make: "BMW",
    makeAr: "بي إم دبليو",
    model: "750Li xDrive M Sport",
    year: 2024,
    priceUSD: 195000,
    fuelType: "هايبرد",
    transmission: "أوتوماتيك",
    mileage: "0 كم (وكالة)",
    engineCapacity: "4.4L V8 Mild Hybrid",
    horsepower: 536,
    exteriorColor: "رمادي بي ام برونز ميتاليك",
    interiorColor: "جلد كشمير مرينو أبيض كريمي",
    statusCondition: "وكالة (زيرو)",
    registrationRegion: "مسجلة دمشق",
    featured: true,
    description: "الفئة السابعة الجديدة كلياً من بي إم دبليو 2024. قمة التكنولوجيا والأناقة الألمانية مع شاشة السينما الخلفية 31 إنش والأبواب الذكية.",
    keyFeatures: [
      "شاشة السينما الخلفية BMW Theater Screen 8K",
      "أبواب تفتح وتغلق كهربائياً تلقائياً",
      "شبكة الشينك المضاءة Iconic Glow",
      "نظام صوتي Bowers & Wilkins Diamond 4D",
      "إنارة سقف الكريستال Sky Lounge",
      "نظام قيادة الذاتية والمساعدة المتطور"
    ],
    images: [
      {
        id: "front",
        label: "المقدمة الكريستالية",
        url: "https://images.unsplash.com/photo-1555215695-3004980adade?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "side",
        label: "الجانب الملكي",
        url: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "rear",
        label: "المظهر الخلفي",
        url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "interior",
        label: "مقصورة الدرجة الأولى",
        url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "rims",
        label: "جنوط M الرياضية مقاس 21",
        url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=85&w=1200"
      }
    ]
  },
  {
    id: "lexus-lx600-vip-2024",
    make: "Lexus",
    makeAr: "لكزس",
    model: "LX 600 VIP Black Edition",
    year: 2024,
    priceUSD: 210000,
    fuelType: "بنزين",
    transmission: "أوتوماتيك",
    mileage: "1,200 كم (بحالة الزيرو)",
    engineCapacity: "3.5L V6 Twin-Turbo",
    horsepower: 409,
    exteriorColor: "أسود ملكي براق",
    interiorColor: "جلد جملي أورانج وفاخر",
    statusCondition: "وكالة (زيرو)",
    registrationRegion: "مسجلة دمشق",
    featured: false,
    description: "لكزس LX600 فئة VIP طراز 2024. أربعة مقاعد منفصلة بالكامل مع مساج مسند القدمين الخلفي والتحكم الكامل من الشاشات اللمسية.",
    keyFeatures: [
      "مقاعد VIP منفصلة مع وضعية انعدام الجاذبية Ottoman",
      "نظام الصوت Mark Levinson Reference Surround 25 Speaker",
      "ثلاجة تبريد مدمجة ومكيف أربعة مناطق",
      "شاشات ترفيه خلفية منفصلة 11.6 إنش",
      "نظام التعليق الهيدروليكي الذكي AHC",
      "حزمة الأوف رود والدفع الرباعي المستمر"
    ],
    images: [
      {
        id: "front",
        label: "الشبك الأمامي الضخم",
        url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "side",
        label: "الهيكل الجانبي",
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "rear",
        label: "الإضاءة المتصلة",
        url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "interior",
        label: "صالة VIP الخلفية",
        url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=85&w=1200"
      }
    ]
  },
  {
    id: "audi-rs7-sportback-2023",
    make: "Audi",
    makeAr: "أودي",
    model: "RS7 Sportback Performance",
    year: 2023,
    priceUSD: 165000,
    fuelType: "بنزين",
    transmission: "أوتوماتيك رياضي",
    mileage: "14,000 كم",
    engineCapacity: "4.0L V8 TFSI Twin-Turbo",
    horsepower: 600,
    exteriorColor: "رمادي ناردو غير ميتاليك (Nardo Gray)",
    interiorColor: "جلد أسود مع درزات فالكونا وتطعيمات كربون",
    statusCondition: "خالية تماماً (بحالة الوكالة)",
    registrationRegion: "مسجلة حلب",
    featured: false,
    description: "أودي RS7 سبورتباك أداء خارق وسرعة فائقة بتصميم كواترو العريض المذهل. السيارة خالية تماماً ومفحوصة بالكامل.",
    keyFeatures: [
      "نظام الدفع الرباعي المستمر Quattro Sport",
      "مصابيح HD Matrix LED مع ليزر أودي",
      "نظام عادم RS الرياضي التكيفي",
      "عدادات Audi Virtual Cockpit Plus",
      "تطعيمات الكربون فايبر المكشوفة",
      "نظام توجيه العجلات الأربع Dynamic All-Wheel Steering"
    ],
    images: [
      {
        id: "front",
        label: "المقدمة الهجومية",
        url: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "side",
        label: "خط السبورتباك الانسيابي",
        url: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "rear",
        label: "مخرج العادم المزدوج",
        url: "https://images.unsplash.com/photo-1611245138031-a28a2a0ff398?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "interior",
        label: "المقصورة الرياضية المتقدمة",
        url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=85&w=1200"
      }
    ]
  },
  {
    id: "hyundai-santa-fe-calligraphy-2025",
    make: "Hyundai",
    makeAr: "هيونداي",
    model: "Santa Fe Calligraphy Full Option",
    year: 2025,
    priceUSD: 68000,
    fuelType: "هايبرد",
    transmission: "أوتوماتيك",
    mileage: "0 كم (وكالة)",
    engineCapacity: "1.6L Turbo Hybrid",
    horsepower: 232,
    exteriorColor: "رمادي المات الصخري (Earthy Brass)",
    interiorColor: "جلد نابا أوف وايت وجوزي",
    statusCondition: "وكالة (زيرو)",
    registrationRegion: "مسجلة دمشق",
    featured: false,
    description: "هيونداي سانتافي 2025 الشكل الجديد كلياً أعلى فئة كاليغرافي زيرو وكالة. تصميم عصري فاخر واقتصاد عالي بالوقود بفضل المحرك الهجين.",
    keyFeatures: [
      "شاشات منحنية مزدوجة Panoramic Curved Display",
      "شاحن لاسلكي مزدوج للهواتف الذكية",
      "نظام ركن السيارة الذكي بالريموت",
      "نظام الصوت Bose Premium Sound System",
      "باب خلفي كهربائي ذكي بفتح واسع",
      "إضاءة H-Light المميزة للجيل الجديد"
    ],
    images: [
      {
        id: "front",
        label: "التصميم الجديد المستقبلي",
        url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "side",
        label: "الجانب الصندوقي العصرى",
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "rear",
        label: "الخلفية المميزة",
        url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "interior",
        label: "الفخامة والاتساع الداخلي",
        url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=85&w=1200"
      }
    ]
  },
  {
    id: "mercedes-s580-maybach-2024",
    make: "Mercedes",
    makeAr: "مرسيدس بنز",
    model: "Maybach S 580 4MATIC",
    year: 2024,
    priceUSD: 285000,
    fuelType: "بنزين",
    transmission: "أوتوماتيك",
    mileage: "0 كم (وكالة)",
    engineCapacity: "4.0L V8 Bi-Turbo EQ Boost",
    horsepower: 496,
    exteriorColor: "لونين أونيكس أسود وموجاڤي فضي",
    interiorColor: "جلد مايباخ الأبيض الكريستالي الناصع",
    statusCondition: "وكالة (زيرو)",
    registrationRegion: "مسجلة دمشق",
    featured: true,
    description: "قمة الفخامة الألمانية مرسيدس مايباخ S580 موديل 2024 لونين زيرو وكالة. تجربة الفخامة والراحة المطلقة لرجال الأعمال والنخبة.",
    keyFeatures: [
      "طلاء مرسيدس مايباخ المزدوج اليدوي Two-Tone",
      "مقاعد ماساج الأحجار الساخنة وتدليك الساقين",
      "نظام التوجيه المتقدم للعجلات الخلفية 10 درجات",
      "شاشات MBUX خلفية مع جهاز لوحي تحكم",
      "نظام Burmester High-End 4D Surround Sound",
      "أبواب خلفية كهربائية تفتح بلمسة واحدة"
    ],
    images: [
      {
        id: "front",
        label: "مقدمة مايباخ الأيقونية",
        url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "side",
        label: "الجانب الطويل المذهل",
        url: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "rear",
        label: "المظهر الملكي الخلفي",
        url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "interior",
        label: "قصر مايباخ الداخلي",
        url: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=85&w=1200"
      },
      {
        id: "rims",
        label: "جنوط مايباخ الكلاسيكية المصقولة",
        url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=85&w=1200"
      }
    ]
  }
];

export const ALL_MAKES = [
  { value: "all", label: "جميع الماركات" },
  { value: "Mercedes", label: "مرسيدس بنز (Mercedes-Benz)" },
  { value: "BMW", label: "بي إم دبليو (BMW)" },
  { value: "Range Rover", label: "رينج روفر (Range Rover)" },
  { value: "Porsche", label: "بورش (Porsche)" },
  { value: "Lexus", label: "لكزس (Lexus)" },
  { value: "Audi", label: "أودي (Audi)" },
  { value: "Hyundai", label: "هيونداي (Hyundai)" },
];

export const ALL_YEARS = [
  { value: "all", label: "جميع السنوات" },
  { value: "2026", label: "2026" },
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
];

export const ALL_FUEL_TYPES = [
  { value: "all", label: "جميع المحركات" },
  { value: "بنزين", label: "بنزين (Petrol)" },
  { value: "هايبرد", label: "هايبرد (Hybrid)" },
  { value: "كهرباء", label: "كهرباء (Electric)" },
];

export const PHONE_NUMBER = "963911223344"; // Syrian format / Apex Cars contact
