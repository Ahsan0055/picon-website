'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: 'How can I apply to a Canadian university or college?',
    answer:
      'You can apply directly through the institution’s official website. Some provinces also have centralized application platforms like Ontario’s OUAC. For support, many students consult certified education consultants for guidance and application help.',
  },
  {
    question: 'Can I study in Canada without an English Language Test?',
    answer:
      'Most Canadian institutions require proof of English proficiency through IELTS, TOEFL, or PTE. Some colleges may accept a Medium of Instruction (MOI) letter, but it is not typically accepted for visa purposes under the SDS stream.',
  },
  {
    question: 'What is the Canada student visa (Study Permit) fee?',
    answer:
      'As of 2024, the Canadian Study Permit application fee is CAD 150. You may also need to pay for biometric fees (CAD 85) and provide proof of financial support.',
  },
  {
    question: 'How much bank statement is required for a Canadian student visa?',
    answer:
      'Under the SDS category, you must show a Guaranteed Investment Certificate (GIC) of CAD 10,000 and proof of one year’s tuition fee paid. For non-SDS applications, additional financial documentation may be required.',
  },
  {
    question: 'Who can sponsor my studies in Canada?',
    answer:
      'Your parents, guardians, or other close relatives can sponsor you. You will need to submit proof of relationship, financial documents (like bank statements), and an affidavit of support if required.',
  },
  {
    question: 'Can I get help writing my Statement of Purpose (SOP)?',
    answer:
      'Yes, education consultants can help you write a compelling SOP tailored for Canadian institutions and visa officers, highlighting your academic background, career goals, and reasons for choosing Canada.',
  },
  {
    question: 'How long does the Canada admission and visa process take?',
    answer:
      'Admissions may take 2–6 weeks depending on the institution. Visa processing under SDS usually takes 20 calendar days, but it’s advised to apply at least 3–4 months in advance of your intended intake.',
  },
];

export default function FaqCanadaSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full bg-blue-50">
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
  );
}
