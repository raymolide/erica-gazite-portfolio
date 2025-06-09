import { defineField, defineType } from "sanity"

export const contactInfo = defineType({
  name: "contactInfo",
  title: "Informações de Contacto",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Telefone",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Localização",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Redes Sociais",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "Plataforma", type: "string" },
            { name: "url", title: "URL", type: "url" },
            { name: "icon", title: "Ícone", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "availability",
      title: "Disponibilidade",
      type: "text",
    }),
    defineField({
      name: "responseTime",
      title: "Tempo de Resposta",
      type: "string",
    }),
  ],
})
