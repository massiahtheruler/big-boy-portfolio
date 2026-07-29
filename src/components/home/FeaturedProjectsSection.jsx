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
          <p className="section-eyebrow">Selected work</p>
          <h2>Three projects. Three different kinds of proof.</h2>
          <p>
            A business transformation, a full-stack marketplace, and a reusable
            guided-matching system—curated to show how I move from identity and
            strategy into product structure and frontend execution.
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
                The homepage stays selective. The archive holds the wider record
                of completed builds without turning every project type into a
                separate category.
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
