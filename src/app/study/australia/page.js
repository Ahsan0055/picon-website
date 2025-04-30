'use client'
// import AustraliaPage from '@/components/AustraliaPage'
import WhyAustraliaSection from '@/components/WhyAustraliaSection'
import StudyAustraliaSection from '@/components/StudyAustraliaSection'
import AustaliaoneSec from '@/components/AustaliaoneSec'
import TopPartners from '@/components/TopPartners'
import StudyTabs from '@/components/StudyTabs' 
import JourneySection from '@/components/JourneySection'
import FaqAusSec from '@/components/FaqAusSec'

export default function AustraliaStudyPage() {
  return (
    <div>
      <AustaliaoneSec/>
      <WhyAustraliaSection />
      <StudyAustraliaSection />
      <TopPartners />
      <StudyTabs />
      <JourneySection/>
      <FaqAusSec/>

    </div>
  )
}
