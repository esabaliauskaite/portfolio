import React from 'react';
import { theme } from '../themes/themes';

export const Footer: React.FC = () => {

  return (
    <footer
      style={{
        padding: '32px 48px',
        background: theme.bg,
        borderTop: `1px solid ${theme.border}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: theme.body,
        fontSize: 12,
        color: theme.fg2,
      }}
    >
      <span>© {new Date().getFullYear()} Egle Sabaliauskaite</span>
    </footer>
  );
};
