import { defineField, defineType } from "sanity"

export const aboutSection = defineType({
  name: "aboutSection",
  title: "Seção Sobre Mim",
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
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "profileImage",
      title: "Imagem de Perfil",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "highlights",
      title: "Destaques",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Ícone", type: "string" },
            { name: "title", title: "Título", type: "string" },
            { name: "description", title: "Descrição", type: "text" },
          ],
        },
      ],
    }),
  ],
})
