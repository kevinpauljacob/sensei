import Navbar from '../components/layouts/Navbar'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import SearchNFilter from '@/components/home/SearchNFilter'
import TutorCards from '@/components/tutors/TutorCards'
import Footer from '@/components/layouts/Footer'

export default function Home() {
  return (
    <main className="p-10">
      <Navbar />
      <Hero />
      <Services />
      <SearchNFilter />
      <TutorCards />
      <Footer />
    </main>
  )
}
