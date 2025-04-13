import { HeroSection } from "@/components/hero-section"
import { WorkExperienceSection } from "@/components/work-experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { NavBar } from "@/components/nav-bar"
import { TracingBeam } from "@/components/ui/tracing-beam"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <div className="container mx-auto px-4 pt-20 pb-24">
        <HeroSection />
        <div className="relative">
          <TracingBeam className="absolute left-0 w-full">
            <div className="invisible">
              <WorkExperienceSection />
              <ProjectsSection />
              <EducationSection />
              <SkillsSection />
              <ContactSection />
            </div>
          </TracingBeam>
          <div className="relative z-10">
            <WorkExperienceSection />
            <ProjectsSection />
            <EducationSection />
            <SkillsSection />
            <ContactSection />
          </div>
        </div>
      </div>
      <div className="h-16"></div> {/* Space for bottom navigation on mobile */}
    </main>
  )
}

