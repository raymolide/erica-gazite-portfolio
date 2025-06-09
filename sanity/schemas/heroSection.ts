import { defineField, defineType } from "sanity"

export const heroSection = defineType({
  name: "heroSection",
  title: "Seção Hero",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "roles",
      title: "Funções/Especialidades",
      type: "array",
      of: [{ type: "string" }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
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
      name: "backgroundImage",
      title: "Imagem de Fundo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "ctaButtons",
      title: "Botões de Ação",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "text", title: "Texto", type: "string" },
            { name: "link", title: "Link", type: "string" },
            { name: "style", title: "Estilo", type: "string", options: { list: ["primary", "secondary"] } },
          ],
        },
      ],
    }),
  ],
})
