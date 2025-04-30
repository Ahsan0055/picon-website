'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqData = [
  {
    question: 'What services does PICON Consultants Agency provide?',
    answer:
      'We offer comprehensive education consultancy services, including admission guidance, visa assistance, and career counseling for studying abroad.',
  },
  {
    question: 'How can I book an appointment with a PICON counsellor for admission?',
    answer:
      'You may reach out to our QEAC certified counsellor through our website, call, whatsapp, video meeting or social media channels. You may also visit your nearest StudyShed office in Pakistan.',
  },
  {
    question: 'How much does it cost for a counselling appointment at PICON ?',
    answer:
      'We offer free of cost dedicated counselling services to our prospective students. You may reach out to us over call or visit our office for a persianlised guidance.',
  },
  {
    question: 'Which documents do I need to bring with me at the time of appointment with a counsellor?',
    answer:
      'It is recommended to bring your academic transcripts or at least a detailed CV to discuss your study abroad plans with us.',
  },
  {
    question: 'Does PICON assist in education after placement and visa issuance?',
    answer:
      'Yes we do provide dedicated pre departure guidelines and onshore support as well.',
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
    <div
  className="relative w-full bg-cover bg-center"
  style={{ backgroundImage: "url('/images/questions.jpg')" }}
>
  {/* Softer, more transparent overlay */}
  <div className="absolute inset-0 bg-black/10" />


      <div className="relative max-w-4xl mx-auto px-6 py-16 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-blue-900 border border-white/20 rounded-xl p-4 transition-all duration-300 shadow-md"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">
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
