export function getInquiryHref(offerSlug) {
  const params = new URLSearchParams({ offer: offerSlug });
  return `/inquire?${params.toString()}`;
}

export const servicesContent = {
  identity: {
  brand: "Manifest",

  role: "Brand Architect",

  support: [
    "Creative Director",
    "Brand Systems Designer"
  ],

  eyebrow: "Products + Services",

  statement:
    "From Idea to Identity. Make It Real.",

  substatement:
    "I build cohesive digital identity systems that make brands feel intentional, established, and real."
},

flagship: {
  slug: "manifest-method",

  title: "Manifest Method",

  pricing: "Custom quote",

  tagline:
    "Brand realization in real life.",

  summary:
    "A deeper long-term partnership focused on turning ideas into cohesive brand systems, frontend experiences, rollout strategy, and scalable digital presence.",

  ctaLabel:
    "Inquire about Manifest Method"
},

entryOffer: {
  slug: "initiate-identity",

  title: "Initiate Identity",

  pricing: "Starting at $250+",

  tagline:
    "Idea to Identity.",

  summary:
    "A strategic starting point focused on clarity, positioning, audits, direction, and identifying what the brand needs before a larger build or rollout."
},

supportingOffers: [
  {
    slug: "presence-pack",

    title: "Presence Pack",

    pricing: "Starting at $550+",

    summary:
      "Logo refinement, social direction, branded templates, and lighter visual cleanup for brands that need stronger consistency without a full rebuild."
  },

  {
    slug: "rebuild-revitalize",

    title: "Rebuild + Revitalize",

    pricing: "Starting at $1.5k+",

    summary:
      "A deeper rebuild path for websites or digital presence that no longer match the quality, positioning, or direction of the brand behind them."
  },

  {
    slug: "new-growth",

    title: "New Growth",

    pricing: "Starting at $800+",

    summary:
      "A from-scratch launch path for new brands, websites, campaigns, or digital products that need clear structure, momentum, and cohesive presentation."
  },

  {
    slug: "brand-audit",

    title: "Brand Audit",

    pricing: "Starting at $150",

    summary:
      "A lower-friction review of site structure, messaging, social presence, consistency, and where the brand may be losing clarity or attention."
  },

  {
    slug: "templates",

    title: "Templates",

    pricing: "Defined scope pricing available",

    summary:
      "Starter digital products, reusable assets, and structured brand resources for businesses that need a smaller entry point."
  },

  {
    slug: "consultations",

    title: "Consultations",

    pricing: "Starting at $125",

    summary:
      "Focused strategy sessions for rollout direction, positioning, frontend planning, content systems, or clarifying the next move."
  }
],

inquiry: {
  helperCopy:
    "Have your current site, socials, goals, references, and rough timeline ready before reaching out.",

  questions: [
    "What are you trying to make real right now?",
    "Do you need a refresh, a rebuild, or a new launch?"
  ]
}
};

export function getOfferBySlug(slug) {
  const allOffers = [
    servicesContent.flagship,
    servicesContent.entryOffer,
    ...servicesContent.supportingOffers,
  ];

  return allOffers.find((offer) => offer.slug === slug);
}
