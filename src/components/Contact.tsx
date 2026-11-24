import { assetPath, profile } from '../data/profile';
import { Reveal } from './Reveal';

export const Contact = () => (
  <section id="contact" className="section section-tinted" aria-labelledby="contact-heading">
    <div className="section-shell">
      <Reveal>
        <div className="contact-layout">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-heading">Let’s Talk.</h2>
            <p className="contact-intro">
              Reach out on LinkedIn for a project, a question or a conversation about AI and software.
            </p>
            <p className="contact-location metadata">{profile.location}</p>
          </div>
          <nav className="contact-links" aria-label="Contact links">
            <a
              className="contact-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-meta">Best place to reach me</span>
              </span>
              <span className="contact-link-arrow" aria-hidden="true">↗</span>
            </a>
            <a
              className="contact-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-meta">Code and projects</span>
              </span>
              <span className="contact-link-arrow" aria-hidden="true">↗</span>
            </a>
            <a
              className="contact-link contact-link-download"
              href={assetPath(profile.cv)}
              download={profile.cv}
            >
              <span>
                <span className="contact-link-label">Download CV</span>
                <span className="contact-link-meta">PDF overview</span>
              </span>
              <span className="contact-link-arrow" aria-hidden="true">↓</span>
            </a>
          </nav>
        </div>
      </Reveal>
    </div>
  </section>
);
