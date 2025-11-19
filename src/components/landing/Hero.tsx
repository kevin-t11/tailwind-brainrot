'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-secondary/50 border-secondary text-secondary-foreground mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Now tracking 1M+ viral videos
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="from-foreground to-foreground/70 mb-6 bg-gradient-to-b bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl">
            Stop Guessing. <br />
            Start Going <span className="text-primary">Viral.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mb-8 max-w-2xl text-lg md:text-xl">
            Discover winning content strategies in seconds, not hours. Analyze what works on TikTok
            & Reels and use AI to generate your next viral hit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-12 gap-2 px-8 text-base">
              Start for Free <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 gap-2 px-8 text-base">
              <PlayCircle className="size-4" /> Watch Demo
            </Button>
          </motion.div>

          {/* Hero Visual/Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="border-border bg-card group relative mt-16 aspect-video w-full max-w-5xl overflow-hidden rounded-xl border shadow-2xl">
            <div className="from-primary/5 absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-50" />

            {/* Fake UI Elements */}
            <div className="border-border bg-muted/30 absolute top-0 right-0 left-0 flex h-12 items-center gap-2 border-b px-4">
              <div className="flex gap-1.5">
                <div className="size-3 rounded-full bg-red-500/20" />
                <div className="size-3 rounded-full bg-yellow-500/20" />
                <div className="size-3 rounded-full bg-green-500/20" />
              </div>
              <div className="bg-muted/50 ml-4 h-6 w-64 rounded-md" />
            </div>

            <div className="grid h-full grid-cols-3 gap-4 p-8 pt-16">
              {/* Floating Elements with parallax or animation could go here */}
              <div className="col-span-2 space-y-4">
                <div className="bg-muted/30 h-32 animate-pulse rounded-lg" />
                <div className="bg-muted/30 h-32 animate-pulse rounded-lg delay-75" />
                <div className="bg-muted/30 h-32 animate-pulse rounded-lg delay-150" />
              </div>
              <div className="col-span-1 space-y-4">
                <div className="bg-primary/5 border-primary/10 h-full rounded-lg border p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <Zap className="size-5 text-yellow-500" />
                    <span className="text-sm font-bold">Viral Score</span>
                  </div>
                  <div className="text-primary mb-2 text-4xl font-bold">98/100</div>
                  <div className="text-muted-foreground text-xs">Predicted high engagement</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background gradients */}
      <div className="bg-primary/10 pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-[120px]" />
    </section>
  );
};
