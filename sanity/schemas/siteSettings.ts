import { defineField, defineType } from "sanity"

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Configurações do Site",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título do Site",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição do Site",
      type: "text",
    }),
    defineField({
      name: "keywords",
      title: "Palavras-chave SEO",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
    }),
  ],
})
