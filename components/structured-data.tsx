export function StructuredData() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Magico Carbon',
    url: 'https://magicocarbon.com',
    logo: 'https://magicocarbon.com/logo.png',
    description:
      'Leading global supplier of premium steam-activated coconut shell carbon for water treatment, air purification, and industrial applications.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'A-14/2, Malviya Nagar Extn, Saket',
      addressLocality: 'Delhi',
      postalCode: '110017',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8010223355',
      contactType: 'Sales',
    },
    sameAs: ['https://www.linkedin.com/company/magico-carbon'],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      description: 'Granular, Powdered, and Pelletized Activated Carbon',
      offerCount: '3',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

export function ProductSchema() {
  const products = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Granular Activated Carbon (GAC)',
      description: 'Superior filtration with efficient precious metal recovery.',
      manufacturer: {
        '@type': 'Organization',
        name: 'Magico Carbon',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '500',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Powdered Activated Carbon (PAC)',
      description: 'Versatile carbon for liquid applications with high adsorptive capacity.',
      manufacturer: {
        '@type': 'Organization',
        name: 'Magico Carbon',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '450',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Pelletized Activated Carbon (EAC)',
      description: 'Premium cylindrical pellets for air and gas purification.',
      manufacturer: {
        '@type': 'Organization',
        name: 'Magico Carbon',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '380',
      },
    },
  ];

  return (
    <>
      {products.map((product, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
        />
      ))}
    </>
  );
}
