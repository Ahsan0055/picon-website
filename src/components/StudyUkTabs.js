'use client';
import { useState } from 'react';

export default function StudyTabs() {
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
          Career Insights
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
          CAS & Financial Requirements
        </button>
      </div>

      {/* Tabs Content */}
      <div className="p-8 space-y-5 text-gray-800 text-base md:text-lg transition-all duration-500">
        {activeTab === 'career' && (
          <ul className="list-disc list-inside space-y-4">
            <li>
              The UK is home to some of the world’s leading industries including finance, healthcare, law, education, and technology—offering abundant opportunities for international graduates.
            </li>
            <li>
              With the new Graduate Route visa, students can stay and work in the UK for up to 2 years (3 years for PhD graduates) after completing their studies.
            </li>
            <li>
              Sectors like cybersecurity, AI, and data analytics are rapidly growing in the UK, opening doors for skilled international professionals.
            </li>
            <li>
              The National Health Service (NHS), engineering firms, and creative industries continue to recruit international graduates for dynamic and rewarding career paths.
            </li>
          </ul>
        )}

        {activeTab === 'entry' && (
          <>
            <p className="text-lg">
              To apply to UK universities, Pakistani students must meet both academic and language requirements:
            </p>

            <h3 className="font-semibold text-blue-900 text-xl mt-4">
              Academic Requirements
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Foundation Programs: Matric or Intermediate with 50%–60% marks.</li>
              <li>Undergraduate Degrees: A Levels or HSSC (with high marks and relevant subjects).</li>
              <li>Postgraduate Degrees: Bachelor’s degree from a recognized university, with minimum second class or equivalent.</li>
              <li>Some universities may also accept work experience in place of academic gaps or qualifications.</li>
            </ul>

            <h3 className="font-semibold text-blue-900 text-xl mt-6">
              English Language Requirements
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Foundation: IELTS overall 4.5 to 5.5 depending on the course.</li>
              <li>Undergraduate: IELTS overall 6.0 with no band less than 5.5 (some programs may require higher).</li>
              <li>Postgraduate: IELTS overall 6.5 with no band less than 6.0 (programs like Law, Medicine, or Education may require higher scores).</li>
              <li>Alternatives like PTE, TOEFL, and Duolingo are also accepted by many universities.</li>
            </ul>
          </>
        )}

        {activeTab === 'gs' && (
          <p className="text-lg">
            To study in the UK, students must meet the financial and documentation requirements outlined by the UKVI. A Confirmation of Acceptance for Studies (CAS) is issued by the university once an unconditional offer is accepted.
            <br /><br />
            Students must show proof of funds to cover:
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Tuition fee for the first year of study (as stated on CAS letter)</li>
              <li>Living costs: £1,334 per month for up to 9 months in London; £1,023 per month outside London</li>
              <li>Funds must be held for at least 28 consecutive days before applying for the visa</li>
              <li>Bank statements, financial sponsor letters, or loan letters are accepted forms of proof</li>
            </ul>
            <br />
            The student must also write a strong personal statement and be ready for a credibility interview, where they may be asked about their course, university choice, finances, and career plans.
          </p>
        )}
      </div>
    </div>
  );
}
