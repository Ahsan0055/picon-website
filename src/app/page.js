// import TopBar from '../components/TopBar'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import WhoWeAreSection from '@/components/WhoWeAreSection'
import OurServicesSection from '@/components/OurServicesSection'
import StudyDestination from '@/components/StudyDestination'
import Testimonials from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'
// import FooterSection from '@/components/FooterSection'
import FaqSection from '@/components/FaqSection'
import OurSuccessSection from '@/components/OurSuccessSection'
import KonpareWidget from '@/components/KonpareWidget'

export default function Home() {
  return (
     
    <div>
      {/* <TopBar/> */}
      {/* <Navbar/> */}
      
      <HeroSection />
      <WhoWeAreSection/>
      <OurServicesSection/>
      <StudyDestination/>
      <Testimonials/>
      <OurSuccessSection/>
      <FaqSection/>
      <ContactSection/>

      <KonpareWidget/>
      {/* <FooterSection/> */}
    </div>
         
        
   
  )
}
