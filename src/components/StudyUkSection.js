'use client'
export default function StudyUKSection() {
  return (
    <section className="bg-blue-100 py-16 px-6 md:px-16">
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
        Study in the United Kingdom from Pakistan
      </h2>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
              Admission to UK Universities for Pakistani Students:
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              The United Kingdom offers a wide range of world-renowned universities that welcome international students, including those from Pakistan. Admission requirements generally include academic transcripts, proof of English language proficiency (such as IELTS or TOEFL), a personal statement, and recommendation letters.
              <br /><br />
              UK universities are known for their academic excellence, research opportunities, and a strong global reputation. Flexible program structures allow students to tailor their education according to career goals.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
              Scholarships for Pakistani Students:
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              UK universities and government programs offer numerous scholarships for international students, including Pakistanis. These scholarships are often merit-based or need-based and can significantly reduce tuition fees and living expenses, making studying in the UK more affordable.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
              Work Opportunities for International Students:
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              International students in the UK are allowed to work up to 20 hours per week during term time and full-time during holidays. This provides valuable work experience and helps with living expenses. The UK student visa automatically includes work rights—no separate work permit is required.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
              Benefits for Pakistani Students:
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Studying in the UK offers a prestigious qualification that’s recognized globally, along with access to cutting-edge facilities, career support services, and cultural diversity. Scholarships, a safe environment, and the chance to explore Europe add further appeal to UK education.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
