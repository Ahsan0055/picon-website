'use client'

export default function StudyUsaSection() {
  return (
    <section className="bg-blue-100 py-16 px-6 md:px-16">
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
        Study in USA from Pakistan
      </h2>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
              Admission for Pakistani Students to U.S. Universities:
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Admission to U.S. universities is highly sought after by Pakistani students due to the country’s world-renowned institutions and flexible academic programs. Universities in the USA offer a wide range of majors, practical training, and globally recognized degrees.
              <br /><br />
              The application process typically includes academic transcripts, standardized test scores (like SAT, GRE, or GMAT), English proficiency scores (like IELTS or TOEFL), a personal statement, and recommendation letters.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
              Scholarships for Pakistani Students:
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Many U.S. universities offer need-based and merit-based scholarships for international students. Pakistani students can benefit from various financial aid options including institutional scholarships, government-funded programs like Fulbright, and private grants.
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
              International students in the U.S. are allowed to work on-campus up to 20 hours per week during semesters. Optional Practical Training (OPT) and Curricular Practical Training (CPT) also offer off-campus work opportunities related to a student's field of study, especially in STEM programs which can extend OPT up to 36 months.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
              Benefits for Pakistani Students:
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Studying in the U.S. offers Pakistani students access to cutting-edge research, diverse academic options, cultural diversity, and strong post-graduation employment prospects. U.S. degrees are widely respected worldwide, providing a solid foundation for a global career.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
