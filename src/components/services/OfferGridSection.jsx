import { Link } from "react-router-dom";
import { getInquiryHref, servicesContent } from "../../data/servicesContent";
import Reveal from "../shared/Reveal";

function OfferGridSection() {
  const { supportingOffers } = servicesContent;

  return (
    <section id="offers" className="content-section">
      <div className="shell">
        <Reveal className="section-heading">
          <p className="section-eyebrow">Ways to work together</p>
          <h2>Different entry points. One bigger direction.</h2>
        </Reveal>

        <div className="services-offer-grid">
          {supportingOffers.map((offer, index) => (
              <Link
                key={offer.slug}
                to={getInquiryHref(offer.slug)}
                className="services-card services-card--link interactive-card"
              >
                <Reveal delay={index * 80}>
                  <h3>{offer.title}</h3>
                  <p>{offer.summary}</p>
                  <span className="services-card__price">{offer.pricing}</span>
                  <span className="services-card__link">Ask about this</span>
                </Reveal>
              </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferGridSection;
