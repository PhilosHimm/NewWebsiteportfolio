"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { XIcon } from "lucide-react"

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website with modern design principles, focusing on accessibility and user experience.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      detailedDescription: `
        This portfolio website was created to showcase my professional work and skills in a modern, 
        responsive format. The site features a clean, accessible design with intuitive navigation.
        
        Key features include:
        • Responsive design that works on all devices
        • Dark/light mode toggle
        • Animated transitions using Framer Motion
        • Accessible UI components
        • SEO optimization
        
        The project was built using Next.js and Tailwind CSS, with a focus on performance and user experience.
      `,
      challenges: "Creating a design that effectively communicates my personal brand while maintaining excellent performance metrics was a significant challenge.",
      solutions: "I implemented component-based architecture and used modern CSS techniques to ensure the site loads quickly while maintaining visual appeal.",
      link: "https://github.com/username/portfolio",
    },
    {
      id: 2,
      title: "Mobile App (Coming Soon)",
      description: "A mobile application currently in planning stages. Details will be announced soon.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mobile",
      tags: ["TBD"],
      detailedDescription: "This project is currently in the planning and design phase. More details will be available soon.",
      challenges: "Initial research and planning is underway to identify key user needs and technical requirements.",
      solutions: "Working on wireframes and prototypes to validate core concepts before development begins.",
      link: "",
    },
    {
      id: 3,
      title: "Excel Automation Tools",
      description: "A collection of Excel automation tools using Power Automate for business process optimization.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Business",
      tags: ["Excel", "Power Automate", "VBA"],
      detailedDescription: `
        This collection of tools automates repetitive tasks in Excel to improve business efficiency.
        
        The automation suite includes:
        • Data validation and cleaning tools
        • Automated reporting templates
        • Inventory management system
        • Customer data processing workflows
        
        These tools have significantly reduced manual processing time and error rates.
      `,
      challenges: "Building solutions that were flexible enough to handle varying data inputs while remaining user-friendly for non-technical staff.",
      solutions: "Created modular systems with comprehensive error handling and clear documentation to ensure usability across the organization.",
      link: "https://github.com/username/excel-automation",
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description: "Interactive data visualization dashboard for business insights using Power BI.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Business",
      tags: ["Power BI", "SQL", "Data Analysis"],
      detailedDescription: `
        This interactive dashboard transforms complex business data into actionable insights through intuitive visualizations.
        
        Features include:
        • Real-time KPI tracking
        • Drill-down capabilities for detailed analysis
        • Multi-dimensional data comparisons
        • Customizable reporting options
        • Automated refresh from multiple data sources
        
        The dashboard has become an essential tool for executive decision-making.
      `,
      challenges: "Integrating data from multiple systems and ensuring performance with large datasets presented significant technical hurdles.",
      solutions: "Implemented optimized data models and created a streamlined ETL process to ensure responsive dashboard performance even with complex queries.",
      link: "https://github.com/username/data-dashboard",
    },
  ]

  const categories = ["All", "Web", "Mobile", "Business"]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)
  
  const selectedProject = selectedProjectId 
    ? projects.find(project => project.id === selectedProjectId) 
    : null

  return (
    <section id="projects" className="py-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-medium text-center mb-8 text-gray-900 dark:text-white">
          Projects [Work In Progress]
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-full"></div>
        </h2>

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
              onClick={() => setSelectedProjectId(project.id)}
              className="cursor-pointer"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProjectId(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProjectId(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                >
                  <XIcon size={24} />
                </button>
              </div>
              
              <div className="mb-6">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="prose dark:prose-invert max-w-none">
                  <h4 className="text-xl font-medium mb-2">Overview</h4>
                  <p className="whitespace-pre-line">{selectedProject.detailedDescription}</p>
                  
                  <h4 className="text-xl font-medium mt-6 mb-2">Challenges</h4>
                  <p>{selectedProject.challenges}</p>
                  
                  <h4 className="text-xl font-medium mt-6 mb-2">Solutions</h4>
                  <p>{selectedProject.solutions}</p>
                  
                  {selectedProject.link && (
                    <div className="mt-6">
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      >
                        View Project
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

