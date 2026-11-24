import { assetPath, experience, profile } from '../data/profile';

export const Hero = () => (
  <section className="hero section-shell" aria-labelledby="hero-heading">
    <div className="hero-grid">
      <div className="hero-intro">
        <p className="hero-name">{profile.name}</p>
        <h1 id="hero-heading">AI <span>Engineer.</span></h1>
        <p className="hero-description">
          I build practical AI solutions, drawing on 4+ years of software engineering experience.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my projects</a>
          <a className="button button-secondary" href={assetPath(profile.cv)} download={profile.cv}>
            Download CV <span className="file-format">PDF</span>
          </a>
        </div>
        <p className="hero-location">{profile.location}</p>
      </div>
      <aside className="current-role" aria-label="Current role">
        <p className="eyebrow">Currently</p>
        <h2>{profile.role}</h2>
        <p className="current-company">{experience[0].company}</p>
        <p className="current-period">Since September 2026</p>
        <p className="current-description">
          Developing and testing AI-powered automation solutions, with codebase maintenance
          and technical documentation.
        </p>
        <a className="text-link" href="#experience">View experience</a>
      </aside>
    </div>
    <div className="hero-footnote">
      <span>AI engineering, built on a software foundation.</span>
      <div className="social-links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  </section>
);
