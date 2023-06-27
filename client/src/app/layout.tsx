import './globals.css'
import { lato } from '../utils/fonts'

export const metadata = {
  title: 'sensei - Find Your Personal Guide to Mastery and Success!',
  description: 'TutorME&apos;s mission is to change how the world learns together. tutorMe connects the public with professionals across all fields to find a tutor to their needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-primary text-secondary max-w-[1280px] mx-auto min-h-screen ${lato.className}`}>{children}</body>
    </html>
  )
}
