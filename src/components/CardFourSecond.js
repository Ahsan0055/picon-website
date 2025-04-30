"use client";

import { motion } from "framer-motion";

export default function CardFourSecond() {
  return (
    <section className="bg-white px-6 md:px-20 py-20 text-blue-900 space-y-12">
      {/* Intro Paragraph */}
      <motion.p 
        className="text-lg leading-8"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        The GREAT Scholarships are a joint initiative of the British Council and the UK government that offers excellent international students the opportunity to study postgraduate courses in the UK. These prestigious awards provide financial support and give access to world-class universities, as well as provide a global network of scholars.
        Read on in this article, which includes five key tips on how to secure a GREAT Scholarship, such as knowing if you are eligible for the Scholarship, following your applications, and writing a powerful statement about your academic brilliance, personality and commitment to make a difference.


      </motion.p>

      {/* What is a CAS Letter */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Know the Rules and What You Need to Qualify</h2>
        <p className="text-lg leading-8">
        Before you begin your application, make sure you qualify for the scholarship scholarship. Each country and university taking part has its own rules about citizenship, grades, and what you can study. Check the official GREAT Scholarship website to find out what you need to do.
        </p>
        <p className="mt-4 text-lg leading-8">
        It’s just as crucial to follow the application rules, like word count, how to format, and what papers you need to send. If you don’t stick to these rules, even by accident, you might get turned down.


        </p>
      </motion.div>

      {/* Why is it Important */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Show Off Your Accomplishments Well</h2>
        <p className="text-lg leading-8 mb-4">
        Sell yourself! I really cannot say this enough. Everything or skill in you in a competitive edge or the Scholarship. Whether they’re related to academics or not, do not hide it. In fact, students who show interest in extracurricular activities have an advantage.
        </p>
      
      </motion.div>

      {/* Key Information */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-4">Craft a Strong Personal Statement</h2>
        <p className="text-lg leading-8 mb-4">
        Your statement matters most in your application. It lets you show your enthusiasm for your chosen field and clarify how the Scholarship will help you reach your academic and career goals.
        Start with a captivating opening, like a personal story or insight that sparked your career path. In the main part, talk about what you’ve accomplished, your abilities, and what you want to do in the future. End by explaining how getting the GREAT Scholarship will allow you to make a real difference in your community and beyond.
        </p>
        
      </motion.div>

      {/* How to Obtain */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mt-10 mb-6">Show the Scholarship’s Impact</h2>
      
        <p className="mb-4 text-lg">Scholarship panels want to know more than just your grades. They’re looking at your ability to make a difference. Explain how the money will help you tackle problems in your community or field.</p>

        <p className="mb-4 text-lg">When you’re working on your application, ask yourself:</p>


       
        <p className="mb-4 text-lg">What exact abilities or insights do you want to gain?</p>
        <p className="mb-4 text-lg"> How do you plan to help your community after you finish school?</p>
      </motion.div>

      {/* CAS Letter Duration */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Send Your Application with Self-Assurance and Be Ready for Input</h2>
        <p className="text-lg leading-8">
        When you apply for competitive opportunities like the GREAT Scholarship, you need to be confident. Show that you deserve it, and don’t let the competition scare you.
        </p>
        <p className="mb-4 text-lg"> If you don’t get in, ask why and use that info to get better. Many scholars make it after they fix up their applications a few times. Keep trying because that’s how you win.</p>
      </motion.div>

     

      {/* Conclusion */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
        <h2 className="text-4xl font-bold mb-4">Conclusion</h2>
        <p className="text-lg leading-8">
        The GREAT Scholarship offers more than just money—it gives you a chance to get a top-notch education, make friends from around the world, and leave your mark. If you follow these tips, from checking if you qualify to write a strong personal story, you can create an application that stands out. Keep in mind not giving up and getting ready are your best tools. Begin your application now and take a big step toward reaching your study and job goals in the UK.
        </p>
      </motion.div>
    </section>
  );
}
