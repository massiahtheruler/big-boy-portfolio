import FlagshipOfferSection from "../components/services/FlagshipOfferSection";
import ManifestServicesIntro from "../components/services/ManifestServicesIntro";
import OfferGridSection from "../components/services/OfferGridSection";
import ServicesHero from "../components/services/ServicesHero";

function ServicesPage() {
  return (
    <section className="services-page">
      <ServicesHero />
      <ManifestServicesIntro />
      <FlagshipOfferSection />
      <OfferGridSection />
    </section>
  );
}

export default ServicesPage;
