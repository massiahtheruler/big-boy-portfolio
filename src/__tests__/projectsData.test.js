import {
  getCurrentProjects,
  getFeaturedProjects,
  getArchiveGroups,
  getProjectsByGroup,
  getProjectBySlug,
  getResumeProjects,
  PROJECT_GROUPS,
  projects,
} from "../data/projects";

describe("projects data", () => {
  it("keeps routable project slugs unique", () => {
    const slugs = projects
      .filter((project) => project.slug)
      .map((project) => project.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("defines the featured projects required by the home page", () => {
    expect(getFeaturedProjects().map((project) => project.slug)).toEqual([
      "gocart",
      "netflix-clone",
      "twitter-glitter",
    ]);

    getFeaturedProjects().forEach((project) => {
      expect(project).toEqual(
        expect.objectContaining({
          slug: expect.any(String),
          name: expect.any(String),
          previewImage: expect.any(String),
          heroMedia: expect.objectContaining({
            eyebrow: expect.any(String),
          }),
          stack: expect.any(Array),
        }),
      );
    });
  });

  it("keeps Litty Hub as the featured current case study", () => {
    expect(getCurrentProjects()[0]).toEqual(
      expect.objectContaining({
        slug: "litty-hub",
        name: "Litty Hub",
      }),
    );

    expect(getProjectBySlug("litty-hub")).toEqual(
      expect.objectContaining({
        slug: "litty-hub",
        kind: "case-study",
      }),
    );
  });

  it("supports generic category lookups and archive group rendering", () => {
    expect(getProjectsByGroup(PROJECT_GROUPS.client).map((project) => project.slug)).toEqual([
      "litty-hub",
    ]);

    expect(getArchiveGroups().map((group) => group.group)).toEqual([
      PROJECT_GROUPS.featured,
      PROJECT_GROUPS.completed,
      PROJECT_GROUPS.client,
    ]);
  });

  it("centralizes resume project content", () => {
    expect(getResumeProjects().map((project) => project.title)).toEqual([
      "GoCart",
      "Glitter",
      "Big Boy Portfolio",
      "Netflix Clone",
    ]);
  });
});
