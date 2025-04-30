'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function WhyAustraliaSection() {
  const [hovered, setHovered] = useState(false)

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
            src="/images/ausmouna.jpg"
            alt="Image 1"
            fill
            className={`object-cover absolute top-0 left-0 transition-all duration-500 ${
              hovered ? 'animate-slideOutLeft z-10' : 'z-20'
            }`}
          />

          {/* Second Image */}
          <Image
            src="/images/ausmounb.jpg"
            alt="Image 2"
            fill
            className={`object-cover absolute top-0 left-0 transition-all duration-500 ${
              hovered ? 'animate-slideInRight z-20' : 'opacity-0 z-10'
            }`}
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:flex-1 space-y-6 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
            WHY STUDY IN AUSTRALIA?
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Australia is one of the most popular destinations for international students, known for its world-class education, diverse culture, and beautiful landscapes. The country offers globally recognized universities with modern facilities and highly qualified faculty.
            <br /><br />
            Students benefit from a practical and research-driven curriculum, excellent support services, and a safe environment. With strong post-study work opportunities, scholarships, and a high standard of living, Australia attracts thousands of students every year.
            <br /><br />
            Whether you're interested in business, engineering, health sciences, or the arts, Australia provides numerous options to pursue your dreams. The multicultural atmosphere makes it easier to adapt and thrive both academically and socially.
          </p>
        </div>
      </div>
    </div>
  )
}
