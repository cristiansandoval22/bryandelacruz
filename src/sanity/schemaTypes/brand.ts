import { defineType, defineField } from "sanity";

export const brandType = defineType({
  name: "brand",
  title: "Brands",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Nombre",
      type: "string",
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "ALT",
          type: "string"
        }
      ]
    }),

    // defineField({
    //   name: "website",
    //   title: "Sitio Web",
    //   type: "url"
    // }),

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
      media: "logo"
    }
  }
});