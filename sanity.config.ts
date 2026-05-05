// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";
import { set } from "astro:schema";

export default defineConfig({
  projectId: 'a00jgaaz',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenido")
          .items([
            // site settings
            S.listItem()
              .title("CONFIGURACIÓN DEL SITIO")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            // hero section
            S.listItem()
              .title("SECCIÓN PRINCIPAL")
              .id("hero")
              .child(
                S.document()
                  .schemaType("hero")
                  .documentId("hero")
              ),

            // About section
            S.listItem()
              .title("SECCIÓN SOBRE MÍ")
              .id("about")
              .child(
                S.document()
                  .schemaType("about")
                  .documentId("about")
              ),
            
            // Services Section
            S.listItem()
              .title("SECCIÓN DE SERVICIOS")
              .id("servicesSection")
              .child(
                S.document()
                  .schemaType("servicesSection")
                  .documentId("servicesSection")
              ),
            
            // portfolio categories
            S.listItem()
              .title("CATEGORÍAS DE PROYECTOS")
              .child(
                S.documentTypeList("portfolioCategory")
              ),


            // portfolio projects
            S.listItem()
              .title("MIS PROYECTOS")
              .child(
                S.documentTypeList("portfolioProject")
              ),
            
            // brands
            S.listItem()
              .title("MARCAS")
              .child(
                S.documentTypeList("brand")
              ),

          ])
    })
  ],
  schema,
});