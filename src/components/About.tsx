import { education, languages } from '../data/profile';
import { Reveal } from './Reveal';

export const About = () => (
  <section id="about" className="section section-tinted" aria-labelledby="about-heading">
    <div className="section-shell about-grid">
      <Reveal>
        <p className="eyebrow">About</p>
        <h2 id="about-heading">Software experience.<br /><span className="muted-heading">A new chapter in AI.</span></h2>
        <div className="about-copy">
          <p>
            I’m an AI Engineer with a background in frontend and software development.
            My work has taken me from retail applications and industrial IoT dashboards
            to AR prototypes and, now, AI-powered solutions.
          </p>
          <p>
            I enjoy turning business requirements into something useful: understanding
            the problem, building a practical solution, and improving it through testing
            and feedback. Python, JavaScript and TypeScript connect my current work with
            that software engineering foundation.
          </p>
        </div>
        <div className="language-block">
          <h3 className="eyebrow">Languages</h3>
          <dl className="language-list">
            {languages.map(({ language, level }) => (
              <div key={language}><dt>{language}</dt><dd>{level}</dd></div>
            ))}
          </dl>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="education-block">
          <h3 className="eyebrow">Education</h3>
          {education.map(item => (
            <article className="education-item" key={item.degree}>
              <p className="metadata">{item.period}</p>
              <h4>{item.degree}</h4>
              <p>{item.institution}</p>
              <p className="education-detail">{item.detail}</p>
              <p className="thesis"><span>Thesis</span> {item.thesis}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);
