"use client" // Add this directive for client-side hooks and components

import React, { JSX } from 'react'
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavBar } from "@/components/nav-bar"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { motion } from "framer-motion" // Correct import

interface ExperiencePageProps {
  params: {
    id: string
  }
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
  // This would typically come from a database or API
  const experiences = {
    "salvation-army": {
      company: "The Salvation Army: Territorial Headquarters",
      role: "Office Assistant",
      period: "May 2024 - July 2024",
      location: "Canada & Bermuda",
      logo: "/Thesalvationarmylogo.png",
      description:
        "Worked as an Office Assistant at The Salvation Army's Territorial Headquarters, focusing on financial data processing and reporting.",
      responsibilities: [
        "Analyzed over 100,000 general ledger transactions using advanced Excel functions, improving accuracy and data interpretation",
        "Streamlined financial reporting processes by applying automation and structured logic in Excel",
        "Developed Excel and Power BI dashboards to deliver actionable procurement insights across 150+ ministry units",
        "Supported strategic planning by identifying spending trends and preparing summarized insights for decision-making",
        "Coordinated cross-functional tasks with the Supplies & Purchasing team, contributing to smooth project execution",
        "Improved invoice filing system for 200+ records, reducing document retrieval time by 40%"
      ],
      achievements: [
        "Applied advanced Excel formulas (INDEX-MATCH, IFs, pivot tables) to increase processing speed and improve data reliability by 30%",
        "Created automated reporting templates that enhanced presentation quality and aided procurement strategy",
        "Successfully managed 15+ projects by prioritizing tasks, integrating feedback, and ensuring timely delivery of insights",
        "“Philos has shown notable development in project management skills and demonstrated a strong willingness to grow and take on challenges.” – Estee Lau, Supervisor, Summer 2024"
      ],
      tools: ["Excel", "Power BI", "Microsoft Office Suite", "Records Management", "Data Analysis"],
    },
    "tmu-recreation": {
      company: "TMU: Department of Athletics and Recreation",
      role: "Intramural Assistant",
      period: "September 2023 - Present",
      location: "Toronto, CA",
      logo: "/TMUathleticslogo.jpg",
      description:
        "Working as an Intramural Assistant at Toronto Metropolitan University's Department of Athletics and Recreation, organizing sports activities and maintaining professional standards.",
      responsibilities: [
        "Collaborated with a 9-person officiating team to organize weekly volleyball intramurals",
        "Ensured consistent rule enforcement and smooth game flow for more than 200 participants",
        "Interacted with 100+ participants and stakeholders to maintain professional standards",
        "Built strong interpersonal relationships with both internal and external clients",
        "Resolved conflicts and addressed participant concerns during sports activities"
      ],
      achievements: [
        "Successfully managed weekly volleyball intramurals for 200+ participants",
        "Developed effective communication skills through regular interaction with diverse stakeholders",
        "Maintained high standards of professionalism and service excellence",
        "Contributed to positive student experiences in campus recreational activities"
      ],
      tools: ["Event Management", "Customer Service", "Team Coordination", "Conflict Resolution", "Sports Rules Enforcement"],
    },
    "google-developers": {
      company: "Google Developers Group on Campus: TMU",
      role: "Corporate Relations Director",
      period: "September 2024 - Present",
      location: "Toronto, CA",
      logo: "/GDGlogo.png",
      description: "Serving as Corporate Relations Director for the Google Developers Group at TMU, focusing on partnership development and outreach.",
      responsibilities: [
        "Developed and implemented an automated email outreach system integrated with an Excel database",
        "Used Power Automate to streamline communication processes and track outreach effectiveness",
        "Consulted with cross-functional teams to prioritize incoming requests and manage stakeholder communications",
        "Reinforced best practices for timely project execution and relationship management",
        "Spearheaded over 500+ outreach initiatives through multiple channels",
        "Cultivated partnerships with prospective sponsors by aligning their objectives with GDG's goals"
      ],
      achievements: [
        "Increased sponsorship emails by 150% through automated email outreach system",
        "Successfully initiated and maintained relationships with corporate partners",
        "Improved team efficiency by implementing standardized communication processes",
        "Created sustainable outreach strategies that enhanced the organization's visibility"
      ],
      tools: ["Power Automate", "Excel", "Email Marketing", "LinkedIn", "Relationship Management", "Project Coordination"],
    },
  }

  const experience = experiences[params.id as keyof typeof experiences]
  const experienceKeys = Object.keys(experiences)

  const getNextExperienceId = () => {
    const experienceKeys = Object.keys(experiences);
    const currentIndex = experienceKeys.indexOf(params.id);
    const nextIndex = (currentIndex + 1) % experienceKeys.length;
    return experienceKeys[nextIndex];
  };

  const nextExperienceId = getNextExperienceId();

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <NavBar isExperiencePage={true} />
        <div className="text-center">
          <h1 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">Experience not found</h1>
          <Link href="/" className="text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <NavBar isExperiencePage={true} />
      <div className="container mx-auto px-4 py-6 mt-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/#experience" className="inline-flex items-center text-blue-600 dark:text-blue-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <Link 
            href={`/experience/${nextExperienceId}`} 
            className="inline-flex items-center text-blue-600 dark:text-blue-400"
          >
            Next Experience
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <motion.div
          key={params.id} // Key for animation trigger on route change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 mb-4 md:mb-0 md:mr-6">
                <Image
                  src={experience.logo || "/placeholder.svg"}
                  alt={`${experience.company} logo`}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-2">
                  {experience.role}
                </h1>
                <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-2">{experience.company}</p>
                <div className="flex flex-col md:flex-row md:items-center text-gray-500 dark:text-gray-400 text-sm">
                  <span className="mb-1 md:mb-0 md:mr-4">{experience.period}</span>
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Overview</h2>
              <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                {experience.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Key Achievements</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                {experience.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Tools/Skills used</h2>
              <div className="flex flex-wrap gap-2">
                {experience.tools.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 pb-12">
          <PaginationComponent experiences={experienceKeys} currentId={params.id} />
        </div>
      </div>
    </main>
  )
}

// Corrected Pagination Component with explicit return type
function PaginationComponent({ experiences, currentId }: { experiences: string[]; currentId: string }): JSX.Element { // Add explicit return type
  const currentIndex = experiences.indexOf(currentId);
  const prevId = experiences[(currentIndex - 1 + experiences.length) % experiences.length];
  const nextId = experiences[(currentIndex + 1) % experiences.length];

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`/experience/${prevId}`} />
        </PaginationItem>
        {experiences.map((expId: string, index: number) => (
          <PaginationItem key={expId}>
            <PaginationLink href={`/experience/${expId}`} isActive={expId === currentId}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href={`/experience/${nextId}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

