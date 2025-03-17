"use client"

import React from "react";
import { motion } from "framer-motion";
import { 
  FaHtml5, FaFileExcel, FaChartBar, FaRobot, 
  FaPython, FaDatabase, FaSearch, FaChartLine, 
  FaTasks, FaSitemap, FaUsers, FaChess,
  FaComments, FaUserFriends, FaUserTie, FaLightbulb,
  FaClock, FaHandsHelping
} from "react-icons/fa";

export function SkillsSection() {
  const skillCategories = [
    {
      name: "Technical Skills",
      skills: [
        { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500" size={32} /> },
        { name: "Excel", icon: <FaFileExcel className="text-green-600" size={32} /> },
        { name: "Power BI", icon: <FaChartBar className="text-yellow-500" size={32} /> },
        { name: "Power Automate", icon: <FaRobot className="text-blue-400" size={32} /> },
        { name: "Python", icon: <FaPython className="text-blue-500" size={32} /> },
        { name: "SQL", icon: <FaDatabase className="text-indigo-600" size={32} /> },
      ]
    },
    {
      name: "Business Skills",
      skills: [
        { name: "Market Research", icon: <FaSearch className="text-purple-500" size={32} /> },
        { name: "Data Analysis", icon: <FaChartLine className="text-green-500" size={32} /> },
        { name: "Project Management", icon: <FaTasks className="text-red-500" size={32} /> },
        { name: "Agile Methodologies", icon: <FaSitemap className="text-blue-600" size={32} /> },
        { name: "User Feedback Collection", icon: <FaUsers className="text-orange-400" size={32} /> },
        { name: "Strategic Planning", icon: <FaChess className="text-gray-600" size={32} /> },
      ]
    },
    {
      name: "Soft Skills",
      skills: [
        { name: "Communication", icon: <FaComments className="text-blue-500" size={32} /> },
        { name: "Team Collaboration", icon: <FaUserFriends className="text-green-500" size={32} /> },
        { name: "Leadership", icon: <FaUserTie className="text-purple-600" size={32} /> },
        { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-400" size={32} /> },
        { name: "Time Management", icon: <FaClock className="text-red-400" size={32} /> },
        { name: "Mentoring", icon: <FaHandsHelping className="text-teal-500" size={32} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white text-center">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="mb-2">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

