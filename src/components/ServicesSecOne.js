'use client'

import {
  FaUniversity,
  FaPlane,
  FaUserGraduate,
  FaGlobeAmericas,
  FaBookOpen,
  FaHandshake,
} from 'react-icons/fa'

export default function ServicesSecOne() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-300 to-blue-900 py-16 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Section with Icons Bar */}
        <div className="flex-1 text-left text-white">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            From Application to Arrival,
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-red-200 mt-3">
            We've got you covered!
          </h2>

          {/* Centered Icon Bar below headings */}
          <div className="bg-red-500 mt-14 py-6 px-4 rounded-4xl shadow-lg flex flex-wrap items-center justify-center gap-8 text-white text-6xl">
            <FaUniversity title="University" />
            <FaPlane title="Travel" />
            <FaUserGraduate title="Student" />
            <FaGlobeAmericas title="Global" />
            <FaBookOpen title="Education" />
            <FaHandshake title="Support" />
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <img
            src="/images/holewd.png"
            alt="Consulting Visual"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
