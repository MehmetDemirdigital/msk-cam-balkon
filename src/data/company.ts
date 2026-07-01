// ============================================================
// MSK Cam Balkon ve Alüminyum — Kurumsal Bilgiler
// Bu dosyadan iletişim ve konum bilgileri yönetilir.
// ============================================================

export interface PhoneNumber {
  number: string;
  display: string;
  label?: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  slogan: string;
  description: string;
  address: string;
  googleMaps: {
    embedUrl: string;
    directionsUrl: string;
  };
  phones: PhoneNumber[];
}

export const company: CompanyInfo = {
  name: "MSK Cam Balkon ve Alüminyum",
  shortName: "MSK",
  slogan: "Nitelikli Cam ve Alüminyum Sistemleri",
  description: "Modern mimari tasarımla bütünleşen, yüksek detay kalitesine sahip cam balkon ve alüminyum doğrama sistemleri uygulamaları.",
  address: "Trikotajcılar Sitesi 8. Blok, Şehitkamil / Gaziantep",
  googleMaps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.9142828751394!2d37.387934!3d37.082729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e13028c7456d%3A0xe54d310657e289bf!2sTrikotajcilar+Sitesi+Sehitkamil+Gaziantep!5e0!3m2!1str!2str!4v1719853900000!5m2!1str!2str",
    directionsUrl: "https://maps.google.com/?q=MSK+Cam+Balkon+Trikotajcilar+Sitesi+8+Blok+Sehitkamil+Gaziantep",
  },
  phones: [
    {
      number: "+905304798668",
      display: "0530 479 86 68",
      label: "Telefon 1"
    },
    {
      number: "+905511215701",
      display: "0551 121 57 01",
      label: "Telefon 2"
    }
  ]
};
