import { company } from '@/data/company'

export default function ContactSection() {
  return (
    <section
      id="iletisim"
      className="section-padding"
      style={{
        background: 'linear-gradient(to bottom, #050505 0%, #0d0d0d 100%)',
        position: 'relative',
      }}
    >
      {/* Premium transition divider from gallery */}
      <div className="divider-gold-line" />

      <div className="container-site">
        {/* Section Header */}
        <div className="section-header animate-fade-up">
          <span className="text-label-gold">İletişim</span>
          <h2 className="text-h1">İrtibata Geçin</h2>
          <div className="divider-gold-center" />
          <p>
            Detaylı bilgi almak, projelerinizi görüşmek veya adresimizi ziyaret
            etmek için iletişim kanallarımızdan bize ulaşabilirsiniz.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div
          className="animate-fade-up"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '20px',
            marginBottom: '48px',
          }}
        >
          {/* Phones */}
          {company.phones.map((phone, idx) => (
            <a key={phone.number} href={`tel:${phone.number}`} style={{ display: 'block' }}>
              <div className="contact-info-card" style={{ cursor: 'pointer' }}>
                <div className="contact-icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .97h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.9a16 16 0 006.29 6.29l1.29-1.29a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '10px',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text-muted)',
                      marginBottom: '4px',
                    }}
                  >
                    {phone.label || `Telefon ${idx + 1}`}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '17px',
                      color: 'var(--color-text-primary)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {phone.display}
                  </span>
                </div>
              </div>
            </a>
          ))}

          {/* Address */}
          <div className="contact-info-card">
            <div className="contact-icon-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '10px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  marginBottom: '4px',
                }}
              >
                Adres
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                {company.address}
              </span>
            </div>
          </div>
        </div>

        {/* Google Maps embed */}
        <div
          className="animate-fade-up"
          style={{
            borderRadius: '6px',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            background: 'var(--color-surface-raised)',
          }}
        >
          <iframe
            src={company.googleMaps.embedUrl}
            title="MSK Cam Balkon Harita Konumu"
            width="100%"
            height="450"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
