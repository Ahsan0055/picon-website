"use client";

import Link from "next/link";

export default function BlogSection() {
  return (
    <section className="w-full flex justify-center py-20 bg-gray-100 min-h-[80vh]">
      <div className="w-4/5 bg-white shadow-lg rounded-lg p-6 md:p-12 flex flex-col md:flex-row gap-10">
        
        {/* Left Side Box - Clickable */}
        <Link
          href="/blog/cas-letter"
          className="w-full md:w-1/2 bg-blue-900 relative rounded-lg p-6 flex items-center justify-center min-h-[300px] overflow-hidden hover:opacity-90 transition duration-300"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/cas.png')" }}
          ></div>

          {/* Overlay Content */}
          <div className="relative bg-white/10 text-amber-100 text-3xl md:text-2xl font-extrabold p-6 rounded-lg z-10 backdrop-blur-sm">
            What is CAS Letter?
          </div>
        </Link>

        {/* Right Side Content - Clickable Title */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <Link href="/blog/cas-letter">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 hover:text-yellow-500 transition duration-300 cursor-pointer">
              What is a CAS Letter?
            </h2>
          </Link>
          <p className="text-gray-600 text-sm mb-2">
            By <span className="text-blue-900 font-extrabold">PICON</span> on January 30, 2025
          </p>
        </div>
      </div>
    </section>
  );
}
