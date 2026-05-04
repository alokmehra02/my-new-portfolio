import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen } from 'lucide-react'

export function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>

        <Card className="border-border">
          <CardHeader>
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">
                  Bachelor of Technology - Electronics & Communication
                </h3>
                <p className="text-primary font-medium">Maulana Azad National Institute of Technology (MANIT), Bhopal</p>
                <p className="text-sm text-muted-foreground mt-1">August 2020 – May 2024</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <span className="text-foreground font-semibold">CGPA:</span>
              <Badge variant="secondary">7.81 / 10</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
