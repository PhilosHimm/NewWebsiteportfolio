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
      title: "Personal Portfolio Website v1",
      description: "A professional portfolio website showcasing skills, work experience, and certifications with a minimalist black-and-white theme using HTML & Bootstrap for responsive design.",
      image: "/htmlportfolio.png",
      category: "Web",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      detailedDescription: `
        This portfolio website was developed as a professional platform to highlight my technical skills, work experience, and certifications to potential employers, hiring managers, and collaborators. It features:
        
        • A minimalist black-and-white design with custom CSS to override Bootstrap defaults for a consistent, professional look.
        • A responsive layout built with Bootstrap that adapts seamlessly across devices.
        • A header showcasing the website title, contact information, and social media links (LinkedIn, Instagram, GitHub).
        • A smart navigation bar that hides on scroll down and reappears on scroll up, ensuring easy access to key sections such as Work Experience, Skills, Certifications, and Contact.
        • A hero section with a professional headshot, a brief bio, and call-to-action buttons ("Why Hire Me?" and "Contact Me") to engage visitors.
        • Card-based layouts for presenting work experience and structured sections for skills and certifications.
        • Smooth fade-in animations on scroll and JavaScript-driven interactions to enhance user experience.
        
        Built as part of the ITM780 course at Toronto Metropolitan University, this website not only demonstrates my professional qualifications but also showcases my web development expertise.
      `,
      challenges: "Achieving a balance between a clean, minimalist design and robust functionality, particularly in managing consistent spacing with Bootstrap, integrating smooth animations, and ensuring optimal performance across devices.",
      solutions: "Customized Bootstrap with tailored CSS and JavaScript enhancements, implemented responsive design techniques, and optimized the layout and animations to deliver a seamless and professional user experience.",
      link: "https://philoshimm.github.io/Final%20Project/index.html",
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
      title: "Open Banking Framework",
      description: "A strategic initiative to modernize financial services through open banking models, emphasizing transparency, security, and customer empowerment.",
      image: "/openbanking.png",
      category: "Business",
      tags: ["Open Banking", "FinTech", "API", "Cybersecurity", "Data Transparency"],
      detailedDescription: `
        This initiative proposes a comprehensive open banking framework designed to transform traditional banking systems. Leveraging third-party APIs and modern IT solutions, the framework focuses on:
        
        • Establishing robust governance with clear policies that integrate environmental and social responsibilities.
        • Building a secure and scalable infrastructure through cloud computing, hybrid models, and BYOD approaches.
        • Enhancing customer trust via transparent data practices, informed consent, and stringent cybersecurity measures.
        
        Drawing on insights from international examples and successful case studies, this project outlines how open banking can replace outdated banking practices with agile, customer-centric, and secure financial services.
        
        This presentation was a collaborative group effort delivered for a case competition hosted by ITMSA at FBTC (Future of Business Technology Conference).
      `,
      challenges: "Integrating innovative API solutions with legacy systems, ensuring data security and privacy, and educating consumers to build trust in a rapidly evolving digital landscape.",
      solutions: "Developed a modular strategy inspired by global open banking models, incorporating best practices in cybersecurity, governance, and consumer engagement to facilitate a smooth transition and promote sustainable financial innovation.",
      link: "https://docs.google.com/presentation/d/1xOB2Q0rU4IYucIJZvZSiG94OYv4H-zvm/edit?usp=sharing&ouid=115504416394371835946&rtpof=true&sd=true"
    },
    {
      id: 4,
      title: "Breakthrough Program Mentor",
      description: "Mentor guiding first-year students through academic and professional workshops at the Ted Rogers School of Management.",
      image: "/Breakthroughmentor.jpg",
      category: "Business",
      tags: ["Mentorship", "Leadership", "Coaching", "Workshops"],
      detailedDescription: `
        As a mentor in the Breakthrough Program, I guided first-year students through a series of academic and professional workshops designed to ease their transition into the Toronto Metropolitan University community. The program focuses on developing personal, professional, and academic skills, empowering students to break out of their shell and form meaningful relationships.
        
        Key aspects of the program include:
        • Interactive workshops that cover both academic challenges and career development.
        • One-on-one mentoring sessions to provide personalized guidance.
        • Opportunities to network with like-minded peers and experienced professionals.
        • Continuous support beyond scheduled sessions to foster growth and leadership.
        
        This role honed my leadership and coaching abilities, while contributing to the development of future leaders at the Ted Rogers School of Management.
      `,
      challenges: "Balancing diverse student needs and ensuring that each mentee received personalized support while maintaining engaging and effective workshop sessions.",
      solutions: "Implemented structured workshop frameworks and scheduled dedicated mentoring sessions, creating an environment that encouraged open communication, collaboration, and continuous personal development.",
      link: "https://www.trssociety.ca/breakthrough-program",
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
          Projects and Professional Development
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
                  className="w-full h-full object-cover rounded-lg mb-4"
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

