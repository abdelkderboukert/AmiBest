import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import ProjectCard from "@/components/project-card1";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div>
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

          {/* <div className="flex justify-center mt-12">
            <Button variant="outline" className="gap-2">
              View All Projects
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Page;
