// ============================================================
// MSK Cam Balkon ve Alüminyum — Galeri Verileri
// Tamamlanan gerçek işlere ait fotoğraflar buradan yönetilir.
// ============================================================

export interface GalleryImage {
  id: string;
  src: string; // Görsel yolu (public/ altında)
  alt: string; // Erişilebilirlik metni
  order: number; // Sıralama önceliği
}

export const galleryImages: GalleryImage[] = [
  {
    id: "img-01",
    src: "/gallery/is-01.jpg",
    alt: "MSK Cam Balkon Uygulaması",
    order: 1,
  },
  {
    id: "img-02",
    src: "/gallery/is-02.jpg",
    alt: "MSK Cam Balkon Uygulaması",
    order: 2,
  },
  {
    id: "img-03",
    src: "/gallery/is-03.jpg",
    alt: "MSK Cam Balkon Uygulaması",
    order: 3,
  },
  {
    id: "img-04",
    src: "/gallery/is-04.jpg",
    alt: "MSK Cam Balkon Uygulaması",
    order: 4,
  },
];

export const getAllImages = (): GalleryImage[] =>
  [...galleryImages].sort((a, b) => a.order - b.order);
