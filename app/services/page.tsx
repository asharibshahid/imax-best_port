"use client"
import { motion } from 'framer-motion'
import React from 'react'

import { FiStar, FiCode, FiTool } from 'react-icons/fi'

const softwareSkills = [
   { name: 'Photoshop', percentage: 95, icon: '🎨', color: ['#ff6b6b', '#ff8e8e'] },
    { name: 'Illustrator', percentage: 95, icon: '✨', color: ['#4ecdc4', '#7ed6cc'] },
    { name: 'InDesign', percentage: 80, icon: '📐', color: ['#45b7d1', '#74c5e0'] },
    { name: 'Canva', percentage: 80, icon: '🎯', color: ['#f9ca24', '#fbd460'] },
    { name: 'Word', percentage: 80, icon: '📝', color: ['#6c5ce7', '#a084e8'] },
    { name: 'Excel', percentage: 75, icon: '📊', color: ['#00b894', '#55c99a'] },
    { name: 'Publisher', percentage: 70, icon: '📰', color: ['#e84393', '#ed6ba7'] },
    { name: 'PowerPoint', percentage: 65, icon: '🖼️', color: ['#fd79a8', '#fe92b8'] }
  ];


const keySkills = [
  "Visual Identity Design",
  "Digital Illustration",
  "Motion Graphics",
  "UI/UX Principles",
  "Brand Strategy",
  "Photo Manipulation",
  "Typography",
  "Print Design"
]

const SkillSection = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center pt-8"
      >
        Skills & <span className="text-red-500">Expertise</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Software Skills Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-8">
            <FiCode className="w-8 h-8 text-red-500" />
            <h3 className="text-2xl font-semibold text-gray-900">Software Proficiency</h3>
          </div>

          <div className="space-y-6">
            {softwareSkills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.2, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-red-100 opacity-0 group-hover:opacity-20 transition-opacity" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Skills Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-8">
            <FiStar className="w-8 h-8 text-red-500" />
            <h3 className="text-2xl font-semibold text-gray-900">Core Competencies</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {keySkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-2 bg-red-50/50 hover:bg-red-100/50 rounded-lg transition-colors border border-red-100"
              >
                <span className="text-red-700 font-medium text-sm flex items-center gap-2">
                  <FiTool className="w-4 h-4" />
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Expertise Level Legend */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 flex flex-wrap gap-4 justify-center items-center text-sm"
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gradient-to-r from-red-400 to-red-600 rounded-full" />
          <span className="text-gray-600">High: 80-100%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-300 rounded-full" />
          <span className="text-gray-600">Medium: 60-79%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-200 rounded-full" />
          <span className="text-gray-600">Basic: Below 60%</span>
        </div>
      </motion.div>
    </section>
  )
}

export default SkillSection
