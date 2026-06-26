import { Link } from "react-router-dom";
import { getInquiryHref, servicesContent } from "../../data/servicesContent";
import Reveal from "../shared/Reveal";

function FlagshipOfferSection() {
  const { flagship, entryOffer } = servicesContent;

  return (
    <section className="services-flagship content-section">
      <div className="shell services-flagship__grid">
        <Link
          to={getInquiryHref(flagship.slug)}
          className="services-offer services-offer--flagship services-offer--link interactive-card"
        >
          <Reveal>
            <p className="section-eyebrow">Flagship offer</p>
            <h2>{flagship.title}</h2>
            <p className="services-offer__tagline">{flagship.tagline}</p>
            <p>{flagship.summary}</p>
            <span className="services-offer__price">{flagship.pricing}</span>
            <span className="button button--primary">Inquire</span>
          </Reveal>
        </Link>

        <Link
          to={getInquiryHref(entryOffer.slug)}
          className="services-offer services-offer--entry services-offer--link interactive-card"
        >
          <Reveal delay={90}>
            <p className="section-eyebrow">Strategy entry</p>
            <h2>{entryOffer.title}</h2>
            <p className="services-offer__tagline">{entryOffer.tagline}</p>
            <p>{entryOffer.summary}</p>
            <span className="services-offer__price">{entryOffer.pricing}</span>
            <span className="button button--ghost">Start here</span>
          </Reveal>
        </Link>
      </div>
    </section>
  );
}

export default FlagshipOfferSection;
