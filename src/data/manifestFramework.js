export const manifestLiveUrl = "https://manifest-gamma-one.vercel.app/";
export const greatWallLiveUrl = "https://great-wall-omega.vercel.app/";
export const manifestLogoImage = "/assets/manifest-logo-textured.png";
export const greatWallPreviewImage = "/assets/great-wall-family-firepit.png";

export const manifestFramework = {
  eyebrow: "Founder of:",
  title: "Manifest",
  body: "You know what your business feels like. Your customers do not. Manifest is the framework I use to close that gap through brand identity, digital presence, frontend systems, and conversion-focused experiences that turn reputation into recognition.",
  chain: ["Identity", "Presence", "Trust", "Recognition", "Action"],
  primaryCta: {
    label: "Explore Manifest",
    href: manifestLiveUrl,
  },
  image: {
    src: manifestLogoImage,
    alt: "Manifest logo",
  },
  greatWall: {
    title: "Great Wall",
    label: "Flagship Manifest engagement",
    description:
      "A trust-driven landing experience built around CTA hierarchy, polished frontend implementation, responsive layout, motion, and an interactive SVG/3D feature.",
    href: greatWallLiveUrl,
    ctaLabel: "Visit Great Wall",
    image: {
      src: greatWallPreviewImage,
      alt: "Great Wall fireplace showroom preview",
    },
  },
};
