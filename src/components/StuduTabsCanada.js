'use client';

import { useState } from 'react';

export default function StudyTabsCanada() {
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
          Career Opportunities
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
          SDS & Financial Requirements
        </button>
      </div>

      {/* Tabs Content */}
      <div className="p-8 space-y-5 text-gray-800 text-base md:text-lg transition-all duration-500">
        {activeTab === 'career' && (
          <ul className="list-disc list-inside space-y-4">
            <li>
              Canada has a robust economy with strong post-study work options. International graduates may apply for a Post-Graduation Work Permit (PGWP), allowing them to gain valuable Canadian work experience.
            </li>
            <li>
              The technology sector in Canada is booming, especially in cities like Toronto, Vancouver, and Montreal. There is high demand for professionals in software development, AI, data science, and cybersecurity.
            </li>
            <li>
              Canadas healthcare and social services sectors are growing rapidly due to an aging population, creating abundant opportunities for nurses, physiotherapists, and other allied health professionals.
            </li>
            <li>
              Engineering, finance, and skilled trades are also sectors with increasing job vacancies, making Canada an ideal destination for career-oriented students from Pakistan.
            </li>
          </ul>
        )}

        {activeTab === 'entry' && (
          <>
            <p className="text-lg">
              To gain admission to Canadian institutions, you must meet the following academic and language requirements:
            </p>

            <h3 className="font-semibold text-blue-900 text-xl mt-4">
              Academic Requirements
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Diploma Programs: Higher Secondary School Certificate (HSSC) with minimum 50%.</li>
              <li>Undergraduate Programs: A Levels or HSSC with 60% or higher, depending on the institution.</li>
              <li>Postgraduate Programs: A Bachelors degree with a minimum CGPA as required by the program.</li>
            </ul>

            <h3 className="font-semibold text-blue-900 text-xl mt-6">
              English Language Requirements
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Diploma & Undergraduate: IELTS overall 6.0 with no band less than 5.5 (SDS requirement).</li>
              <li>Postgraduate: IELTS overall 6.5 with no band less than 6.0. TOEFL or PTE scores may also be accepted.</li>
            </ul>
          </>
        )}

        {activeTab === 'gs' && (
          <p className="text-lg">
            To apply under the Student Direct Stream (SDS) for a Canadian student visa, Pakistani students must fulfill certain financial and documentation requirements. This includes paying the first years tuition fee in advance, obtaining a Guaranteed Investment Certificate (GIC) of CAD 10,000, and meeting the English language criteria (IELTS overall 6.0, no band less than 6.0).
            <br /><br />
            Additionally, students must show genuine intentions to study and the ability to support themselves during their stay in Canada. All documents must be complete and verifiable for visa success.
          </p>
        )}
      </div>
    </div>
  );
}
