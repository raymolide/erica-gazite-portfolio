import { defineField, defineType } from "sanity"

export const skill = defineType({
  name: "skill",
  title: "Competências",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Técnicas", value: "technical" },
          { title: "Idiomas", value: "languages" },
          { title: "Profissionais", value: "professional" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "level",
      title: "Nível",
      type: "number",
      validation: (rule) => rule.min(0).max(100),
      description: "Para competências técnicas (0-100)",
    }),
    defineField({
      name: "levelText",
      title: "Nível (Texto)",
      type: "string",
      description: "Para idiomas (ex: Nativo, Fluente, Básico)",
    }),
    defineField({
      name: "flag",
      title: "Bandeira/Emoji",
      type: "string",
      description: "Para idiomas",
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
      title: "Categoria e Ordem",
      name: "categoryOrder",
      by: [
        { field: "category", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
})
