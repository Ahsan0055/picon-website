"use client";

import { motion } from "framer-motion";

export default function CardSevenSecond() {
  const universities = [
    "New South Wales Skilled Occupation List (SOL) 2024-2025 Updates)",
    "Victoria Skilled Occupation List (SOL) 2024-2025 Updates",
    "South Australia Skilled Occupation List (SOL) 2024-2025 Updates",
    "Western Australia Skilled Occupation List (WASMOL) 2024-2025 Updates",
    "Tasmania Skilled Occupation List (TOSOL) 2024-2025 Updates",
    "Australian Capital Territory Skilled Occupation List (SOL) 2024-2025 Updates",
  ];
  return (
    <section className="bg-white px-6 md:px-20 py-20 text-blue-900 space-y-12">
      {/* Intro Paragraph */}
      <motion.p 
        className="text-lg leading-8"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
       Are you planning your move to Australia in 2025? If yes, The Australia Skilled Occupation List (SOL) could be your gateway to success! The SOL will help you discover whether your profession is currently in demand and also explore the visa options available through our comprehensive SOL guide.
       <p className="mt-4 text-lg leading-8">
       Understanding the most sought-after occupations is crucial if you’re considering permanent settlement in Australia. Enhance your migration prospects by pursuing qualifications in high-demand sectors, particularly those featured on the Western Australia Skilled Occupation List and other state-specific lists.
        </p>
      </motion.p>

      {/* What is a CAS Letter */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
  <h2 className="text-4xl font-bold mt-10 mb-4">Australia State-Specific SOL 2024-2025 Updates</h2>
  <p className="text-lg leading-8 mb-8">
    There are Australia State-Specific SOL 2024-2025 Updates here:
  </p>

  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 mb-8">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-left text-lg">State</th>
          <th className="border border-gray-300 px-4 py-2 text-left text-lg">Skilled Nominated Visa(Subclass 190)</th>
          <th className="border border-gray-300 px-4 py-2 text-left text-lg">Skilled Work Regional Visa(Subclass 491)</th>
        </tr>
      </thead>
      <tbody className="text-blue-900">
        <tr>
          <td className="border border-gray-300 px-4 py-2">ACT</td>
          <td className="border border-gray-300 px-4 py-2">1000</td>
          <td className="border border-gray-300 px-4 py-2">800</td>
        </tr>
        <tr>
        <td className="border border-gray-300 px-4 py-2">NSW</td>
          <td className="border border-gray-300 px-4 py-2">3000</td>
          <td className="border border-gray-300 px-4 py-2">2000</td>
        </tr>
        <tr>
        <td className="border border-gray-300 px-4 py-2">NT</td>
          <td className="border border-gray-300 px-4 py-2">800</td>
          <td className="border border-gray-300 px-4 py-2">800</td>
        </tr>
        <tr>
        <td className="border border-gray-300 px-4 py-2">QLD</td>
          <td className="border border-gray-300 px-4 py-2">600</td>
          <td className="border border-gray-300 px-4 py-2">600</td>
        </tr>
        <tr>
        <td className="border border-gray-300 px-4 py-2">SA</td>
          <td className="border border-gray-300 px-4 py-2">3000</td>
          <td className="border border-gray-300 px-4 py-2">800</td>
        </tr>
        <tr>
        <td className="border border-gray-300 px-4 py-2">TAS</td>
          <td className="border border-gray-300 px-4 py-2">2100</td>
          <td className="border border-gray-300 px-4 py-2">760</td>
        </tr>
        <tr>
        <td className="border border-gray-300 px-4 py-2">VIC</td>
          <td className="border border-gray-300 px-4 py-2">3000</td>
          <td className="border border-gray-300 px-4 py-2">2000</td>
        </tr>
        <tr>
        <td className="border border-gray-300 px-4 py-2">WA</td>
          <td className="border border-gray-300 px-4 py-2">3000</td>
          <td className="border border-gray-300 px-4 py-2">2000</td>
        </tr>
        <tr>
        <td className="border border-gray-300 px-4 py-2">Total</td>
          <td className="border border-gray-300 px-4 py-2">16500</td>
          <td className="border border-gray-300 px-4 py-2">9760</td>
        </tr>
       
        {/* You can continue adding more universities if you want! */}
      </tbody>
    </table>
  </div>
  <p className="text-lg leading-8 mb-8">
  The table above highlights the recent updates to the SOL at the time this piece was written. Nonetheless, for those seeking state-specific information about the skilled occupation list in Australia, we have compiled the most recent 2024-2025 occupation list updates below:
  </p>
</motion.div>

<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
       
        <motion.ul
          className="space-y-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {universities.map((uni, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-2 hover:text-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-green-500 mt-1">✔️</span>
              <span>{uni}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Why is it Important */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">The  Key Components of Australia Skilled Occupation List (SOL)</h2>
        <p className="text-lg leading-8 mb-4">
        Additionally, if you are looking for more comprehensive information about the Australia Skilled Occupation List, we’ve compiled an essential guide below for international students in Australia:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>The ANZSCO (Australian and New Zealand Standard Classification of Occupations) code for each profession provides detailed information about job skill levels and required qualifications or experience.</li>
          <li>Please clearly indicate whether the occupation appears on the Medium and Long-term Strategic Skills List (MLTSSL), the Short-term Skilled Occupation List (STSOL), the Regional Occupation List (ROL), or the Regional Sponsored Migration Scheme (RSMS) ROL List.</li>
          <li>Designated assessing authorities for skills evaluation.</li>
          <li>Specific conditions that may restrict occupation usage (applicable only to ENS and TSS visas).</li>
        </ul>
      </motion.div>

      {/* Key Information */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Types of Visas in Australia</h2>
        <p className="text-lg leading-8 mb-4">
        For skilled professionals whose occupations appear on the Australia Skilled Occupation List or Western Australia Skilled Occupation List, Australia offers several visa pathways. Here are the available visa options if you meet the qualification requirements and have relevant experience:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Employer Nomination Scheme (ENS) visa (subclass 186) –  </strong> enables skilled workers with employer nominations to permanently live and work in Australia.</li>
          <li><strong>Skilled Employer Sponsored Regional (Provisional) visa (Subclass 494) – </strong> allows regionally nominated skilled workers to reside, work, and study in regional Australia for 5 years.</li>
          <li><strong>Skilled Independent visa (subclass 189) –  </strong> a points-based pathway permitting employer-nominated skilled workers permanent residency status.</li>
          <li><strong>Skilled Nominated visa (subclass 190) – </strong> offers state-nominated skilled workers permanent residency through a points-tested system.</li>
          <li><strong>Skills in Demand visa (subclass 482) – </strong>temporary visa enabling employers to sponsor skilled overseas workers for positions lacking qualified Australian candidates.</li>
          <li><strong>Temporary Graduate visa (subclass 485) –</strong>  Graduate Work stream designed for recent international graduates with qualifications matching Australia’s in-demand occupations.</li>
          <li><strong>Skilled Work Regional (Provisional) visa (subclass 491): </strong>  This is a provisional visa for state/territory-nominated skilled workers seeking to live and work in regional Australia.</li>
        </ul>
      </motion.div>

      {/* How to Obtain */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-6">Eligibility Criteria for Australian Visa</h2>
       
        <p className="mb-4 text-lg">Since eligibility criteria vary significantly across these visa categories, we strongly advise conducting thorough research on all requirements after identifying the most suitable visa pathway for your circumstances. To qualify for the visas mentioned above, you must meet certain basic criteria:</p>

       
        <ul className="list-disc list-inside space-y-1 mb-4 text-lg">
          <li>Be between 18 and 45 years of age</li>
          <li>Receive an official invitation to submit an application</li>
          <li>Achieve the required points score</li>
          <li>Fulfill educational and skill requirements</li>
          <li>Demonstrate relevant work experience in your nominated skilled occupation</li>
          <li>Possess competent English language proficiency</li>
          <li>Satisfy Australian health standards</li>
          <li>Pass character assessment requirements</li>
        </ul>

        
      </motion.div>

      

      {/* Conclusion */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg leading-8">
        You can agree with me that this piece is not to be skimmed through. If you want to move to Australia for any reason, the skilled occupation list is a comprehensive document you must look into as carefully as possible. Aside from determining the jobs you can access, it has an overall impact on the life and privileges you’ll enjoy in Australia.
        </p>
      </motion.div>
    </section>
  );
}
