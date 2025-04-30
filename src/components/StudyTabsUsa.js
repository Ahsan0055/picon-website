'use client';

import { useState } from 'react';

export default function StudyTabsUsa() {
  const [activeTab, setActiveTab] = useState('career');

  return (
    <div className="w-[90%] md:w-[80%] mx-auto bg-blue-50 shadow-xl rounded-xl overflow-hidden my-16">
      {/* Tabs Header */}
      <div className="bg-blue-900 text-white flex justify-around text-center text-sm md:text-base font-semibold">
        <button
          className={`w-full py-5 transition-colors duration-300 text-base md:text-lg ${
            activeTab === 'career' ? 'bg-blue-800' : ''
          }`}
          onClick={() => setActiveTab('career')}
        >
          Career Prospects
        </button>
        <button
          className={`w-full py-5 transition-colors duration-300 text-base md:text-lg ${
            activeTab === 'entry' ? 'bg-blue-800' : ''
          }`}
          onClick={() => setActiveTab('entry')}
        >
          Entry Requirements
        </button>
        <button
          className={`w-full py-5 transition-colors duration-300 text-base md:text-lg ${
            activeTab === 'gs' ? 'bg-blue-800' : ''
          }`}
          onClick={() => setActiveTab('gs')}
        >
          Visa & Financial Requirements
        </button>
      </div>

      {/* Tabs Content */}
      <div className="p-8 space-y-5 text-gray-800 text-base md:text-lg transition-all duration-500">
        {activeTab === 'career' && (
          <ul className="list-disc list-inside space-y-4">
            <li>
              The USA is home to a vast and diverse economy with career opportunities in nearly every industry. Graduates benefit from Optional Practical Training (OPT), allowing them to work in the U.S. after completing their degree.
            </li>
            <li>
              STEM (Science, Technology, Engineering, Math) graduates are eligible for up to 3 years of OPT, opening doors to top employers in tech, engineering, and healthcare.
            </li>
            <li>
              Business, Finance, and Management students have access to some of the world's biggest corporations and startup ecosystems, especially in cities like New York, San Francisco, and Chicago.
            </li>
            <li>
              The U.S. healthcare industry continues to grow rapidly, creating strong demand for international graduates in areas like nursing, public health, and biomedical sciences.
            </li>
          </ul>
        )}

        {activeTab === 'entry' && (
          <>
            <p className="text-lg">
              To apply to U.S. universities, students from Pakistan must meet the following academic and language qualifications:
            </p>

            <h3 className="font-semibold text-blue-900 text-xl mt-4">
              Academic Requirements
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Undergraduate programs: Completion of Higher Secondary School Certificate (HSSC) or A-Levels with competitive grades.</li>
              <li>Graduate programs: A recognized bachelor’s degree with a strong GPA and relevant academic background.</li>
              <li>Standardized tests: SAT/ACT for undergraduates; GRE/GMAT for graduate programs (may be optional depending on university).</li>
            </ul>

            <h3 className="font-semibold text-blue-900 text-xl mt-6">
              English Language Requirements
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Most universities require a TOEFL iBT score of 80+ or IELTS score of 6.5+.</li>
              <li>Some institutions may accept Duolingo or PTE as alternative tests.</li>
              <li>Higher scores may be required for competitive programs such as Law, Medicine, or Engineering.</li>
            </ul>
          </>
        )}

        {activeTab === 'gs' && (
          <p className="text-lg">
            To study in the U.S., international students must apply for an F-1 Student Visa. As part of the visa application, students must demonstrate they have genuine intent to study and sufficient financial resources.
            <br /><br />
            You are typically required to show financial documentation covering:
            <br />
            – First year of tuition fees <br />
            – Estimated living expenses (approx. $10,000–$15,000 per year) <br />
            – Travel and miscellaneous expenses
            <br /><br />
            U.S. universities issue an I-20 form once you are admitted, which you will use to apply for your visa at the U.S. embassy. Visa officers assess the credibility, financial backing, and academic intent during the visa interview.
          </p>
        )}
      </div>
    </div>
  );
}
