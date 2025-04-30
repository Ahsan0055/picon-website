"use client";

import { motion } from "framer-motion";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

export default function CasLetterSecondSec() {
  return (
    <section className="bg-white px-6 md:px-20 py-20 text-blue-900 space-y-12">
      {/* Intro */}
      <motion.p className="text-lg leading-8" {...fadeInUp()}>
        International students who plan to study in the United Kingdom often hear about a CAS Letter. This document is key to getting a UK Student Visa. This article will explain what a CAS letter is, why it matters, how to get one, and how it fits into your UK study plans. After reading, you will know all about this must-have document.
      </motion.p>

      {/* What is a CAS Letter */}
      <motion.div {...fadeInUp(0.2)}>
        <h2 className="text-4xl font-bold mb-4">What is a CAS Letter?</h2>
        <p className="text-lg leading-8 mb-4">
          A Confirmation of Acceptance for Studies (CAS) is an electronic document that UK universities and educational institutions give to international students. It includes a unique 14-digit reference number and key details about the student and their course.
        </p>
        <p className="text-lg leading-8">
          The CAS connects the student, the school, and UK Visas and Immigration (UKVI). It simplifies the visa process by providing essential information to UKVI.
        </p>
      </motion.div>

      {/* Why is it Important */}
      <motion.div {...fadeInUp(0.3)}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Why is a CAS Letter Important?</h2>
        <p className="text-lg leading-8 mb-4">
          It is a vital document for visa processing and proves you have been accepted into a genuine UK course.
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Proof of Acceptance:</strong> Confirms your enrollment at a recognized institution.</li>
          <li><strong>Visa Requirement:</strong> Mandatory for Student Visa applications.</li>
          <li><strong>Ensures Accuracy:</strong> Helps avoid mistakes in your visa by verifying your personal and course info.</li>
          <li><strong>Streamlines Communication:</strong> Connects your university and UKVI directly.</li>
        </ul>
      </motion.div>

      {/* Key Information */}
      <motion.div {...fadeInUp(0.4)}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Key Information Included in a CAS Letter</h2>
        <p className="text-lg leading-8 mb-4">
          The CAS includes details like:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Student Info:</strong> Full name, date of birth, nationality.</li>
          <li><strong>CAS Reference Number:</strong> Unique 14-digit code.</li>
          <li><strong>Course Details:</strong> Title, level, duration, start date.</li>
          <li><strong>Tuition Fees:</strong> Total cost and any prepayments.</li>
          <li><strong>English Proficiency:</strong> Proof if required.</li>
          <li><strong>Sponsorship:</strong> University/institution information.</li>
        </ul>
      </motion.div>

      {/* How to Obtain */}
      <motion.div {...fadeInUp(0.5)}>
        <h2 className="text-4xl font-bold mt-10 mb-6">How to Obtain a CAS Letter</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Step 1: Accept Your Offer</h3>
            <p className="text-lg">You must first accept an unconditional offer from a UK institution. Conditional offers need to be fulfilled first.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Step 2: Pay the Tuition Deposit</h3>
            <p className="text-lg">Most institutions require a tuition deposit before issuing the CAS. Check deadlines carefully.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Step 3: Submit Required Documents</h3>
            <ul className="list-disc list-inside text-lg space-y-1">
              <li>Valid passport</li>
              <li>Academic records</li>
              <li>English test results (IELTS, TOEFL, etc.)</li>
              <li>Proof of finances</li>
              <li>Previous visa (if any)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Step 4: Wait for the CAS</h3>
            <p className="text-lg">Once your documents are verified and the deposit is paid, the CAS will be issued—usually within 1 to 4 weeks.</p>
          </div>
        </div>
      </motion.div>

      {/* Validity Duration */}
      <motion.div {...fadeInUp(0.6)}>
        <h2 className="text-4xl font-bold mb-4">How Long Can You Use a CAS Letter?</h2>
        <p className="text-lg leading-8">
          A CAS is valid for six months from issue date. You can use it to apply for a visa within three months before your course starts.
        </p>
      </motion.div>

      {/* After Getting CAS */}
      <motion.div {...fadeInUp(0.7)}>
        <h2 className="text-4xl font-bold mb-4">What Happens After You Get a CAS?</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Get Your Money Ready:</strong> Prepare financial documents.</li>
          <li><strong>Fill Out the Visa Form:</strong> Use your CAS number during online application.</li>
          <li><strong>Pay the IHS Fee:</strong> For NHS coverage in the UK.</li>
          <li><strong>Biometric Appointment:</strong> Submit fingerprints and photo at VAC.</li>
          <li><strong>Wait for the Decision:</strong> If approved, you’ll get a visa vignette and confirmation letter.</li>
        </ul>
      </motion.div>

      {/* Issues to Avoid */}
      <motion.div {...fadeInUp(0.8)}>
        <h2 className="text-4xl font-bold mb-4">Common Mistakes to Avoid</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Incorrect Personal Info:</strong> Double-check your CAS for accuracy.</li>
          <li><strong>Late Tuition Payment:</strong> Can delay CAS issuance.</li>
          <li><strong>Missed Deadlines:</strong> Apply for your visa on time.</li>
          <li><strong>Insufficient Financial Proof:</strong> Ensure bank statements meet UKVI standards.</li>
        </ul>
      </motion.div>

      {/* Conclusion */}
      <motion.div {...fadeInUp(0.9)}>
        <h2 className="text-4xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg leading-8">
          The CAS letter is vital for studying in the UK. It confirms your place at a university and helps with visa processing. Start early, fulfill all requirements, and verify your CAS details for a smoother journey.
        </p>
      </motion.div>
    </section>
  );
}
