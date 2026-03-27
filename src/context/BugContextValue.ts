import { createContext } from 'react';

export interface BugContextType {
  resolvedCount: number;
  incrementResolved: () => void;
  defectDensity: string;
  interactionMode: 'interactive' | 'reduced';
}

export const BugContext = createContext<BugContextType | undefined>(undefined);
