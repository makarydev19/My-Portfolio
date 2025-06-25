'use client';

import React from 'react';
// import ToggleTheme from '../Toggles/ToggleTheme'
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import { FloatingNav } from '../ui/floating-navbar';

const Header = () => {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IconHome className='size-5 text-neutral-500 dark:text-white' />,
    },
    {
      name: 'About',
      link: '/about',
      icon: <IconUser className='size-5 text-neutral-500 dark:text-white' />,
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: <IconMessage className='size-5 text-neutral-500 dark:text-white' />,
    },
  ];
  return (
    <header className='absolute z-50 block w-full lg:hidden'>
      <nav className='px-10 py-5'>
        <FloatingNav navItems={navItems} />
      </nav>
    </header>
  );
};

export default Header;
