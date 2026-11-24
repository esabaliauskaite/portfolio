import type { CSSProperties, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}

// Content stays visible when motion is disabled or observers are unavailable.
export const Reveal = ({ children, delay = 0, style }: RevealProps) => (
  <div className="reveal" style={{ '--reveal-delay': `${delay}s`, ...style } as CSSProperties}>
    {children}
  </div>
);
