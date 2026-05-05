import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",

  fields: [
    /* =========================
       TITLE
    ========================= */
    defineField({
      name: "title",
      title: "Título Principal",
      type: "string",
      validation: (Rule) => Rule.required()
    }),

    /* =========================
       HERO IMAGE
    ========================= */
    defineField({
      name: "heroImage",
      title: "Imagen Principal",
      type: "image",
      options: {
        hotspot: true
      },

      fields: [
        defineField({
          name: "alt",
          title: "Texto ALT",
          type: "string",
          description: "Describe la imagen para SEO y accesibilidad"
        })
      ]
    }),

    /* =========================
       ACTIVE
    ========================= */
    defineField({
      name: "isActive",
      title: "Activo",
      type: "boolean",
      initialValue: true
    })
  ]
});