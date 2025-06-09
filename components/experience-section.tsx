"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building2, Clock, TrendingUp, Users2 } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedTitle } from "./animated-text"
import { urlFor } from "@/sanity/lib/image"
import type { Experience } from "@/lib/sanity"
import Image from "next/image"

interface ExperienceSectionProps {
  data: Experience[]
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  if (!data || data.length === 0) return null

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-PT", {
      month: "long",
      year: "numeric",
    })
  }

  const formatPeriod = (startDate: string, endDate?: string) => {
    const start = formatDate(startDate)
    const end = endDate ? formatDate(endDate) : "presente"
    return `${start} – ${end}`
  }

  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate)
    const end = endDate ? new Date(endDate) : new Date()
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const months = Math.floor(diffDays / 30)
    const years = Math.floor(months / 12)

    if (years > 0) {
      const remainingMonths = months % 12
      return remainingMonths > 0
        ? `${years} ano${years > 1 ? "s" : ""} e ${remainingMonths} mes${remainingMonths > 1 ? "es" : ""}`
        : `${years} ano${years > 1 ? "s" : ""}`
    }
    return `${months} mes${months > 1 ? "es" : ""}`
  }

  const typeLabels = {
    "full-time": "Tempo Integral",
    "part-time": "Part-time",
    freelance: "Freelance",
    internship: "Estágio",
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  }

  return (
    <section id="experience" className="py-20 bg-[#faf8f5] relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "linear-gradient(45deg, #d4a574 25%, transparent 25%), linear-gradient(-45deg, #d4a574 25%, transparent 25%)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedTitle className="text-4xl font-bold text-black text-center mb-4">
            Experiência Profissional
          </AnimatedTitle>
          <motion.p
            className="text-lg text-[#8b7355] text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Uma jornada profissional diversificada que combina criatividade, marketing e relacionamento com o cliente.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d4a574] via-[#c49b61] to-[#d4a574] rounded-full" />

            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {data.map((exp, index) => (
                <motion.div
                  key={exp._id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-10"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-6 h-6 bg-white border-4 border-[#d4a574] rounded-full shadow-lg">
                      <motion.div
                        className="w-full h-full bg-[#d4a574] rounded-full"
                        animate={exp.isActive ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "" : "md:text-right"}`}>
                    <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                      <Card className="bg-white border-[#e8e2db] hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                        <CardContent className="p-8 relative z-10">
                          {/* Header */}
                          <div
                            className={`flex items-start gap-4 mb-6 ${index % 2 === 0 ? "" : "md:flex-row-reverse md:text-right"}`}
                          >
                            <motion.div
                              className="w-16 h-16 bg-[#d4a574] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg overflow-hidden"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              {exp.companyLogo ? (
                                <Image
                                  src={urlFor(exp.companyLogo).width(64).height(64).url() || "/placeholder.svg"}
                                  alt={exp.company}
                                  width={64}
                                  height={64}
                                  className="object-cover"
                                />
                              ) : (
                                exp.company.substring(0, 2).toUpperCase()
                              )}
                            </motion.div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-2xl font-bold text-black">{exp.position}</h3>
                                {exp.isActive && (
                                  <motion.div
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                  >
                                    <Badge className="bg-green-500 text-white text-xs">Ativo</Badge>
                                  </motion.div>
                                )}
                              </div>
                              <h4 className="text-xl text-[#d4a574] font-semibold mb-3 flex items-center gap-2">
                                <Building2 className="h-5 w-5" />
                                {exp.company}
                              </h4>
                            </div>
                          </div>

                          {/* Info Grid */}
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center gap-2 text-[#8b7355]">
                              <Calendar className="h-4 w-4 text-[#d4a574]" />
                              <span className="text-sm font-medium">{formatPeriod(exp.startDate, exp.endDate)}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[#8b7355]">
                              <Clock className="h-4 w-4 text-[#d4a574]" />
                              <span className="text-sm">{calculateDuration(exp.startDate, exp.endDate)}</span>
                            </div>
                            {exp.location && (
                              <div className="flex items-center gap-2 text-[#8b7355]">
                                <MapPin className="h-4 w-4 text-[#d4a574]" />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                            )}
                            {exp.type && (
                              <div className="flex items-center gap-2 text-[#8b7355]">
                                <Users2 className="h-4 w-4 text-[#d4a574]" />
                                <span className="text-sm">
                                  {typeLabels[exp.type as keyof typeof typeLabels] || exp.type}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Description */}
                          <p className="text-[#8b7355] mb-6 leading-relaxed">{exp.description}</p>

                          {/* Achievements */}
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="mb-6">
                              <div className="flex items-center gap-2 mb-3">
                                <TrendingUp className="h-5 w-5 text-[#d4a574]" />
                                <span className="font-semibold text-black">Principais Conquistas:</span>
                              </div>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, achIndex) => (
                                  <motion.li
                                    key={achIndex}
                                    className="text-[#8b7355] text-sm flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                                  >
                                    <motion.div
                                      className="w-2 h-2 bg-[#d4a574] rounded-full mt-2 flex-shrink-0"
                                      whileHover={{ scale: 1.5 }}
                                    />
                                    {achievement}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Skills */}
                          {exp.skills && exp.skills.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <motion.div
                                  key={skillIndex}
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                  whileHover={{ scale: 1.05, y: -2 }}
                                >
                                  <Badge className="bg-[#d4a574] text-white hover:bg-[#c49b61] transition-colors">
                                    {skill}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
