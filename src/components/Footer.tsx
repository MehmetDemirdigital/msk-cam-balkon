import { company } from '@/data/company'
import { MskLogo } from './MskLogo'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-surface)',
        paddingBlock: '60px 40px',
        position: 'relative',
      }}
    >
      <div className="container-site">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '60px',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <MskLogo size={36} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '14px',
                    letterSpacing: '0.08em',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  MSK
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 500,
                    fontSize: '8px',
                    letterSpacing: '0.15em',
                    color: 'var(--color-gold)',
                  }}
                >
                  CAM BALKON &amp; ALÜMİNYUM
                </span>
              </div>
            </div>
            <p
              style={{
                fontSize: '13px',
                lineHeight: 1.6,
                color: 'var(--color-text-muted)',
                maxWidth: '280px',
              }}
            >
              {company.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="text-label-gold"
              style={{ fontSize: '11px', letterSpacing: '0.15em', marginBottom: '20px' }}
            >
              Hızlı Erişim
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
              {[
                { href: '#hizmetler', label: 'Hizmetler' },
                { href: '#projeler', label: 'Projeler' },
                { href: '#neden-msk', label: 'Neden MSK' },
                { href: '#iletisim', label: 'İletişim' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '13px',
                      color: 'var(--color-text-secondary)',
                    }}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <div
              className="text-label-gold"
              style={{ fontSize: '11px', letterSpacing: '0.15em', marginBottom: '20px' }}
            >
              İrtibat Bilgileri
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {company.phones.map((phone, idx) => (
                <a
                  key={phone.number}
                  href={`tel:${phone.number}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: 'var(--color-text-secondary)' }}
                  className="footer-link"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="url(#footerGold)" strokeWidth="2" style={{ flexShrink: 0 }}>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .97h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.9a16 16 0 006.29 6.29l1.29-1.29a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <span>{phone.display}</span>
                </a>
              ))}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: 'var(--color-text-muted)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="url(#footerGold)" strokeWidth="2" style={{ flexShrink: 0, marginTop: '3px' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span style={{ lineHeight: 1.5 }}>{company.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-border-subtle)',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>
            &copy; {new Date().getFullYear()} {company.name}. Tüm hakları saklıdır.
          </span>
          <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>
            Nitelikli Detaylar &bull; Kusursuz İşçilik
          </span>
        </div>
      </div>

      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="footerGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#E2C97E" />
          </linearGradient>
        </defs>
      </svg>
    </footer>
  )
}
