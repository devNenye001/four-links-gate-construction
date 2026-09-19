import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'business.business';
  ogImage?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = 'https://fourgateslink.com/hero-bg.jpg',
  schema,
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let meta = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'title', title);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }
    setMetaTag('name', 'author', 'Four Gates Links Construction Company Nigeria Limited');
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // 3. Canonical URL
    const canonicalUrl = canonical || window.location.href.split('?')[0];
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'Four Gates Links Construction');
    setMetaTag('property', 'og:locale', 'en_NG');

    // 5. Twitter Card Tags
    setMetaTag('property', 'twitter:card', 'summary_large_image');
    setMetaTag('property', 'twitter:title', title);
    setMetaTag('property', 'twitter:description', description);
    setMetaTag('property', 'twitter:image', ogImage);
    setMetaTag('property', 'twitter:url', canonicalUrl);

    // 6. JSON-LD Schema
    const scriptId = 'structured-data-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const baseOrganizationSchema = {
      '@context': 'https://schema.org',
      '@type': ['GeneralContractor', 'LocalBusiness', 'HomeAndConstructionBusiness'],
      '@id': 'https://fourgateslink.com/#organization',
      name: 'FOUR GATES LINKS CONSTRUCTION COMPANY NIGERIA LIMITED',
      alternateName: 'Four Gates Links',
      url: 'https://fourgateslink.com',
      logo: 'https://fourgateslink.com/logo.svg',
      image: 'https://fourgateslink.com/hero-bg.jpg',
      description: 'Four Gates Links Construction Company Nigeria Limited provides building construction, structural engineering, electrical installations, project management, and housing on credit in Minna, Niger State and across Nigeria.',
      telephone: ['+2347031033348', '+2347049463239'],
      email: 'talk2fourgateslinks@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Opposite Bahago Plaza, Optima Filing Station First Floor, Along Paiko Road, Tunga',
        addressLocality: 'Minna',
        addressRegion: 'Niger State',
        addressCountry: 'NG'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 9.6336916,
        longitude: 6.5425064
      },
      hasMap: 'https://maps.google.com/?cid=18442078601614762770',
      priceRange: '₦₦ - ₦₦₦₦',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '08:00',
          closes: '18:00'
        }
      ],
      areaServed: [
        {
          '@type': 'AdministrativeArea',
          name: 'Niger State'
        },
        {
          '@type': 'City',
          name: 'Minna'
        },
        {
          '@type': 'Country',
          name: 'Nigeria'
        }
      ],
      founder: {
        '@type': 'Person',
        name: 'Francis Onochie Okolie Nzube',
        alternateName: ['Francis Okolie', 'Francis Onochie Okolie', 'Francis Nzube', 'CEO Four Gates Links'],
        jobTitle: 'Founder and Director',
        image: 'https://fourgateslink.com/ceo.jpeg',
        url: 'https://fourgateslink.com/about'
      },
      knowsAbout: [
        'Building Construction',
        'Structural Engineering',
        'Civil Engineering',
        'Electrical Wiring and Installation',
        'Distribution Panels and Switchgear',
        'Project Management and Site Supervision',
        'Renovation and Maintenance',
        'Housing on Credit Scheme'
      ]
    };

    const finalSchema = schema 
      ? Array.isArray(schema) 
        ? [baseOrganizationSchema, ...schema] 
        : [baseOrganizationSchema, schema]
      : baseOrganizationSchema;

    scriptTag.text = JSON.stringify(finalSchema);

    // Cleanup when component unmounts if needed
    return () => {
      // Keep base meta intact
    };
  }, [title, description, keywords, canonical, ogType, ogImage, schema]);

  return null;
};
