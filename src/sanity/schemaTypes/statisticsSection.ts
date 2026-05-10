import { defineType, defineField } from "sanity";

export const statisticsSectionType = defineType({
  name: "statisticsSection",
  title: "Statistics Section",
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
      title: "Título principal",
      type: "string",
      initialValue: "MIS RESULTADOS"
    }),

    defineField({
      name: "items",
      title: "Resultados",
      type: "array",

      of: [
        {
          type: "object",

          fields: [
            defineField({
              name: "brand",
              title: "Marca",
              type: "reference",
              to: [{ type: "brand" }]
            }),

            defineField({
              name: "phoneImage",
              title: "Imagen",
              type: "image",
              options: { hotspot: true }
            }),

            defineField({
              name: "videoUrl",
              title: "URL del video",
              type: "url",
              description:
                "Pega enlace de TikTok, Instagram Reel o YouTube."
            }),

            defineField({
              name: "views",
              title: "Vistas",
              type: "string"
            }),

            defineField({
              name: "likes",
              title: "Likes",
              type: "string"
            }),

            defineField({
              name: "comments",
              title: "Comentarios",
              type: "string"
            }),

            defineField({
              name: "shares",
              title: "Compartidos",
              type: "string"
            }),

            defineField({
              name: "saves",
              title: "Guardados",
              type: "string"
            }),

            defineField({
              name: "platform",
              title: "Plataforma",
              type: "string",
              options: {
                list: [
                  { title: "TikTok", value: "tiktok" },
                  { title: "Instagram", value: "instagram" },
                  { title: "YouTube", value: "youtube" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Otro", value: "otro"}
                ]
              },
              initialValue: "tiktok"
            })
          ],

          preview: {
            select: {
              title: "brand.title",
              subtitle: "views",
              media: "phoneImage"
            },

            prepare({ title, subtitle, media }) {
              return {
                title: title || "Sin marca",
                subtitle: `Vistas: ${subtitle || "0"}`,
                media
              };
            }
          }
        }
      ]
    })
  ],

  preview: {
    select: {
      title: "title"
    }
  }
}); 