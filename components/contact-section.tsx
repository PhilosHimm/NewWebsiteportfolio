"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }
      
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError((error as Error).message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        
        <div className="mb-8">
          <p className="text-lg mb-6">
            I'm always open to discussing new opportunities, collaborations, or just chatting about design and technology.
          </p>
          
          <div className="flex gap-4 mb-8">
            <Link href="https://www.linkedin.com/in/philos-himm/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://github.com/PhilosHimm" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="mailto:phimm@torontomu.ca">
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center h-full py-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
            <p className="text-muted-foreground">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitError && (
              <div className="p-3 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md text-sm">
                {submitError}
              </div>
            )}
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formState.name} onChange={handleChange} required className="mt-2" />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required className="mt-2" />
            </div>
            
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" value={formState.message} onChange={handleChange} required className="mt-2" rows={6} />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </span>
              )}
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  )
}

