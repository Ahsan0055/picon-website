"use client";

import { motion } from "framer-motion";

export default function CardEightSecond() {
  return (
    <section className="bg-white px-6 md:px-20 py-20 text-blue-900 space-y-12">
      {/* Intro Paragraph */}
      <motion.p 
        className="text-lg leading-8"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
      
           Are you a fresh graduate of a UK university? Are you looking to build your career in the UK after you’ve had the opportunity to study in a world-class institution?n. Considering that UK universities don’t just give certificates, they must also give you the knowledge, skills, and memories to last a lifetime. The UK is not just a country with incredible history and culture but also an economic powerhouse and a land of opportunities. And now, you’re thinking: “How can I stay and use everything I’ve learned here to build the career of my dreams?”
           <p className="mt-4 text-lg leading-8">
           Well, I’ve come bearing you some great news! And you don’t have to pay me for this information. I’ll only love you to ‘pay’ attention. This update is about the new UK Graduate Immigration Route. This is what many international students call the UK Post-Study Work Visa or Graduate Visa. It is a golden opportunity for you to begin your career in the UK. This pertains to the new UK Graduate Immigration Route, commonly known as the UK Post-Study Work Visa or Graduate Visa, and I am here to assist you in navigating the process. A point to note, this route is for only those who have studied in the UK.
        </p>
      </motion.p>

      {/* What is a CAS Letter */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">What is the UK Post Study Work Visa?</h2>
        <p className="text-lg leading-8">
        The UK Graduate Visa was introduced on 1 July 2021. It is an arrangement that allows international students to stay and work in the UK for a few years after completing their degree. This opportunity It’s not just for looking for work alone. It gives you the freedom to take any job at any skill level.
        </p>
      
      </motion.div>

      {/* Why is it Important */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Eligibility Criteria for the Graduate Visa</h2>
        <p className="text-lg leading-8 mb-4">
        There are certain criteria you must meet before you will be eligible for a graduate visa. To qualify, you must meet the following requirements.
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Current Visa Status: </strong> You must be in the UK on a student visa (Tier 4).</li>
          <li><strong>Graduation: </strong> You must have completed a degree (undergraduate, postgraduate, or doctoral) from a UK institution that the Home Office approves.</li>
          <li><strong>Course Duration: </strong> If your course is more than 12 months, you need to have studied for at least 12 months in the UK. If your course is shorter, you must have completed the entire course in the UK.</li>
        
        </ul>
      </motion.div>

      {/* Key Information */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Requirements for the UK Post-Study Work Visa</h2>
        <p className="text-lg leading-8 mb-4">
        These are the documents needed to apply for the UK graduate visa
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Passport:  </strong> In order to prove your identity, there’s a need for a passport.</li>
          <li><strong>Biometric Residence Permit (BRP): </strong> There’s no need for this if you still have one from your student visa.</li>
          <li><strong>CAS Number:  </strong> This is your Confirmation of Acceptance for Studies reference number from your university. If you dont have it, you could ask your university for it.</li>
          <li><strong>Scholarship Letter (if applicable): </strong> If a scholarship funded you, you’ll need a letter from your sponsor or scholarship provider.</li>
         
        </ul>
      </motion.div>

      {/* How to Obtain */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-6">How to Obtain a CAS Letter</h2>
        <h3 className="font-semibold mb-2 text-2xl">Step 1: Accept Your Offer</h3>
        <p className="mb-4 text-lg">To get a CAS, you need to accept an unconditional offer from a UK university or college first. If you have a conditional offer, you must meet all the requirements to turn it into an unconditional one.</p>

        <h3 className="font-semibold mb-2 text-2xl">Step 2: Pay the Tuition Deposit</h3>
        <p className="mb-4 text-lg">Most universities ask international students to pay part of their tuition fees as a deposit before they issue the CAS. Make sure you know your institution’s payment terms and deadlines.</p>

        <h3 className="font-semibold mb-2 text-2xl">Step 3: Submit Required Documents</h3>
        <ul className="list-disc list-inside space-y-1 mb-4 text-lg">
          <li>A passport that’s up to date.</li>
          <li>School records (like report cards and diplomas).</li>
          <li>Test scores show you’re good at English (such as IELTS or TOEFL).</li>
          <li>Bank statements or other papers that show you can pay for school and living expenses.</li>
          <li>Previous visa (if applicable)</li>
        </ul>

        <p className="mb-4 text-lg">Once you have everything ready, you can apply online via Gov.UK. After applying, you’ll need to prove your identity, and once that’s done, you should receive a decision within 8 weeks.</p>
        <p className="mb-4 text-lg">In addition to all these processes, you must apply for a Graduate Visa before your student visa expires. This is very important. However, here’s something that might surprise you: You don’t have to wait for your graduation ceremony or for your certificate to be issued. You can apply as soon as your university tells the Home Office that you’ve completed your course.</p>
      </motion.div>

      {/* CAS Letter Duration */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Cost of Graduate Visa</h2>
        <p className="text-lg leading-8">
        Just like the normal student visa, the graduate visa equally has its financial implications. At the same time, it may seem expensive. Please consider it an investment in your future. Here’s a breakdown:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
        <li><strong>Application Fee:  </strong> £700 per applicant for a 2-year visa (£1,948 total). The fee is different for PhD holders who can enjoy a 3- a year visa (£2,572 total).</li>
        <li><strong>Health Charge:  </strong> £624 per year, approximately amounts to £1,248 for 2 years or £1,875 for 3 years.</li>
        </ul>
      </motion.div>

     

      

      {/* Conclusion */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg leading-8">
        So, if you’ve completed your degree in the UK, don’t let this opportunity slip by. Apply for your Graduate Visa following all the required guidelines as stated, endeavor to apply on time, and take into account the cost implication of various visa types. Achieve your dreams and begin to write your success story in one of the world’s most enterprising countries.
        </p>
      </motion.div>
    </section>
  );
}
