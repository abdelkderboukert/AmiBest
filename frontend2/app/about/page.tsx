import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Award,
  GraduationCap,
  Briefcase,
  MapPin,
  Users,
  CheckCircle,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TeamMember from "@/components/team-member";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">AmiBest</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/#projects"
              className="font-medium transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="font-medium transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="font-medium transition-colors hover:text-primary text-primary"
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="font-medium transition-colors hover:text-primary"
            >
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
              <span className="text-foreground">About Us</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative hero-gradient text-white">
          <div className="absolute inset-0 z-0">
            {/* <Image
              src="/placeholder.svg?height=600&width=1600"
              alt="Engineering team at work"
              fill
              className="object-cover opacity-20"
              priority
            /> */}
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Building Excellence Since 2017
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                AmiBest is a team of dedicated engineers, designers, and project
                managers committed to delivering innovative and sustainable
                engineering solutions.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                  <Award className="h-8 w-8 text-white" />
                  <div>
                    <p className="text-2xl font-bold">6+</p>
                    <p className="text-sm">Years Experience</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                  <Users className="h-8 w-8 text-white" />
                  <div>
                    <p className="text-2xl font-bold">5+</p>
                    <p className="text-sm">Professional Engineers</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                  <Building2 className="h-8 w-8 text-white" />
                  <div>
                    <p className="text-2xl font-bold">20+</p>
                    <p className="text-sm">Projects Completed</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                  <Award className="h-8 w-8 text-white" />
                  <div>
                    <p className="text-2xl font-bold">18</p>
                    <p className="text-sm">Industry Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Our Story
                </h2>
                <p className="text-lg mb-6">
                  Founded in 2017 by Amirat mohamed, AmiBest began as a small
                  structural engineering firm with a vision to transform the
                  built environment through innovative design and sustainable
                  practices.
                </p>
                <p className="text-muted-foreground mb-6">
                  What started as a team of five engineers working from a small
                  office has grown into a multidisciplinary firm with over 45
                  professional engineers. Our growth has been driven by our
                  commitment to excellence, our collaborative approach, and our
                  ability to tackle complex engineering challenges.
                </p>
                <p className="text-muted-foreground mb-6">
                  Today, AmiBest is recognized as a leader in civil engineering,
                  known for delivering projects that balance technical
                  innovation, environmental responsibility, and community needs.
                  From iconic bridges to sustainable commercial developments,
                  our portfolio showcases our versatility and expertise.
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Sarah Johnson"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold">Amirat Mohamed</p>
                    <p className="text-sm text-muted-foreground">
                      Co-founder & Principal Engineer
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <Image
                  src="/img/about.jpg"
                  alt="Company history"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                These principles guide our work and define our approach to every
                project we undertake
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6" style={{ color: "#06141D" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-muted-foreground">
                    We are committed to delivering the highest quality in
                    everything we do, from design to execution.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6" style={{ color: "#06141D" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of teamwork and partnership, working
                    closely with clients and stakeholders.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <CheckCircle
                      className="h-6 w-6"
                      style={{ color: "#06141D" }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Integrity</h3>
                  <p className="text-muted-foreground">
                    We uphold the highest ethical standards in our business
                    practices and professional relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <GraduationCap
                      className="h-6 w-6"
                      style={{ color: "#06141D" }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously seek new ideas and approaches to solve
                    complex engineering challenges.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6" style={{ color: "#06141D" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Reliability</h3>
                  <p className="text-muted-foreground">
                    We deliver on our promises, meeting deadlines and exceeding
                    expectations consistently.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Briefcase
                      className="h-6 w-6"
                      style={{ color: "#06141D" }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                  <p className="text-muted-foreground">
                    We prioritize environmentally responsible design and
                    construction practices in all our projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                Our diverse team of experts brings together decades of
                experience in various engineering disciplines
              </p>
            </div>

            <Tabs defaultValue="leadership" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="leadership">Leadership</TabsTrigger>
                  <TabsTrigger value="engineering">Engineering</TabsTrigger>
                  <TabsTrigger value="project-management">
                    Project Management
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="leadership" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <TeamMember
                    name="Sarah Johnson"
                    role="Principal Engineer & Co-founder"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Michael Chen"
                    role="Structural Director & Co-founder"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="David Rodriguez"
                    role="Chief Project Manager"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Aisha Patel"
                    role="Environmental Division Head"
                    imageUrl="/img/profil.jpg"
                  />
                </div>
              </TabsContent>

              <TabsContent value="engineering" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <TeamMember
                    name="James Wilson"
                    role="Senior Structural Engineer"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Elena Gonzalez"
                    role="Transportation Engineer"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Robert Kim"
                    role="Geotechnical Engineer"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Priya Singh"
                    role="Water Resources Engineer"
                    imageUrl="/img/profil.jpg"
                  />
                </div>
              </TabsContent>

              <TabsContent value="project-management" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <TeamMember
                    name="Thomas Wright"
                    role="Senior Project Manager"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Sophia Lee"
                    role="Construction Coordinator"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Marcus Johnson"
                    role="Quality Assurance Manager"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Olivia Martinez"
                    role="Client Relations Manager"
                    imageUrl="/img/profil.jpg"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Key milestones in our company's history that have shaped who we
                are today
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

              {/* Timeline items */}
              <div className="space-y-24">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12">
                      <h3 className="text-2xl font-bold mb-2">2017</h3>
                      <h4 className="text-xl font-medium mb-3">
                        Company Founded
                      </h4>
                      <p className="text-muted-foreground">
                        Amirat mohamed establish AmiBest with a team of five
                        engineers, focusing on structural design for commercial
                        buildings.
                      </p>
                    </div>
                    <div className="md:pl-12">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Company founding"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12 md:order-1 order-2">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="First major project"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:pl-12 md:order-2 order-1">
                      <h3 className="text-2xl font-bold mb-2">2020</h3>
                      <h4 className="text-xl font-medium mb-3">
                        First Major Infrastructure Project
                      </h4>
                      <p className="text-muted-foreground">
                        Completion of the Westside Bridge project marks our
                        expansion into public infrastructure, earning the firm
                        its first industry award for innovation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12">
                      <h3 className="text-2xl font-bold mb-2">2021</h3>
                      <h4 className="text-xl font-medium mb-3">
                        Expansion & New Headquarters
                      </h4>
                      <p className="text-muted-foreground">
                        With a growing team of 5 engineers, we move into our
                        current headquarters
                      </p>
                    </div>
                    <div className="md:pl-12">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="New headquarters"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12 md:order-1 order-2">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Sustainability initiative"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:pl-12 md:order-2 order-1">
                      <h3 className="text-2xl font-bold mb-2">2018</h3>
                      <h4 className="text-xl font-medium mb-3">
                        Sustainability Initiative
                      </h4>
                      <p className="text-muted-foreground">
                        Launch of our Green Engineering division, focusing on
                        sustainable design practices and environmentally
                        responsible construction methods.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12">
                      <h3 className="text-2xl font-bold mb-2">2025</h3>
                      <h4 className="text-xl font-medium mb-3">
                        25th Anniversary & Global Projects
                      </h4>
                      <p className="text-muted-foreground">
                        Celebrating 8 years of excellence with the completion of
                        our first international project.
                      </p>
                    </div>
                    <div className="md:pl-12">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="25th anniversary"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Affiliations */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Certifications & Affiliations
              </h2>
              <p className="text-lg text-muted-foreground">
                We maintain the highest standards through professional
                certifications and industry partnerships
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Certification 1"
                    width={60}
                    height={60}
                  />
                </div>
                <h4 className="font-bold mb-1">LEED Certified</h4>
                <p className="text-sm text-muted-foreground">
                  Leadership in Energy and Environmental Design
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center bg-t justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Certification 2"
                    width={60}
                    height={60}
                  />
                </div>
                <h4 className="font-bold mb-1">ISO 9001</h4>
                <p className="text-sm text-muted-foreground">
                  Quality Management Systems
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Certification 3"
                    width={60}
                    height={60}
                  />
                </div>
                <h4 className="font-bold mb-1">ASCE Member</h4>
                <p className="text-sm text-muted-foreground">
                  American Society of Civil Engineers
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Certification 4"
                    width={60}
                    height={60}
                  />
                </div>
                <h4 className="font-bold mb-1">PE Licensed</h4>
                <p className="text-sm text-muted-foreground">
                  Professional Engineer Certification
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-6">Industry Partners</h3>
              <div className="flex flex-wrap justify-center gap-12">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Partner 1"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Partner 2"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Partner 3"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Partner 4"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Partner 5"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Locations
              </h2>
              <p className="text-lg text-muted-foreground">
                With offices in three major cities, we're positioned to serve
                clients across the region
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6" style={{ color: "#06141D" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Headquarters</h3>
                  <p className="text-muted-foreground mb-4">
                    1234 Engineering Way, Suite 500
                    <br />
                    Metropolis, CA 90001
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Email:</strong> info@structurecraft.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6" style={{ color: "#06141D" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">East Coast Office</h3>
                  <p className="text-muted-foreground mb-4">
                    567 Harbor Boulevard
                    <br />
                    Eastport, NY 10023
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Phone:</strong> (555) 234-5678
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Email:</strong> eastcoast@structurecraft.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6" style={{ color: "#06141D" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Midwest Office</h3>
                  <p className="text-muted-foreground mb-4">
                    890 Central Avenue, Floor 12
                    <br />
                    Lakeside, IL 60601
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Phone:</strong> (555) 345-6789
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Email:</strong> midwest@structurecraft.com
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/img/city.jpg"
                alt="Office locations map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Careers */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Join Our Team
                </h2>
                <p className="text-lg mb-6">
                  We're always looking for talented individuals who share our
                  passion for engineering excellence and innovation. Join our
                  team and be part of projects that shape the future of our
                  built environment.
                </p>
                <p className="text-muted-foreground mb-6">
                  At StructureCraft, we offer competitive compensation,
                  professional development opportunities, and a collaborative
                  work environment that fosters growth and creativity.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Professional Development</h4>
                      <p className="text-sm text-muted-foreground">
                        Continuous learning opportunities and career advancement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Work-Life Balance</h4>
                      <p className="text-sm text-muted-foreground">
                        Flexible scheduling and remote work options
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Diverse Projects</h4>
                      <p className="text-sm text-muted-foreground">
                        Opportunity to work on a wide range of challenging
                        projects
                      </p>
                    </div>
                  </div>
                </div>
                <Button>View Open Positions</Button>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/img/team.jpeg"
                  alt="Team working together"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  Contact our team today to discuss your project needs and
                  discover how our engineering expertise can bring your vision
                  to life.
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
                    <Link href="/projects">View Our Projects</Link>
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
                Building tomorrow's infrastructure with precision and
                innovation.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Structural Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Land Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Construction Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Infrastructure Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
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
              © {new Date().getFullYear()} StructureCraft Engineering. All
              rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
