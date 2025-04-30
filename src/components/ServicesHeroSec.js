"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Career Counselling",
    text: "Our expert counselors help you discover your passions and align them with the right academic and career paths. We provide personalized advice to ensure you choose a career that matches your interests, strengths, and long-term goals.",
    image: "/images/servia.jpg",
  },
  {
    title: "Interview Preparation",
    text: "We offer comprehensive interview coaching to help you confidently navigate university and visa interviews. Our preparation includes mock interviews, feedback sessions, and tips on how to present yourself effectively.",
    image: "/images/servib.jpg",
  },
  {
    title: "Pre-Departure Guidelines",
    text: "PICON provides detailed pre-departure briefings to ensure you are fully prepared for your journey. From travel arrangements to understanding local customs, we cover everything you need to know before leaving for your study destination.",
    image: "/images/servic.jpg",
  },
  {
    title: "Accommodation Arrangements",
    text: "We assist in finding safe and affordable accommodation options close to your university. Whether you prefer student dormitories, shared apartments, or private housing, we help you secure a comfortable place to stay.",
    image: "/images/servid.jpg",
  },
  {
    title: "Course and University Selection",
    text: "Our counselors guide you through the process of selecting the right course and university that aligns with your academic and career goals. We help you make informed decisions based on your preferences, budget, and future aspirations.",
    image: "/images/servie.jpg",
  },
  {
    title: "Admission and Visa Application",
    text: "PICON simplifies the complex process of applying to universities and obtaining a student visa. We provide step-by-step assistance with your applications, ensuring all requirements are met for a successful outcome.",
    image: "/images/servif.jpg",
  },
  {
    title: "OSHC Arrangements",
    text: "We help you arrange Overseas Student Health Cover (OSHC) to meet the mandatory health insurance requirements for international students. Our service ensures you are covered throughout your stay, giving you peace of mind while studying abroad.",
    image: "/images/servig.jpg",
  },
];

export default function ServicesHeroSec() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="text-center w-full max-w-screen-xl mx-auto mb-16 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-6 whitespace-nowrap overflow-hidden text-ellipsis">
          Transforming Ambitions into Achievements
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          At our consultancy, we believe every student has a unique journey.
          Thats why we offer personalized guidance tailored to your individual
          goals. From career counseling to post-arrival support, we ensure your
          transition is smooth, successful, and fulfilling.
        </p>
      </div>

      <div className="space-y-20">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                className="md:w-1/2 w-full"
                initial={{ x: isEven ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </motion.div>

              {/* Text */}
              <motion.div
                className="md:w-1/2 w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-4xl font-semibold text-blue-700 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {service.text}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
