import React from 'react';
import { theme } from '../themes/themes';
import { Reveal } from './Reveal';
import { useWindowWidth } from '../hooks/useWindowWidth';

export const Contact: React.FC = () => {
  const width = useWindowWidth();
  const isMobile = width < 640;
  return (
    <section
      id="contact"
      style={{
        padding: isMobile ? '80px 24px' : '120px 48px',
        background: theme.altBg,
      }}
    >
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
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
            CONTACT
          </div>
          <h2
            style={{
              fontFamily: theme.heading,
              fontSize: isMobile ? 32 : 42,
              fontWeight: theme.headWeight,
              color: theme.fg,
              margin: '0 0 16px',
              lineHeight: 1.1,
            }}
          >
            Let's talk
          </h2>
          <p
            style={{
              fontFamily: theme.body,
              fontSize: 15,
              color: theme.fg2,
              lineHeight: 1.65,
              marginBottom: 48,
            }}
          >
            Open to frontend and software engineering opportunities in Austria, and remote teams.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <a href="mailto:esabaliauskaite6@gmail.com?subject=Frontend%20engineering%20opportunity" style={{ display: 'inline-flex', fontFamily: theme.body, fontSize: 14, padding: '14px 24px', background: theme.accent, color: theme.accentFg, borderRadius: theme.radius, textDecoration: 'none', letterSpacing: '0.04em' }}>
            Email me
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <div
            style={{
              marginTop: 48,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 24,
              fontFamily: theme.body,
              fontSize: 13,
              color: theme.fg2,
            }}
          >
            <a
              href="mailto:esabaliauskaite6@gmail.com"
              style={{
                color: theme.fg2,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.fg2)}
            >
              esabaliauskaite6@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/eglesabaliauskaite/"
              style={{
                color: theme.fg2,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.fg2)}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/esabaliauskaite"
              style={{
                color: theme.fg2,
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = theme.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = theme.fg2)}
            >
              GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
