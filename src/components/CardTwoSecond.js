"use client";

import { motion } from "framer-motion";

export default function CardTwoSecond() {
  return (
    <section className="bg-white px-6 md:px-20 py-20 text-blue-900 space-y-12">
      {/* Intro Paragraph */}
      <motion.p 
        className="text-lg leading-8"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
       
          If you want to study in Australia, you need to know about the Genuine Student (GS) requirements. The Australian Department of Home Affairs started this rule in 2011. The GS requirement makes sure that student visa applicants plan to stay in Australia for a short time to study. This article gives you a complete guide to help you understand the GS requirement, why it matters, how to meet it, and tips to apply.
      </motion.p>

      {/* What is a CAS Letter */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">What is the Genuine Student (GS) Requirement?</h2>
        <p className="text-lg leading-8">
        The GS requirement plays a crucial role in Australia’s student visa application process. The GS requirement aims to check whether or not a student is truly interested in pursuing a career in Australia. It is not aimed at blocking their permanent residency.
        </p>
      
      </motion.div>

      {/* Why is it Important */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Why is the GS Requirement Important?</h2>
        <p className="text-lg leading-8 mb-4">
        Australia ranks among the top choices for international students. To protect its student visa program, the Australian government uses the GS requirement to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Stop Visa Misuse:</strong>  Discourage people who want to use student visas for reasons other than studying.</li>
          <li><strong>Make Sure People Follow Rules:</strong>  Check that applicants will stick to visa conditions and leave when their visa runs out.</li>
          <li><strong>Support Immigration Goals: </strong> Back Australia’s wider immigration plans.</li>
         
        </ul>
      </motion.div>

      {/* Key Information */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Things Considered in GS Assessment</h2>
        <p className="text-lg leading-8 mb-4">
        When looking at a GS statement, the Department of Home Affairs checks:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>What’s Going On in the Applicant’s Home Country: </strong> Political, economic, and social situations.Personal connections to the home country, like family or a job, show a good reason to go back.</li>
          <li><strong>What Might Happen in Australia:</strong> Ties in Australia, like family or friends.How the course fits with the applicant’s job goals.The chances of following visa rules.</li>
          <li><strong>School and Work History: </strong> Earlier degrees and how they relate to the chosen course.Breaks in school or work.Job options back home after finishing the course.</li>
          <li><strong>Tuition Fees: </strong> The total amount and details of any payments you’ve already made.</li>
          <li><strong>Plans for the Future:</strong>The clear job aims.How the chosen course matches long-term job dreams.</li>
         
        </ul>
      </motion.div>

      {/* How to Obtain */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-6">Tips to Write a GS Statement</h2>
        <p className="text-lg leading-8 mb-4">
        A Genuine Student statement gives you a chance to show you want to study in Australia. Here’s how to write a strong GS statement:
        </p>
        <h3 className="font-semibold mb-2 text-2xl">Step 1: Opening</h3>
        <p className="mb-4 text-lg">Discuss who you are. Talk about your background and what makes you want to study in Australia.</p>

        <h3 className="font-semibold mb-2 text-2xl">Step 2: Educational Background</h3>
        <p className="mb-4 text-lg">Discuss about your past education, what you’ve learned, and what you’ve achieved. Show how these connect to the course you want to take in Australia.</p>

        <h3 className="font-semibold mb-2 text-2xl">Step 3:Reasons for Choosing Australia</h3>
        <p className="mb-4 text-lg">Explain why you like Australia more than other countries. Mention its top-notch schools’ mix of cultures and how the world sees its education.</p>

        <h3 className="font-semibold mb-2 text-2xl">Step 4:Reasons for Choosing the Course</h3>
        <p className="mb-4 text-lg">Tell us why you picked this specific course and how it fits with what you want to do in your career. Show that you’ve looked into the course and school.</p>

        <h3 className="font-semibold mb-2 text-2xl">Step 5:Ties to Your Home Country</h3>
        <p className="mb-4 text-lg">Showcase your strong ties to your home country, like family, property, or job prospects, to demonstrate your plan to come back</p>

        <h3 className="font-semibold mb-2 text-2xl">Step 6: Future Plans</h3>
        <p className="mb-4 text-lg">Describe your career goals after you finish studying, stressing how the course will help you reach them.</p>

        <h3 className="font-semibold mb-2 text-2xl">Step 7:Final Step</h3>
        <p className="mb-4 text-lg">Sum up your genuine aim to study and return home once you’re done.</p>
        

        <h2 className="text-4xl font-bold mt-10 mb-6">Common Mistakes to Avoid in a GS Statement</h2>
        <ul className="list-disc list-inside space-y-1 mb-4 text-lg">
        <li><strong>Don’t Be Too Broad: Stay away from unclear claims. Tell us what you plan to do. </strong>Stay away from unclear claims. Tell us what you plan to do.</li>
          <li><strong>Show How the Course Fits:</strong>  Make a clear connection between your studies and job goals.</li>
          <li><strong>Include Your Home Connections: </strong>Not mentioning strong links to your country might cause concern. </li>
          <li><strong>Keep Everything Matching:</strong>  Make sure your GS matches other papers you’ve sent in.</li>
        </ul>

      
      </motion.div>

      {/* CAS Letter Duration */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">How to Write a Good GS Statement</h2>
        <ul className="list-disc list-inside space-y-1 mb-4 text-lg">
        <li><strong>Tell the Truth:  </strong>Being real counts. Give correct and well-backed facts.</li>
          <li><strong>Keep It Simple:</strong>   Write in English.</li>
          <li><strong>IDo Your Homework: </strong>Learn about your course school, and how education works in Australia. </li>
          <li><strong>Ask for Help: </strong>  Talk to an education agent or migration expert to get their thoughts.</li>
        </ul>
      </motion.div>

      {/* After CAS */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Backing Up Your GS</h2>
        <p className="mb-4 text-lg">To make your GS application stronger, add these papers:</p>
        <ul className=" list-disc list-inside space-y-2 text-lg">
          <li>School records and diplomas.</li>
          <li>Job history or letters from bosses.</li>
          <li> Bank statements show you have enough money.</li>
          <li>Proof of family, like marriage or birth papers.</li>
          <li>Papers showing your property.</li>
        </ul>
      </motion.div>

      {/* Things That Can Go Wrong */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">GS for Special Cases</h2>
        <h3 className="font-semibold mb-2 text-2xl">Step 1:  Mature-Age Applicants</h3>
        <p className="mb-4 text-lg">Older students need to explain gaps in their schooling or work history. They should also talk about why they want to go back to school.</p>
        <h3 className="font-semibold mb-2 text-2xl">Step 1: Applicants with Immigration History</h3>
        <p className="mb-4 text-lg">If the government has turned down or canceled your visa before, you should explain what happened. Show that you plan to follow the rules for your current visa.</p>
     
      </motion.div>

      {/* Conclusion */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg leading-8">
        The Genuine Student (GS) requirement plays a key role in the Australian student visa application process. To boost your chances of getting your visa approved, you need to grasp its purpose, tackle main factors, and write a strong GS statement. Put in the time to get ready, ask for help if you need it, and make sure your plans come across as clear and real. If you prepare well, you’re already on your way to studying in Australia.
        </p>
      </motion.div>
    </section>
  );
}
