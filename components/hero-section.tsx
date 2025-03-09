"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="py-20">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blueaccent to-mint flex items-center justify-center text-darkgray text-3xl font-bold mb-4 mx-auto shadow-lg">
            P
          </div>
          <h1 className="text-4xl font-medium text-gray-900 dark:text-white mb-2">Portfolio</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">Material Design inspired development</p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-8">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-mint dark:bg-blue-900 mint:bg-mint text-blueaccent dark:text-blue-400 mint:text-darkgray hover:bg-mint/80 dark:hover:bg-blue-800 mint:hover:bg-mint/80"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn Profile</span>
              </Button>
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-mint dark:bg-blue-900 mint:bg-mint text-blueaccent dark:text-blue-400 mint:text-darkgray hover:bg-mint/80 dark:hover:bg-blue-800 mint:hover:bg-mint/80"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub Profile</span>
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-md text-center mb-10"
        >
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Welcome to my portfolio showcasing my projects, skills, and experience with a Google Material Design
            inspired interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 shadow-md"
              onClick={() => {
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View Experience
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-700 px-6"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="animate-bounce"
        >
          <ArrowDown className="text-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}

