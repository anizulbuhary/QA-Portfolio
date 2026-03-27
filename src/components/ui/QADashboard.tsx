import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const POOL = [
  { type: 'pass', msg: 'Parabank: Page Object Model validation successful.' },
  { type: 'pass', msg: 'ISTQB CTFL: Verifying certification artifacts...' },
  { type: 'pass', msg: 'OrangeHRM: Gherkin feature files mapped to Playwright scripts.' },
  { type: 'error', msg: 'Vision System: False positive in low-light violation detection.' },
  { type: 'pass', msg: 'SQL: Transaction integrity verified for violation logs.' },
  { type: 'warn', msg: 'OWASP ZAP: Missing security headers on staging /login.' },
  { type: 'pass', msg: 'Postman: JSON schema validation for API response passed.' },
  { type: 'info', msg: 'Curating boundary test datasets for image occlusion...' },
  { type: 'pass', msg: 'Cucumber: BDD scenarios for Leave Management verified.' },
  { type: 'pass', msg: 'Maven: Dependency tree checked for vulnerabilities.' },
  { type: 'error', msg: 'OrangeHRM: Null pointer exception in PIM module sync.' },
  { type: 'pass', msg: 'Java: Multi-threaded execution for DDT framework stable.' },
  { type: 'pass', msg: 'Selenium: Account Overview cross-browser test passed.' },
  { type: 'warn', msg: 'Perf: 12% latency spike in violation API response.' },
];

export const QADashboard = () => {
  const [logs, setLogs] = useState([
    { id: 1, type: 'info', msg: 'Starting QA validation engine...' },
    { id: 2, type: 'pass', msg: 'Initializing environment artifacts...' },
  ]);
  const [stats, setStats] = useState({ total: 1248, pass: 98.4 });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLog = POOL[Math.floor(Math.random() * POOL.length)];
      setLogs(prev => {
        const next = [...prev, { ...randomLog, id: Date.now() }];
        return next.slice(-10); // Keep last 10 logs
      });

      setStats(prev => {
        const fluctuatePass = +(prev.pass + (Math.random() * 0.4 - 0.2)).toFixed(1);
        const nextPass = Math.min(100, Math.max(95, fluctuatePass));
        return {
          total: prev.total + Math.floor(Math.random() * 5),
          pass: nextPass
        };
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="qa-dashboard-mock">
      <div className="mock-header">
        <div className="mock-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="mock-title mono-text">suite_execution_summary.log</div>
      </div>
      <div className="mock-body">
        <div className="mock-stat-row">
          <span className="stat-label uppercase tracking-wider text-[10px] md:text-xs text-zinc-500 font-mono">Total Tests Executed:</span>
          <motion.span 
            key={stats.total}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            className="stat-val mono-text text-zinc-200"
          >
            {stats.total.toLocaleString()}
          </motion.span>
        </div>
        <div className="mock-stat-row">
          <span className="stat-label uppercase tracking-wider text-[10px] md:text-xs text-zinc-500 font-mono">Pass Rate:</span>
          <motion.span 
            key={stats.pass}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            className="stat-val pass mono-text text-emerald-500"
          >
            {stats.pass}%
          </motion.span>
        </div>
        
        <div className="mock-chart mt-4 mb-6 relative overflow-hidden bg-zinc-800/50 h-2 rounded-full flex">
          <motion.div 
            className="h-full bg-emerald-500 flex-shrink-0" 
            initial={{ width: "0%" }}
            animate={{ width: `${stats.pass}%` }}
            transition={{ type: 'spring', stiffness: 40, damping: 10 }}
          />
          <motion.div 
            className="h-full bg-rose-500/50 flex-shrink-0" 
            initial={{ width: "0%" }}
            animate={{ width: `${100 - stats.pass}%` }}
            transition={{ type: 'spring', stiffness: 40, damping: 10 }}
          />
        </div>

        <div className="mock-logs-container bg-black/40 rounded-lg p-3 md:p-4 border border-zinc-800/50">
          <div 
            ref={scrollRef}
            className="mock-logs mono-text h-[200px] overflow-hidden flex flex-col gap-1.5"
          >
            <AnimatePresence mode="popLayout">
              {logs.map((log) => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-2 text-[10px] md:text-[11px] leading-relaxed"
                >
                  <span className={`uppercase font-bold whitespace-nowrap ${
                    log.type === 'pass' ? 'text-emerald-500' : 
                    log.type === 'warn' ? 'text-amber-500' : 
                    log.type === 'error' ? 'text-rose-500' :
                    'text-blue-500'
                  }`}>
                    [{log.type === 'pass' ? 'PASS' : log.type === 'warn' ? 'WARN' : log.type === 'error' ? 'ERROR' : 'INFO'}]
                  </span>
                  <span className="text-zinc-400">{log.msg}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
