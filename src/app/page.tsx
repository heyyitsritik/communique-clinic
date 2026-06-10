import Navbar       from '@/components/Navbar'
import Hero          from '@/components/Hero'
import About         from '@/components/About'
import WhyUs         from '@/components/WhyUs'
import Services      from '@/components/Services'
import Timings       from '@/components/Timings'
import Testimonials  from '@/components/Testimonials'
import Contact       from '@/components/Contact'
import Footer        from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Timings />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
