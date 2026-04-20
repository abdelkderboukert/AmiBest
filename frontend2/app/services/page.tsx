import Link from "next/link";
import Image from "next/image";
import { Building2, CheckCircle, Clock, HardHat, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
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
              className="font-medium transition-colors hover:text-primary text-primary"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="font-medium transition-colors hover:text-primary"
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
              <span className="text-foreground">Services</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Services d'Ingénierie Complets
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Du concept initial à la construction finale, nous fournissons 
                des solutions d'ingénierie civile de bout en bout qui répondent 
                aux normes les plus élevées de qualité, de sécurité et d'innovation.
              </p>
              <Button size="lg">Planifier une Consultation</Button>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Ingénierie Structurelle
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Notre équipe d'ingénierie structurelle fournit des services 
                  complets d'analyse, de conception et d'évaluation pour les 
                  bâtiments et les projets d'infrastructure de toutes tailles.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">
                        Analyse et Conception Structurelles
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Modélisation et analyse avancées utilisant les derniers 
                        logiciels et méthodologies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Ingénierie Parasismique</h4>
                      <p className="text-sm text-muted-foreground">
                        Conception parasismique et solutions de renforcement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Évaluation de Bâtiment</h4>
                      <p className="text-sm text-muted-foreground">
                        Évaluations de l'état structurel et de la sécurité
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline">En Savoir Plus</Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/img/t1.jpg"
                  alt="Ingénierie Structurelle"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/img/t2.jpg"
                  alt="Aménagement du Territoire"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Aménagement du Territoire
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Services complets de planification et d'aménagement de site, 
                  des études de faisabilité initiales à la documentation finale de construction.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Planification et Conception de Site</h4>
                      <p className="text-sm text-muted-foreground">
                        Aménagement détaillé du site et planification des infrastructures
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Drainage et Services Publics</h4>
                      <p className="text-sm text-muted-foreground">
                        Gestion des eaux pluviales et conception des infrastructures de services publics
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Conformité Environnementale</h4>
                      <p className="text-sm text-muted-foreground">
                        Évaluation et atténuation de l'impact environnemental
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline">En Savoir Plus</Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Conception d'Infrastructure
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Planification et conception d'infrastructures critiques, 
                  notamment les routes, les ponts, les réseaux d'eau et les installations publiques.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">
                        Infrastructure de Transport
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Conception de routes, de ponts et de systèmes de transport en commun
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">
                        Systèmes d'Eau et d'Eaux Usées
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Infrastructures municipales d'eau et installations de traitement
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium">Installations Publiques</h4>
                      <p className="text-sm text-muted-foreground">
                        Conception d'écoles, d'hôpitaux et de bâtiments gouvernementaux
                      </p>
                    </div>
                  </div>
                </div>
                <Button variant="outline">En Savoir Plus</Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/img/t3.jpg"
                  alt="Conception d'Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Services Supplémentaires
              </h2>
              <p className="text-lg text-muted-foreground">
                Services de soutien qui complètent nos capacités d'ingénierie de base
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <HardHat className="h-6 w-6" style={{ color: "#06141D" }} />
                  </div>
                  <CardTitle>Gestion de Construction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Supervision experte des projets de construction, garantissant la qualité,
                    la sécurité et le respect des calendriers et des budgets.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Planification et coordination de projet
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Contrôle qualité et inspection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Gestion de la sécurité
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6" style={{ color: "#06141D" }} />
                  </div>
                  <CardTitle>Planification de Projet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Services complets de planification de projet, des études 
                    de faisabilité à l'estimation détaillée des coûts.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Études de faisabilité
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Estimation des coûts
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Évaluation des risques
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="rounded-full service-icon-bg p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6" style={{ color: "#06141D" }} />
                  </div>
                  <CardTitle>Permis et Conformité</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Navigation à travers les exigences réglementaires et obtention 
                    des approbations nécessaires pour vos projets.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Conformité réglementaire
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Demandes de permis
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Révision du code
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Notre Processus
              </h2>
              <p className="text-lg text-muted-foreground">
                Une méthodologie éprouvée qui garantit la livraison réussie des 
                projets, du concept à l'achèvement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div
                  className="rounded-full text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                  style={{ backgroundColor: "#06141D" }}
                >
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Découverte</h3>
                <p className="text-muted-foreground">
                  Comprendre vos exigences, contraintes et objectifs de projet 
                  à travers une consultation détaillée.
                </p>
              </div>

              <div className="text-center">
                <div
                  className="rounded-full text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                  style={{ backgroundColor: "#022f2e" }}
                >
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Planification</h3>
                <p className="text-muted-foreground">
                  Développer des plans de projet complets, des échéanciers 
                  et des stratégies d'allocation des ressources.
                </p>
              </div>

              <div className="text-center">
                <div
                  className="rounded-full text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                  style={{ backgroundColor: "#06141D" }}
                >
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Conception</h3>
                <p className="text-muted-foreground">
                  Créer des conceptions d'ingénierie détaillées et des 
                  spécifications techniques à l'aide d'outils et de méthodologies avancés.
                </p>
              </div>

              <div className="text-center">
                <div
                  className="rounded-full text-white w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                  style={{ backgroundColor: "#022f2e" }}
                >
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Livraison</h3>
                <p className="text-muted-foreground">
                  Superviser la mise en œuvre et fournir un soutien continu 
                  tout au long de la phase de construction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Prêt à Démarrer Votre Projet ?
                </h2>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  Contactez notre équipe dès aujourd'hui pour une consultation et 
                  découvrez comment notre expertise en ingénierie peut donner vie à votre vision.
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
                    Demander un Devis
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
                Construire l'infrastructure de demain avec précision et innovation.
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
                    href="/#about"
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
              © {new Date().getFullYear()} Ingénierie AmiBest. Tous droits réservés.
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
