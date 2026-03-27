import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBug } from '@/context/useBug';
import { ShieldCheck, Activity, Bug, Smartphone, MousePointerClick, ChevronDown, ChevronUp } from 'lucide-react';

export const BugStats = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const { resolvedCount, defectDensity, interactionMode } = useBug();
  const isInteractive = interactionMode === 'interactive';

  if (resolvedCount === 0) return null;

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[110] flex flex-col gap-2 max-w-[calc(100vw-2rem)] sm:max-w-[320px]"
    >
      <div 
        className="border border-border rounded-2xl shadow-2xl min-w-[200px] md:min-w-[280px] overflow-visible bg-[var(--color-bg)] transition-colors"
        style={{ padding: '1.5rem' }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] md:text-xs font-mono text-tertiary uppercase tracking-[0.2em]">QA Session</span>
            <div className={`w-2 h-2 rounded-full ${isInteractive ? 'bg-red-500 animate-pulse' : 'bg-amber-400'}`} />
          </div>
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-surface-hover rounded transition-colors text-tertiary hover:text-primary"
            aria-label={isMinimized ? "Expand diagnostics" : "Minimize diagnostics"}
          >
            {isMinimized ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
        
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-semibold text-secondary">Resolved</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.span 
              key={resolvedCount}
              initial={{ scale: 1.5, color: '#10b981' }}
              animate={{ scale: 1, color: 'var(--color-text-primary)' }}
              className="text-lg font-bold font-mono"
            >
              {resolvedCount}
            </motion.span>
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-visible"
            >
              <div className="space-y-4 mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between gap-8">
                  <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-secondary">Density</span>
                  </div>
                  <span className="text-sm font-mono text-tertiary whitespace-nowrap">{defectDensity}</span>
                </div>

                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.15em] text-tertiary gap-4">
                  <span className="flex items-center gap-3">
                    {isInteractive ? (
                      <MousePointerClick className="w-3.5 h-3.5 text-red-500" />
                    ) : (
                      <Smartphone className="w-3.5 h-3.5 text-amber-500" />
                    )}
                    {isInteractive ? 'Desktop Hunt' : 'Touch Mode'}
                  </span>
                  <span className={isInteractive ? 'text-red-500' : 'text-tertiary'}>
                    {isInteractive ? 'Enabled' : 'Passive'}
                  </span>
                </div>

                <div className="pt-2 flex items-start gap-3">
                  <div className="mt-0.5">
                    <Bug className="w-4 h-4 text-muted translate-x-0.5" />
                  </div>
                  <span className="text-[10px] text-muted italic leading-relaxed">
                    {isInteractive
                      ? 'Hover or click bugs to log fixes.'
                      : 'Interactive bugs pause on touch devices.'}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
