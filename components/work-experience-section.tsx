"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface WorkExperience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  logo: string
}

export function WorkExperienceSection() {
  const [clickedCard, setClickedCard] = useState<string | null>(null)
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 })
  
  const experiences: WorkExperience[] = [
    {
      id: "salvation-army",
      company: "The Salvation Army: Territorial Headquarters",
      role: "Office Assistant",
      period: "May 2024 - July 2024",
      location: "Canada & Bermuda",
      description:
        "Processed 100,000+ general ledger invoices and created Excel/Power BI reports for 150+ ministry units, delivering actionable procurement insights.",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "tmu-recreation",
      company: "TMU: Department of Athletics and Recreation",
      role: "Intramural Assistant",
      period: "September 2023 - Present",
      location: "Toronto, CA",
      description:
        "Collaborated with a 9-person officiating team to organize weekly volleyball intramurals for 200+ participants while maintaining professional standards.",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "google-developers",
      company: "Google Developers Group on Campus: TMU",
      role: "Corporate Relations Director",
      period: "September 2024 - Present",
      location: "Toronto, CA",
      description: "Developed automated email outreach systems and spearheaded 500+ outreach initiatives, increasing sponsorship emails by 150%.",
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  const handleButtonClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    
    // Calculate absolute position of click in the document
    const x = e.clientX
    const y = e.clientY
    
    setRipplePosition({ x, y })
    setClickedCard(id)
    
    // Decreased timeout for faster navigation while still showing animation
    setTimeout(() => {
      window.location.href = `/experience/${id}`
    }, 1200)
  }

  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      {/* First ripple - solid fill expanding circle - slower initial animation */}
      {clickedCard && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 200, opacity: 1 }}
          transition={{ 
            duration: 2, 
            ease: [0.22, 0.03, 0.24, 1.0] // Slower start, faster finish
          }}
          className="fixed bg-blueaccent rounded-full z-50 pointer-events-none"
          style={{
            top: ripplePosition.y,
            left: ripplePosition.x,
            width: "20px",
            height: "20px",
            marginTop: "-10px",
            marginLeft: "-10px",
            transformOrigin: "center center",
          }}
        />
      )}
      
      {/* Second ripple - ring effect - adjusted timing */}
      {clickedCard && (
        <motion.div
          initial={{ scale: 0, opacity: 1, borderWidth: "10px" }}
          animate={{ scale: 200, opacity: 0, borderWidth: "1px" }}
          transition={{ 
            duration: 1.5, 
            ease: [0.1, 0.2, 0.3, 1.0], // More dramatic slow start
            opacity: { duration: 1.0 }
          }}
          className="fixed border-blueaccent rounded-full z-50 pointer-events-none"
          style={{
            top: ripplePosition.y,
            left: ripplePosition.x,
            width: "40px",
            height: "40px",
            marginTop: "-20px",
            marginLeft: "-20px",
            transformOrigin: "center center",
            borderStyle: "solid",
          }}
        />
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-medium text-center mb-12 text-gray-900 dark:text-white">Work Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full relative"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 relative mr-4 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={experience.logo || "/placeholder.svg"}
                      alt={`${experience.company} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">{experience.role}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.company}</p>
                  </div>
                </div>

                <div className="mb-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    {experience.period}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    {experience.location}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">{experience.description}</p>
                
                <div className="mt-auto">
                  <Button 
                    onClick={(e) => handleButtonClick(experience.id, e)} 
                    className="w-full bg-blueaccent hover:bg-blueaccent/80 text-white flex items-center justify-center relative"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

