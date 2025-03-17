"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useTheme } from "next-themes"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

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
          <img
            src="/ProfilePic.jpg"
            alt="Profile Picture"
            className="w-24 h-24 rounded-full mb-4 mx-auto shadow-lg object-cover object-[0,30%]"
          />
          <h1 className="text-4xl font-medium text-gray-900 dark:text-white mb-2">Philos Himm</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">Business Technology Management @ Toronto Metropolitan University</p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mb-8">
            <Link href="https://www.linkedin.com/in/philos-himm/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-blue-900 text-blueaccent dark:text-blue-400 hover:bg-blue-800"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn Profile</span>
              </Button>
            </Link>
            <Link href="https://github.com/PhilosHimm" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-blue-900 text-blueaccent dark:text-blue-400 hover:bg-blue-800"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub Profile</span>
              </Button>
            </Link>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Switch id="dark-mode" checked={theme === "dark"} onCheckedChange={toggleDarkMode} />
            <Label htmlFor="dark-mode">Dark Mode</Label>
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

