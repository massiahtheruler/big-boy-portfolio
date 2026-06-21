import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import CurrentWorkPage from "./pages/CurrentWorkPage";
import ServicesPage from "./pages/ServicesPage";
import InquirePage from "./pages/InquirePage";
import ResumePage from "./pages/ResumePage";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import ContactModal from "./components/layout/ContactModal";
import { useTheme } from "./hooks/useTheme";

function App() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle("body--locked", isContactOpen);

    return () => {
      document.body.classList.remove("body--locked");
    };
  }, [isContactOpen]);

  return (
    <div className="site-shell">
      <SiteHeader
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenContact={() => setIsContactOpen(true)}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenContact={() => setIsContactOpen(true)} />}
          />
          <Route
            path="/projects"
            element={<ProjectsPage />}
          />
          <Route
            path="/projects/:slug"
            element={<ProjectPage onOpenContact={() => setIsContactOpen(true)} />}
          />
          <Route path="/current" element={<CurrentWorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/inquire" element={<InquirePage />} />
          <Route
            path="/resume"
            element={<ResumePage onOpenContact={() => setIsContactOpen(true)} />}
          />
        </Routes>
      </main>
      <SiteFooter onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
      <Analytics />
    </div>
  );
}

export default App;
