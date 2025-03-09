"use client"

import { motion } from "framer-motion"
import { Code, FileJson, Database, Cpu, Globe, Layers, Palette, LayoutGrid, Braces, Server } from "lucide-react"

export function SkillsSection() {
  const usedTechnologies = [
    { name: "HTML", icon: <Globe className="h-5 w-5" /> },
    { name: "CSS", icon: <Palette className="h-5 w-5" /> },
    { name: "JavaScript", icon: <Braces className="h-5 w-5" /> },
    { name: "Bootstrap", icon: <LayoutGrid className="h-5 w-5" /> },
    { name: "SQL", icon: <Database className="h-5 w-5" /> },
    { name: "Python", icon: <Code className="h-5 w-5" /> },
  ]

  const learningTechnologies = [
    { name: "Next.js", icon: <Server className="h-5 w-5" /> },
    { name: "React", icon: <Layers className="h-5 w-5" /> },
    { name: "TypeScript", icon: <FileJson className="h-5 w-5" /> },
    { name: "Node.js", icon: <Cpu className="h-5 w-5" /> },
  ]

  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-medium text-center mb-12 text-gray-900 dark:text-white">Skills</h2>

        <div className="space-y-10">
          {/* Technologies I've Used */}
          <div>
            <h3 className="text-xl font-medium mb-6 text-gray-800 dark:text-gray-200 text-center">
              Technologies I've Used
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {usedTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                    {tech.icon}
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies I'm Learning */}
          <div>
            <h3 className="text-xl font-medium mb-6 text-gray-800 dark:text-gray-200 text-center">
              Technologies I'm Learning
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {learningTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center border-t-4 border-blue-500 dark:border-blue-600"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
                    {tech.icon}
                  </div>
                  <span className="font-medium text-gray-900 dark:text-white">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

