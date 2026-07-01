'use client'

import { useEffect } from 'react'

/**
 * Scroll reveal animasyonlarını yöneten client bileşeni.
 * `.animate-fade-up` ve `.animate-fade-in` sınıflı elementleri
 * görünüme girdiklerinde `.in-view` sınıfı ekleyerek tetikler.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            // Tetiklendikten sonra gözlemlemeyi bırak (performans)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )

    const elements = document.querySelectorAll(
      '.animate-fade-up, .animate-fade-in'
    )
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
