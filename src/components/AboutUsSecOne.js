"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUsSecOne() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Text */}
        <div className="w-full md:w-[60%] text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            About Us
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            PICON is Established in 2016 in Lahore, and having office in lahore,
            PICON has become the prestigious, trustworthy and pioneer
            Immigration Consultants in Pakistan. Our specialized services with
            expert counseling done by our fully trained Immigration consultants
            make us outstanding among others. We achieved our success because of
            how successfully we integrate with our clients. One complaint many
            people have about consultants is that they can be disruptive.
            Employees fear outside consultants coming in and destroying the
            workflow. Our clients face no such issues. We are a dedicated
            education consultancy committed to guiding students through every
            stage of their journey abroad—from selecting the right university to
            settling in a new country.
          </p>
        </div>

        {/* Right Side - Image with animation */}
        <motion.div
          className="w-full md:w-[40%] relative"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Red lines on top-left and bottom-right */}
          <div className="absolute top-0 left-0 w-20 h-3 bg-red-600 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-20 h-3 bg-red-600 rounded-full"></div>

          <Image
            src="/images/ceo.webp"
            alt="CEO"
            width={500}
            height={600}
            className="rounded-xl shadow-xl object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
