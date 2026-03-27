import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { BugContext } from './BugContextValue';

export const BugProvider = ({ children }: { children: ReactNode }) => {
  const [resolvedCount, setResolvedCount] = useState(0);
  const [interactionMode, setInteractionMode] = useState<'interactive' | 'reduced'>('interactive');

  const incrementResolved = () => {
    setResolvedCount(prev => prev + 1);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const syncMode = () => {
      setInteractionMode(mediaQuery.matches ? 'reduced' : 'interactive');
    };

    syncMode();
    mediaQuery.addEventListener('change', syncMode);

    return () => {
      mediaQuery.removeEventListener('change', syncMode);
    };
  }, []);

  const defectDensity = useMemo(() => {
    if (resolvedCount === 0) return 'Monitoring baseline';
    return `${(resolvedCount * 0.12).toFixed(2)} defects/page`;
  }, [resolvedCount]);

  return (
    <BugContext.Provider
      value={{ resolvedCount, incrementResolved, defectDensity, interactionMode }}
    >
      {children}
    </BugContext.Provider>
  );
};
