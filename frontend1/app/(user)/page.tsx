"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  ChevronRight,
  Clock,
  Compass,
  HardHat,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/project-card";
import TestimonialCard from "@/components/testimonial-card";
import TeamMember from "@/components/team-member";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import React, { useState } from "react";

export default function Home() {
  interface FormData {
    name: string;
    company: string;
    message: string;
    email: string;
    subject: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    message: "",
    email: "",
    subject: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Update handleSubmit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Error sending email: " + data.error);
    }
  };
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
              href="#"
              className="font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="font-medium transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="#services"
              className="font-medium transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="font-medium transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <Button className="hidden md:flex">Get a Quote</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <HardHat className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        {/* <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Civil Engineering Project"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Building Tomorrow's Infrastructure Today
              </h1>
              <p className="text-xl text-gray-200">
                Award-winning civil engineering solutions for commercial, residential, and public sector projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg">View Our Projects</Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                  Our Services
                </Button>
              </div>
            </div>
          </div>
        </section> */}
        <MultiLayerParallax />

        {/* Featured Projects */}
        <section id="projects" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Our Featured Projects
                </h2>
                <p className="text-muted-foreground mt-2">
                  Explore our portfolio of completed engineering projects
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="mt-6">
              <TabsList className="mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ProjectCard
                    title="City Center Bridge"
                    category="Infrastructure"
                    description="A 500-meter suspension bridge connecting downtown areas"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Oceanview Towers"
                    category="Residential"
                    description="Luxury condominium complex with earthquake-resistant design"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Tech Park Campus"
                    category="Commercial"
                    description="Sustainable office complex with LEED Gold certification"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Harbor Expansion"
                    category="Infrastructure"
                    description="Major port expansion increasing capacity by 40%"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Central Station Renovation"
                    category="Commercial"
                    description="Historic train station modernization and structural reinforcement"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Riverside Development"
                    category="Residential"
                    description="Flood-resistant housing development with integrated water management"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </TabsContent>

              <TabsContent value="commercial">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ProjectCard
                    title="Tech Park Campus"
                    category="Commercial"
                    description="Sustainable office complex with LEED Gold certification"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Central Station Renovation"
                    category="Commercial"
                    description="Historic train station modernization and structural reinforcement"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </TabsContent>

              <TabsContent value="residential">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ProjectCard
                    title="Oceanview Towers"
                    category="Residential"
                    description="Luxury condominium complex with earthquake-resistant design"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Riverside Development"
                    category="Residential"
                    description="Flood-resistant housing development with integrated water management"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </TabsContent>

              <TabsContent value="infrastructure">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ProjectCard
                    title="City Center Bridge"
                    category="Infrastructure"
                    description="A 500-meter suspension bridge connecting downtown areas"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Harbor Expansion"
                    category="Infrastructure"
                    description="Major port expansion increasing capacity by 40%"
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center mt-12">
              <Button variant="outline" className="gap-2">
                <Link href="/projects">
                  <span>View All Projects</span>
                </Link>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight">
                Comprehensive Engineering Services
              </h2>
              <p className="text-muted-foreground mt-4">
                From initial concept to final construction, we provide
                end-to-end civil engineering solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Compass className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Structural Engineering
                  </h3>
                  <p className="text-muted-foreground">
                    Comprehensive structural analysis, design, and assessment
                    for buildings and infrastructure projects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Land Development</h3>
                  <p className="text-muted-foreground">
                    Site planning, grading, drainage design, and permitting for
                    residential and commercial developments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <HardHat className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Construction Management
                  </h3>
                  <p className="text-muted-foreground">
                    Expert oversight of construction projects, ensuring quality,
                    safety, and adherence to schedules.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Infrastructure Design
                  </h3>
                  <p className="text-muted-foreground">
                    Planning and design of roads, bridges, water systems, and
                    other public infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Project Planning</h3>
                  <p className="text-muted-foreground">
                    Feasibility studies, cost estimation, and comprehensive
                    project planning services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Permitting & Compliance
                  </h3>
                  <p className="text-muted-foreground">
                    Navigation of regulatory requirements and securing necessary
                    approvals for your projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="gap-2">
              <Link href="/services">
                <span>View More Detai</span>
              </Link>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* About/Team */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  About AmiBest
                </h2>
                <p className="text-lg mb-6">
                  With over 25 years of experience, AmiBest has established
                  itself as a leader in civil engineering excellence. Our team
                  of certified engineers brings innovation and precision to
                  every project.
                </p>
                <p className="text-muted-foreground mb-8">
                  We believe in sustainable development practices and
                  implementing cutting-edge technologies to deliver projects
                  that stand the test of time. Our commitment to quality and
                  safety has earned us recognition across the industry.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <h4 className="text-4xl font-bold text-primary">250+</h4>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-primary">45+</h4>
                    <p className="text-muted-foreground">
                      Professional Engineers
                    </p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-primary">25+</h4>
                    <p className="text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-primary">18</h4>
                    <p className="text-muted-foreground">Industry Awards</p>
                  </div>
                </div>
                <Button>Learn More About Us</Button>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Engineering team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="mt-24">
              <h3 className="text-2xl font-bold text-center mb-12">
                Meet Our Leadership Team
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <TeamMember
                  name="Sarah Johnson"
                  role="Principal Engineer"
                  imageUrl="/placeholder.svg?height=300&width=300"
                />
                <TeamMember
                  name="Michael Chen"
                  role="Structural Director"
                  imageUrl="/placeholder.svg?height=300&width=300"
                />
                <TeamMember
                  name="David Rodriguez"
                  role="Project Manager"
                  imageUrl="/placeholder.svg?height=300&width=300"
                />
                <TeamMember
                  name="Aisha Patel"
                  role="Environmental Specialist"
                  imageUrl="/placeholder.svg?height=300&width=300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="AmiBest delivered our office complex on time and under budget. Their attention to detail and innovative solutions exceeded our expectations."
                author="Robert Thompson"
                company="Westside Development Corp"
              />
              <TestimonialCard
                quote="Working with the AmiBest team was seamless. Their expertise in structural engineering helped us overcome significant design challenges."
                author="Lisa Chen"
                company="Urban Housing Authority"
              />
              <TestimonialCard
                quote="The bridge project was complex, but AmiBest's engineers provided creative solutions that saved us time and resources while enhancing safety."
                author="James Wilson"
                company="Metropolitan Transit Authority"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  Contact our team today for a consultation and discover how our
                  engineering expertise can bring your vision to life.
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
                    View Our Process
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have a project in mind or need engineering consultation? Our
                  team is ready to assist you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Office Location</h4>
                      <p className="text-muted-foreground">
                        1234 Engineering Way, Suite 500
                        <br />
                        Metropolis, CA 90001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">info@AmiBest.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg border">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
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
                <span className="text-xl font-bold">AmiBest</span>
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
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
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
                <p>Email: info@AmiBest.com</p>
              </address>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AmiBest Engineering. All rights
              reserved.
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
