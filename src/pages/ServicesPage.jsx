import FlagshipOfferSection from "../components/services/FlagshipOfferSection";
import OfferGridSection from "../components/services/OfferGridSection";
import ServicesHero from "../components/services/ServicesHero";

function ServicesPage() {
  return (
    <section className="services-page">
      <ServicesHero />
      <FlagshipOfferSection />
      <OfferGridSection />
    </section>
  );
}

export default ServicesPage;
