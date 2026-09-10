import './ProjectCard.css';

function ProjectCard({ project }) {
  const { title, subtitle, description, bullets, tags, link } = project;

  return (
    <div className="project-card">
       <img src={project.image} alt={project.title} className="project-thumbnail" />
      <h3>{title}</h3>
      <p className="project-subtitle">{subtitle}</p>
      <p className="project-description">{description}</p>
      <ul className="project-bullets">
        {bullets.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <div className="project-tags">
        {tags.map((tag, i) => (
          <span className="tag" key={i}>{tag}</span>
        ))}
      </div>
      {link && (
        <a href={link} className="project-link">View Project →</a>
      )}
    </div>
  );
}

export default ProjectCard;