'use client';
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqData = [
  {
    question: 'How can I apply to a UK university?',
    answer:
      'You can apply directly through the university’s website or via UCAS (Universities and Colleges Admissions Service) for undergraduate courses. For postgraduate programs, applications are usually made directly to the university. It’s recommended to consult with an education consultant for guidance.',
  },
  {
    question: 'Can I study in the UK without an English Language Test?',
    answer:
      'Some UK universities may accept an English Proficiency Letter if your previous education was in English. However, most institutions and the UK Visas and Immigration (UKVI) require a valid English test like IELTS, PTE, or TOEFL for visa purposes.',
  },
  {
    question: 'What is the UK student visa fee?',
    answer:
      'As of 2024, the standard UK Student Visa fee is £490. Additionally, students must pay the Immigration Health Surcharge (IHS), which is typically £776 per year of study.',
  },
  {
    question: 'How much bank statement is required for a UK student visa?',
    answer:
      'You must show funds to cover 1 year of tuition fees plus 9 months of living expenses. Living cost is £1,334/month in London or £1,023/month outside London. The funds must be held in your or your sponsor’s account for at least 28 consecutive days.',
  },
  {
    question: 'Who can sponsor my studies in the UK?',
    answer:
      'Your parents, legal guardians, or a spouse can sponsor you. You’ll need to provide evidence such as a letter of sponsorship, relationship proof, and financial documents like bank statements.',
  },
  {
    question: 'Can I get help writing my personal statement?',
    answer:
      'Yes, our qualified education consultants at PICON can assist you in crafting a strong and personalised statement that aligns with UK university expectations.',
  },
  {
    question: 'How long does the UK admission and visa process take?',
    answer:
      'The admission process usually takes 2–6 weeks depending on the course and institution. The visa application typically takes 3 weeks after biometric submission, but it’s advised to apply well in advance.',
  },
]

export default function FaqUkSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="relative w-full bg-blue-50"> {/* Light blue background */}
      <div className="relative max-w-4xl mx-auto px-6 py-16 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-blue-900 border border-white/20 rounded-xl p-3 transition-all duration-300 shadow-md"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-medium text-white">
                  {item.question}
                </h3>
                <div className="text-white transition-transform duration-300">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 mt-3 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-white/90 text-sm md:text-base">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
