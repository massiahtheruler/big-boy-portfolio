import { servicesContent } from "../data/servicesContent";

describe("servicesContent", () => {
  it("defines the flagship and entry offers with the core UI fields", () => {
    expect(servicesContent.identity.role).toBe("Brand Architect");

    expect(servicesContent.flagship).toEqual(
      expect.objectContaining({
        slug: "manifest-method",
        title: "Manifest Method",
        pricing: expect.any(String),
        summary: expect.any(String),
      })
    );

    expect(servicesContent.entryOffer).toEqual(
      expect.objectContaining({
        slug: "initiate-identity",
        title: "Initiate Identity",
        pricing: expect.any(String),
        summary: expect.any(String),
      })
    );
  });

  it("defines the supporting offer ladder with the UI-required fields", () => {
    expect(servicesContent.supportingOffers.map((offer) => offer.slug)).toEqual([
      "presence-pack",
      "rebuild-revitalize",
      "new-growth",
      "brand-audit",
      "templates",
      "consultations",
    ]);

    servicesContent.supportingOffers.forEach((offer) => {
      expect(offer).toEqual(
        expect.objectContaining({
          slug: expect.any(String),
          title: expect.any(String),
          pricing: expect.any(String),
          summary: expect.any(String),
        })
      );
    });
  });
});
