'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
// import logo from '../../public/images/logo.png'

const images = [
  '/images/ausa.jpg',
  '/images/ausb.jpg',
  '/images/ausc.jpg',

]

const headings = [
  'Explore Education Opportunities in Australia and Unlock Your Global Future',
  'Build Your Future in Top Australian Universities with World-Class Faculty',
  'Experience World-Class Learning, Culture, and Lifestyle in Australia',

]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

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

      {/* Foreground Content - Show only one text */}
      <div className="relative z-10 flex items-start justify-start h-full px-6 md:px-16 pt-32">
        <h2 className="text-white text-3xl md:text-5xl font-bold max-w-4xl text-left transition-all duration-1000 leading-snug">
          {headings[currentIndex]}
        </h2>
      </div>



      {/* Logo */}
      {/* <div className="absolute bottom-4 right-4 opacity-60 z-30">
        <Image src={logo} alt="Logo" width={100} height={100} />
      </div> */}
    </div>


  )
}

