import Link from 'next/link'
import { playfair } from "@/utils/fonts";

export default function Hero() {
  return (
    <article className="flex flex-col justify-center items-center py-24">
      <h2 className={`lg:text-6xl sm:text-5xl text-4xl text-center font-bold max-w-[800px] lg:mx-auto w-full ${playfair.className}`}>
        Find Your Personal Guide to <span className="underline decoration-accent-1">Mastery</span> and <span className="underline decoration-accent-1">Success</span>!
      </h2>
      <p className="text-lg text-center font-bold max-w-[600px] mt-5">
        Discover and hire diverse range of skilled tutors for personalized learning, unlocking your potential in any skill, right at your fingertips.
      </p>
      <div>
        <Link href="/"></Link>
        <Link href="/"></Link>
      </div>
    </article>
  )
}
