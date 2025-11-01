import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getProject, getAllProjects } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Figma, ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Philos Portfolio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            
            {/* Role, Timeline, Tools metadata */}
            {(project.role || project.timeline || project.tools) && (
              <div className="space-y-2 mb-6">
                {project.role && (
                  <p className="text-sm">
                    <strong>Role:</strong> {project.role}
                  </p>
                )}
                {project.timeline && (
                  <p className="text-sm">
                    <strong>Timeline:</strong> {project.timeline}
                  </p>
                )}
                {project.tools && (
                  <p className="text-sm">
                    <strong>Tools:</strong> {project.tools}
                  </p>
                )}
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="relative w-full h-[400px] bg-muted rounded-lg overflow-hidden mb-8">
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              )}
            </div>

            {(project.links.live || project.links.github || project.links.figma) && (
              <div className="flex flex-wrap gap-4">
                {project.links.live && (
                  <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <Button>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                  </Link>
                )}
                {project.links.github && (
                  <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                  </Link>
                )}
                {project.links.figma && (
                  <Link href={project.links.figma} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      <Figma className="mr-2 h-4 w-4" />
                      Figma Design
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </header>

          {/* New markdown content format */}
          {project.content ? (
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {project.content}
              </ReactMarkdown>
            </div>
          ) : (
            /* Fallback to old format if no content field */
            <div className="space-y-12">
              {project.problem && (
                <section>
                  <h2 className="text-3xl font-semibold mb-4">Problem</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </section>
              )}

              {project.approach && (
                <section>
                  <h2 className="text-3xl font-semibold mb-4">Approach</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.approach}
                  </p>
                </section>
              )}

              {project.impact && (
                <section>
                  <h2 className="text-3xl font-semibold mb-4">Impact</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.impact}
                  </p>
                </section>
              )}
            </div>
          )}
        </article>

        <div className="mt-16 pt-8 border-t">
          <Link href="/projects">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
