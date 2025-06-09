import { defineField, defineType } from "sanity"

export const education = defineType({
  name: "education",
  title: "Educação",
  type: "document",
  fields: [
    defineField({
      name: "degree",
      title: "Grau/Curso",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "institution",
      title: "Instituição",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Data de Início",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "Data de Fim",
      type: "date",
    }),
    defineField({
      name: "period",
      title: "Período",
      type: "string",
      description: "Ex: 2018 - 2022",
    }),
    defineField({
      name: "duration",
      title: "Duração",
      type: "string",
      description: "Ex: 4 anos",
    }),
    defineField({
      name: "location",
      title: "Localização",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Concluída", value: "completed" },
          { title: "Em Curso", value: "in-progress" },
          { title: "Certificação", value: "certification" },
        ],
      },
    }),
    defineField({
      name: "grade",
      title: "Classificação",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
    }),
    defineField({
      name: "keySubjects",
      title: "Disciplinas Principais",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "highlights",
      title: "Destaques",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "achievements",
      title: "Conquistas",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "institutionLogo",
      title: "Logo da Instituição",
      type: "string",
       
    }),
    defineField({
      name: "color",
      title: "Cor",
      type: "string",
      description: "Cor associada a esta entrada (ex: #FF5733)",
    }),
    defineField({
      name: "type",
      title: "Tipo",
      type: "string",
      description: "Tipo de formação (ex: universitária, técnica, etc.)",
    }),
    defineField({
      name: "order",
      title: "Ordem",
      type: "number",
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Ordem",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
}) 