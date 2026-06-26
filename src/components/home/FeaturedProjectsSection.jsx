import { Link } from "react-router-dom";
import { getFeaturedProjects } from "../../data/projects";
import ProjectCard from "../shared/ProjectCard";
import Reveal from "../shared/Reveal";

function FeaturedProjectsSection() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <section id="featured-work" className="content-section">
      <div className="shell">
        <Reveal className="section-heading">
          <p className="section-eyebrow">Independent products</p>
          <h2>Product builds that show range without losing polish.</h2>
          <p>
            After the client work, this lane shows original products and
            frontend builds that prove product thinking, technical depth, and
            the way I structure interfaces when they need to feel intuitive,
            scalable, and reliable under pressure.
          </p>
        </Reveal>

        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 120}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
          <Reveal delay={featuredProjects.length * 120}>
            <Link to="/projects" className="see-more-card">
              <span className="section-eyebrow">More work</span>
              <h3>See the full project archive</h3>
              <p>
                Featured cards are the quick proof. The archive gives the
                bigger view across completed builds, client engagements, and
                product ideas as they get added.
              </p>
              <span className="project-card__link">Open projects</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjectsSection;
