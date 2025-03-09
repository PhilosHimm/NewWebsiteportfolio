"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

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
  const experiences: WorkExperience[] = [
    {
      id: "google",
      company: "Google",
      role: "Senior Frontend Developer",
      period: "2020 - Present",
      location: "Mountain View, CA",
      description:
        "Led development of Material Design components and implemented key features for Google Cloud Platform.",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "microsoft",
      company: "Microsoft",
      role: "UI/UX Designer",
      period: "2018 - 2020",
      location: "Redmond, WA",
      description:
        "Designed user interfaces for Microsoft 365 applications and contributed to the Fluent Design System.",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "amazon",
      company: "Amazon",
      role: "Full Stack Developer",
      period: "2016 - 2018",
      location: "Seattle, WA",
      description: "Developed and maintained e-commerce features for Amazon's retail platform using React and Node.js.",
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="experience" className="py-16">
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
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
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

                <Link href={`/experience/${experience.id}`}>
                  <Button className="w-full bg-blueaccent hover:bg-blueaccent/80 text-white flex items-center justify-center mint:bg-mint mint:text-darkgray mint:hover:bg-mint/80">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

