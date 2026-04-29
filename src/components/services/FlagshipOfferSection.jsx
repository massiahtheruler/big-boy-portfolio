import { Link } from "react-router-dom";
import { getInquiryHref, servicesContent } from "../../data/servicesContent";
import Reveal from "../shared/Reveal";

function FlagshipOfferSection() {
  const { flagship, entryOffer } = servicesContent;

  return (
    <section className="services-flagship content-section">
      <div className="shell services-flagship__grid">
        <Reveal className="services-offer services-offer--flagship">
          <p className="section-eyebrow">Flagship offer</p>
          <h2>{flagship.title}</h2>
          <p className="services-offer__tagline">{flagship.tagline}</p>
          <p>{flagship.summary}</p>
          <span className="services-offer__price">{flagship.pricing}</span>
          <Link
            to={getInquiryHref(flagship.slug)}
            className="button button--primary"
          >
            Inquire
          </Link>
        </Reveal>

        <Reveal className="services-offer services-offer--entry" delay={90}>
          <p className="section-eyebrow">Strategy entry</p>
          <h2>{entryOffer.title}</h2>
          <p className="services-offer__tagline">{entryOffer.tagline}</p>
          <p>{entryOffer.summary}</p>
          <span className="services-offer__price">{entryOffer.pricing}</span>
          <Link
            to={getInquiryHref(entryOffer.slug)}
            className="button button--ghost"
          >
            Start here
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default FlagshipOfferSection;
