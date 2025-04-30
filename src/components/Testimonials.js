'use client'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function TestimonialsSection() {
  const testimonials = [
    { name: "Ahsan Raza", text: "I had an amazing experience with their counseling services. They guided me at every step and made the entire process smooth and stress-free. Highly recommend!" },
    { name: "Tayyab Ali", text: "Their team was incredibly helpful in document preparation and visa assistance. Their expert advice made a real difference." },
    { name: "Manara Hafeez", text: "Thanks to their expert advice, I got admission into my dream university. Everything was handled perfectly!" },
    { name: "Sara Ahmed", text: "Professional and friendly service. Helped me select the right course and university easily." },
    { name: "Usman Tariq", text: "Supported me with admission, scholarship guidance, and post-arrival support. Very helpful team!" },
    { name: "Fariha Khan", text: "Amazing service! Their mock interviews boosted my confidence for visa approval." },
    { name: "Bilal Nasir", text: "They treated every student personally and helped me achieve my dream of studying abroad." },
    { name: "Areeba Shaikh", text: "Visa interview coaching and course selection guidance were spot on. Very thankful!" },
    { name: "Waqas Zaman", text: "Post-departure services like accommodation and job search guidance made my journey easy." },
    { name: "Mehwish Iqbal", text: "From counseling to visa support, their commitment and care were outstanding!" },
  ]

  return (
    <section className="relative py-24 px-4 text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bk1.jpg"
          alt="Background"
          fill
          className="object-cover blur-[2px] opacity-80"
        />
      </div>

      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">Testimonials</h2>
        <div className="w-20 h-1 bg-red-500 mx-auto rounded" />
      </div>

      {/* Moving Testimonials */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 25, ease: 'linear' }} // Slightly faster now
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-8 rounded-lg text-left min-w-[280px] max-w-[320px] min-h-[280px] flex-shrink-0 flex flex-col justify-between"
            >
              <div>
                <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
                <p className="text-gray-700 mb-6 text-sm">{testimonial.text}</p>
              </div>
              <h4 className="font-bold text-gray-800 text-base mt-auto">— {testimonial.name}</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
