"use client"

import Link from "next/link"
import Image from "next/image"
import { getAllProjects } from "@/lib/projects"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github, Figma } from "lucide-react"
import { useEffect, useState } from "react"

export default function ProjectsPage() {
  const projects = getAllProjects()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground mb-12">
          A collection of my design and development work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <Card className="group h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                {/* Project Image/Video */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  {project.video ? (
                    <video
                      src={project.video}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      autoPlay={!isMobile}
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary font-medium flex items-center group-hover:gap-2 transition-all">
                      View Case Study
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>

                    <div className="flex gap-2 ml-auto">
                      {project.links.live && (
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      )}
                      {project.links.github && (
                        <Github className="h-4 w-4 text-muted-foreground" />
                      )}
                      {project.links.figma && (
                        <Figma className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
