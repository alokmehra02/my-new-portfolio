import { Badge } from '@/components/ui/badge'

const skillsData = {
  languages: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C++'],

  frameworks: ['FastAPI', 'Node.js', 'Fastify', 'Express.js', 'REST APIs'],

  aiVoice: [
    'LLM APIs',
    'Prompt Engineering',
    'Tool Calling',
    'ElevenLabs Voice AI',
    'Twilio',
  ],

  cloud: [
    'Google Cloud Platform (GCP)',
    'Pub/Sub',
    'Cloud Tasks',
    'Azure',
  ],

  databases: ['PostgreSQL', 'MongoDB', 'Redis'],

  devTools: [
    'Docker',
    'Kubernetes',
    'Git',
    'MQTT',
  ],

  concepts: [
    'System Design',
    'Event-Driven Architecture',
    'Microservices',
    'Real-time Systems',
    'OOP',
    'Data Structures & Algorithms',
    'Operating Systems',
  ],
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Skills & Expertise
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Specialized in AI-driven backend systems, real-time communication, and scalable cloud architectures.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs md:text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}