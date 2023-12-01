import Section2 from '@/components/page-sections/Section2'
import HeroSection from '@/components/HeroSection'
import Section3 from '@/components/page-sections/Section3'
import Section4 from '@/components/page-sections/Section4'
import Section5 from '@/components/page-sections/Section5'
import Section6 from '@/components/page-sections/Section6'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* footer here */}
      <Footer />
    </main >
  )
}
