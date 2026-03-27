import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBug } from '@/context/useBug';

interface BugState {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  type: 'spider' | 'beetle';
  crawlClass: string;
}

const SpiderIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="14" rx="3.5" ry="4.5" fill={color} />
    <circle cx="12" cy="8.5" r="2.5" fill={color} />
    <g className="bug-leg-animate" stroke={color} strokeWidth="1.2" strokeLinecap="round">
      <path d="M9 11C7 9 5 9 3 11" />
      <path d="M9 13C7 13 5 14 3 16" />
      <path d="M9 15C7 17 5 18 3 20" />
      <path d="M15 11C17 9 19 9 21 11" />
      <path d="M15 13C17 13 19 14 21 16" />
      <path d="M15 15C17 17 19 18 21 20" />
    </g>
  </svg>
);

const BeetleIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C10 6 8 8 8 11V16C8 18.2 9.8 20 12 20C14.2 20 16 18.2 16 16V11C16 8 14 6 12 6Z" fill={color} />
    <circle cx="12" cy="7" r="3" fill={color} />
    <path d="M12 9V20" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
    <g className="bug-leg-animate" stroke={color} strokeWidth="1.5" strokeLinecap="round">
      <path d="M8 10L4 8" />
      <path d="M8 13H4" />
      <path d="M8 16L4 18" />
      <path d="M16 10L20 8" />
      <path d="M16 13H20" />
      <path d="M16 16L20 18" />
    </g>
  </svg>
);

export const AnimatedBug = () => {
  const [bugs, setBugs] = useState<BugState[]>([]);
  const { incrementResolved } = useBug();

  const spawnBug = useCallback(() => {
    const id = Date.now();
    const edge = Math.floor(Math.random() * 4);
    let startX = 0, startY = 0, endX = 0, endY = 0;
    
    if (edge === 0) {
      startX = Math.random() * 100; startY = -10;
      endX = Math.random() * 100; endY = 110;
    } else if (edge === 1) {
      startX = 110; startY = Math.random() * 100;
      endX = -10; endY = Math.random() * 100;
    } else if (edge === 2) {
      startX = Math.random() * 100; startY = 110;
      endX = Math.random() * 100; endY = -10;
    } else {
      startX = -10; startY = Math.random() * 100;
      endX = 110; endY = Math.random() * 100;
    }

    const newBug: BugState = {
      id,
      startX,
      startY,
      endX,
      endY,
      duration: Math.random() * 8 + 6, // Faster movement 6s-14s
      delay: Math.random() * 1.5,
      type: Math.random() > 0.4 ? 'spider' : 'beetle',
      crawlClass: Math.random() > 0.5 ? 'bug-crawl-1' : 'bug-crawl-2'
    };

    setBugs(prev => [...prev.slice(-7), newBug]); // Max 8 bugs
  }, []);

  useEffect(() => {
    const timer = setTimeout(spawnBug, 1000);
    const interval = setInterval(spawnBug, 3000);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [spawnBug]);

  const handleKill = (id: number) => {
    incrementResolved();
    setTimeout(() => {
      setBugs(prev => prev.filter(b => b.id !== id));
    }, 800); // Reduced from 1500ms to 800ms
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {bugs.map(bug => (
          <BugInstance 
            key={bug.id} 
            bug={bug} 
            onKill={() => handleKill(bug.id)} 
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const BugInstance = ({ bug, onKill }: { bug: BugState; onKill: () => void }) => {
  const [isKilled, setIsKilled] = useState(false);

  const angle = Math.atan2(bug.endY - bug.startY, bug.endX - bug.startX) * (180 / Math.PI) + 90;

  return (
    <motion.div
      initial={{ 
        x: `${bug.startX}vw`, 
        y: `${bug.startY}vh`, 
        scale: 0.8,
        opacity: 0,
        rotate: angle 
      }}
      animate={isKilled ? {} : { 
        x: `${bug.endX}vw`, 
        y: `${bug.endY}vh`, 
        opacity: [0, 0.8, 0.8, 0],
      }}
      exit={{ 
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.5 } 
      }}
      transition={{ 
        duration: bug.duration, 
        delay: bug.delay, 
        ease: "linear"
      }}
      onMouseEnter={() => {
        if (!isKilled) {
          setIsKilled(true);
          onKill();
        }
      }}
      className="bug-container-animate absolute flex items-center justify-center cursor-crosshair w-10 h-10"
      style={{
        pointerEvents: isKilled ? 'none' : 'auto',
      }}
    >
      <AnimatePresence>
        {isKilled ? (
          <motion.div
            key="splat"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.3, 1], opacity: [1, 1, 0.8] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-red-600/40 blur-xl rounded-full scale-[1.5]" />
            <div className="flex flex-col items-center">
              <span className="text-[9px] font-bold text-red-500 whitespace-nowrap drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
                DEFECT_RESOLVED
              </span>
              <div className="flex gap-0.5 mt-0.5">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: (i%2?1:-1)*8, y: (i<2?1:-1)*8, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-1 h-1 bg-red-600 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="bug-body"
            whileHover={{ scale: 1.15 }}
            className={`text-zinc-600/60 hover:text-red-600 transition-colors ${bug.crawlClass}`}
          >
            {bug.type === 'spider' ? (
              <SpiderIcon color="currentColor" />
            ) : (
              <BeetleIcon color="currentColor" />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
