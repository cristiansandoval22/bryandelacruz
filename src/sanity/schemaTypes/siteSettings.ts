import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
    name: "siteSettings",
    title: "Site Settings",
    type: "document",

    fields: [
        defineField({
            name: "siteTitle",
            title: "Nombre del Sitio",
            type: "string",
            validation: Rule => Rule.required()
        }),

        defineField({
            name: "siteDescription",
            title: "Descripción",
            type: "text"
        }),

        defineField({
            name: "logo",
            title: "Logo",
            type: "image",
            options: { hotspot: true }
        }),
        defineField({
            name: "favicon",
            title: "Favicon",
            type: "image"
        }),

        defineField({
            name: "email",
            title: "Correo",
            type: "string"
        }),

        defineField({
            name: "phone",
            title: "Teléfono",
            type: "string"
        }),

        /* =========================
       CTA BUTTON (ANIDADO)
    ========================= */
        defineField({
            name: "cta",
            title: "Botón CTA",
            type: "object",

            fields: [
                defineField({
                    name: "text",
                    title: "Texto Botón",
                    type: "string",
                    initialValue: "¡Colaboremos juntos!"
                }),

                defineField({
                    name: "link",
                    title: "Link Botón",
                    type: "url"
                }),

                defineField({
                    name: "newTab",
                    title: "Abrir en nueva pestaña",
                    type: "boolean",
                    initialValue: false
                })
            ]
        }),
        defineField({
            name: "socialLinks",
            title: "Redes Sociales",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "platform", title: "Plataforma", type: "string" },
                        { name: "url", title: "URL", type: "url" }
                    ]
                }
            ]
        })
    ]
});