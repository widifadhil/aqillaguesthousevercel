import type { LucideIcon } from "lucide-react";
import { AirVent, Bath, Car, Coffee, CookingPot, MonitorSmartphone, Shield, Sofa, UtensilsCrossed, Wifi } from "lucide-react";

export type SanjaiProduct = {
  slug: string;
  name: string;
  image: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: string;
  accent: string;
  detail: string;
  weight: string;
  spiceLevel: string;
  bestFor: string;
  highlights: string[];
  gradient: string;
};

export type RoomType = {
  name: string;
  price: string;
  description: string;
  amenities: Array<{
    icon: LucideIcon;
    label: string;
  }>;
};

export type BookingMode = {
  name: string;
  description: string;
  cta: string;
};

export type GuestHouseUnit = {
  slug: string;
  name: string;
  summary: string;
  roomCount: string;
  bathCount: string;
  parking: string;
  coverImage: string;
  gallery: Array<{
    label: string;
    image: string;
  }>;
  amenities: Array<{
    icon: LucideIcon;
    label: string;
  }>;
};

export const sanjaiProducts: SanjaiProduct[] = [
  {
    slug: "sanjai-lidi",
    name: "Sanjai Lidi",
    image: "/products/sanjai-lidi.png",
    tagline: "Kerenyahan Tipis yang 'Nagih' dari Payakumbuh.",
    description:
      "Versi kuning dari Sanjai Lidi Aqilla dengan tekstur tipis, rapuh, dan renyah yang bikin nagih.",
    longDescription:
      "Sanjai Lidi versi kuning Aqilla menghadirkan tekstur tipis dan rapuh yang sangat renyah saat digigit. Dipotong setipis lidi dan diolah dengan teknik khusus, varian ini cocok untuk dinikmati santai saat bekerja, sebagai teman minum teh, atau menjadi taburan lezat di atas mi rebus.",
    price: "Mulai Rp28.000",
    accent: "Versi kuning",
    detail: "Tipis, rapuh, dan super renyah",
    weight: "200g - 500g",
    spiceLevel: "Gurih ringan",
    bestFor: "Camilan kerja, teman santai, dan taburan mi rebus",
    highlights: [
      "Versi kuning dengan tampilan khas yang menarik",
      "Dipotong setipis lidi untuk hasil ekstra renyah",
      "Pas untuk camilan harian maupun oleh-oleh"
    ],
    gradient: "from-ember-700 via-ember-500 to-saffron-400"
  },
  {
    slug: "ganepo",
    name: "Ganepo (Keripik Dadu Kuning)",
    image: "/products/ganepo.jpg",
    tagline: "Simbol Kelezatan Tradisional, Gurih Hingga ke Hati.",
    description:
      "Kenikmatan singkong pilihan yang dipotong dadu dan dibumbui rempah-rempah alami khas Minang dengan rasa gurih kunyit autentik.",
    longDescription:
      "Kenikmatan singkong pilihan yang dipotong dadu (kotak) dan dibumbui dengan rempah-rempah alami khas Minang. Ganepo Aqilla memiliki rasa gurih kunyit yang autentik dan aroma yang khas. Keripik ini lebih padat namun tetap renyah di setiap gigitan. Camilan klasik yang tak lekang oleh waktu dan selalu menjadi favorit keluarga.",
    price: "Mulai Rp27.000",
    accent: "Tradisional favorit",
    detail: "Gurih kunyit khas Minang",
    weight: "200g - 500g",
    spiceLevel: "Gurih rempah",
    bestFor: "Camilan keluarga dan penggemar rasa tradisional",
    highlights: [
      "Potongan dadu dengan tekstur padat renyah",
      "Aroma kunyit dan rempah Minang yang khas",
      "Camilan klasik yang selalu dicari"
    ],
    gradient: "from-saffron-500 via-ember-500 to-ember-700"
  },
  {
    slug: "sanjai-tawar-original",
    name: "Sanjai Tawar (Original)",
    image: "/products/sanjai-tawar-original.jpg",
    tagline: "Kemurnian Rasa Singkong Pilihan dari Payakumbuh.",
    description:
      "Versi kuning original yang menonjolkan rasa manis alami dan kerenyahan singkong tanpa tambahan bumbu.",
    longDescription:
      "Dibuat khusus untuk para pencinta rasa murni. Sanjai Tawar Original versi kuning Aqilla menggunakan singkong pilihan yang dipotong tipis lalu digoreng hingga renyah tanpa tambahan bumbu berlebih. Varian ini menonjolkan rasa alami singkong yang bersih, ringan, dan nyaman dinikmati kapan saja.",
    price: "Mulai Rp25.000",
    accent: "Original kuning",
    detail: "Rasa murni tanpa tambahan bumbu",
    weight: "200g - 500g",
    spiceLevel: "Tidak pedas",
    bestFor: "Pencinta rasa original dan camilan ringan sehari-hari",
    highlights: [
      "Menggunakan singkong mentega pilihan",
      "Tanpa tambahan bumbu dan bebas micin",
      "Menonjolkan rasa manis alami singkong"
    ],
    gradient: "from-ember-700 via-ember-500 to-saffron-400"
  },
  {
    slug: "sanjai-jagung",
    name: "Sanjai Jagung",
    image: "/products/sanjai-jagung.png",
    tagline: "Perpaduan Gurih dan Manis Jagung yang Memikat.",
    description:
      "Versi goreng matang dengan perpaduan kerenyahan singkong dan rasa jagung yang gurih manis.",
    longDescription:
      "Sanjai Jagung versi goreng matang Aqilla menghadirkan kerenyahan singkong dengan cita rasa jagung yang gurih, manis, dan beraroma. Varian ini cocok untuk pencinta camilan yang ingin rasa lebih matang dan mantap, dengan karakter jagung yang terasa jelas di setiap gigitan.",
    price: "Mulai Rp29.000",
    accent: "Goreng matang",
    detail: "Favorit untuk camilan nonton",
    weight: "200g - 500g",
    spiceLevel: "Tidak pedas",
    bestFor: "Anak-anak, keluarga, dan teman nonton film",
    highlights: [
      "Bumbu jagung bakar manis-gurih",
      "Aroma smoky yang unik",
      "Disukai anak-anak maupun dewasa"
    ],
    gradient: "from-saffron-500 via-ember-500 to-ember-700"
  },
  {
    slug: "sanjai-bumbu-udang-premium",
    name: "Sanjai Bumbu Udang (Premium)",
    image: "/products/sanjai-bumbu-udang-premium.png",
    tagline: "Kerenyahan Mewah dengan Gurih Alami Udang Segar.",
    description:
      "Varian istimewa dengan singkong tipis yang dipadukan pasta udang segar pilihan dan rempah premium untuk rasa gurih seafood yang mendalam.",
    longDescription:
      "Varian istimewa yang wajib dicoba! Sanjai Bumbu Udang Aqilla diolah dengan secret recipe yang memadukan singkong tipis dengan pasta udang segar pilihan yang dibumbui rempah-rempah premium. Menghasilkan rasa gurih seafood yang mendalam, tidak amis, dan bikin ketagihan. Premium quality untuk pengalaman nyemil yang luar biasa.",
    price: "Mulai Rp32.000",
    accent: "Premium seafood",
    detail: "Gurih udang yang mewah",
    weight: "200g - 500g",
    spiceLevel: "Gurih kaya rasa",
    bestFor: "Pecinta camilan premium dan hadiah spesial",
    highlights: [
      "Menggunakan pasta udang segar pilihan",
      "Rasa seafood gurih tanpa amis",
      "Secret recipe dengan rempah premium"
    ],
    gradient: "from-ember-700 via-ember-500 to-saffron-400"
  },
  {
    slug: "karak-kaliang-angka-8",
    name: "Karak Kaliang (Angka 8)",
    image: "/products/karak-kaliang.jpg",
    tagline: "Camilan Klasik Renyah dengan Bentuk Ikonik.",
    description:
      "Karak Kaliang khas Minang dengan bentuk angka 8 yang unik, renyah, gurih, dan cocok untuk teman santai.",
    longDescription:
      "Karak Kaliang (Angka 8) Aqilla menghadirkan camilan tradisional khas Minang dengan bentuk ikonik dan tekstur renyah yang khas. Cocok disajikan sebagai teman minum teh, suguhan tamu, atau pelengkap oleh-oleh khas Payakumbuh.",
    price: "Mulai Rp26.000",
    accent: "Bentuk ikonik",
    detail: "Renyah gurih khas Minang",
    weight: "200g - 500g",
    spiceLevel: "Gurih",
    bestFor: "Suguhan tamu, camilan keluarga, dan oleh-oleh tradisional",
    highlights: [
      "Bentuk angka 8 yang mudah dikenali",
      "Tekstur renyah dan gurih",
      "Camilan tradisional yang cocok untuk segala usia"
    ],
    gradient: "from-charcoal-900 via-tangerine-700 to-saffron-500"
  },
  {
    slug: "pisang-sale-versi-sisir",
    name: "Pisang Sale (Versi sisir)",
    image: "/products/pisang-sale.jpg",
    tagline: "Manis Alami Pisang dalam Sajian Tradisional.",
    description:
      "Pisang Sale Aqilla versi sisir dengan rasa manis alami, tekstur khas, dan nuansa tradisional yang hangat.",
    longDescription:
      "Pisang Sale versi sisir Aqilla cocok untuk pencinta camilan manis tradisional. Dibuat dari pisang pilihan dengan karakter rasa alami yang lembut dan manis, varian ini nyaman dinikmati sebagai teman kopi, teh, atau oleh-oleh khas daerah.",
    price: "Mulai Rp27.000",
    accent: "Manis tradisional",
    detail: "Versi sisir yang khas",
    weight: "200g - 500g",
    spiceLevel: "Manis alami",
    bestFor: "Teman teh, kopi, dan oleh-oleh keluarga",
    highlights: [
      "Rasa manis alami dari pisang pilihan",
      "Versi sisir dengan tampilan tradisional",
      "Cocok untuk camilan santai dan suguhan"
    ],
    gradient: "from-saffron-600 via-gold-400 to-tangerine-500"
  }
];

export const bookingModes: BookingMode[] = [
  {
    name: "Booking Per Kamar",
    description: "Cocok untuk tamu individu, pasangan, perjalanan dinas, atau keluarga kecil yang butuh kamar saja.",
    cta: "Tanya Kamar Tersedia"
  },
  {
    name: "Booking 1 Rumah",
    description: "Ideal untuk keluarga besar, rombongan, acara kumpul, atau tamu yang ingin privasi penuh.",
    cta: "Tanya Sewa 1 Rumah"
  }
];

export const guestHouseUnits: GuestHouseUnit[] = [
  {
    slug: "aqilla-guest-house-1",
    name: "Aqilla Guest House 1",
    summary: "Pilihan paling lengkap untuk keluarga besar atau rombongan yang ingin fasilitas premium dalam satu rumah.",
    roomCount: "3 kamar tidur",
    bathCount: "4 kamar mandi",
    parking: "Parkir 2 mobil",
    coverImage: "/guest-house/rumah-1.jpg",
    gallery: [
      { label: "Tampak depan rumah", image: "/guest-house/rumah-1.jpg" },
      { label: "Galeri rumah 1", image: "/guest-house/rumah-1/IMG_9079.jpg" },
      { label: "Galeri rumah 2", image: "/guest-house/rumah-1/IMG_9080.JPG.jpeg" },
      { label: "Galeri rumah 3", image: "/guest-house/rumah-1/IMG_9086.jpg" },
      { label: "Galeri rumah 4", image: "/guest-house/rumah-1/IMG_9096.jpg" },
      { label: "Galeri rumah 5", image: "/guest-house/rumah-1/IMG_9097.jpg" },
      { label: "Galeri rumah 6", image: "/guest-house/rumah-1/IMG_9101.jpg" },
      { label: "Galeri rumah 7", image: "/guest-house/rumah-1/IMG_9105.jpg" },
      { label: "Galeri rumah 8", image: "/guest-house/rumah-1/IMG_9106.jpg" },
      { label: "Galeri rumah 9", image: "/guest-house/rumah-1/IMG_9110.jpg" },
      { label: "Galeri rumah 10", image: "/guest-house/rumah-1/IMG_9112.jpg" },
      { label: "Galeri rumah 11", image: "/guest-house/rumah-1/IMG_9119.jpg" },
      { label: "Galeri rumah 12", image: "/guest-house/rumah-1/IMG_9127.jpg" },
      { label: "Galeri rumah 13", image: "/guest-house/rumah-1/IMG_9130.jpg" }
    ],
    amenities: [
      { icon: Bath, label: "Kolam renang" },
      { icon: MonitorSmartphone, label: "Smart TV (YouTube + Netflix)" },
      { icon: CookingPot, label: "Dapur" },
      { icon: Wifi, label: "WiFi" },
      { icon: UtensilsCrossed, label: "Ruang makan + peralatan masak & makan" },
      { icon: Sofa, label: "Ruang tamu + balkon" },
      { icon: Car, label: "Parkir untuk 2 mobil" },
      { icon: Shield, label: "Keamanan 24 jam" },
      { icon: AirVent, label: "AC" },
      { icon: Coffee, label: "Sarapan optional" }
    ]
  },
  {
    slug: "aqilla-guest-house-2",
    name: "Aqilla Guest House 2",
    summary: "Lebih compact namun tetap nyaman untuk keluarga kecil, tamu luar kota, atau sewa rumah penuh.",
    roomCount: "2 kamar tidur",
    bathCount: "2 kamar mandi",
    parking: "Parkir 2 mobil",
    coverImage: "/guest-house/rumah-2.jpg",
    gallery: [
      { label: "Tampak depan rumah", image: "/guest-house/rumah-2.jpg" },
      { label: "Galeri rumah 1", image: "/guest-house/rumah-2/IMG_9064.jpg" },
      { label: "Galeri rumah 2", image: "/guest-house/rumah-2/IMG_9069.jpg" },
      { label: "Galeri rumah 3", image: "/guest-house/rumah-2/IMG_9072.jpg" }
    ],
    amenities: [
      { icon: CookingPot, label: "Dapur + peralatan masak & makan" },
      { icon: UtensilsCrossed, label: "Ruang makan" },
      { icon: Sofa, label: "Ruang tamu" },
      { icon: MonitorSmartphone, label: "Smart TV (YouTube + Netflix)" },
      { icon: Wifi, label: "WiFi" },
      { icon: Car, label: "Parkiran muat 2 mobil" },
      { icon: AirVent, label: "AC" },
      { icon: Shield, label: "Keamanan 24 jam" },
      { icon: Coffee, label: "Sarapan optional" }
    ]
  }
];

export function getSanjaiProduct(slug: string) {
  return sanjaiProducts.find((product) => product.slug === slug);
}

export function getGuestHouseUnit(slug: string) {
  return guestHouseUnits.find((unit) => unit.slug === slug);
}
