'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface NavLink {
  name: string
  href: string
  id: string
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Certifications', href: '#certifications', id: 'certifications' },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = navLinks.map(link => ({
        id: link.id,
        element: document.getElementById(link.id),
      }))

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-primary/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Aalok Singh
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleClick(e, link.id)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium relative ${
                activeSection === link.id
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
              )}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
