
'use client'

import AboutUsSecOne from "@/components/AboutUsSecOne"
import AboutUsMission from "@/components/AboutUsMission"
import AboutUsGoalSec from "@/components/AboutUsGoalSec"
import FaqSection from "@/components/FaqSection"
import OurSuccessSection from "@/components/OurSuccessSection"



export default function ServicesPage() {
  return (
    <main>
      <AboutUsSecOne/>
      <AboutUsMission/>
      <AboutUsGoalSec/>
      <OurSuccessSection/>
      <FaqSection/>
    </main>
  )
}