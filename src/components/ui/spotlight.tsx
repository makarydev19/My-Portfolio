'use client';
import React from 'react';
import { motion } from 'motion/react';

type SpotlightProps = {
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

const Spotlight = ({
  translateY = -350,
  width = 560,
  height = 1200,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  const gradientFirst = 'var(--spotlight-gradient-first)';
  const gradientSecond = 'var(--spotlight-gradient-second)';
  const gradientThird = 'var(--spotlight-gradient-third)';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='pointer-events-none absolute inset-0 h-full w-full'
    >
      <motion.div
        animate={{ x: [0, xOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className='pointer-events-none absolute top-0 left-0 z-40 h-screen w-screen'
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className='absolute top-0 left-0'
        />

        <div
          style={{
            transform: 'rotate(-45deg) translate(5%, -50%)',
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className='absolute top-0 left-0 origin-top-left'
        />

        <div
          style={{
            transform: 'rotate(-45deg) translate(-180%, -70%)',
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className='absolute top-0 left-0 origin-top-left'
        />
      </motion.div>

      <motion.div
        animate={{ x: [0, -xOffset, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className='pointer-events-none absolute top-0 right-0 z-40 h-screen w-screen'
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className='absolute top-0 right-0'
        />

        <div
          style={{
            transform: 'rotate(45deg) translate(-5%, -50%)',
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className='absolute top-0 right-0 origin-top-right'
        />

        <div
          style={{
            transform: 'rotate(45deg) translate(180%, -70%)',
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className='absolute top-0 right-0 origin-top-right'
        />
      </motion.div>
    </motion.div>
  );
};

export default Spotlight;
