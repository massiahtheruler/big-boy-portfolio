import { useSearchParams } from "react-router-dom";
import InquiryForm from "../components/services/InquiryForm";
import { getOfferBySlug, servicesContent } from "../data/servicesContent";

function InquirePage() {
  const [searchParams] = useSearchParams();
  const requestedSlug = searchParams.get("offer") ?? "manifest-method";
  const offer =
    getOfferBySlug(requestedSlug) ?? getOfferBySlug("manifest-method");

  return (
    <section className="inquire-page">
      <div className="shell inquire-page__grid">
        <div className="inquire-page__intro">
          <p className="section-eyebrow">Inquiry</p>
          <h1>Start the conversation</h1>
          <p>
            Picked offer: <strong>{offer?.title ?? "Manifest Method"}</strong>
          </p>
        </div>

        <InquiryForm
          offer={offer}
          helperCopy={servicesContent.inquiry.helperCopy}
          questions={servicesContent.inquiry.questions}
        />
      </div>
    </section>
  );
}

export default InquirePage;
