"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Building2, Search, Filter, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { db } from "@/lib/firebase"
import { collection, getDocs, query, orderBy } from "firebase/firestore"

interface Project {
  id: string
  title: string
  category: string
  description: string
  imageUrl: string
  featured: boolean
  createdAt: any
  completionDate?: string
  location?: string
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  // Fetch projects from Firebase
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true)
        const projectsQuery = query(collection(db, "projects"), orderBy("createdAt", "desc"))
        const querySnapshot = await getDocs(projectsQuery)

        const fetchedProjects: Project[] = []
        querySnapshot.forEach((doc) => {
          fetchedProjects.push({ id: doc.id, ...doc.data() } as Project)
        })

        setProjects(fetchedProjects)
        setFilteredProjects(fetchedProjects)
      } catch (error) {
        console.error("Error fetching projects:", error)
        setError("Failed to load projects. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Filter and search projects
  useEffect(() => {
    let filtered = projects

    // Filter by category
    if (selectedCategory !== "all") {
      if (selectedCategory === "featured") {
        filtered = filtered.filter((project) => project.featured)
      } else {
        filtered = filtered.filter((project) => project.category.toLowerCase() === selectedCategory.toLowerCase())
      }
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (project.location && project.location.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Sort projects
    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.createdAt?.toDate()).getTime() - new Date(a.createdAt?.toDate()).getTime())
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => new Date(a.createdAt?.toDate()).getTime() - new Date(b.createdAt?.toDate()).getTime())
    } else if (sortBy === "alphabetical") {
      filtered.sort((a, b) => a.title.localeCompare(b.title))
    }

    setFilteredProjects(filtered)
  }, [projects, searchQuery, selectedCategory, sortBy])

  const categories = ["all", "featured", "infrastructure", "commercial", "residential"]
  const categoryLabels = {
    all: "All Projects",
    featured: "Featured",
    infrastructure: "Infrastructure",
    commercial: "Commercial",
    residential: "Residential",
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-white">StructureCraft</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium transition-colors hover:text-primary text-white/70">
              Home
            </Link>
            <Link href="/projects" className="font-medium transition-colors hover:text-primary text-white">
              Projects
            </Link>
            <Link href="/services" className="font-medium transition-colors hover:text-primary text-white/70">
              Services
            </Link>
            <Link href="/about" className="font-medium transition-colors hover:text-primary text-white/70">
              About Us
            </Link>
            <Link href="/#contact" className="font-medium transition-colors hover:text-primary text-white/70">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:flex bg-primary hover:bg-primary/90">Get a Quote</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="py-6 border-b border-white/10">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Projects</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 md:py-24 hero-gradient">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
                Our Project Portfolio
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Explore our comprehensive collection of engineering projects spanning infrastructure, commercial, and
                residential developments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-background hover:bg-gray-100">
                  View Featured Projects
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-white/5">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-8">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                  <Input
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filter */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {categoryLabels[category as keyof typeof categoryLabels]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="alphabetical">A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="text-white/70 text-sm">
                {filteredProjects.length} of {projects.length} projects
              </div>
            </div>

            {/* Category Tabs */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="mb-8 tabs-list">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="tabs-trigger">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container">
            {error && (
              <Alert variant="destructive" className="mb-8">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 text-primary animate-spin" />
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-white/70 text-lg mb-4">
                  {searchQuery || selectedCategory !== "all"
                    ? "No projects found matching your criteria."
                    : "No projects available at the moment."}
                </p>
                {(searchQuery || selectedCategory !== "all") && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedCategory("all")
                    }}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-white/5">
          <div className="container">
            <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  Our experienced team is ready to tackle your next engineering challenge. Contact us to discuss your
                  project requirements and get a personalized consultation.
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
                    View Our Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-white">StructureCraft</span>
              </div>
              <p className="text-white/70 mb-4">Building tomorrow's infrastructure with precision and innovation.</p>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white/70 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-white/70 hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/70 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/70 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-white/70 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Structural Engineering
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Land Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Construction Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Infrastructure Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Project Planning
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-white">Contact</h4>
              <address className="not-italic text-white/70 space-y-2">
                <p>1234 Engineering Way, Suite 500</p>
                <p>Metropolis, CA 90001</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@structurecraft.com</p>
              </address>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} StructureCraft Engineering. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-white/70 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group service-card">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.imageUrl || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className="bg-primary text-white">{project.category}</Badge>
          {project.featured && <Badge className="bg-yellow-500/80 text-white">Featured</Badge>}
        </div>
        {project.completionDate && (
          <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {project.completionDate}
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-2 text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-white/70 text-sm mb-4 line-clamp-3">{project.description}</p>
        {project.location && (
          <p className="text-white/50 text-xs mb-4 flex items-center gap-1">
            <span>📍</span>
            {project.location}
          </p>
        )}
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          View Project Details
          <span className="ml-1">→</span>
        </Link>
      </CardContent>
    </Card>
  )
}
