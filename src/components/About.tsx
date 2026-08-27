import React from 'react';
import { theme } from '../themes/themes';
import { Reveal } from './Reveal';
import { useWindowWidth } from '../hooks/useWindowWidth';

export const About: React.FC = () => {
  const width = useWindowWidth();
  const isMobile = width < 640;

  const stats = [
    { n: '4+', label: 'Years in frontend engineering' },
    { n: 'React', label: 'Primary frontend framework' },
    { n: 'BSc', label: 'Multimedia Design' },
    { n: 'MSc', label: 'Interactive Media' },
  ];

  return (
    <section
      id="about"
      style={{
        padding: isMobile ? '80px 24px' : '120px 48px',
        background: theme.altBg,
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 48 : 80,
          alignItems: 'center',
        }}
      >
        <Reveal>
          <h2
            style={{
              fontFamily: theme.heading,
              fontSize: isMobile ? 32 : 42,
              fontWeight: theme.headWeight,
              color: theme.fg,
              margin: '0 0 28px',
              lineHeight: 1.1,
            }}
          >
            Engineering clear,
            <br />
            usable interfaces
          </h2>
          <p
            style={{
              fontFamily: theme.body,
              fontSize: isMobile ? 16 : 18,
              color: theme.fg2,
              lineHeight: 1.75,
              marginBottom: 20,
            }}
          >
            I am a frontend-focused software engineer with more than four years of experience
            improving and building web applications with Angular, React, JavaScript, and TypeScript.
          </p>
          <p
            style={{
              fontFamily: theme.body,
              fontSize: isMobile ? 16 : 18,
              color: theme.fg2,
              lineHeight: 1.75,
            }}
          >
            My work spans across industrial IoT, retail software, AR prototypes, and interactive prototypes.
            I focus on responsive UI, maintainable code, and turning technically complex workflows into interfaces people can use with confidence.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
            }}
          >
            {stats.map(({ n, label }) => (
              <div
                key={n}
                style={{
                  padding: isMobile ? '20px 16px' : '28px 24px',
                  background: theme.cardBg,
                  border: `1px solid ${theme.border}`,
                  borderRadius: theme.cardRadius,
                }}
              >
                <div
                  style={{
                    fontFamily: theme.heading,
                    fontSize: isMobile ? 28 : 36,
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
                    fontSize: isMobile ? 12 : 14,
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
