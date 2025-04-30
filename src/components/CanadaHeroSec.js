'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const images = [
  '/images/cana.jpg',
  '/images/canb.jpg',
  '/images/canc.jpg',
  '/images/cand.jpg',
]

const headings = [
    'Discover World-Class Education Opportunities in Canada',
    'Shape Your Future at Top Canadian Universities with Leading Faculty',
    'Experience Academic Excellence, Multicultural Life, and Career Growth in Canada',
  ]
  
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  if (!hasMounted) return null // Skip SSR render

  return (
    <div className="relative w-full h-screen overflow-hidden pt-[128px]">
      {/* Background Slideshow */}
      <div
        className="absolute inset-0 z-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="relative flex-shrink-0 w-full h-full">
            <Image
              src={src}
              alt={`Slide ${i}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Foreground Content */}
      <div className="relative z-10 flex items-start justify-start h-full px-6 md:px-16 pt-32">
        <h2 className="text-white text-3xl md:text-5xl font-bold max-w-4xl text-left transition-all duration-1000 leading-snug">
          {headings[currentIndex % headings.length]}
        </h2>
      </div>
    </div>
  )
}
