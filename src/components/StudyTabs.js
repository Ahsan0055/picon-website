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
          GS/GTE & Financial Requirements
        </button>
      </div>

      {/* Tabs Content */}
      <div className="p-8 space-y-5 text-gray-800 text-base md:text-lg transition-all duration-500">
        {activeTab === 'career' && (
          <ul className="list-disc list-inside space-y-4">
            <li>
            Australia is a large economy and provides ample opportunities for successful career growth for graduates. Australia is providing international graduates with 2-3 years of post-study work visa(s) for higher education and 18 months for tertiary education.
             
            </li>
            <li>
            Australia’s mining industry is a cornerstone of its economy, employing over 300,000 individuals as of 2024. Engineering professionals are in high demand for large-scale projects, with ample opportunities for growth and innovation.
            </li>
            <li>
            The Australian Healthcare & Aged Care sector indicates a need for an additional 250,000 workers by 2030. The government’s significant funding initiatives for aged care reform and increased focus on mental health services create several opportunities for skilled professionals in this sector.
            </li>
            <li>
            Australia’s tech industry is expanding rapidly, with a projected growth rate of 3.5% annually over the next decade, creating a number of opportunities for specialists in areas such as cybersecurity, software development, data analytics, and AI.
            </li>
          </ul>
        )}

        {activeTab === 'entry' && (
          <>
            <p className="text-lg">
            To gain entry to Australian universities, you will need the following basic academic qualifications:
            </p>

            <h3 className="font-semibold text-blue-900 text-xl mt-4">
              Academic Requirements
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Pathways: Higher Secondary School Certificate with a minimum of 50% or O Levels Passed.</li>
              <li>
              Undergraduate courses: A Levels or HSCC with a minimum percentage of 60%.
              </li>
              <li>
              Postgraduate courses: a Bachelor degree from a recognized institution.
              </li>
              <li>Vocational Education and Training (VET): The requirements are entirely course-specific and there is nothing general about them. From Pakistan a student must have a Higher Secondary School Certificate.</li>
            </ul>

            <h3 className="font-semibold text-blue-900 text-xl mt-6">
              English Language Requirements
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Pathways: IELTS overall 5.5 with no band less than 5.0 or equivalent test i.e. PTE, TOEFL</li>
              <li>
              Undergraduate: IELTS Overall 6.0 with no band less than 5.5 or equivalent test i.e. PTE or TOEFL. Some courses have higher requirements like Nursing which requires an equivalent IELTS score of overall and each 7.0.
              </li>
              <li>Postgraduate: Most of the courses require an overall IELTS or equivalent score of 6.5 with no band less than 6.0. Some courses have higher requirements of overall and each 7.0 i.e. Nursing, Education, Teaching, Physiotherapy.</li>
            </ul>
          </>
        )}

        {activeTab === 'gs' && (
          <p className="text-lg">
           The Department of Home Affairs (DoHA) has placed additional responsibility onto Australian Universities to ensure their incoming international students are fully aware of and comply with all student visa conditions. So, all international students intended to apply for Australian Student visa must have genuine intentions of studying in Australia and must have adequate financial resources to meet their financial needs during their stay in Australia. As part of GS Assessment student has to show funds for first year of studies as part of visa requirements. This includes funds available in bank i.e. 1 year tuition fee plus 1 year living cost (AUD 29710) plus 1 year travel cost (AUD 2000).
          </p>
        )}
      </div>
    </div>
  );
}
