export interface Project {
  slug: string
  title: string
  description: string
  image: string
  tags: string[]
  problem?: string
  approach?: string
  impact?: string
  // New format fields
  role?: string
  timeline?: string
  tools?: string
  content?: string // Markdown content for the full case study
  links: {
    live?: string
    github?: string
    figma?: string
  }
}

export const projects: Project[] = [
  {
    slug: "studyspotsto",
    title: "StudySpotsTO",
    description: "A web platform to discover and share the best study locations around campus",
    image: "/project-pics/studyspots-render.png",
    tags: ["UX Design", "Mobile Design", "Figma", "Prototyping"],
    role: "UX Designer & Researcher",
    timeline: "May - July 2025 (12 weeks)",
    tools: "Figma, Notion, Google Forms, Nielsen Heuristics",
    content: `## The Problem

Toronto students waste valuable study time wandering campus looking for quiet spaces with outlets and Wi-Fi. Between classes, they often arrive at cafés or libraries only to find them overcrowded or unsuitable. Generic tools like Google Maps don't provide study-specific filters (noise level, outlet availability, seating comfort), leaving students frustrated during peak exam periods.

**How might we help students quickly find reliable study spaces that match their specific academic needs?**


## Research

### Survey Insights (27 respondents)

Conducted user research across TMU, UofT, and other Toronto institutions:

- **74%** of students study outside home 3-4 times per week
- **4.48/5** agreement: "I would benefit from filtering spots by Wi-Fi, plugs, and noise"
- **4.00/5** agreement: "I find it difficult to locate good study spots on the go"

**Top priorities when choosing study spaces:**

1. Outlet availability (avg. rank 2.4)
2. Distance from campus (3.0)
3. Seating comfort (3.4)
4. Noise level (3.6)

**Key insight:** Students prioritize practical infrastructure over amenities. Wi-Fi ranked lower because it's assumed baseline—outlets and proximity matter most.

### Personas

Created **Emily Chen**, a 21-year-old Commerce student with a 1-hour commute who studies in short blocks between classes. She needs fast, reliable information to maximize productivity during 35-minute gaps and values community contribution.


## Design Process

### Requirements Framework

Mapped user needs to functional requirements:

| User Need | Design Requirement |
| --- | --- |
| Find quiet spaces with outlets | Multi-filter system (Wi-Fi, noise, outlets, seating) |
| Avoid wasting time | Student-contributed reviews with photos and pros/cons |
| Access nearby options | GPS-based discovery sorted by walking distance |

### Use Cases & Task Analysis

Defined three core scenarios:

1. **Between-class gap:** 35-minute break, needs quick spot with outlets
2. **Early arrival:** 1 hour before class, wants quiet prep space
3. **Group meeting:** Last-minute collaboration, needs group seating

Broke down each task into subtasks with functional and non-functional requirements (e.g., "results load in <2 seconds," "WCAG 2.1 compliant").


## Lo-Fi Prototyping

Created hand-drawn wireframes for:

- Home view with category filters (University, Library, Café, Co-working)
- Search modes (List vs. Map view toggle)
- Filter panel (noise level, category, distance)
- Spot detail view with ratings and reviews
- Profile and saved spots

**Platform pivot:** Initially planned as mobile-optimized web app, shifted to **fully native mobile** based on feedback that students primarily use phones on campus.


## Evaluation

### Heuristic Analysis

Conducted peer and self-evaluation using Nielsen's heuristics:

**Critical issues identified:**

- **H1: Visibility of system status (Severity 2):** No confirmation when filters applied or reviews submitted
- **H8: Visual hierarchy (Severity 3):** Uniform text sizes made scanning difficult
- **H3: Navigation clarity (Severity 2):** No active state indicator on bottom nav

**Response to findings:**

- Added real-time filter confirmation tags
- Introduced typography scale (headings vs. body)
- Implemented active nav indicators
- Surfaced key amenities (outlets, Wi-Fi, noise) on result cards using badges


## Final Prototype

### High-Fidelity Screens (Figma)

Built polished mobile interface with:

**Core Features:**

1. **Location-based discovery:** GPS integration showing spots within 2km
2. **Detailed spot pages:** Hours, accessibility info, user reviews, photo galleries
3. **Quick review submission:** Star ratings, optional photos, confirmation messages
4. **Saved spots:** Profile section for bookmarks and review history

**Design System:**

- Clean visual hierarchy with Inter typeface
- Blue accent colors for CTAs, gray scale for hierarchy
- Touch-optimized 44px tap targets
- Icon system for amenities (outlet, Wi-Fi, noise, seating)

### MVP Scope Decisions

**Removed features:**

- Live crowd reporting (requires large user base)
- Gamification/leaderboards (added complexity)

**Focused on:** Curated, consistent user reviews that help students make informed decisions without relying on real-time data.


## Outcomes & Learnings

### Key Achievements

- Created user-centered solution addressing real pain point validated by 27+ students
- Applied full UX process: research → requirements → wireframes → evaluation → hi-fi prototype
- Demonstrated mobile-first design with accessibility considerations

### What I Learned

- **Scope management:** Cutting features (crowd levels, gamification) strengthened the core MVP
- **Research drives design:** Survey data directly shaped filter priorities (outlets > noise > hours)
- **Iteration matters:** Heuristic evaluation revealed 5+ usability issues that dramatically improved final prototype

### Next Steps

If developed further:

- User testing with interactive prototype
- Integration with City of Toronto Open Data for initial venue seeding
- Partnership exploration with local cafés for student discounts`,
    links: {
      live: "https://www.figma.com/proto/ZrvOI68J5WQV0Ao4mLkyxz/StudyspotsTO?node-id=2002-923&t=V0iRxN5zHb6XSSX3-1",
      figma: "https://www.figma.com/design/ZrvOI68J5WQV0Ao4mLkyxz/StudyspotsTO?node-id=2002-923&t=V0iRxN5zHb6XSSX3-1",
    },
  },
  {
    slug: "traic-website",
    title: "TRAIC Website Redesign",
    description: "Complete website redesign for the Toronto AI Community organization",
    image: "/projects/traic.jpg",
    tags: ["Web Design", "React", "TypeScript", "Framer Motion"],
    content: `## Project Overview

This project involved a complete redesign and rebuild of the Toronto AI Community (TRAIC) website.

*Detailed case study coming soon...*

## Key Features

- Modern, responsive design
- Improved navigation and information architecture
- Performance optimizations
- Mobile-first approach`,
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
    content: `## Project Overview

A full-stack learning management system designed for the CEID100 entrepreneurship and innovation course.

*Detailed case study coming soon...*

## Key Features

- User authentication and authorization
- Assignment submission and management
- Project collaboration tools
- Admin dashboard for instructors`,
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
