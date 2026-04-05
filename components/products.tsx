import Image from 'next/image';

export function Products() {
  const productDetails = [
    {
      id: 'gac',
      title: 'Granular Activated Carbon (GAC)',
      summary:
        "Magico Carbons' Granular Coconut Shell Activated Carbon offers versatile applications. With high adsorptive capacity, it effectively removes contaminants from water, air, liquids, and gases, enhancing taste, odor, and color. It finds use in municipal and environmental water treatment, waste gas treatment, mercury removal, food and beverage, metal recovery, and medicinal applications. Different particle sizes cater to vapor and liquid adsorption needs. Our coconut shell-based carbon, rich in micro-pores, excels in filtering small organic structures, recovering precious metals, and reducing disinfection byproducts (DBPs) in potable water.",
      image: '/images/CARBON_2_4.png',
      sizes: [
        { label: '4 x 8 Size', detail: 'USS Mesh (Non Washed)' },
        { label: '6 x 12 Size', detail: 'USS Mesh (Acid Washed)' },
        { label: '8 x 30 Size', detail: 'USS Mesh (Non Washed)' },
        { label: '12 x 30 Size', detail: 'USS Mesh (Non Washed)' },
        { label: '14 x 35 Size', detail: 'USS Mesh (Acid Washed)' },
        { label: '20 x 40 Size', detail: 'USS Mesh (Acid Washed)' },
        { label: '30 x 60 Size', detail: 'USS Mesh (Non Washed)' },
        { label: '50 x 100 Size', detail: 'USS Mesh (Non Washed)' },
      ],
    },
    {
      id: 'pac',
      title: 'Powdered Activated Carbon',
      summary:
        'Powdered Activated Carbon (PAC) is similar to Granular Activated Carbon (GAC) as it is made from high-quality coconut shells, coal, and wood. PAC is typically considered to have particles less than U.S. standard 80 mesh size (0.177 mm), which makes it ideal for water treatment. Magico Carbon PAC is a reliable, economical water treatment option for taste and odor control and removal of organic compounds. The use of PAC is beneficial economically and environmentally, since it reduces operating costs, produces minimal waste sludge, allows for the conservation of resources, and provides superior water quality.',
      image: '/images/WATER_4_4.png',
      features: [
        'Powdered activated carbons (PAC) are fine particles passing through an 80-mesh sieve (0.177 mm) and smaller.',
        'Magico Carbon offers a variety of powdered activated carbon products, each designed with a specific pore structure and adsorption properties.',
        'The manufacturing process allows for the creation of unique internal pore structures, resulting in different adsorption properties for each product type.',
        'The choice of product depends on the specific application and the impurities present, as well as proprietary process conditions.',
        "Magico Carbon's powdered activated carbon has a high adsorptive capacity, making it effective in removing contaminants from water, air, liquids, and gases.",
        'The company is committed to environmental responsibility and can reactivate spent Granular Activated Carbon (GAC) through thermal oxidation to produce react PAC.',
        'Magico Carbon provides comprehensive analytical support, including feasibility studies and cost evaluations, as well as complete system design, service, and troubleshooting.',
        "Customers can rely on the expertise of industry experts in powdered activated carbon and trust in Magico Carbon's commitment to service.",
      ],
    },
    {
      id: 'pelletized',
      title: 'Pelletized Activated Carbon',
      summary:
        'Magico Carbon offers pelletized activated carbon, consisting of compressed cylindrical pellets that deliver outstanding performance in numerous applications. These pellets effectively remove contaminants like volatile organic compounds (VOCs) and mercury from natural gas, ensuring the purity and safety of the supply. Additionally, they excel in odor control across various industries. The porous structure of the pellets enables them to adsorb and eliminate odor-causing compounds, creating a cleaner and more pleasant environment.',
      image: '/images/CARBON_2_3.png',
      features: [
        'Pelletized activated carbon is created by extruding activated carbon into cylindrical-shaped pellets with diameters ranging from 0.8 to 5 mm.',
        'Their high activity and surface area make them ideal for many vapor phase applications.',
        'The uniformity of the shape makes it particularly useful in applications where low-pressure drop is a consideration.',
        'Magico Carbon manufactures many pellet types of activated carbon products, each specifically designed to provide a unique pore structure and adsorption properties.',
        'By varying manufacturing conditions, internal pore structures are created that impart unique adsorption properties specific to each product type. The choice of product for a specific application will vary due to differing impurities and process conditions.',
        'The adsorptive capacity of pelletized carbon makes it ideal for removing contaminants from air and gas streams. Pellets are reactivatable through thermal oxidation and can be used multiple times for the same application.',
      ],
    },
  ];

  const packagingInfo = {
    bagQuality: [
      'We provide good quality of packing with safety factor 5.1. Including HDPE bags woven with inner liners: 25 kg HDPE bags, 50 kg HDPE bags, 500 kg HDPE jumbo bags.',
      '25 kg PP plastic bags quality range from 175 to 200 microns and available in white or black colour.',
      'Industry standard heat sealed to ensure secure delivery.',
    ],
    printing: [
      'Customized printing is available.',
      'We have in-house bag designers who can design the bags based on your brand requirements. Labels are pasted as per the requirement of the customer.',
    ],
    shipment:
      'The bags can be placed on wooden pallets in the container and fumigated as per ISPM 15 standards. Once the material is dispatched there will be continuous follow-up from our firm regarding the connectivity of vessels and we will keep you with the tracking details.',
  };

  const broadSpecs = [
    { label: 'CTC Adsorption', value: '40 to 65' },
    { label: 'Iodine Adsorption', value: '800 to 1250 mg/g' },
    { label: 'Surface Area', value: '850 to 1300 m²/g' },
    { label: 'Hardness', value: '97 to 99.8' },
    { label: 'Apparent Density', value: '350 to 550 gms/ltr' },
    { label: 'Moisture', value: 'Less than 5%' },
    { label: 'Ash Content', value: 'Less than 5%' },
    { label: 'pH', value: '6 to 8.8 to 11' },
  ];

  return (
    <section id="products" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        <header className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-[#1000cc]">Our Range Of Products</p>
          <h2 className="text-4xl font-bold text-slate-900">Activated Carbon Grades</h2>
          <p className="text-slate-600">
            Professionally designed catalog that mirrors our printed brochure: granular, powdered, and pelletized carbons with
            detailed benefits, sizes, and specifications.
          </p>
        </header>

        <div className="space-y-16">
          {productDetails.map((product, index) => {
            const articleClasses = [
              'overflow-hidden rounded-[40px] border border-slate-200 shadow-lg',
              index === 0 ? 'bg-gradient-to-br from-[#0c1a6f] to-[#1f1a8c] text-white' : 'bg-white text-slate-900',
            ].join(' ');

            return (
              <article key={product.id} className={articleClasses}>
                <div className="grid gap-8 md:grid-cols-[1fr,1.1fr] items-center px-6 py-10">
                  <div className="relative h-64 rounded-[30px] overflow-hidden border border-white/20 bg-slate-900/10">
                    <Image src={product.image} alt={product.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.4em] text-[#f9a02b]">
                      {product.id === 'gac' ? 'Granular Activated Carbon' : product.id === 'pac' ? 'Powdered Activated Carbon' : 'Pelletized Activated Carbon'}
                    </p>
                    <h3 className="text-3xl font-bold">{product.title}</h3>
                    <p className={index === 0 ? 'text-slate-200 leading-relaxed' : 'text-slate-600 leading-relaxed'}>{product.summary}</p>

                    {product.sizes && (
                      <>
                        <p className="text-lg font-semibold uppercase tracking-[0.3em] text-[#f9a02b]">GAC Product Sizes</p>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                          {product.sizes.map((size) => (
                            <div key={size.label} className="rounded-2xl bg-white/20 border border-white/30 p-4 text-xs font-semibold uppercase tracking-[0.2em]">
                              <p className="text-base">{size.label}</p>
                              <p className="text-[11px] font-normal tracking-normal mt-1">{size.detail}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    {product.features && (
                      <>
                        <p className="text-lg font-semibold uppercase tracking-[0.3em] text-[#f9a02b]">Features & Benefits</p>
                        <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                          {product.features.map((feature) => (
                            <li key={feature} className="leading-relaxed">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="rounded-[32px] border border-slate-200 shadow-md p-8 space-y-8">
          <header className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-[#1000cc]">Broad Specification</p>
            <h3 className="text-3xl font-bold text-slate-900">Key Metrics</h3>
            <p className="text-slate-600">
              Our specification table matches the brochure with CTC, iodine, surface area, density, moisture, ash, hardness, and pH ranges.
            </p>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {broadSpecs.map((spec) => (
              <div key={spec.label} className="rounded-2xl border border-slate-200 px-4 py-3 bg-gray-50">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{spec.label}</p>
                <p className="text-xl font-bold mt-1 text-slate-900">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[32px] border border-slate-200 shadow-md p-8 space-y-8">
          <header className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-[#1000cc]">Custom Packaging</p>
            <h3 className="text-3xl font-bold text-slate-900">Bag Quality, Printing & Shipment</h3>
            <p className="text-slate-600">
              Packaging details follow the brochure exactly so your orders ship safely while reflecting your brand.
            </p>
          </header>
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <h4 className="text-lg font-semibold text-slate-900">Bag Quality</h4>
              <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-slate-600">
                {packagingInfo.bagQuality.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900">Printing</h4>
              <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-slate-600">
                {packagingInfo.printing.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900">Shipment</h4>
              <p className="text-sm text-slate-600 mt-3">{packagingInfo.shipment}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
