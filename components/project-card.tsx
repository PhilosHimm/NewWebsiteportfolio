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
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-[400px] flex flex-col"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white truncate">{project.title}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 whitespace-nowrap ml-2 flex-shrink-0">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4 max-h-[60px] overflow-hidden">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <motion.button
            className="flex items-center text-blue-600 dark:text-blue-400 font-medium"
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

