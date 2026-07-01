import { company } from '@/data/company'
import { MskLogo } from './MskLogo'

export default function HeroSection() {
  return (
    <section
      id="anasayfa"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* ── Katman 1: Cam balkon sürme sistemi görseli ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/gallery/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      {/* ── Katman 2: Ağır koyu overlay — okunabilirlik garantisi ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(
            to bottom,
            rgba(5, 5, 5, 0.82) 0%,
            rgba(5, 5, 5, 0.70) 40%,
            rgba(5, 5, 5, 0.75) 70%,
            rgba(5, 5, 5, 0.95) 100%
          )`,
          zIndex: 1,
        }}
      />

      {/* ── Katman 3: İçerik ── */}
      <div
        className="container-site"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: '90px',
        }}
      >
        {/* Logo Rozeti */}
        <div
          className="animate-fade-up"
          style={{
            marginBottom: '36px',
            filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.6))',
          }}
        >
          <div
            style={{
              padding: '14px',
              borderRadius: '50%',
              background: 'rgba(12, 12, 12, 0.85)',
              border: '2px solid rgba(201, 168, 76, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MskLogo size={120} showText={true} />
          </div>
        </div>

        {/* Marka Adı — Ana Başlık */}
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: 'clamp(28px, 5vw, 56px)',
            lineHeight: 1.15,
            letterSpacing: '0.02em',
            color: '#FFFFFF',
            maxWidth: '800px',
            marginBottom: '20px',
          }}
        >
          {company.name}
        </h1>

        {/* Altın dekoratif çizgi */}
        <div
          className="animate-fade-up"
          style={{
            width: '56px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--color-gold), transparent)',
            marginBottom: '20px',
          }}
        />

        {/* Kısa Açıklama */}
        <p
          className="animate-fade-up"
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: 'clamp(15px, 1.8vw, 20px)',
            lineHeight: 1.7,
            color: '#C8C8C2',
            maxWidth: '540px',
            marginBottom: '44px',
          }}
        >
          Modern yaşam alanları için estetik ve dayanıklı cam balkon çözümleri.
        </p>

        {/* Tek Buton: İşlerimizi İncele */}
        <div className="animate-fade-up">
          <a
            href="#projeler"
            className="btn-secondary"
            style={{
              padding: '16px 44px',
              fontSize: '12px',
            }}
          >
            <span>İşlerimizi İncele</span>
          </a>
        </div>
      </div>

      {/* ── Scroll İndikatörü ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
          }}
        >
          Keşfet
        </span>
        <div
          style={{
            width: '1px',
            height: '28px',
            background: 'linear-gradient(to bottom, var(--color-gold), transparent)',
          }}
        />
      </div>
    </section>
  )
}
