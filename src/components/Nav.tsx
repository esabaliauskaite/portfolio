import React, { useEffect, useState } from 'react';
import { theme } from '../themes/themes';

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0 48px',
        background: scrolled ? theme.navBg : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? `1px solid ${theme.border}` : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
      }}
    >
      <span
        style={{
          fontFamily: theme.mono,
          fontSize: 13,
          color: theme.accent,
          letterSpacing: '0.12em',
        }}
      >
        ES
      </span>
      <div style={{ display: 'flex', gap: 32 }}>
        {links.map((link) => (
          <button
            key={link}
            onClick={() => scrollToSection(link.toLowerCase())}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: theme.body,
              fontSize: 13,
              color: theme.fg2,
              letterSpacing: '0.04em',
              padding: 0,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = theme.accent)}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = theme.fg2)}
          >
            {link}
          </button>
        ))}
        <a
          href="/portfolio/CV_Egle_Sabaliauskaite.pdf"
          download="CV_Egle_Sabaliauskaite.pdf"
          style={{
            background: 'none',
            border: `1px solid ${theme.accent}`,
            borderRadius: theme.radius,
            cursor: 'pointer',
            fontFamily: theme.body,
            fontSize: 12,
            color: theme.accent,
            padding: '5px 14px',
            letterSpacing: '0.06em',
            transition: 'all 0.2s',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = theme.accent;
            e.currentTarget.style.color = theme.bg;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'none';
            e.currentTarget.style.color = theme.accent;
          }}
        >
          Resume ↓
        </a>
      </div>
    </nav>
  );
};
