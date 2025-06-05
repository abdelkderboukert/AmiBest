import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Building2, Calendar, Clock, DollarSign, MapPin, Users, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ProjectDetailPage() {
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
              <span className="text-foreground">City Center Bridge</span>
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
                <Badge className="mb-4">Infrastructure</Badge>
                <h1 className="text-4xl font-bold tracking-tight mb-4">City Center Bridge</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  A landmark 500-meter suspension bridge connecting downtown areas, designed to accommodate both
                  vehicular traffic and pedestrian walkways while maintaining the city's architectural aesthetic.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Completed</p>
                      <p className="font-medium">March 2023</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">36 months</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Budget</p>
                      <p className="font-medium">$85M</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Team Size</p>
                      <p className="font-medium">25 engineers</p>
                    </div>
                  </div>
                </div>

                <Button size="lg">Contact Us About This Project</Button>
              </div>

              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="City Center Bridge"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Project Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Bridge construction phase 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Bridge construction phase 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Bridge construction phase 3"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Bridge aerial view"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Bridge pedestrian walkway"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Bridge night view"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
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
                  <p className="text-muted-foreground mb-6">
                    The City Center Bridge project represents a significant milestone in urban infrastructure
                    development. This iconic suspension bridge spans 500 meters across the metropolitan river,
                    connecting two major downtown districts and serving as both a functional transportation link and an
                    architectural landmark.
                  </p>

                  <h3 className="text-xl font-bold mb-4">Engineering Challenges</h3>
                  <p className="text-muted-foreground mb-6">
                    The project presented unique engineering challenges including seismic considerations, environmental
                    impact mitigation, and the need to maintain river traffic during construction. Our team developed
                    innovative solutions including advanced foundation systems and modular construction techniques.
                  </p>

                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        Six-lane vehicular capacity with dedicated bike lanes
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Elevated pedestrian walkways with scenic viewpoints</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Seismic isolation systems for earthquake resistance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        LED lighting system for enhanced nighttime visibility
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Environmental monitoring systems</span>
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mb-4">Sustainability Features</h3>
                  <p className="text-muted-foreground mb-6">
                    Environmental sustainability was a core consideration throughout the design and construction
                    process. The bridge incorporates renewable energy systems, uses recycled materials where possible,
                    and includes features to minimize impact on local wildlife and water quality.
                  </p>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Location</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Downtown Metropolitan Area
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-2">Bridge Type</h4>
                      <p className="text-sm text-muted-foreground">Cable-stayed suspension bridge</p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-2">Total Length</h4>
                      <p className="text-sm text-muted-foreground">500 meters</p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-2">Width</h4>
                      <p className="text-sm text-muted-foreground">32 meters</p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-2">Clearance Height</h4>
                      <p className="text-sm text-muted-foreground">65 meters above water</p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-2">Materials</h4>
                      <p className="text-sm text-muted-foreground">High-strength steel, reinforced concrete</p>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="font-medium mb-2">Design Life</h4>
                      <p className="text-sm text-muted-foreground">100+ years</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Awards & Recognition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="text-sm">
                        <strong>Excellence in Infrastructure Design</strong>
                        <br />
                        <span className="text-muted-foreground">National Engineering Society, 2023</span>
                      </li>
                      <li className="text-sm">
                        <strong>Sustainable Construction Award</strong>
                        <br />
                        <span className="text-muted-foreground">Green Building Council, 2023</span>
                      </li>
                      <li className="text-sm">
                        <strong>Outstanding Civil Engineering Achievement</strong>
                        <br />
                        <span className="text-muted-foreground">State Engineering Board, 2023</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Related Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Harbor Expansion"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 left-3">Infrastructure</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">Harbor Expansion</h3>
                  <p className="text-muted-foreground text-sm mb-4">Major port expansion increasing capacity by 40%</p>
                  <Link href="#" className="text-sm font-medium text-primary hover:underline">
                    View Project Details →
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Metro Transit Hub"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 left-3">Infrastructure</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">Metro Transit Hub</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Modern transportation center with integrated services
                  </p>
                  <Link href="#" className="text-sm font-medium text-primary hover:underline">
                    View Project Details →
                  </Link>
                </CardContent>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Waterfront Promenade"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge className="absolute top-3 left-3">Infrastructure</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">Waterfront Promenade</h3>
                  <p className="text-muted-foreground text-sm mb-4">Scenic walkway with flood protection systems</p>
                  <Link href="#" className="text-sm font-medium text-primary hover:underline">
                    View Project Details →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
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
