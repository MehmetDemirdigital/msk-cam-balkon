# MSK Cam Balkon ve Alüminyum — Kurumsal Web Sitesi

Next.js 15 + TypeScript + Tailwind CSS 4 ile geliştirilmiş kurumsal web sitesi.

## Kurulum

```bash
npm install
npm run dev
```

Uygulama `http://localhost:3000` adresinde açılır.

## Proje Yapısı

```
msk-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout + metadata
│   │   ├── page.tsx           # Ana sayfa
│   │   └── globals.css        # Global stiller
│   ├── components/
│   │   ├── Header.tsx         # Navbar / başlık
│   │   ├── Footer.tsx         # Alt bilgi
│   │   ├── HeroSection.tsx    # Kahraman bölümü
│   │   ├── ServicesSection.tsx # Hizmetler
│   │   ├── GallerySection.tsx # Galeri
│   │   ├── ContactSection.tsx # İletişim
│   │   └── WhatsAppButton.tsx # WhatsApp sabit butonu
│   └── data/
│       ├── company.ts         # Şirket & iletişim bilgileri
│       ├── services.ts        # Hizmet içerikleri
│       └── gallery.ts         # Galeri görselleri
└── public/
    ├── logo/                  # Logo dosyaları
    └── gallery/               # Proje görselleri
```

## Yönetim Kılavuzu

### Telefon Numarası Eklemek
`src/data/company.ts` → `phones` dizisine yeni obje ekleyin.

### WhatsApp Açma/Kapatma
`src/data/company.ts` → `whatsapp.enabled: true/false`

### Google Maps Güncelleme
`src/data/company.ts` → `googleMaps.embedUrl` ve `directionsUrl` güncelleyin.

### Hizmet Eklemek
`src/data/services.ts` → `services` dizisine yeni obje ekleyin.

### Galeri Görseli Eklemek
1. Görseli `public/gallery/` klasörüne koyun
2. `src/data/gallery.ts` → `galleryImages` dizisine ekleyin
