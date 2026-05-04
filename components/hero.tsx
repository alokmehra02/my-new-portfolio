import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 pb-12 md:pb-20">
      <div className="max-w-4xl">
        <div className="mb-6">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Aalok Singh Mehra
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium mb-2">
            Backend Software Developer
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Building scalable APIs, microservices, and cloud-native solutions. Passionate about system design, performance optimization, and crafting robust backend architectures.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <Button asChild variant="default" size="lg">
            <a href="#projects" className="flex items-center gap-2">
              View Projects
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:career.aalokmehra@gmail.com" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </Button>
        </div>

        <div className="flex gap-4 mt-8">
          <a
            href="https://linkedin.com/in/aalok-mehra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:career.aalokmehra@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
