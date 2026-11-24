import { useEffect, useRef, useState } from 'react';
import { assetPath, profile } from '../data/profile';

const links = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggle.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 900px)');
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav className="nav-inner section-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label={`${profile.name}, home`} onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">es.</span>
          <span className="brand-name">{profile.name}</span>
        </a>
        <button ref={toggle} className="menu-toggle" type="button" aria-expanded={menuOpen}
          aria-controls="main-menu" onClick={() => setMenuOpen(open => !open)}>
          {menuOpen ? 'Close' : 'Menu'}
          <span className={`menu-symbol${menuOpen ? ' is-open' : ''}`} aria-hidden="true"><span /><span /></span>
        </button>
        <div id="main-menu" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a>
          ))}
          <a className="nav-cv" href={assetPath(profile.cv)} download={profile.cv} onClick={() => setMenuOpen(false)}>
            CV <span className="file-format">PDF</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
