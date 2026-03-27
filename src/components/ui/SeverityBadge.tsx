import type { ReactNode } from 'react';
import './ui.css';

interface BadgeProps {
  level: 'critical' | 'high' | 'medium' | 'low';
  children: ReactNode;
}

const severityConfig = {
  critical: { color: 'var(--color-fail)', bg: 'var(--color-fail-bg)', label: 'CRITICAL' },
  high: { color: 'var(--color-pending)', bg: 'var(--color-pending-bg)', label: 'HIGH' },
  medium: { color: 'var(--color-info)', bg: 'var(--color-info-bg)', label: 'MEDIUM' },
  low: { color: 'var(--color-pass)', bg: 'var(--color-pass-bg)', label: 'LOW' }
};

export const SeverityBadge = ({ level, children }: BadgeProps) => {
  const config = severityConfig[level];
  return (
    <span 
      className="severity-badge mono-text" 
      style={{ color: config.color, backgroundColor: config.bg, borderColor: config.color }}
    >
      <span className="severity-dot" style={{ backgroundColor: config.color }}></span>
      {children || config.label}
    </span>
  );
};
