'use client';

import React, { useRef } from 'react';
import { Heading } from '../ui';
import { FaReact } from 'react-icons/fa';
import { SiSanity } from 'react-icons/si';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { AiOutlineJavaScript } from 'react-icons/ai';
import { motion, useInView } from 'framer-motion';
import { useWindowSize } from '@/src/hooks/useWindowSize';
import { TextAnimate } from '../ui/TextAnimate';

const TypeScriptIcon = () => (
  <svg
    viewBox='0 0 32 32'
    xmlns='http://www.w3.org/2000/svg'
    fill='#F4F4F4'
    stroke='currentColor'
    strokeWidth='1.2'
    className='size-18 sm:size-24 md:size-28 lg:size-32'
  >
    <path d='M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z' />
  </svg>
);

const icons = [
  RiNextjsLine,
  SiSanity,
  TypeScriptIcon,
  FaReact,
  RiTailwindCssFill,
  AiOutlineJavaScript,
];

type Position = { x: number; y: number };

type ResponsivePositions = {
  mobile: Position[];
  tablet: Position[];
  desktop: Position[];
};

const SkillsSection = () => {
  const ref = useRef(null);
  const { width } = useWindowSize();
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Responsive offset values
  const xOffset = width > 1024 ? 90 : width > 768 ? 60 : 25;
  const yOffset = width > 1024 ? 100 : width > 768 ? 80 : 50;

  const getResponsivePositions = (
    width: number,
    config: ResponsivePositions
  ): Position[] => {
    if (width <= 640) return config.mobile;
    if (width <= 1024) return config.tablet;
    return config.desktop;
  };

  const leftGroupPreset: ResponsivePositions = {
    mobile: [
      { x: -6.7 * xOffset, y: -1 * yOffset },
      { x: -5 * xOffset, y: 0.2 * yOffset },
      { x: -2 * xOffset, y: 0.8 * yOffset },
    ],
    tablet: [
      { x: -5.5 * xOffset, y: -2 * yOffset },
      { x: -5 * xOffset, y: 1 * yOffset },
      { x: -3 * xOffset, y: 2.5 * yOffset },
    ],
    desktop: [
      { x: -5 * xOffset, y: -2 * yOffset },
      { x: -3.7 * xOffset, y: 1 * yOffset },
      { x: -2 * xOffset, y: 2.5 * yOffset },
    ],
  };

  const rightGroupPreset: ResponsivePositions = {
    mobile: [
      { x: 6.7 * xOffset, y: -1 * yOffset },
      { x: 5 * xOffset, y: 0.2 * yOffset },
      { x: 2 * xOffset, y: 0.8 * yOffset },
    ],
    tablet: [
      { x: 5.5 * xOffset, y: -1.5 * yOffset },
      { x: 5 * xOffset, y: 1 * yOffset },
      { x: 3 * xOffset, y: 2.5 * yOffset },
    ],
    desktop: [
      { x: 5 * xOffset, y: -1.5 * yOffset },
      { x: 3.7 * xOffset, y: 1 * yOffset },
      { x: 2 * xOffset, y: 2.5 * yOffset },
    ],
  };

  const leftGroupPositions = getResponsivePositions(width, leftGroupPreset);
  const rightGroupPositions = getResponsivePositions(width, rightGroupPreset);

  return (
    <section
      ref={ref}
      className='relative overflow-hidden bg-black pb-60 text-white'
    >
      <Heading text='About Me' textColor='white' strokeColor='#fffff2' />

      <main className='relative z-10 mt-10 text-center'>
        <TextAnimate
          animation='blurInUp'
          by='word'
          delay={2}
          once
          className='mx-auto w-[70%] text-center text-xl sm:text-2xl md:text-3xl lg:w-[60%] lg:text-4xl'
        >
          I’m a frontend web developer specializing in building fast,
          responsive, and modern websites using Next.js, React, Tailwind CSS,
          and TypeScript...
        </TextAnimate>

        <div
          className='relative z-50 flex w-full items-center justify-center'
          style={{ perspective: '1000px' }}
        >
          {icons.map((Icon, idx) => {
            const isLeftGroup = idx < 3;
            const groupIndex = isLeftGroup ? idx : idx - 3;
            const position = isLeftGroup
              ? leftGroupPositions[groupIndex]
              : rightGroupPositions[groupIndex];

            return (
              <motion.div
                key={idx}
                style={{ transformStyle: 'preserve-3d' }}
                className='absolute flex items-center justify-center rounded-full text-6xl text-white shadow-xl md:text-7xl lg:text-8xl'
                initial={{
                  x: isLeftGroup ? -width : width,
                  y: position.y,
                  opacity: 0,
                  scale: 0.8,
                  rotate: isLeftGroup ? -30 : 30,
                }}
                animate={
                  isInView
                    ? {
                        x: position.x,
                        opacity: 1,
                        scale: 1,
                        rotate: isLeftGroup ? -15 : 15,
                        transition: {
                          duration: 1.5,
                          delay: 0.5 + groupIndex * 0.4,
                          ease: 'easeInOut',
                        },
                      }
                    : {}
                }
              >
                <Icon />
              </motion.div>
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default SkillsSection;
