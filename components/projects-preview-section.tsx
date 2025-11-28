"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github, Figma } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/projects"
import { cn } from "@/lib/utils"

export function ProjectsPreviewSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
        ease: "easeIn",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeIn",
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work in UX design, product development, and digital experiences
            </p>
          </motion.div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <Link href={`/projects/${project.slug}`}>
                  <Card className="group h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                    {/* Project Image/Video */}
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      {project.video ? (
                        <video
                          src={project.video}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          autoPlay
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
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div variants={itemVariants} className="text-center">
            <Link href="/projects">
              <Button size="lg" variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
