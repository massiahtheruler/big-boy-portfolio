import { greatWallLiveUrl, greatWallPreviewImage } from "./manifestFramework";

export const PROJECT_GROUPS = {
  featured: "featured",
  completed: "completed",
  current: "current",
  client: "client",
  internship: "internship",
  experiment: "experiment",
  product: "product",
  caseStudy: "case-study",
};

export const PROJECT_ARCHIVE_GROUPS = [
  {
    group: PROJECT_GROUPS.featured,
    eyebrow: "Featured",
    title: "The main three",
    description:
      "These are the first projects recruiters and clients should see because they show product thinking, technical depth, and the ability to make complex apps feel clear.",
  },
  {
    group: PROJECT_GROUPS.completed,
    eyebrow: "Completed",
    title: "Completed case studies",
    description:
      "Finished builds with individual pages, full project framing, technical proof, and links where available.",
    routableOnly: true,
  },
  {
    group: PROJECT_GROUPS.client,
    eyebrow: "Client work",
    title: "Client and partner work",
    description:
      "Projects connected to active business direction, client-facing systems, and brand execution.",
  },
  {
    group: PROJECT_GROUPS.internship,
    eyebrow: "Internships",
    title: "Internship work",
    description:
      "A dedicated section is ready for internship projects once those records are added to the central data file.",
  },
  {
    group: PROJECT_GROUPS.product,
    eyebrow: "Products",
    title: "Product builds",
    description:
      "Original products, tools, and platform ideas that deserve their own lane in the archive.",
  },
  {
    group: PROJECT_GROUPS.experiment,
    eyebrow: "Experiments",
    title: "Experiments and prototypes",
    description:
      "Smaller explorations, technical tests, and interface ideas that show range without needing full case studies.",
  },
];

export const projects = [
  {
    slug: "gocart",
    name: "GoCart",
    kind: "case-study",
    groups: [
      PROJECT_GROUPS.featured,
      PROJECT_GROUPS.completed,
      PROJECT_GROUPS.caseStudy,
    ],
    featuredOrder: 1,
    archiveOrder: 1,
    status: "Shipped concept",
    accent: "emerald",
    tagline:
      "A full-stack multi-vendor ecommerce platform with customer, seller, and admin workflows built around polished commerce UX.",
    summary:
      "GoCart is a multi-vendor marketplace that brings customer shopping, seller tooling, admin controls, Stripe payments, coupon systems, reviews, and AI-assisted listing support into one cohesive commerce platform.",
    audienceSummary:
      "GoCart shows how I handle product depth: role-aware systems, commerce workflows, dashboards, payments, and interfaces that stay clear as complexity increases.",
    role: "Frontend engineer and full-stack product builder",
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
      heading:
        "Marketplace workflows built into a polished commerce experience",
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
      "Custom visual system and interaction polish built directly into the application instead of relying on generic templates",
    ],
    technicalProof: [
      "Built with Next.js App Router, Clerk auth, Redux Toolkit state, Prisma, and Neon Postgres-backed marketplace data.",
      "Structured role-aware routes and gating for customers, sellers, and admins instead of treating auth like a cosmetic add-on.",
      "Handled Stripe checkout, coupon scheduling, selected-deal persistence, delivered-order review gating, and seller/admin order logic.",
      "Integrated ImageKit media handling, Inngest scheduling, and AI-assisted listing flows while keeping the interface polished and state-driven.",
    ],
    buildStory:
      "GoCart was about making a dense marketplace feel usable. The challenge was connecting customers, sellers, admins, payments, deals, reviews, and fulfillment workflows so the product felt unified instead of stitched together.",
    resume: {
      include: true,
      order: 1,
      subtitle: "Full-Stack E-Commerce Platform",
      live: "https://gocart-beta-one.vercel.app",
      code: "https://github.com/massiahtheruler/gocart",
      stack:
        "Next.js · React · TypeScript · Tailwind CSS · Redux · Prisma · PostgreSQL · Stripe",
      bullets: [
        "Built a multi-role marketplace with customer, seller, and admin workflows, role-aware routing, checkout, coupons, dashboards, and account-specific UI states inside one cohesive product.",
        "Structured dense commerce functionality into responsive storefront and dashboard interfaces that stay clear across payment, order, product, and promotion flows.",
      ],
    },
  },
  {
    slug: "netflix-clone",
    name: "Netflix Clone",
    kind: "case-study",
    groups: [PROJECT_GROUPS.completed, PROJECT_GROUPS.caseStudy],
    archiveOrder: 5,
    status: "Featured build",
    accent: "violet",
    tagline:
      "A React streaming interface focused on protected user flows, live media data, responsive layouts, and custom interaction behavior.",
    summary:
      "This project recreates a streaming product experience with authenticated access, live TMDB-powered content rails, player pages, protected routes, autoplay timing, and custom motion built with React state, CSS, timers, masking, and browser APIs.",
    audienceSummary:
      "This project shows my interest in interaction design and frontend behavior: timing, motion, state, protected routes, and responsive layout decisions all working together inside one product experience.",
    role: "Frontend engineer and interaction-focused UI builder",
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
        "Streaming UI behavior built with timing, state, and responsive frontend systems",
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
      "The goal was to understand the frontend behavior behind a polished streaming interface: timing, hierarchy, protected access, content rails, and player routing. Matching the look mattered, but the real value was rebuilding the interaction patterns that make the product feel responsive.",
    resume: {
      include: true,
      order: 5,
      subtitle: "Streaming UI & Interaction Systems",
      live: "https://netflix-clone-delta-indol.vercel.app/login",
      code: "https://github.com/massiahtheruler/netflix-clone",
      stack: "React · Vite · Firebase Auth · Firestore · TMDB API · SCSS",
      bullets: [
        "Recreated a streaming product experience with auth gating, protected routes, cinematic autoplay behavior, content rails, player pages, and responsive interaction states.",
        "Coordinated TMDB data, Firebase auth, timing, masks, hover behavior, and player state to make the interface feel product-like instead of static.",
      ],
    },
  },
  {
    slug: "summarist",
    name: "Summarist",
    kind: "case-study",
    groups: [
      PROJECT_GROUPS.featured,
      PROJECT_GROUPS.completed,
      PROJECT_GROUPS.internship,
      PROJECT_GROUPS.caseStudy,
    ],
    featuredOrder: 2,
    archiveOrder: 2,
    status: "Internship build",
    accent: "sky",
    tagline:
      "A subscription-based book summary platform with authentication, Stripe billing, audio playback, premium gating, and Firestore persistence.",
    summary:
      "Summarist is a book summary and audio platform built during the Frontend Simplified Virtual Internship. I turned the provided starter assets into a full Next.js application with auth flows, dynamic book routes, audio playback, Stripe subscriptions, premium access logic, saved books, finished books, settings, and search.",
    audienceSummary:
      "Summarist shows my ability to connect authentication, payments, protected content, persistent user data, and product-level state into one subscription-style application.",
    role: "Frontend engineer and subscription product builder",
    stack: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "Firebase Auth",
      "Firestore",
      "Stripe Checkout",
      "CSS",
    ],
    heroMedia: {
      eyebrow: "Subscription Product / Internship",
      heading:
        "Auth, payments, persistence, and premium content in one product flow",
      detail:
        "Firebase authentication, Firestore saved and finished books, Stripe subscriptions, premium content gating, dynamic book routes, and audio playback inside a complete reading platform.",
    },
    previewImage: "/assets/login summarist.png",
    links: {
      live: "https://summarist-rust.vercel.app",
      code: "https://github.com/massiahtheruler/summarist",
    },
    demoAccounts: [
      {
        label: "Standard User",
        email: "guest123@gmail.com",
        password: "guest123",
      },
      {
        label: "Premium User",
        email: "guest@gmail.com",
        password: "guest123",
      },
    ],
    featureHighlights: [
      "Firebase email/password auth, Google auth, guest login, logout, and forgot password flow",
      "Stripe Checkout subscriptions with monthly and yearly premium access paths",
      "Firestore-backed saved books and finished books scoped to each authenticated user",
      "Dynamic book detail pages, dynamic player pages, debounced search, settings states, and audio playback",
    ],
    technicalProof: [
      "Connected authentication state to premium content behavior instead of treating login as an isolated modal.",
      "Scoped saved and finished book data under each signed-in user's Firestore UID for persistent user-specific library state.",
      "Built Stripe Checkout subscription flows and gated read/listen behavior based on premium access requirements.",
      "Handled logged-in, logged-out, free, and premium states across search, settings, saved books, book details, and player pages.",
    ],
    buildStory:
      "Summarist was about coordinating the systems behind a subscription product. Auth, payments, premium access, saved data, finished books, dynamic routes, and audio playback all needed to respond to the user's account state in a consistent way.",
  },
  {
    slug: "twitter-glitter",
    name: "Twitter / Glitter",
    kind: "case-study",
    groups: [
      PROJECT_GROUPS.featured,
      PROJECT_GROUPS.completed,
      PROJECT_GROUPS.caseStudy,
    ],
    featuredOrder: 3,
    archiveOrder: 3,
    status: "Featured build",
    accent: "rose",
    tagline:
      "A full-stack social platform with authenticated user flow, dynamic profiles, feed interactions, messaging concepts, and branded frontend architecture.",
    summary:
      "Glitter is a social platform centered around authenticated user flow, post creation, dynamic profiles, editable accounts, feed interaction, and branded social UX. I expanded the tutorial foundation into a more original product direction with stronger interface consistency and custom platform concepts.",
    audienceSummary:
      "Glitter shows how I work with familiar social patterns while adding clearer structure, stronger branding, account-aware behavior, and more intentional interaction flows.",
    role: "Frontend engineer and social product builder",
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
        "A branded social platform built around account-aware interactions",
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
      "Expanded the tutorial foundation into a more original product structure with stronger frontend architecture and branding consistency.",
    ],
    buildStory:
      "The challenge was turning a familiar social feed pattern into a product that felt more intentional. I focused on identity, account-aware behavior, interaction flow, and custom features that moved it beyond the original tutorial structure.",
    resume: {
      include: true,
      order: 3,
      title: "Glitter",
      subtitle: "Original Social Product",
      live: "https://glitter-theta.vercel.app",
      code: "https://github.com/massiahtheruler/glitter",
      stack:
        "Next.js · React · TypeScript · Tailwind CSS · Prisma · MongoDB · NextAuth",
      bullets: [
        "Built a branded social platform with dynamic profiles, post creation, messaging concepts, notifications, account-aware UI behavior, and consistent interaction patterns across routes.",
        "Expanded a tutorial foundation into a more original product direction with stronger visual hierarchy, state handling, and social UX systems.",
      ],
    },
  },
  {
    slug: "litty-hub",
    name: "Litty Hub",
    kind: "case-study",
    groups: [
      PROJECT_GROUPS.current,
      PROJECT_GROUPS.client,
      PROJECT_GROUPS.caseStudy,
    ],
    currentOrder: 1,
    archiveOrder: 4,
    status: "Active build",
    accent: "amber",
    tagline:
      "A connected brand ecosystem built around frontend execution, visual systems, service structure, and long-term product direction.",
    summary:
      "Litty Hub is the broader ecosystem layer behind the portfolio. It connects multiple business lanes, visual identities, service flows, and future launches into one organized digital system. A shared monogram language ties the brands together visually while still allowing each lane to maintain its own positioning.",
    audienceSummary:
      "Litty Hub shows how I think beyond a single website: identity, frontend execution, content, positioning, and long-term growth working together instead of being treated as separate pieces.",
    role: "Frontend engineer, brand systems designer, and product strategist",
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
        "A connected system for multiple brands, services, and product ideas",
      detail:
        "A shared monogram language, a seven-step Manifest Method framework, and a scalable brand ecosystem built to carry ideas from concept through execution.",
    },
    previewImage: "/assets/litty-hub-home.png",
    cardTagline:
      "Litty Hub connects separate products, services, and identities into one visual and strategic system built to scale without losing cohesion.",
    previewSummary:
      "The preview explores the shared monogram system, Manifest Method framework, rollout structure, and the frontend thinking behind turning multiple brands into one connected experience.",
    previewHighlights: [
      "Manifest Method framework",
      "Shared monogram language",
      "4-brand ecosystem",
    ],
    metrics: ["4 connected brands", "1 shared system", "7-step framework"],
    tags: [
      "brand architecture",
      "frontend systems",
      "ecosystem design",
      "content direction",
    ],
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
      "Structured the project as a frontend experience and scalable service framework instead of treating the site as a static brochure.",
      "Built a repeatable visual system around shared monograms, modular layouts, and reusable content structures so each connected brand feels distinct while remaining part of the same ecosystem.",
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
        body: "The model combines identity systems, frontend execution, rollout strategy, content direction, and long-term brand cohesion so businesses feel intentional across every customer-facing surface.",
      },
      {
        eyebrow: "Content Engine",
        title: "One production system across multiple brands",
        body: "Content is designed to scale across the ecosystem: operational reliability for JJ Pro, efficiency and utility for JJ Totes, premium ambiance for Great Wall, and lifestyle-driven storytelling for Litty Co.",
      },
    ],
    buildStory:
      "Litty Hub is the clearest representation of how I think about digital systems. The goal is to connect identity, products, services, content, and execution so each part supports the larger ecosystem as it grows.",
  },
  {
    slug: "big-boy-portfolio",
    name: "Big Boy Portfolio",
    kind: "resume-only",
    groups: [PROJECT_GROUPS.completed],
    archiveOrder: 6,
    status: "Live portfolio",
    accent: "violet",
    links: {
      live: "https://big-boy-portfolio.vercel.app",
      code: "https://github.com/massiahtheruler/big-boy-portfolio",
    },
    resume: {
      include: true,
      order: 2,
      subtitle: "Frontend Product System",
      live: "https://big-boy-portfolio.vercel.app",
      code: "https://github.com/massiahtheruler/big-boy-portfolio",
      stack: "React · Vite · React Router · Sass · EmailJS · Vitest",
      bullets: [
        "Built a routed portfolio product with case studies, service flows, inquiry behavior, reusable content structure, responsive layout, and recruiter/client-facing project storytelling.",
        "Centralized project data and page rendering logic so links, case-study routes, archive ordering, and resume project content can scale from one source of truth.",
      ],
    },
  },
  {
    slug: "holy-grails-react",
    name: "Holy Grails React",
    kind: "resume-only",
    groups: [PROJECT_GROUPS.completed],
    archiveOrder: 7,
    status: "Frontend rebuild",
    accent: "amber",
    links: {
      live: "https://holy-grail-react.vercel.app/",
      code: "https://github.com/massiahtheruler/holy-grails-react",
    },
    resume: {
      include: true,
      order: 4,
      subtitle: "Frontend Architecture Conversion",
      live: "https://holy-grail-react.vercel.app/",
      code: "https://github.com/massiahtheruler/holy-grails-react",
      stack: "React · Vite · Redux · CSS",
      bullets: [
        "Rebuilt a vanilla JS storefront into a scalable React component architecture with reusable UI patterns, route-aware interactions, and shared cart state managed cleanly across views.",
        "Preserved visual fidelity while improving maintainability, state organization, responsive behavior, and frontend structure.",
      ],
    },
  },
  {
    id: "great-wall",
    name: "Great Wall",
    kind: "external-current",
    groups: [PROJECT_GROUPS.current, PROJECT_GROUPS.client],
    currentOrder: 2,
    archiveOrder: 5,
    status: "Flagship Manifest engagement",
    previewImage: greatWallPreviewImage,
    description:
      "Great Wall is a conversion-focused landing experience for a local service business, built with responsive layouts, motion details, CTA hierarchy, and an interactive SVG/3D model feature.",
    tags: [
      "Manifest framework",
      "conversion UX",
      "responsive frontend",
      "SVG/3D feature",
    ],
    links: {
      live: greatWallLiveUrl,
    },
    gallery: [
      {
        title: "Framework proof",
        body: "The project turns the Manifest framework into a real client-facing experience: identity, presence, trust, recognition, and action arranged around a clearer path to contact.",
      },
      {
        title: "Frontend execution",
        body: "The build focuses on CTA hierarchy, responsive layout, motion details, polished sections, and an interactive visual feature that makes the service feel more credible before a customer reaches out.",
      },
    ],
  },
  {
    id: "custom-build-pipeline",
    name: "Custom build pipeline",
    kind: "initiative",
    groups: [PROJECT_GROUPS.current],
    currentOrder: 3,
    status: "Actively evolving",
    description:
      "A repeatable process for turning rough ideas into polished digital systems: strategy first, interface second, and implementation grounded in the product goal.",
    tags: [
      "build systems",
      "product strategy",
      "client workflows",
      "frontend execution",
    ],
    links: {},
    gallery: [
      {
        title: "Strategy before screens",
        body: "The process keeps the product goal, audience, and business direction visible before layout decisions start taking over.",
      },
      {
        title: "Reusable execution rhythm",
        body: "Each build moves through content, structure, design, implementation, and polish so future projects can start faster without feeling copied.",
      },
    ],
  },
  {
    id: "original-product-concepts",
    name: "Original product concepts",
    kind: "initiative",
    groups: [PROJECT_GROUPS.current],
    currentOrder: 4,
    status: "In development",
    description:
      "Original product ideas shaped around repeated problems in creation, organization, publishing, identity, and turning a clear vision into something usable.",
    tags: [
      "original products",
      "interaction design",
      "frontend architecture",
      "creator systems",
    ],
    links: {},
    gallery: [
      {
        title: "Problem-led product thinking",
        body: "The strongest ideas come from repeated friction: where people lose momentum, where tools get scattered, and where a cleaner interface could make the work easier.",
      },
      {
        title: "Systems that can become products",
        body: "The focus is not only one-off pages. It is building patterns that can turn into usable tools, platforms, and service-backed products later.",
      },
    ],
  },
];

function byOrder(field, fallbackField = "archiveOrder") {
  return (first, second) => {
    const firstOrder = first[field] ?? first[fallbackField] ?? 999;
    const secondOrder = second[field] ?? second[fallbackField] ?? 999;

    return firstOrder - secondOrder;
  };
}

function hasGroup(project, group) {
  return project.groups?.includes(group);
}

export function getProjectBySlug(slug) {
  return projects.find(
    (project) => project.slug === slug && project.kind === "case-study",
  );
}

export function getProjectsByGroup(group, options = {}) {
  const { orderField = "archiveOrder", routableOnly = false } = options;

  return projects
    .filter(
      (project) =>
        hasGroup(project, group) &&
        (!routableOnly || project.kind === "case-study"),
    )
    .sort(byOrder(orderField));
}

export function getFeaturedProjects() {
  return getProjectsByGroup(PROJECT_GROUPS.featured, {
    orderField: "featuredOrder",
  });
}

export function getCompletedProjects() {
  return getProjectsByGroup(PROJECT_GROUPS.completed, {
    routableOnly: true,
  });
}

export function getCurrentProjects() {
  return getProjectsByGroup(PROJECT_GROUPS.current, {
    orderField: "currentOrder",
  });
}

export function getClientProjects() {
  return getProjectsByGroup(PROJECT_GROUPS.client);
}

export function getInternshipProjects() {
  return getProjectsByGroup(PROJECT_GROUPS.internship);
}

export function getArchiveGroups() {
  return PROJECT_ARCHIVE_GROUPS.map((groupConfig) => ({
    ...groupConfig,
    projects: getProjectsByGroup(groupConfig.group, {
      routableOnly: groupConfig.routableOnly,
    }),
  })).filter((groupConfig) => groupConfig.projects.length > 0);
}

export function getResumeProjects() {
  return projects
    .filter((project) => project.resume?.include)
    .sort(
      (first, second) =>
        (first.resume.order ?? 999) - (second.resume.order ?? 999),
    )
    .map((project) => ({
      title: project.resume.title ?? project.name,
      subtitle: project.resume.subtitle,
      live: project.resume.live ?? project.links?.live,
      code: project.resume.code ?? project.links?.code,
      stack: project.resume.stack,
      bullets: project.resume.bullets,
    }));
}
