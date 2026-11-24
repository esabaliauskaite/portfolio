import { profile } from '../data/profile';

export const Footer = () => (
  <footer className="footer section-shell">
    <span>© {new Date().getFullYear()} {profile.name}</span>
    <a href="#top">Back to top</a>
  </footer>
);
