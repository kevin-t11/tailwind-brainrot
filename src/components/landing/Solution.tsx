'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, BarChart3, Sparkles, Search } from 'lucide-react';

export const Solution = () => {
  const solutions = [
    {
      icon: Search,
      title: 'Multi-platform Discovery',
      description: 'Find viral content across TikTok & Instagram in seconds.'
    },
    {
      icon: BarChart3,
      title: 'Viral Scoring',
      description: 'Proprietary algorithms score content potential before you post.'
    },
    {
      icon: Sparkles,
      title: 'AI Script Generation',
      description: 'Turn viral concepts into your own unique scripts instantly.'
    },
    {
      icon: CheckCircle2,
      title: 'Proven Frameworks',
      description: 'Use structures that are statistically proven to hold retention.'
    }
  ];

  return (
    <section className="overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Data-driven decisions, <br />
              <span className="text-primary">not lucky guesses.</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Transform your content research workflow. What used to take hours of scrolling now
              takes minutes of strategic planning.
            </p>

            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4">
                  <div className="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                    <solution.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative">
            <div className="from-primary/20 absolute inset-0 rounded-full bg-gradient-to-r to-purple-500/20 opacity-50 blur-3xl" />
            <div className="bg-card border-border relative flex h-[500px] flex-col rounded-2xl border p-6 shadow-2xl">
              {/* Abstract UI representation of the solution */}
              <div className="border-border mb-6 flex items-center justify-between border-b pb-4">
                <div className="bg-muted h-4 w-32 rounded" />
                <div className="bg-primary/20 h-8 w-24 rounded" />
              </div>
              <div className="bg-muted/10 border-border flex flex-1 items-center justify-center rounded-lg border border-dashed">
                <span className="text-muted-foreground text-sm">
                  AI Generation Interface Preview
                </span>
              </div>
              <div className="mt-6 space-y-3">
                <div className="bg-muted h-2 w-full rounded" />
                <div className="bg-muted h-2 w-3/4 rounded" />
                <div className="bg-muted h-2 w-1/2 rounded" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
