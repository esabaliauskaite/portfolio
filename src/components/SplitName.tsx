import React from 'react';
import { Theme } from '../types/theme';

interface SplitNameProps {
  line1: string;
  line2: string;
  theme: Theme;
  mounted: boolean;
}

export const SplitName: React.FC<SplitNameProps> = ({ line1, line2, theme, mounted }) => {
  const chars1 = line1.split('');
  const chars2 = line2.split('');

  const charStyle = (i: number, offset = 0): React.CSSProperties => ({
    display: 'inline-block',
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(0.4em)',
    transition: `opacity 0.55s ease ${0.3 + (i + offset) * 0.035}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${0.3 + (i + offset) * 0.035}s`,
  });

  return (
    <h1
      style={{
        fontFamily: theme.heading,
        fontSize: theme.heroSize,
        fontWeight: theme.heroWeight,
        lineHeight: 1.05,
        color: theme.fg,
        margin: '0 0 24px',
        letterSpacing: theme.heroTracking,
        overflow: 'hidden',
      }}
    >
      <div style={{ overflow: 'hidden' }}>
        {chars1.map((c, i) => (
          <span key={i} style={charStyle(i)}>
            {c === ' ' ? '\u00A0' : c}
          </span>
        ))}
      </div>
      <div style={{ overflow: 'hidden' }}>
        {chars2.map((c, i) => (
          <span key={i} style={charStyle(i, chars1.length + 1)}>
            {c === ' ' ? '\u00A0' : c}
          </span>
        ))}
      </div>
    </h1>
  );
};
