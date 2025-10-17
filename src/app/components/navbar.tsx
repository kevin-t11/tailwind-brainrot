'use client';

import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  const navItems = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Contact',
      href: '/contact'
    }
  ];
  return (
    <nav className="bg-background/20 fixed top-0 left-1/2 z-50 mt-10 flex w-11/12 -translate-x-1/2 items-center justify-between rounded-full p-4 backdrop-blur-md">
      <div className="flex items-center gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-foreground/80 hover:text-foreground text-lg font-medium transition-colors duration-300">
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
