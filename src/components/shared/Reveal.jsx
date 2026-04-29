import { useRevealInView } from "../../hooks/useRevealInView";

function Reveal({ children, className = "", delay = 0 }) {
  const { ref, isVisible } = useRevealInView();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "reveal--visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default Reveal;
