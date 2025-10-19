"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const animationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      }

  if (!mounted) return null

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div {...animationProps}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Hi! I'm Philos
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            An aspiring UX/Product designer and business analyst passionate about creating 
            impactful digital experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects">
              <Button 
                size="lg" 
                className="group focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link href="/resume">
              <Button 
                size="lg" 
                variant="outline"
                className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            📍 Toronto, ON
          </p>
        </motion.div>
      </div>
    </section>
  )
}

