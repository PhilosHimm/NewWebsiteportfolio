import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavBar } from "@/components/nav-bar"
// new import for pagination
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

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
      logo: "/placeholder.svg?height=120&width=120",
      description:
        "Worked as an Office Assistant at The Salvation Army's Territorial Headquarters, focusing on financial data processing and reporting.",
      responsibilities: [
        "Processed 100,000+ general ledger purchases and sales invoices by implementing advanced Excel functions",
        "Improved data accuracy and expedited financial reporting through efficient invoice processing",
        "Created Excel and Power BI reports for 150+ ministry units, delivering actionable procurement insights",
        "Enhanced strategic planning and cost optimization through data analysis",
        "Collaborated with supplies and purchasing teams to coordinate mission support activities",
        "Maintained an efficient records system by filing and archiving 200+ invoices, reducing retrieval times"
      ],
      achievements: [
        "Implemented advanced Excel functions that improved data processing efficiency by 30%",
        "Developed reporting systems that provided actionable insights for strategic planning",
        "Ensured proper documentation and reduced document retrieval time by 40%",
        "Contributed to seamless project execution and timely completion of mission-critical tasks"
      ],
      technologies: ["Excel", "Power BI", "Microsoft Office Suite", "Records Management", "Data Analysis"],
    },
    "tmu-recreation": {
      company: "TMU: Department of Athletics and Recreation",
      role: "Intramural Assistant",
      period: "September 2023 - Present",
      location: "Toronto, CA",
      logo: "/placeholder.svg?height=120&width=120",
      description:
        "Working as an Intramural Assistant at Toronto Metropolitan University's Department of Athletics and Recreation, organizing sports activities and maintaining professional standards.",
      responsibilities: [
        "Collaborated with a 9-person officiating team to organize weekly volleyball intramurals",
        "Ensured consistent rule enforcement and smooth game flow for more than 200 participants",
        "Interacted with 100+ participants and stakeholders to maintain professional standards",
        "Built strong interpersonal relationships with both internal and external clients",
        "Coordinated scheduling and logistics for weekly intramural events",
        "Resolved conflicts and addressed participant concerns during sports activities"
      ],
      achievements: [
        "Successfully managed weekly volleyball intramurals for 200+ participants",
        "Developed effective communication skills through regular interaction with diverse stakeholders",
        "Maintained high standards of professionalism and service excellence",
        "Contributed to positive student experiences in campus recreational activities"
      ],
      technologies: ["Event Management", "Customer Service", "Team Coordination", "Conflict Resolution", "Sports Rules Enforcement"],
    },
    "google-developers": {
      company: "Google Developers Group on Campus: TMU",
      role: "Corporate Relations Director",
      period: "September 2024 - Present",
      location: "Toronto, CA",
      logo: "/placeholder.svg?height=120&width=120",
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
      technologies: ["Power Automate", "Excel", "Email Marketing", "LinkedIn", "Relationship Management", "Project Coordination"],
    },
  }

  const experience = experiences[params.id as keyof typeof experiences]
  
  // NEW: Compute experience keys to pass into the PaginationDemo
  const experienceKeys = Object.keys(experiences)

  // Get the next experience ID
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
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <Link href="/#experience" className="inline-flex items-center text-blue-600 dark:text-blue-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Experience
          </Link>
          <Link 
            href={`/experience/${nextExperienceId}`} 
            className="inline-flex items-center text-blue-600 dark:text-blue-400"
          >
            Next Experience
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
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
              <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
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
        </div>

        {/* Replace static PaginationDemo with dynamic pagination */}
        <div className="mt-12">
          <PaginationDemo experiences={experienceKeys} currentId={params.id} />
        </div>
      </div>
    </main>
  )
}

// Replace existing PaginationDemo with a dynamic one
export function PaginationDemo({ experiences, currentId }: { experiences: string[]; currentId: string }) {
  const currentIndex = experiences.indexOf(currentId);
  const prevId = experiences[(currentIndex - 1 + experiences.length) % experiences.length];
  const nextId = experiences[(currentIndex + 1) % experiences.length];

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={`/experience/${prevId}`} />
        </PaginationItem>
        {experiences.map((expId, index) => (
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

