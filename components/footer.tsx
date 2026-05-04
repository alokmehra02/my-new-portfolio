import { Separator } from '@/components/ui/separator'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:career.aalokmehra@gmail.com"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  career.aalokmehra@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+916266544765"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +91 626 654 4765
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/aalok-mehra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {currentYear} Aalok Singh Mehra. All rights reserved.</p>
          <p>Crafted with code and passion.</p>
        </div>
      </div>
    </footer>
  )
}
