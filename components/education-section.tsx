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
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">University Name</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Degree in Field of Study</p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">2018 - 2022</p>
            <p className="text-gray-600 dark:text-gray-300">
              Brief description of your academic achievements, relevant coursework, or special projects completed during this educational period.
            </p>
          </motion.div>

          {/* Education Item 2 */}
          <motion.div 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Another University</h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Another Degree</p>
            <p className="text-gray-500 dark:text-gray-400 mb-4">2014 - 2018</p>
            <p className="text-gray-600 dark:text-gray-300">
              Additional information about your education, relevant activities, honors, or certifications obtained.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
