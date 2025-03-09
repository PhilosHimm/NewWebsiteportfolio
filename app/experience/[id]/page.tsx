import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ExperiencePageProps {
  params: {
    id: string
  }
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
  // This would typically come from a database or API
  const experiences = {
    google: {
      company: "Google",
      role: "Senior Frontend Developer",
      period: "2020 - Present",
      location: "Mountain View, CA",
      logo: "/placeholder.svg?height=120&width=120",
      description:
        "Led development of Material Design components and implemented key features for Google Cloud Platform.",
      responsibilities: [
        "Led a team of 5 frontend developers to implement Material Design components across Google Cloud Platform",
        "Developed and maintained a component library used by 20+ internal teams",
        "Improved application performance by 40% through code optimization and lazy loading strategies",
        "Collaborated with UX designers to ensure consistent implementation of design specifications",
        "Mentored junior developers and conducted code reviews to maintain code quality",
      ],
      achievements: [
        "Received Google Peer Bonus for exceptional contributions to the Material Design system",
        "Reduced bundle size by 30% through effective code splitting and tree shaking",
        "Presented at internal Google tech talks on modern frontend architecture",
        "Contributed to open source projects related to Material Design implementation",
      ],
      technologies: ["React", "TypeScript", "Material UI", "Storybook", "Jest", "Webpack"],
    },
    microsoft: {
      company: "Microsoft",
      role: "UI/UX Designer",
      period: "2018 - 2020",
      location: "Redmond, WA",
      logo: "/placeholder.svg?height=120&width=120",
      description:
        "Designed user interfaces for Microsoft 365 applications and contributed to the Fluent Design System.",
      responsibilities: [
        "Created user interface designs for Microsoft 365 applications using Figma and Adobe XD",
        "Collaborated with product managers to define user requirements and create wireframes",
        "Conducted user research and usability testing to validate design decisions",
        "Contributed to the evolution of Microsoft's Fluent Design System",
        "Worked closely with developers to ensure accurate implementation of designs",
      ],
      achievements: [
        "Redesigned key workflows in Microsoft Teams that improved user efficiency by 25%",
        "Created a design system component library that reduced design inconsistencies by 60%",
        "Won internal design hackathon for innovative accessibility features",
        "Mentored junior designers and interns on UX best practices",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "HTML/CSS"],
    },
    amazon: {
      company: "Amazon",
      role: "Full Stack Developer",
      period: "2016 - 2018",
      location: "Seattle, WA",
      logo: "/placeholder.svg?height=120&width=120",
      description: "Developed and maintained e-commerce features for Amazon's retail platform using React and Node.js.",
      responsibilities: [
        "Developed and maintained frontend and backend features for Amazon's retail platform",
        "Implemented responsive UI components using React and Redux",
        "Built RESTful APIs using Node.js and Express",
        "Optimized database queries and implemented caching strategies",
        "Participated in on-call rotations to support production systems",
      ],
      achievements: [
        "Implemented a feature that increased conversion rates by 15% for specific product categories",
        "Reduced API response times by 50% through query optimization and caching",
        "Received two 'Just Do It' awards for quickly addressing critical customer-facing issues",
        "Contributed to internal tools that improved developer productivity",
      ],
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "AWS", "Docker"],
    },
  }

  const experience = experiences[params.id as keyof typeof experiences]

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
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
      <div className="container mx-auto px-4 py-12">
        <Link href="/#experience" className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Experience
        </Link>

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
      </div>
    </main>
  )
}

