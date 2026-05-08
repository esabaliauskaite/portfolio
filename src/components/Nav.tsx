import React, { useEffect, useState } from 'react';
import { theme } from '../themes/themes';
import { useWindowWidth } from '../hooks/useWindowWidth';

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const width = useWindowWidth();
  const isMobile = width < 640;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const links = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: isMobile ? '0 24px' : '0 48px',
          background: scrolled || menuOpen ? theme.navBg : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none',
          borderBottom: (scrolled && !menuOpen) ? `1px solid ${theme.border}` : 'none',
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

        {isMobile ? (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                display: 'block',
                width: 22,
                height: 1.5,
                background: menuOpen ? theme.accent : theme.fg,
                transition: 'transform 0.25s',
                transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: 22,
                height: 1.5,
                background: theme.fg,
                transition: 'opacity 0.25s',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: 22,
                height: 1.5,
                background: menuOpen ? theme.accent : theme.fg,
                transition: 'transform 0.25s',
                transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        ) : (
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
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
        )}
      </nav>

      {isMobile && menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            zIndex: 99,
            background: theme.navBg,
            backdropFilter: 'blur(12px)',
            borderBottom: `1px solid ${theme.border}`,
            padding: '16px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          }}
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: `1px solid ${theme.border}`,
                cursor: 'pointer',
                fontFamily: theme.body,
                fontSize: 15,
                color: theme.fg2,
                letterSpacing: '0.04em',
                padding: '14px 0',
                textAlign: 'left',
              }}
            >
              {link}
            </button>
          ))}
          <a
            href="/portfolio/CV_Egle_Sabaliauskaite.pdf"
            download="CV_Egle_Sabaliauskaite.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 16,
              border: `1px solid ${theme.accent}`,
              borderRadius: theme.radius,
              fontFamily: theme.body,
              fontSize: 13,
              color: theme.accent,
              padding: '10px 14px',
              letterSpacing: '0.06em',
              textDecoration: 'none',
            }}
          >
            Resume ↓
          </a>
        </div>
      )}
    </>
  );
};
