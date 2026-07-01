import React from 'react'

export function MskLogo({ size = 120, showText = true }: { size?: number; showText?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
    >
      {/* Outer thick gold ring */}
      <circle cx="100" cy="100" r="92" stroke="url(#logoGoldGradient)" strokeWidth="3" />
      {/* Inner thin gold ring */}
      <circle cx="100" cy="100" r="84" stroke="url(#logoGoldGradient)" strokeWidth="1" />
      
      {/* Central 'M' geometric architectural mark (like glass balconies) */}
      <path
        d="M56 70 L84 44 L100 60 L116 44 L144 70 L144 116 L100 136 L56 116 Z"
        fill="url(#darkAnthracite)"
        stroke="url(#logoGoldGradient)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      
      {/* Panel shading details to look like glass panels */}
      <path d="M84 44 L84 108 L56 88 Z" fill="#1C1C1C" />
      <path d="M116 44 L116 108 L144 88 Z" fill="#1C1C1C" />
      <path d="M100 60 L100 136 L84 108 L116 108 Z" fill="#2C2C2C" />

      {/* Reflections */}
      <line x1="66" y1="60" x2="76" y2="80" stroke="url(#logoGoldGradient)" strokeWidth="1" opacity="0.4" />
      <line x1="134" y1="60" x2="124" y2="80" stroke="url(#logoGoldGradient)" strokeWidth="1" opacity="0.4" />
      
      {/* Text inside the badge at the bottom (straight text) */}
      {showText && (
        <>
          {/* MSK text */}
          <text
            x="100"
            y="138"
            textAnchor="middle"
            fill="url(#logoGoldGradient)"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '32px',
              letterSpacing: '0.04em',
            }}
          >
            MSK
          </text>
          
          {/* Divider line in badge */}
          <line x1="50" y1="148" x2="150" y2="148" stroke="url(#logoGoldGradient)" strokeWidth="1.5" />
          
          {/* Subtitle text */}
          <text
            x="100"
            y="160"
            textAnchor="middle"
            fill="#F0EEE8"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '8.5px',
              letterSpacing: '0.14em',
            }}
          >
            CAM BALKON VE ALÜMİNYUM
          </text>
        </>
      )}
      
      <defs>
        <linearGradient id="logoGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7A6020" />
          <stop offset="30%" stopColor="#C9A84C" />
          <stop offset="50%" stopColor="#F5E6A3" />
          <stop offset="70%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#7A6020" />
        </linearGradient>
        <linearGradient id="darkAnthracite" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E1E1E" />
          <stop offset="100%" stopColor="#0F0F0F" />
        </linearGradient>
      </defs>
    </svg>
  )
}
