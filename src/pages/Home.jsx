import DemoSection from '../components/home/DemoSection'
import EveryStationSection from '../components/home/EveryStationSection'
import HeroSection from '../components/home/Herosection'
import HowItWorksSection from '../components/home/HowItWorksSection'
import TrustedSection from '../components/home/TrustedSection'

function Home() {
  return (
    <>
      <HeroSection />
      <TrustedSection />
      <HowItWorksSection />
      <EveryStationSection />
      <DemoSection />
    </>
  )
}

export default Home
