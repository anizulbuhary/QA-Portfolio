import { useContext } from 'react';
import { BugContext } from './BugContextValue';

export const useBug = () => {
  const context = useContext(BugContext);

  if (!context) {
    throw new Error('useBug must be used within a BugProvider');
  }

  return context;
};
