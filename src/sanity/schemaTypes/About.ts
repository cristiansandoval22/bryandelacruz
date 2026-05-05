import { defineField, defineType } from "sanity";

export const aboutType = defineType({
  name: "about",
  title: "About Section",
  type: "document",

  fields: [
    // Activar / desactivar sección
    defineField({
      name: "isActive",
      title: "Activo",
      type: "boolean",
      initialValue: true,
    }),

    // Badge pequeño
    defineField({
      name: "badge",
      title: "Etiqueta",
      type: "string",
      initialValue: "Sobre mí",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "titleStyled",
      title: "Título con resaltado",
      type: "string",
      description: "Usa ( ) para resaltar palabras"
    }),

    // Descripción 1
    defineField({
      name: "description",
      title: "Descripción principal",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    // Descripción 2
    defineField({
      name: "descriptionSecondary",
      title: "Descripción secundaria",
      type: "text",
      rows: 3,
    }),

    // Imagen
    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Texto ALT",
          type: "string",
          description: "Describe la imagen para SEO y accesibilidad",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // Estadísticas
    defineField({
      name: "stats",
      title: "Estadísticas",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "number",
              title: "Número",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "label",
              title: "Texto",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: "number",
              subtitle: "label",
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),

    // Botón CTA
    defineField({
      name: "cta",
      title: "Botón CTA",
      type: "object",
      fields: [

        defineField({
          name: "text",
          title: "Texto",
          type: "string",
          initialValue: "¡Colaboremos juntos!"
        }),

        defineField({
          name: "link",
          title: "Enlace",
          type: "url"
        }),

        defineField({
          name: "newTab",
          title: "Abrir en nueva pestaña",
          type: "boolean",
          initialValue: false
        })

      ]
    })
  ],

  preview: {
    prepare() {
      return {
        title: "About Section",
      };
    },
  },
});