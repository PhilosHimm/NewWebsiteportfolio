"use client"

import React from "react";
import { motion } from "framer-motion";

export function EducationSection() {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Item 1 */}
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Toronto Metropolitan University</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Bachelor of Commerce, Business Technology Management Co-op</p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">September 2022 - Expected April 2027</p>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Courses: Web design (UI/UX), Managerial Decision Making, Systems Analysis & Design
            </p>
            <div className="mt-4">
              <p className="text-gray-700 dark:text-gray-200 font-medium mb-2">Proficient with:</p>
              <p className="text-gray-600 dark:text-gray-300">
                Outlook, Word, PowerPoint, Excel, Power BI, MS Teams, HTML, CSS
              </p>
            </div>
            <div className="mt-3">
              <p className="text-gray-700 dark:text-gray-200 font-medium mb-2">Familiar with:</p>
              <p className="text-gray-600 dark:text-gray-300">
                Agile Methodologies, Jira, Figma, SQL, Market research, Gathering user feedback, Python
              </p>
            </div>
          </motion.div>

          {/* Education Item 2 - Ted Rogers School of Management Bootcamps */}
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Ted Rogers School of Management</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Professional Development Bootcamps</p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">2022 - Present</p>
            <p className="text-gray-600 dark:text-gray-300">
              Completed specialized bootcamps to enhance technical and business skills:
            </p>
            <ul className="list-disc pl-5 mt-3 text-gray-600 dark:text-gray-300">
              <li>Python Badge 2.0</li>
              <li>Power of Excel: Business Fundamentals 2.0</li>
              <li>Power BI Badge 2.0</li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-700 dark:text-gray-200 font-medium">Notable Achievement:</p>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Recognized among the Top 10% of engaged students at TMU, demonstrating commitment to continuous growth
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
