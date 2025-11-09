export interface Project {
  slug: string
  title: string
  description: string
  image: string
  video?: string // Optional video preview
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
    description: "A mobile app prototype to discover and share the best study locations around campus",
    image: "/project-pics/studyspotsfigmapage.png",
    video: "/project-pics/studyspotspreview.mp4",
    tags: ["UX Design", "Mobile Design", "Figma", "Prototyping", "Course Project"],
    role: "UX Designer & Researcher",
    timeline: "May - July 2025 (12 weeks)",
    tools: "Figma, Notion, Google Forms, Nielsen Heuristics",
    content: `**Course:** CFPN535 Final Project, Toronto Metropolitan University

---
    
## The Problem
Toronto students waste valuable study time wandering campus looking for quiet spaces with outlets and Wi-Fi. Between classes, they often arrive at cafés or libraries only to find them overcrowded or unsuitable. Generic tools like Google Maps don't provide study-specific filters (noise level, outlet availability, seating comfort), leaving students frustrated during peak exam periods.

**How might we help students quickly find reliable study spaces that match their specific academic needs?**

---

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

---

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

---

## Lo-Fi Prototyping

Created hand-drawn wireframes for:

- Home view with category filters (University, Library, Café, Co-working)
- Search modes (List vs. Map view toggle)
- Filter panel (noise level, category, distance)
- Spot detail view with ratings and reviews
- Profile and saved spots

**Platform pivot:** Initially planned as mobile-optimized web app, shifted to **fully native mobile** based on feedback that students primarily use phones on campus.

---

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

---

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

---

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
    title: "TRAIC Website Creation",
    description: "Complete website creation for the Ted Roger's Alternative Investment Club (TRAIC)",
    image: "/project-pics/traichomepage.png",
    video: "/project-pics/traicpreview.mp4",
    tags: ["Web Design", "React", "TypeScript", "Framer Motion"],
    content: `## Project Overview

This project involved a complete new website design and development for the Ted Rogers Alternative Investment Club (TRAIC) at Toronto Metropolitan University. The goal was to create a modern, user-friendly platform to showcase the club's activities, events, and resources for members and prospective students.

*Detailed case study coming soon...*

## Key Features

- Modern, responsive design
- Improved navigation and information architecture
- Performance optimizations
- Mobile-first approach`,
    links: {
      live: "https://traictmu.vercel.app",
      // github: "https://github.com/PhilosHimm/traic-website",
    },
  },
  {
    slug: "ceid100",
    title: "Feed Escape Guide: Digital Wellness Education Platform",
    description: "Interactive web application teaching digital literacy to Toronto high school students",
    image: "/project-pics/ceid100homepage.png",
    video:"/project-pics/ceid100preview.mp4",
    tags: ["React", "TypeScript", "Tailwind CSS", "UX Design", "Course Project"],
    role: "Frontend Development & UX Designer",
    timeline: "May–July 2025 (13 weeks)",
    tools: "React, TypeScript, Tailwind CSS, Vite, shadcn/ui",
    content: `**Course:** CEID100 Capstone Project, Toronto Metropolitan University

---

As the technical lead on this collaborative project, I was responsible for:

* Web application architecture and development
* UI/UX implementation and responsive design
* Integration of content provided by the research team
* Deployment and hosting on Vercel
* Leveraging AI tools to accelerate development workflow

**Collaboration:** Worked with team members who conducted content research, academic source curation, and educational material development aligned with CEID100 course requirements.

---

## The Challenge

Create educational media teaching digital literacy to Toronto high school students who use social media daily but lack understanding of its underlying mechanisms and risks. The deliverable needed to be engaging, research-backed, and actionable.

**Key constraints:**

* Target audience: 15–18 year olds accustomed to polished digital experiences
* Must address multiple digital wellness topics comprehensively
* Required academic rigor with proper citations
* Needed to work in classroom and self-study contexts

---

## The Solution

Built an interactive web application with five core learning modules covering algorithms, mental health, misinformation, privacy, and digital balance. Each module combines educational content with hands-on activities.

**Core Features:**

* **Interactive Quiz:** Scenario-based decision-making with scoring and instant feedback
* **Tracking Simulator:** Step-by-step visualization of how online tracking works
* **Animated Flowchart:** Shows how recommendation algorithms create filter bubbles
* **Tip Rating System:** Hands-on checklist for trying wellness strategies

---

## Design Process

### Research & Content Development

* Synthesized peer-reviewed research from digital media scholars
* Identified key pain points: sleep disruption, attention fragmentation, privacy erosion, misinformation
* Structured content around actionable takeaways students could implement immediately
* Created comprehensive sources page with proper academic attribution

### Information Architecture

* Designed modular structure allowing independent or sequential learning
* Built progressive disclosure: concepts build on each other
* Kept sections scannable with clear visual hierarchy
* Added navigation that works for both linear and exploratory learners

### Visual & Interaction Design

* Chose calming color palette to reduce cognitive load (students already overwhelmed by screens)
* Selected unique photography for each module creating distinct visual identity
* Designed interactive components as "learning by doing" experiences
* Ensured mobile-responsive layouts for on-the-go access

### Technical Implementation

**Stack:** React + TypeScript, Vite, Tailwind CSS, shadcn/ui

**Development Approach:**

Heavy use of GitHub Copilot throughout the build process. Rather than hand-coding every component, I focused on design direction, content structure, and UX decisions while leveraging AI pair programming to accelerate development. This "vibe coding" approach let me iterate quickly on interactive features and polish the user experience.

**Key Decisions:**

* Modern component-based architecture with React Router for navigation
* shadcn/ui (Radix primitives) for accessible, production-ready components
* Tailwind for rapid styling iteration
* Static site generation for simple deployment

**Accessibility:**

* Semantic HTML with proper heading hierarchy
* ARIA labels for screen readers
* Keyboard navigation fully supported
* High contrast ratios meeting WCAG standards
* Mobile-optimized touch targets

---

## Results & Impact

**Academic Performance:** Achieved 92% grade on capstone project

**Learning Outcomes Delivered:**

* Students can identify engagement hooks and algorithmic manipulation
* Understand practical privacy protection techniques
* Apply verification strategies before sharing content
* Build sustainable digital wellness routines
* Make informed decisions about app permissions and data sharing

**Technical Achievements:**

* Production-ready application deployable to any static host
* Fully responsive across mobile, tablet, desktop
* Meets accessibility standards for inclusive education
* Clean, maintainable codebase following React best practices`,
    links: {
      github: "https://github.com/PhilosHimm/feed-escape-guide",
      live: "https://feed-escape-guide.vercel.app/",
    },
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}
