import { getFeaturedProjects, getProjectBySlug } from "./projects";

export const caseStudies = getFeaturedProjects();

export function getCaseStudyBySlug(slug) {
  return getProjectBySlug(slug);
}
