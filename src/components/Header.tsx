'use client'

import React from 'react'
import Link from 'next/link'
import { MskLogo } from './MskLogo'

const NAV_ITEMS = [
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#projeler', label: 'İşlerimiz' },
  { href: '#neden-msk', label: 'Neden MSK' },
  { href: '#iletisim', label: 'İletişim' },
]

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="nav-link">
      {label}
    </Link>
  )
}

export default function Header() {
  return (
    <header
      className="navbar"
      style={{
        display: 'flex',
        alignItems: 'center',
        transition: 'height var(--duration-base) var(--ease-premium)',
      }}
    >
      <div className="container-site header-container">

        {/* ── Sol / Üst: Logo + MSK ── */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexShrink: 0,
          }}
        >
          <MskLogo size={48} showText={false} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '24px',
              letterSpacing: '0.04em',
              color: '#FFFFFF',
              lineHeight: 1,
            }}>
              MSK
            </span>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '8px',
              letterSpacing: '0.16em',
              color: 'var(--color-text-secondary)',
              textTransform: 'uppercase',
              marginTop: '4px',
            }}>
              Cam Balkon ve Alüminyum
            </span>
          </div>
        </Link>

        {/* ── Sağ / Alt: Tek satır menü öğeleri ── */}
        <nav className="header-nav" style={{ flexShrink: 0 }}>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

      </div>
    </header>
  )
}
