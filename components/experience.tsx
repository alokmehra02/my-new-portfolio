import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const experiences = [
  {
    role: 'Associate Software Developer - Backend',
    company: 'Tudip Technologies',
    duration: 'Sep 2024 – Present',
    project: 'VoXgent.AI — Conversational AI Voice Platform (In-house Product)',
    description: [
      'Led production integration of ElevenLabs Voice AI as the primary voice engine, handling 500+ concurrent real-time calls with stable latency and high audio quality.',
      'Designed and built an outbound campaign scheduler on GCP using Pub/Sub and Cloud Tasks, supporting fixed-time and appointment-based campaigns with retry and rescheduling logic.',
      'Implemented real-time human transfer and live call summarization using Twilio webhooks, improving enterprise agent handoff quality.',
      'Developed 6+ enterprise integrations including Salesforce CRM, Canvas EMR, Google Sheets, and automated SMS/WhatsApp workflows.',
      'Engineered LLM tool-calling logic, prompt workflows, and backend APIs as a core contributor in a 3-member team building a production-grade AI platform.',
    ],
    tech: [
      'Python',
      'FastAPI',
      'GCP',
      'Pub/Sub',
      'Cloud Tasks',
      'Twilio',
      'ElevenLabs',
      'PostgreSQL',
      'Redis',
      'LLMs',
    ],
  },
  {
    role: 'Associate Software Developer - Backend',
    company: 'Tudip Technologies',
    duration: 'Sep 2024 – May 2025',
    project: 'Europa Locks — Smart Lock Ecosystem (Client Project)',
    description: [
      'Engineered a scalable API Gateway consolidating 8+ microservices with authentication, rate limiting, and observability.',
      'Improved system performance by ~40% using Redis caching, pagination, and optimized inter-service communication.',
      'Built a real-time IoT backend using MQTT with TLS encryption and Agora video streaming for remote access control.',
      'Implemented RBAC, Razorpay subscription billing, and Firebase Cloud Messaging supporting 10,000+ users.',
      'Developed admin dashboards for analytics including user activity, feature usage, and device monitoring.',
    ],
    tech: [
      'Node.js',
      'Fastify',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'MQTT',
      'Azure',
      'Razorpay',
      'Firebase',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Professional Experience
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Backend developer specializing in AI systems, real-time architectures, and scalable cloud-native platforms.
        </p>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.duration}</p>
                    <p className="text-sm text-muted-foreground italic mt-1">{exp.project}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-foreground flex gap-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.tech.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}