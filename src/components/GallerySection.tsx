'use client'

import { useState, useEffect, useCallback } from 'react'
import { getAllImages } from '@/data/gallery'

export default function GallerySection() {
  const images = getAllImages()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Navigate images
  const showPrev = useCallback(() => {
    if (activeIndex === null) return
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : (prevIndex as number) - 1
    )
  }, [activeIndex, images.length])

  const showNext = useCallback(() => {
    if (activeIndex === null) return
    setActiveIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : (prevIndex as number) + 1
    )
  }, [activeIndex, images.length])

  const closeLightbox = useCallback(() => {
    setActiveIndex(null)
  }, [])

  // Keyboard navigation listeners
  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden' // Lock background scroll

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = '' // Restore scroll
    }
  }, [activeIndex, showPrev, showNext, closeLightbox])

  return (
    <section
      id="projeler"
      className="section-padding"
      style={{
        background: 'radial-gradient(circle at bottom, #121212 0%, #050505 100%)',
        position: 'relative',
      }}
    >
      {/* Premium transition divider from whyus */}
      <div className="divider-gold-line" />

      <div className="container-site">
        {/* Section Header */}
        <div className="section-header animate-fade-up">
          <span className="text-label-gold">Galeri</span>
          <h2 className="text-h1">İşlerimiz</h2>
          <div className="divider-gold-center" />
          <p>
            Tamamladığımız projelerden bazı görüntüler.
          </p>
        </div>

        {/* Image Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', /* Reduced minimum from 270px to 250px to fit 320px screens perfectly */
            gap: '24px',
          }}
        >
          {images.map((img, idx) => (
            <div
              key={img.id}
              className="animate-fade-in"
              onClick={() => setActiveIndex(idx)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                border: '1px solid rgba(201, 168, 76, 0.12)',
                aspectRatio: '4/5',
                background: '#0C0C0C',
                transition: 'transform var(--duration-fast) var(--ease-premium), border-color var(--duration-fast) var(--ease-premium), box-shadow var(--duration-fast) var(--ease-premium)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget
                target.style.transform = 'translateY(-6px)'
                target.style.borderColor = 'rgba(201, 168, 76, 0.35)'
                target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(201, 168, 76, 0.08)'
                const imgEl = target.querySelector('img')
                if (imgEl) imgEl.style.transform = 'scale(1.04)'
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget
                target.style.transform = 'none'
                target.style.borderColor = 'rgba(201, 168, 76, 0.12)'
                target.style.boxShadow = 'none'
                const imgEl = target.querySelector('img')
                if (imgEl) imgEl.style.transform = 'none'
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform var(--duration-slow) var(--ease-premium)',
                }}
              />
              
              {/* Subtle visual helper on hover */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.2)',
                  opacity: 0,
                  transition: 'opacity var(--duration-fast) ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0' }}
              >
                <div
                  style={{
                    padding: '12px',
                    borderRadius: '50%',
                    background: 'rgba(5, 5, 5, 0.8)',
                    border: '1px solid var(--color-gold)',
                    color: 'var(--color-gold)',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Custom Lightbox Modal ── */}
      {activeIndex !== null && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5, 5, 5, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            animation: 'fadeIn 0.25s var(--ease-premium) forwards',
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            aria-label="Kapat"
            className="lightbox-btn lightbox-btn-close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {/* Left Arrow Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            aria-label="Önceki Görsel"
            className="lightbox-btn lightbox-btn-prev"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* Large Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '85%',
              maxHeight: '75vh',
              position: 'relative',
              cursor: 'default',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'scaleUp 0.3s var(--ease-premium) forwards',
              filter: 'drop-shadow(0 20px 50px rgba(0, 0, 0, 0.8))',
            }}
          >
            <img
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '6px',
                border: '1px solid rgba(201, 168, 76, 0.25)',
              }}
            />
          </div>

          {/* Right Arrow Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Sonraki Görsel"
            className="lightbox-btn lightbox-btn-next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      )}

      {/* Embedded keyframe animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.96); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  )
}
