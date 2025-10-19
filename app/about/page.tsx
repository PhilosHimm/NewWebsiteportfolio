import type { Metadata } from "next"

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
          Hi! I'm Philos, an aspiring UX/Product designer and business analyst passionate about 
          creating impactful digital experiences.
        </p>
        <p className="text-lg mb-4">
          I'm currently studying Business Technology Management at Toronto Metropolitan University, 
          where I'm learning to bridge the gap between business needs and technical solutions.
        </p>
        <p className="text-lg">
          My focus is on turning complex data into clean design, building user-focused digital 
          solutions with React/Next.js, and analyzing trends with Excel and Power BI.
        </p>
      </div>
    </main>
  )
}
