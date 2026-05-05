// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import { heroType } from "./hero";
import { siteSettingsType } from "./siteSettings";
import { aboutType } from "./About";
import { portfolioCategoryType } from "./Category";
import { portfolioProjectType } from "./Proyects";
import { servicesSectionType } from "./ServicesSection";
import { brandType } from "./brand";
// import { serviceItemType } from "./ServiceItem";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, aboutType, siteSettingsType, portfolioCategoryType, portfolioProjectType, servicesSectionType, brandType],
};