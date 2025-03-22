"use client"

import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaCheckCircle, FaLaptopCode, FaTools, FaTrophy } from "react-icons/fa";

export function EducationSection() {
  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white relative"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block mr-2"><FaGraduationCap /></span>
          Education
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 mr-3">
                <FaGraduationCap className="text-blue-500 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Toronto Metropolitan University</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Bachelor of Commerce, Business Technology Management Co-op</p>
              </div>
            </div>
            <div className="pl-12">
              <p className="text-gray-500 dark:text-gray-400 mb-4 flex items-center">
                <span className="inline-block w-4 mr-2"><FaCheckCircle className="text-green-500" /></span>
                September 2022 - Expected April 2027
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <span className="font-medium text-gray-700 dark:text-gray-200">Relevant Courses:</span> Web design (UI/UX), Managerial Decision Making, Systems Analysis & Design
              </p>
              
              <div className="mt-4">
                <p className="text-gray-700 dark:text-gray-200 font-medium mb-3 flex items-center">
                  <span className="mr-2"><FaLaptopCode /></span>
                  Proficient with:
                </p>
                <div className="flex flex-wrap gap-2 ml-6">
                  {["Outlook", "Word", "PowerPoint", "Excel", "Power BI", "MS Teams", "HTML", "CSS"].map((skill, i) => (
                    <motion.span 
                      key={skill}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-gray-700 dark:text-gray-200 font-medium mb-3 flex items-center">
                  <span className="mr-2"><FaTools /></span>
                  Familiar with:
                </p>
                <div className="flex flex-wrap gap-2 ml-6">
                  {["Agile Methodologies", "Jira", "Figma", "SQL", "Market research", "Gathering user feedback", "Python"].map((skill, i) => (
                    <motion.span 
                      key={skill}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Bootcamps as subcategory */}
              <motion.div 
                className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900 mr-3">
                    <FaCertificate className="text-purple-500 text-lg" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Ted Rogers School of Management</h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Professional Development Bootcamps</p>
                  </div>
                </div>
                <div className="pl-11">
                  <p className="text-gray-500 dark:text-gray-400 mb-4 flex items-center">
                    <span className="inline-block w-4 mr-2"><FaCheckCircle className="text-green-500" /></span>
                    2022 - Present
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Completed specialized bootcamps to enhance technical and business skills:
                  </p>
                  <ul className="space-y-2 mt-3">
                    {["Python Badge 2.0", "Power of Excel: Business Fundamentals 2.0", "Power BI Badge 2.0"].map((cert, i) => (
                      <motion.li 
                        key={cert}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + (i * 0.1) }}
                      >
                        <span className="text-purple-500 mr-2">✓</span> {cert}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/30 rounded-md border border-purple-100 dark:border-purple-800">
                    <p className="text-gray-700 dark:text-gray-200 font-medium flex items-center">
                      <span className="mr-2"><FaTrophy className="text-yellow-500" /></span>
                      Notable Achievement:
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-1 ml-6">
                      Recognized among the Top 10% of engaged students at TMU, demonstrating commitment to continuous growth
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
