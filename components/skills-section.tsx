"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { AnimatedTitle } from "./animated-text"
import { useEffect, useState } from "react"
import { Skill } from "@/lib/sanity"
 


interface SkillSectionProps {
  data: Skill[] | null
}
    
export default function SkillSection({ data }: SkillSectionProps) {
      if (!data || data.length === 0) return null
     const skills = data || []
  const [isVisible, setIsVisible] = useState(false)

  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("skills")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 bg-[#faf8f5] relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-[#d4a574]/10 via-transparent to-[#c49b61]/10" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedTitle className="text-4xl font-bold text-black text-center mb-12">Competências</AnimatedTitle>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-white border-[#e8e2db] h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-6 text-center">Competências Técnicas</h3>
                  <div className="space-y-6">
                    {skills.filter(i=> i.category=='technical').map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-black">{skill.name}</span>
                          <span className="text-[#8b7355]">{skill.level}%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        >
                          <Progress value={isVisible ? skill.level : 0} className="h-2" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-white border-[#e8e2db] h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-6 text-center">Idiomas</h3>
                  <div className="space-y-6">
                    {skills.filter(i=> i.category=='languages').map((lang, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-4 bg-[#f9f6f1] rounded-lg"
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-center">
                          <motion.span
                            className="text-2xl mr-3"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                          >
                            {lang.flag}
                          </motion.span>
                          <span className="font-medium text-black">{lang.name}</span>
                        </div>
                        <Badge className="bg-[#d4a574] text-white">{lang.level}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Professional Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-white border-[#e8e2db] h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-6 text-center">Competências Profissionais</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.filter(i=> i.category=='professional').map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#d4a574",
                          color: "#ffffff",
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-[#f0ede8] text-[#8b7355] transition-all duration-200 cursor-pointer"
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
