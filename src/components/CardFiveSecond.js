"use client";

import { motion } from "framer-motion";

export default function CardThreeSecond() {
  const universities = [
    "Australian National University (ANU)",
    "University of Melbourne",
    "Imperial College Sydney",
    "University of Queensland",
    "Monash University",
    "University of New South Wales (UNSW)",
    "University of Adelaide",
    "University of Western Australia (UWA)",
    
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
       We have already discussed how you can get admission to the top universities of Australia, the Go8. However, most of the students don’t know which university is the perfect fit for them in the Go8. So, today, we will discuss every Go8 university in detail and make it easy to pick the most suitable university for you.
      </motion.p>

      {/* What is a CAS Letter */}
     

      {/* List of Russell Group Universities */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">What are Go8 Universities?</h2>
        <p className="text-lg leading-8 mb-6">
        The Go8 brings together Australia’s best research-focused universities. These schools have a rich history of academic success and always rank among the world’s top universities. The Go8 includes:
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
  <h2 className="text-4xl font-bold mt-10 mb-4">QS World University Rankings 2024 for Go8 Universities</h2>
  <p className="text-lg leading-8 mb-8">
    There are currently 8 universities . Below is the list of universities along with their rankings.
  </p>

  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 px-4 py-2 text-left text-lg">University Name</th>
          <th className="border border-gray-300 px-4 py-2 text-left text-lg">QS World Ranking 2024</th>
        </tr>
      </thead>
      <tbody className="text-blue-900">
        <tr>
          <td className="border border-gray-300 px-4 py-2">Australian National University (ANU)</td>
          <td className="border border-gray-300 px-4 py-2">34</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Melbourne</td>
          <td className="border border-gray-300 px-4 py-2">37</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Sydney</td>
          <td className="border border-gray-300 px-4 py-2">41</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of New South Wales (UNSW)</td>
          <td className="border border-gray-300 px-4 py-2">19</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Queensland (UQ)</td>
          <td className="border border-gray-300 px-4 py-2">43</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Monash Universityn</td>
          <td className="border border-gray-300 px-4 py-2">42</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Adelaide</td>
          <td className="border border-gray-300 px-4 py-2">89</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">University of Western Australia (UWA)</td>
          <td className="border border-gray-300 px-4 py-2">90</td>
        </tr>
       
        {/* You can continue adding more universities if you want! */}
      </tbody>
    </table>
  </div>
</motion.div>


      {/* Key Information */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Key Features of Each Go8 University</h2>
        <p className="text-lg leading-8 mb-4">
        Each Go8 university focuses on different areas, giving you as a student a chance to match your studies with what you like:
        </p>
        
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Australian National University (ANU)</h2>
        <p className="text-lg leading-8">
       ANU stands out in politics, law, and philosophy. It’s great for future scholars and policymakers. The Australian National University (ANU) is the largest public research university located in Canberra, the capital of Australia. The Australian Parliament itself established this university with the goal of supporting the development of national unity and identity and providing the nation with research capacity amongst the best in the world.
        </p>
        <p className="mb-4 text-lg"> ANU converges up to 85% of the lecturers with PhD degrees, leading professors in the world. The faculty at the school is always at the forefront of all scientific discoveries and achievements in exploiting the mysteries of history. When choosing to enter the Australian National University, international students are mostly interested in outstanding majors such as. IT, Law, Politics, Maritime Science, Philosophy, and Modern Languages.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">University of Melbourne</h2>
        <p className="text-lg leading-8">
        From the time its foundation stone was laid in 1853, the University of Melbourne became one of the best public universities in Australia with the motto “grow in the esteem of future generations.” Not only being a key member of the Group of Eight Australia, the University of Melbourne also attracts many international students. Thanks to its remarkable achievements:
        </p>
        <p className="mb-4 text-lg"> ANU converges up to 85% of the lecturers with PhD degrees, leading professors in the world. The faculty at the school is always at the forefront of all scientific discoveries and achievements in exploiting the mysteries of history. When choosing to enter the Australian National University, international students are mostly interested in outstanding majors such as. IT, Law, Politics, Maritime Science, Philosophy, and Modern Languages.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">University of Sydney</h2>
        <p className="text-lg leading-8">
        With a history of 166 years of development, the University of Sydney is the oldest, most prestigious, and multicultural university in Australia. The University of Sydney always stays in the top 1% of great universities, welcoming more than 51,000 students from all over the country each year.
        </p>
        <p className="mb-4 text-lg">Whether you’re starting or pursuing a passion at the top Group of Eight Universities, you can choose from many flexible courses and degree structures, including IT, Agriculture, Architecture, Design and Planning, Society, Economics and Business, Education and Technology, Social Work, Engineering and Information Technology, Arts.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">The University of Queensland (UQ)
        </h2>
        <p className="text-lg leading-8">
        The University of Queensland is honored to become a core member of the Group of 8 global universities. The motto, Scientia ac Labore, is generally translated as ‘by means of knowledge and hard work. This university has a network of more than 232,000 alumni and students around the globe, in which you will easily find Nobel laureates or individuals ranked among the list of CEOs and CEOs, even those who currently work in the government.
        </p>
        <p className="mb-4 text-lg"> The University of Queensland offers outstanding training programs such as IT, Engineering, Agriculture, Veterinary Sciences, Arts (Humanities), Business, Economics and Tourism, Information Technology, Health, Law, Languages ​​, and Behavioral science.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Monash University</h2>
        <p className="text-lg leading-8">
        Monash University is a multidisciplinary university with more than 600 courses in many specialties. It provides a worldwide network with robust programs in business, IT, and environmental sciencesThe Faculty of Economics and Business at Monash is the only one in the Go8 group of schools to be awarded ‘triple accreditation’ by the Association to Advance Collegiate Schools of Business (AACSB), Association of MBAs (AMBA) and EQUIS (EFMD Quality Improvement System).
        </p>
        <p className="mb-4 text-lg"> Besides high-quality teaching and a dynamic environment, Monash University has achieved an enviable reputation for research and teaching excellence. Her achievements include:
        </p>

        <ul className=" list-disc list-inside space-y-2 text-lg">
          <li>6th in the world according to Times Higher Education Golden Age University 2020</li>
          <li>Ranked 37th in the world by US News and World Report 2022-2023</li>
          <li>Ranked 35th in the world by National Taiwan University Rankings 2022</li>
          <li>Ranked 75 in the world in the Shanghai Academic Ranking of World Universities</li>
          </ul>

      </motion.div>

    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">University of New South Wales (UNS)</h2>
        <p className="text-lg leading-8">
        Founded in 1949, The University of New South Wales – UNSW, is recognized as one of the leading universities in teaching and multidisciplinary research.UNSW has a comprehensive curriculum with more than 900 undergraduate and graduate programs. 
        </p>
        <p className="mb-4 text-lg"> The university’s prominent majors include Engineering, IT, renewable energy, nanotechnology, quantum computing, HIV/AIDS research, digital communications, IT, and biomedical sciences.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">University of Adelaide</h2>
        <p className="text-lg leading-8">
        The University of Adelaide is one of the three oldest universities in Australia (founded in 1874). The University of Adelaide is proud to be the cradle of many world talents, including more than 100 Rhodes Scholars and more than 130 Fulbright Scholars, as well as Australia’s first astronaut.
        </p>
        <p className="mb-4 text-lg"> TIn addition, the University of Adelaide is also known for the following achievements:</p>
        <ul className=" list-disc list-inside space-y-2 text-lg">
          <li>Ranked 66th in the world by US News and World Report 2022</li>
          <li>Ranked 132 in the world (according to Shanghai Ranking Academic Ranking of World Universities 2022)</li>
          </ul>
         
      </motion.div>


      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">University of Western Australia (UWA)</h2>
        <p className="text-lg leading-8">
        The University of Western Australia is located in the city of Perth – one of the top 7 most livable cities in the world. It is one of two universities in Australia that is part of the World University Network – a partnership network of 18 research universities in Europe, Africa, the Americas, and Asia-Pacific. She boasts of courses in various disciplines such as IT, Engineering, Arts and Social Sciences.
        </p>
        <p className="mb-4 text-lg"> According to Times Higher Education, the University of Western Australia ranks 131st in the top 150 universities in the world. This Go8 university is also a founding member of the Matariki Network of high-quality research universities with a special focus on the student experience.</p>
      </motion.div>


      
      {/* Conclusion */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg leading-8">
        The Go8 universities are the big elephants in the room as they open doors to top-notch academic and career chances. If you grasp what makes each one special and get ready the right way, you can set yourself up for a future with no limits. Whether you want to do cutting-edge research, gain worldwide recognition, or build a successful career.
        </p>
      </motion.div>
    </section>
  );
}
