"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const projects = [
    {
      id: 1,
      title: "Material Design Weather App",
      description: "A weather application featuring Material Design components and animations.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mobile",
      tags: ["Kotlin", "Material Components", "Jetpack Compose"],
    },
    {
      id: 2,
      title: "Task Manager",
      description: "A productivity app with Material Design interactions for managing daily tasks.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mobile",
      tags: ["React Native", "Redux", "Firebase"],
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with Google Material UI components.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A responsive portfolio website with Material Design principles.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
  ]

  const categories = ["All", "Mobile", "Web"]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-medium text-center mb-8 text-gray-900 dark:text-white">Projects</h2>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

