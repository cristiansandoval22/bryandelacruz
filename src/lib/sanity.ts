import type { SocialLink } from "@/types/sanity";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "a00jgaaz",
  dataset: "production",
  apiVersion: "2024-05-03",
  useCdn: false
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

