import { defineType, defineField } from "sanity";

export const portfolioProjectType = defineType({
  name: "portfolioProject",
  title: "Portfolio Projects",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "brand",
      title: "Marca",
      type: "reference",
      to: [{ type: "brand" }]
    }),

    defineField({
      name: "description",
      title: "Descripción",
      type: "text"
    }),

    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "TikTok, Drive, Vimeo, YouTube, etc."
    }),

    defineField({
      name: "thumbnail",
      title: "Miniatura",
      type: "image",
      options: { hotspot: true }
    }),

    // defineField({
    //   name: "categories",
    //   title: "Categorías",
    //   type: "array",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{ type: "portfolioCategory" }]
    //     }
    //   ]
    // }),

    defineField({
  name: "category",
  title: "Categoría",
  type: "reference",
  to: [{ type: "portfolioCategory" }]
}),

    defineField({
      name: "featured",
      title: "Destacado",
      type: "boolean",
      initialValue: false
    }),

    defineField({
      name: "isActive",
      title: "Activo",
      type: "boolean",
      initialValue: true
    })
  ]
});