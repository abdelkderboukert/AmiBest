import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export default function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <Card className="service-card">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-white/20 mb-4" />
        <p className="mb-6 italic text-white">{quote}</p>
        <div>
          <p className="font-medium text-white">{author}</p>
          <p className="text-sm text-white/70">{company}</p>
        </div>
      </CardContent>
    </Card>
  )
}
