'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: 'How can I apply to a U.S. university?',
    answer:
      'Start by shortlisting your preferred universities, reviewing their admission requirements, and submitting your application directly through the university portal or Common App. You will typically need academic transcripts, standardized test scores (if required), a personal statement, and recommendation letters.',
  },
  {
    question: 'Can I study in the USA without taking an English language test?',
    answer:
      'Some U.S. universities waive English test requirements if your previous education was in English. However, most institutions still require TOEFL, IELTS, or Duolingo English Test scores, especially for visa purposes.',
  },
  {
    question: 'What is the visa fee for a U.S. student visa application?',
    answer:
      'The SEVIS (Student and Exchange Visitor Information System) fee is $350, and the U.S. embassy visa application fee (DS-160) is $185. These must be paid before your F-1 visa interview.',
  },
  {
    question: 'How much bank statement is required for a U.S. student visa?',
    answer:
      'You need to show proof of funds for at least the first year of study, covering tuition, living expenses (approx. $10,000–$15,000), and travel costs. The total amount should match the estimate on your I-20 form provided by the university.',
  },
  {
    question: 'Who can sponsor my U.S. student visa?',
    answer:
      'Sponsors can include parents, relatives, or any individual willing to provide financial support. They must provide bank statements and an affidavit of support. Self-sponsorship is also allowed if you have personal funds.',
  },
  {
    question: 'Can I get help with writing my personal statement?',
    answer:
      'Yes, many educational consultants and career counselors offer support with personal statement writing to help you clearly express your goals and increase your chances of admission.',
  },
  {
    question: 'How long does the U.S. admission and visa process take?',
    answer:
      'University admissions usually take 4–8 weeks after application. After receiving your I-20, you should apply for a visa as soon as possible. Visa processing times vary but can take anywhere from a few days to a few weeks.',
  },
];

export default function FaqUsaSection() {
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
