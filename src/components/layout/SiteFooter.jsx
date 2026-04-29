import { siteContent } from "../../data/siteContent";

function SiteFooter({ onOpenContact }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <button
          type="button"
          className="site-footer__crest"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll back to top"
        >
          <span className="site-footer__crest-arrow">↑</span>
          <img
            src="/assets/Minimalist JH logo with text.png"
            alt="Justin Henry logo"
            className="site-footer__logo"
          />
          <span className="site-footer__crest-label">To top</span>
        </button>

        <div className="site-footer__bubble">
          <div className="site-footer__copy">
            <p className="site-footer__eyebrow">
              Built for teams, recruiters, and clients
            </p>
            <h2 className="site-footer__title">
              Clean design, real product thinking, and room to go deeper.
            </h2>
          </div>

          <div className="site-footer__links">
            {siteContent.socialLinks.map((link) =>
              link.available ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ) : (
                <span key={link.label} className="site-footer__link--disabled">
                  {link.label}
                </span>
              ),
            )}
            <button type="button" onClick={onOpenContact}>
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
