import { assetPath, profile } from '../data/profile';
import type { Project } from '../types/project';
import { Reveal } from './Reveal';

const projectModules = import.meta.glob('../data/projects/*.json', { eager: true, import: 'default' });
const projects = (Object.values(projectModules) as Project[])
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.title.localeCompare(b.title));

export const Projects = () => (
  <section id="projects" className="section" aria-labelledby="projects-heading">
    <div className="section-shell">
      <Reveal>
        <div className="section-heading">
          <div><p className="eyebrow">Selected projects</p><h2 id="projects-heading">Ideas put into practice.</h2></div>
          <p>Personal projects exploring machine learning, data analysis and interface development.</p>
        </div>
      </Reveal>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.04} style={{ height: '100%' }}>
            <article className={`project-card${index === 0 ? ' project-featured' : ''}`}>
              {project.image && (
                <div className="project-image">
                  <img src={assetPath(`projects/${project.image.split('/').pop()}`)}
                    alt={project.imageAlt ?? project.title} loading="lazy" width="1000" height="625" />
                </div>
              )}
              <div className="project-body">
                <p className="eyebrow project-category">{project.category ?? project.tags[0]}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {[...(project.primaryTags ?? []), ...project.tags].map(tag => <li key={tag} className="tag">{tag}</li>)}
                </ul>
                <div className="project-links">
                  {project.github && <a className="text-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>View on GitHub</a>}
                  {project.link && <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live project`}>Live project</a>}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <a className="all-projects text-link" href={profile.github} target="_blank" rel="noopener noreferrer">More on GitHub</a>
    </div>
  </section>
);
