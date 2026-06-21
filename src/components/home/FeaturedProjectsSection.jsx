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
          <p className="section-eyebrow">Featured work</p>
          <h2>Three projects that show range without losing polish.</h2>
          <p>
            The goal is not to throw every build on the page. It is to show

  product thinking, frontend depth, and the way I structure systems

  when interfaces need to feel intuitive, scalable, and reliable under

   pressure.
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
                bigger view across completed builds, client work, and future
                project groups as they get added.
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
