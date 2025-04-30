'use client'

export default function StudyCanadaSection() {
  return (
    <section className="bg-blue-100 py-16 px-6 md:px-16">
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
        Study in Canada from Pakistan
      </h2>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
              Pakistani Students Admission to Canadian Institutions:
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Admission to Canadian colleges and universities from Pakistan has seen a significant rise due to Canada's reputation for academic excellence and inclusiveness. Institutions offer globally recognized degrees and career-oriented programs across diverse fields.
              <br /><br />
              The application process generally includes academic transcripts, English or French proficiency scores (like IELTS, TOEFL, or TEF), a statement of purpose, and reference letters. Some programs may also require a portfolio or entrance exam.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
              Scholarships for Pakistani Students:
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Numerous Canadian institutions and government programs offer scholarships and financial aid for international students, including those from Pakistan. These include merit-based, need-based, and research-specific scholarships aimed at supporting students throughout their studies.
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
              International students in Canada on a valid study permit can work up to 20 hours per week during academic sessions and full-time during scheduled breaks. A separate work permit is not required. Graduates may also qualify for a Post-Graduation Work Permit (PGWP), allowing them to gain valuable Canadian work experience.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
              Benefits for Pakistani Students:
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Canada offers a high standard of living, a diverse and welcoming society, and strong pathways to permanent residency. Pakistani students benefit from cultural familiarity, access to community support, and ample opportunities for academic and career growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
