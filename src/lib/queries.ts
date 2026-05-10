export const heroQuery = `
*[_id == "hero"][0]{
  title,
  heroImage{
    alt,
    asset
  },

  isActive
}
`;


export const siteSettingsQuery = `
*[_id == "siteSettings"][0]{
  siteTitle,
  siteDescription,
  logo,
  favicon,
  email,
  phone,
   cta{
    text,
    link,
    newTab
  },
  socialLinks[]{
    platform,
    url
  }
    
}
`;

export const aboutQuery = `
*[_id == "about"][0]{
  titleStyled,
  badge,
  description,
  descriptionSecondary,
  image{
    alt,
    asset
  },

  stats[]{
    number,
    label
  },

  cta
}
`;

export const servicesSectionQuery = `
*[_id == "servicesSection"][0]{
  title,
  subtitle,
  isActive,
  servicesImage{
    alt,
    asset
  },
  services[]{
    title,
    description,
    image{
      alt,
      asset
    }
  }
}
`;


export const portfolioProjectsQuery = `
*[_type == "portfolioProject"]{
  title,
  description,
  videoUrl,
  thumbnail{
    asset
  },
  category->{
    title
    }, 
  brand->{
    title,
    logo
  }
}
`;

export const marcasQuery = `
*[_type == "brand"]{
  title,
  logo{
    asset
  },
  isActive
}
`;


export const statisticsSectionQuery = `
*[_type == "statisticsSection"][0]{
  isActive,
  title,

  items[]{
    views,
    likes,
    comments,
    shares,
    saves,
    videoUrl,
    phoneImage,
    platform,

    brand->{
      title,
      logo,
      isActive
    }
  }
}
`;


