import { profile } from '../data/profile';
import { Reveal } from './Reveal';

export const Contact = () => (
  <section id="contact" className="section section-tinted" aria-labelledby="contact-heading">
    <div className="section-shell">
      <Reveal>
        <div className="contact-layout">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-heading">Let’s talk.</h2>
            <p className="contact-intro">For a project, a question or a conversation about AI and software.</p>
          </div>
          <div className="contact-details">
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
            <p>{profile.location}</p>
            <div className="social-links">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
