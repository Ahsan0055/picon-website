"use client";
import Image from "next/image";
import { useState } from "react";

export default function WhyCanadaSection() {
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
            src="/images/canb.jpg"
            alt="Image 1"
            fill
            className={`object-cover absolute top-0 left-0 transition-all duration-500 ${
              hovered ? "animate-slideOutLeft z-10" : "z-20"
            }`}
          />

          {/* Second Image */}
          <Image
            src="/images/cana.jpg"
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
            WHY STUDY IN CANADA?
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Canada is one of the top choices for international students,
            renowned for its high-quality education, multicultural society, and
            breathtaking natural landscapes. Canadian universities and colleges
            are globally recognized for their academic excellence, modern
            infrastructure, and innovative research opportunities.
            <br />
            <br />
            Students benefit from a supportive learning environment, co-op and
            internship programs, and a strong focus on practical skills. Canada
            also offers generous post-study work opportunities, various
            scholarship options, and a safe, welcoming atmosphere for
            international students.
            <br />
            <br />
            Whether you're pursuing studies in business, technology, healthcare,
            or the arts, Canada provides a wide range of programs to help you
            achieve your academic and career goals. Its inclusive and diverse
            communities help students feel at home and thrive both personally
            and professionally.
          </p>
        </div>
      </div>
    </div>
  );
}
