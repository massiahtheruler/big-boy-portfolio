import { techBadges } from "../../data/techBadges";
import { useEffect, useRef } from "react";

function TechMarquee() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0.4);
  const targetVelocityRef = useRef(0.4);
  const items = [...techBadges, ...techBadges];

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const baseVelocity = prefersReducedMotion ? 0 : 0.4;
    velocityRef.current = baseVelocity;
    targetVelocityRef.current = baseVelocity;

    const wrapOffset = (value, width) => {
      if (width <= 0) {
        return 0;
      }

      return ((value % width) + width) % width;
    };

    const step = () => {
      const loopWidth = track.scrollWidth / 2;
      velocityRef.current +=
        (targetVelocityRef.current - velocityRef.current) * 0.08;
      offsetRef.current = wrapOffset(
        offsetRef.current + velocityRef.current,
        loopWidth
      );
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;

      targetVelocityRef.current +=
        (baseVelocity - targetVelocityRef.current) * 0.035;
      animationFrameRef.current = window.requestAnimationFrame(step);
    };

    const handleWheel = (event) => {
      event.preventDefault();

      const dominantDelta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      targetVelocityRef.current = Math.max(
        -18.2,
        Math.min(30.2, targetVelocityRef.current + dominantDelta * 0.448)
      );
    };

    wrapper.addEventListener("wheel", handleWheel, { passive: false });
    animationFrameRef.current = window.requestAnimationFrame(step);

    return () => {
      wrapper.removeEventListener("wheel", handleWheel);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="tech-marquee" aria-label="Stack and capability marquee">
      <div className="tech-marquee__mask tech-marquee__mask--left" />
      <div className="tech-marquee__glow tech-marquee__glow--left" />
      <div className="tech-marquee__glow tech-marquee__glow--right" />
      <div ref={wrapperRef} className="tech-marquee__viewport" tabIndex={0}>
        <div ref={trackRef} className="tech-marquee__track">
          {items.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="tech-marquee__item"
              aria-hidden={index >= techBadges.length}
            >
              <span className="tech-marquee__dot" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="tech-marquee__mask tech-marquee__mask--right" />
    </section>
  );
}

export default TechMarquee;
