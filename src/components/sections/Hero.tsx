import React from 'react';
import { Spotlight } from '../ui';

const Hero = () => {
  return (
    <section className='relative'>
      <main className='relative flex h-[80vh] w-full overflow-hidden rounded-md bg-black antialiased md:items-center md:justify-center lg:h-screen'>
        <Spotlight />
        <div className='relative z-10 mx-auto my-auto w-full md:pt-20 lg:max-w-6xl lg:p-10'>
          <h1 className='bg-opacity-50 lg:text-superbig bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-center text-2xl text-transparent uppercase'>
            Transforming Concepts into Seamless User Experiences.
          </h1>
          <h2 className='mx-auto mt-4 max-w-xl text-center text-lg font-normal text-neutral-300'>
            Hi, I&apos;m Makary a Next.js developer building seamless,
            responsive, and creative websites.
          </h2>
        </div>
      </main>

      {/* Black shadow overlay at the bottom */}
    </section>
  );
};

export default Hero;
