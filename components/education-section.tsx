"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award, BookOpen, Users, Star, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedTitle } from "./animated-text" 
import { Education } from "@/lib/sanity"

 
  interface EducationSectionProps {
    data: Education[]
  }
  
  export default function EducationSection({ data }: EducationSectionProps) {
    if (!data || data.length === 0) return null
   const education = data || []
    

  function gerarGradienteTailwind() {
  const cores = [
    'red', 'blue', 'green', 'yellow', 'purple', 'pink',
    'orange', 'teal', 'lime', 'indigo', 'rose', 'fuchsia',
    'cyan', 'amber', 'emerald', 'violet', 'sky', 'stone'
  ];

  const intensidades = ['400', '500', '600'];

  const cor1 = cores[Math.floor(Math.random() * cores.length)];
  const cor2 = cores[Math.floor(Math.random() * cores.length)];
  const intensidade1 = intensidades[Math.floor(Math.random() * intensidades.length)];
  const intensidade2 = intensidades[Math.floor(Math.random() * intensidades.length)];

  return `from-${cor1}-${intensidade1} to-${cor2}-${intensidade2}`;
}

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  }

  /* const education = [
    {
      degree: "Licenciatura em Fashion Design & Marketing",
      institution: "Universidade do Minho",
      period: "2021 – 2024",
      duration: "3 anos",
      location: "Braga, Portugal",
      status: "Concluída",
      grade: "16/20",
      description:
        "Formação abrangente em design de moda, marketing e gestão de marca. Participação ativa em eventos académicos e associações estudantis.",
      keySubjects: [
        "Design de Moda e Ilustração",
        "Marketing Digital e Estratégico",
        "Gestão de Marca e Comunicação",
        "História da Moda",
        "Tecnologia Têxtil",
        "Sustentabilidade na Moda",
      ],
      highlights: ["Jornadas DMM", "Associação Académica", "Projectos de Grupo", "Estágios Curriculares"],
      achievements: [
        "Projecto final com nota 18/20",
        "Membro ativo da Associação Académica",
        "Organização das Jornadas DMM 2023",
        "Bolsa de mérito académico",
      ],
      institutionLogo: "UM",
      color: "from-emerald-500 to-teal-500",
      type: "Licenciatura",
    },
    {
      degree: "Interior Design",
      institution: "Formação Complementar",
      period: "2023 – 2024",
      duration: "1 ano",
      location: "Online/Presencial",
      status: "Certificação",
      grade: "Excelente",
      description:
        "Especialização em design de interiores, incluindo conceção de espaços, seleção de materiais e planeamento espacial.",
      keySubjects: [
        "Conceção de Espaços",
        "Seleção de Materiais",
        "Planeamento Espacial",
        "Renderização 3D",
        "Iluminação de Interiores",
        "Sustentabilidade no Design",
      ],
      highlights: ["Design de Espaços", "Seleção de Materiais", "Planeamento Espacial", "Renderização 3D"],
      achievements: [
        "Certificação com distinção",
        "Projecto final premiado",
        "Portfolio diversificado criado",
        "Networking com profissionais",
      ],
      institutionLogo: "ID",
      color: "from-violet-500 to-purple-500",
      type: "Certificação",
    },
  ] */

  return (
    <section id="education" className="py-20 bg-[#f9f6f1] relative overflow-hidden">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-32 h-32 border-2 border-[#d4a574] rounded-full`}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedTitle className="text-4xl font-bold text-black text-center mb-4">Educação</AnimatedTitle>
          <motion.p
            className="text-lg text-[#8b7355] text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Formação sólida que combina criatividade, estratégia e conhecimento técnico para uma carreira
            multidisciplinar.
          </motion.p>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-white border-[#e8e2db] hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  {/* Progress Bar */}
                  <motion.div
                    className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${edu.color} z-20`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />

                  <CardContent className="p-8 relative z-10">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Main Info */}
                      <div className="lg:col-span-2">
                        {/* Header */}
                        <div className="flex items-start gap-6 mb-6">
                        <motion.div
                          className="w-20 h-20 rounded-3xl flex items-center justify-center text-white font-bold text-xl shadow-xl"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          style={{
                            backgroundImage: `linear-gradient(to bottom right, ${edu.color ?? "#888"}, ${edu.color ?? "#444"})`
                          }}
                        >
                          {edu.institutionLogo ?? "Logo"}
                        </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <GraduationCap className="h-6 w-6 text-[#d4a574]" />
                              <Badge
                            className="text-white"
                            style={{
                              backgroundImage: `linear-gradient(to right, ${edu.color ?? "#888"}, ${edu.color ?? "#444"})`
                            }}
                          >
                            {edu.type}
                          </Badge>

                              <Badge className="bg-[#d4a574] text-white">{edu.status}</Badge>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-2">{edu.degree}</h3>
                            <h4 className="text-xl text-[#d4a574] font-semibold mb-3">{edu.institution}</h4>
                          </div>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="flex items-center gap-2 text-[#8b7355]">
                            <Calendar className="h-4 w-4 text-[#d4a574]" />
                            <span className="text-sm font-medium">
                              {`${new Date(edu.startDate).getFullYear()} - ${edu.endDate ? new Date(edu.endDate).getFullYear() : 'Presente'}`}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-[#8b7355]">
                            <Clock className="h-4 w-4 text-[#d4a574]" />
                            <span className="text-sm">{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#8b7355]">
                            <MapPin className="h-4 w-4 text-[#d4a574]" />
                            <span className="text-sm">{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[#8b7355]">
                            <Star className="h-4 w-4 text-[#d4a574]" />
                            <span className="text-sm font-medium">{edu.grade}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-[#8b7355] mb-6 leading-relaxed">{edu.description}</p>

                        {/* Key Subjects */}
                        <div className="mb-6">
                          <div className="flex items-center gap-2 mb-4">
                            <BookOpen className="h-5 w-5 text-[#d4a574]" />
                            <span className="font-semibold text-black">Disciplinas Principais:</span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {edu.keySubjects?.map((subject, subIndex) => (
                              <motion.div
                                key={subIndex}
                                className="flex items-center gap-3 p-3 bg-[#f9f6f1] rounded-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: subIndex * 0.05 }}
                                whileHover={{ scale: 1.02, x: 5 }}
                              >
                                <motion.div className="w-2 h-2 bg-[#d4a574] rounded-full" whileHover={{ scale: 1.5 }} />
                                <span className="text-[#8b7355] text-sm">{subject}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Award className="h-5 w-5 text-[#d4a574]" />
                            <span className="font-semibold text-black">Conquistas:</span>
                          </div>
                          <ul className="space-y-3">
                            {edu.achievements?.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                className="text-[#8b7355] flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                              >
                                <motion.div
                                  className="w-6 h-6 bg-[#d4a574] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                                  whileHover={{ scale: 1.2, rotate: 360 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Award className="h-3 w-3 text-white" />
                                </motion.div>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Sidebar */}
                      <div className="space-y-6">
                        {/* Highlights Card */}
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                          <Card className="bg-[#f9f6f1] border-[#e8e2db]">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-2 mb-4">
                                <Users className="h-5 w-5 text-[#d4a574]" />
                                <span className="font-semibold text-black">Destaques:</span>
                              </div>
                              <div className="space-y-3">
                                {edu.highlights?.map((highlight, highlightIndex) => (
                                  <motion.div
                                    key={highlightIndex}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: highlightIndex * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    <Badge
                                      variant="secondary"
                                      className="bg-white text-[#8b7355] w-full justify-center py-2 hover:bg-[#d4a574] hover:text-white transition-colors"
                                    >
                                      {highlight}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>

                        {/* Progress Indicator */}
                        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                          <Card className="bg-white border-[#e8e2db]">
                            <CardContent className="p-6 text-center">
                              <div
                                className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                              >
                                <GraduationCap className="h-8 w-8 text-white" />
                              </div>
                              <div className="text-2xl font-bold text-black mb-1">{edu.grade}</div>
                              <div className="text-sm text-[#8b7355]">Classificação Final</div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Education Summary */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white border-[#e8e2db] max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <GraduationCap className="h-8 w-8 text-[#d4a574]" />
                  <h3 className="text-2xl font-bold text-black">Formação Contínua</h3>
                </div>
                <p className="text-[#8b7355] leading-relaxed">
                  Comprometida com o aprendizado contínuo e desenvolvimento profissional, sempre buscando novas
                  competências e conhecimentos para me manter atualizada nas áreas de design, marketing e comunicação.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
