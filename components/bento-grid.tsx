"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Camera, Code, Mail, User } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const BentoCard = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("group relative overflow-hidden", className)}
    >
      <Card className="h-full border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/20">
        {children}
      </Card>
    </motion.div>
  )
}

export function BentoGrid() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          
          {/* Large Feature Card - Projects */}
          <BentoCard className="md:col-span-2 lg:row-span-2">
            <CardContent className="p-6 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
              <div className="relative z-10">
                <div className="p-3 rounded-2xl bg-primary/10 w-fit mb-4">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Featured Projects</h3>
                <p className="text-muted-foreground mb-4">
                  Explore my latest design and development work
                </p>
              </div>
              <Link href="/projects" className="relative z-10">
                <Button className="w-full group/btn">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </BentoCard>

          {/* Quick Stats */}
          <BentoCard>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  3+
                </div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </CardContent>
          </BentoCard>

          {/* Skills Highlight */}
          <BentoCard>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  5+
                </div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </CardContent>
          </BentoCard>

          {/* About Card */}
          <BentoCard className="lg:col-span-2">
            <CardContent className="p-6 h-full flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="p-2 rounded-xl bg-primary/10 w-fit mb-2">
                  <User className="h-6 w-6 text-primary" />
                </div>
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
          </BentoCard>

          {/* Photography Card */}
          <BentoCard>
            <CardContent className="p-6 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
              <div className="relative z-10">
                <div className="p-2 rounded-xl bg-primary/10 w-fit mb-2">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">Photography</h3>
                <p className="text-sm text-muted-foreground">
                  Visual stories
                </p>
              </div>
              <Link href="/photography" className="relative z-10 text-sm text-primary hover:underline inline-flex items-center">
                View Gallery
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardContent>
          </BentoCard>

          {/* Experience Card */}
          <BentoCard>
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="p-2 rounded-xl bg-primary/10 w-fit mb-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
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
          </BentoCard>

          {/* Contact CTA */}
          <BentoCard className="md:col-span-2">
            <CardContent className="p-6 h-full flex items-center justify-between gap-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5" />
              <div className="flex-1 relative z-10">
                <div className="p-2 rounded-xl bg-primary/10 w-fit mb-2">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">Let's Work Together</h3>
                <p className="text-sm text-muted-foreground">
                  Have a project in mind? Let's chat!
                </p>
              </div>
              <Link href="/contact" className="relative z-10">
                <Button>
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </BentoCard>

        </div>
      </div>
    </section>
  )
}
