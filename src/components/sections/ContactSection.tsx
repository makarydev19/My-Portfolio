'use client';

import React, { useCallback } from 'react';
import Form from '../ui/Form';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Reveal from '../ui/Reveal';

const ContactSection = () => {
  const handleCopy = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = 'makarydev19@gmail.com';
    navigator.clipboard.writeText(email);
    toast.success('Email copied to clipboard!'); // or use alert('Copied!')
  }, []);

  return (
    <>
      <main className='relative flex w-full flex-col items-center justify-between px-2 py-10 lg:flex-row lg:px-24 lg:py-32'>
        <div className='space-y-5 lg:w-[40%]'>
          <Reveal direction='left' duration={1.5} delay={0.2}>
            <h1 className='text-9xl text-black'>Lets Get in Touch</h1>
          </Reveal>
          <Link
            href='#'
            onClick={handleCopy}
            className='hidden cursor-pointer text-3xl font-bold text-black underline lg:block'
          >
            makarydev19@gmail.com
          </Link>
        </div>
        <div className='absolute top-28 left-70'>
          <DotLottieReact
            src='https://lottie.host/b88f5098-4455-4a46-8360-fd580e02cd30/v6epb3nzgX.lottie'
            loop
            autoplay
          />
        </div>
        <div className='w-full lg:w-[50%]'>
          <Form />
        </div>
      </main>
    </>
  );
};

export default ContactSection;
