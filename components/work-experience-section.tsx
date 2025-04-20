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
      id: "salvation-army",
      company: "The Salvation Army: Territorial Headquarters",
      role: "Office Assistant",
      period: "May 2024 - July 2024",
      location: "Toronto, ON, Canada",
      description:
        "Processed 100,000+ general ledger invoices and created Excel/Power BI reports for 150+ ministry units, delivering actionable procurement insights.",
      logo: "/Thesalvationarmylogo.png",
    },
    {
      id: "tmu-recreation",
      company: "TMU: Department of Athletics and Recreation",
      role: "Intramural Assistant",
      period: "September 2023 - Present",
      location: "Toronto, ON, Canada",
      description:
        "Collaborated with a 9-person officiating team to organize weekly volleyball intramurals for 200+ participants while maintaining professional standards.",
      logo: "/TMUathleticslogo.jpg",
    },
    {
      id: "google-developers",
      company: "Google Developers Group on Campus: TMU",
      role: "Corporate Relations Director",
      period: "September 2024 - Present",
      location: "Toronto, ON, Canada",
      description: "Developed automated email outreach systems and spearheaded 500+ outreach initiatives, increasing sponsorship emails by 150%.",
      logo: "/GDGlogo.png",
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
        <h2 className="text-3xl font-medium text-center mb-12 text-gray-900 dark:text-white">
          Work Experience
          <div className="h-1 w-20 bg-[hsl(var(--primary))] mx-auto mt-2 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[var(--card)] rounded-lg overflow-hidden md-card md-elevation-1 hover:md-elevation-3 transition-all duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col flex-grow">
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
                    <p className="text-[hsl(var(--primary))] dark:text-[hsl(var(--primary))] font-medium">{experience.company}</p>
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

                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{experience.description}</p>

                <div className="mt-auto">
                  <Link href={`/experience/${experience.id}`}>
                    <Button className="w-full bg-[hsl(var(--primary))] hover:bg-[hsla(var(--primary),0.8)] text-white flex items-center justify-center material-button">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

