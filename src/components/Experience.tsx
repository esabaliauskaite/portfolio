import { experience } from '../data/profile';
import { Reveal } from './Reveal';

export const Experience = () => (
  <section id="experience" className="section" aria-labelledby="experience-heading">
    <div className="section-shell">
      <Reveal>
        <div className="section-heading">
          <div><p className="eyebrow">Experience</p><h2 id="experience-heading">The work so far.</h2></div>
          <p>From frontend applications and interactive systems to AI engineering.</p>
        </div>
      </Reveal>
      <div className="experience-list">
        {experience.map((item, index) => (
          <Reveal key={`${item.company}-${item.role}`} delay={Math.min(index * 0.04, 0.16)}>
            <article className={`experience-item${item.current ? ' experience-current' : ''}`}>
              <div className="experience-date">
                <p>{item.period}</p>
                {item.current && <span className="current-label">Current role</span>}
              </div>
              <div className="experience-body">
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company} <span>{item.location}</span></p>
                <ul>{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
