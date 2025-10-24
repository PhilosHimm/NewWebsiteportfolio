"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import SplitText from "@/components/split-text"

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

  // Container animation that orchestrates children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.5, // Updated animation speed to 500ms
      },
    },
  }

  // Individual item animations
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Updated animation speed to 500ms
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth motion
      },
    },
  }

  // Special animation for the profile picture
  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5, // Updated animation speed to 500ms
        delay: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  }

  // Button group animation
  const buttonGroupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // Updated animation speed to 500ms
        staggerChildren: 0.1,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5, // Updated animation speed to 500ms
      },
    },
  }

  if (!mounted) return null

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? undefined : "hidden"}
          animate={prefersReducedMotion ? undefined : "visible"}
        >
          <div className="mb-6 flex items-center justify-center gap-2 flex-wrap">
            <SplitText
              text="Hi! I'm Philos"
              tag="h1"
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
              splitType="chars"
              delay={50}
              duration={0.8}
              ease="power3.out"
              from={{ opacity: 0, y: 50, rotateX: -90 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              threshold={0.2}
              rootMargin="0px"
              textAlign="center"
            />
            <motion.span
              variants={prefersReducedMotion ? undefined : imageVariants}
              className="inline-flex items-center"
            >
              <Image
                src="/notionpfp.png"
                alt="Notion Profile Picture"
                width={50}
                height={50}
                className="rounded-full"
              />
            </motion.span>
          </div>

          <motion.p
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            An aspiring UX/Product designer and business analyst passionate about creating
            impactful <span className="font-serif italic">digital experiences</span>
          </motion.p>

          <motion.div
            variants={prefersReducedMotion ? undefined : buttonGroupVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div variants={prefersReducedMotion ? undefined : buttonVariants}>
              <Link href="/projects">
                <Button
                  size="lg"
                  className="group focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={prefersReducedMotion ? undefined : buttonVariants}>
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
            </motion.div>
          </motion.div>

          <motion.p
            variants={prefersReducedMotion ? undefined : itemVariants}
            className="text-sm text-muted-foreground mt-8"
          >
            📍 Toronto, ON
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

