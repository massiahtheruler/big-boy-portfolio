import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";
import Reveal from "../shared/Reveal";

function HeroSection({ onOpenContact }) {
  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.currentTarget.style.setProperty("--spotlight-x", `${x}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${y}px`);
  }

  return (
    <section
      className="hero-section"
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => {
        event.currentTarget.style.removeProperty("--spotlight-x");
        event.currentTarget.style.removeProperty("--spotlight-y");
      }}
    >
      <div className="shell hero-section__grid">
        <Reveal className="hero-section__content">
          <p className="section-eyebrow">Dark-first frontend portfolio</p>
          <h1>{siteContent.title}</h1>
          <p className="hero-section__lede">{siteContent.intro}</p>

          <div className="hero-section__actions">
            <Link to="/#featured-work" className="button button--primary">
              View work
            </Link>
            <button type="button" className="button button--ghost" onClick={onOpenContact}>
              Open contact
            </button>
          </div>

          <div className="hero-section__stats" aria-label="Quick portfolio stats">
            {siteContent.stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <span className="hero-stat__value">{stat.value}</span>
                <span className="hero-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-section__visual" delay={120}>
          <div className="hero-orbit">
            <div className="hero-orbit__stickers" aria-hidden="true">
              <img src="/assets/Glowing pink ring with black outline.png" alt="" />
              <img src="/assets/Turquoise squiggle with bold outline.png" alt="" />
              <img src="/assets/Vibrant turquoise circle with bold outline.png" alt="" />
              <img src="/assets/Bold purple triangle with jagged border.png" alt="" />
            </div>
            <div className="hero-orbit__core">
              <span>React + Vite</span>
              <strong>Premium frontend systems</strong>
            </div>
            <div className="hero-orbit__ring hero-orbit__ring--top">
              <span>Motion</span>
              <span>State</span>
              <span>UI Depth</span>
            </div>
            <div className="hero-orbit__ring hero-orbit__ring--bottom">
              <span>Commerce</span>
              <span>Social</span>
              <span>Client Work</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HeroSection;
