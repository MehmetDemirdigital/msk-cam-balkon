// ============================================================
// MSK Cam Balkon ve Alüminyum — Hizmetler Verileri
// Tüm hizmet içerikleri buradan yönetilir.
// ============================================================

export interface ServiceFeature {
  text: string;
}

export interface Service {
  id: string;                 // URL-friendly slug
  title: string;              // Hizmet başlığı
  image: string;              // Görsel yolu (public/gallery/ altında)
  features: ServiceFeature[]; // Teknik detaylar listesi
  order: number;
}

export const services: Service[] = [
  {
    id: "diyotin-pervole",
    title: "Diyotin Pervole",
    image: "/gallery/service-01.jpg",
    features: [
      { text: "Temperli şeffaf, füme ve renkli cam alternatifleri" },
      { text: "Isıcamlı profiller ile maksimum enerji ve ses yalıtımı" },
      { text: "Eşikli ve eşiksiz paslanmaz sürme ray mekanizmaları" }
    ],
    order: 1,
  },
  {
    id: "aluminyum-dograma-sistemleri",
    title: "Alüminyum Doğrama Sistemleri",
    image: "/gallery/service-02.jpg",
    features: [
      { text: "Ofis bölme sistemleri" },
      { text: "Korkuluk uygulamaları" },
      { text: "Küpeşte sistemleri" },
      { text: "Modern alüminyum çözümleri" },
      { text: "Diğer sistemlerle tam entegrasyon" }
    ],
    order: 2,
  },
  {
    id: "sineklik-sistemleri",
    title: "Sineklik Sistemleri",
    image: "/gallery/service-03.jpg",
    features: [
      { text: "Yırtılmaya ve güneşe dayanıklı fiberglas tül yapısı" },
      { text: "Yatay ve dikey plise (pileli) sistemler" },
      { text: "Alüminyum doğrama ve sürme serilerle tam uyumlu özel kasa tasarımları" },
      { text: "Kolay sökülüp temizlenebilen menteşeli ve stor alternatifler" }
    ],
    order: 3,
  },
  {
    id: "dusakabin-sistemleri",
    title: "Duşakabin Sistemleri",
    image: "/gallery/service-04.jpg",
    features: [
      { text: "Temperli güvenli cam ve ekonomik mika seçenekleri" },
      { text: "Kolay temizlenebilir yüzeyler" },
      { text: "Su lekesi ve kireç oluşumunu azaltan yapı" },
      { text: "Siyah, krom ve altın sarısı paslanmaz profil kaplamaları" }
    ],
    order: 4,
  },
];

export const getAllServices = (): Service[] =>
  [...services].sort((a, b) => a.order - b.order);
