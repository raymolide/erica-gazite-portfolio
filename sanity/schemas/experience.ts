import { defineField, defineType } from "sanity"

export const experience = defineType({
  name: "experience",
  title: "Experiência Profissional",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Empresa",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "position",
      title: "Cargo",
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
      name: "isActive",
      title: "Posição Ativa",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "location",
      title: "Localização",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Tipo de Contrato",
      type: "string",
      options: {
        list: [
          { title: "Tempo Integral", value: "full-time" },
          { title: "Part-time", value: "part-time" },
          { title: "Freelance", value: "freelance" },
          { title: "Estágio", value: "internship" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "achievements",
      title: "Principais Conquistas",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "skills",
      title: "Competências",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "companyLogo",
      title: "Logo da Empresa",
      type: "image",
      options: {
        hotspot: true,
      },
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
