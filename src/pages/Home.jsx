import DemoSection from '../components/home/DemoSection'
import EveryStationSection from '../components/home/EveryStationSection'
import HeroSection from '../components/home/Herosection'
import HowItWorksSection from '../components/home/HowItWorksSection'
import LiveViewSection from '../components/home/LiveViewSection'
import ReviewsSection from '../components/home/ReviewsSection'
import TrustedSection from '../components/home/TrustedSection'
import Contact from './Contact'

function Home() {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <HowItWorksSection />
      <EveryStationSection />
      <LiveViewSection />
      <ReviewsSection />
      <DemoSection />
      <Contact />
    </>
  )
}

export default Home
