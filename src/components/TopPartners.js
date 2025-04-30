"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TopPartners() {
  const logos = Array.from(
    { length: 35 },
    (_, i) => `/images/unilogo${i + 1}.png`
  );

  return (
    <div className="bg-blue-50 py-20 px-4">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-transparent via-blue-900 to-transparent animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 whitespace-nowrap">
            Top Partners In Australia
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-transparent via-blue-900 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Scrolling Slider */}
      <div className="overflow-hidden relative w-full">
        <div className="animate-scroll flex gap-10 w-max">
          {logos.concat(logos).map((logo, index) => (
           <div className="w-[240px] h-[160px] md:w-[360px] md:h-[240px] relative">
           <Image
             src={logo}
             alt={`Logo ${index + 1}`}
             fill
             className="object-contain"
           />
         </div>
         
          ))}
        </div>
      </div>
    </div>
  );
}
