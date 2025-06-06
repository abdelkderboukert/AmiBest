"use client";

import { useEffect, useState } from "react";
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
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/project-card";
import TestimonialCard from "@/components/testimonial-card";
import TeamMember from "@/components/team-member";
import MultiLayerParallax from "@/components/MultiLayerParallax";

export default function Home() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Project images for the image gallery
  const projectImages = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "City Center Bridge aerial view",
      caption: "City Center Bridge - Aerial View",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Oceanview Towers construction",
      caption: "Oceanview Towers - Construction Phase",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Tech Park Campus rendering",
      caption: "Tech Park Campus - Architectural Rendering",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Harbor Expansion project",
      caption: "Harbor Expansion - Aerial Progress",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Central Station interior",
      caption: "Central Station - Interior Structure",
    },
  ];

  // Process images
  const processImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Planning phase",
      title: "Planning",
      description: "Initial concept development and feasibility studies",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Design phase",
      title: "Design",
      description: "Detailed engineering and architectural design",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Construction phase",
      title: "Construction",
      description: "Expert project management and quality control",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Completion phase",
      title: "Completion",
      description: "Final inspections and project delivery",
    },
  ];

  // Award images
  const awards = [
    {
      src: "/placeholder.svg?height=200&width=200",
      alt: "Engineering Excellence Award",
      title: "Engineering Excellence",
      year: "2023",
    },
    {
      src: "/placeholder.svg?height=200&width=200",
      alt: "Sustainability Award",
      title: "Green Building Council Award",
      year: "2022",
    },
    {
      src: "/placeholder.svg?height=200&width=200",
      alt: "Innovation Award",
      title: "Innovation in Design",
      year: "2021",
    },
    {
      src: "/placeholder.svg?height=200&width=200",
      alt: "Safety Award",
      title: "Safety Excellence",
      year: "2023",
    },
  ];

  // Auto-rotate featured images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % projectImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projectImages.length]);

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
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-white">AmiBest</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href="#"
              className="font-medium transition-colors hover:text-primary text-white"
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="font-medium transition-colors hover:text-primary text-white/70"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="font-medium transition-colors hover:text-primary text-white/70"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="font-medium transition-colors hover:text-primary text-white/70"
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="font-medium transition-colors hover:text-primary text-white/70"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-primary hover:bg-primary/90">
              Get a Quote
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-white/20 text-white"
            >
              <HardHat className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section with Video Background */}
        {/* <section className="relative hero-gradient">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Civil Engineering Project"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Building Tomorrow's Infrastructure Today
                </h1>
                <p className="text-xl text-gray-200">
                  Award-winning civil engineering solutions for commercial, residential, and public sector projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-white text-background hover:bg-gray-100" asChild>
                    <Link href="/projects">View Our Projects</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white">
                    Our Services
                  </Button>
                </div>
              </div>
              <div className="hidden md:block relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Featured engineering project"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 max-w-xs">
                  <p className="text-white/80 text-sm">Featured Project</p>
                  <h3 className="text-white text-xl font-bold">City Center Bridge</h3>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <MultiLayerParallax />

        {/* Image Gallery Section */}
        <section className="py-16 bg-white/5">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                Project Showcase
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Explore our latest engineering achievements through our visual
                gallery
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Main featured image */}
              <div className="md:col-span-2 relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={
                    projectImages[activeImageIndex].src || "/placeholder.svg"
                  }
                  alt={projectImages[activeImageIndex].alt}
                  fill
                  className="object-cover transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white text-xl font-bold">
                    {projectImages[activeImageIndex].caption}
                  </p>
                </div>
              </div>

              {/* Thumbnail grid */}
              <div className="grid grid-cols-2 gap-3 h-[500px]">
                {projectImages.map((image, index) => (
                  <div
                    key={index}
                    className={`relative rounded-lg overflow-hidden cursor-pointer transition-all ${
                      index === activeImageIndex ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-110 transition-all duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-black/30 ${
                        index === activeImageIndex
                          ? "bg-black/10"
                          : "hover:bg-black/10"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image navigation dots */}
            <div className="flex justify-center mt-6 gap-2">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeImageIndex
                      ? "bg-primary"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white">
                  Our Featured Projects
                </h2>
                <p className="text-white/70 mt-2">
                  Explore our portfolio of completed engineering projects
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="mt-6">
              <TabsList className="mb-8 tabs-list">
                <TabsTrigger value="all" className="tabs-trigger">
                  All
                </TabsTrigger>
                <TabsTrigger value="commercial" className="tabs-trigger">
                  Commercial
                </TabsTrigger>
                <TabsTrigger value="residential" className="tabs-trigger">
                  Residential
                </TabsTrigger>
                <TabsTrigger value="infrastructure" className="tabs-trigger">
                  Infrastructure
                </TabsTrigger>
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
              <Button
                variant="outline"
                className="gap-2 border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/projects">
                  View All Projects
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24 bg-white/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Comprehensive Engineering Services
              </h2>
              <p className="text-white/70 mt-4">
                From initial concept to final construction, we provide
                end-to-end civil engineering solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Compass className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Structural Engineering
                  </h3>
                  <p className="text-white/70">
                    Comprehensive structural analysis, design, and assessment
                    for buildings and infrastructure projects.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Land Development
                  </h3>
                  <p className="text-white/70">
                    Site planning, grading, drainage design, and permitting for
                    residential and commercial developments.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <HardHat className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Construction Management
                  </h3>
                  <p className="text-white/70">
                    Expert oversight of construction projects, ensuring quality,
                    safety, and adherence to schedules.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Infrastructure Design
                  </h3>
                  <p className="text-white/70">
                    Planning and design of roads, bridges, water systems, and
                    other public infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Project Planning
                  </h3>
                  <p className="text-white/70">
                    Feasibility studies, cost estimation, and comprehensive
                    project planning services.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Permitting & Compliance
                  </h3>
                  <p className="text-white/70">
                    Navigation of regulatory requirements and securing necessary
                    approvals for your projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section with Images */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Our Engineering Process
              </h2>
              <p className="text-white/70 mt-4">
                A systematic approach to delivering exceptional results on every
                project
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processImages.map((process, index) => (
                <div
                  key={index}
                  className="service-card overflow-hidden rounded-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={process.src || "/placeholder.svg"}
                      alt={process.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-primary text-white text-sm font-bold py-1 px-3 rounded-full">
                      Step {index + 1}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {process.title}
                    </h3>
                    <p className="text-white/70">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-primary hover:bg-primary/90">
                Learn About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* About/Team */}
        <section id="about" className="py-16 md:py-24 bg-white/5">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
                  About AmiBest
                </h2>
                <p className="text-lg mb-6 text-white">
                  With over 25 years of experience, AmiBest has
                  established itself as a leader in civil engineering
                  excellence. Our team of certified engineers brings innovation
                  and precision to every project.
                </p>
                <p className="text-white/70 mb-8">
                  We believe in sustainable development practices and
                  implementing cutting-edge technologies to deliver projects
                  that stand the test of time. Our commitment to quality and
                  safety has earned us recognition across the industry.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <h4 className="text-4xl font-bold stats-highlight">250+</h4>
                    <p className="text-white/70">Projects Completed</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold stats-highlight">45+</h4>
                    <p className="text-white/70">Professional Engineers</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold stats-highlight">25+</h4>
                    <p className="text-white/70">Years Experience</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold stats-highlight">18</h4>
                    <p className="text-white/70">Industry Awards</p>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  Learn More About Us
                </Button>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/img/Group 12.png"
                  alt="Engineering team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="mt-24">
              <h3 className="text-2xl font-bold text-center mb-12 text-white">
                Meet Our Leadership Team
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <TeamMember
                  name="Sarah Johnson"
                  role="Principal Engineer"
                  imageUrl="/img/profil.jpg"
                />
                <TeamMember
                  name="Michael Chen"
                  role="Structural Director"
                  imageUrl="/img/profil.jpg"
                />
                <TeamMember
                  name="David Rodriguez"
                  role="Project Manager"
                  imageUrl="/img/profil.jpg"
                />
                <TeamMember
                  name="Aisha Patel"
                  role="Environmental Specialist"
                  imageUrl="/img/profil.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Awards & Recognition
              </h2>
              <p className="text-white/70 mt-4">
                Our commitment to excellence has been recognized by leading
                industry organizations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="service-card p-6 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={award.src || "/placeholder.svg"}
                      alt={award.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-white font-bold mb-1">{award.title}</h3>
                  <p className="text-white/70 text-sm">{award.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Highlights */}
        <section className="py-16 md:py-24 bg-white/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Project Highlights
              </h2>
              <p className="text-white/70 mt-4">
                Explore some of our most challenging and innovative engineering
                solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="service-card overflow-hidden rounded-lg">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="City Center Bridge"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    City Center Bridge
                  </h3>
                  <p className="text-white/70 mb-4">
                    A 500-meter suspension bridge designed to withstand extreme
                    weather conditions while maintaining aesthetic harmony with
                    the urban landscape.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-white/70 text-sm">
                        Innovative cable-stayed design
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-white/70 text-sm">
                        Earthquake-resistant foundation
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-white/70 text-sm">
                        Integrated pedestrian walkways
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    View Project Details
                  </Button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="service-card overflow-hidden rounded-lg">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="Tech Park Campus"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Tech Park Campus
                  </h3>
                  <p className="text-white/70 mb-4">
                    A sustainable office complex featuring cutting-edge green
                    building technologies and LEED Gold certification.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-white/70 text-sm">
                        Solar-integrated building envelope
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-white/70 text-sm">
                        Rainwater harvesting system
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-white/70 text-sm">
                        Geothermal heating and cooling
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    View Project Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-white">
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
        <section className="py-16 md:py-24 bg-white/5">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Engineering consultation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent"></div>
              </div>
              <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Start Your Project?
                  </h2>
                  <p className="text-lg mb-8 text-primary-foreground/90">
                    Contact our team today for a consultation and discover how
                    our engineering expertise can bring your vision to life.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
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
                        name="name"
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
                        name="email"
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
                      name="subject"
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
                      name="message"
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
      <footer className="footer-bg">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-white">
                  AmiBest
                </span>
              </div>
              <p className="text-white/70 mb-4">
                Building tomorrow's infrastructure with precision and
                innovation.
              </p>

              {/* Footer Gallery */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="relative h-16 rounded-sm overflow-hidden"
                  >
                    <Image
                      src={`/placeholder.svg?height=64&width=64&text=Project${i}`}
                      alt={`Project thumbnail ${i}`}
                      fill
                      className="object-cover hover:scale-110 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-white/70 hover:text-white"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white/70 hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/70 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-white/70 hover:text-white"
                  >
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
                <p>Email: info@AmiBest.com</p>
              </address>

              {/* Map Preview */}
              <div className="mt-4 relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=300&text=Map"
                  alt="Office location map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-all">
                  <span className="text-white text-sm font-medium">
                    View Map
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} AmiBest Engineering. All
              rights reserved.
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
  );
}
