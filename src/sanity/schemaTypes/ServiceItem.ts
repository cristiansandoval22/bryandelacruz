import { defineType, defineField } from "sanity";

export const serviceItemType = defineType({
  name: "serviceItem",
  title: "Service Items",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Título Servicio",
      type: "string",
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 3
    }),

    defineField({
      name: "image",
      title: "Imagen",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Texto ALT",
          type: "string"
        }
      ]
    }),

    defineField({
      name: "order",
      title: "Orden",
      type: "number",
      initialValue: 1
    }),

    defineField({
      name: "isActive",
      title: "Activo",
      type: "boolean",
      initialValue: true
    })
  ],

  preview: {
    select: {
      title: "title",
      media: "image"
    }
  }
});