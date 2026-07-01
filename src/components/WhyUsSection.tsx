export default function WhyUsSection() {
  return (
    <section
      id="neden-msk"
      className="section-padding"
      style={{
        background: 'radial-gradient(circle at center, #121212 0%, #050505 100%)',
        position: 'relative',
      }}
    >
      {/* Premium transition divider from services */}
      <div className="divider-gold-line" />

      <div className="container-site">
        {/* Section Header */}
        <div className="section-header animate-fade-up">
          <span className="text-label-gold">Neden MSK?</span>
          <h2 className="text-h1">İşçiliğin Fark Yarattığı Nokta</h2>
          <div className="divider-gold-center" />
          <p>
            Mekanlarınızı dönüştürürken kaliteden ve montaj hassasiyetimizden asla ödün vermiyoruz.
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Visual/Text Block */}
          <div className="animate-fade-up">
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'var(--color-gold)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              Felsefemiz
            </span>
            <h3
              className="text-hero"
              style={{
                marginBottom: '28px',
                color: 'var(--color-text-primary)',
                lineHeight: 1.2,
              }}
            >
              Sınırları Belirleyen
              <br />
              <span className="text-gold-shimmer" style={{ fontWeight: 400 }}>
                İnce Detaylar
              </span>
            </h3>
            <p
              style={{
                fontSize: '14.5px',
                lineHeight: 1.8,
                color: 'var(--color-text-secondary)',
                marginBottom: '20px',
              }}
            >
              MSK olarak ürettiğimiz her cam panel, evinizin mimarisiyle tam uyum sağlayacak şekilde tasarlanır.
              Amacımız sadece alan kapatmak değil; ışığı, yalıtımı ve konforu en üst düzeye çıkarmaktır.
            </p>
            <p
              style={{
                fontSize: '14.5px',
                lineHeight: 1.8,
                color: 'var(--color-text-secondary)',
              }}
            >
              Kullandığımız tüm ray, tekerlek ve kilit mekanizmaları en zorlu hava koşullarında dahi uzun yıllar boyunca ilk günkü gibi sessiz ve sorunsuz çalışır.
            </p>
          </div>

          {/* Right Column: Values list with icons */}
          <div
            className="animate-fade-up stagger"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Value 1: Nitelikli Ham Madde */}
            <div
              className="glass-panel-hover"
              style={{
                padding: '24px',
                background: 'rgba(18, 18, 18, 0.45)',
                border: '1px solid rgba(201, 168, 76, 0.12)',
                borderRadius: '6px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(201, 168, 76, 0.08)',
                  border: '1px solid rgba(201, 168, 76, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold)',
                  flexShrink: 0,
                }}
              >
                {/* Shield / Kalkan Line Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--color-gold)',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  Nitelikli Ham Madde
                </div>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                  Zorlu hava koşullarına dayanıklı, kalın alüminyum profiller ve yüksek güvenlikli temperli camlar kullanıyoruz.
                </p>
              </div>
            </div>

            {/* Value 2: Kusursuz İşçilik */}
            <div
              className="glass-panel-hover"
              style={{
                padding: '24px',
                background: 'rgba(18, 18, 18, 0.45)',
                border: '1px solid rgba(201, 168, 76, 0.12)',
                borderRadius: '6px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(201, 168, 76, 0.08)',
                  border: '1px solid rgba(201, 168, 76, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold)',
                  flexShrink: 0,
                }}
              >
                {/* Wrench / Alet Line Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--color-gold)',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  Kusursuz İşçilik
                </div>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                  Sıfır sızdırmazlık ve sessiz çalışma için montajlarımızı milimetrik ölçümlerle, kendi uzman ekiplerimizle yapıyoruz.
                </p>
              </div>
            </div>

            {/* Value 3: Bütünsel Tasarım Entegrasyonu */}
            <div
              className="glass-panel-hover"
              style={{
                padding: '24px',
                background: 'rgba(18, 18, 18, 0.45)',
                border: '1px solid rgba(201, 168, 76, 0.12)',
                borderRadius: '6px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(201, 168, 76, 0.08)',
                  border: '1px solid rgba(201, 168, 76, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-gold)',
                  flexShrink: 0,
                }}
              >
                {/* Compass / Pergel Line Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 21a6 6 0 0 0-12 0"/>
                  <circle cx="12" cy="5" r="2"/>
                  <path d="M12 7v3M10 10l-4 8M14 10l4 8M9 14h6"/>
                </svg>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--color-gold)',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}
                >
                  Bütünsel Tasarım Entegrasyonu
                </div>
                <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                  Bina cephenizin mimarisini bozmayan, yapının değerini ve şıklığını artıran profil tasarımları uyguluyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
