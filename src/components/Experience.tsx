import React, { useRef, useState, useEffect } from 'react';
import { theme } from '../themes/themes';
import { Reveal } from './Reveal';

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
  desc: string;
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
          <p
            style={{
              fontFamily: theme.body,
              fontSize: 14,
              color: theme.fg2,
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {desc}
          </p>
        </div>
      </div>
    </Reveal>
  );
};

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      style={{
        padding: '120px 48px',
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
              fontSize: 42,
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
          year="01/2026 – present"
          role="Career Transition → Data Science"
          company="Self-directed learning & projects"
          desc="Pivoting from frontend engineering into data science: building end-to-end projects in Python, sharpening skills in data analysis, machine learning, and visualisation, and translating my engineering background into data-driven products."
        />
        <TimelineItem
          delay={0.1}
          year="11/2024 – 10/2025"
          role="Senior Software Engineer"
          company="MAIT Austria GmbH, Linz"
          desc="Led technical workshops to demonstrate AR and IoT products, guiding clients on usage and potential applications. Collaborated with clients on proof-of-concept projects, shaping solutions through hands-on experimentation and feedback."
        />
        <TimelineItem
          delay={0.2}
          year="07/2023 – 11/2024"
          role="Software Developer IoT + AR"
          company="MAIT Austria GmbH, Linz"
          desc="Designed and implemented UI and dashboards to visualize shopfloor and workflow data within an industrial IoT platform. Researched emerging IoT, AR, and automation technologies to support client digitalization initiatives."
        />
        <TimelineItem
          delay={0.3}
          year="01/2022 – 02/2023"
          role="Software Engineer"
          company="NTS Retail KG, Linz"
          desc="Upgraded and optimized existing Angular applications to a newer version, ensuring responsiveness across multiple devices. Supported backend tasks and contributed to internal demos and proof-of-concept projects."
        />
        <TimelineItem
          delay={0.4}
          year="07/2021 – 12/2021"
          role="Projektmitarbeiterin"
          company="Johannes Kepler Universität, Linz"
          desc="Enhanced and maintained legacy applications using React, improving frontend performance and overall usability. Supported backend development within an Agile, sprint-based workflow."
          last
        />
      </div>
    </section>
  );
};
