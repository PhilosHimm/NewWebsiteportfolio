"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  tags: string[]
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-white dark:bg-[var(--card)] md-card rounded-lg overflow-hidden md-elevation-1 hover:md-elevation-3 transition-shadow duration-300 w-full h-[400px] flex flex-col"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative w-full aspect-[9/16]">
        <Image src={project.image || "/placeholder.jpg"} alt={project.title} fill className="object-contain" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white truncate">{project.title}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[hsla(var(--primary),0.15)] text-[hsl(var(--primary))] dark:bg-[hsla(var(--primary),0.25)] dark:text-[hsl(var(--primary))] whitespace-nowrap ml-2 flex-shrink-0">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4 max-h-[60px] overflow-hidden">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[hsla(var(--secondary),0.1)] text-[hsl(var(--secondary))] dark:bg-[hsla(var(--secondary),0.15)] dark:text-[hsl(var(--secondary))]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <motion.button
            className="flex items-center text-[hsl(var(--primary))] dark:text-[hsl(var(--primary))] font-medium material-button"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            View Details <ChevronRight className="ml-1 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

