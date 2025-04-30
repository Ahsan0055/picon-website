'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TeamPage() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      {/* Heading Section with Lines only on "Our Team" */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 relative">
          Our Team
          <div className="absolute top-0 left-0 w-12 h-1 bg-red-500"></div>
          <div className="absolute top-0 right-0 w-12 h-1 bg-red-500"></div>
        </h2>
      </div>

      {/* Team Members Section */}
      <div className="space-y-24">
        {/* CEO Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:w-3/5 w-full">
            <h3 className="text-5xl font-semibold text-blue-700 mb-4">CEO</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
            Muhammad Naqash, the visionary CEO of our company, brings over 14 years of unmatched expertise in the fields of education consultancy and immigration services. With a deep commitment to guiding students and professionals towards successful international opportunities, he has earned a reputation for integrity, excellence, and personalized support. Under his leadership, our consultancy has helped thousands of individuals achieve their academic and career goals across the globe. His vast experience, strategic insight, and passion for empowering others continue to drive the company’s growth and success.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              As a leader, the CEO is focused on driving innovation, improving operational efficiency, and ensuring that the company maintains a strong presence in the international education industry. Their passion for education is evident in every decision made to further the company's goals.
            </p>
          </div>
          <div className="md:w-2/5 w-full relative">
            <Image
              src="/images/ceo.webp" // replace with actual image path
              alt="CEO"
              width={500}
              height={250} // Further decreased image height
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
            <div className="absolute top-0 right-0 w-12 h-12 bg-red-500 rounded-bl-lg"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-red-500 rounded-tr-lg"></div>
          </div>
        </motion.div>

        {/* Operational Manager Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:w-3/5 w-full">
            <h3 className="text-5xl font-semibold text-blue-700 mb-4">BDM (Business Development Manager)</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
            Moiz Shahbaz serves as the Business Development Manager at our company, with over 5 years of hands-on experience in education consultancy, visit visa services, and immigration support. He is a British Council Certified Agent, demonstrating his commitment to maintaining high industry standards and ethical practices. Moiz is known for his strategic insights, excellent communication skills, and strong relationships with international institutions. His dedication to student success and client satisfaction has been instrumental in expanding our global presence and delivering tailored solutions to every individual we serve.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Their role is key to ensuring that everything runs smoothly behind the scenes, from managing resources to resolving issues quickly. The Business Development Manager keeps the team aligned and ensures that deadlines are met while maintaining high standards of service.
            </p>
          </div>
          <div className="md:w-2/5 w-full relative">
            <Image
              src="/images/teamc.webp" // replace with actual image path
              alt="Operational Manager"
              width={500}
              height={250} // Further decreased image height
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
            <div className="absolute top-0 right-0 w-12 h-12 bg-red-500 rounded-bl-lg"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-red-500 rounded-tr-lg"></div>
          </div>
        </motion.div>

        {/* Marketing Manager Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:w-3/5 w-full">
            <h3 className="text-5xl font-semibold text-blue-700 mb-4">Marketing Manager</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
            Abdul Wahab is the Marketing Manager at our company, bringing over 5 years of valuable experience in education consultancy, visit visa assistance, and immigration services. With a deep understanding of international education systems and global travel requirements, he has successfully guided countless students and clients in achieving their study and travel goals. Abdul Wahab is known for his strategic marketing vision, client-focused approach, and commitment to delivering exceptional service. His expertise and leadership play a vital role in promoting our services and expanding our reach globally.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              They are also responsible for organizing events, campaigns, and partnerships to further strengthen the brand's recognition. Their creative approach and strategic thinking help create impactful marketing campaigns that resonate with our audience.
            </p>
          </div>
          <div className="md:w-2/5 w-full relative">
            <Image
              src="/images/teamb.jpeg" // replace with actual image path
              alt="Marketing Manager"
              width={500}
              height={250} // Further decreased image height
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
            <div className="absolute top-0 right-0 w-12 h-12 bg-red-500 rounded-bl-lg"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-red-500 rounded-tr-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
