'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function WhoWeAreSection() {
  const [startCount, setStartCount] = useState(false)

  // Setup scroll trigger
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.3,     // Start when 30% of section is visible
  })

  useEffect(() => {
    if (inView) {
      setStartCount(true)
    }
  }, [inView])

  // Custom animated number hook
  const animateNumber = (target, duration) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!startCount) return

      let start = 0
      const step = target / (duration / 10)

      const interval = setInterval(() => {
        start += step
        if (start >= target) {
          start = target
          clearInterval(interval)
        }
        setCount(Math.round(start))
      }, 10)

      return () => clearInterval(interval)
    }, [startCount])

    return count
  }

  // Your numbers
  const years = animateNumber(15, 2000)
  const students = animateNumber(500, 2000)
  const countries = animateNumber(20, 2000)
  const success = animateNumber(99, 2000)

  return (
    <section ref={ref} className="bg-gray-800 py-32 px-4 text-center">
      {/* Heading with Decorative Lines */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-18 h-1 bg-blue-400 mr-4 transform -rotate-12 wave-line" />
        <h2 className="text-6xl font-bold text-white">Who We Are</h2>
        <div className="w-18 h-1 bg-blue-400 ml-4 transform -rotate-12 wave-line" />
      </div>

      {/* Subheading + Paragraph */}
      <div className="max-w-3xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Above all, we believe that real change is tomorrow doesn't have to
        </h3>
        <p className="text-white text-lg">
          Picon International has a long and reputable history in the world of immigration and foreign education.
          We have been recognized as pioneers in the industry since 2016 and are well known for our professionalism and expertise which makes
          us proud of our achievement and all our valued clients who have led us here
        </p>
      </div>

      {/* Four Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div>
          <h4 className="text-4xl font-bold text-blue-600">{years}+</h4>
          <p className="mt-2 text-white">Years of Experience</p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-blue-600">{students}+</h4>
          <p className="mt-2 text-white">Students Guided</p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-blue-600">{countries}+</h4>
          <p className="mt-2 text-white">Countries Covered</p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-blue-600">{success}%</h4>
          <p className="mt-2 text-white">Success Rate</p>
        </div>
      </div>
    </section>
  )
}
