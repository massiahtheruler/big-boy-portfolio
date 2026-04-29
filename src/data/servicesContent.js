export function getInquiryHref(offerSlug) {
  const params = new URLSearchParams({ offer: offerSlug });
  return `/inquire?${params.toString()}`;
}

export const servicesContent = {
  identity: {
    brand: "Manifest",
    role: "Brand Architect",
    support: ["Creative Director", "Brand Systems Designer"],
    eyebrow: "Products + Services",
    statement: "From Idea to Identity. Make It Real.",
    substatement: "I make your brand look as real as it actually is.",
  },
  flagship: {
    slug: "manifest-method",
    title: "Manifest Method",
    pricing: "Custom quote",
    tagline: "Brand realization in real life.",
    summary:
      "A deeper partnership for turning vision into a real brand system, digital presence, rollout direction, and ongoing execution support.",
    ctaLabel: "Inquire about Manifest Method",
  },
  entryOffer: {
    slug: "initiate-identity",
    title: "Initiate Identity",
    pricing: "Investment begins at ...",
    tagline: "Idea to Identity.",
    summary:
      "A strategic starting point for clarity, positioning, audit thinking, planning, and direction before the deeper buildout.",
  },
  supportingOffers: [
    {
      slug: "presence-pack",
      title: "Presence Pack",
      pricing: "Starting at 550+",
      summary:
        "Logo polish, social direction, branded templates, and lighter identity cleanup.",
    },
    {
      slug: "rebuild-revitalize",
      title: "Rebuild + Revitalize",
      pricing: "Starting at ...",
      summary:
        "A stronger rebuild lane for an existing site or digital presence that is not matching the real brand.",
    },
    {
      slug: "new-growth",
      title: "New Growth",
      pricing: "Starting at 800+",
      summary:
        "A from-scratch launch path for a new site, new presence, and new digital momentum.",
    },
    {
      slug: "brand-audit",
      title: "Brand Audit",
      pricing: "Starting at 150",
      summary:
        "A lower-friction review of site, social, consistency, clarity, and where the brand is losing people.",
    },
    {
      slug: "templates",
      title: "Templates",
      pricing: "Defined scope pricing available",
      summary:
        "Starter digital products and reusable brand assets for people who need a smaller first step.",
    },
    {
      slug: "consultations",
      title: "Consultations",
      pricing: "Starting at ...",
      summary:
        "Focused strategic sessions for people who need direction, rollout help, or a clearer next move.",
    },
  ],
  inquiry: {
    helperCopy:
      "Have your current site, socials, goals, and rough timeline ready.",
    questions: [
      "What are you trying to make real right now?",
      "Do you need a refresh, a rebuild, or a new launch?",
    ],
  },
};

export function getOfferBySlug(slug) {
  const allOffers = [
    servicesContent.flagship,
    servicesContent.entryOffer,
    ...servicesContent.supportingOffers,
  ];

  return allOffers.find((offer) => offer.slug === slug);
}
