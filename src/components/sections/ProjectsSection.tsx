import React from 'react';
import { Heading } from '../ui';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/src/data/data';
import ContactSection from './ContactSection';
import { LuExternalLink } from 'react-icons/lu';

const ProjectsSection = () => {
  const topOffsets = ['top-10', 'top-20', 'top-32', 'top-40'];
  return (
    <section className='bg-darkmode relative z-10 -mt-7 space-y-10 rounded-4xl pt-10 pb-10'>
      <Heading text='Projects' textColor='white' strokeColor='white' />
      <main className='space-y-10'>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-darkmode sticky mx-auto max-w-6xl rounded-4xl border border-zinc-600 p-6 ${topOffsets[index % topOffsets.length]}`}
          >
            <div className='flex items-center justify-between space-y-5 p-0 lg:space-y-0 lg:p-5'>
              <div className='flex items-end gap-2 lg:items-center lg:gap-7'>
                <h2 className='text-6xl font-bold lg:text-8xl'>{project.id}</h2>
                <div>
                  <h3>{project.client}</h3>
                  <h2 className='text-2xl lg:text-5xl'>
                    <strong>{project.title}</strong>
                  </h2>
                </div>
              </div>
              <Link
                href={project.link}
                className='hidden rounded-xl border border-zinc-600 p-2 lg:block lg:rounded-2xl lg:p-5'
                target='_blank'
              >
                Live Preview
              </Link>
              <Link
                href={project.link}
                className='block rounded-full border border-zinc-600 p-2 lg:hidden lg:rounded-2xl lg:p-5'
                target='_blank'
              >
                <LuExternalLink className='text-3xl' />
              </Link>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 gap-4'>
              <div className='col-span-2 row-span-2'>
                <Image
                  src={project.images[0]}
                  alt='cover'
                  width={1000}
                  height={1000}
                  className='img rounded-lg lg:rounded-3xl'
                />
              </div>
              <div className='col-start-3'>
                <Image
                  src={project.images[1]}
                  alt='cover'
                  width={1000}
                  height={1000}
                  className='img rounded-lg lg:rounded-3xl'
                />
              </div>
              <div className='col-start-3 row-start-2'>
                <Image
                  src={project.images[2]}
                  alt='cover'
                  width={1000}
                  height={1000}
                  className='img rounded-lg lg:rounded-3xl'
                />
              </div>
            </div>
          </div>
        ))}
        <section className='sticky top-20 rounded-4xl bg-white'>
          <ContactSection />
        </section>
      </main>
    </section>
  );
};

export default ProjectsSection;
