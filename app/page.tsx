import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Combos from '@/components/Combos'
import UpsellStrip from '@/components/UpsellStrip'
import MenuSection from '@/components/MenuSection'
import LTOSection from '@/components/LTOSection'
import CTABand from '@/components/CTABand'
import VisitSection from '@/components/VisitSection'
import Footer from '@/components/Footer'
import OrderFloat from '@/components/OrderFloat'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Combos />
      <UpsellStrip />
      <MenuSection />
      <LTOSection />
      <CTABand />
      <VisitSection />
      <Footer />
      <OrderFloat />
    </>
  )
}
