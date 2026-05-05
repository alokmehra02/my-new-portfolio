import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Education } from '@/components/education'
import { Certifications } from '@/components/certifications'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { AnimatedBackground } from '@/components/animated-background'

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 min-h-screen text-foreground pt-20">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Footer />
      </main>
    </>
  )
}
