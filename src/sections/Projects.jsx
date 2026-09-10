import projects from './data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;