import { defineField, defineType } from "sanity"

export const socialCause = defineType({
  name: "socialCause",
  title: "Causas Sociais",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Ícone",
      type: "string",
      description: "Nome do ícone Lucide React",
    }),
    defineField({
      name: "impact",
      title: "Impacto",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Educação Ambiental", value: "environmental-education" },
          { title: "Desenvolvimento Estudantil", value: "student-development" },
          { title: "Desenvolvimento Pessoal", value: "personal-development" },
          { title: "Organização de Eventos", value: "event-organization" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Imagem",
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
