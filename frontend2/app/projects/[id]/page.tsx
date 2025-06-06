"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { ArrowLeft, Building2, Calendar, Clock, DollarSign, MapPin, Users, CheckCircle, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"

import { db } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"

interface ProjectDetails {
  id: string
  title: string
  category: string
  description: string
  imageUrl: string
  featured: boolean
  createdAt: any
  location?: string
  completionDate?: string
  duration?: string
  budget?: string
  teamSize?: string
  keyFeatures?: string[]
  challenges?: string
  solutions?: string
  results?: string
}

export default function ProjectDetailPage() {
  const params = useParams()
  const [project, setProject] = useState<ProjectDetails | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProject = async () => {
      if (!params.id) return

      try {
        setIsLoading(true)
        const projectRef = doc(db, "projects", params.id as string)
        const projectSnap = await getDoc(projectRef)

        if (projectSnap.exists()) {
          setProject({ id: projectSnap.id, ...projectSnap.data() } as ProjectDetails)
        } else {
          setError("Project not found")
        }
      } catch (error) {
        console.error("Error fetching project:", error)
        setError("Failed to load project details")
      } finally {
        setIsLoading(false)
      }
    }

    fetchProject()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md w-full p-8 service-card rounded-lg">
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error || "Project not found"}</AlertDescription>
          </Alert>
          <Button asChild>
            <Link href="/#projects">Return to Projects</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">StructureCraft</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/#projects" className="font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="/services" className="font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/#about" className="font-medium transition-colors hover:text-primary">
              About Us
            </Link>
            <Link href="/#contact" className="font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:flex">Get a Quote</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="py-6 border-b">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <Link href="/#projects" className="hover:text-foreground">
                Projects
              </Link>
              <span>/</span>
              <span className="text-foreground">{project.title}</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-8">
          <div className="container">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <Badge className="mb-4">{project.category}</Badge>
                <h1 className="text-4xl font-bold tracking-tight mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {project.completionDate && (
                    <div className="flex items-center gap-3">
                      <div className="service-icon-bg p-2 rounded-full">
                        <Calendar className="h-5 w-5" style={{ color: "#06141D" }} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Completed</p>
                        <p className="font-medium">{project.completionDate}</p>
                      </div>
                    </div>
                  )}

                  {project.duration && (
                    <div className="flex items-center gap-3">
                      <div className="service-icon-bg p-2 rounded-full">
                        <Clock className="h-5 w-5" style={{ color: "#06141D" }} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-medium">{project.duration}</p>
                      </div>
                    </div>
                  )}

                  {project.budget && (
                    <div className="flex items-center gap-3">
                      <div className="service-icon-bg p-2 rounded-full">
                        <DollarSign className="h-5 w-5" style={{ color: "#06141D" }} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Budget</p>
                        <p className="font-medium">{project.budget}</p>
                      </div>
                    </div>
                  )}

                  {project.teamSize && (
                    <div className="flex items-center gap-3">
                      <div className="service-icon-bg p-2 rounded-full">
                        <Users className="h-5 w-5" style={{ color: "#06141D" }} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Team Size</p>
                        <p className="font-medium">{project.teamSize}</p>
                      </div>
                    </div>
                  )}
                </div>

                <Button size="lg">Contact Us About This Project</Button>
              </div>

              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={project.imageUrl || "/placeholder.svg?height=500&width=700"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Project Overview</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  {project.challenges && (
                    <>
                      <h3 className="text-xl font-bold mb-4">Engineering Challenges</h3>
                      <p className="text-muted-foreground mb-6">{project.challenges}</p>
                    </>
                  )}

                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <>
                      <h3 className="text-xl font-bold mb-4">Key Features</h3>
                      <ul className="space-y-3 mb-6">
                        {project.keyFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "#06141D" }} />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {project.solutions && (
                    <>
                      <h3 className="text-xl font-bold mb-4">Our Solutions</h3>
                      <p className="text-muted-foreground mb-6">{project.solutions}</p>
                    </>
                  )}

                  {project.results && (
                    <>
                      <h3 className="text-xl font-bold mb-4">Results</h3>
                      <p className="text-muted-foreground mb-6">{project.results}</p>
                    </>
                  )}
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {project.location && (
                      <>
                        <div>
                          <h4 className="font-medium mb-2">Location</h4>
                          <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {project.location}
                          </p>
                        </div>
                        <Separator />
                      </>
                    )}

                    <div>
                      <h4 className="font-medium mb-2">Category</h4>
                      <p className="text-sm text-muted-foreground">{project.category}</p>
                    </div>

                    <Separator />

                    {project.completionDate && (
                      <>
                        <div>
                          <h4 className="font-medium mb-2">Completion Date</h4>
                          <p className="text-sm text-muted-foreground">{project.completionDate}</p>
                        </div>
                        <Separator />
                      </>
                    )}

                    {project.featured && (
                      <>
                        <div>
                          <h4 className="font-medium mb-2">Status</h4>
                          <Badge>Featured Project</Badge>
                        </div>
                        <Separator />
                      </>
                    )}

                    <div>
                      <h4 className="font-medium mb-2">Share</h4>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Share
                        </Button>
                        <Button variant="outline" size="sm">
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Interested in a Similar Project?</h2>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  Our team has the expertise to handle complex infrastructure projects. Contact us to discuss your
                  engineering needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    Schedule a Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                  >
                    View All Projects
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">StructureCraft</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Building tomorrow's infrastructure with precision and innovation.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="text-muted-foreground hover:text-foreground">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Structural Engineering
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Land Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Construction Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Infrastructure Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Project Planning
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <address className="not-italic text-muted-foreground space-y-2">
                <p>1234 Engineering Way, Suite 500</p>
                <p>Metropolis, CA 90001</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@structurecraft.com</p>
              </address>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} StructureCraft Engineering. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
