"use client";

import { motion } from "framer-motion";

export default function CardSixSecond() {
  return (
    <section className="bg-white px-6 md:px-20 py-20 text-blue-900 space-y-12">
      {/* Intro Paragraph */}
      <motion.p 
        className="text-lg leading-8"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Studying in Australia can be very tedious. There’s so much to manage all at once, from choosing the right course, securing scholarships, preparing documents, and meeting visa requirements. No doubt, it’s easy to make costly mistakes. The good news? With proper guidance, you can sidestep these common pitfalls.
        <p className="mt-4 text-lg leading-8">
        In this guide, we’ll break down the top five mistakes students make when applying to Australian universities. We’ve also included practical solutions, actionable tips, and answers to the most frequently asked questions to give you a clearer path to success. Let’s begin with the common mistakes.
        </p>
      </motion.p>

      {/* What is a CAS Letter */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">1. Skimming Through Entry Requirements</h2>
        <p className="text-lg leading-8">
        One of the biggest mistakes students make is assuming they meet the entry requirements without carefully reviewing the details. Australian universities have strict eligibility criteria that vary depending on the institution, course, and field of study.
        </p>
        <p className="mt-4 text-lg leading-8">
        For example, a computer science program might require prior knowledge of advanced mathematics.
        </p>
      </motion.div>

      {/* Why is it Important */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">2. Not Applying for Scholarships and Financial Aid</h2>
        <p className="text-lg leading-8 mb-4">
        Scholarships and financial aid are free money waiting for those who want to access it. How rich can you be that you wouldn’t mind leaving some money on the table? You should apply to all available scholarships or grants. You can’t tell how much you’ll save; the money will come in handy elsewhere.
        </p>
        
      </motion.div>

      {/* Key Information */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">3. Submit an Incomplete Application</h2>
        <p className="text-lg leading-8 mb-4">
        Imagine losing an offer because your English proficiency certificate expired or your financial documents weren’t uploaded correctly. It can be very painful to miss out on your dream university because you forgot to submit some documents or something flimsy. 
        </p>
      
      </motion.div>

      

      {/* CAS Letter Duration */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">4. Neglecting Visa and Health Requirements</h2>
        <p className="text-lg leading-8">
        Despite the rigorous nature of visa application, it is by far one of the most important steps you can’t afford to miss on your journey. Similarly, international students are mandated to apply and get an Overseas Health Cover during their stay. Lacking one or all of these requirements nullifies the entire application process.
        </p>
      </motion.div>

      {/* After CAS */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">5. Pick a university without research</h2>
        <p className="mb-4 text-lg">The silliest thing you can do to yourself is to pick a university without any research. Not all the universities offer all the programs you’re looking to study. So, endeavor to do proper research to avoid wasting your efforts in the long run.</p>
        <p className="mb-4 text-lg">The piece has so far highlighted mistakes international students make when applying to Australian universities. However, these are only the tip of the iceberg; there are many more mistakes international students can make in their application journey. Seek professional help and remain organized during this process to avoid silly errors. Dot your I’s and cross your T’s.</p>
      </motion.div>

     

      {/* Conclusion */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg leading-8">
        No human is indeed above mistakes. But you will be above some mistakes when you are careful and detailed with your planning process. Be organized and calm, and seek help when necessary. When you avoid the mistakes mentioned above, like submitting incomplete applications and rushing your course/university selection, You are well on your way to a fulfilling and rewarding study experience in Australia.
        </p>
      </motion.div>
    </section>
  );
}
