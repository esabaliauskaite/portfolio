import React, { useRef, useState, useEffect } from 'react';
import { theme } from '../themes/themes';
import { Reveal } from './Reveal';
import { useWindowWidth } from '../hooks/useWindowWidth';

interface SkillGroupProps {
  label: string;
  skills: string[];
  delay: number;
}

const SkillGroup: React.FC<SkillGroupProps> = ({ label, skills, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref}>
      <div
        style={{
          fontFamily: theme.mono,
          fontSize: 11,
          color: theme.accent,
          letterSpacing: '0.14em',
          marginBottom: 20,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'none' : 'translateY(12px)',
          transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
        }}
      >
        {label}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {skills.map((skill, i) => (
          <span
            key={skill}
            style={{
              fontFamily: theme.body,
              fontSize: 13,
              color: theme.fg,
              background: theme.tagBg,
              border: `1px solid ${theme.border}`,
              padding: '7px 16px',
              borderRadius: theme.radius,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.94)',
              transition: `opacity 0.4s ease ${delay + 0.08 + i * 0.055}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${delay + 0.08 + i * 0.055}s`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const width = useWindowWidth();
  const isMobile = width < 640;

  return (
    <section
      id="skills"
      style={{
        padding: isMobile ? '80px 24px' : '120px 48px',
        background: theme.altBg,
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Reveal>
          <div
            style={{
              fontFamily: theme.mono,
              fontSize: 11,
              color: theme.accent,
              letterSpacing: '0.16em',
              marginBottom: 16,
            }}
          >
            SKILLS & TOOLS
          </div>
          <h2
            style={{
              fontFamily: theme.heading,
              fontSize: isMobile ? 32 : 42,
              fontWeight: theme.headWeight,
              color: theme.fg,
              margin: '0 0 56px',
              lineHeight: 1.1,
            }}
          >
            What I work with
          </h2>
        </Reveal>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
            gap: isMobile ? 40 : 48,
          }}
        >
          <SkillGroup
            delay={0}
            label="WEB DEVELOPMENT"
            skills={['Angular', 'React', 'JavaScript', 'TypeScript', 'HTML/CSS']}
          />
          <SkillGroup
            delay={0.1}
            label="DATA SCIENCE"
            skills={['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch']}
          />
          <SkillGroup
            delay={0.2}
            label="VISUALIZATION & TOOLS"
            skills={['Plotly', 'Seaborn', 'matplotlib', 'Jupyter Notebook', 'Git', 'Figma']}
          />
        </div>
      </div>
    </section>
  );
};
