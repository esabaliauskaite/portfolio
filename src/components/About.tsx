import React from 'react';
import { theme } from '../themes/themes';
import { Reveal } from './Reveal';

export const About: React.FC = () => {

  const stats = [
    { n: '4+', label: 'Years in frontend engineering' },
    { n: '2', label: 'DS projects shipped' },
    { n: 'BSc', label: 'Multimedia Design' },
    { n: 'MSc', label: 'Interactive Media' },
  ];

  return (
    <section
      id="about"
      style={{
        padding: '120px 48px',
        background: theme.altBg,
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}
      >
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
            ABOUT
          </div>
          <h2
            style={{
              fontFamily: theme.heading,
              fontSize: 42,
              fontWeight: theme.headWeight,
              color: theme.fg,
              margin: '0 0 28px',
              lineHeight: 1.1,
            }}
          >
            From pixels
            <br />
            to patterns
          </h2>
          <p
            style={{
              fontFamily: theme.body,
              fontSize: 15,
              color: theme.fg2,
              lineHeight: 1.75,
              marginBottom: 20,
            }}
          >
            I spent years building interfaces that surface complex information clearly. That same
            instinct — making the invisible visible — is what drew me toward data science.
          </p>
          <p
            style={{
              fontFamily: theme.body,
              fontSize: 15,
              color: theme.fg2,
              lineHeight: 1.75,
            }}
          >
            My engineering background gives me an edge: I can prototype, ship, and communicate
            findings as polished interactive tools — not just notebooks.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 20,
            }}
          >
            {stats.map(({ n, label }) => (
              <div
                key={n}
                style={{
                  padding: '28px 24px',
                  background: theme.cardBg,
                  border: `1px solid ${theme.border}`,
                  borderRadius: theme.cardRadius,
                }}
              >
                <div
                  style={{
                    fontFamily: theme.heading,
                    fontSize: 36,
                    fontWeight: 700,
                    color: theme.accent,
                    marginBottom: 8,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontFamily: theme.body,
                    fontSize: 13,
                    color: theme.fg2,
                    lineHeight: 1.5,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
