const portfolioProjects = [
  {
    slug: "gocart",
    name: "GoCart",
    featured: true,
    tagline:
      "A full-stack multi-vendor ecommerce platform with customer, seller, and admin flows wrapped in a premium custom UI system.",
    summary:
      "GoCart is a marketplace product build, not just a styled storefront. It combines customer shopping, seller tooling, admin controls, real checkout logic, coupon campaigns, reviews, AI-assisted listing support, and a custom showroom-style interface in one app.",
    audienceSummary:
      "This project shows I can take a commerce idea past surface styling and turn it into a deeper product with roles, rules, dashboard logic, payment flows, and stronger product thinking.",
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
      "AI integration"
    ],
    heroMedia: {
      eyebrow: "Marketplace / Ecommerce",
      heading: "Marketplace depth with custom premium presentation",
      detail:
        "Customer, seller, and admin experiences with store approval flow, scheduled coupons, delivered-order reviews, Stripe checkout, and AI-assisted listing support."
    },
    previewImage: "/assets/gocart-home.png",
    links: {
      live: "https://gocart-beta-one.vercel.app",
      code: "https://github.com/massiahtheruler/gocart"
    },
    featureHighlights: [
      "Multi-vendor ecommerce with customer, seller, and admin surfaces inside one app",
      "Functional cart, checkout, COD flow, Stripe payments, and account-aware UI behavior",
      "Public deals system with active, upcoming, and expired campaigns plus coupon validation timing",
      "Custom glass, neumorphic, and showroom-inspired styling built directly in the app without prefab motion templates"
    ],
    technicalProof: [
      "Built with Next.js App Router, Clerk auth, Redux Toolkit state, Prisma, and Neon Postgres-backed marketplace data.",
      "Structured role-aware routes and gating for customers, sellers, and admins instead of treating auth like a cosmetic add-on.",
      "Handled Stripe checkout, coupon scheduling, selected-deal persistence, delivered-order review gating, and seller/admin order logic.",
      "Integrated ImageKit media handling, Inngest scheduling, and AI-assisted listing flows while keeping the interface polished and state-driven."
    ],
    buildStory:
      "GoCart is where I pushed hardest on making dense product behavior feel premium instead of cluttered. The challenge was not just feature count. It was getting roles, flows, timing rules, payments, dashboards, and custom motion to all feel like one coherent product.",
    status: "Shipped concept",
    accent: "emerald"
  },
  {
    slug: "netflix-clone",
    name: "Netflix Clone",
    featured: true,
    tagline:
      "A React streaming UI that mixes cinematic motion, real auth, protected routes, and hand-built interaction design.",
    summary:
      "This build started as a Netflix-inspired interface, but the real work was in the details: autoplay trailer timing, protected user flow, live TMDB-powered rows, player pages, and motion built directly with state, CSS, timers, masks, and browser APIs.",
    audienceSummary:
      "This project shows my frontend taste and my ability to turn a familiar product pattern into something that still feels engineered, not just copied.",
    role: "Frontend builder and interaction-focused UI systems designer",
    stack: [
      "React",
      "Vite",
      "React Router",
      "Firebase Auth",
      "Firestore",
      "TMDB API",
      "Sass",
      "Tailwind CSS"
    ],
    heroMedia: {
      eyebrow: "Entertainment UI / Motion",
      heading: "Cinematic pacing built from state, timing, and CSS",
      detail:
        "Timed autoplay trailer behavior, masked hero fades, protected routes, wheel-based row interaction, and dedicated player pages for each title."
    },
    previewImage: "/assets/netflix-clone-home.png",
    links: {
      live: "https://netflix-clone-delta-indol.vercel.app",
      code: "https://github.com/massiahtheruler/netflix-clone"
    },
    featureHighlights: [
      "Cinematic hero with autoplay countdown, custom spinner states, and masked image-to-video transitions",
      "Firebase sign up, sign in, sign out, and protected routes so the app behaves like a real product",
      "Live TMDB-powered content rows with wheel scrolling, hover reveal, and card-to-player routing",
      "Responsive layout tuning across desktop, tablet, and mobile instead of default stack-and-shrink behavior"
    ],
    technicalProof: [
      "Built motion directly with React state, timers, CSS transitions, transforms, overlays, and browser APIs instead of animation libraries.",
      "Used Firebase Auth and Firestore to handle real account flow, route protection, and auth-aware redirects.",
      "Structured live media rails and player pages around TMDB data while keeping the interface readable and intentional.",
      "Combined Sass and Tailwind for a custom styling system with layered backgrounds, masking, blur, and responsive behavior."
    ],
    buildStory:
      "The value here was never just visual similarity. It was learning how to make a streaming interface feel cinematic and responsive through timing, layering, and interaction logic built by hand instead of leaning on motion libraries or templates.",
    status: "Featured build",
    accent: "violet"
  },
  {
    slug: "twitter-glitter",
    name: "Twitter / Glitter",
    featured: true,
    tagline:
      "A full-stack social platform inspired by X/Twitter with custom branding, real account flow, and a cleaner PG-13 product direction.",
    summary:
      "Glitter is a social product build centered around authenticated user flow, post creation, dynamic profiles, profile editing, feed interaction, and a more approachable alternative to the usual X/Twitter tone. It started from a tutorial foundation, then got pushed into a more original branded product with added features and stronger product identity.",
    audienceSummary:
      "This project shows I can take a known product pattern, extend it past tutorial scope, and turn it into something that feels more like a real platform with its own direction.",
    role: "Frontend engineer, product customizer, and social UX systems builder",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "Zustand",
      "SWR"
    ],
    heroMedia: {
      eyebrow: "Social Product / UX Systems",
      heading: "A branded social platform with real account-aware behavior",
      detail:
        "Dynamic profiles, post creation, follow-state groundwork, editable accounts, discovery sidebars, and custom concepts like Brok AI chat and Deeems messaging."
    },
    previewImage: "/assets/twitter-glitter-home.png",
    links: {
      live: "https://glitter-theta.vercel.app",
      code: null
    },
    featureHighlights: [
      "Real sign up, sign in, sign out, and authenticated session flow instead of a static social mockup",
      "Scroll-centered social layout with left navigation, central feed, and right-side discovery cards",
      "Dynamic profile pages with profile hero, avatar, bio, joined date, follow/edit states, and ownership-aware UI",
      "Custom branding direction with Brok AI chat, Deeems messaging, and a cleaner family-friendlier product tone"
    ],
    technicalProof: [
      "Built with Next.js, TypeScript, Prisma, MongoDB, NextAuth, Zustand, and SWR for account-aware data and social interaction flow.",
      "Wired modal-driven auth, feed fetching, post creation routes, profile editing, and route-specific user rendering into one product structure.",
      "Handled conditional UI for signed-in vs signed-out users, self vs other profiles, and follow/edit action states.",
      "Adapted older tutorial code to a stricter modern toolchain while expanding the app past the original walkthrough."
    ],
    buildStory:
      "Glitter mattered because I did not want another tutorial clone sitting in the portfolio untouched. The real work was in pushing the branding, social behavior, profile ownership, and product structure far enough that the build feels like mine instead of just a recreated feed.",
    status: "Featured build",
    accent: "rose"
  },
  {
    slug: "litty-hub",
    name: "Litty Hub",
    featured: false,
    tagline:
      "An umbrella brand build that turns four connected lanes, one visual DNA, and a service framework into one product story.",
    summary:
      "Litty Hub is the bigger ecosystem play behind the portfolio. It is part brand, part service offer, and part execution model: one umbrella build meant to make multiple businesses, touchpoints, and future launches feel like they belong to the same world.",
    audienceSummary:
      "This project shows how I think beyond a single homepage. It is about packaging identity, visuals, content direction, and web execution into something a client can actually grow inside.",
    role: "Brand architect, frontend builder, visual systems designer, and strategic partner",
    stack: [
      "React",
      "Vite",
      "Sass",
      "Brand systems",
      "Content direction",
      "Service design"
    ],
    heroMedia: {
      eyebrow: "Umbrella brand / Brand ecosystem",
      heading: "One world for four connected brands",
      detail:
        "A lifestyle wrapper, a shared monogram system, a seven-step Manifest Method, and a service model built around carrying ideas into real execution."
    },
    previewImage: "/assets/litty-hub-home.png",
    links: {
      live: "https://litty-hub.vercel.app",
      code: null
    },
    featureHighlights: [
      "Litty Co. positioned as the attention engine and umbrella brand for the larger ecosystem",
      "Manifest Method introduced as a seven-step framework from idea to identity, system, expression, application, ecosystem, and outcome",
      "A four-brand rollout plan that gives each lane a distinct flavor while keeping shared visual DNA",
      "A one-shoot content strategy designed to generate usable assets across every connected brand"
    ],
    technicalProof: [
      "Structured the project as both a web experience and a service offer instead of treating the site like a flat brochure.",
      "Built a repeatable design language around shared marks, darker cinematic styling, and modular content sections.",
      "Used React, routed storytelling, and reusable section patterns to present a larger brand system cleanly.",
      "Defined clear execution order so the ecosystem can scale without the brands feeling random or disconnected."
    ],
    detailSections: [
      {
        eyebrow: "Execution order",
        title: "How the ecosystem rolls out",
        list: [
          "Litty Co. comes first as the lifestyle wrapper and attention engine.",
          "JJ Totes follows as the cleaner, near-finished product lane.",
          "Great Wall of Legends is the premium showpiece build.",
          "JJ Pro Service stays in the system, but lower priority after the pivot."
        ]
      },
      {
        eyebrow: "Service model",
        title: "What the partnership actually is",
        body:
          "The offer is not just 'I can make you a site.' It is vision translation, brand shaping, integrated site and social execution, and helping a client move an idea into something that looks and feels real across more than one touchpoint."
      },
      {
        eyebrow: "Content engine",
        title: "One shoot, all brands",
        body:
          "Capture once, then repurpose across the ecosystem: reliability clips for JJ Pro, efficiency clips for JJ Totes, luxury ambiance for Great Wall, and lifestyle aspiration for Litty."
      }
    ],
    buildStory:
      "Litty matters because it is closer to the kind of partnership work I actually want. It is not just about making one polished site. It is about helping shape the identity, the rollout, the connected content plan, and the way separate pieces of a brand ecosystem support each other.",
    status: "Active build",
    accent: "amber"
  }
];

export const caseStudies = portfolioProjects.filter((project) => project.featured);

export function getCaseStudyBySlug(slug) {
  return portfolioProjects.find((project) => project.slug === slug);
}
