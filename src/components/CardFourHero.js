"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CardFourHero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-start text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/visa4.jpg"
          alt="CAS Letter Background"
          layout="fill"
          objectFit="cover"
          className="brightness-[0.4]"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-left px-6 md:px-24 max-w-3xl">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xl md:text-2xl tracking-wider text-yellow-200 mb-4"
        >
          Scholarship Guides, Study in the UK
        </motion.h2>

        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
        >
          5 Tips to Get the GREAT Scholarship

        </motion.h1>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-200"
        >
          JANUARY 21, 2025
        </motion.p>

        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl mt-2 text-yellow-100"
        >
          Written By <span className="font-semibold">PICON</span>
        </motion.p>
      </div>
    </section>
  );
}
