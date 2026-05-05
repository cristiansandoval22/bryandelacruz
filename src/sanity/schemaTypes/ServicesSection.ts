import { defineType, defineField } from "sanity";

export const servicesSectionType = defineType({
  name: "servicesSection",
  title: "Services Section",
  type: "document",

  fields: [
    defineField({
      name: "isActive",
      title: "Activo",
      type: "boolean",
      initialValue: true
    }),

    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "subtitle",
      title: "Subtítulo",
      type: "text"
    }),

    defineField({
      name: "services",
      title: "Servicios",
      type: "array",
      of: [
        {
          type: "object",
          fields: [

            {
              name: "title",
              title: "Título",
              type: "string"
            },

            {
              name: "description",
              title: "Descripción",
              type: "text"
            },

            {
              name: "image",
              title: "Imagen",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "ALT",
                  type: "string"
                }
              ]
            }

          ],

          preview: {
            select: {
              title: "title",
              media: "image"
            }
          }
        }
      ]
    })
  ]
});