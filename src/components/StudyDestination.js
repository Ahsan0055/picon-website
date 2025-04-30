'use client'
import React from 'react'
import Image from 'next/image'

const destinations = [
  { name: 'Australia', image: '/images/australia.jpg' },
  { name: 'Canada', image: '/images/canada.jpg' },
  { name: 'USA', image: '/images/usa.jpg' },
  { name: 'France', image: '/images/france.jpg' },
  { name: 'NewZealand', image: '/images/newze.jpg' },
  { name: 'Malaysia', image: '/images/malaysia.jpg' },
  { name: 'Ireland', image: '/images/ireland.jpg' },
  { name: 'Dubai', image: '/images/dubai.jpg' },
]

export default function DestinationsSection() {
  return (
    <section className="bg-gray-800 py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Study Destinations</h2>
        <div className="w-24 h-1 bg-red-500 mx-auto mt-2 rounded-full" />
      </div>

      {/* Destination Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {destinations.map((dest, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg w-full h-[350px]"
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-blue-600/80 text-white text-center py-3 font-semibold text-lg">
              {dest.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
