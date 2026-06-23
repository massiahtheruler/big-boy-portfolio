import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";
import Reveal from "../shared/Reveal";

function HeroSection({ onOpenContact }) {
  const frameRef = useRef(null);
  const orbitFrameRef = useRef(null);
  const stickerRefs = useRef([]);
  const pointerRef = useRef({ x: null, y: null });
  const orbitPointerRef = useRef({ x: 0, y: 0, rect: null });

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
      if (orbitFrameRef.current) {
        window.cancelAnimationFrame(orbitFrameRef.current);
      }
    };
  }, []);

  function handlePointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    if (frameRef.current) {
      return;
    }

    const currentTarget = event.currentTarget;
    frameRef.current = window.requestAnimationFrame(() => {
      const { x, y } = pointerRef.current;
      if (x !== null && y !== null) {
        currentTarget.style.setProperty("--spotlight-x", `${x}px`);
        currentTarget.style.setProperty("--spotlight-y", `${y}px`);
      }
      frameRef.current = null;
    });
  }

  function handleOrbitPointerMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    orbitPointerRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      rect,
    };

    if (orbitFrameRef.current) {
      return;
    }

    orbitFrameRef.current = window.requestAnimationFrame(() => {
      const { x, y, rect: currentRect } = orbitPointerRef.current;

      stickerRefs.current.forEach((sticker, index) => {
        if (!sticker || !currentRect) {
          return;
        }

        const stickerRect = sticker.getBoundingClientRect();
        const stickerCenterX =
          stickerRect.left - currentRect.left + stickerRect.width / 2;
        const stickerCenterY =
          stickerRect.top - currentRect.top + stickerRect.height / 2;
        const deltaX = stickerCenterX - x;
        const deltaY = stickerCenterY - y;
        const distance = Math.hypot(deltaX, deltaY) || 1;
        const rawIntensity = Math.max(
          0,
          1 - distance / (currentRect.width * 0.72),
        );
        const intensity = rawIntensity ** 1.6;
        const strength = [17, 22, 19, 24][index] ?? 20;
        const shiftX = (deltaX / distance) * intensity * strength;
        const shiftY = (deltaY / distance) * intensity * strength;

        sticker.style.setProperty("--sticker-shift-x", `${shiftX.toFixed(2)}px`);
        sticker.style.setProperty("--sticker-shift-y", `${shiftY.toFixed(2)}px`);
      });

      orbitFrameRef.current = null;
    });
  }

  function handleOrbitPointerLeave() {
    if (orbitFrameRef.current) {
      window.cancelAnimationFrame(orbitFrameRef.current);
      orbitFrameRef.current = null;
    }

    orbitPointerRef.current = { x: 0, y: 0, rect: null };
    stickerRefs.current.forEach((sticker) => {
      if (!sticker) {
        return;
      }

      sticker.style.setProperty("--sticker-shift-x", "0px");
      sticker.style.setProperty("--sticker-shift-y", "0px");
    });
  }

  return (
    <section
      className="hero-section"
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => {
        if (frameRef.current) {
          window.cancelAnimationFrame(frameRef.current);
          frameRef.current = null;
        }
        pointerRef.current = { x: null, y: null };
        event.currentTarget.style.removeProperty("--spotlight-x");
        event.currentTarget.style.removeProperty("--spotlight-y");
      }}
    >
      <div className="shell hero-section__grid">
        <Reveal className="hero-section__content">
          <p className="section-eyebrow">{siteContent.eyebrow}</p>
          <h1>{siteContent.title}</h1>
          <p className="hero-section__lede">{siteContent.intro}</p>

          <div className="hero-section__actions">
            <Link to="/#featured-work" className="button button--primary">
              View work
            </Link>
            <Link to="/services" className="button button--ghost">
              Products + Services
            </Link>
            <Link to="/resume" className="button button--ghost">
              Resumé
            </Link>
            <button
              type="button"
              className="button button--ghost"
              onClick={onOpenContact}
            >
              Open contact
            </button>
          </div>

          <div
            className="hero-section__stats"
            aria-label="Quick portfolio stats"
          >
            {siteContent.stats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <span className="hero-stat__value">{stat.value}</span>
                <span className="hero-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-section__visual" delay={120}>
          <div
            className="hero-orbit"
            onPointerMove={handleOrbitPointerMove}
            onPointerLeave={handleOrbitPointerLeave}
          >
            <div className="hero-orbit__stickers" aria-hidden="true">
              <span
                className="hero-orbit__sticker"
                ref={(element) => {
                  stickerRefs.current[0] = element;
                }}
              >
                <img
                  src="/assets/Glowing pink ring with black outline.png"
                  alt=""
                />
              </span>
              <span
                className="hero-orbit__sticker"
                ref={(element) => {
                  stickerRefs.current[1] = element;
                }}
              >
                <img
                  src="/assets/Turquoise squiggle with bold outline.png"
                  alt=""
                />
              </span>
              <span
                className="hero-orbit__sticker"
                ref={(element) => {
                  stickerRefs.current[2] = element;
                }}
              >
                <img
                  src="/assets/Vibrant turquoise circle with bold outline.png"
                  alt=""
                />
              </span>
              <span
                className="hero-orbit__sticker"
                ref={(element) => {
                  stickerRefs.current[3] = element;
                }}
              >
                <img
                  src="/assets/Bold purple triangle with jagged border.png"
                  alt=""
                />
              </span>
            </div>
            <div className="hero-orbit__core">
              <strong>Premium frontend systems</strong>
              <span>Justin H.</span>
            </div>
            <div className="hero-orbit__ring hero-orbit__ring--top">
              <span>Frontend Engineering</span>
              <span>UI / UX Design</span>
              <span>Interaction Design</span>
            </div>
            <div className="hero-orbit__ring hero-orbit__ring--bottom">
              <span>Web Applications</span>
              <span>Product Strategy</span>
              <span>Brand Systems</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HeroSection;
