import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const SITE_URL = "https://mskcambalkon.com"; // Canlıya alınca gerçek domain ile güncelleyin

export const metadata: Metadata = {
  title: "MSK Cam Balkon ve Alüminyum | Gaziantep",
  description:
    "MSK Cam Balkon ve Alüminyum olarak Gaziantep'te cam balkon, alüminyum doğrama, sineklik ve duşakabin çözümleri sunuyoruz.",
  keywords: [
    "cam balkon",
    "alüminyum doğrama",
    "sineklik",
    "duşakabin",
    "diyotin pervole",
    "cam balkon Gaziantep",
    "alüminyum doğrama Gaziantep",
    "MSK Cam Balkon",
    "Şehitkamil",
  ],
  authors: [{ name: "MSK Cam Balkon ve Alüminyum" }],
  creator: "MSK Cam Balkon ve Alüminyum",
  publisher: "MSK Cam Balkon ve Alüminyum",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "MSK Cam Balkon ve Alüminyum",
    title: "MSK Cam Balkon ve Alüminyum | Gaziantep",
    description:
      "MSK Cam Balkon ve Alüminyum olarak Gaziantep'te cam balkon, alüminyum doğrama, sineklik ve duşakabin çözümleri sunuyoruz.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MSK Cam Balkon ve Alüminyum | Gaziantep",
    description:
      "Gaziantep'te cam balkon, alüminyum doğrama, sineklik ve duşakabin çözümleri.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// LocalBusiness JSON-LD Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MSK Cam Balkon ve Alüminyum",
  description:
    "Gaziantep'te cam balkon, alüminyum doğrama, sineklik ve duşakabin sistemleri.",
  url: SITE_URL,
  telephone: ["+905304798668", "+905511215701"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Trikotajcılar Sitesi 8. Blok",
    addressLocality: "Şehitkamil",
    addressRegion: "Gaziantep",
    postalCode: "27090",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.082729,
    longitude: 37.387934,
  },
  areaServed: {
    "@type": "City",
    name: "Gaziantep",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  serviceType: [
    "Cam Balkon",
    "Diyotin Pervole",
    "Alüminyum Doğrama",
    "Sineklik Sistemleri",
    "Duşakabin Sistemleri",
  ],
  priceRange: "$$",
  "@id": SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Montserrat:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* LocalBusiness JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
