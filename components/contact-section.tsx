"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-medium text-center mb-12 text-gray-900 dark:text-white">
          Contact Me
          <div className="h-1 w-20 bg-blue-600 mx-auto mt-2 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-medium mb-6 text-gray-900 dark:text-white">Get In Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out if you have any questions about my work or if you'd like to collaborate on a
              project.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</h4>
                  <p className="text-gray-900 dark:text-white">phimm@torontomu.ca</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Phone</h4>
                  <p className="text-gray-900 dark:text-white">(416) 846-5819</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Location</h4>
                  <p className="text-gray-900 dark:text-white">Toronto, ON</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300 mb-4">
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
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {submitError && (
                    <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-md text-sm">
                      {submitError}
                    </div>
                  )}
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

