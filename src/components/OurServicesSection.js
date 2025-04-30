'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaUserGraduate, FaFileAlt, FaUniversity, FaStethoscope, FaPassport, FaComments, FaLanguage, FaPlaneDeparture, FaMoneyBillWave } from 'react-icons/fa'

export default function OurServicesSection() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    }

    const services = [
        {
            icon: <FaUserGraduate size={40} className="text-blue-600 mb-4" />,
            title: 'Career Counseling',
            description: 'Career counseling is essential for every student and immigrant who is unsure what career to choose.',
            fullDescription: 'Career counseling helps match qualifications with the right career path, ensuring a successful journey.'
        },
        {
            icon: <FaFileAlt size={40} className="text-blue-600 mb-4" />,
            title: 'Documents Assessment',
            description: 'The Assessment Document captures all aspects of an assessment performed on a program.',
            fullDescription: 'It ensures your credentials and paperwork meet the required standards for institutions or immigration.'
        },
        {
            icon: <FaUniversity size={40} className="text-blue-600 mb-4" />,
            title: 'Admission Guidance',
            description: 'PIC provides expert counseling guidance to students to achieve all career goals.',
            fullDescription: 'We help students select the best courses and universities matching their ambitions and profiles.'
        },
        {
            icon: <FaStethoscope size={40} className="text-blue-600 mb-4" />,
            title: 'Medical Requirements',
            description: 'Medical examination includes history review, physical check, chest X-ray, and blood tests.',
            fullDescription: 'We guide students to complete medical tests and fulfill health standards for visa or admission.'
        },
        {
            icon: <FaPassport size={40} className="text-blue-600 mb-4" />,
            title: 'Visa Assistance',
            description: 'Start visa application process after receiving enrollment confirmation.',
            fullDescription: 'We assist with documentation, appointments, and smooth visa filing.'
        },
        {
            icon: <FaComments size={40} className="text-blue-600 mb-4" />,
            title: 'Visa Interview Preparation',
            description: 'Visa interview is a crucial part of a student’s visa application.',
            fullDescription: 'Mock interviews and real tips to crack the visa interview confidently.'
        },
        {
            icon: <FaLanguage size={40} className="text-blue-600 mb-4" />,
            title: 'Language Test Preparation',
            description: 'Meet language entry criteria for university or immigration.',
            fullDescription: 'We prepare students for IELTS, TOEFL, PTE, or other language tests.'
        },
        {
            icon: <FaPlaneDeparture size={40} className="text-blue-600 mb-4" />,
            title: 'Post-Departure Support',
            description: 'Moving away from familiar environments is difficult for anyone.',
            fullDescription: 'After arrival, we help with accommodation, local orientation, and settling in.'
        },
        {
            icon: <FaMoneyBillWave size={40} className="text-blue-600 mb-4" />,
            title: 'Scholarship & Financial Aid',
            description: 'Guidance on financial assistance through scholarships.',
            fullDescription: 'Find scholarships, loans, and grants to finance your education abroad.'
        },
    ]

    return (
        <section className="bg-gray-50 py-20 px-6">
            {/* Section Heading */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Services</h2>
                <div className="w-20 h-1 bg-red-500 mx-auto mb-4 rounded-full" />
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        layout
                        transition={{ layout: { duration: 0.5, type: "spring" } }}
                        className={`bg-white p-8 rounded-xl flex flex-col items-center text-center shadow-md overflow-hidden ${
                            expandedIndex === index ? 'bg-blue-50 shadow-2xl' : ''
                        }`}
                        style={{ minHeight: '350px' }}
                    >
                        {/* Icon */}
                        <div className="transform transition-transform duration-300">
                            {service.icon}
                        </div>

                        {/* Title and short description */}
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>

                        {/* Expandable section */}
                        {expandedIndex === index && (
                            <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full mt-4 p-4 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-inner text-sm"
                            >
                                {service.fullDescription}
                            </motion.div>
                        )}

                        {/* Read more button */}
                        <button
                            onClick={() => handleToggle(index)}
                            className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
                        >
                            {expandedIndex === index ? 'SHOW LESS' : 'READ MORE'}
                            <motion.div
                                animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaChevronDown />
                            </motion.div>
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
