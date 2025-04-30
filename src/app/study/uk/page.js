import UkHeroSec from '@/components/UkHeroSec' // make sure this path is right
import { Divide } from 'lucide-react'
import WhyUkSection from '@/components/WhyUkSection'
import StudyUkSection from '@/components/StudyUkSection'
import TopPartners from '@/components/TopPartnersUk'
import StudyTabs from '@/components/StudyUkTabs'
import JourneySection from '@/components/JourneyUkSection'
import FaqUkSection from '@/components/FaqUkSection'
export default function CanadaPage() {
  return (
    <div>
      <UkHeroSec/>
      <WhyUkSection/>
      <StudyUkSection/>
      <TopPartners/>
      <StudyTabs/>
      <JourneySection/>
      <FaqUkSection/>

    </div>
  )
}