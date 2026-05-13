import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { siteContent } from "../../data/siteContent";

function SiteHeader({ theme, onToggleTheme, onOpenContact }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    {
      label: "Work",
      to: "/#featured-work",
      isActive:
        location.pathname === "/projects" ||
        location.pathname.startsWith("/projects/") ||
        (location.pathname === "/" && location.hash === "#featured-work")
    },
    {
      label: "Current",
      to: "/#current-work",
      isActive: location.pathname === "/" && location.hash === "#current-work"
    },
    {
      label: "Services",
      to: "/services",
      isActive:
        location.pathname === "/services" || location.pathname === "/inquire"
    },
    {
      label: "About",
      to: "/#about",
      isActive: location.pathname === "/" && location.hash === "#about"
    }
  ];

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <div className="site-header__brand-group">
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

          <a className="site-header__direct" href={siteContent.phoneHref}>
            <span>Direct</span>
            <strong>{siteContent.phoneDisplay}</strong>
          </a>
        </div>

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

        <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
      </div>
    </header>
  );
}

export default SiteHeader;
