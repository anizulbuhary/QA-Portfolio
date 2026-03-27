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
      <div className="bg-zinc-900/95 border border-zinc-800 backdrop-blur-md p-3 md:p-4 rounded-xl shadow-2xl min-w-[140px] md:min-w-[220px]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest">QA Session</span>
            <div className={`w-2 h-2 rounded-full ${isInteractive ? 'bg-red-500 animate-pulse' : 'bg-amber-400'}`} />
          </div>
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-zinc-800 rounded transition-colors text-zinc-500 hover:text-zinc-300"
            aria-label={isMinimized ? "Expand diagnostics" : "Minimize diagnostics"}
          >
            {isMinimized ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-zinc-300">Resolved</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.span 
              key={resolvedCount}
              initial={{ scale: 1.5, color: '#10b981' }}
              animate={{ scale: 1, color: '#d1d5db' }}
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
              className="overflow-hidden"
            >
              <div className="space-y-3 mt-3 pt-3 border-t border-zinc-800/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-zinc-300">Density</span>
                  </div>
                  <span className="text-sm font-mono text-zinc-400">{defectDensity}</span>
                </div>

                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  <span className="flex items-center gap-2">
                    {isInteractive ? (
                      <MousePointerClick className="w-3 h-3 text-red-400" />
                    ) : (
                      <Smartphone className="w-3 h-3 text-amber-400" />
                    )}
                    {isInteractive ? 'Desktop Hunt' : 'Touch Mode'}
                  </span>
                  <span>{isInteractive ? 'Enabled' : 'Passive'}</span>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <Bug className="w-3 h-3 text-zinc-600" />
                  <span className="text-[10px] text-zinc-500 italic">
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
