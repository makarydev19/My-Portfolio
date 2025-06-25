'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedHeadingProps {
  text: string;
  textColor?: string;
  strokeColor?: string;
  delay?: number; // optional prop for flexibility
}

const Heading = ({
  text,
  textColor = 'black',
  strokeColor = 'white',
  delay = 0.5, // default 3s delay
}: AnimatedHeadingProps) => {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { amount: 0.3, once: false });

  return (
    <div ref={headingRef} className='overflow-hidden text-center'>
      <motion.h1
        initial={{
          opacity: 0,
          color: 'transparent',
          WebkitTextStroke: `1px ${strokeColor}`,
        }}
        animate={{
          opacity: 1,
          color: isInView ? textColor : 'transparent',
          WebkitTextStroke: isInView ? '0px' : `1px ${strokeColor}`,
        }}
        transition={{
          opacity: { delay, duration: 1.5, ease: 'easeInOut' },
          color: { delay: delay, duration: 2, ease: 'easeInOut' },
          WebkitTextStroke: {
            delay: delay,
            duration: 1,
            ease: 'easeInOut',
          },
        }}
        className='text-7xl font-[900] -tracking-[0.3rem] uppercase transition-colors duration-1000 ease-in-out lg:text-[10rem]'
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default Heading;
