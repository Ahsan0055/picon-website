'use client'
export default function StudyAustraliaSection() {
  return (
    <section className="bg-blue-100 py-16 px-6 md:px-16">
      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
        Study in Australia from Pakistan
      </h2>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
              The Pakistan Students Admission to Australian University:
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Admission to Australian universities from Pakistan has become increasingly popular due to flexible academic pathways and high-quality education. Universities provide internationally recognized degrees with modern campuses and industry-focused programs.
              <br /><br />
              The application process typically includes submission of academic transcripts, English proficiency scores (like IELTS), a statement of purpose, and recommendation letters.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
              Scholarships for Pakistani Students:
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Many Australian universities offer merit-based and need-based scholarships specifically for international students, including Pakistanis. These scholarships help reduce tuition costs and make studying abroad more accessible.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
            Working Permission for International Students:
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Long-term student visa holders in Australia are permitted to work 20 hours per week. There is no need for a separate residence or work permit. The Australian student visa acts as a work permit and grants them fundamental job rights, such as the right to a minimum wage. International students can choose from various part-time and full-time job opportunities in Australia, depending on their desired working hours.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-2">
            Benefits for Pakistani students:
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Since most scholarships are awarded based on academic merit, you must provide comprehensive details about your previous schooling and grades to study in Australia for free with a scholarship. English language standards are also required for specific scholarships.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
