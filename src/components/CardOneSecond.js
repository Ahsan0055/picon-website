"use client";

import { motion } from "framer-motion";

export default function CardOneSecond() {
  return (
    <section className="bg-white px-6 md:px-20 py-20 text-blue-900 space-y-12">
      {/* Intro Paragraph */}
      <motion.p 
        className="text-lg leading-8"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Australia’s Temporary Graduate Visa (Subclass 485) gives international students who just graduated from Australian schools a great chance. This visa lets you stay in Australia for a while to get work experience in your field, grow your career, or even look into ways to become a permanent resident. If you want to make the most of your Australian education, this guide will show you how to apply for the Subclass 485 visa, what you need to qualify, what papers you need, and the main steps to take.
      </motion.p>

      {/* What is a CAS Letter */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">What is the Temporary Graduate Visa (Subclass 485)?</h2>
        <p className="text-lg leading-8">
        The Temporary Graduate Visa (Subclass 485) aims to help international graduates who have finished at least two years of study in Australia. It gives you a chance to live, work, or study in the country for a limited time. The visa has two streams:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Graduate Work Stream: </strong>  This suits graduates with skills that match a job on Australia’s Skilled Occupation List.</li>
          <li><strong>Post-Study Work Stream: </strong>This fits graduates with higher education degrees (like bachelor’s, master’s, or doctoral degrees) from Australian schools, no matter what they studied.</li>
          
        </ul>
      </motion.div>

      {/* Why is it Important */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Eligibility Criteria for the Subclass 485 Visa</h2>
        <p className="text-lg leading-8 mb-4">
        To apply for the Temporary Graduate Visa, you need to meet these requirements:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Age Requirement:</strong>  You must be younger than 50 years old when you apply.</li>
          <li><strong>English Proficiency: </strong> You must show your English skills. You can do this by giving test scores from IELTS, TOEFL, PTE Academic, or Cambridge Advanced English (CAE).</li>
          <li><strong>Australian Study Requirement: </strong> You should have studied in Australia for at least two years. This study must be on a valid student visa.</li>
          <li><strong>Qualification: </strong> An Australian school must give you your degree. This degree needs to meet the rules for your specific stream.</li>
          <li><strong>Health and Character Checks:  </strong>You have to pass Australia’s health and character tests. These include doctor exams and police checks.</li>
          <li><strong>Timing of Application:  </strong> You need to apply for the visa within six months after you finish your studies in Australia.</li>
        </ul>
      </motion.div>

      {/* Key Information */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Documents You Need for the Subclass 485 Visa</h2>
        <p className="text-lg leading-8 mb-4">
        Before you apply, get these documents ready to make sure your application goes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Passport: </strong> A passport that’s valid and has enough time left to cover your visa period.</li>
          <li><strong>English Language Test Results:</strong>  Proof that you can speak English well enough.</li>
          <li><strong>Academic Documents:  </strong>Your school certificates, grade reports, and a letter saying you finished your studies.</li>
          <li><strong>Health Insurance:</strong>  Papers showing you have Overseas Visitor Health Cover (OVHC).</li>
          <li><strong>AFP Check: </strong> A certificate from the Australian Federal Police (AFP) saying you’re okay.</li>
          <li><strong>Proof of Residency in Australia:</strong>  Things like bills or rent agreements that show where you live. </li>
          <li><strong>Skills Assessment (for Grte Work Stream): </strong> Proof that what you can do matches a job on the Skilled Occupation List. </li>
        </ul>
      </motion.div>

      {/* How to Obtain */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-6">How to Apply for the Temporary Graduate Visa</h2>
        <h3 className="font-semibold mb-2 text-2xl">Step 1: Check If You’re Eligible</h3>
        <p className="mb-4 text-lg">Before you begin, ensure you confirm if you tick all the boxes for the Subclass 485 visa. Check if you’re in the Graduate Work Stream or the Post-Study Work Stream.</p>

        <h3 className="font-semibold mb-2 text-2xl">Step 2: Get Your Papers Together</h3>
        <p className="mb-4 text-lg">Collect all the documents you need, making sure they match what’s asked for.</p>

        <h3 className="font-semibold mb-2 text-2xl">Step 3: Get an AFP Check</h3>
        <p className="mb-4 text-lg">Ask for an Australian Federal Police (AFP) clearance certificate. Make sure it’s less than 12 months old to be valid for your visa application.</p>

       

        <h3 className="font-semibold mb-2 text-2xl">Step 4: Get Health Insurance</h3>
        <p className="mb-4 text-lg">Buy Overseas Visitor Health Cover (OVHC) to meet the health insurance requirement for the Subclass 485 visa.</p>

        <h3 className="font-semibold mb-2 text-2xl">Step 5: Hold Tight for the Result</h3>
        <p className="mb-4 text-lg">After you send in your application, you’ll need to wait for the Department of Home Affairs to look it over. They’ll send you an email to let you know the outcome.</p>

        <h3 className="font-semibold mb-2 text-2xl">Step 6: Fill Out the Application Online</h3>
        <p className="mb-4 text-lg">Go to the Australian Department of Home Affairs website and fill out the visa application form online. Put in all the info they ask for and upload your supporting documents.</p>

        <h3 className="font-semibold mb-2 text-2xl">Step 7: Pay for Your Visa Application</h3>
        <p className="mb-4 text-lg">The cost to apply for a visa varies from time to time based on the stream and how many people are applying. Pay up on time.</p>

        <h3 className="font-semibold mb-2 text-2xl">Step 8: Give Your Biometrics</h3>
        <p className="mb-4 text-lg">You might need to provide biometrics, like your fingerprints and a photo, as part of applying.</p>
      </motion.div>

      {/* CAS Letter Duration */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">How Long Can You Use a CAS Letter?</h2>
        <p className="text-lg leading-8">
          A CAS letter stays valid for six months from when it’s issued. But you can use it to apply for your visa three months before your course starts. Let’s say your course kicks off on October 1st. In this case, you can start your Student Visa application with the CAS from July 1st onwards.
        </p>
      </motion.div>

      {/* After CAS */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Processing Time for the Subclass 485 Visa</h2>
        <p className="mb-4 text-lg">The time to process applications differs based on the stream:</p>
        <ul className=" list-disc list-inside space-y-2 text-lg">
          <li><strong>Graduate Work Stream:  </strong> It takes about 6-9 months.</li>
          <li><strong>Post-Study Work Stream:</strong> It takes about 5-7 months.</li>
          <p className="mb-4 text-lg">To speed things up, make sure all your papers are correct and complete.</p>
        </ul>
      </motion.div>

      {/* Things That Can Go Wrong */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Tips to Apply Successfully</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Apply Soon:  </strong> Send in your application within six months after you finish your studies.</li>
          <li><strong>Check Your Papers:</strong>  Make sure all documents are correct and current. </li>
          <li><strong>Ask for Help: </strong> Talk to migration agents or experts to get advice. </li>
          <li><strong>Stay on Top of Things: </strong>Keep an eye on due dates and what you need to do.</li>
        </ul>
      </motion.div>

      {/* Conclusion */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg leading-8">
        The Temporary Graduate Visa (Subclass 485) gives international students a great chance to build up experience in Australia after they finish studying. This guide shows you how to apply it step-by-step. Begin your adventure now and unlock chances in one of the world’s most diverse and lively countries.
        </p>
      </motion.div>
    </section>
  );
}
