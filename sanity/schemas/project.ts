import { defineField, defineType } from "sanity"

export const project = defineType({
  name: "project",
  title: "Projectos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Fashion Design", value: "fashion-design" },
          { title: "Marketing Visual", value: "marketing-visual" },
          { title: "Comunicação", value: "communication" },
          { title: "Modelagem", value: "modeling" },
          { title: "Interior Design", value: "interior-design" },
          { title: "Sustentabilidade", value: "sustainability" },
          { title: "Educação", value: "education" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição Curta",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fullDescription",
      title: "Descrição Completa",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "featuredImage",
      title: "Imagem Principal",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Galeria",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Concluído", value: "completed" },
          { title: "Em Desenvolvimento", value: "in-progress" },
          { title: "Publicado", value: "published" },
          { title: "Pausado", value: "paused" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Ano",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "client",
      title: "Cliente",
      type: "string",
    }),
    defineField({
      name: "duration",
      title: "Duração",
      type: "string",
    }),
    defineField({
      name: "team",
      title: "Equipa",
      type: "string",
    }),
    defineField({
      name: "results",
      title: "Resultados",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "projectUrl",
      title: "URL do Projecto",
      type: "url",
    }),
    defineField({
      name: "featured",
      title: "Projecto Destacado",
      type: "boolean",
      initialValue: false,
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
    {
      title: "Data de Criação",
      name: "createdAt",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
})
