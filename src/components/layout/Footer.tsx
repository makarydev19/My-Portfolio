import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='px-3 pb-10 lg:px-24 lg:py-10'>
      <main className='flex flex-col items-start justify-between gap-y-5 lg:flex-row'>
        <div className='lg:w-1/4'>
          <h1 className='leading-16'>MAKARY YASSER</h1>
        </div>
        <div className='flex items-center justify-around gap-x-20 lg:w-2/5'>
          <div className='space-y-3'>
            <h4 className='text-xl font-bold uppercase'>Social</h4>
            <ul className='space-y-1'>
              <li>
                <Link href={'https://www.instagram.com/makarryyy/?__pwa=1'}>
                  GitHub
                </Link>
              </li>
              <li>
                <Link href={'https://www.instagram.com/makarryyy/?__pwa=1'}>
                  LinkidIn
                </Link>
              </li>
              <li>
                <Link href={'https://www.instagram.com/makarryyy/?__pwa=1'}>
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-3'>
            <h4 className='text-xl font-bold uppercase'>Contact</h4>
            <ul className='space-y-1'>
              <li>makarydev19@gmail.com</li>
              <li>makaryasser23@gmail.com</li>
              <li>+201555944812</li>
            </ul>
          </div>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
