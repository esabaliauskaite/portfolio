import React, { useEffect, useState } from 'react';
import { theme } from '../themes/themes';
import { useWindowWidth } from '../hooks/useWindowWidth';

export const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 640;

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  const anim = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'none' : 'translateY(24px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: isMobile ? '80px 24px 48px' : '0 48px',
        background: theme.heroBg || theme.bg,
      }}
    >
      <div style={{ maxWidth: 900 }}>
        <h1
          style={{
            fontFamily: theme.heading,
            fontSize: 'clamp(48px, 7.5vw, 104px)',
            fontWeight: theme.heroWeight,
            lineHeight: 1.05,
            color: theme.fg,
            margin: '0 0 24px',
            letterSpacing: theme.heroTracking,
            overflow: 'hidden',
          }}
        >
          {(['Egle', 'Sabaliauskaite'] as const).map((line, lineIdx) => (
            <div key={lineIdx} style={{ overflow: 'hidden' }}>
              {line.split('').map((c, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'translateY(0)' : 'translateY(0.4em)',
                    transition: `opacity 0.55s ease ${0.3 + (i + (lineIdx === 1 ? 5 : 0)) * 0.035}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${0.3 + (i + (lineIdx === 1 ? 5 : 0)) * 0.035}s`,
                  }}
                >
                  {c === ' ' ? ' ' : c}
                </span>
              ))}
            </div>
          ))}
        </h1>
        
        <div
          style={{
            ...anim(0.1),
            fontFamily: theme.mono,
            fontSize: isMobile ? 12 : 14,
            color: theme.accent,
            letterSpacing: '0.16em',
            marginBottom: 24,
          }}
        >
          FRONTEND ENGINEER | REACT, TYPESCRIPT | LINZ, AUSTRIA
        </div>
        <p
          style={{
            ...anim(0.4),
            fontFamily: theme.body,
            fontSize: isMobile ? 16 : 18,
            color: theme.fg2,
            maxWidth: 540,
            lineHeight: 1.65,
            margin: '0 0 40px',
          }}
        >
          I build responsive, maintainable interfaces for complex products from industrial IoT
          dashboards to enterprise applications and interactive prototypes.
        </p>
        <div
          style={{
            ...anim(0.55),
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'stretch' : 'center',
            gap: 12,
          }}
        >
          <button
            onClick={() =>
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
            }
            style={{
              fontFamily: theme.body,
              fontSize: 14,
              padding: '12px 28px',
              background: theme.accent,
              color: theme.accentFg,
              border: 'none',
              borderRadius: theme.radius,
              cursor: 'pointer',
              transition: 'opacity 0.2s',
              letterSpacing: '0.04em',
              textAlign: 'center',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.85')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
          >
            View Skills
          </button>
          <a
            href="/portfolio/CV_Egle_Sabaliauskaite.pdf"
            download="CV_Egle_Sabaliauskaite.pdf"
            style={{
              fontFamily: theme.body,
              fontSize: 14,
              padding: '12px 28px',
              background: 'none',
              color: theme.fg,
              border: `1px solid ${theme.border2}`,
              borderRadius: theme.radius,
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'border-color 0.2s',
              letterSpacing: '0.04em',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = theme.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = theme.border2)}
          >
            Download Resume
          </a>
          <div
            style={{
              width: isMobile ? '100%' : 1,
              height: isMobile ? 1 : 20,
              background: theme.border2,
              margin: isMobile ? '4px 0' : '0 4px',
            }}
          />
          <div style={{ display: 'flex', gap: 10, justifyContent: isMobile ? 'center' : 'flex-start' }}>
            <a
              href="https://github.com/esabaliauskaite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                color: theme.fg2,
                border: `1px solid ${theme.border2}`,
                borderRadius: theme.radius,
                textDecoration: 'none',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme.accent;
                e.currentTarget.style.borderColor = theme.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme.fg2;
                e.currentTarget.style.borderColor = theme.border2;
              }}
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/eglesabaliauskaite"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                color: theme.fg2,
                border: `1px solid ${theme.border2}`,
                borderRadius: theme.radius,
                textDecoration: 'none',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme.accent;
                e.currentTarget.style.borderColor = theme.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme.fg2;
                e.currentTarget.style.borderColor = theme.border2;
              }}
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
