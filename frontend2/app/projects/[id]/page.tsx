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
          setError("Projet non trouvé")
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du projet:", error)
        setError("Échec du chargement des détails du projet")
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
        <div className="max-w-md w-full p-8 service-card rounded-lg shadow-xl border border-destructive/20 bg-card">
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error || "Projet non trouvé"}</AlertDescription>
          </Alert>
          <Button asChild className="w-full">
            <Link href="/#projects">Retour aux Projets</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 transition-transform hover:scale-105 duration-300 cursor-pointer">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">AmiBest</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium transition-colors hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100">
              Accueil
            </Link>
            <Link href="/#projects" className="font-medium transition-colors hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100">
              Projets
            </Link>
            <Link href="/services" className="font-medium transition-colors hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100">
              Services
            </Link>
            <Link href="/#about" className="font-medium transition-colors hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100">
              À propos
            </Link>
            <Link href="/#contact" className="font-medium transition-colors hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform hover:after:origin-bottom-left hover:after:scale-x-100">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:flex shadow-md hover:shadow-lg transition-all">Obtenir un devis</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="py-4 md:py-6 border-b bg-muted/20">
          <div className="container">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">
                Accueil
              </Link>
              <span>/</span>
              <Link href="/#projects" className="hover:text-primary transition-colors">
                Projets
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">{project.title}</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-background to-muted/10">
          <div className="container">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
              Retour aux Projets
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="flex flex-col justify-center animate-in fade-in slide-in-from-left-4 duration-700">
                <Badge className="mb-4 w-fit px-3 py-1 shadow-sm">{project.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-[600px]">{project.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8 bg-card p-6 rounded-2xl shadow-sm border">
                  {project.completionDate && (
                    <div className="flex items-center gap-4 group">
                      <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Terminé</p>
                        <p className="font-medium text-foreground">{project.completionDate}</p>
                      </div>
                    </div>
                  )}

                  {project.duration && (
                    <div className="flex items-center gap-4 group">
                      <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Durée</p>
                        <p className="font-medium text-foreground">{project.duration}</p>
                      </div>
                    </div>
                  )}

                  {project.budget && (
                    <div className="flex items-center gap-4 group">
                      <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <DollarSign className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Budget</p>
                        <p className="font-medium text-foreground">{project.budget}</p>
                      </div>
                    </div>
                  )}

                  {project.teamSize && (
                    <div className="flex items-center gap-4 group">
                      <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Équipe</p>
                        <p className="font-medium text-foreground">{project.teamSize}</p>
                      </div>
                    </div>
                  )}
                </div>

                <Button size="lg" className="w-fit shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all text-base px-8 h-12">
                  Contactez-nous à propos de ce projet
                </Button>
              </div>

              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-4 duration-700">
                <Image
                  src={project.imageUrl || "/placeholder.svg?height=600&width=800"}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                  priority
                />
                <div className="absolute inset-0 border-2 border-primary/10 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:col-span-2">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2 className="text-3xl font-extrabold tracking-tight mb-8">Aperçu du Projet</h2>
                  <p className="text-muted-foreground mb-10 leading-relaxed text-lg">{project.description}</p>

                  {project.challenges && (
                    <div className="mb-10 bg-muted/30 p-8 rounded-2xl border border-muted">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="bg-destructive/10 text-destructive p-2 rounded-lg">
                          <CheckCircle className="h-5 w-5" />
                        </span>
                        Défis Techniques
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
                    </div>
                  )}

                  {project.solutions && (
                    <div className="mb-10 bg-primary/5 p-8 rounded-2xl border border-primary/10">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="bg-primary/20 text-primary p-2 rounded-lg">
                          <CheckCircle className="h-5 w-5" />
                        </span>
                        Nos Solutions
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{project.solutions}</p>
                    </div>
                  )}

                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold mb-6">Caractéristiques Clés</h3>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {project.keyFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-4 bg-background border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <CheckCircle className="h-6 w-6 mt-0.5 flex-shrink-0 text-primary" />
                            <span className="text-foreground font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.results && (
                    <div className="mb-10 bg-green-500/5 p-8 rounded-2xl border border-green-500/20">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="bg-green-500/20 text-green-600 dark:text-green-400 p-2 rounded-lg">
                          <CheckCircle className="h-5 w-5" />
                        </span>
                        Résultats
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{project.results}</p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Card className="sticky top-24 shadow-xl border-muted/60 overflow-hidden">
                  <div className="h-2 w-full bg-gradient-to-r from-primary to-primary/60"></div>
                  <CardHeader className="bg-muted/10 pb-6 border-b">
                    <CardTitle className="text-2xl">Spécifications du Projet</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 pt-6">
                    {project.location && (
                      <div className="group">
                        <h4 className="font-semibold text-foreground mb-1">Emplacement</h4>
                        <p className="text-base text-muted-foreground flex items-center gap-2 bg-muted/50 p-3 rounded-lg border group-hover:border-primary/30 transition-colors">
                          <MapPin className="h-5 w-5 text-primary" />
                          {project.location}
                        </p>
                      </div>
                    )}

                    <div className="group">
                      <h4 className="font-semibold text-foreground mb-1">Catégorie</h4>
                      <p className="text-base text-muted-foreground bg-muted/50 p-3 rounded-lg border group-hover:border-primary/30 transition-colors">
                        {project.category}
                      </p>
                    </div>

                    {project.completionDate && (
                      <div className="group">
                        <h4 className="font-semibold text-foreground mb-1">Date d'achèvement</h4>
                        <p className="text-base text-muted-foreground bg-muted/50 p-3 rounded-lg border group-hover:border-primary/30 transition-colors">
                          {project.completionDate}
                        </p>
                      </div>
                    )}

                    {project.featured && (
                      <div className="pt-2">
                        <h4 className="font-semibold text-foreground mb-3">Statut</h4>
                        <Badge className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20 hover:bg-yellow-500/20 text-sm px-4 py-1.5 cursor-default">
                          Projet en vedette ⭐
                        </Badge>
                      </div>
                    )}

                    <Separator className="my-6" />

                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Actions</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors">
                          Partager
                        </Button>
                        <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors">
                          PDF
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
        <section className="py-20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="container relative z-10">
            <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Intéressé par un projet similaire ?</h2>
                <p className="text-lg md:text-xl mb-10 text-primary-foreground/90 leading-relaxed">
                  Notre équipe possède l'expertise nécessaire pour gérer des projets d'infrastructure complexes. Contactez-nous pour discuter de vos besoins en ingénierie.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Button size="lg" variant="secondary" className="shadow-xl text-lg px-8 h-14 hover:scale-105 transition-transform">
                    Planifier une consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-primary transition-colors text-lg px-8 h-14"
                  >
                    Voir Tous les Projets
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40 pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">AmiBest</span>
              </div>
              <p className="text-muted-foreground leading-relaxed pr-4">
                Construire l'infrastructure de demain avec précision et innovation.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Liens Rapides</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    Projets
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    Ingénierie Structurelle
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    Aménagement du Territoire
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    Gestion de Construction
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    Conception d'Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    Planification de Projet
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <address className="not-italic text-muted-foreground space-y-4">
                <p className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>1234 Engineering Way, Suite 500<br />Metropolis, CA 90001</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold text-foreground shrink-0">Tél:</span> 
                  (555) 123-4567
                </p>
                <p className="flex items-center gap-3">
                  <span className="font-semibold text-foreground shrink-0">Email:</span> 
                  info@amibest.com
                </p>
              </address>
            </div>
          </div>

          <div className="border-t border-border/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-medium">
              © {new Date().getFullYear()} AmiBest. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Conditions de Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
