const portfolioProjects = [
  {
    slug: "gocart",
    name: "GoCart",
    featured: true,
    tagline:
      "A full-stack multi-vendor ecommerce platform with customer, seller, and admin workflows built around a premium custom UI system.",
    summary:
      "GoCart is a multi-vendor marketplace product, not just a styled storefront. It combines customer shopping, seller tooling, admin controls, Stripe payments, coupon systems, reviews, AI-assisted listing support, and a custom showroom-inspired interface inside one cohesive application.",
    audienceSummary:
      "GoCart shows how I approach product depth: role-aware systems, commerce workflows, dashboards, payments, and frontend experiences that stay clear even when the product complexity increases.",
    role: "Product designer, frontend engineer, and full-stack systems builder",
    stack: [
      "Next.js App Router",
      "React",
      "Tailwind CSS",
      "Clerk",
      "Redux Toolkit",
      "Prisma",
      "Neon Postgres",
      "Stripe",
      "ImageKit",
      "Inngest",
      "AI integration",
    ],
    heroMedia: {
      eyebrow: "Marketplace / Ecommerce",
      heading: "Marketplace depth built around polished product experiences",
      detail:
        "Customer, seller, and admin experiences with store approval workflow, scheduled coupons, delivered-order reviews, Stripe checkout, and AI-assisted listing support.",
    },
    previewImage: "/assets/gocart-home.png",
    links: {
      live: "https://gocart-beta-one.vercel.app",
      code: "https://github.com/massiahtheruler/gocart",
    },
    demoAccounts: [
      {
        label: "Customer Demo",
        email: "kingmassiah124@gmail.com",
        password: "random123!321",
      },
      {
        label: "Seller / Admin Demo",
        email: "justin.henry0024@gmail.com",
        password: "random123!321",
      },
      {
        label: "Admin Demo",
        email: "massiah024@gmail.com",
        password: "random123!321",
      },
      {
        label: "Pending Seller Demo",
        email: "justin.henry124@gmail.com",
        password: "random123!321",
      },
    ],
    featureHighlights: [
      "Multi-vendor ecommerce with customer, seller, and admin surfaces inside one app",
      "Functional cart, checkout, COD flow, Stripe payments, and account-aware UI behavior",
      "Public deals system with active, upcoming, and expired campaigns plus coupon validation timing",
      "Custom glassmorphic and showroom-inspired styling built directly into the application without relying on prefab motion templates",
    ],
    technicalProof: [
      "Built with Next.js App Router, Clerk auth, Redux Toolkit state, Prisma, and Neon Postgres-backed marketplace data.",
      "Structured role-aware routes and gating for customers, sellers, and admins instead of treating auth like a cosmetic add-on.",
      "Handled Stripe checkout, coupon scheduling, selected-deal persistence, delivered-order review gating, and seller/admin order logic.",
      "Integrated ImageKit media handling, Inngest scheduling, and AI-assisted listing flows while keeping the interface polished and state-driven.",
    ],
    buildStory:
      "GoCart was an exercise in making complexity feel simple. The challenge was not adding features. The challenge was making customers, sellers, admins, payments, deals, reviews, and fulfillment workflows feel like one product instead of a collection of disconnected tools.",
    status: "Shipped concept",
    accent: "emerald",
  },
  {
    slug: "netflix-clone",
    name: "Netflix Clone",
    featured: true,
    tagline:
      "A React streaming interface focused on cinematic interaction design, protected user flows, and hand-built frontend motion systems.",
    summary:
      "This project started as a Netflix-inspired streaming interface, but the deeper challenge was recreating the pacing and responsiveness of a production product through autoplay timing, protected routes, live TMDB-powered content rails, player pages, and motion built directly with state, CSS, timers, masking, and browser APIs.",
    audienceSummary:
      "This project reflects my interest in interaction design and frontend behavior. The focus was not recreating Netflix visually, but understanding how timing, motion, state, and responsiveness shape the experience.",
    role: "Frontend engineer and interaction-focused UI systems builder",
    stack: [
      "React",
      "Vite",
      "React Router",
      "Firebase Auth",
      "Firestore",
      "TMDB API",
      "Sass",
      "Tailwind CSS",
    ],
    heroMedia: {
      eyebrow: "Entertainment UI / Motion",
      heading:
        "Cinematic interaction systems built from timing, state, and layered frontend behavior",
      detail:
        "Timed autoplay trailer behavior, masked hero transitions, protected routes, wheel-based content rails, and dedicated player pages for each title.",
    },
    previewImage: "/assets/netflix-clone-home.png",
    links: {
      live: "https://netflix-clone-delta-indol.vercel.app",
      code: "https://github.com/massiahtheruler/netflix-clone",
    },
    demoAccounts: [
      {
        label: "Demo Account",
        email: "massiah024@gmail.com",
        password: "Random123!321",
      },
    ],
    featureHighlights: [
      "Cinematic hero system with autoplay countdowns, custom loading states, and masked image-to-video transitions",
      "Firebase authentication with protected routes and auth-aware navigation behavior",
      "Live TMDB-powered content rails with wheel interaction, hover expansion, and player-page routing",
      "Responsive layout tuning across desktop, tablet, and mobile instead of relying on default stack-and-shrink behavior",
    ],
    technicalProof: [
      "Built motion systems directly with React state, timers, CSS transitions, transforms, overlays, and browser APIs instead of relying on animation libraries.",
      "Used Firebase Auth and Firestore to manage account flow, protected routes, and auth-aware redirects.",
      "Structured live media rails and player pages around TMDB data while keeping the interface readable and visually cohesive.",
      "Combined Sass and Tailwind into a layered styling system with masking, blur, overlays, and responsive behavior.",
    ],
    buildStory:
      "What interested me most was the psychology behind the interface. Great streaming products create clarity through timing, hierarchy, and interaction. Rebuilding those behaviors taught me more than simply matching the visuals ever could.",
    status: "Featured build",
    accent: "violet",
  },
  {
    slug: "twitter-glitter",

    name: "Twitter / Glitter",

    featured: true,

    tagline:
      "A full-stack social platform inspired by X/Twitter with authenticated user flow, custom branding systems, and interaction-focused frontend architecture.",

    summary:
      "Glitter is a social platform centered around authenticated user flow, post creation, dynamic profiles, editable accounts, feed interaction, and branded social UX systems. What started from a tutorial foundation evolved into a more original product direction with expanded functionality, stronger interface consistency, and custom platform concepts.",

    audienceSummary:
      "Glitter explores how familiar social patterns can be reshaped into a more intentional product. The goal was to create a platform that feels branded, structured, and account-aware rather than simply recreating an existing social feed.",

    role: "Frontend engineer, product systems builder, and interaction-focused social UX designer",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "Zustand",
      "SWR",
    ],

    heroMedia: {
      eyebrow: "Social Product / UX Systems",

      heading:
        "A branded social platform built around account-aware interaction systems",

      detail:
        "Dynamic profiles, post creation, editable accounts, discovery sidebars, authenticated session flow, and custom concepts like Brok AI chat and Deeems messaging.",
    },

    previewImage: "/assets/twitter-glitter-home.png",

    links: {
      live: "https://glitter-theta.vercel.app",
      code: null,
    },

    demoAccounts: [
      {
        label: "Primary Demo",
        email: "massiah024@gmail.com",
        password: "random123!321",
      },
      {
        label: "Secondary Demo",
        email: "justin.henry0024@gmail.com",
        password: "random123!321",
      },
    ],

    featureHighlights: [
      "Authenticated sign up, sign in, sign out, and session-aware account flow instead of a static social interface",
      "Scroll-centered social layout with persistent navigation, central feed systems, and discovery-focused sidebars",
      "Dynamic profile pages with ownership-aware UI, editable accounts, follow states, avatar systems, and user-specific rendering",
      "Custom product direction with Brok AI chat, Deeems messaging, and a more approachable branded social experience",
    ],

    technicalProof: [
      "Built with Next.js, TypeScript, Prisma, MongoDB, NextAuth, Zustand, and SWR for account-aware social interaction systems.",
      "Structured modal-driven authentication, feed rendering, post creation, profile editing, and route-specific user behavior inside one cohesive application flow.",
      "Handled conditional UI states for authenticated users, signed-out visitors, self-owned profiles, and user-to-user interaction behavior.",
      "Expanded older tutorial foundations into a more modernized product structure with stronger frontend architecture and branding consistency.",
    ],

    buildStory:
      "The challenge was not building a feed. It was creating a social product with identity. Every decision pushed the project further away from tutorial replication and closer to a platform with its own voice, behavior, and product direction.",

    status: "Featured build",

    accent: "rose",
  },
  {
    slug: "litty-hub",

    name: "Litty Hub",

    featured: false,

    tagline:
      "A connected brand ecosystem that combines frontend execution, visual systems, and product storytelling into one scalable identity framework.",

    summary:
      "Litty Hub is the broader ecosystem layer behind the portfolio: part brand system, part execution model, and part long-term product direction. The project connects multiple business lanes, visual identities, service flows, and future launches into one cohesive digital world designed to scale without losing consistency. A shared monogram system ties each brand together visually while still allowing every lane to maintain its own positioning and identity.",

    audienceSummary:
      "Litty Hub represents how I think about systems beyond a single website. Identity, frontend execution, content, positioning, and long-term growth all become stronger when they are designed to work together instead of separately.",

    role: "Brand architect, frontend engineer, visual systems designer, and strategic product partner",

    stack: [
      "React",
      "Vite",
      "Sass",
      "Brand systems",
      "Content direction",
      "Service design",
    ],

    heroMedia: {
      eyebrow: "Umbrella Brand / Ecosystem Systems",

      heading:
        "One connected system for multiple brands, products, and experiences",

      detail:
        "A shared monogram language, a seven-step Manifest Method framework, and a scalable brand ecosystem built to carry ideas from concept through execution.",
    },

    previewImage: "/assets/litty-hub-home.png",

    links: {
      live: "https://litty-hub.vercel.app",
      code: null,
    },

    featureHighlights: [
      "Litty Co. positioned as the umbrella brand and attention engine for the larger ecosystem",
      "Manifest Method introduced as a seven-step framework spanning identity, systems, execution, content, and long-term growth",
      "A four-brand rollout structure designed to give each lane distinct positioning while maintaining shared visual consistency",
      "A modular content strategy built around repurposable assets across every connected brand surface",
    ],

    technicalProof: [
      "Structured the project as both a frontend experience and a scalable service framework instead of treating the site as a static brochure.",

      "Built a repeatable visual system around shared monograms, cinematic styling, modular layouts, and reusable content structures so each connected brand feels distinct while remaining part of the same ecosystem.",

      "Used React, routed storytelling, and reusable section architecture to present a larger ecosystem cleanly and coherently.",

      "Defined scalable rollout logic so new brands, products, and campaigns can expand without the ecosystem feeling disconnected.",
    ],

    detailSections: [
      {
        eyebrow: "Execution Order",

        title: "How the ecosystem scales",

        list: [
          "Litty Co. launches first as the lifestyle wrapper and attention engine.",
          "JJ Totes follows as the cleaner operational product lane.",
          "Great Wall of Legends becomes the premium showcase experience.",
          "JJ Pro Service remains part of the ecosystem while supporting the broader transition.",
        ],
      },

      {
        eyebrow: "Service Model",

        title: "What the partnership actually delivers",

        body: "The model goes beyond building standalone websites. It combines identity systems, frontend execution, rollout strategy, content direction, and long-term brand cohesion so businesses feel intentional across every customer-facing surface.",
      },

      {
        eyebrow: "Content Engine",

        title: "One production system across multiple brands",

        body: "Content is designed to scale across the ecosystem: operational reliability for JJ Pro, efficiency and utility for JJ Totes, premium ambiance for Great Wall, and lifestyle-driven storytelling for Litty Co.",
      },
    ],

    buildStory:
      "Litty Hub is the clearest representation of how I think. The goal is not simply building websites. It is creating connected systems where identity, products, services, content, and execution reinforce each other as the ecosystem grows.",

    status: "Active build",

    accent: "amber",
  },
];

export const caseStudies = portfolioProjects.filter(
  (project) => project.featured,
);

export function getCaseStudyBySlug(slug) {
  return portfolioProjects.find((project) => project.slug === slug);
}
