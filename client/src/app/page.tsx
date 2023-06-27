import Navbar from '../components/layouts/Navbar'
import Carousel from '@/components/home/Hero'
import Services from '@/components/home/Services'
import SearchNFilter from '@/components/home/SearchNFilter'
import TutorCards from '@/components/tutors/TutorCards'
import Footer from '@/components/layouts/Footer'

export default function Home() {
  return (
    <main className="py-10">
      <Navbar />
      <Carousel />
      <Services />
      <SearchNFilter />
      <TutorCards />
      <Footer />
    </main>
  )
}
