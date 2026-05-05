import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sanity from "@sanity/astro";

import react from "@astrojs/react";

export default defineConfig({
    output: "server",
    adapter: vercel(),

    integrations: [sanity({
        projectId: 'a00jgaaz',
        dataset: 'production',
        useCdn: false, // `false` if you want to ensure fresh data
        apiVersion: "2026-05-03", // insert the current date to access the latest version of the API
        studioBasePath: "/studio",
    }), react()]
});