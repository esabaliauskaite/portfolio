import { skillGroups } from '../data/profile';
import { Reveal } from './Reveal';

export const Skills = () => (
  <section id="skills" className="section section-tinted" aria-labelledby="skills-heading">
    <div className="section-shell">
      <Reveal>
        <div className="section-heading">
          <div><p className="eyebrow">Skills & tools</p><h2 id="skills-heading">What I work with.</h2></div>
          <p>A growing AI toolkit alongside an established software engineering foundation.</p>
        </div>
      </Reveal>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.04}>
            <div className="skill-group">
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul className="tag-list" aria-label={group.title}>
                {group.skills.map(skill => <li className="tag" key={skill}>{skill}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
