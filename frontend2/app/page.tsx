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
  Loader2,
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
      alt: "Vue aérienne du pont du centre-ville",
      caption: "Pont du Centre-Ville - Vue Aérienne",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Construction des tours Oceanview",
      caption: "Tours Oceanview - Phase de Construction",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Rendu du Campus Tech Park",
      caption: "Campus Tech Park - Rendu Architectural",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Projet d'expansion du port",
      caption: "Expansion du Port - Progrès Aérien",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Intérieur de la gare centrale",
      caption: "Gare Centrale - Structure Intérieure",
    },
  ];

  // Process images
  const processImages = [
    {
      src: "/img/planing.jpg",
      alt: "Phase de planification",
      title: "Planification",
      description: "Développement conceptuel initial et études de faisabilité",
    },
    {
      src: "/img/desing.jpg",
      alt: "Phase de conception",
      title: "Conception",
      description: "Ingénierie détaillée et conception architecturale",
    },
    {
      src: "/img/construction.jpg",
      alt: "Phase de construction",
      title: "Construction",
      description: "Gestion de projet experte et contrôle qualité",
    },
    {
      src: "/img/finProject.jpg",
      alt: "Phase d'achèvement",
      title: "Achèvement",
      description: "Inspections finales et livraison du projet",
    },
  ];

  // Award images
  const awards = [
    {
      src: "/placeholder.svg?height=200&width=200",
      alt: "Prix de l'Excellence en Ingénierie",
      title: "Excellence en Ingénierie",
      year: "2023",
    },
    {
      src: "/placeholder.svg?height=200&width=200",
      alt: "Prix du Développement Durable",
      title: "Prix du Conseil du Bâtiment Vert",
      year: "2022",
    },
    {
      src: "/placeholder.svg?height=200&width=200",
      alt: "Prix de l'Innovation",
      title: "Innovation en Conception",
      year: "2021",
    },
    {
      src: "/placeholder.svg?height=200&width=200",
      alt: "Prix de la Sécurité",
      title: "Excellence en Sécurité",
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

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Email envoyé avec succès !");
        setFormData({
          name: "",
          company: "",
          message: "",
          email: "",
          subject: "",
        });
      } else {
        alert("Erreur lors de l'envoi de l'email : " + data.error);
      }
    } catch (error) {
      alert("Erreur lors de la connexion au serveur.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen border-t">
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
              Accueil
            </Link>
            <Link
              href="#projects"
              className="font-medium transition-colors hover:text-primary text-white/70"
            >
              Projets
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
              À propos
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
              Obtenir un devis
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-white/20 text-white"
            >
              <HardHat className="h-5 w-5" />
              <span className="sr-only">Menu</span>
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
              alt="Projet d'Ingénierie Civile"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                  Construire Aujourd'hui l'Infrastructure de Demain
                </h1>
                <p className="text-xl text-gray-200">
                  Solutions d'ingénierie civile récompensées pour les projets commerciaux, résidentiels et du secteur public.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="bg-white text-background hover:bg-gray-100" asChild>
                    <Link href="/projects">Voir Nos Projets</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white">
                    Nos Services
                  </Button>
                </div>
              </div>
              <div className="hidden md:block relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Projet d'ingénierie en vedette"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 max-w-xs">
                  <p className="text-white/80 text-sm">Projet en Vedette</p>
                  <h3 className="text-white text-xl font-bold">Pont du Centre-Ville</h3>
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
                Vitrine de Projets
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Explorez nos dernières réalisations en ingénierie à travers notre
                galerie visuelle
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
                  Nos Projets en Vedette
                </h2>
                <p className="text-white/70 mt-2">
                  Explorez notre portfolio de projets d'ingénierie achevés
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="mt-6">
              <TabsList className="mb-8 tabs-list">
                <TabsTrigger value="all" className="tabs-trigger">
                  Tous
                </TabsTrigger>
                <TabsTrigger value="commercial" className="tabs-trigger">
                  Commercial
                </TabsTrigger>
                <TabsTrigger value="residential" className="tabs-trigger">
                  Résidentiel
                </TabsTrigger>
                <TabsTrigger value="infrastructure" className="tabs-trigger">
                  Infrastructure
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ProjectCard
                    title="Pont du Centre-Ville"
                    category="Infrastructure"
                    description="Un pont suspendu de 500 mètres reliant les quartiers du centre."
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Tours Oceanview"
                    category="Résidentiel"
                    description="Complexe résidentiel de luxe avec conception parasismique."
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Campus Tech Park"
                    category="Commercial"
                    description="Complexe de bureaux durable certifié LEED Or."
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Expansion du Port"
                    category="Infrastructure"
                    description="Extension majeure du port augmentant la capacité de 40%."
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Rénovation de la Gare Centrale"
                    category="Commercial"
                    description="Modernisation et renforcement structurel d'une gare historique."
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Développement Riverside"
                    category="Résidentiel"
                    description="Logements résistants aux inondations avec gestion intégrée de l'eau."
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </TabsContent>

              <TabsContent value="commercial">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ProjectCard
                    title="Campus Tech Park"
                    category="Commercial"
                    description="Complexe de bureaux durable certifié LEED Or."
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Rénovation de la Gare Centrale"
                    category="Commercial"
                    description="Modernisation et renforcement structurel d'une gare historique."
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </TabsContent>

              <TabsContent value="residential">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ProjectCard
                    title="Tours Oceanview"
                    category="Résidentiel"
                    description="Complexe résidentiel de luxe avec conception parasismique."
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Développement Riverside"
                    category="Résidentiel"
                    description="Logements résistants aux inondations avec gestion intégrée de l'eau."
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </TabsContent>

              <TabsContent value="infrastructure">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ProjectCard
                    title="Pont du Centre-Ville"
                    category="Infrastructure"
                    description="Un pont suspendu de 500 mètres reliant les quartiers du centre."
                    imageUrl="/placeholder.svg?height=400&width=600"
                  />
                  <ProjectCard
                    title="Expansion du Port"
                    category="Infrastructure"
                    description="Extension majeure du port augmentant la capacité de 40%."
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
                  Voir Tous les Projets
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
                Services d'Ingénierie Complets
              </h2>
              <p className="text-white/70 mt-4">
                Du concept initial à la construction finale, nous fournissons
                des solutions d'ingénierie civile de bout en bout.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Compass className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Ingénierie Structurelle
                  </h3>
                  <p className="text-white/70">
                    Analyse structurelle complète, conception et évaluation
                    pour les bâtiments et les projets d'infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Aménagement du Territoire
                  </h3>
                  <p className="text-white/70">
                    Planification de site, nivellement, conception de drainage et 
                    permis pour les développements résidentiels et commerciaux.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <HardHat className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Gestion de Construction
                  </h3>
                  <p className="text-white/70">
                    Supervision experte des projets de construction, garantissant 
                    la qualité, la sécurité et le respect des délais.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Conception d'Infrastructure
                  </h3>
                  <p className="text-white/70">
                    Planification et conception de routes, ponts, systèmes d'eau et
                    autres infrastructures publiques.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Planification de Projet
                  </h3>
                  <p className="text-white/70">
                    Études de faisabilité, estimation des coûts et services de
                    planification de projet complets.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Permis et Conformité
                  </h3>
                  <p className="text-white/70">
                    Navigation dans les exigences réglementaires et obtention des
                    approbations nécessaires pour vos projets.
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
                Notre Processus d'Ingénierie
              </h2>
              <p className="text-white/70 mt-4">
                Une approche systématique pour fournir des résultats exceptionnels 
                sur chaque projet
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
                      Étape {index + 1}
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
                Découvrez Notre Processus
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
                  À propos d'AmiBest
                </h2>
                <p className="text-lg mb-6 text-white">
                  Avec plus de 25 ans d'expérience, AmiBest s'est imposé comme 
                  un leader de l'excellence en ingénierie civile. Notre équipe 
                  d'ingénieurs certifiés apporte innovation et précision à 
                  chaque projet.
                </p>
                <p className="text-white/70 mb-8">
                  Nous croyons aux pratiques de développement durable et 
                  à l'intégration de technologies de pointe pour livrer des 
                  projets qui résistent à l'épreuve du temps. Notre engagement 
                  envers la qualité et la sécurité nous a valu une reconnaissance 
                  dans toute l'industrie.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <h4 className="text-4xl font-bold stats-highlight">250+</h4>
                    <p className="text-white/70">Projets Réalisés</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold stats-highlight">45+</h4>
                    <p className="text-white/70">Ingénieurs Professionnels</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold stats-highlight">25+</h4>
                    <p className="text-white/70">Années d'Expérience</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold stats-highlight">18</h4>
                    <p className="text-white/70">Prix de l'Industrie</p>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <Link href={"/about"}>En Savoir Plus Sur Nous</Link>
                </Button>
              </div>
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/img/Group 12.png"
                  alt="Équipe d'ingénieurs"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="mt-24">
              <h3 className="text-2xl font-bold text-center mb-12 text-white">
                Rencontrez Notre Équipe Dirigeante
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <TeamMember
                  name="Sarah Johnson"
                  role="Ingénieure Principale"
                  imageUrl="/img/profil.jpg"
                />
                <TeamMember
                  name="Michael Chen"
                  role="Directeur Structurel"
                  imageUrl="/img/profil.jpg"
                />
                <TeamMember
                  name="David Rodriguez"
                  role="Chef de Projet"
                  imageUrl="/img/profil.jpg"
                />
                <TeamMember
                  name="Aisha Patel"
                  role="Spécialiste en Environnement"
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
                Prix et Reconnaissances
              </h2>
              <p className="text-white/70 mt-4">
                Notre engagement envers l'excellence a été reconnu par les 
                principales organisations de l'industrie.
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
                Points Forts du Projet
              </h2>
              <p className="text-white/70 mt-4">
                Découvrez certaines de nos solutions d'ingénierie les plus 
                complexes et innovantes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="service-card overflow-hidden rounded-lg">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="Pont du Centre-Ville"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Pont du Centre-Ville
                  </h3>
                  <p className="text-white/70 mb-4">
                    Un pont suspendu de 500 mètres conçu pour résister aux
                    conditions météorologiques extrêmes tout en conservant une 
                    harmonie esthétique avec le paysage urbain.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-white/70 text-sm">
                        Conception haubanée innovante
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-white/70 text-sm">
                        Fondations parasismiques
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-white/70 text-sm">
                        Passerelles piétonnes intégrées
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Voir les Détails du Projet
                  </Button>
                </div>
              </div>

              {/* Project 2 */}
              <div className="service-card overflow-hidden rounded-lg">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="Campus Tech Park"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    Campus Tech Park
                  </h3>
                  <p className="text-white/70 mb-4">
                    Un complexe de bureaux durable intégrant des technologies 
                    de construction écologique de pointe et certifié LEED Or.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-white/70 text-sm">
                        Enveloppe de bâtiment à énergie solaire
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-white/70 text-sm">
                        Système de collecte des eaux de pluie
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-white/70 text-sm">
                        Chauffage et refroidissement géothermique
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Voir les Détails du Projet
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
              Ce Que Disent Nos Clients
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="AmiBest a livré notre complexe de bureaux à temps et en respectant le budget. Leur souci du détail et leurs solutions innovantes ont dépassé nos attentes."
                author="Robert Thompson"
                company="Westside Development Corp"
              />
              <TestimonialCard
                quote="Travailler avec l'équipe d'AmiBest s'est fait sans accroc. Leur expertise en ingénierie structurelle nous a aidés à surmonter d'énormes défis de conception."
                author="Lisa Chen"
                company="Urban Housing Authority"
              />
              <TestimonialCard
                quote="Le projet de pont était complexe, mais les ingénieurs d'AmiBest ont proposé des solutions créatives qui nous ont fait gagner du temps tout en renforçant la sécurité."
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
                  src="/img/startProject.jpg"
                  alt="Consultation en ingénierie"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent"></div>
              </div>
              <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-bold mb-4">
                    Prêt à Démarrer Votre Projet ?
                  </h2>
                  <p className="text-lg mb-8 text-primary-foreground/90">
                    Contactez notre équipe dès aujourd'hui pour une consultation
                    et découvrez comment notre expertise en ingénierie peut
                    donner vie à votre vision.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" variant="secondary">
                      Planifier une Consultation
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white/10"
                    >
                      Voir Notre Processus
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
                  Contactez-nous
                </h2>
                <p className="text-muted-foreground mb-8">
                  Vous avez un projet en tête ou besoin d'une consultation en 
                  ingénierie ? Notre équipe est prête à vous aider.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Emplacement du Bureau</h4>
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
                      <h4 className="font-medium">Téléphone</h4>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">
                        sarlamibest@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-6 rounded-lg border">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Votre nom"
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
                        placeholder="Votre adresse email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Sujet
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Demande concernant un projet"
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
                      placeholder="Parlez-nous de votre projet"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
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
                <span className="text-xl font-bold text-white">AmiBest</span>
              </div>
              <p className="text-white/70 mb-4">
                Construire l'infrastructure de demain avec précision et innovation.
              </p>

              {/* Footer Gallery */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="relative h-16 rounded-sm overflow-hidden"
                  >
                    <Image
                      src={`/placeholder.svg?height=64&width=64&text=Projet+${i}`}
                      alt={`Miniature du projet ${i}`}
                      fill
                      className="object-cover hover:scale-110 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-white">Liens Rapides</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-white/70 hover:text-white"
                  >
                    Projets
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
                    À propos
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
                    Ingénierie Structurelle
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Aménagement du Territoire
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Gestion de Construction
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Conception d'Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white/70 hover:text-white">
                    Planification de Projet
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-white">Contact</h4>
              <address className="not-italic text-white/70 space-y-2">
                <p>1234 Engineering Way, Suite 500</p>
                <p>Metropolis, CA 90001</p>
                <p>Téléphone: (555) 123-4567</p>
                <p>Email: info@AmiBest.com</p>
              </address>

              {/* Map Preview */}
              <div className="mt-4 relative h-32 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=150&width=300&text=Carte"
                  alt="Carte de l'emplacement du bureau"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-all">
                  <span className="text-white text-sm font-medium">
                    Voir la Carte
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Ingénierie AmiBest. Tous droits
              réservés.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-white/70 hover:text-white">
                Politique de Confidentialité
              </Link>
              <Link href="#" className="text-white/70 hover:text-white">
                Conditions d'Utilisation
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
