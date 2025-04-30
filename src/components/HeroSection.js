"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logo-remove.png";

const images = [
  "/images/australia.jpg",
  "/images/london.jpg",
  "/images/canada.jpg",
  "/images/usa.jpg",
 
];

const headings = [
  "Live in Australia – Experience world-class academics and vibrant lifestyle",
  "Dream Big in London – Learn, grow, and thrive in the UK’s heart of innovation",
  "Explore Canada – Embrace diversity and top-tier education",
  "Study in USA – Unlock your future at world-renowned universities",
  
 
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
      <div className="relative z-10 flex items-start justify-start h-full px-6 md:px-20 pt-18">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-white text-3xl md:text-5xl font-bold max-w-4xl text-left transition-all duration-1000 leading-snug">
            {headings[currentIndex % headings.length]}
          </h2>
          <p className=" text-blue-500 text-3xl font-bold md:text-xl">Need Any Help?</p>
          <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-6 py-3 rounded-full font-semibold">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute bottom-4 right-4 opacity-50 z-30">
        <Image src={logo} alt="Logo" width={200} height={200} />
      </div>
    </div>
  );
}
