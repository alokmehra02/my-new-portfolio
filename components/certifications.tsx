import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award } from 'lucide-react'

const certifications = [
  {
    title: 'Google Certified Professional Cloud Architect',
    issuer: 'Google Cloud Platform',
    year: 2024,
    description: 'Expert-level certification demonstrating deep knowledge of GCP services, cloud architecture, and infrastructure design.',
  },
  {
    title: 'Databricks Certified Generative AI Engineer Associate',
    issuer: 'Databricks',
    description: 'Certification validating expertise in building generative AI solutions using Databricks platform and tools.',
  },
]

const achievements = [
  {
    icon: '🏆',
    title: '300+ LeetCode Problems',
    description: 'Demonstrates strong problem-solving skills and algorithmic knowledge',
  },
  {
    icon: '📊',
    title: 'GeeksforGeeks Contributor',
    description: 'Active participation in community and technical content sharing',
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4">Certifications & Achievements</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Professional credentials and accomplishments reflecting continuous learning and technical excellence.
        </p>

        <div className="space-y-6 mb-12">
          {certifications.map((cert, idx) => (
            <Card key={idx} className="border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{cert.title}</h3>
                    <p className="text-primary font-medium text-sm">{cert.issuer}</p>
                    {cert.year && <Badge variant="secondary" className="mt-2">{cert.year}</Badge>}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground text-sm leading-relaxed">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Notable Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, idx) => (
              <Card key={idx} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{achievement.icon}</span>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
