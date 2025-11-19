'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="bg-primary/5 absolute inset-0 -z-10" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border-border mx-auto max-w-4xl rounded-3xl border p-12 text-center shadow-2xl">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Ready to go viral?</h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            Join the top 1% of creators who use data to dominate the algorithm. Start your free
            trial today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-12 w-full px-8 text-lg sm:w-auto">
              Get Started for Free <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 w-full px-8 text-lg sm:w-auto">
              View Pricing
            </Button>
          </div>
          <p className="text-muted-foreground mt-6 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};
