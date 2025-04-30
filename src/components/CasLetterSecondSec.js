"use client";

import { motion } from "framer-motion";

export default function CasLetterSecondSec() {
  return (
    <section className="bg-white px-6 md:px-20 py-20 text-blue-900 space-y-12">
      {/* Intro Paragraph */}
      <motion.p 
        className="text-lg leading-8"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        International students who plan to study in the United Kingdom often hear about a CAS Letter. This document is key to getting a UK Student Visa. This article will explain what a CAS letter is, why it matters, how to get one, and how it fits into your UK study plans. After reading, you’ll know all about this must-have document.
      </motion.p>

      {/* What is a CAS Letter */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">What is a CAS Letter?</h2>
        <p className="text-lg leading-8">
          A Confirmation of Acceptance for Studies (CAS) is an electronic document that UK universities and educational institutions give to international students who want to study in the UK. The CAS has a unique 14-digit reference number and key information about the student and their study program. This document plays a crucial role when applying for a UK Student Visa, as it shows that a licensed institution has accepted the student into a course.
        </p>
        <p className="mt-4 text-lg leading-8">
          The CAS connects the student, the school, and UK Visas and Immigration (UKVI). It provides all the info needed to process a visa application, which helps make the immigration process smoother.
        </p>
      </motion.div>

      {/* Why is it Important */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Why is a CAS Letter Important?</h2>
        <p className="text-lg leading-8 mb-4">
          It’s a necessary document for visa processing and ensures that the UK government knows you’ve been accepted into a genuine course.
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Proof of Acceptance:</strong> The CAS shows that a real UK school has accepted you.</li>
          <li><strong>Visa Requirement:</strong> You need this document to apply for your Student Visa.</li>
          <li><strong>Ensures Accuracy:</strong> The CAS letter makes sure your personal info and course details are right, which helps avoid mistakes in your visa process.</li>
          <li><strong>Streamlines Communication:</strong> It connects your visa application to your university, making things run more smoothly.</li>
        </ul>
      </motion.div>

      {/* Key Information */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Key Information Included in a CAS Letter</h2>
        <p className="text-lg leading-8 mb-4">
          A CAS letter has essential information that the UKVI needs to evaluate your visa application. It includes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Student’s Personal Information: </strong> Full name, date of birth, and nationality.</li>
          <li><strong>CAS Reference Number:</strong> A unique 14-digit number the university issues.</li>
          <li><strong>Course Details: </strong> Title, study level, duration, and start date.</li>
          <li><strong>Tuition Fees: </strong> The total amount and details of any payments you’ve already made.</li>
          <li><strong>English Language Proficiency:</strong> Confirmation of your English language qualifications, if applicable.</li>
          <li><strong>Sponsorship Details: </strong> Information about the institution that sponsors your studies.</li>
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

        <h3 className="font-semibold mb-2 text-2xl">Step 4: Hold Tight for Your CAS</h3>
        <p className="mb-4 text-lg">After the school checks your papers and sees you’ve paid your deposit, they’ll send you a CAS online. This might take between one and four weeks, depending on the school.</p>
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
        <h2 className="text-4xl font-bold mb-4">What Happens After You Get a CAS?</h2>
        <p className="mb-4 text-lg">Once you receive your CAS, here's what typically happens:</p>
        <ul className=" list-disc list-inside space-y-2 text-lg">
          <li><strong>Get Your Money Stuff Ready: </strong> Get Your Money Stuff Ready: </li>
          <li><strong>Fill Out the Visa Form Online: </strong>Put your CAS number in the form on the UKVI website.</li>
          <li><strong>Pay the Health Fee: </strong> You need to pay this to use the UK’s health care while you’re there.</li>
          <li><strong>Set Up a Biometric Appointment:</strong> Go to a Visa Application Centre to give your biometrics..</li>
          <li><strong>Hang Tight for the Decision: </strong>If you get the green light, you’ll get a sticker on your passport and a letter.</li>
        </ul>
      </motion.div>

      {/* Things That Can Go Wrong */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Things That Can Go Wrong?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Wrong Personal Info: </strong> Make sure your name, birth date, and passport details on the CAS are correct.</li>
          <li><strong>Late Tuition Payment: </strong> Pay the needed deposit on time to avoid hold-ups in getting your CAS.</li>
          <li><strong>Missing Deadlines: </strong> Keep in mind your CAS stays valid for six months, but you can use it three months before your course begins.</li>
          <li><strong>Not Enough Financial Proof: </strong>Check that your bank statements meet what UKVI asks for.</li>
        </ul>
      </motion.div>

      {/* Conclusion */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg leading-8">
          A CAS letter plays a key role when you want to study in the UK. It confirms that a UK school has accepted you and helps your visa application go smoothly. If you know how the CAS process works and avoid common errors, you can handle this step with confidence. If you plan to study in the UK, start early, meet all the requirements, and check your CAS details twice to get your spot at the school you want.
        </p>
      </motion.div>
    </section>
  );
}
