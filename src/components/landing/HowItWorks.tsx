'use client';

import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description:
        'Search our database of millions of viral videos to find proven concepts in your niche.'
    },
    {
      number: '02',
      title: 'Analyze',
      description:
        'See exactly why a video went viral with our deep performance analytics and hook breakdown.'
    },
    {
      number: '03',
      title: 'Generate',
      description: 'Use our AI to rewrite the script for your brand and get ready to film.'
    }
  ];

  return (
    <section id="how-it-works" className="bg-muted/30 relative overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">How it works</h2>
          <p className="text-muted-foreground text-lg">
            Three simple steps to consistent viral content.
          </p>
        </div>

        <div className="relative z-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative">
              <div className="text-border/40 absolute -top-12 -left-4 -z-10 text-9xl font-bold select-none">
                {step.number}
              </div>
              <div className="pt-8">
                <h3 className="mb-4 text-2xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
