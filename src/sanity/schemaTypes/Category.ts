import { defineType, defineField } from "sanity";

export const portfolioCategoryType = defineType({
  name: "portfolioCategory",
  title: "Portfolio Categories",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Nombre",
      type: "string",
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title"
      }
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
  ]
});