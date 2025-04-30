"use client";
import Image from "next/image";
import { useState } from "react";

export default function WhyUsaSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto relative">
        {/* Image Section */}
        <div
          className="w-full md:w-[650px] h-[500px] relative rounded-2xl overflow-hidden shadow-2xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* First Image */}
          <Image
            src="/images/usaf.jpg"
            alt="Image 1"
            fill
            className={`object-cover absolute top-0 left-0 transition-all duration-500 ${
              hovered ? "animate-slideOutLeft z-10" : "z-20"
            }`}
          />

          {/* Second Image */}
          <Image
            src="/images/usaa.jpg"
            alt="Image 2"
            fill
            className={`object-cover absolute top-0 left-0 transition-all duration-500 ${
              hovered ? "animate-slideInRight z-20" : "opacity-0 z-10"
            }`}
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:flex-1 space-y-6 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
            WHY STUDY IN USA?
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            The United States is one of the top choices for international
            students, known for its prestigious universities, diverse academic
            programs, and innovative research environment. Home to many of the
            world’s leading institutions, the U.S. offers cutting-edge
            facilities and a globally recognized education system.
            <br />
            <br />
            Students benefit from a flexible curriculum, strong academic
            support, and vibrant campus life. With generous scholarship options,
            practical training opportunities like OPT and CPT, and a
            multicultural society, the U.S. remains a prime destination for
            higher education.
            <br />
            <br />
            Whether you’re pursuing studies in technology, business, medicine,
            or the humanities, the U.S. provides a wide range of programs to
            help you achieve your academic and career goals in a dynamic,
            forward-thinking environment.
          </p>
        </div>
      </div>
    </div>
  );
}
