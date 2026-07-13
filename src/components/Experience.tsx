import React, { useRef, useState, useEffect } from 'react';
import { theme } from '../themes/themes';
import { Reveal } from './Reveal';
import { useWindowWidth } from '../hooks/useWindowWidth';

const TimelineLine: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
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
    <div
      ref={ref}
      style={{
        width: 1,
        flex: 1,
        background: theme.accent,
        marginTop: 8,
        transformOrigin: 'top',
        transform: drawn ? 'scaleY(1)' : 'scaleY(0)',
        transition: 'transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.15s',
        opacity: 0.35,
      }}
    />
  );
};

interface TimelineItemProps {
  year: string;
  role: string;
  company: string;
  desc: string[];
  last?: boolean;
  delay: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, role, company, desc, last, delay }) => {
  return (
    <Reveal delay={delay}>
      <div style={{ display: 'flex', gap: 32 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: theme.accent,
              flexShrink: 0,
              marginTop: 4,
            }}
          />
          {!last && <TimelineLine />}
        </div>
        <div style={{ paddingBottom: last ? 0 : 48 }}>
          <div
            style={{
              fontFamily: theme.mono,
              fontSize: 11,
              color: theme.accent,
              letterSpacing: '0.12em',
              marginBottom: 8,
            }}
          >
            {year}
          </div>
          <div
            style={{
              fontFamily: theme.heading,
              fontSize: 20,
              fontWeight: theme.headWeight,
              color: theme.fg,
              marginBottom: 4,
            }}
          >
            {role}
          </div>
          <div
            style={{
              fontFamily: theme.body,
              fontSize: 13,
              color: theme.accent,
              marginBottom: 12,
            }}
          >
            {company}
          </div>
          <ul
            style={{
              fontFamily: theme.body,
              fontSize: 14,
              color: theme.fg2,
              lineHeight: 1.65,
              margin: 0,
              paddingLeft: 18,
            }}
          >
            {desc.map((d, i) => (
              <li key={i} style={{ marginBottom: 8 }}>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
};

export const Experience: React.FC = () => {
  const width = useWindowWidth();
  const isMobile = width < 640;

  return (
    <section
      id="experience"
      style={{
        padding: isMobile ? '80px 24px' : '120px 48px',
        background: theme.bg,
      }}
    >
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
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
            EXPERIENCE
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
            Timeline
          </h2>
        </Reveal>
        <TimelineItem
          delay={0}
          year="11/2025 – present"
          role="Frontend Engineering Portfolio"
          company="Independent development"
          desc={[
            // `Strengthening modern frontend skills through focused project work`,
            'Emphasis on TypeScript, React, reusable component design, responsive interfaces, and production-quality delivery',
          ]}
        />
        <TimelineItem
          delay={0.1}
          year="11/2024 – 10/2025"
          role="Senior Software Engineer"
          company="MAIT Austria GmbH, Linz"
          desc={[
            'Led technical workshops and product demonstrations for AR and IoT solutions, translating client needs into practical use cases.',
            'Collaborated with clients and various teams on proof-of-concept projects, refining solution ideas through hands-on testing and feedback.',
          ]}
        />
        <TimelineItem
          delay={0.2}
          year="07/2023 – 11/2024"
          role="Software Developer IoT + AR"
          company="MAIT Austria GmbH, Linz"
          desc={[
            'Designed and implemented user interfaces and operational dashboards for an industrial IoT platform, making shopfloor and workflow data easier to understand and use.',
            'Evaluated IoT, AR, and automation technologies to support client digitalization initiatives and guide proof-of-concept development.',
          ]}
        />
        <TimelineItem
          delay={0.3}
          year="01/2022 – 02/2023"
          role="Software Engineer"
          company="NTS Retail KG, Linz"
          desc={[
            'Modernized existing Angular applications by upgrading the framework version and improving responsive behaviour across devices.',
            'Contributed primarily to frontend delivery while supporting selected backend tasks.',
          ]}
        />
        <TimelineItem
          delay={0.4}
          year="07/2021 – 12/2021"
          role="Frontend Developer (Project role)"
          company="Johannes Kepler Universität, Linz"
          desc={[
            'Maintained and enhanced legacy React applications, with a focus on frontend performance and usability.',
            'Delivered frontend work within an Agile, sprint-based team and supported backend development where required.',
          ]}
        />
        <TimelineItem
          delay={0.4}
          year="06/2020 – 09/2020"
          role="Junior Frontend Developer"
          company="Softrobotics UAB, Vilnius, Lithuania"
          desc={[
            'Designed and developed custom WordPress websites, delivering user-friendly frontend solutions based on client requirements.',
            'Migrated existing websites to WordPress, ensuring smooth transitions while improving usability and functionality.'
          ]}
            last
        />
      </div>
    </section>
  );
};
