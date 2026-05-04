'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

interface Project {
  id: string
  title: string
  description: string
  fullDescription?: string
  technologies: string[]
  highlights: string[]
  links?: {
    github?: string
    demo?: string
  }
}

const projects: Project[] = [
  {
    id: 'multi-agent-chatbot',
    title: 'Multi-Agent Chatbot Platform',
    description: 'Real-time conversational system with multiple specialized AI agents',
    fullDescription: 'A sophisticated backend platform enabling real-time conversations between users and multiple specialized AI agents, with advanced memory management and context awareness.',
    technologies: ['FastAPI', 'Python', 'MySQL', 'SQLAlchemy', 'OpenAI GPT', 'Docker'],
    highlights: [
      'Architected backend using FastAPI, MySQL, & SQLAlchemy for real-time conversational flows',
      'Implemented modular agent framework with routing logic for specialized agents (general, memory, context, follow-up)',
      'Designed conversation memory management system enabling context-aware responses',
      'Developed end-to-end CRUD operations with Alembic migrations',
      'Containerized application for production deployment',
    ],
    links: {
      github: '#',
      demo: '#',
    },
  },
]

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Showcase of key projects demonstrating technical depth and problem-solving abilities.
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="border-border hover:border-primary/50 transition-all cursor-pointer"
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
            >
              <CardHeader>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </CardHeader>

              {expandedId === project.id && (
                <CardContent className="space-y-6">
                  {project.fullDescription && (
                    <p className="text-foreground text-sm leading-relaxed">{project.fullDescription}</p>
                  )}

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-foreground flex gap-3">
                          <span className="text-primary font-bold">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.links && (
                    <div className="flex gap-3 pt-2">
                      {project.links.github && (
                        <Button asChild size="sm" variant="outline">
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.links.demo && (
                        <Button asChild size="sm" variant="outline">
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
