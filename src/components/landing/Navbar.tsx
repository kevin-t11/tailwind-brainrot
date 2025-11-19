'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background/80 border-border/40 fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b px-6 py-4 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter">
          <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-full font-bold">
            V
          </div>
          ViralAI
        </Link>
      </div>

      <div className="hidden items-center gap-8 md:flex">
        <Link
          href="#features"
          className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">
          Features
        </Link>
        <Link
          href="#how-it-works"
          className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">
          How it Works
        </Link>
        <Link
          href="#testimonials"
          className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">
          Testimonials
        </Link>
        <Link
          href="#pricing"
          className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors">
          Pricing
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-muted-foreground hover:text-foreground hidden text-sm font-medium transition-colors md:block">
          Login
        </Link>
        <Button>Get Started</Button>
      </div>
    </motion.nav>
  );
};
