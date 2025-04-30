'use client'

import { motion } from 'framer-motion'

export default function AboutUsGoalSec() {
  const experienceStats = [
    { label: 'ADMISSIONS', value: 98 },
    { label: 'VISA APPLICATION', value: 95 },
    { label: 'ENROLLMENT', value: 99 },
    { label: 'PROGRESSION', value: 92 },
  ]

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-gray-50">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Side - Our Goal */}
        <motion.div
          className="md:w-1/2 w-full text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Our Goal</h2>
          <p className="text-gray-700 text-lg mb-4">
            At PICON, our mission is to open global doors for students through expert guidance and personalized services. 
            We envision a world where every student has access to international opportunities and global exposure.
          </p>
          <p className="text-gray-700 text-base mb-4">
            We assist students from their first consultation to their final enrollment overseas.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Helping students choose the right academic path</li>
            <li>Ensuring successful visa processing</li>
            <li>Building strong educational foundations</li>
            <li>Encouraging personal and professional development</li>
            <li>Transforming ambitions into achievements</li>
          </ul>
        </motion.div>

        {/* Right Side - Our Experience */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-8">Our Experience</h2>

          {experienceStats.map((stat, idx) => (
            <div key={idx} className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <span className="text-lg font-semibold text-gray-800">{stat.label}</span>
                <span className="text-lg font-medium text-blue-700">{stat.value}%</span>
              </div>
              <motion.div
                className="w-full bg-blue-100 h-4 rounded"
                initial={{ width: 0 }}
                whileInView={{ width: `${stat.value}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="h-4 bg-blue-600 rounded"></div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
