import React, { useState } from 'react';
import { theme } from '../themes/themes';
import { Reveal } from './Reveal';
import { useWindowWidth } from '../hooks/useWindowWidth';
import type { Project } from '../types/project';

const PROJECTS_PER_PAGE = 4;

const projectModules = import.meta.glob('../data/projects/*.json', { eager: true, import: 'default' });
const projects: Project[] = Object.values(projectModules) as Project[];

const GitHubIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalLinkIcon: React.FC<{ size?: number }> = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ProjectCard: React.FC<Project & { index: number }> = ({ title, description, primaryTags, tags, image, github, link, index }) => {
  const [hovered, setHovered] = useState(false);
  const [ghHovered, setGhHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <Reveal delay={index * 0.1}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: theme.cardBg,
          border: `1px solid ${hovered ? theme.accent : theme.border}`,
          borderRadius: theme.cardRadius,
          padding: '36px 32px',
          cursor: 'default',
          transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
          transform: hovered ? 'translateY(-4px)' : 'none',
          boxShadow: hovered ? theme.cardShadow : 'none',
        }}
      >
        {image ? (
          <div
            style={{
              width: '100%',
              height: 160,
              borderRadius: 6,
              marginBottom: 28,
              background: 'rgba(255,255,255,0.94)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src={`/portfolio/projects/${image.replace('../projects/', '')}`}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                padding: '10px 14px',
                display: 'block',
              }}
            />
          </div>
        ) : (
          <div
            style={{
              height: 160,
              background: theme.placeholder,
              borderRadius: 6,
              marginBottom: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: theme.mono,
              fontSize: 11,
              color: theme.fg2,
              letterSpacing: '0.08em',
            }}
          >
            professional case study
          </div>
        )}
        <h3
          style={{
            fontFamily: theme.heading,
            fontSize: 22,
            fontWeight: theme.headWeight,
            color: theme.fg,
            margin: '0 0 12px',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: theme.body,
            fontSize: 14,
            color: theme.fg2,
            lineHeight: 1.65,
            margin: '0 0 24px',
          }}
        >
          {description}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {(primaryTags ?? []).map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: theme.mono,
                  fontSize: 11,
                  color: theme.accent,
                  border: `1px solid ${theme.accent}44`,
                  borderRadius: 4,
                  padding: '3px 10px',
                  letterSpacing: '0.06em',
                }}
              >
                {tag}
              </span>
            ))}
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: theme.mono,
                  fontSize: 11,
                  color: theme.fg2,
                  border: `1px solid ${theme.border2}`,
                  borderRadius: 4,
                  padding: '3px 10px',
                  letterSpacing: '0.06em',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setLinkHovered(true)}
                onMouseLeave={() => setLinkHovered(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: theme.mono,
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  color: linkHovered ? theme.accent : theme.fg2,
                  border: `1px solid ${linkHovered ? theme.accent : theme.border2}`,
                  borderRadius: 4,
                  padding: '3px 10px',
                  textDecoration: 'none',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                <ExternalLinkIcon size={13} />
                live
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setGhHovered(true)}
                onMouseLeave={() => setGhHovered(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: theme.mono,
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  color: ghHovered ? theme.accent : theme.fg2,
                  border: `1px solid ${ghHovered ? theme.accent : theme.border2}`,
                  borderRadius: 4,
                  padding: '3px 10px',
                  textDecoration: 'none',
                  transition: 'color 0.2s, border-color 0.2s',
                }}
              >
                <GitHubIcon size={13} />
                source
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export const Projects: React.FC = () => {
  const [page, setPage] = useState(0);
  const width = useWindowWidth();
  const isMobile = width < 640;
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const showPagination = projects.length > PROJECTS_PER_PAGE;
  const visibleProjects = projects.slice(page * PROJECTS_PER_PAGE, (page + 1) * PROJECTS_PER_PAGE);

  const NavButton: React.FC<{ onClick: () => void; disabled: boolean; children: React.ReactNode }> = ({ onClick, disabled, children }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: theme.mono,
          fontSize: 11,
          letterSpacing: '0.06em',
          color: disabled ? theme.border2 : hovered ? theme.accent : theme.fg2,
          border: `1px solid ${disabled ? theme.border2 : hovered ? theme.accent : theme.border2}`,
          borderRadius: 4,
          padding: '6px 16px',
          background: 'transparent',
          cursor: disabled ? 'default' : 'pointer',
          transition: 'color 0.2s, border-color 0.2s',
        }}
      >
        {children}
      </button>
    );
  };

  return (
    <section
      id="projects"
      style={{
        padding: isMobile ? '80px 24px' : '120px 48px',
        background: theme.bg,
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Reveal>
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
            Projects
          </h2>
        </Reveal>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: 28,
          }}
        >
          {visibleProjects.map((project, i) => (
            <ProjectCard key={project.title} index={i} {...project} />
          ))}
        </div>
        {showPagination && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 16,
              marginTop: 40,
            }}
          >
            <NavButton onClick={() => setPage(p => p - 1)} disabled={page === 0}>
              ← prev
            </NavButton>
            <span
              style={{
                fontFamily: theme.mono,
                fontSize: 11,
                color: theme.fg2,
                letterSpacing: '0.06em',
              }}
            >
              {page + 1} / {totalPages}
            </span>
            <NavButton onClick={() => setPage(p => p + 1)} disabled={page === totalPages - 1}>
              next →
            </NavButton>
          </div>
        )}
      </div>
    </section>
  );
};
