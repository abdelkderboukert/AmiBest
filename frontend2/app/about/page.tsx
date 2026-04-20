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
              Accueil
            </Link>
            <Link
              href="/#projects"
              className="font-medium transition-colors hover:text-primary"
            >
              Projets
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
              À propos
            </Link>
            <Link
              href="/#contact"
              className="font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <Button className="hidden md:flex">Obtenir un devis</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="py-6 border-b">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Accueil
              </Link>
              <span>/</span>
              <span className="text-foreground">À propos</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative hero-gradient text-white">
          <div className="absolute inset-0 z-0">
            {/* <Image
              src="/placeholder.svg?height=600&width=1600"
              alt="Équipe d'ingénieurs au travail"
              fill
              className="object-cover opacity-20"
              priority
            /> */}
          </div>
          <div className="container relative z-10 py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Bâtir l'Excellence Depuis 2017
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                AmiBest est une équipe d'ingénieurs, de concepteurs et de chefs
                de projet dévoués, engagés à fournir des solutions d'ingénierie
                innovantes et durables.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                  <Award className="h-8 w-8 text-white" />
                  <div>
                    <p className="text-2xl font-bold">6+</p>
                    <p className="text-sm">Années d'Expérience</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                  <Users className="h-8 w-8 text-white" />
                  <div>
                    <p className="text-2xl font-bold">5+</p>
                    <p className="text-sm">Ingénieurs Professionnels</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                  <Building2 className="h-8 w-8 text-white" />
                  <div>
                    <p className="text-2xl font-bold">20+</p>
                    <p className="text-sm">Projets Réalisés</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                  <Award className="h-8 w-8 text-white" />
                  <div>
                    <p className="text-2xl font-bold">18</p>
                    <p className="text-sm">Prix de l'Industrie</p>
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
                  Notre Histoire
                </h2>
                <p className="text-lg mb-6">
                  Fondé en 2017 par Amirat Mohamed, AmiBest a commencé comme une
                  petite firme d'ingénierie structurelle avec pour vision de
                  transformer l'environnement bâti grâce à des conceptions
                  innovantes et des pratiques durables.
                </p>
                <p className="text-muted-foreground mb-6">
                  Ce qui a commencé par une équipe de cinq ingénieurs travaillant
                  dans un petit bureau est devenu un cabinet multidisciplinaire
                  comptant plus de 45 ingénieurs professionnels. Notre croissance
                  a été motivée par notre engagement envers l'excellence, notre
                  approche collaborative et notre capacité à relever des défis
                  d'ingénierie complexes.
                </p>
                <p className="text-muted-foreground mb-6">
                  Aujourd'hui, AmiBest est reconnu comme un leader en ingénierie
                  civile, réputé pour la livraison de projets équilibrant
                  l'innovation technique, la responsabilité environnementale et
                  les besoins de la communauté. Des ponts emblématiques aux
                  développements commerciaux durables, notre portfolio démontre
                  notre polyvalence et notre expertise.
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Amirat Mohamed"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold">Amirat Mohamed</p>
                    <p className="text-sm text-muted-foreground">
                      Co-fondateur & Ingénieur Principal
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px]">
                <Image
                  src="/img/about.jpg"
                  alt="Histoire de l'entreprise"
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
                Nos Valeurs Fondamentales
              </h2>
              <p className="text-lg text-muted-foreground">
                Ces principes guident notre travail et définissent notre
                approche pour chaque projet que nous entreprenons.
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
                    Nous nous engageons à fournir la plus haute qualité dans
                    tout ce que nous faisons, de la conception à l'exécution.
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
                    Nous croyons au pouvoir du travail d'équipe et du
                    partenariat, en travaillant en étroite collaboration avec
                    nos clients et parties prenantes.
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
                  <h3 className="text-xl font-bold mb-2">Intégrité</h3>
                  <p className="text-muted-foreground">
                    Nous respectons les normes éthiques les plus strictes dans
                    nos pratiques commerciales et nos relations professionnelles.
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
                    Nous recherchons sans cesse de nouvelles idées et approches
                    pour résoudre des défis d'ingénierie complexes.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6" style={{ color: "#06141D" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Fiabilité</h3>
                  <p className="text-muted-foreground">
                    Nous tenons nos promesses, respectons les délais et
                    dépassons constamment les attentes.
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
                  <h3 className="text-xl font-bold mb-2">Durabilité</h3>
                  <p className="text-muted-foreground">
                    Nous donnons la priorité aux pratiques de conception et de
                    construction respectueuses de l'environnement dans tous nos
                    projets.
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
                Rencontrez Notre Équipe
              </h2>
              <p className="text-lg text-muted-foreground">
                Notre équipe diversifiée d'experts réunit des décennies
                d'expérience dans diverses disciplines d'ingénierie.
              </p>
            </div>

            <Tabs defaultValue="leadership" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="leadership">Direction</TabsTrigger>
                  <TabsTrigger value="engineering">Ingénierie</TabsTrigger>
                  <TabsTrigger value="project-management">
                    Gestion de Projet
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="leadership" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <TeamMember
                    name="Sarah Johnson"
                    role="Ingénieure Principale & Co-fondatrice"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Michael Chen"
                    role="Directeur Structurel & Co-fondateur"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="David Rodriguez"
                    role="Chef de Projet Principal"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Aisha Patel"
                    role="Chef de Division Environnement"
                    imageUrl="/img/profil.jpg"
                  />
                </div>
              </TabsContent>

              <TabsContent value="engineering" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <TeamMember
                    name="James Wilson"
                    role="Ingénieur Structurel Senior"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Elena Gonzalez"
                    role="Ingénieure en Transport"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Robert Kim"
                    role="Ingénieur Géotechnique"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Priya Singh"
                    role="Ingénieure en Ressources Hydriques"
                    imageUrl="/img/profil.jpg"
                  />
                </div>
              </TabsContent>

              <TabsContent value="project-management" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <TeamMember
                    name="Thomas Wright"
                    role="Chef de Projet Senior"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Sophia Lee"
                    role="Coordinatrice de Construction"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Marcus Johnson"
                    role="Responsable Assurance Qualité"
                    imageUrl="/img/profil.jpg"
                  />
                  <TeamMember
                    name="Olivia Martinez"
                    role="Responsable Relations Clients"
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
                Notre Parcours
              </h2>
              <p className="text-lg text-muted-foreground">
                Les étapes clés de l'histoire de notre entreprise qui ont façonné 
                ce que nous sommes aujourd'hui.
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
                        Fondation de l'Entreprise
                      </h4>
                      <p className="text-muted-foreground">
                        Amirat Mohamed fonde AmiBest avec une équipe de cinq
                        ingénieurs, se concentrant sur la conception structurelle 
                        de bâtiments commerciaux.
                      </p>
                    </div>
                    <div className="md:pl-12">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Fondation de l'entreprise"
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
                          alt="Premier projet majeur"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:pl-12 md:order-2 order-1">
                      <h3 className="text-2xl font-bold mb-2">2020</h3>
                      <h4 className="text-xl font-medium mb-3">
                        Premier Projet Majeur d'Infrastructure
                      </h4>
                      <p className="text-muted-foreground">
                        L'achèvement du pont Westside marque notre expansion 
                        dans l'infrastructure publique, permettant à l'entreprise 
                        de remporter son premier prix de l'industrie pour l'innovation.
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
                        Expansion et Nouveau Siège Social
                      </h4>
                      <p className="text-muted-foreground">
                        Avec une équipe grandissante de 5 ingénieurs, nous 
                        emménageons dans notre siège social actuel.
                      </p>
                    </div>
                    <div className="md:pl-12">
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Nouveau siège social"
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
                          alt="Initiative environnementale"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:pl-12 md:order-2 order-1">
                      <h3 className="text-2xl font-bold mb-2">2025</h3>
                      <h4 className="text-xl font-medium mb-3">
                        8ème Anniversaire et Projets Mondiaux
                      </h4>
                      <p className="text-muted-foreground">
                        Célébration de 8 années d'excellence avec l'achèvement 
                        de notre premier projet international.
                      </p>
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
                Certifications et Affiliations
              </h2>
              <p className="text-lg text-muted-foreground">
                Nous maintenons les normes les plus élevées à travers des certifications 
                professionnelles et des partenariats industriels.
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
                <h4 className="font-bold mb-1">Certifié LEED</h4>
                <p className="text-sm text-muted-foreground">
                  Leadership en Énergie et Design Environnemental
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
                  Systèmes de Gestion de la Qualité
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
                <h4 className="font-bold mb-1">Membre ASCE</h4>
                <p className="text-sm text-muted-foreground">
                  Société Américaine des Ingénieurs Civils
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
                <h4 className="font-bold mb-1">Licence PE</h4>
                <p className="text-sm text-muted-foreground">
                  Certification d'Ingénieur Professionnel
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-6">Partenaires de l'Industrie</h3>
              <div className="flex flex-wrap justify-center gap-12">
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Partenaire 1"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Partenaire 2"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Partenaire 3"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Partenaire 4"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
                <Image
                  src="/placeholder.svg?height=60&width=120"
                  alt="Partenaire 5"
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
                Nos Emplacements
              </h2>
              <p className="text-lg text-muted-foreground">
                Avec des bureaux dans trois grandes villes, nous sommes bien 
                placés pour servir nos clients à travers la région.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6" style={{ color: "#06141D" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Siège Social</h3>
                  <p className="text-muted-foreground mb-4">
                    1234 Engineering Way, Suite 500
                    <br />
                    Metropolis, CA 90001
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Téléphone:</strong> (555) 123-4567
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Email:</strong> info@amibest.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6" style={{ color: "#06141D" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bureau Côte Est</h3>
                  <p className="text-muted-foreground mb-4">
                    567 Harbor Boulevard
                    <br />
                    Eastport, NY 10023
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Téléphone:</strong> (555) 234-5678
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Email:</strong> coteest@amibest.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6" style={{ color: "#06141D" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bureau Midwest</h3>
                  <p className="text-muted-foreground mb-4">
                    890 Central Avenue, Étage 12
                    <br />
                    Lakeside, IL 60601
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Téléphone:</strong> (555) 345-6789
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Email:</strong> midwest@amibest.com
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/img/city.jpg"
                alt="Carte des emplacements de bureaux"
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
                  Rejoignez Notre Équipe
                </h2>
                <p className="text-lg mb-6">
                  Nous sommes toujours à la recherche d'individus talentueux qui 
                  partagent notre passion pour l'excellence et l'innovation en ingénierie. 
                  Rejoignez notre équipe et participez à des projets qui façonnent 
                  l'avenir de notre environnement bâti.
                </p>
                <p className="text-muted-foreground mb-6">
                  Chez AmiBest, nous offrons une rémunération compétitive, 
                  des opportunités de développement professionnel et un environnement 
                  de travail collaboratif qui favorise la croissance et la créativité.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Développement Professionnel</h4>
                      <p className="text-sm text-muted-foreground">
                        Opportunités d'apprentissage continu et d'avancement professionnel
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Équilibre Travail-Vie Personnelle</h4>
                      <p className="text-sm text-muted-foreground">
                        Horaires flexibles et options de télétravail
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Projets Diversifiés</h4>
                      <p className="text-sm text-muted-foreground">
                        L'opportunité de travailler sur un large éventail de projets stimulants
                      </p>
                    </div>
                  </div>
                </div>
                <Button>Voir les Postes Ouverts</Button>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/img/team.jpeg"
                  alt="L'équipe travaillant ensemble"
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
                  Prêt à Travailler Avec Nous ?
                </h2>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  Contactez notre équipe dès aujourd'hui pour discuter des besoins 
                  de votre projet et découvrir comment notre expertise en ingénierie 
                  peut donner vie à votre vision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    Planifier une Consultation
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                  >
                    <Link href="/projects">Voir Nos Projets</Link>
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
                <span className="text-xl font-bold">AmiBest</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Construire l'infrastructure de demain avec précision et
                innovation.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">Liens Rapides</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Projets
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
                    À propos
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
                    Ingénierie Structurelle
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Aménagement du Territoire
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Gestion de Construction
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Conception d'Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Planification de Projet
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <address className="not-italic text-muted-foreground space-y-2">
                <p>1234 Engineering Way, Suite 500</p>
                <p>Metropolis, CA 90001</p>
                <p>Téléphone: (555) 123-4567</p>
                <p>Email: info@amibest.com</p>
              </address>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ingénierie AmiBest. Tous droits
              réservés.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Politique de Confidentialité
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Conditions d'Utilisation
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
