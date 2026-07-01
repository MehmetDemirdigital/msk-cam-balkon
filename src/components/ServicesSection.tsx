import { getAllServices } from '@/data/services'

export default function ServicesSection() {
  const services = getAllServices()

  return (
    <section
      id="hizmetler"
      className="section-padding"
      style={{
        background: 'radial-gradient(circle at top, #121212 0%, #050505 100%)',
        position: 'relative',
      }}
    >
      {/* Premium transition divider from hero */}
      <div className="divider-gold-line" />
      
      <div className="container-site">
        {/* Section Header */}
        <div className="section-header animate-fade-up">
          <span className="text-label-gold">Uygulama Alanları</span>
          <h2 className="text-h1" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800 }}>
            Hizmetlerimiz
          </h2>
          <div className="divider-gold-center" style={{ marginBlock: '16px' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-secondary)' }}>
            Farklı mimari yapılara özel tasarlanmış, yüksek kaliteli cam balkon ve doğrama çözümleri.
          </p>
        </div>

        {/* Services Premium Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '32px',
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="card-service-premium animate-fade-up"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%', // Ensures equal heights
              }}
            >
              {/* Image Container */}
              <div className="card-service-image-container">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
                {/* Dark overlay inside image */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(12, 12, 12, 0.95) 0%, rgba(12, 12, 12, 0.2) 100%)',
                  }}
                />
              </div>

              {/* Card Content */}
              <div
                className="card-service-content"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1, // Fills space for equal card heights
                  padding: '24px',
                }}
              >
                {/* Title (Premium Serif) */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '24px',
                    color: '#FFF',
                    marginBottom: '20px',
                    letterSpacing: '0.01em',
                  }}
                >
                  {service.title}
                </h3>

                {/* Technical highlights */}
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    listStyle: 'none',
                    borderTop: '1px solid var(--color-border-subtle)',
                    paddingTop: '20px',
                    marginTop: 'auto', // Pushes list to the bottom for alignment
                  }}
                >
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '10px',
                        fontSize: '13px',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: 'var(--color-gold)',
                          flexShrink: 0,
                          transform: 'translateY(-2px)',
                        }}
                      />
                      <span style={{ fontFamily: 'var(--font-body)' }}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
