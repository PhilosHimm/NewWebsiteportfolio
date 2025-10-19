import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Camera, Code, Mail, User } from "lucide-react"
import Image from "next/image"

export function BentoGrid() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          
          {/* Large Feature Card - Projects */}
          <Card className="md:col-span-2 lg:row-span-2 overflow-hidden group hover:shadow-lg transition-shadow">
            <CardContent className="p-6 h-full flex flex-col justify-between bg-gradient-to-br from-primary/10 to-primary/5">
              <div>
                <Code className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">Featured Projects</h3>
                <p className="text-muted-foreground mb-4">
                  Explore my latest design and development work
                </p>
              </div>
              <Link href="/projects">
                <Button className="w-full group/btn">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="text-4xl font-bold mb-2">3+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </CardContent>
          </Card>

          {/* Skills Highlight */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </CardContent>
          </Card>

          {/* About Card */}
          <Card className="lg:col-span-2 overflow-hidden group hover:shadow-lg transition-shadow">
            <CardContent className="p-6 h-full flex items-center justify-between gap-4">
              <div className="flex-1">
                <User className="h-6 w-6 mb-2 text-primary" />
                <h3 className="font-bold mb-1">About Me</h3>
                <p className="text-sm text-muted-foreground">
                  Learn more about my background and experience
                </p>
              </div>
              <Link href="/about">
                <Button variant="outline" size="sm">
                  Read More
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Photography Card */}
          <Card className="overflow-hidden group hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-500/10 to-purple-500/10">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Camera className="h-6 w-6 mb-2 text-primary" />
                <h3 className="font-bold mb-1">Photography</h3>
                <p className="text-sm text-muted-foreground">
                  Visual stories
                </p>
              </div>
              <Link href="/photography" className="text-sm text-primary hover:underline inline-flex items-center">
                View Gallery
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          {/* Experience Card */}
          <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <Briefcase className="h-6 w-6 mb-2 text-primary" />
                <h3 className="font-bold mb-1">Experience</h3>
                <p className="text-sm text-muted-foreground">
                  My professional journey
                </p>
              </div>
              <Link href="/resume" className="text-sm text-primary hover:underline inline-flex items-center">
                View Resume
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="md:col-span-2 overflow-hidden group hover:shadow-lg transition-shadow bg-gradient-to-r from-primary/10 to-primary/5">
            <CardContent className="p-6 h-full flex items-center justify-between gap-4">
              <div className="flex-1">
                <Mail className="h-6 w-6 mb-2 text-primary" />
                <h3 className="font-bold mb-1">Let's Work Together</h3>
                <p className="text-sm text-muted-foreground">
                  Have a project in mind? Let's chat!
                </p>
              </div>
              <Link href="/contact">
                <Button>
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
