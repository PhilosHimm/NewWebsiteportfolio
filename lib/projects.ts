export interface Project {
  slug: string
  title: string
  description: string
  image: string
  tags: string[]
  problem: string
  approach: string
  impact: string
  links: {
    live?: string
    github?: string
    figma?: string
  }
}

export const projects: Project[] = [
  {
    slug: "studyspots",
    title: "StudySpots",
    description: "A web platform to discover and share the best study locations around campus",
    image: "/projects/studyspots.jpg",
    tags: ["UX Design", "React", "Next.js", "Tailwind CSS"],
    problem:
      "Students struggle to find quiet, productive study spaces on campus, especially during exam season. There was no centralized platform to discover, rate, and share study locations.",
    approach:
      "Conducted user interviews with 20+ students to understand their study habits and pain points. Designed a mobile-first interface with location search, filters for amenities (WiFi, outlets, noise level), and a rating system. Built the MVP using Next.js and integrated with campus maps API.",
    impact:
      "Launched to 500+ active users in the first month. Average session duration of 8 minutes. 85% of users reported finding new study spots through the platform. Featured in the university's innovation newsletter.",
    links: {
      live: "https://studyspots-demo.com",
      github: "https://github.com/PhilosHimm/studyspots",
      figma: "https://figma.com/studyspots-design",
    },
  },
  {
    slug: "traic-website",
    title: "TRAIC Website Redesign",
    description: "Complete website redesign for the Toronto AI Community organization",
    image: "/projects/traic.jpg",
    tags: ["Web Design", "React", "TypeScript", "Framer Motion"],
    problem:
      "TRAIC's existing website had poor navigation, outdated design, and low engagement. Members struggled to find event information and resources. The site was not mobile-responsive.",
    approach:
      "Led a complete UX audit and stakeholder interviews. Created wireframes and prototypes focusing on clear information architecture. Implemented a modern, accessible design system with smooth animations. Built with React and TypeScript for maintainability.",
    impact:
      "50% increase in event registrations within 3 months. Mobile traffic increased by 120%. Average page load time reduced from 4.2s to 1.1s. Positive feedback from 40+ community members.",
    links: {
      live: "https://traic.ca",
      github: "https://github.com/PhilosHimm/traic-website",
    },
  },
  {
    slug: "ceid100",
    title: "CEID100 Learning Platform",
    description: "Interactive learning platform for entrepreneurship and innovation course",
    image: "/projects/ceid100.jpg",
    tags: ["Education", "Next.js", "PostgreSQL", "Prisma"],
    problem:
      "The CEID100 course lacked an engaging online platform for students to submit assignments, collaborate on projects, and access resources. Email-based submission was inefficient and disorganized.",
    approach:
      "Designed and developed a full-stack learning management system with authentication, file uploads, project collaboration tools, and an admin dashboard. Prioritized simplicity and accessibility for first-year students.",
    impact:
      "Served 200+ students across 3 semesters. 95% assignment submission rate (up from 78%). Reduced instructor workload by 40% through automated grading workflows. Won the course innovation award.",
    links: {
      github: "https://github.com/PhilosHimm/ceid100-platform",
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}
