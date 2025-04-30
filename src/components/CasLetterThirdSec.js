"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // 👈 added Image import

const cards = [
  {
    img: "/images/visa1.jpg",
    title: "How to Apply for Australia's Temporary Graduate Visa (Subclass 485)",
    tag: "Study in UKAustralian Visa Guide",
    date: "by PICON on January 28, 2025",
    link: "/blog/card_one",
  },
  {
    img: "/images/visa2.jpg",
    title: "Genuine Student (GS) Requirements for Australian Student Visas",
    tag: "Australian Visa Guide, Study in Australia",
    date: "by PICON on January 28, 2025",
    link: "/blog/card_two",
  },
  {
    img: "/images/visa3.jpg",
    title: "Introduction to the UK’s Russell Group of Universities",
    tag: "Study in UK",
    date: "by PICON on January 28, 2025",
    link: "/blog/card_three",
  },
  {
    img: "/images/visa4.jpg",
    title: "5 Tips to Get the GREAT Scholarship",
    tag: "Scholarship Guides, Study in the UK",
    date: "by PICON on January 28, 2025",
    link: "/blog/card_four",
  },
  {
    img: "/images/visa5.jpg",
    title: "Introduction to Australia’s Go8 Universities",
    tag: "Study in Australia",
    date: "by PICON on January 28, 2025",
    link: "/blog/card_five",
  },
  {
    img: "/images/visa6.jpg",
    title: "Top 5 Mistakes Students Make When Applying to Australian Universities",
    tag: "Study Abroad Guides, Study in Australia",
    date: "by PICON on January 28, 2025",
    link: "/blog/card_six",
  },
  {
    img: "/images/visa7.jpg",
    title: "Australia Skilled Occupation List (SOL)",
    tag: "Australian Visa Guide",
    date: "by PICON on January 28, 2025",
    link: "/blog/card_seven",
  },
  {
    img: "/images/visa8.jpg",
    title: "How to Apply for a UK Post-Study Work Visa (PSW)",
    tag: "Study Abroad Guides, Study in the UK",
    date: "by PICON on January 28, 2025",
    link: "/blog/card_eight",
  },
];

export default function VisaGuidanceSection() {
  return (
    <section className="bg-white px-6 md:px-20 py-20">
      <motion.h2
        className="text-center text-5xl font-extrabold text-blue-900 mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Visa Application Guidance
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <Link key={index} href={card.link} className="block group">
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 min-h-[600px] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Image */}
              <div className="relative w-full h-80">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 3} // Preload first few images
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-6">
                <div className="bg-gray-700 text-white text-sm font-extrabold px-5 py-2 inline-block rounded">
                  {card.tag}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 leading-tight group-hover:underline">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.date}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
