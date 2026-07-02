import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { siteContent } from "../../data/siteContent";

function SiteHeader({ theme, onToggleTheme, onOpenContact }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const threshold = 10;
    const topZone = 130;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      setIsScrolled(currentScrollY > 48);

      if (currentScrollY < topZone) {
        setIsHidden(false);
      } else if (Math.abs(delta) >= threshold) {
        setIsHidden(delta > 0);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navItems = [
    {
      label: "Work",
      to: "/projects",
      isActive:
        location.pathname === "/projects" ||
        location.pathname.startsWith("/projects/"),
    },
    {
      label: "Current",
      to: "/current",
      isActive: location.pathname === "/current",
    },
    {
      label: "Services",
      to: "/services",
      isActive:
        location.pathname === "/services" || location.pathname === "/inquire",
    },
    {
      label: "About",
      to: "/#about",
      isActive: location.pathname === "/" && location.hash === "#about",
    },
  ];

  return (
    <header
      className={`site-header ${isHidden ? "site-header--hidden" : ""} ${
        isScrolled ? "site-header--scrolled" : ""
      }`}
      onFocus={() => setIsHidden(false)}
      onMouseEnter={() => setIsHidden(false)}
    >
      <div className="shell site-header__inner">
        <Link
          to="/"
          className="site-header__brand"
          aria-label="Justin Henry home"
          onClick={(event) => {
            if (isHomePage) {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img
            src="/assets/Bold JH logo with angular brackets.png"
            alt="Justin Henry logo"
            className="site-header__logo"
          />
          <span className="site-header__name">Justin H.</span>
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`site-header__link ${item.isActive ? "site-header__link--active" : ""}`}
              aria-current={item.isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            className="site-header__link site-header__link--button"
            onClick={onOpenContact}
          >
            Contact
          </button>
        </nav>

        <div className="site-header__actions">
          <Link className="site-header__direct" to="/resume">
            <strong>Resumé</strong>
          </Link>
        </div>
      </div>
      <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
    </header>
  );
}

export default SiteHeader;
