"use client";

import { motion } from "framer-motion";

export default function CardThreeSecond() {
  const universities = [
    "University of Birmingham",
    "University of Birmingham",
    "Imperial College Cambridge",
    "Cardiff University",
    "Durham University",
    "University of Edinburgh",
    "University of Exeter",
    "University of Glasgow",
    "Imperial College London",
    "King’s College London",
    "University of Leeds",
    "University of Liverpool",
    "London School of Economics & Political Science",
    "University of Manchester",
    "Newcastle University",
    "University of Nottingham",
    "University of Oxford",
    "Queen Mary University of London",
    "Queen’s University Belfast",
    "University of Sheffield",
    "University of Southampton",
    "University College London",
    "University of Warwick",
    "University of York",
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
        When talking about the top UK universities, you’ll hear the phrase “Russell Group universities.” But what does this well-known term mean, and why do these schools shine on the world stage? This guide will give you a thorough overview of Russell Group universities, their importance, and why so many people want to attend them. It doesn’t matter if you’re thinking about studying there if you work in education, or if you’re just interested in learning more.
      </motion.p>

      {/* What is a CAS Letter */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">What Are Russell Group Universities?</h2>
        <p className="text-lg leading-8">
          The Russell Group brings together 24 top-notch UK universities. These schools stand out for their top-quality research, teaching, and overall student experience. You can compare the Russell Group to the Ivy League in the US or the Group of Eight (Go8) in Australia. Their dedication to high academic standards has made them global leaders in higher education.
        </p>
      </motion.div>

      {/* List of Russell Group Universities */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">List of Russell Group universities</h2>
        <p className="text-lg leading-8 mb-6">
          There are currently 24 universities within the Russell Group. Below is the list of universities that make up the Russell Group.
        </p>

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
      {/* List of Russell Group Universities */}
<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
  <h2 className="text-4xl font-bold mt-10 mb-4">List of Russell Group Universities</h2>
  <p className="text-lg leading-8 mb-8">
    There are currently 24 universities within the Russell Group. Below is the list of universities along with their rankings.
  </p>

  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-left text-lg">University Name</th>
          <th className="border border-gray-300 px-4 py-2 text-left text-lg">Ranking (UK)</th>
        </tr>
      </thead>
      <tbody className="text-blue-900">
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Cambridge</td>
          <td className="border border-gray-300 px-4 py-2">2</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Oxford</td>
          <td className="border border-gray-300 px-4 py-2">3</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Imperial College of London</td>
          <td className="border border-gray-300 px-4 py-2">6</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">The University of Edinburgh</td>
          <td className="border border-gray-300 px-4 py-2">9</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Manchester</td>
          <td className="border border-gray-300 px-4 py-2">22</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">King’s College London</td>
          <td className="border border-gray-300 px-4 py-2">32</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">London School of Economics and Political Science</td>
          <td className="border border-gray-300 px-4 py-2">40</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Bristol</td>
          <td className="border border-gray-300 px-4 py-2">45</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Warwick</td>
          <td className="border border-gray-300 px-4 py-2">55</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Leeds</td>
          <td className="border border-gray-300 px-4 py-2">67</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Glasgow</td>
          <td className="border border-gray-300 px-4 py-2">75</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Durham University</td>
          <td className="border border-gray-300 px-4 py-2">76</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Southampton</td>
          <td className="border border-gray-300 px-4 py-2">78</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Birmingham</td>
          <td className="border border-gray-300 px-4 py-2">81</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Nottingham</td>
          <td className="border border-gray-300 px-4 py-2">84</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Birmingham</td>
          <td className="border border-gray-300 px-4 py-2">100</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Sheffield</td>
          <td className="border border-gray-300 px-4 py-2">104</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Newcastle University</td>
          <td className="border border-gray-300 px-4 py-2">110</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Queen Mary University of London</td>
          <td className="border border-gray-300 px-4 py-2">145</td>
        </tr>

        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Exeter</td>
          <td className="border border-gray-300 px-4 py-2">153</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Cardiff University</td>
          <td className="border border-gray-300 px-4 py-2">154</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of York</td>
          <td className="border border-gray-300 px-4 py-2">167</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Liverpool</td>
          <td className="border border-gray-300 px-4 py-2">176</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Queen’s University Belfast</td>
          <td className="border border-gray-300 px-4 py-2">202</td>
        </tr>
        {/* You can continue adding more universities if you want! */}
      </tbody>
    </table>
  </div>
</motion.div>


      {/* Key Information */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Unique Features of Russell Group Universities</h2>
        <p className="text-lg leading-8 mb-4">
        The Russell Group universities distinguish themselves from other universities because they are at the forefront of research across the top disciplines. Whether IT, medicine and engineering to the humanities and social sciences. They attract world-renowned academics, boast cutting-edge facilities, and foster a culture of innovation that drives significant advancements in knowledge and technology.
        Similarly, global impact is a defining characteristic that plays a crucial role in addressing global challenges through international collaborations, research partnerships, and the development of solutions that benefit society on a global scale.
        </p>
        
      </motion.div>


      
      {/* Conclusion */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg leading-8">
        Similarly, global impact is a defining characteristic that plays a crucial role in addressing global challenges through international collaborations, research partnerships, and the development of solutions that benefit society on a global scale.
        </p>
      </motion.div>
    </section>
  );
}
