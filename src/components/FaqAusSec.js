'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqData = [
  {
    question: 'How can I apply at Australian University?',
    answer:
      'First of all gather documents for admission applications, shortlist your desired universities and check university websites for a list of agents. Normally from Pakistan a student has to nominate an agent to represent your application at Australian University.',
  },
  {
    question: 'How can I study in Australia without an English Language Test?',
    answer:
      'There are some universities in Australia offering admission on the basis of English Proficiency Letters if you have done your previous degree in English language. But it is recommended to undertake an English proficiency test to comply with Department of Home Affairs requirements.',
  },
  {
    question: 'What is the visa fee for Australian Student Visa Application?',
    answer:
      'To lodge your visa application all international students have to first pay visa application fee i.e. AUD 1600.',
  },
  {
    question: 'How much bank statement is required for an Australia Study Visa?',
    answer:
      'You have to meet financial capacity requirements as per required by Visa Subclass 500. Financial capacity requires your to show funds for first year of studies expenses which includes 1 year tuition fee, 1 year living cost AUD 29710 and 1 year travel cost AUD 2000.',
  },
  {
    question: 'Who can be your sponsor for an Australian Student visa?',
    answer:
      'As per visa subclass 500, your parents, legal guardian or spouse can sponsor you to meet visa requirements.',
  },
  {
    question: 'Can I get assistance in writing my statement?',
    answer:
      'PICON is a team of certified counsellors and we guide you in detail about approaches to write your Persoanl Statement to secure your admission at your desired institutions abroad.',
  },
  {
    question: 'How long does the application process take?',
    answer:
      'The time varies depending on the country and university, but typically the process takes 4-8 weeks including visa application.',
  },
]

export default function FaqSection() {
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
