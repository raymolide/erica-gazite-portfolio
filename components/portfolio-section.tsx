"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, X, ExternalLink, Calendar, Users, Award } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedTitle } from "./animated-text"
import { Project } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { urlFor } from "@/sanity/lib/image"

interface PortfolioSectionProps {
  data: Project[] | null
}
    
export default function PortfolioSection({ data }: PortfolioSectionProps) {
      if (!data || data.length === 0) return null
     const allProjects = data || []
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [selectedCategory, setSelectedCategory] = useState("Todos")

   

  const categories = ["Todos", ...Array.from(new Set(allProjects.map((p) => p.category)))]

  const filteredProjects = allProjects.filter(
    (project) => selectedCategory === "Todos" || project.category === selectedCategory,
  )

  const displayedProjects = filteredProjects.slice(0, visibleProjects)
  const hasMoreProjects = visibleProjects < filteredProjects.length

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length))
  }

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="portfolio" className="py-20 bg-[#f9f6f1] relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(212, 165, 116, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(196, 155, 97, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(212, 165, 116, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedTitle className="text-4xl font-bold text-black text-center mb-4">Portfólio</AnimatedTitle>
          <motion.p
            className="text-lg text-[#8b7355] text-center mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Uma seleção dos meus projectos mais representativos nas áreas de Fashion Design, Marketing, Modelagem e
            Design de Interiores.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setVisibleProjects(6)
                }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#d4a574] text-white shadow-lg"
                    : "bg-white text-[#8b7355] border border-[#e8e2db] hover:border-[#d4a574] hover:text-[#d4a574]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={selectedCategory} // Force re-animation when category changes
          >
            <AnimatePresence mode="wait">
              {displayedProjects.map((project, index) => (
                <motion.div key={project._id} variants={itemVariants} layout>
                  <Card className="bg-white border-[#e8e2db] hover:shadow-xl transition-all duration-300 group h-full">
                    <div className="relative overflow-hidden">
                      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <Image
                          src={urlFor(project.featuredImage).url() || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-48 object-cover"
                        />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.div initial={{ scale: 0 }} whileHover={{ scale: 1 }} transition={{ delay: 0.1 }}>
                          <Eye className="h-8 w-8 text-white" />
                        </motion.div>
                      </motion.div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-[#d4a574] text-white">{project.status}</Badge>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-[#8b7355]">
                          {project.year}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="mb-3">
                        <Badge variant="secondary" className="bg-[#f0ede8] text-[#8b7355] mb-2">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                      </div>

                      <p className="text-[#8b7355] mb-4 leading-relaxed text-sm flex-1">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags?.slice(0, 3).map((tag, tagIndex) => (
                          <motion.div key={tagIndex} whileHover={{ scale: 1.05 }}>
                            <Badge variant="outline" className="text-xs border-[#d4a574] text-[#d4a574]">
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                        {project.tags?.length! > 3 && (
                          <Badge variant="outline" className="text-xs border-[#d4a574] text-[#d4a574]">
                            +{project.tags?.length! - 3}
                          </Badge>
                        )}
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          size="sm"
                          className="bg-[#d4a574] hover:bg-[#c49b61] text-white w-full"
                          onClick={() => openProjectModal(project)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Ver Detalhes
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          {hasMoreProjects && (
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={loadMoreProjects}
                  variant="outline"
                  className="border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white px-8 py-3 text-lg"
                >
                  Carregar Mais Projectos ({filteredProjects.length - visibleProjects} restantes)
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
          >
            <motion.div
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <Image
                   src={urlFor(selectedProject.featuredImage).url() || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                
                <motion.button
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  onClick={closeProjectModal}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-[#d4a574] text-white mb-2">{selectedProject.status}</Badge>
                  <Badge variant="secondary" className="bg-white/90 text-[#8b7355] ml-2">
                    {selectedProject.category}
                  </Badge>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold text-black mb-4">{selectedProject.title}</h2>
                    <div className="text-[#8b7355] mb-6 leading-relaxed">
                    <PortableText  value={selectedProject.fullDescription } />
                        </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags?.map((tag, index) => (
                        <Badge key={index} variant="outline" className="border-[#d4a574] text-[#d4a574]">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Results */}
                    {selectedProject.results && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-black mb-3 flex items-center">
                          <Award className="h-5 w-5 text-[#d4a574] mr-2" />
                          Resultados Alcançados
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.results.map((result, index) => (
                            <li key={index} className="text-[#8b7355] flex items-start">
                              <span className="w-2 h-2 bg-[#d4a574] rounded-full mt-2 mr-3 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Gallery */}
                    {selectedProject.gallery && (
                      <div>
                        <h3 className="text-xl font-bold text-black mb-3">Galeria</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {selectedProject.gallery.map((image, index) => (
                            <motion.div
                              key={index}
                              whileHover={{ scale: 1.05 }}
                              className="relative overflow-hidden rounded-lg"
                            >
                              <Image
                                src={urlFor(image).url() || "/placeholder.svg"}
                                alt={`${selectedProject.title} - Imagem ${index + 1}`}
                                width={200}
                                height={150}
                                className="w-full h-24 object-cover"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Info Sidebar */}
                  <div className="space-y-6">
                    <Card className="bg-[#f9f6f1] border-[#e8e2db]">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-black mb-4">Informações do Projecto</h3>
                        <div className="space-y-3">
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 text-[#d4a574] mr-2" />
                            <span className="text-[#8b7355]">
                              <strong>Ano:</strong> {selectedProject.year}
                            </span>
                          </div>
                          {selectedProject.client && (
                            <div className="flex items-start text-sm">
                              <ExternalLink className="h-4 w-4 text-[#d4a574] mr-2 mt-0.5" />
                              <span className="text-[#8b7355]">
                                <strong>Cliente:</strong> {selectedProject.client}
                              </span>
                            </div>
                          )}
                          {selectedProject.duration && (
                            <div className="flex items-center text-sm">
                              <Calendar className="h-4 w-4 text-[#d4a574] mr-2" />
                              <span className="text-[#8b7355]">
                                <strong>Duração:</strong> {selectedProject.duration}
                              </span>
                            </div>
                          )}
                          {selectedProject.team && (
                            <div className="flex items-start text-sm">
                              <Users className="h-4 w-4 text-[#d4a574] mr-2 mt-0.5" />
                              <span className="text-[#8b7355]">
                                <strong>Equipa:</strong> {selectedProject.team}
                              </span>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button className="w-full bg-[#d4a574] hover:bg-[#c49b61] text-white">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Projecto Completo
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
