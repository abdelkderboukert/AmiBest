import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  category: string
  description: string
  imageUrl: string
}

export default function ProjectCard({ title, category, description, imageUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group project-card service-card">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 badge">{category}</Badge>
      </div>
      <CardContent className="p-4 blur-lg">
        <h3 className="font-bold text-lg mb-1 text-white">{title}</h3>
        <p className="text-white/70 text-sm mb-4">{description}</p>
        <Link href="#" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
          View Project Details
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
