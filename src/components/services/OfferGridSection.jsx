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
            <Reveal
              key={offer.slug}
              delay={index * 80}
              className="services-card"
            >
              <h3>{offer.title}</h3>
              <p>{offer.summary}</p>
              <span className="services-card__price">{offer.pricing}</span>
              <Link
                to={getInquiryHref(offer.slug)}
                className="services-card__link"
              >
                Ask about this
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferGridSection;
