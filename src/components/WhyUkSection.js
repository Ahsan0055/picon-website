"use client";
import Image from "next/image";
import { useState } from "react";

export default function WhyAustraliaSection() {
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
            src="/images/ukc.jpg"
            alt="Image 1"
            fill
            className={`object-cover absolute top-0 left-0 transition-all duration-500 ${
              hovered ? "animate-slideOutLeft z-10" : "z-20"
            }`}
          />

          {/* Second Image */}
          <Image
            src="/images/ukf.jpg"
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
            WHY STUDY IN UK?
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            The United Kingdom is one of the top destinations for international
            students, celebrated for its prestigious universities, rich history,
            and vibrant cultural life. The UK offers globally recognized
            degrees, cutting-edge research facilities, and experienced academic
            staff.
            <br />
            <br />
            Students benefit from a strong academic tradition, innovative
            teaching methods, and comprehensive student support services. With
            excellent post-study work options, scholarship opportunities, and a
            high quality of life, the UK continues to attract learners from
            around the world.
            <br />
            <br />
            Whether you're interested in business, engineering, healthcare, or
            the arts, the UK provides a wide range of programs to help you
            achieve your academic and professional goals. Its multicultural
            environment ensures a welcoming and enriching experience both inside
            and outside the classroom.
          </p>
        </div>
      </div>
    </div>
  );
}
