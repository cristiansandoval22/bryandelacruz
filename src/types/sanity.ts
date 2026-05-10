import { serviceItemType } from "@/sanity/schemaTypes/ServiceItem";
import { servicesSectionType } from "@/sanity/schemaTypes/ServicesSection";


export interface SanityImage {
  alt?: string;
  asset: {
    _ref: string;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
}

/* HERO */

export interface Hero {
  title: string;
  cta: {
    text: string;
    link: string;
    newTab: boolean;
  };
  isActive: boolean;
  socialLinks?: SocialLink[];
  heroImage: SanityImage;
}

/* ABOUT */

export interface AboutStat {
  number: string;
  label: string;
}

export interface About {
  title: string;
  badge?: string; 
  titleStyled: string;
  description: string;
  descriptionSecondary?: string;
  stats?: AboutStat[];
  cta?: {
    text: string;
    link: string;
    newTab: boolean;
  };
  image?: SanityImage;
  isActive?: boolean;
  
}

/* SITE SETTINGS */

export interface SiteSettings {
  siteTitle: string;
  siteDescription?: string;
  siteAuthor?: string;
  siteUrl?: string;
  socialLinks?: SocialLink[];
  favicon?: SanityImage;
  logo?: SanityImage;
  cta?: {
    text: string;
    link: string;
    newTab: boolean;
  };
}



/* PORTFOLIO */

export interface PortfolioCategory {
  title: string;
  slug: {
    current: string;
  };
  order?: number;
  isActive?: boolean;
}

export interface PortfolioProject {
  title: string;
  description?: string;
  projectLink?: string;
  projectImage?: SanityImage;
  categories?: PortfolioCategory[];
  featured?: boolean;
  isActive?: boolean;
}

/* SERVICES */

export interface ServicesSection {
  title: string;
  subtitle?: string;
  isActive: boolean;
  servicesImage?: SanityImage;

  services?: {
    title: string;
    description?: string;
    image?: SanityImage;
  }[];
}


export interface Brand {
  title: string;
  logo?: SanityImage;
  // website?: string;
  isActive?: boolean;
  altText?: string;
  
}

export interface PortfolioProject {
  title: string;
  projectLink?: string;
  projectImage?: SanityImage;
  brand?: Brand;
}


export interface StatisticItem {
  views: string;
  likes: string;
  comments: string;
  shares: string;
  saves: string;
  videoUrl: string;
  phoneImage: SanityImage;
  brand: Brand;
  platform: string;
}

export interface StatisticsSection {
  isActive?: boolean;
  title: string;
  items: StatisticItem[];
  
}