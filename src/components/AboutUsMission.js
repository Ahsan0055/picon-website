'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function MissionSection() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side Image with Animation */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-[550px] h-[400px] relative">
            <Image
              src="/images/goalb.png"
              alt="Our Mission"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side Text with Animation */}
        <motion.div
          className="md:w-1/2 w-full text-left"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            To empower Pakistani students with seamless access to quality
            international education through expert study abroad consultation,
            personalized support, and comprehensive guidance services that
            transform their global academic aspirations into reality. At
            PICON, we don’t just process university applications, we nurture
            ambitions, guide futures, and help to build global careers. Let us
            be your trusted study abroad consultant in Pakistan for achieving
            your international education goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
