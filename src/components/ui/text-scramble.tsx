'use client';
import { useEffect, useState } from 'react';
import { motion, type MotionProps } from 'framer-motion';

type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
  delay?: number;
} & MotionProps;

const defaultChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%&*+-_<>?/'; // Mixed widths to match regular text

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  delay = 0,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion.create(
    Component as keyof React.JSX.IntrinsicElements
  );
  
  // Guarantee no surrounding layout whitespace increases the character count
  const text = typeof children === 'string' ? children.trim().replace(/\s+/g, ' ') : '';
  
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  const scramble = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      let scrambled = '';
      const progress = step / steps;

      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
          continue;
        }

        if (progress * text.length > i) {
          scrambled += text[i];
        } else {
          // Fixed length random character
          const char = characterSet[Math.floor(Math.random() * characterSet.length)];
          scrambled += char;
        }
      }

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
        onScrambleComplete?.();
      }
    }, speed * 1000);
  };

  useEffect(() => {
    if (!trigger) return;

    const timer = setTimeout(() => {
      scramble();
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [trigger, delay]);

  return (
    <MotionComponent 
      className={className} 
      style={{ 
        position: 'relative',
        ...props.style as any
      }} 
      {...props}
    >
      {/* Invisible placeholder to reserve space for final text */}
      <span 
        style={{ 
          visibility: 'hidden',
        }} 
        aria-hidden="true"
      >
        {children.split(' ').map((word, i, arr) => (
          <span key={i} style={{ whiteSpace: 'nowrap' }}>
            {word}{i !== arr.length - 1 ? ' ' : ''}
          </span>
        ))}
      </span>
      
      {/* Animated layer that doesn't affect document flow */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {displayText.split(' ').map((word, i, arr) => (
          <span key={i} style={{ whiteSpace: 'nowrap' }}>
            {word}{i !== arr.length - 1 ? ' ' : ''}
          </span>
        ))}
      </span>
    </MotionComponent>
  );
}
