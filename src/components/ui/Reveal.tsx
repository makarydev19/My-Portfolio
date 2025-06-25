'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'bottom' | 'top' | 'left' | 'right';
  opacity?: boolean;
}

const getClipPath = (
  direction: RevealProps['direction'],
  revealed: boolean
) => {
  switch (direction) {
    case 'top':
      return revealed ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)';
    case 'bottom':
      return revealed ? 'inset(0 0 0 0)' : 'inset(100% 0 0 0)';
    case 'left':
      return revealed ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)';
    case 'right':
      return revealed ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)';
    default:
      return 'inset(100% 0 0 0)'; // fallback to bottom
  }
};

const Reveal = ({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'bottom',
  opacity = true,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const clipPath = getClipPath(direction, isInView);

  return (
    <div ref={ref}>
      <motion.div
        initial={{
          clipPath: getClipPath(direction, false),
          opacity: opacity ? 0 : 1,
        }}
        animate={{
          clipPath,
          opacity: opacity ? 1 : 1,
        }}
        transition={{ duration, delay, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
