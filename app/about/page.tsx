import type { Metadata } from "next"
import { LinkPreview } from "@/components/ui/link-preview"

export const metadata: Metadata = {
  title: "About | Philos Portfolio",
  description: "Learn more about Philos - UX/Product designer and business analyst",
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="prose dark:prose-invert max-w-3xl">
        <p className="text-lg mb-4">
          👋 Hi there!
          I'm a 4th-year Business Technology Management co-op student at Toronto Metropolitan University (in a 5-year program), 
          passionate about using technology, data, and AI to drive innovation and impact.
        </p>
        <p className="text-lg mb-4">
          Currently, I'm working at the Ontario Public Service (GovTechON - Government Services Integration Cluster) as an Experience Designer, where I contribute to projects that improve digital services for Ontarians.
          Previously, I completed a summer co-op as a Business Analysis Assistant, Procurement at The Salvation Army Canada & Bermuda. There, I streamlined procurement operations across 150+ ministry units, automated workflows for 500+ staff,
          and turned large-scale financial data into actionable insights using Excel, Power BI, and SharePoint. I also designed outreach systems that boosted sponsorship engagement by 150% and managed campaigns connecting with 500+ potential sponsors.
        </p>
        <p className="text-lg">
          🤖 As an AI enthusiast, I actively integrate generative AI, GitHub Copilot, and automation tools into my work to accelerate coding, reduce repetitive tasks, and enhance productivity.
          My technical toolkit includes Python, React, TypeScript, Power BI, Power Automate, and AI-assisted development tools.
        </p>
        <p className="text-lg mb-4">
          Outside of work, I'm a three-time intramural volleyball captain, bubble tea explorer (roasted oolong milk tea with tapioca is my go-to), and a hobbyist photographer 
          (check out my work at{" "}
          <LinkPreview 
            url="https://philoshoots.pixieset.com/philosportfolio/" 
            className="text-blue-500 underline font-medium"
          >
            philoshoots.pixieset.com/philosportfolio/
          </LinkPreview>
          ).
        </p>
        <p className="text-lg mb-4">
          Always open to connecting with professionals, students, and anyone passionate about the intersection of business, technology, and AI!
        </p>
      </div>
    </main>
  )
}
